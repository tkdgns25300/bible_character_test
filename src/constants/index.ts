import type { Dimension, Pole } from "@/types/domain";

export const DIMENSIONS: Dimension[] = ["EI", "SN", "TF", "JP"];

// The two poles of each dimension, in code order (first letter, then second).
export const POLES: Record<Dimension, [Pole, Pole]> = {
  EI: ["E", "I"],
  SN: ["S", "N"],
  TF: ["T", "F"],
  JP: ["J", "P"],
};

// Explicit exact-tie winner per dimension. Author an ODD number of questions
// per dimension so ties never occur; this is the documented fallback (DATA.md).
export const TIE_BREAK: Record<Dimension, Pole> = {
  EI: "I",
  SN: "N",
  TF: "F",
  JP: "P",
};
