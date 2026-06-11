import { TYPES } from "@/data/types";
import type { BibleType, TypeCode } from "@/types/domain";

// Pure reads over src/data/** (data is code). No external I/O.

export function getAllTypes(): BibleType[] {
  return TYPES;
}

export function getTypeById(id: string): BibleType | undefined {
  return TYPES.find((t) => t.id === id);
}

export function getTypeByCode(code: TypeCode): BibleType {
  const type = TYPES.find((t) => t.code === code);
  if (!type) throw new Error(`No Bible type mapped for code "${code}"`);
  return type;
}

// Avatar path convention for a type id (see public/images/types/).
export function typeImageSrc(id: string): string {
  return `/images/types/${id}.png`;
}
