# Bible Character Test — 스냅샷 (현재 상태)

> 재개 시 **첫 참조**. "지금 어디까지 됐고, 다음에 뭘 하는가"를 담는다. 상세 명세는 SPEC/DATA/DESIGN_BRIEF, 전체 작업은 ROADMAP, 상위 전략은 `~/Desktop/bible-personality-test-PROJECT.md`.

## 시점

- 작성: 2026-06-07
- 브랜치: `main`·`dev` origin 동기화 (push 완료)
- 단계: **Phase 0 검증 통과("가자"). 셋업 후반 — 디자인 + 콘텐츠(매핑) 병행 중.** 앱 코드는 아직 0.

## 지금까지 한 일

- **문서 아키텍처**: CLAUDE / README / docs{SPEC, DATA, ROADMAP, DESIGN_BRIEF, SNAPSHOT} + `dev`/`main`(fast-forward only, 머지 커밋 X)
- **Phase 0 검증 통과** (경쟁력 확인 — 사용자 판단)
- **디자인**: DESIGN_BRIEF → claude design로 핵심 3화면(랜딩·테스트·결과) + 디렉토리 시안 수령 → 양호
- **16유형 매핑**: 내 1차안 + IVF안 비교표 작성 (아래) — 아버지 검수 대기

## 핵심 결정 (확정 / 잠정)

- **페이지 6종**: `/` 랜딩 · `/test` · `/types` · `/types/[type]`(결과) · `/about` · `/privacy`. 핵심 플로우 3 (랜딩→test→결과). **공유·이메일은 결과 페이지 내부 기능**(별도 페이지 X).
- **수익**: Phase1 이메일 수집·Amazon·Buy Me a Coffee·POD → P2 Ezoic → P3 PDF·뉴스레터 → P4 Mediavine. (PROJECT.md §5)
- **랜딩 UX**: **별도 진입 페이지 만들지 않는다.** CTA-first 단일 랜딩 유지(이미 above-the-fold). 16유형 미리보기는 티저로 축소. 헤더 "Start test" 상시 노출.
- **문항 수**: 시안은 12(축당 3) — 빠르나 결과 불안정 위험. **20문항(축당 5)+홀수 권장**(결과 안정성·깊이). → 미확정.
- **아키텍처**: 데이터=코드 SSG, DB 없음. 이메일 수집 ConvertKit/Beehiiv·발송 Resend. 번역본 WEB 기본. MBTI 코드는 내부용(사이트 카피 노출 X).

## 16유형 매핑 — 검수용 비교표 (내 초안 vs IVF)

> ✅=양쪽 합의 · 🔀=둘 다 타당(택1) · ⭐=내 추천(IVF안 약함). MBTI 타이핑은 해석이라 "정답" 없음 — 아버지(합동 목사) 검수 게이트.

| 코드 | 내 초안 | IVF | 검수 추천 | 비고 |
|---|---|---|---|---|
| INTJ | Joseph | Noah | ⭐ **Joseph** | Noah는 ISTJ가 맞음 |
| INTP | Solomon | Solomon | ✅ **Solomon** | 합의 |
| ENTJ | Paul | Paul | ✅ **Paul** | 합의 |
| ENTP | Jacob | Esther | ⭐ **Jacob** | Esther는 ENTP 부적합 |
| INFJ | Daniel | Jeremiah | ⭐ **Daniel** | Jeremiah는 보통 INFP |
| INFP | Jeremiah | Barnabas | ⭐ **Jeremiah** | Barnabas는 ENFP 성향 |
| ENFJ | Moses | Jonathan | ⭐ **Moses** | Jonathan도 가능하나 인지도↓ |
| ENFP | Peter | Peter | ✅ **Peter** | 합의 |
| ISTJ | Noah | Luke | 🔀 **Noah / Luke** | 둘 다 강함 — 택1 |
| ISFJ | Mary | Mary | ✅ **Mary** | 합의 |
| ESTJ | Deborah | Deborah | ✅ **Deborah** | 합의 |
| ESFJ | Martha | David | ⭐ **Martha** | David=ESFJ 약함 |
| ISTP | Gideon | Rahab | 🔀 **Gideon / Rahab** | 둘 다 가능 — 택1 |
| ISFP | Abigail | Adam | ⭐ **Abigail** | Adam은 본문 근거 없음 |
| ESTP | Samson | Rebekah | ⭐ **Samson** | Rebekah는 ENTJ 성향 |
| ESFP | David | Jacob | ⭐ **David** | Jacob은 ENTP 성향 |

**요약**: 합의 5칸(Solomon·Paul·Peter·Mary·Deborah) / 택1 2칸(ISTJ·ISTP) / 내 추천 9칸. → 아버지껜 "합의 5 확인 · 택1 2 선택 · 9칸 A·B 중 택1" 형태로 전달.

## 디자인 피드백 (claude design 재생성 시 반영)

- **시안 양호**: Pastor-reviewed 배지, 1:1·9:16 공유 카드, 저마찰 질문(진행바·"You're doing great"·"No ads, no tricks"), SAMPLE 라벨, 인디고+크림+골드 톤.
- **반영할 것**: 랜딩 CTA-first 강화 · 16유형 미리보기 8장→티저 축소 · 헤더 Start 상시(있음) · 공유 링크는 랜딩으로 · 문항 20개.
- **주의**: 시안 인물 세트(David·Esther·Ruth·Joseph·Moses·Daniel…)는 claude design **placeholder**("Sample · illustrative only"). 실제 16인물·타이틀은 위 검수표 확정본이 진짜 — 디자인이 인물 선정을 고정하게 두지 말 것.

## 다음 할 일 (내일 회사에서)

1. **매핑 비교표 → 아버지(합동 목사) 검수 요청** (합의 5 확인 / 택1 2 선택 / 9칸 택1)
2. 검수 통과분으로 **유형별 강점·약점·소명·구절(WEB) 풀 초안** 작성
3. (택1) DESIGN_BRIEF에 위 피드백 반영 → claude design 재생성
4. 도메인 후보 확정·구매 / Next.js 스캐폴딩

## 열린 질문

- 문항 수 12 vs 20
- ISTJ(Noah/Luke), ISTP(Gideon/Rahab) 택1
- 도메인명 (PROJECT.md §12)
- About/Privacy 시안 필요 여부 (현재는 불필요로 판단)
