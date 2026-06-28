# Bible Character Test — 스냅샷 (현재 상태)

> 재개 시 **첫 참조**. "지금 어디까지 됐고, 다음에 뭘 하는가"를 담는다. 상세 명세는 SPEC/DATA/DESIGN_BRIEF, 전체 작업은 ROADMAP, 상위 전략은 `~/Desktop/bible-personality-test-PROJECT.md`.

## 시점

- 작성: 2026-06-29
- 브랜치: `main`·`dev` origin 동기화
- 단계: **Phase 1 거의 완료 — 콘텐츠·디자인·테스트 플로·Vercel 배포·도메인·수익화(도서 어필리에이트) 라이브.** 도서 표지=Amazon CDN(ASIN 핫링크, 자체호스팅 제거). about/privacy 검수 완료(인디 수준 법적 OK). **남은 핵심은 측정(분석·Search Console) → 배급.** 분석·이메일 미연동.

## 지금까지 한 일

- 문서 + `dev`/`main`(ff-only, 머지 커밋 X)
- **스캐폴딩**: Next 16 · React 19 · Tailwind v4 · TS strict, App Router/`src/`, build 통과, 16유형 SSG
- **디자인 토큰**(globals `@theme`, emerald-gold) + 폰트 next/font(Inter+Spectral) + **공유 컴포넌트**(`ui/`·`layout/`, 토큰 핸드롤)
- **유형(=결과) 페이지**: Identity(중앙 정렬 — 이미지·이름·녹색 타이틀·점구분 캡스 칩, "You are"/요약 제거) → **Best match/Toughest match 분리 컬러 카드**(에메랄드/클레이, 라벨 Clicks/Clashes에서 변경) → **그 아래 'Read next' 도서 스트립**(시안2, 컴팩트) → What you're like(2열 체크) → **In Scripture(구절=정체 인용 / 기도=에메랄드 카드 "A prayer for you" / 소명=클레이 카드)**. 배경 교차. **코드(ESFJ) 미노출.** `ResultProfile`을 `ResultIdentity`/`ResultBody`로 분리(사이에 도서 슬롯)
- **공유(바이럴) 개편**: 히어로에 컬러 share 행 + 하단 "Which one are your friends?" 콜아웃 카드. 버튼 실동작 — X·Facebook 인텐트 · Copy(클립보드) · **Instagram/Save = 유형별 정사각 공유 이미지**(`/types/[type]/share-image`, 1080², accent 배경+일러스트) → 모바일 네이티브 공유 / 데스크톱 다운로드. scroll sticky 제거
- **폰트**: 세리프 **Spectral→Newsreader**(화면 가독·고운 이탤릭), Inter(산세리프) 유지
- **수익화(도서 어필리에이트) 라이브**: 유형당 **단일 베스트셀러 1권**(표지=**Amazon CDN 핫링크**(`lib/amazon.ts` ASIN→`m.media-amazon.com`, 자체호스팅 제거) + **`/dp/ASIN` 직접 링크**, 16권 표지·링크 전부 검증). 노출 = **매치 카드 밑 'Read next' 컴팩트 스트립**(`BookStrip`, 어필리에이트 고지 포함) + **스크롤 시 하단 슬림 바**(`BookStickyBar` — 인라인 카드가 화면 밖이면 등장·공유 섹션에선 숨김·닫기 가능). 태그 `biblecharacte-20`, 세금 W-8BEN 검증(원천징수 0%). 광고는 Phase 2.
- ⏳ **도서 선정은 확정**(유형당 대중 베스트셀러 1권·Amazon CDN 표지·직접링크). **블록 위치/디자인은 진행 중**: 현재 시안2(매치 밑 스트립)+슬림 바 적용했으나 **계속 다듬는 중(미확정)**.
- **배포**: GitHub→**Vercel 자동배포** 연결(push=production 배포, MCP로 모니터). 도메인 **`biblecharactertest.life`**(hosting.kr) **연결 완료(라이브)** — DNS(A `@`→`216.198.79.1`, CNAME `www`→vercel) 등록, **non-www 대표**. `NEXT_PUBLIC_SITE_URL`이 `SITE_URL`·표시 host(`SITE_HOST`) 구동.
- **favicon**: `icon.svg` + `icon.png`(512)·`apple-icon.png`(180) 책 마크 추가.
- **16유형 콘텐츠 전부 완료**: 매핑(코드·title·traits·readingRef·궁합·accent/icon) + 오리지널 프로필(summary·lines·calling·prayer + KJV 구절 1~2개). **매핑·카피·구절 전부 자체 제작**(보편 연상 + 오리지널 + 공개도메인 KJV). 개신교 관점(마리아=숭배 아님, "하나님 내 구주"). 모델에 `summary`·`prayer` 추가, `reviewedBy`·giftName 제거. 4개 temperament 배치로 작성
- **20문항 오리지널 2지선다**(축당 5·홀수, 채점 `lib/scoring` 동작) — 외부 복제 아님. **generic·일반 표현으로 정리**(보기 균형·중복 손봄). **`/test` 플로: Back 버튼 추가 + 진행 카운터 모바일 줄바꿈 픽스**
- **랜딩 = 원페이지 퍼널**: 반응형 헤드라인(`are you?` 강조 줄)·한 줄 카피·`Start the test` 버튼만. 뱃지·reassurance·browse 링크·그리드·트러스트·마감 CTA 전부 제거 → 동작을 "시작" 하나로
- **디자인 톤 = 에메랄드**: primary 인디고→에메랄드(`#0e7a57`), ink 보라끼 제거(따뜻한 near-black). 토큰·책 마크·favicon·OG 일괄 적용. 크림+골드 유지
- **헤더/푸터 정리**: 헤더 nav에서 `Test` 제거(Start test 버튼만), 푸터 = 중앙 정렬 링크 묶음 + 저작권(워드마크·노란 수익버튼 제거)
- **인물 아바타**: 16명 일러스트 생성·워터마크 제거 → `next/image` 최적화 서빙(랜딩·디렉토리·결과). Monogram 폴백 제거
- **SEO/바이럴 표면**: 유형별 동적 OG 카드(`opengraph-image.tsx`, accent 프레임에 인물) + 사이트 OG + JSON-LD(랜딩 `WebSite`·유형 `Article`) + sitemap·robots
- **브랜드 마크 통일**: 펼친 책 마크(`ui/brand-mark.tsx`) → favicon(`icon.svg`)·로고(Wordmark)·OG에 동일 적용

## 핵심 결정 (확정 / 잠정)

- **16유형 매핑 = 자체 편집**(보편 연상 기반). 프로필·질문·구절 전부 자체(오리지널 + 공개도메인 KJV). **IVF 자료 사용은 거절됨(2026-06) → 독립으로 확정**, 협업 창구(`dal_mate@ivf.or.kr`)만 선택지로 열림.
- 프리미티브 토큰 핸드롤(shadcn은 복잡 프리미티브만). 데이터=코드 SSG·DB 없음. 폰트 **Inter+Newsreader**(세리프 Spectral에서 변경). **팔레트=에메랄드-골드**(인디고에서 변경). **성경 번역=KJV**(공개도메인, 단일 표준 — 화면엔 버전 배지 미표시).
- 인물 일러스트 **도입 완료**(16명, `next/image` 서빙). 경로는 `queries.ts`의 `typeImageSrc(id)`로 파생(도메인 타입에 `imageUrl` 미추가). OG는 Satori가 래스터 원형 클립 미지원이라 **accent 둥근 사각 프레임**으로.
- **인프라/수익 결정**: 배포=**Vercel(GitHub 자동배포)**, 도메인=**`biblecharactertest.life`(non-www 대표)**. 수익화=**추천 도서 어필리에이트(Amazon Associates) 우선** + 자체 PDF(중기); **광고는 도메인·트래픽 후 Phase 2**; **이메일 수집 현재 보류**; Buy Me a Coffee는 한국 정산 마찰로 우선순위 낮음.

## 다음 할 일

1. **측정·색인** — 분석(**Plausible 권장: 쿠키리스 → 동의 배너 불필요**; GA4는 쿠키→EU 배너 필요) + **Google Search Console 등록·sitemap 제출**.
2. **배급(distribution)** — 결과/공유이미지를 Pinterest·Reddit·인스타 등에 시딩(코드 아닌 마케팅).
3. (정리·짧음) 데드코드 `ShareCard`/`ShareCardPreview` 제거 · **Footer를 `/test`에서 숨김**(라우트 그룹) · 도서 슬림 바 모바일 체크.
4. (선택) 도서 블록 위치/디자인 마무리 · 이메일 수집(보류) · 공유 스토리 9:16 · favicon `.ico` · `/types` 보강.

## 열린 질문

- 이메일 수집 도입 시점(현재 보류) / 자체 PDF 상품 제작 여부
- **분석 켤 때 쿠키 동의** — Plausible(쿠키리스)이면 배너 불필요 / GA4면 EU 배너 필요(정책은 이미 "동의 받겠다" 약속).
- **디자인** — 결과·`/test`·about/privacy 검수 완료. **도서 블록 위치/디자인만 조정 중.**
