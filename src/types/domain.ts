// Domain types — docs/DATA.md is the single source for the data model.

export type Dimension = "EI" | "SN" | "TF" | "JP";
export type Pole = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
export type TypeCode = `${"E" | "I"}${"S" | "N"}${"T" | "F"}${"J" | "P"}`; // 16

export interface QuestionOption {
  text: string;
  pole: Pole; // must belong to the question's dimension (invariant — docs/DATA.md)
}

export interface Question {
  id: string; // kebab, e.g. 'q-01'
  dimension: Dimension;
  text: string;
  options: QuestionOption[]; // binary agree/disagree (MVP)
}

export interface Verse {
  ref: string; // e.g. 'Psalm 23:1'
  text: string;
  translation: string; // public-domain (e.g. 'WEB')
}

export interface BookRec {
  title: string;
  author: string;
  amazonUrl: string;
}

export interface BibleType {
  id: string; // kebab slug = route, e.g. 'david'
  code: TypeCode; // internal; never surfaced in copy (no "MBTI")
  character: string;

  // Profile content — authored + pastor-reviewed before publish (docs/DATA.md).
  // Optional so pre-review stubs are representable; reviewedBy gates publish.
  title?: string;
  tagline?: string;
  summary?: string;
  strengths?: string[];
  weaknesses?: string[];
  calling?: string;
  verses?: Verse[];
  books?: BookRec[];

  accent?: string; // per-type accent (hex) — data, not a global token
  accentInk?: string;
  icon?: string; // lucide icon name
  related?: string[]; // related type ids (growth/kin)
  reviewedBy?: string; // e.g. 'pastor-2026-06'; unset = not yet publishable
}
