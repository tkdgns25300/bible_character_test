import { DIMENSIONS, POLES, TIE_BREAK } from "@/constants";
import { getTypeByCode } from "@/lib/queries";
import type { BibleType, Pole, TypeCode } from "@/types/domain";

// Single source for scoring (CLAUDE.md). Pure + deterministic: same answers ->
// same result. No I/O, no randomness. `selected` is the chosen pole for each
// answered question (docs/DATA.md).
export function scoreAnswers(selected: Pole[]): BibleType {
  const tally: Record<Pole, number> = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
  };
  for (const pole of selected) tally[pole] += 1;

  const code = DIMENSIONS.map((d) => {
    const [a, b] = POLES[d];
    if (tally[a] === tally[b]) return TIE_BREAK[d];
    return tally[a] > tally[b] ? a : b;
  }).join("") as TypeCode;

  return getTypeByCode(code);
}
