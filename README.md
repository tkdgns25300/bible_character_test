# Bible Character Test

영어권 성경 인물 성격 테스트. 질문에 답하면 가장 닮은 성경 인물과 강점·약점·영적 소명·추천 구절을 보여준다. **목사 검수 기반 신학적 정확성**이 차별점.

## Stack

Next.js (App Router, SSG) · React · TypeScript strict · Tailwind + shadcn/ui · Vercel · npm

> **DB 없음.** 질문·16유형 콘텐츠는 `src/data/**`의 TypeScript 파일. 이메일은 외부 서비스 — 수집·리스트는 ConvertKit/Beehiiv, 발송은 Resend. 데이터 모델·채점은 [`docs/DATA.md`](./docs/DATA.md).

## Pages

- `/` 랜딩 — 훅 + 테스트 시작 CTA
- `/test` 질문 플로 (인터랙티브, 클라이언트 채점)
- `/types` 16유형 디렉토리
- `/types/[type]` 유형(=결과) 페이지 — 강점·약점·소명·구절 + 이메일·공유·수익 모듈
- `/about` · `/privacy`

## Documentation

읽는 순서:

1. [`CLAUDE.md`](./CLAUDE.md) — **HOW**. 아키텍처·코딩 컨벤션·Git
2. [`docs/SPEC.md`](./docs/SPEC.md) — **WHAT**. 페이지·기능·수익 배치·SEO
3. [`docs/DATA.md`](./docs/DATA.md) — **DATA**. 질문·16유형 타입·채점·신학 검수
4. [`docs/ROADMAP.md`](./docs/ROADMAP.md) — **TODO + 현재 상태**
5. [`docs/DESIGN_BRIEF.md`](./docs/DESIGN_BRIEF.md) — **DESIGN**. 비주얼·브랜드 방향 + claude design 프롬프트
6. [`docs/SNAPSHOT.md`](./docs/SNAPSHOT.md) — **현재 상태**. 시점 핸드오프 (재개 시 첫 참조)

> 상위 사업 전략(시장·수익 단계·리스크)은 `~/Desktop/bible-personality-test-PROJECT.md`.

## Local Setup

> ⚠️ 아직 스캐폴딩 전 — 코드 없음. 셋업 시 채운다.

```bash
git clone <repo-url> && cd bible_character_test
git checkout dev
npm install
cp .env.example .env       # 키 채우기 (아래)
npm run dev
```

## 환경 변수

`.env`는 gitignored. DB·인증이 없어 비밀키는 최소다 (대부분 공개 가능한 측정/제휴 ID).

```env
NEXT_PUBLIC_SITE_URL=                 # sitemap·OG·JSON-LD 절대 URL용
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=         # 분석 (또는 NEXT_PUBLIC_GA_ID)
NEXT_PUBLIC_AMAZON_TAG=               # Amazon Associates 태그 (Phase 1)
CONVERTKIT_FORM_ID=                   # 이메일 수집 (임베드 사용 시 불필요)
CONVERTKIT_API_KEY=
```

Buy Me a Coffee·POD 스토어 링크는 비밀이 아니므로 `src/constants/`에 둔다 (env 아님).

## 환경 정보

| 항목 | 값 |
|---|---|
| 도메인 | **미정** (후보: biblepersonality.com 등 — PROJECT.md §12) |
| 시장 / 언어 | 영어권, 사이트 카피 영어 |
| GitHub repo | `tkdgns25300/bible_character_test` (생성됨, 커밋 0 · default `main`) |
| Vercel | **미연결** (production = `main`) |
| DB / Auth | 없음 (파일 기반 정적 사이트) |
| 이메일 | 수집 ConvertKit/Beehiiv · 발송 Resend (미연동) |

## Git

- 브랜치: `main`(배포·default) / `dev`(작업). feature 브랜치 없음.
- **commit / push / merge는 사용자 명시 요청 시에만.** merge 커밋 만들지 않는다 (fast-forward).
