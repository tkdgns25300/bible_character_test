# Bible Character Test — 기획서 (WHAT)

> 아키텍처·컨벤션은 [`../CLAUDE.md`](../CLAUDE.md), 데이터·채점은 [`DATA.md`](./DATA.md), 작업은 [`ROADMAP.md`](./ROADMAP.md). 이 파일은 **페이지·기능·UX·수익 배치·SEO 명세**만 담는다. 상위 사업 전략은 `~/Desktop/bible-personality-test-PROJECT.md`.

## 개요

- **한 줄 설명**: 16유형 × 성경 인물 매핑 성격 테스트 (영어권)
- **타겟 사용자**: 영어권 기독교인. "What Bible character am I?" 검색·공유 수요
- **1순위 가치**: 신학적으로 정확하면서 **공유하고 싶은** 결과
- **벤치마크**: 16Personalities (깊이 있는 결과 + 무료 테스트 + 공유)
- **수익 모델**: 단계적. 출시엔 이메일 수집·Amazon·후원·POD만. 단계 전략은 PROJECT.md §5

## 핵심 사용자 흐름

1. (검색/공유 링크) → 랜딩에서 테스트 시작
2. 질문 N개 응답 (4축) → 클라이언트 채점
3. 유형 페이지 `/types/[type]`로 이동 — "You are David" 결과 확인
4. 결과 공유(인스타·트위터·FB) + 이메일로 상세 받기 + 추천 도서/굿즈

## 페이지 (MVP)

### 1. 랜딩 (`/`)
- 훅 카피 + **Start the test** CTA
- 무엇을 알게 되는지 3줄 + 16유형 미리보기 링크(`/types`)
- SEO 본문(검색 유입용), JSON-LD `WebSite`

### 2. 테스트 (`/test`)
- `"use client"`. 한 번에 질문 1개 + 진행바. 뒤로/앞으로 이동
- 응답 상태는 클라이언트(새로고침 복원은 선택)
- 마지막 응답 → `lib/scoring.ts` 채점 → `/types/[type]` 이동
- **광고 없음** (플로 방해 금지)

### 3. 유형 페이지 (`/types/[type]`) — 결과 = 브라우즈 (16개 정적)
하나의 정식 URL이 결과 페이지이자 SEO 랜딩. 테스트로 도착하면 상단에 "Your result" 배너(클라이언트).
- **헤더**: 인물명 + 유형 타이틀 + 대표 비주얼 (공유 OG 카드는 `opengraph-image.tsx`가 생성)
- **본문 블록**: Strengths · Weaknesses · Spiritual Calling · Recommended Verses
- 📧 이메일 입력 → 상세 받기 (핵심 자산)
- 📚 Amazon 추천 도서 / 👕 POD 굿즈 / ☕ Buy Me a Coffee
- 🔗 공유 버튼 (인스타·트위터·FB)
- **SEO**: `generateStaticParams` 전수, JSON-LD `Article`/`CreativeWork`, 동적 OG 이미지

### 4. 유형 디렉토리 (`/types`)
- 16유형 카드 그리드(인물·타이틀·태그라인) → 각 유형 페이지. 내부 링크·SEO

### 5. About (`/about`)
- 서비스 목적·운영 주체 · **신학 검수 방침**(신뢰) · 문의 mailto · 후원 버튼

### 6. Privacy (`/privacy`)
- 이메일 수집 · 광고(Phase 2) · 애널리틱스 쿠키 고지. 쿠키 동의가 필요한 이유는 광고·애널리틱스 — 지역별 규정(GDPR/UK-GDPR/CCPA) 고려

## 수익 배치 원칙 (공유를 죽이지 않는 선)

> 1순위는 공유 가능한 결과. 광고·수익 모듈이 결과 핵심(강점·구절)이나 공유 버튼을 가리면 바이럴이 죽는다.

- **이메일 폼**: 결과 본문 직후(가장 자연스러운 지점)
- **Amazon/POD/후원**: 결과 본문 아래 보조 영역에 은은하게
- **Ezoic 광고(Phase 2)**: 결과 페이지엔 절제. 인피드·하단만. 결과 카드 위·공유 버튼 주변 금지
- ❌ 강제 회원가입, 팝언더, 결과 페이지 광고 5개+ (PROJECT.md §5)

## SEO / 분석

- `generateMetadata` 전 페이지 (title·description·OG·Twitter)
- `app/sitemap.ts` · `app/robots.ts`, `<html lang="en">`, 정식 URL은 `NEXT_PUBLIC_SITE_URL`
- JSON-LD: 유형 = `Article`/`CreativeWork` (성격결과 전용 스키마 없어 잠정), 랜딩 = `WebSite`
- 분석: Plausible 또는 GA4 + Search Console 등록

## 네이밍 · 법적 주의

- **"MBTI"는 상표(Myers-Briggs).** 내부 데이터는 4축 코드를 쓰되, **사이트 카피는 MBTI 직접 사용을 피하고** 자체 명칭("personality type")을 쓴다 (16Personalities와 동일 회피). 최종 판단은 사용자 확인.
- 성경 구절 번역본 저작권 정책은 [`DATA.md`](./DATA.md).

## 디자인 방향

> 상세 비주얼·브랜드는 빌드 진입 시 별도 DESIGN_BRIEF로 분리. 여기는 기능 요구만.

- **모바일 퍼스트**, 결과 카드는 인스타 공유 비율 최적화
- 차분 + 신뢰 톤, 결과 가독성 우선

## MVP 범위 밖 (Phase 2+)

PDF 리포트 · 뉴스레터 · 다크모드 · 한국어 버전 · 추가 테스트. 상세는 ROADMAP / PROJECT.md.
