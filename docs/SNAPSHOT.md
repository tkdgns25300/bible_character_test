# Bible Character Test — 스냅샷 (현재 상태)

> 재개 시 **첫 참조**. "지금 어디까지 됐고, 다음에 뭘 하는가"를 담는다. 상세 명세는 SPEC/DATA/DESIGN_BRIEF, 전체 작업은 ROADMAP, 상위 전략은 `~/Desktop/bible-personality-test-PROJECT.md`.

## 시점

- 작성: 2026-06-18
- 브랜치: `main`·`dev` origin 동기화
- 단계: **Phase 1 빌드 — 핵심 플로우 + SEO/바이럴 표면 + 디자인 + 16유형 오리지널 콘텐츠까지 완료.** 실연동·인프라·도메인이 남음.

## 지금까지 한 일

- 문서 + `dev`/`main`(ff-only, 머지 커밋 X)
- **스캐폴딩**: Next 16 · React 19 · Tailwind v4 · TS strict, App Router/`src/`, build 통과, 16유형 SSG
- **디자인 토큰**(globals `@theme`, emerald-gold) + 폰트 next/font(Inter+Spectral) + **공유 컴포넌트**(`ui/`·`layout/`, 토큰 핸드롤)
- **유형(=결과) 페이지**: Identity(중앙 정렬 — 이미지·이름·녹색 타이틀·점구분 캡스 칩, "You are"/요약 제거) → **Best/Toughest를 히어로 바로 아래 분리 컬러 카드**(에메랄드/클레이) → What you're like(2열 체크) → **In Scripture(구절=정체 인용 / 기도=에메랄드 카드 "A prayer for you" / 소명=클레이 카드)**. 배경 교차. **코드(ESFJ)·수익화·SAMPLE 제거**
- **공유(바이럴) 개편**: 히어로에 컬러 share 행 + 하단 "Which one are your friends?" 콜아웃 카드. 버튼 실동작 — X·Facebook 인텐트 · Copy(클립보드) · **Instagram/Save = 유형별 정사각 공유 이미지**(`/types/[type]/share-image`, 1080², accent 배경+일러스트) → 모바일 네이티브 공유 / 데스크톱 다운로드. scroll sticky 제거
- **폰트**: 세리프 **Spectral→Newsreader**(화면 가독·고운 이탤릭), Inter(산세리프) 유지
- **16유형 콘텐츠 전부 완료**: 매핑(코드·title·traits·readingRef·궁합·accent/icon) + 오리지널 프로필(summary·lines·calling·prayer + KJV 구절 1~2개). IVF는 매핑 참조만, 카피는 전부 오리지널. 개신교 관점(마리아=숭배 아님, "하나님 내 구주"). 모델에 `summary`·`prayer` 추가, `reviewedBy`·giftName 제거. 4개 temperament 배치로 작성
- **20문항 오리지널 2지선다**(축당 5·홀수, 채점 `lib/scoring` 동작) — 외부 복제 아님. **generic·일반 표현으로 정리**(보기 균형·중복 손봄)
- **랜딩 = 원페이지 퍼널**: 반응형 헤드라인(`are you?` 강조 줄)·한 줄 카피·`Start the test` 버튼만. 뱃지·reassurance·browse 링크·그리드·트러스트·마감 CTA 전부 제거 → 동작을 "시작" 하나로
- **디자인 톤 = 에메랄드**: primary 인디고→에메랄드(`#0e7a57`), ink 보라끼 제거(따뜻한 near-black). 토큰·책 마크·favicon·OG 일괄 적용. 크림+골드 유지
- **헤더/푸터 정리**: 헤더 nav에서 `Test` 제거(Start test 버튼만), 푸터 = 중앙 정렬 링크 묶음 + 저작권(워드마크·노란 수익버튼 제거)
- **인물 아바타**: 16명 일러스트 생성·워터마크 제거 → `next/image` 최적화 서빙(랜딩·디렉토리·결과). Monogram 폴백 제거
- **SEO/바이럴 표면**: 유형별 동적 OG 카드(`opengraph-image.tsx`, accent 프레임에 인물) + 사이트 OG + JSON-LD(랜딩 `WebSite`·유형 `Article`) + sitemap·robots
- **브랜드 마크 통일**: 펼친 책 마크(`ui/brand-mark.tsx`) → favicon(`icon.svg`)·로고(Wordmark)·OG에 동일 적용

## 핵심 결정 (확정 / 잠정)

- **16유형 매핑 = IVF안 그대로.** 프로필·질문 스타일 = **펀치라인(lines) + 칩(traits) + 운명/악연 매칭**. 질문은 **오리지널**(IVF 질문 복제 X — 저작권).
- 프리미티브 토큰 핸드롤(shadcn은 복잡 프리미티브만). 데이터=코드 SSG·DB 없음. 폰트 **Inter+Newsreader**(세리프 Spectral에서 변경). **팔레트=에메랄드-골드**(인디고에서 변경). **성경 번역=KJV**(공개도메인, 단일 표준 — 화면엔 버전 배지 미표시).
- 인물 일러스트 **도입 완료**(16명, `next/image` 서빙). 경로는 `queries.ts`의 `typeImageSrc(id)`로 파생(도메인 타입에 `imageUrl` 미추가). OG는 Satori가 래스터 원형 클립 미지원이라 **accent 둥근 사각 프레임**으로.

## 다음 할 일

1. 이메일 수집·공유 **실연동**(ConvertKit/Beehiiv) + 분석(Plausible/GA4)·Search Console
2. 도메인 확정·구매 → **Vercel 연결** (배포돼야 X/FB 링크 미리보기·실제 공유 완성)
3. `/types` 디렉토리 보강, **Footer를 `/test`에서 숨김**(라우트 그룹)
4. **`/test`(질문 플로) 디자인 검토**
5. (선택) 공유 이미지 마무리 — 카드 폰트 세리프 적용 / 스토리 9:16 추가

## 열린 질문

- 도메인명
- 문항 톤·개수(현재 20) 최종 확정
- **디자인** — 유형(결과) 페이지 재설계(히어로·궁합·In Scripture·Newsreader 폰트·공유) 완료. **`/test`(질문 플로) 검토 대기**
