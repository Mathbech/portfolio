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

function toAbsMonth(year: number, month: number) {
  return year * 12 + month
}

type Parsed = { start: number; end: number }

function parseYearMonthRange(input: string): Parsed {
  const parts = input.split(/\s*[–—-]\s*/)

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
