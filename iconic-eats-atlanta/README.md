# Iconic Eats — Atlanta (MVP Scaffold)

A static, no-build-step scaffold for the **Iconic Eats — Atlanta** single-page
spotlight on The Varsity, built from `PRD-iconic-eats-atlanta-mvp.md`.

## Stack

Plain **HTML + CSS + Bootstrap 5** (via CDN), with a small vanilla-JS layer —
no bundler, no framework, no build step. Open `index.html` in a browser and
it works.

> **Note on PRD §8:** the PRD's recommended stack is React + Vite + Tailwind.
> This scaffold intentionally uses static HTML/CSS/Bootstrap instead (simpler,
> zero-build, easy to hand off), per the current request. The content model —
> a local JS/JSON data file driving the menu cards (FR-5) — is preserved so
> porting to React later just means turning `data/menu-data.js` into props/a
> fetch and the section markup into components.

## Structure

```
iconic-eats-atlanta/
├── index.html            # All sections, single route (FR-1)
├── css/style.css          # Design tokens (PRD §4.1) + component styles
├── js/main.js              # Card rendering, scroll-spy init, accordion is
│                            #  native Bootstrap, email validation, analytics
│                            #  event hook, reduced-motion-aware timeline
├── data/menu-data.js       # "The Famous Food" card content (FR-5)
├── assets/img/             # Placeholder SVGs — see note below
│   ├── hero.svg
│   ├── food/*.svg
│   └── cities/*.svg
└── README.md
```

## Running it

Just open `index.html` directly in a browser — everything (data, images,
scripts) is a relative file reference, no server required. For a closer
approximation of production (and to test lazy-loading/relative paths under
HTTP), you can also serve it locally, e.g.:

```
npx serve .
```

## PRD coverage notes

- **§4.1 Palette / §4.2 Design** — implemented as CSS custom properties in
  `css/style.css` (`--ie-cream`, `--ie-white`, `--ie-crimson`,
  `--ie-brightred`), Bebas Neue for display headings, Inter for body copy.
- **§5.1–5.8 Sections** — all present in `index.html`: sticky nav w/
  scroll-spy, hero, The Story (timeline + pull-quote), The Famous Food
  (data-driven cards + Learn the Lingo accordion), The Experience (3-up
  tiles), Plan Your Visit (live Google Maps embed, directions/official
  site/travel-agent CTAs), More Cities teaser (grayed cards + email capture),
  disclaimer footer.
- **FR-1 → FR-10** — see inline comments in `js/main.js` and `index.html`
  mapping code to each requirement. FR-9 analytics calls are stubbed through
  `IE_trackEvent()`, which auto-detects `gtag`/`plausible` if present and
  otherwise logs to console — wire in a real analytics snippet when ready.
- **Accessibility (NFR)** — semantic landmarks, skip link, visible focus
  states, alt text on all images, `prefers-reduced-motion` respected for the
  timeline animation and smooth scroll.
- **SEO (NFR)** — title/meta description, Open Graph + Twitter card tags,
  `Restaurant` JSON-LD, single canonical URL (update the placeholder domain
  before launch).

## ⚠️ Placeholder imagery — must be replaced before launch

Most images in `assets/img/` are **original, generated SVG placeholders**
with a text label — none of them reproduce The Varsity's logo or copyrighted
photography (see PRD §10 trademark/licensing risk). Swap these for licensed
or original photography (food close-ups, historical shots) before this goes
live, and keep `alt` text accurate to the real image.

Two real photos supplied by the user are now in place:

- `assets/img/Varsity_Atlanta_hero.jpg` (hero background) — shows the
  Atlanta skyline **and The Varsity's neon "V" sign**.
- `assets/img/Varsity_burgers.jpg` (The Story section) — a tray shot that
  includes **The Varsity's branded cup and napkin liner/logo**.

Both include The Varsity's trademarked branding. Per PRD §7 ("no
reproduction of The Varsity's trademarked logo... without permission") and
§10 (trademark exposure risk), confirm these photos are properly
licensed/rights-cleared for this use before launch.

## Out of scope (per PRD §1.4)

No online ordering/reservations, no accounts, no CMS/admin, no backend. The
email capture form (§5.7) validates client-side only and does not transmit
or store data — wire it to a real endpoint (or embed a provider's form) when
ready to collect signups.

## Suggested next steps

1. Source/license real photography and swap out `assets/img/*`.
2. Wire `js/main.js`'s `IE_trackEvent` to GA4 or Plausible (FR-9).
3. Replace the `mailto:` "Talk to a Travel Agent" CTA and the email-capture
   form with real endpoints once available.
4. Run a Lighthouse pass (target ≥90 perf / ≥95 a11y per PRD §7) once real
   images are in place — the current placeholders are lightweight SVGs so
   scores should stay high as a baseline.
5. If/when this grows past one restaurant, promote `data/menu-data.js` into
   a per-restaurant JSON file and template the rest of `index.html`.
