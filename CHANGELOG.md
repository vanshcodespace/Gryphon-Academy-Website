# Changelog — Gryphon Academy Website

All notable changes to this project are documented here.  
Format: **Type** · **What changed** · **File(s) affected**

---

## [Unreleased] — 2026-05-06 *(current session — not yet committed)*

### 🆕 Features

- **Mobile hamburger menu** — Full slide-in drawer with backdrop, body-scroll lock, Escape-key close, active-link indicator, and ARIA semantics (`role="dialog"`, `aria-modal`, `aria-expanded`)  
  → `src/components/home/Navbar.jsx`

- **Route-level code splitting** — All 6 page routes are now lazily loaded with `React.lazy` + `Suspense`, reducing the initial JS bundle size  
  → `src/App.jsx`

- **Full SEO head** — Added descriptive `<title>`, `<meta description>`, Open Graph tags, Twitter Card tags, `<link rel="canonical">`, `<link rel="preconnect">` for Cloudinary/Google Fonts, and removed the duplicate CDN FontAwesome load  
  → `index.html`

### 🐛 Fixes

- **Blank page on load** — Removed stray `import { Routes, useNavigate }` from `Home.jsx` that caused a runtime crash  
  → `src/pages/Home.jsx`

- **Undefined `Link` crash** — After removing hero buttons, the unused `<Link>` for the top-left logo caused a render failure; replaced with a plain `<a>` tag  
  → `src/components/home/Hero.jsx`

- **Dead `#contact` anchor links** — All `href="#contact"` anchors now correctly navigate to `/contact` via React Router `<Link>` in `CTA.jsx`, `WhoAreWe.jsx`, and `Brochure.jsx`  
  → `src/components/home/CTA.jsx`, `WhoAreWe.jsx`, `Brochure.jsx`

- **Broken brochure download** — `download.pdf` was deleted in a previous commit; both Brochure CTAs now route to `/contact` instead of a dead `href="#"`  
  → `src/components/home/Brochure.jsx`

- **Hero tagline extra whitespace** — Leading whitespace before "Let's Bridge The Gap" removed; entity-encoded as `&apos;`  
  → `src/components/home/Hero.jsx`

- **Unused import** — Removed `TopPlaced` import in `App.jsx` that was imported but never rendered  
  → `src/App.jsx`

### ⚡ Performance

- **Marquee rAF pauses off-screen** — Added `IntersectionObserver` to `useDraggableMarquee`; all 6 marquee `requestAnimationFrame` loops now pause when the section is not visible, eliminating the primary cause of hangs on low-end laptops  
  → `src/hooks/useDraggableMarquee.js`

- **Bridge video pauses off-screen** — `AudiencePathways` `Bridge.mp4` previously played forever; now paused via `IntersectionObserver` when scrolled out of view  
  → `src/components/home/AudiencePathways.jsx`

- **Hero video preload removed** — Changed from default preload to `preload="none"` so the hero video doesn't block page load  
  → `src/components/home/Hero.jsx`

- **Bridge video preload removed** — Same fix applied to `Bridge.mp4`  
  → `src/components/home/AudiencePathways.jsx`

- **`content-visibility: auto`** — Added `.cv-auto` utility class; heavy off-screen sections (AudiencePathways, Training, Numbers, Marquees, TopPlaced, Gallery, Testimonials) are wrapped in it so the browser skips layout/paint until they scroll into view  
  → `src/index.css`, `src/pages/Home.jsx`

- **GPU layer promotion for marquee tracks** — Added `will-change: transform` + `backface-visibility: hidden` on `.marquee-track` via CSS to promote tracks to their own compositor layer  
  → `src/index.css`

- **`prefers-reduced-motion` support** — All CSS animations are instantly disabled for users/devices that have enabled reduced-motion mode (improves accessibility and saves CPU on low-power devices)  
  → `src/index.css`

- **`preconnect` hints** — Added `<link rel="preconnect">` for Cloudinary and Google Fonts origins so DNS + TCP are resolved before the browser needs those assets  
  → `index.html`

### 🔄 Refactoring

- **Removed loading spinner** — `Suspense fallback` changed from a full-screen spinner to `null` — no loading animation on first visit  
  → `src/App.jsx`

- **Hero CTA buttons removed** — "Partner With Us" and "Explore Programs" buttons removed from the Hero section per design decision  
  → `src/components/home/Hero.jsx`

- **Hero overlay gradient improved** — Changed from flat semi-transparent overlay to a cinematic top-to-bottom gradient (`rgba` values adjusted)  
  → `src/components/home/Hero.jsx`

- **AudiencePathways ARIA** — Added `aria-hidden="true"` on decorative video, `role="img"` + `aria-label` on emoji icons  
  → `src/components/home/AudiencePathways.jsx`

---

## [2026-05-06] — `7f24e21` obsidian WIKI

### 📝 Docs
- Added `WIKI.md` — full project wiki covering architecture, components, hooks, data layer, styling system, and onboarding guides
- Added `.obsidian/` workspace config (Obsidian used for wiki editing)

---

## [2026-05-05] — `7086658` draggable marquee

### 🆕 Features
- Implemented `useDraggableMarquee` custom hook — click-and-drag horizontal scroll with momentum physics on `InstitutionsMarquee` and `CorporateMarquee`

---

## [2026-05-05] — `6e1a514` scroll aware spotlight effect fix

### 🐛 Fixes
- Fixed `useScrollAwareSpotlight` hook — spotlight position calculation corrected for `WhoAreWe` and `Numbers` sections

---

## [2026-05-05] — `69310ee` Navbar and Contact page changed

### 🔄 Refactoring
- Updated Navbar link styles and active-state indicator
- Contact page layout/content updates

---

## [2026-05-04] — `0250b55` institutions marquee correction

### 🐛 Fixes
- Fixed college logo display and ordering in `InstitutionsMarquee` — IDs now sort numerically before alphabetically

---

## [2026-04-28] — `e7c10d7` · `7ac44c3` · `3dce77a` · `7b70af5` · `9f566fa` · `6331768`

### 🆕 Features
- Added `AboutPage` with full section stack: `AboutHero → AboutNew → MissionVisionSection → AboutLeaders → AboutIntro → ImpactSection → AboutOffer → AboutGal → Testimonials → Footer`

### 🔧 Config
- Vercel deployment configuration and case-sensitivity fixes for file imports (Windows vs Linux path casing)

---

## [2026-04-27] — `0c8d579` · `da6c2f5`

### 🔄 Refactoring
- `TopPlaced` component updated — improved card layout and scroll-spotlight behaviour
- `InstitutionsMarquee` — college names resolved from file metadata; tooltip category badges added

---

## [2026-04-22] — `82ba3be` · `6213ae8` · `883d7b9` · `343bd9e` · `f627673` · `e294f84` · `65d13ff`

### 🔄 Refactoring
- `InstitutionsMarquee` tooltip: location badge colour-coded by university category (IIT, NIT, BITS, etc.)
- `Brochure` section: colour scheme updated
- Background gradient adjustments across multiple sections
- Spacing and layout tweaks — removed decorative dots, adjusted section padding

---

## Legend

| Icon | Type |
|------|------|
| 🆕 | New feature |
| 🐛 | Bug fix |
| ⚡ | Performance improvement |
| 🔄 | Refactoring / visual change |
| 📝 | Documentation |
| 🔧 | Config / build change |
| 📦 | Dependency change |
| ⚠️ | Breaking change |
