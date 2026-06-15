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

  // Profile content — authored from source + pastor-reviewed (docs/DATA.md).
  // Optional so pre-content stubs are representable.
  title?: string; // e.g. "The Long-view Strategist"
  traits?: string[]; // 3-4 keyword chips
  summary?: string;
  lines?: string[]; // punchy one-line descriptions (strengths + quirks mixed)
  calling?: string; // spiritual calling/gift — our depth differentiator
  giftName?: string; // short gift label, e.g. "Service & care"
  prayer?: string; // a short, in-character prayer
  verses?: Verse[]; // public-domain translation
  readingRef?: string; // where to read more, e.g. "Genesis 6"
  bestMatch?: string; // "best match" type id
  worstMatch?: string; // "toughest match" type id

  accent?: string; // per-type accent (hex) — data, not a global token
  accentInk?: string;
  icon?: string; // lucide icon name
  books?: BookRec[];
  reviewedBy?: string; // e.g. 'pastor-2026-06'; unset = not yet publishable
}
