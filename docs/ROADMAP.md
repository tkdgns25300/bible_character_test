# Bible Character Test — 로드맵 + 현재 상태 (TODO)

> 페이지는 [`SPEC.md`](./SPEC.md), 데이터·채점은 [`DATA.md`](./DATA.md), 환경은 [`../README.md`](../README.md). 상위 사업 전략·수익 단계·리스크는 `~/Desktop/bible-personality-test-PROJECT.md`.
> 브랜치: `main`(배포·default) / `dev`(작업). commit·push·merge는 사용자 명시 시에만. merge 커밋 X (fast-forward).

## 현재 상태 (2026-06-29)

- ✅ 컨셉·수익 전략·결과 구조 결정 (PROJECT.md)
- ✅ 스캐폴딩·디자인·핵심 플로우·SEO/바이럴 표면 완료 (SNAPSHOT 참조)
- ✅ **16유형 오리지널 콘텐츠 전부 완료** (summary·lines·calling·prayer + KJV 구절)
- ✅ **20문항 정리 완료** (generic·일반 표현, 균형·중복 정리)
- ✅ **결과 페이지 마무리** (히어로·궁합·In Scripture·Newsreader·공유·도서 블록·favicon)
- ✅ **Vercel 자동배포 연결** + 도메인 `biblecharactertest.life` **연결 완료·라이브**(non-www)
- ✅ **Amazon Associates 가입·태그(`biblecharacte-20`)·세금(W-8BEN 0%) 완료** + 16유형 **단일 베스트셀러**(Amazon CDN 표지[ASIN 핫링크, 자체호스팅 제거]·`/dp/ASIN` 직접링크, 16권 검증) / ⏳ 도서 블록 위치·디자인 조정 중 / 분석 미연동 / 이메일 보류
- ✅ **`/test` 플로 검수**(Back 버튼·카운터 모바일 픽스) · **about/privacy 검수**(인디 수준 법적 OK)
- **다음**: **측정**(분석 Plausible·Search Console) → **배급**(Pinterest·Reddit 등). 도서 블록 디자인은 병행 조정.
- ✅ **도서 선정 확정**(유형당 대중 베스트셀러 1권·Amazon CDN 표지·직접링크). ⏳ **노출 디자인 진행 중**: 라벨 Best/Toughest, 매치 밑 'Read next' 스트립(시안2)+스크롤 슬림 바 적용 — 계속 조정.

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
- [x] 디자인 시스템 + 핵심 화면 — 완료(에메랄드 토큰·핸드롤 프리미티브)
- [x] 도메인 확정·구매 — **biblecharactertest.life** (hosting.kr)
- [x] Next.js + React + Tailwind + TypeScript strict 스캐폴딩
- [x] 셋업 — `.gitignore`·`next.config`·`tsconfig` (shadcn은 핸드롤로 대체)
- [x] Vercel 연결 (production `main`) — GitHub 자동배포

## Phase 1 — MVP 빌드 (1~2주)

> 각 페이지 동작은 SPEC.md, 타입·채점은 DATA.md.

### 1-1. 공통 골격
- [x] `types/domain.ts` (Question·BibleType·Dimension)
- [x] `constants/` (DIMENSIONS, 후원·POD 링크)
- [x] `lib/scoring.ts` (채점 단일 정의) · `lib/queries.ts` · `lib/seo.ts` · `lib/amazon.ts`
- [x] 레이아웃(헤더·푸터) + `globals.css` + `<html lang="en">`

### 1-2. 콘텐츠
> 정책: 매핑·카피 전부 자체(보편 연상 기반), 구절은 공개도메인 **KJV**. 개신교 관점.
- [x] 16유형 ↔ 인물 매핑 (코드·title·traits·readingRef·궁합)
- [x] **유형별 오리지널 콘텐츠**(summary·lines·calling·prayer + KJV 구절) — **16/16 완료**
- [x] 번역본 표준 = **KJV** 확정
- [x] 질문지(20문항) — generic·일반 표현으로 정리 완료
- [x] Amazon 도서 큐레이션 — **유형당 단일 베스트셀러 확정**(Amazon CDN 표지[ASIN 핫링크] + `/dp/ASIN` 직접링크, 16권 검증). ⏳ 노출 디자인(스트립/바)은 조정 중.

### 1-3. 페이지
- [x] `/` 랜딩 (훅 + CTA + SEO)
- [x] `/test` 질문 플로 + 클라이언트 채점 (Back 버튼·진행바)
- [x] `/types/[type]` 결과=유형 페이지 (generateStaticParams + JSON-LD + OG 이미지)
- [x] `/types` 디렉토리
- [x] `/about` · `/privacy` (검수 완료 — 인디 수준 법적 OK)

### 1-4. 수익·런칭 (출시 Day 0)
- [ ] 이메일 수집 폼 + ConvertKit/Beehiiv (발송은 Resend)
- [x] 공유 버튼(X·FB·IG/Save·복사) + 유형별 동적 OG·정사각 공유 이미지
- [x] Amazon 링크 — `BookStrip`(매치 밑 'Read next' 스트립) + `BookStickyBar`(스크롤 슬림 바) + `AMAZON_TAG` **활성** + 표지=Amazon CDN. ⏳ 위치/디자인 조정 중 · POD 링크 별도
- [x] sitemap·robots
- [ ] **측정** ← 다음: 분석(**Plausible 권장 — 쿠키리스라 동의 배너 불필요** / GA4는 쿠키→EU 배너 필요) + **Google Search Console 등록·sitemap 제출**
- [ ] (보류) 이메일 수집 폼 + ConvertKit/Beehiiv
- [ ] (낮음) Buy Me a Coffee 실제 계정·정산(한국 PayPal) → `BUY_ME_A_COFFEE_URL` 교체(현재 `#`)

> **Phase 1 완료 기준**: 테스트 → 결과 → 공유·이메일까지 동작, 모바일 OK, SEO 통과.

## Phase 2+ — 트래픽 임계치 (PROJECT.md §5)

- [ ] 월 1만 PV → Ezoic 광고
- [ ] 월 5만 PV → 가벼운 PDF 리포트 + Gumroad, 뉴스레터 발송
- [ ] 큰 바이럴 → Mediavine, 묶음 PDF, 한국어 버전

## 리서치 / 참고 (탐색)

- [ ] **유사·인접 사이트 리서치** — 기독교 **행사·컨퍼런스·모임(이벤트/커뮤니티)** 관련 사이트들이 분명 존재함. 어떤 사이트가 있는지 조사하고 **UX·기능·콘텐츠·수익 모델을 비교** → 우리가 **차용·추가할 요소**(파트너십·기능·콘텐츠 아이디어) 파악. 결과는 SNAPSHOT/SPEC에 반영.
