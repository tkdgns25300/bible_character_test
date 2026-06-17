# CLAUDE.md — Bible Character Test

> **이 파일은 HOW** — 아키텍처·코드 컨벤션·Git 워크플로. 페이지·기능은 [`docs/SPEC.md`](./docs/SPEC.md), 데이터·채점은 [`docs/DATA.md`](./docs/DATA.md), 작업 순서는 [`docs/ROADMAP.md`](./docs/ROADMAP.md), 비주얼·브랜드는 [`docs/DESIGN_BRIEF.md`](./docs/DESIGN_BRIEF.md), 시점 핸드오프(현재 상태)는 [`docs/SNAPSHOT.md`](./docs/SNAPSHOT.md), 환경·셋업은 [`README.md`](./README.md). 상위 사업 전략은 `~/Desktop/bible-personality-test-PROJECT.md`.
>
> **문서 책임 분리** — 같은 사실을 두 곳에 쓰지 않는다. 아키텍처·컨벤션은 여기, 페이지 명세는 SPEC, 데이터·채점은 DATA, 작업은 ROADMAP, 비주얼·브랜드는 DESIGN_BRIEF, 환경은 README.

## Project

영어권 "성경 인물 성격 테스트" 정적 사이트. 질문에 답하면 4축(E/I·S/N·T/F·J/P) 성향을 16유형으로 집계하고, 각 유형에 매핑된 성경 인물(다윗·다니엘·마리아 등)과 강점·약점·영적 소명·추천 구절을 보여준다. **차별점 = 신학적으로 정확하면서 공유하고 싶은 결과.** 성장 = SEO + 결과 공유 바이럴.

**Stack**: Next.js (App Router, SSG) · React · TypeScript strict · Tailwind v4 (+ shadcn for complex primitives) · Vercel · npm

> 버전은 스캐폴딩 시 확정. 공통 인프라 재사용 시 worshipers와 정렬 (Next.js 16 · React 19 · Tailwind v4).

## Architecture Overview

### 핵심 결정: DB 없는 파일 기반 정적 사이트

질문·16유형 콘텐츠는 외부 데이터소스가 아니라 **`src/data/**`의 TypeScript 모듈**이다. 빌드 시 번들에 포함되어 페이지가 완전히 정적 생성된다.

- **DB·Auth·서버 mutation 없음.** 콘텐츠는 코드다. 갱신 = 파일 편집 → push → 자동 재배포.
- **이메일만** 외부 서비스에 위임 — 수집·리스트는 ConvertKit/Beehiiv, 발송은 Resend. 자체 DB 불필요. (PROJECT.md의 "Supabase/SQLite"는 MVP에선 쓰지 않는다.)

### 채점 — 유일한 동적 로직

테스트 응답 → 4축 집계 → 4글자 코드 → 16 인물 매핑. **전부 `lib/scoring.ts` 단일 순수 함수**에서 한다. 채점은 **클라이언트에서** 계산(서버 라운드트립·DB 불필요). 동점 방지 규칙은 DATA.md. 채점 로직을 컴포넌트에 흩지 않는다.

테스트 완료 → 해당 유형의 **정적 페이지 `/types/[type]`로 이동**. 결과 페이지는 16개가 사전 생성된 공유·SEO 표면이다 (별도 동적 result 라우트 없음).

### SEO + 공유 바이럴 (성장 엔진)

검색 유입과 결과 공유가 트래픽의 핵심. 모든 페이지는:

- `generateMetadata`로 title·description·Open Graph 설정
- 16 유형 페이지 = `generateStaticParams` 전수 prerender + JSON-LD(`Article`/`CreativeWork` — 성격결과 전용 스키마 없어 잠정) + **유형별 동적 OG 이미지**(`opengraph-image.tsx`) — 인스타·트위터 공유 카드
- `app/sitemap.ts`·`app/robots.ts`로 sitemap·robots 생성, `<html lang="en">`

## Directory

```
src/
├── app/
│   ├── layout.tsx              root (폰트·메타·애널리틱스)
│   ├── page.tsx                랜딩 — 훅 + 테스트 시작 CTA (SSG)
│   ├── test/page.tsx           질문 플로 ("use client", 진행바)
│   ├── types/page.tsx          16유형 디렉토리 (SEO 브라우즈)
│   ├── types/[type]/
│   │   ├── page.tsx            유형(=결과) 페이지 (generateStaticParams + JSON-LD)
│   │   └── opengraph-image.tsx 유형별 동적 공유 카드
│   ├── about/page.tsx
│   ├── privacy/page.tsx
│   ├── sitemap.ts · robots.ts  SEO
│   └── globals.css
├── components/
│   ├── layout/                 헤더·푸터·네비
│   ├── test/                   질문 카드·진행바·옵션 버튼
│   ├── result/                 강점·약점·소명·구절 블록 · 공유 버튼
│   ├── monetize/               이메일 폼·Amazon 도서·POD·후원 · (Phase2) 광고 슬롯
│   └── ui/                     shadcn 원본
├── data/                       콘텐츠 (DATA.md가 단일 진실)
│   ├── questions.ts            Question[]
│   └── types/{type-id}.ts + index.ts   BibleType (인물별)
├── lib/
│   ├── scoring.ts              응답 → 4글자 코드 → BibleType (단일 정의)
│   ├── queries.ts              data/**를 읽어 유형 조회 (순수)
│   ├── seo.ts                  JSON-LD·메타 헬퍼
│   └── utils.ts                cn 등
├── constants/                  DIMENSIONS·후원/POD 링크 등 도메인 상수
└── types/domain.ts             Question·BibleType·Dimension 타입 (DATA.md와 일치)

public/images/types/{type-id}.*   유형 대표(히어로) 이미지 — 선택. 공유 OG 카드는 opengraph-image.tsx가 생성 (직접 제작·라이선스분만)
```

## Layer Responsibilities

### Page (`app/**/page.tsx`)
- **조합만** 한다. 채점·조회는 `lib/scoring.ts`/`lib/queries.ts`에 위임.
- 동적 segment(`types/[type]`)는 `generateStaticParams` 전수 생성 + `generateMetadata` + JSON-LD + OG 이미지.
- 인터랙티브한 테스트 플로(`/test`)만 `"use client"`. 나머지는 서버 컴포넌트 기본.

### Lib (`lib/`)
- `scoring.ts`: 응답→유형 순수 함수(단일 정의). `queries.ts`: `data/**`를 읽어 유형 조회. 외부 I/O·랜덤 없음.

### Component (`components/**`)
- prop으로 데이터 받음. 직접 import·fetch 안 함.
- `ui/` = 우리 토큰 기반 프리미티브(직접 작성, 도메인 로직 없음). 복잡한 접근성 프리미티브(모달·셀렉트 등)가 필요해지면 그때 shadcn 추가.

## Clean Code Principles

- **단일 책임**: 한 함수/컴포넌트는 한 가지. 60줄 넘으면 분해 검토.
- **명명이 곧 문서**: 의도가 드러나는 이름. 주석은 *왜*가 필요할 때만.
- **죽은 코드 즉시 삭제**: 미사용 import/변수/함수 남기지 않음.
- **매직 값 금지**: 숫자/문자 리터럴은 `constants/`에.
- **타입으로 잘못된 상태를 표현 불가능하게**: `any` 금지. union/literal로 좁힌다.
- **추상화는 3번째에**: 한두 번 비슷한 코드는 그대로. 패턴이 굳으면 추출.

## Code Conventions

**Naming**
- 파일/폴더: `kebab-case`. 데이터 id·라우트 id·이미지명은 **영어 kebab-case**만 (한글 금지 — URL 인코딩 방지).
- 컴포넌트/타입: `PascalCase` (`QuestionCard`, `BibleType`) — `I` prefix 금지
- 함수/변수: `camelCase` (`scoreAnswers`)
- 상수: `UPPER_SNAKE_CASE` (`DIMENSIONS`)
- Boolean: `is`/`has`/`should` 접두사

**TypeScript**
- `any` 금지. 불가피하면 `unknown` + 타입 가드. 공유 타입은 `types/domain.ts`.

**Styling**
- Tailwind 인라인. 별도 CSS 파일 X (`globals.css` 제외). **프리미티브는 우리 토큰으로 직접 작성**(shadcn은 복잡한 접근성 프리미티브에만). **모바일 퍼스트** (`base`→`sm`→`md`→`lg`).

**Copy**
- 모든 사이트 노출 텍스트는 **영어** (영어권 타겟).

**Imports**
- 항상 `@/` alias. 상대 경로는 같은 폴더 내에서만.

## Git Workflow

- 브랜치: `main`(배포·default) / `dev`(작업). feature 브랜치 X. 작업은 항상 `dev`.
- **commit / push / merge는 사용자가 명시적으로 요청할 때만.** 자동 커밋 금지.
- **merge 커밋 만들지 않는다** — `dev` → `main`은 fast-forward only.
- 커밋 메시지: 영어, 동사 원형(Add/Fix/Update/Remove). 1 커밋 = 1 논리적 변경.

## 소통

- 사용자와의 대화는 **한국어**. 커밋 메시지·코드 식별자·주석·**사이트 카피는 영어**.

## Quality Checklist

코드 작성 후 확인:
1. `npm run build` 통과 (TypeScript + 정적 생성)
2. 미사용 import/변수 없음 · `any` 없음 · 단일 책임 · 네이밍만으로 역할 이해 가능
3. **채점 로직**: `lib/scoring.ts`에서만. 컴포넌트에 분산 금지
4. **새 유형/질문 데이터**: DATA.md 타입·파일 규칙 준수. 노출 카피는 오리지널, 구절은 공개도메인(KJV)
5. **새 페이지**: `generateMetadata` + (유형 페이지는) JSON-LD + OG 이미지 + sitemap 반영
6. **새 id/파일명/라우트**: 영어 kebab-case. 사이트 카피는 영어
