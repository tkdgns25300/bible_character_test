# Bible Character Test — 스냅샷 (현재 상태)

> 재개 시 **첫 참조**. "지금 어디까지 됐고, 다음에 뭘 하는가"를 담는다. 상세 명세는 SPEC/DATA/DESIGN_BRIEF, 전체 작업은 ROADMAP, 상위 전략은 `~/Desktop/bible-personality-test-PROJECT.md`.

## 시점

- 작성: 2026-06-09
- 브랜치: `main`·`dev` origin 동기화 (`00012dd`)
- 단계: **Phase 1 빌드 진입 — 스캐폴딩 + 디자인 시스템(공유 컴포넌트) 완료.** 페이지 풀 포팅·콘텐츠는 진행 전.

## 지금까지 한 일

- 문서 6종(CLAUDE/README/docs{SPEC,DATA,ROADMAP,DESIGN_BRIEF,SNAPSHOT}) + `dev`/`main`(ff-only, 머지 커밋 X)
- Phase 0 검증 통과
- **스캐폴딩**: Next 16 · React 19 · Tailwind v4 · TS strict, App Router/`src/`. `npm run build` 통과, 16유형 전수 SSG. `lib/scoring`(단일·순수·tie-break)·`queries`·`seo`, `types/domain`, `constants`, `data/types`(IVF 16) + placeholder 질문 12.
- **디자인 토큰**: `src/app/globals.css` `@theme`(indigo-gold) 라이브, 폰트 `next/font`(Inter+Spectral). `design/tokens.css` = 참조.
- **공유 컴포넌트**: `ui/{button,card,badge,progress,monogram}` + `layout/{wordmark,header,footer}` — 우리 토큰으로 직접 작성(shadcn 미사용). build·lint·prerender 검증됨.

## 핵심 결정 (확정 / 잠정)

- **16유형 매핑 = IVF 한국기독학생회안 그대로 채택**(검수 없이 — 신뢰 단체). 데이터에 반영됨(아래).
- **프리미티브는 토큰 핸드롤**, shadcn은 복잡한 접근성 프리미티브(모달·셀렉트 등) 필요 시에만. (CLAUDE.md 반영)
- 페이지 6종, 랜딩은 별도 진입페이지 X·CTA-first 단일. 공유·이메일은 결과 페이지 기능.
- **문항: 현재 placeholder 12개 → 20개(축당 5·홀수) 권장**(미확정).
- 데이터=코드 SSG·DB 없음. 이메일 수집 ConvertKit/Beehiiv·발송 Resend. 번역본 WEB 기본. 세리프 Spectral. 도메인 후보 `biblecharactertest.com`(미확정).

## 채택된 16유형 매핑 (IVF) — 데이터 반영됨

INTJ Noah · INTP Solomon · ENTJ Paul · ENTP Esther · INFJ Jeremiah · INFP Barnabas · ENFJ Jonathan · ENFP Peter · ISTJ Luke · ISFJ Mary · ESTJ Deborah · ESFJ David · ISTP Rahab · ISFP Adam · ESTP Rebekah · ESFP Jacob

> 프로필 본문(title·tagline·strengths·weaknesses·calling·verses·accent·icon)은 **아직 미작성** — Phase 1 콘텐츠 작업.

## 다음 할 일

1. **② 페이지 디자인 포팅** — 특히 **결과/유형 페이지**(강점·약점·소명·구절 블록 + 공유카드 + 이메일 폼 + 수익 모듈), 테스트 UX(진행바 됨·격려 카피), 랜딩 풀. (프로토타입 `screens.jsx`·`chrome.jsx`·`sharecard.jsx` 참조 — Downloads zip)
2. **③ 콘텐츠** — 16 프로필 본문 + 질문 20개. 이때 `data/types/{id}.ts`로 분리(DATA.md 파일 규칙).
3. **미뤄둔 갭** — 유형 페이지 JSON-LD · `opengraph-image.tsx`(공유 OG 카드) · Footer를 `/test`에서 숨기기(라우트 그룹).
4. 도메인 확정·구매 + Vercel 연결.

## 열린 질문

- 문항 12 vs 20
- 프로필 본문 작성 시 아버지(합동 목사) 톤 확인 여부 (매핑은 IVF 확정, 본문은 별개)
- 도메인명
