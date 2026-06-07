# Bible Character Test — Design Brief (prompt for the design phase)

> **DESIGN** — 비주얼·브랜드 방향과 디자인 단계용 프롬프트의 단일 진실. 기능·페이지는 [`SPEC.md`](./SPEC.md), 데이터·채점은 [`DATA.md`](./DATA.md)가 소유한다. 이 파일은 기능을 재정의하지 않고 참조만 한다.
>
> 아래 **Brand variables는 제안 기본값 — 조정 가능**. 바꾼 뒤 사용/재생성한다. 본문(§0~10)은 디자인 도구(claude design)에 그대로 붙여넣는 영어 프롬프트.

## Brand variables (adjustable defaults)

| Variable | Default | Note |
|---|---|---|
| Mood | Modern · warm · share-worthy — reverent, not stuffy | 16P급 polish + 공유하고 싶은 에너지 |
| Palette | Deep indigo/violet + warm gold accent, near-white bg, ink text | 대안 2개 제안 요청 |
| Theme | Light default, dark-mode-ready tokens | |
| Type | Inter (or clean English sans) | 영어 본문·헤딩 |
| Deliverable | Design system + 3 core screens, mobile-first React + Tailwind (shadcn) | 빌드 스택과 직결 |
| Screens | Landing · Test (question flow) · Result/Type page | |
| Share card | Per-type OG/share card (instagram-friendly) — **first-class** | 바이럴 핵심 |

---

# Design Brief — "Bible Character Test"

## 0. Your task
Design a complete, cohesive UI for the product below. Deliver (1) a small **design system** (tokens + core components) and (2) **high-fidelity, responsive mockups of 3 core screens**, as **mobile-first React + Tailwind CSS** compatible with **shadcn/ui**. Default to a **light theme** with **dark-mode-ready tokens**. All UI copy is in **English**. Use only clearly-labeled placeholder content — the sample Bible-character mappings/traits are **illustrative and NOT theologically finalized**.

## 1. Product context
- **What:** A free personality test (~20–30 questions) that maps the user to one of **16 Bible characters** (David, Daniel, Mary, …) and shows their **Strengths, Weaknesses, Spiritual Calling, and recommended Verses**.
- **Audience:** English-speaking Christians, arriving from search ("which Bible character am I") and social shares. Mostly **mobile**.
- **Benchmark:** 16Personalities — depth, a free test, and high shareability.
- **Differentiator:** theological accuracy (pastor-reviewed). The design must feel **trustworthy, not gimmicky**.
- **Priority:** the **result must be share-worthy**; monetization is secondary and must never obscure the result or the share action.
- **Nature:** a fast, static, SEO-driven site. No login, accounts, or payments. Calm and trustworthy, but alive.

## 2. Brand & visual direction
- **Mood:** modern, highly legible, with a warm spiritual touch; screenshot-worthy.
- **Palette:** deep indigo/violet (reverence, trust) primary; a warm gold/amber accent (hope) used sparingly; near-white bg; near-black ink. **Propose 2 alternative palettes** with rationale.
- **Typography:** clean English sans (assume Inter). Clear scale (display / h1–h3 / body / caption).
- **Imagery:** minimal. Layouts must look intentional **without** illustration (type- and space-driven). Use a **per-type accent** (color/symbol) instead of stock photography.
- **Iconography:** simple line icons (lucide-style).

## 3. Principles & hard constraints
1. **Mobile-first** (`base`→`sm`→`md`→`lg`). Show a mobile and a desktop frame per screen.
2. **The result is the product.** "Which character + strengths/calling" must be immediately scannable and **never obscured** by ads/monetization.
3. **Share card is first-class.** Design a **per-type share/OG card** (instagram-friendly square + landscape): character name + type title + one key trait, branded, screenshot-worthy.
4. **Monetization is subordinate:** email capture directly after the result body; Amazon books / POD / Buy Me a Coffee below it; (Phase 2) ad slots only **in-feed / bottom**, never above the result or around the share buttons.
5. **Accessibility:** WCAG AA contrast; meaning by **label/icon, not color alone**; tap targets ≥44px; visible focus.
6. **Performance/static:** lightweight, instant feel; no heavy media.
7. **Test flow:** one question at a time + progress bar; low-friction and encouraging.

## 4. Information architecture
Full site: Landing, Test, Type directory (`/types`), Type/Result page (`/types/[type]`), About, Privacy. **Design these 3 core screens** + shared chrome: **Landing**, **Test (question)**, **Result/Type page**.

## 5. Shared components
- **Header:** "Bible Character Test" wordmark (propose a simple concept) + nav: `Test` / `Types` / `About`. Mobile: compact bar.
- **Footer:** Buy Me a Coffee, contact (mailto), Privacy link.
- **Question card** + agree/disagree option buttons + **progress bar**.
- **Result blocks:** Strengths, Weaknesses, Spiritual Calling, Verses (with a small translation label, e.g. "WEB").
- **Share card** + share buttons (Instagram / X / Facebook).
- **Email capture form** ("Get your full result by email").
- **Monetization modules:** Amazon books, POD merch, donation — visually subordinate.
- **Ad slot** placeholder (Phase 2), clearly labeled and subordinate.
- **Empty/edge states.**

## 6. Screen specs

### A. Landing (`/`)
- Hook headline + subhead + a large **"Start the test"** CTA.
- 3 short "what you'll discover" points; a preview of the 16 types (link to `/types`). A small trust note (pastor-reviewed).

### B. Test (`/test`)
- One question per screen, a **progress bar**, back/next. Binary agree/disagree options. Encouraging microcopy. **No ads.**

### C. Result / Type page (`/types/[type]`)
- A **"Your result"** banner (when arrived from the test) on the canonical type page.
- **Header:** character name + type title + tagline + the **share card** visual.
- **Core body** (visual priority): Strengths · Weaknesses · Spiritual Calling · Recommended Verses.
- Then, in order: email capture → Amazon books → POD → Buy Me a Coffee → share buttons.
- Must be **screenshot/share-worthy**.

## 7. Data shapes (bind to these)
- **BibleType:** `character`, `title`, `tagline`, `summary`, `strengths[]`, `weaknesses[]`, `calling`, `verses[{ ref, text, translation }]`, `books[{ title, author }]`.
- **Question:** `text`, `options[{ text }]` (binary agree/disagree).

## 8. Sample content — SAMPLE / illustrative only (NOT theologically final)
Mark visibly as 예시/SAMPLE. Do **not** present mappings or traits as reviewed/factual.
- "David — *The Worshiping Warrior*" (SAMPLE): strengths (passionate, expressive), verse "Psalm 23:1 (WEB)".
- "Mary — *The Faithful Listener*" (SAMPLE).
- "Daniel — *The Steadfast Mind*" (SAMPLE).
- Use realistic English microcopy throughout (buttons, progress, empty states, labels).

## 9. Deliverables
1. **Tokens:** color (incl. per-type accents + status), type scale, spacing, radius, shadow — Tailwind theme + CSS variables, light + dark.
2. **Component set** (shadcn-compatible): header, footer, question card, progress bar, result blocks, share card, share buttons, email form, monetization modules, ad slot, empty state.
3. **3 responsive screens** (mobile + desktop): Landing, Test, Result/Type.
4. A short rationale for palette/type + the 2 alternative palettes.

## 10. Do NOT
- Do **not** present sample character mappings/traits as theologically final or reviewed.
- Do **not** use "MBTI" / "Myers-Briggs" in copy (trademark) — use your own "personality type" framing.
- Do **not** let monetization or ads obscure the result body or the share buttons.
- Do **not** add login, account, payment, or review UI — none exists in this product.
- Do **not** use real ministries'/publishers' copyrighted art or logos.
