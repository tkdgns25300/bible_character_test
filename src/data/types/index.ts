import type { BibleType } from "@/types/domain";

// 16 personality-code -> Bible character mapping.
// Source: IVF 한국기독학생회 mapping, adopted as-is per project decision.
// Profile content (title/strengths/calling/verses/...) is authored + pastor-reviewed
// later (docs/DATA.md). Kept inline during scaffold; split into types/{id}.ts as
// content is authored, per DATA.md's file rule.
export const TYPES: BibleType[] = [
  { id: "noah", code: "INTJ", character: "Noah" },
  { id: "solomon", code: "INTP", character: "Solomon" },
  { id: "paul", code: "ENTJ", character: "Paul" },
  { id: "esther", code: "ENTP", character: "Esther" },
  { id: "jeremiah", code: "INFJ", character: "Jeremiah" },
  { id: "barnabas", code: "INFP", character: "Barnabas" },
  { id: "jonathan", code: "ENFJ", character: "Jonathan" },
  { id: "peter", code: "ENFP", character: "Peter" },
  { id: "luke", code: "ISTJ", character: "Luke" },
  { id: "mary", code: "ISFJ", character: "Mary" },
  { id: "deborah", code: "ESTJ", character: "Deborah" },
  { id: "david", code: "ESFJ", character: "David" },
  { id: "rahab", code: "ISTP", character: "Rahab" },
  { id: "adam", code: "ISFP", character: "Adam" },
  { id: "rebekah", code: "ESTP", character: "Rebekah" },
  { id: "jacob", code: "ESFP", character: "Jacob" },
];
