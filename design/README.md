# design/

디자인 **참조용** 폴더 — 빌드 아님, 앱 코드 없음.

## 파일
- **`tokens.css`** — 디자인 값의 **단일 진실(SSoT)**. 색·폰트·radius·shadow. 스캐폴딩 때 이 파일이 `src/app/globals.css`의 `@theme`로 **이동/`@import`** 된다. **값을 다른 곳에 복붙하지 말 것**(드리프트 방지).

## 팔레트 · 폰트
3종 — **indigo-gold(기본)** · midnight-brass · plum-amber. 대안 2종은 `tokens.css` 주석에. 폰트: **Inter**(sans) + **Spectral**(serif — 인물명·헤드라인·구절).

## 경계
- 유형별 accent 색(16개)은 여기 아니라 **데이터**(`src/data/types`, `docs/DATA.md`).
- 페이지·동작 명세 → `docs/SPEC.md`. 브랜드 의도 → `docs/DESIGN_BRIEF.md`.

## 아카이브
claude design 전체 export(`.jsx`·스크린샷·24MB standalone·`_ds/` 디자인시스템)는 **Downloads의 zip**에 보관 — 무겁고 throwaway라 repo엔 안 넣는다. 필요하면 거기서 다시 본다.
