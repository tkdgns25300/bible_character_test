import type { Dimension, Pole, Question } from "@/types/domain";

// Original two-choice questions — our own wording (not from any external test).
// 5 per dimension (odd -> no ties). Plain, intuitive wording; balanced options.
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
  q("q-01", "EI", "After a long day, you'd rather…", ["Go out with people", "E"], ["Stay in on your own", "I"]),
  q("q-02", "EI", "When something's on your mind, you…", ["Talk it over with someone", "E"], ["Work through it on your own", "I"]),
  q("q-03", "EI", "People would describe you as more…", ["Outgoing", "E"], ["Reserved", "I"]),
  q("q-04", "EI", "You'd have more fun at…", ["A big party", "E"], ["A small gathering with close friends", "I"]),
  q("q-05", "EI", "Meeting new people feels…", ["Easy and fun", "E"], ["Nice, but draining", "I"]),

  // S / N
  q("q-06", "SN", "You trust more…", ["Facts and proof", "S"], ["Patterns and possibilities", "N"]),
  q("q-07", "SN", "You tend to notice…", ["The details", "S"], ["The big picture", "N"]),
  q("q-08", "SN", "You'd rather be called…", ["Practical", "S"], ["Imaginative", "N"]),
  q("q-09", "SN", "You think more about…", ["What's real right now", "S"], ["What could be in the future", "N"]),
  q("q-10", "SN", "When learning something, you prefer…", ["Step-by-step facts", "S"], ["The big idea behind it", "N"]),

  // T / F
  q("q-11", "TF", "When you decide, you go with…", ["Your head", "T"], ["Your heart", "F"]),
  q("q-12", "TF", "It matters more to be…", ["Fair", "T"], ["Kind", "F"]),
  q("q-13", "TF", "In a disagreement, you focus on…", ["What's right", "T"], ["How everyone feels", "F"]),
  q("q-14", "TF", "You'd rather people be…", ["Direct and honest", "T"], ["Gentle and tactful", "F"]),
  q("q-15", "TF", "You're more convinced by…", ["A logical reason", "T"], ["A personal story", "F"]),

  // J / P
  q("q-16", "JP", "You feel better when things are…", ["Planned and settled", "J"], ["Open and flexible", "P"]),
  q("q-17", "JP", "You'd rather…", ["Make a plan and stick to it", "J"], ["Keep your options open", "P"]),
  q("q-18", "JP", "Day to day, you prefer to…", ["Follow a routine", "J"], ["Go with the flow", "P"]),
  q("q-19", "JP", "With a deadline, you…", ["Finish ahead of time", "J"], ["Work best as it gets close", "P"]),
  q("q-20", "JP", "A last-minute change of plans is…", ["Unsettling", "J"], ["Exciting", "P"]),
];
