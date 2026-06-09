import type { Dimension, Pole, Question } from "@/types/domain";

// PLACEHOLDER question set — wording is provisional and NOT pastor-reviewed.
// 3 items per dimension (odd -> no ties). Real, reviewed items replace these
// during Phase 1 content work (docs/DATA.md).
const q = (
  id: string,
  dimension: Dimension,
  text: string,
  agree: Pole,
  disagree: Pole,
): Question => ({
  id,
  dimension,
  text,
  options: [
    { text: "Agree", pole: agree },
    { text: "Disagree", pole: disagree },
  ],
});

export const QUESTIONS: Question[] = [
  q("q-01", "EI", "When I feel something deeply, I express it openly rather than keeping it in.", "E", "I"),
  q("q-02", "EI", "I recharge by being around people more than by being alone.", "E", "I"),
  q("q-03", "EI", "I tend to think out loud rather than work things out quietly inside.", "E", "I"),
  q("q-04", "SN", "I trust concrete facts and experience over hunches about what could be.", "S", "N"),
  q("q-05", "SN", "I pay attention to present realities more than future possibilities.", "S", "N"),
  q("q-06", "SN", "I notice the practical details before I notice the big picture.", "S", "N"),
  q("q-07", "TF", "I make decisions more with my head than with my heart.", "T", "F"),
  q("q-08", "TF", "Being fair and consistent matters more to me than keeping everyone happy.", "T", "F"),
  q("q-09", "TF", "I value honest truth over gentle harmony.", "T", "F"),
  q("q-10", "JP", "I prefer a clear plan over keeping my options open.", "J", "P"),
  q("q-11", "JP", "I like things decided and settled rather than loose and spontaneous.", "J", "P"),
  q("q-12", "JP", "I work steadily ahead of deadlines rather than in a last-minute push.", "J", "P"),
];
