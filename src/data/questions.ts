import type { Dimension, Pole, Question } from "@/types/domain";

// Original two-choice questions — our own wording (not from any external test).
// 5 per dimension (odd -> no ties). Provisional; tone/wording may be refined.
const q = (
  id: string,
  dimension: Dimension,
  text: string,
  a: [string, Pole],
  b: [string, Pole],
): Question => ({
  id,
  dimension,
  text,
  options: [
    { text: a[0], pole: a[1] },
    { text: b[0], pole: b[1] },
  ],
});

export const QUESTIONS: Question[] = [
  // E / I
  q("q-01", "EI", "After a long week, you'd rather…", ["Go out and be with people", "E"], ["Stay in for quiet time", "I"]),
  q("q-02", "EI", "In a group conversation, you usually…", ["Jump in and think out loud", "E"], ["Listen first, speak when ready", "I"]),
  q("q-03", "EI", "You get your energy from…", ["Being around others", "E"], ["Spending time alone", "I"]),
  q("q-04", "EI", "Meeting new people feels…", ["Exciting and easy", "E"], ["Nice, but a little draining", "I"]),
  q("q-05", "EI", "When something's on your mind, you…", ["Talk it through with someone", "E"], ["Work it out inside first", "I"]),

  // S / N
  q("q-06", "SN", "You trust more…", ["Concrete, proven facts", "S"], ["Patterns and possibilities", "N"]),
  q("q-07", "SN", "You pay more attention to…", ["The details in front of you", "S"], ["The big picture and meaning", "N"]),
  q("q-08", "SN", "You'd rather a plan be…", ["Practical and realistic", "S"], ["Imaginative and open-ended", "N"]),
  q("q-09", "SN", "You focus more on…", ["The present and what's real now", "S"], ["The future and what could be", "N"]),
  q("q-10", "SN", "When learning, you prefer…", ["The step-by-step facts", "S"], ["The idea behind it all", "N"]),

  // T / F
  q("q-11", "TF", "When deciding, you lean on…", ["Logic and consistency", "T"], ["People and values", "F"]),
  q("q-12", "TF", "It matters more to be…", ["Fair and honest", "T"], ["Kind and caring", "F"]),
  q("q-13", "TF", "In a disagreement, you focus on…", ["What's true and right", "T"], ["How everyone feels", "F"]),
  q("q-14", "TF", "You'd rather someone be…", ["Straight with you, even if it stings", "T"], ["Gentle, even if softened", "F"]),
  q("q-15", "TF", "You're more moved by…", ["A solid argument", "T"], ["A heartfelt story", "F"]),

  // J / P
  q("q-16", "JP", "You feel better when things are…", ["Planned and settled", "J"], ["Open and flexible", "P"]),
  q("q-17", "JP", "You'd rather…", ["Decide and move on", "J"], ["Keep your options open", "P"]),
  q("q-18", "JP", "Your days run best with…", ["A clear schedule", "J"], ["Room to go with the flow", "P"]),
  q("q-19", "JP", "With deadlines, you…", ["Finish well ahead", "J"], ["Rush at the last minute", "P"]),
  q("q-20", "JP", "A surprise change of plans feels…", ["Stressful", "J"], ["Fun", "P"]),
];
