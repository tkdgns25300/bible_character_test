# Bible Character Test — 스냅샷 (현재 상태)

> 재개 시 **첫 참조**. "지금 어디까지 됐고, 다음에 뭘 하는가"를 담는다. 상세 명세는 SPEC/DATA/DESIGN_BRIEF, 전체 작업은 ROADMAP, 상위 전략은 `~/Desktop/bible-personality-test-PROJECT.md`.

## 시점

- 작성: 2026-06-13
- 브랜치: `main`·`dev` origin 동기화
- 단계: **Phase 1 빌드 — 핵심 플로우(랜딩→테스트→결과) + SEO/바이럴 표면(OG·JSON-LD·favicon)까지 완성.** 검수 콘텐츠·실연동·인프라·IP가 남음.

## 지금까지 한 일

- 문서 + `dev`/`main`(ff-only, 머지 커밋 X)
- **스캐폴딩**: Next 16 · React 19 · Tailwind v4 · TS strict, App Router/`src/`, build 통과, 16유형 SSG
- **디자인 토큰**(globals `@theme`, indigo-gold) + 폰트 next/font(Inter+Spectral) + **공유 컴포넌트**(`ui/`·`layout/`, 토큰 핸드롤)
- **결과/유형 페이지 풀 포팅**: 히어로(칩·공유카드 1:1·9:16) → "What you're like"(lines) → Read more → Best/Toughest match → 수익 모듈(email·books·POD·coffee·share·ad)
- **16유형 콘텐츠**: IVF 매핑+설명을 영어로 각색 (title·traits·lines·readingRef) + 궁합 차트 기반 best/worst(상호 대칭, 친족 미엮음) + accent/icon. **verses·calling 비어 있음(아버지 검수 몫).**
- **20문항 오리지널 2지선다**(축당 5·홀수, 채점 `lib/scoring` 동작) — 외부 복제 아님
- **랜딩 풀 포팅**: 히어로 / 16유형 미리보기 / What you'll discover / 신뢰 노트 / 마감 CTA
- **인물 아바타**: 16명 일러스트 생성·워터마크 제거 → `next/image` 최적화 서빙(랜딩·디렉토리·결과). Monogram 폴백 제거
- **SEO/바이럴 표면**: 유형별 동적 OG 카드(`opengraph-image.tsx`, accent 프레임에 인물) + 사이트 OG + JSON-LD(랜딩 `WebSite`·유형 `Article`) + sitemap·robots
- **브랜드 마크 통일**: 펼친 책 마크(`ui/brand-mark.tsx`) → favicon(`icon.svg`)·로고(Wordmark)·OG에 동일 적용

## 핵심 결정 (확정 / 잠정)

- **16유형 매핑 = IVF안 그대로.** 프로필·질문 스타일 = **펀치라인(lines) + 칩(traits) + 운명/악연 매칭**. 질문은 **오리지널**(IVF 질문 복제 X — 저작권).
- 프리미티브 토큰 핸드롤(shadcn은 복잡 프리미티브만). 데이터=코드 SSG·DB 없음. 번역본 WEB. 폰트 Inter+Spectral.
- 인물 일러스트 **도입 완료**(16명, `next/image` 서빙). 경로는 `queries.ts`의 `typeImageSrc(id)`로 파생(도메인 타입에 `imageUrl` 미추가). OG는 Satori가 래스터 원형 클립 미지원이라 **accent 둥근 사각 프레임**으로.

## 다음 할 일

1. **verses·calling** — 아버지(합동 목사) 검수로 채움 (현재 비어 있어 ComingSoon 표시) ← 출시 게이트
2. **IP 게이트**: IVF 파생(매핑·설명) — 출시 전 오리지널화 또는 IVF 허락 ← 출시 게이트
3. 이메일 수집·공유 버튼 **실연동**(ConvertKit/Beehiiv) + 분석(Plausible/GA4)·Search Console
4. 도메인 확정·구매 → Vercel production 연결
5. `/types` 디렉토리 보강, **Footer를 `/test`에서 숨김**(라우트 그룹)

## 열린 질문

- 도메인명 / verses·calling 작성 시점(아버지) / IVF IP 처리
- 문항 톤·개수(현재 20) 최종 확정
