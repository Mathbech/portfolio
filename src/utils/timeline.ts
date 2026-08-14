export type Item = { year: string; title: string; desc?: string }

/**
 * Gère:
 * - "2025"
 * - "2024 – 2025" / "2024-2025"
 * - "2023 - Aujourd'hui" / "2023 – présent"
 * - "Janvier - Février 2024"
 * - "Juin 2023"
 */
const PRESENT_SENTINEL = 9999 * 12 + 12
const RANGE_SEPARATOR = /\s*[–—-]\s*/

const MONTHS_FR: Record<string, number> = {
  janvier: 1,
  fevrier: 2,
  février: 2,
  mars: 3,
  avril: 4,
  mai: 5,
  juin: 6,
  juillet: 7,
  aout: 8,
  août: 8,
  septembre: 9,
  octobre: 10,
  novembre: 11,
  decembre: 12,
  décembre: 12,
}

function stripDiacritics(s: string) {
  return s.normalize('NFD').replaceAll(/\p{Diacritic}/gu, '')
}

function tokenIsPresent(raw: string): boolean {
  const t = raw.trim().toLowerCase()
  return /(présent|present|aujourd'hui|aujourd'hui|ongoing|\+)$/.test(t)
}

function extractYear(raw: string): number | undefined {
  const m = raw.match(/(\d{4})/)
  if (!m) return undefined
  const y = parseInt(m[1], 10)
  return y >= 1900 && y <= 9999 ? y : undefined
}

function extractMonth(raw: string): number | undefined {
  const lower = raw.trim().toLowerCase()
  const plain = stripDiacritics(lower)
  const words = plain.split(/[\s,.;:/\\-]+/)
  for (const w of words) {
    if (w in MONTHS_FR) return MONTHS_FR[w]
  }
  return undefined
}

/**
 * Extrait un jour du mois si présent (ex. "12 juin 2023"). Retourne undefined
 * si aucun jour explicite n'est trouvé (cas courant : "Juin 2023", "2023").
 */
function extractDay(raw: string): number | undefined {
  const plain = stripDiacritics(raw.trim().toLowerCase())
  const monthNames = Object.keys(MONTHS_FR).join('|')
  const m = new RegExp(String.raw`\b(\d{1,2})\s+(?:${monthNames})\b`).exec(plain)
  if (!m) return undefined
  const d = parseInt(m[1], 10)
  return d >= 1 && d <= 31 ? d : undefined
}

function lastDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

type DatePoint = { date: Date; hasDay: boolean }

/**
 * Construit une date pour une borne de période. Quand le jour n'est pas
 * explicite, la borne de fin pointe sur le 1er jour du mois SUIVANT (borne
 * exclusive), pour que "Juin 2023" ou "2023" couvrent bien le mois/l'année
 * entier·ère dans le calcul de durée.
 */
function parseDatePoint(raw: string, position: 'start' | 'end'): DatePoint | undefined {
  const year = extractYear(raw)
  if (!year) return undefined
  const month = extractMonth(raw) ?? (position === 'start' ? 1 : 12)
  const day = extractDay(raw)
  if (day !== undefined) return { date: new Date(year, month - 1, day), hasDay: true }
  const monthIndex = position === 'start' ? month - 1 : month
  return { date: new Date(year, monthIndex, 1), hasDay: false }
}

/**
 * Calcule la durée d'une période au format "year" (ex. "12 juin 2023 - 20 juin 2023",
 * "2023 - Aujourd'hui"). Retourne undefined si la période ne peut pas être
 * déterminée (pas d'année identifiable).
 */
export function parseDurationRange(input: string): { start: Date; end: Date } | undefined {
  const parts = input.split(RANGE_SEPARATOR)

  if (parts.length === 1) {
    if (tokenIsPresent(parts[0])) return undefined
    const start = parseDatePoint(parts[0], 'start')
    const end = parseDatePoint(parts[0], 'end')
    if (!start || !end) return undefined
    return { start: start.date, end: end.date }
  }

  const [leftRaw, rightRaw] = [parts[0], parts.slice(1).join(' - ')]

  if (tokenIsPresent(rightRaw)) {
    const startPoint = parseDatePoint(leftRaw, 'start')
    if (!startPoint) return undefined
    return { start: startPoint.date, end: new Date() }
  }

  const rightYear = extractYear(rightRaw)
  const leftYear = extractYear(leftRaw) ?? rightYear
  if (!leftYear) return undefined

  const leftRawWithYear = extractYear(leftRaw) ? leftRaw : `${leftRaw} ${leftYear}`
  const rightRawWithYear = rightYear ? rightRaw : `${rightRaw} ${leftYear}`

  const startPoint = parseDatePoint(leftRawWithYear, 'start')
  const endPoint = parseDatePoint(rightRawWithYear, 'end')

  if (!startPoint || !endPoint) return undefined
  if (startPoint.date > endPoint.date) return { start: endPoint.date, end: startPoint.date }
  return { start: startPoint.date, end: endPoint.date }
}

/**
 * Formate une durée en "X an(s) Y mois", "X mois Y jour(s)" ou "X jour(s)" en
 * ne gardant que les deux unités les plus significatives. Retourne undefined
 * si la durée est nulle ou indéterminable.
 */
export function formatDuration(year: string): string | undefined {
  const range = parseDurationRange(year)
  if (!range) return undefined

  let { start, end } = range
  if (start > end) [start, end] = [end, start]

  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()
  let days = end.getDate() - start.getDate()

  if (days < 0) {
    months -= 1
    days += lastDayOfMonth(end.getFullYear(), end.getMonth())
  }
  if (months < 0) {
    years -= 1
    months += 12
  }

  const units: [number, string][] = [
    [years, years > 1 ? 'ans' : 'an'],
    [months, 'mois'],
    [days, days > 1 ? 'jours' : 'jour'],
  ]

  const nonZero = units.filter(([value]) => value > 0)
  if (nonZero.length === 0) return undefined

  return nonZero
    .slice(0, 2)
    .map(([value, label]) => `${value} ${label}`)
    .join(' ')
}

function toAbsMonth(year: number, month: number) {
  return year * 12 + month
}

type Parsed = { start: number; end: number }

function parseYearMonthRange(input: string): Parsed {
  const parts = input.split(RANGE_SEPARATOR)

  if (parts.length === 1 && tokenIsPresent(parts[0])) {
    return { start: PRESENT_SENTINEL, end: PRESENT_SENTINEL }
  }

  if (parts.length === 1) {
    const y = extractYear(parts[0])
    const m = extractMonth(parts[0])
    if (y && m) {
      const abs = toAbsMonth(y, m)
      return { start: abs, end: abs }
    }
    if (y) {
      return { start: toAbsMonth(y, 1), end: toAbsMonth(y, 12) }
    }
    return { start: 0, end: 0 }
  }

  const [leftRaw, rightRaw] = [parts[0], parts.slice(1).join(' - ')]

  if (tokenIsPresent(rightRaw)) {
    const ly = extractYear(leftRaw)
    const lm = extractMonth(leftRaw)
    const start = ly ? toAbsMonth(ly, lm ?? 1) : 0
    return { start, end: PRESENT_SENTINEL }
  } else {
    const ry = extractYear(rightRaw)
    const rm = extractMonth(rightRaw)

    let ly = extractYear(leftRaw)
    const lm = extractMonth(leftRaw)
    if (!ly && ry) ly = ry

    let start = 0
    let end = 0

    if (ly) start = toAbsMonth(ly, lm ?? 1)
    if (ry) end = toAbsMonth(ry, rm ?? 12)

    if (!ly && ry) start = toAbsMonth(ry, 1)
    if (ly && !ry) end = toAbsMonth(ly, lm || 12)

    if (start === 0 && end === 0) return { start: 0, end: 0 }
    if (start > end) [start, end] = [end, start]

    return { start, end }
  }
}

/**
 * Tri DESC : "en cours" en tête (par start DESC), puis les autres (end DESC, start DESC, title ASC)
 */
export function sortTimeline(items: Item[]): Item[] {
  return [...items].sort((a, b) => {
    const ra = parseYearMonthRange(a.year)
    const rb = parseYearMonthRange(b.year)

    const aOngoing = ra.end === PRESENT_SENTINEL
    const bOngoing = rb.end === PRESENT_SENTINEL

    if (aOngoing !== bOngoing) {
      return aOngoing ? -1 : 1
    }

    if (aOngoing && bOngoing) {
      if (ra.start !== rb.start) return rb.start - ra.start
      return -a.title.localeCompare(b.title)
    }

    if (ra.end !== rb.end) return rb.end - ra.end
    if (ra.start !== rb.start) return rb.start - ra.start
    return -a.title.localeCompare(b.title)
  })
}
