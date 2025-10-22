// src/utils/timeline.ts
export type Item = { year: string; title: string; desc?: string };

/**
 * Gère:
 * - "2025"
 * - "2024 – 2025" / "2024-2025"
 * - "2023 - Aujourd'hui" / "2023 – présent"
 * - "Janvier - Février 2024"
 * - "Juin 2023"
 */
const PRESENT_SENTINEL_YEAR = 9999;
const PRESENT_SENTINEL = PRESENT_SENTINEL_YEAR * 12 + 12; // borne très haute

const MONTHS_FR: Record<string, number> = {
  janvier: 1, fevrier: 2, février: 2, mars: 3, avril: 4, mai: 5, juin: 6,
  juillet: 7, aout: 8, août: 8, septembre: 9, octobre: 10, novembre: 11,
  decembre: 12, décembre: 12,
};

// retire les diacritiques pour matcher "fevrier"/"février", "aout"/"août"
function stripDiacritics(s: string) {
  return s.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

function tokenIsPresent(raw: string): boolean {
  const t = raw.trim().toLowerCase();
  return /(présent|present|aujourd’hui|aujourd'hui|ongoing|\+)$/.test(t);
}

function extractYear(raw: string): number | undefined {
  const m = raw.match(/(\d{4})/);
  if (!m) return undefined;
  const y = parseInt(m[1], 10);
  return y >= 1900 && y <= 9999 ? y : undefined;
}

function extractMonth(raw: string): number | undefined {
  const lower = raw.trim().toLowerCase();
  const plain = stripDiacritics(lower);
  const words = plain.split(/[\s,.;:/\\-]+/); // mots “propres”
  for (const w of words) {
    if (w in MONTHS_FR) return MONTHS_FR[w];
  }
  return undefined;
}

function toAbsMonth(year: number, month: number) {
  return year * 12 + month;
}

type Parsed = { start: number; end: number };

function parseYearMonthRange(input: string): Parsed {
  const parts = input.split(/\s*[–—-]\s*/);

  if (parts.length === 1 && tokenIsPresent(parts[0])) {
    return { start: PRESENT_SENTINEL, end: PRESENT_SENTINEL };
  }

  if (parts.length === 1) {
    const y = extractYear(parts[0]);
    const m = extractMonth(parts[0]);
    if (y && m) {
      const abs = toAbsMonth(y, m);
      return { start: abs, end: abs };
    }
    if (y) {
      return { start: toAbsMonth(y, 1), end: toAbsMonth(y, 12) };
    }
    return { start: 0, end: 0 };
  }

  // Range: left - right (support "a - b - c" en recollant la droite)
  const [leftRaw, rightRaw] = [parts[0], parts.slice(1).join(' - ')];

  if (tokenIsPresent(rightRaw)) {
    const ly = extractYear(leftRaw);
    const lm = extractMonth(leftRaw);
    const start = ly ? toAbsMonth(ly, lm ?? 1) : 0;
    return { start, end: PRESENT_SENTINEL };
  } else {
    const ry = extractYear(rightRaw);
    const rm = extractMonth(rightRaw);

    let ly = extractYear(leftRaw);
    const lm = extractMonth(leftRaw);
    if (!ly && ry) ly = ry; // "Janvier - Février 2024" => gauche=2024

    let start = 0;
    let end = 0;

    if (ly) start = toAbsMonth(ly, lm ?? 1);
    if (ry) end = toAbsMonth(ry, rm ?? 12);

    if (!ly && ry) start = toAbsMonth(ry, 1);
    if (ly && !ry) end = toAbsMonth(ly, lm ? lm : 12);

    if (start === 0 && end === 0) return { start: 0, end: 0 };
    if (start > end) [start, end] = [end, start];

    return { start, end };
  }
}

/**
 * Trie:
 * 1) Tous les “en cours” (end == PRESENT_SENTINEL) en tête,
 *    triés par start DESC (début le plus récent en premier)
 * 2) Puis les autres: end DESC, start DESC, title ASC
 */
export function sortTimeline(items: Item[], order: 'desc' | 'asc' = 'desc'): Item[] {
  const sign = order === 'desc' ? 1 : -1;

  return [...items].sort((a, b) => {
    const ra = parseYearMonthRange(a.year);
    const rb = parseYearMonthRange(b.year);

    const aOngoing = ra.end === PRESENT_SENTINEL;
    const bOngoing = rb.end === PRESENT_SENTINEL;

    // Groupe "en cours" d'abord (en 'desc'); inverse en 'asc'
    if (aOngoing !== bOngoing) {
      return aOngoing ? -1 * sign : 1 * sign;
    }

    // À l'intérieur du groupe "en cours": start DESC (ou ASC si demandé)
    if (aOngoing && bOngoing) {
      if (ra.start !== rb.start) return (rb.start - ra.start) * sign;
      return a.title.localeCompare(b.title) * (order === 'desc' ? -1 : 1);
    }

    // Reste (non en cours): end DESC, start DESC, title ASC
    if (ra.end !== rb.end) return (rb.end - ra.end) * sign;
    if (ra.start !== rb.start) return (rb.start - ra.start) * sign;
    return a.title.localeCompare(b.title) * (order === 'desc' ? -1 : 1);
  });
}
