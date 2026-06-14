# Bible Character Test — 로드맵 + 현재 상태 (TODO)

> 페이지는 [`SPEC.md`](./SPEC.md), 데이터·채점은 [`DATA.md`](./DATA.md), 환경은 [`../README.md`](../README.md). 상위 사업 전략·수익 단계·리스크는 `~/Desktop/bible-personality-test-PROJECT.md`.
> 브랜치: `main`(배포·default) / `dev`(작업). commit·push·merge는 사용자 명시 시에만. merge 커밋 X (fast-forward).

## 현재 상태 (2026-06-07)

- ✅ 컨셉·수익 전략·결과 구조 결정 (PROJECT.md)
- ✅ 기본 문서·브랜치 셋업 완료 (CLAUDE/README/docs · dev·main)
- ✅ **Phase 0 검증 통과 — "가자"** (경쟁력 확인)
- ⏳ 도메인 미구입 / 16유형 매핑 미작성 / 디자인·코드 0
- **다음**: 디자인(claude design) + 16유형 매핑(아버지 검수) **병행** → 스캐폴딩 → Phase 1

## Phase 0 — 검증 + 셋업 (빌드 전)

### 검증 (PROJECT.md §5 — 빌드 전 필수) — ✅ 통과
- [x] 영어권 경쟁자 분석 (UX·깊이·수익화)
- [x] "bible character test" 류 키워드 수요·난이도
- [x] Pinterest·Reddit 바이럴 패턴 확인
- [x] → **"가자"** (경쟁력 있음)

### 셋업
- [x] 문서 (CLAUDE / README / docs{SPEC,DATA,ROADMAP,DESIGN_BRIEF,SNAPSHOT})
- [x] `dev` 브랜치 생성
- [x] GitHub repo 생성 (default `main`)
- [ ] 디자인 시스템 + 핵심 화면 3 — claude design (`docs/DESIGN_BRIEF.md` 기반)
- [ ] 도메인 확정·구매
- [ ] Next.js + React + Tailwind + TypeScript strict 스캐폴딩
- [ ] shadcn/ui + `.gitignore`·`.env.example`·`next.config`·`tsconfig`
- [ ] Vercel 연결 (production `main`)

## Phase 1 — MVP 빌드 (1~2주)

> 각 페이지 동작은 SPEC.md, 타입·채점은 DATA.md.

### 1-1. 공통 골격
- [ ] `types/domain.ts` (Question·BibleType·Dimension)
- [ ] `constants/` (DIMENSIONS, 후원·POD 링크)
- [ ] `lib/scoring.ts` (채점 단일 정의) · `lib/queries.ts` · `lib/seo.ts`
- [ ] 레이아웃(헤더·푸터) + `globals.css` + `<html lang="en">`

### 1-2. 콘텐츠 (검수 게이트)
- [ ] 16유형 ↔ 인물 매핑 초안 → 아버지 검수
- [ ] 유형별 강점·약점·소명·구절(퍼블릭도메인) → 검수 → `reviewedBy`
- [ ] 질문지(20~30) → 검수
- [ ] Amazon 도서 큐레이션 (유형별 3~5권)

### 1-3. 페이지
- [ ] `/` 랜딩 (훅 + CTA + SEO)
- [ ] `/test` 질문 플로 + 클라이언트 채점
- [ ] `/types/[type]` 결과=유형 페이지 (generateStaticParams + JSON-LD + OG 이미지)
- [ ] `/types` 디렉토리
- [ ] `/about` · `/privacy`

### 1-4. 수익·런칭 (출시 Day 0)
- [ ] 이메일 수집 폼 + ConvertKit/Beehiiv (발송은 Resend)
- [ ] 공유 버튼 + 유형별 동적 OG 이미지
- [ ] Amazon 링크 · POD 링크
- [ ] **Buy Me a Coffee**: 실제 계정·정산(한국 PayPal 등) 셋업 → `BUY_ME_A_COFFEE_URL` 교체(현재 `#` 플레이스홀더). 후원 버튼을 결과 페이지뿐 아니라 **전 페이지에서 접근 가능**하게 노출(헤더/플로팅 위젯 등 위치 결정)
- [ ] sitemap·robots · 분석(Plausible/GA4) · Search Console

> **Phase 1 완료 기준**: 테스트 → 결과 → 공유·이메일까지 동작, 모바일 OK, SEO·검수 통과.

## Phase 2+ — 트래픽 임계치 (PROJECT.md §5)

- [ ] 월 1만 PV → Ezoic 광고
- [ ] 월 5만 PV → 가벼운 PDF 리포트 + Gumroad, 뉴스레터 발송
- [ ] 큰 바이럴 → Mediavine, 묶음 PDF, 한국어 버전
