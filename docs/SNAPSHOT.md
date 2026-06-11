# Bible Character Test — 스냅샷 (현재 상태)

> 재개 시 **첫 참조**. "지금 어디까지 됐고, 다음에 뭘 하는가"를 담는다. 상세 명세는 SPEC/DATA/DESIGN_BRIEF, 전체 작업은 ROADMAP, 상위 전략은 `~/Desktop/bible-personality-test-PROJECT.md`.

## 시점

- 작성: 2026-06-11
- 브랜치: `main`·`dev` origin 동기화 (`4d7908e`)
- 단계: **Phase 1 빌드 — 핵심 플로우(랜딩→테스트→결과) 디자인까지 완성.** SEO/바이럴 마감·검수 콘텐츠·인프라가 남음.

## 지금까지 한 일

- 문서 + `dev`/`main`(ff-only, 머지 커밋 X)
- **스캐폴딩**: Next 16 · React 19 · Tailwind v4 · TS strict, App Router/`src/`, build 통과, 16유형 SSG
- **디자인 토큰**(globals `@theme`, indigo-gold) + 폰트 next/font(Inter+Spectral) + **공유 컴포넌트**(`ui/`·`layout/`, 토큰 핸드롤)
- **결과/유형 페이지 풀 포팅**: 히어로(칩·공유카드 1:1·9:16) → "What you're like"(lines) → Read more → Best/Toughest match → 수익 모듈(email·books·POD·coffee·share·ad)
- **16유형 콘텐츠**: IVF 매핑+설명을 영어로 각색 (title·traits·lines·readingRef) + 궁합 차트 기반 best/worst(상호 대칭, 친족 미엮음) + accent/icon. **verses·calling 비어 있음(아버지 검수 몫).**
- **20문항 오리지널 2지선다**(축당 5·홀수, 채점 `lib/scoring` 동작) — 외부 복제 아님
- **랜딩 풀 포팅**: 히어로 / 16유형 미리보기 / What you'll discover / 신뢰 노트 / 마감 CTA (이미지 0, 아이콘·타이포·Monogram)

## 핵심 결정 (확정 / 잠정)

- **16유형 매핑 = IVF안 그대로.** 프로필·질문 스타일 = **펀치라인(lines) + 칩(traits) + 운명/악연 매칭**. 질문은 **오리지널**(IVF 질문 복제 X — 저작권).
- 프리미티브 토큰 핸드롤(shadcn은 복잡 프리미티브만). 데이터=코드 SSG·DB 없음. 번역본 WEB. 폰트 Inter+Spectral.
- 인물 일러스트는 **옵션**(현재 Monogram=이니셜+accent; 원하면 추후 `imageUrl` 추가).

## 다음 할 일

1. **OG 이미지(`opengraph-image.tsx`) + JSON-LD** — 바이럴·SEO (per-type accent 있어 OG 잘 나옴)
2. `/types` 디렉토리 보강, **Footer를 `/test`에서 숨김**(라우트 그룹)
3. **verses·calling** — 아버지(합동 목사) 검수로 채움
4. 이메일 수집·공유 버튼 **실연동**(ConvertKit/Beehiiv), 도메인 확정·Vercel
5. **IP 게이트**: IVF 파생(매핑·설명) — 출시 전 오리지널화 또는 IVF 허락

## 열린 질문

- 인물 일러스트 도입 여부 / 도메인명 / verses·calling 작성 시점(아버지) / IVF IP 처리
- 문항 톤·개수(현재 20) 최종 확정
