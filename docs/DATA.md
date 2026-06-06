# Bible Character Test — 데이터·채점·검수 (DATA)

> 페이지 명세는 [`SPEC.md`](./SPEC.md), 아키텍처는 [`../CLAUDE.md`](../CLAUDE.md). 이 파일은 **콘텐츠 타입·채점 규칙·파일 규칙·신학 검수**의 단일 진실. (DB가 없으므로 참고 프로젝트의 SCHEMA 자리를 대신한다.)

## 데이터 철학

- **데이터는 코드다.** 질문·16유형은 `src/data/**`의 TypeScript 파일. 빌드 시 번들에 포함되어 정적 생성된다.
- **신학 검수가 게이트.** 질문·유형 매핑·소명·구절은 발행 전 검수 통과 필수 (아래 §신학 검수).

## 타입 (`src/types/domain.ts`)

```ts
export type Dimension = 'EI' | 'SN' | 'TF' | 'JP'
export type Pole = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'
export type TypeCode = `${'E' | 'I'}${'S' | 'N'}${'T' | 'F'}${'J' | 'P'}`  // 16가지

export interface QuestionOption {
  text: string          // 영어 진술
  pole: Pole            // 이 응답이 기우는 극
}

export interface Question {
  id: string            // kebab, 예: 'q-01'
  dimension: Dimension
  text: string          // 영어 진술문
  options: QuestionOption[]   // MVP는 동의/비동의 2개(이진). 강도가 필요하면 weight 추가
}

export interface Verse {
  ref: string           // 예: 'Psalm 23:1'
  text: string
  translation: string   // 퍼블릭도메인 번역본 (예: 'WEB')
}

export interface BookRec {
  title: string
  author: string
  amazonUrl: string     // Amazon Associates 태그 포함
}

export interface BibleType {
  id: string            // kebab = 인물 slug = 라우트, 예: 'david'
  code: TypeCode        // 'ESFP' 등 (내부용. 사이트 카피는 MBTI 미사용 — SPEC)
  character: string     // 'David'
  title: string         // 'The Worshiping Warrior'
  tagline: string
  summary: string
  strengths: string[]
  weaknesses: string[]
  calling: string       // 영적 소명
  verses: Verse[]
  books: BookRec[]      // Amazon (Phase 1)
  podRef?: string       // POD 디자인 참조
  reviewedBy?: string   // 검수 표시, 예: 'pastor-2026-06' (없으면 미검수 = 발행 불가)
}
```

> **불변식**: 옵션 `pole`은 그 질문의 `dimension`에 속하는 극이어야 한다 (스캐폴딩 시 타입/빌드로 강제).

## 채점 규칙 (`lib/scoring.ts` 단일 정의)

- 응답을 축별(EI·SN·TF·JP)로 집계 → 우세 극 4개 = `TypeCode` → `code`가 일치하는 `BibleType`를 찾아 그 `id`로 `/types/[type]` 라우팅
- **동점 방지**: 축당 문항 수를 **홀수**로 설계(권장), 또는 명시적 tie-break(예: I·N·F·P 우선) — 규칙을 코드 주석과 이 문서에 동시 명시
- 순수·결정적 함수. 같은 응답 → 같은 결과. 외부 I/O·랜덤 없음

## 파일 규칙

```
src/data/
├── questions.ts            export const QUESTIONS: Question[]
└── types/
    ├── {type-id}.ts         export const david: BibleType = { ... }
    └── index.ts             export const TYPES: BibleType[]   (16개 취합, 로직 X)

public/images/types/{type-id}.*   유형 대표(히어로) 이미지 — 선택. 공유 OG 카드는 opengraph-image.tsx가 생성 (직접 제작·라이선스분만)
```

- id·파일명·이미지명·라우트는 모두 **영어 kebab-case로 일치** (한글 금지 — URL 인코딩 방지)
- 16 유형을 전부 채워야 채점이 완성된다 (누락 `TypeCode`는 빌드 타임 점검 권장)
- `index.ts`는 개별 파일을 import해 배열로 취합만 한다 (로직 X)

## 신학 검수 (차별점 — 생략 금지)

- **검수 대상**: 질문 문항, 16 유형 ↔ 인물 매핑, 강점·약점·소명, 추천 구절
- **절차**: AI 1차 생성 → **아버지(목사) 검수** → `reviewedBy` 채움 → 발행. 미검수 항목은 노출 금지
- **체크 포인트**: 교리 정확성, 인물 해석의 성경적 근거, 이단성 회피, 특정 교단 편향 최소화
- (정식 체크리스트는 콘텐츠 작업 착수 시 확장)

## 성경 구절 · 저작권

- **MVP는 퍼블릭도메인 번역본만 인용.** **WEB을 기본**으로 (전 세계 PD·현대 영어). ASV도 PD. KJV는 미국 PD지만 **영국은 Crown copyright**라 영어권(UK 포함) 노출 시 주의. NIV · ESV 등 유료/허가 번역본은 라이선스 전까지 사용 금지
- 각 `Verse.translation`에 번역본을 명시. 재호스팅이 아니라 출처 표기 인용

## 16유형 매핑 (미정 — 사용자 + 검수)

- 16 `TypeCode` ↔ 성경 인물 매핑 초안은 **별도 작성 → 아버지 검수**. 인물 해석은 임의로 단정하지 않고 성경 본문 근거로
- 콘텐츠 값(강점·구절 등)은 확정되는 대로 입력. 타입·파일 규칙은 위 고정
