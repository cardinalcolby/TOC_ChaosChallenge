# Product Requirements Document

## Iconic Eats — City Restaurant Spotlight SPA
**MVP: Atlanta, GA — Featuring The Varsity**

| | |
|---|---|
| **Version** | 1.0 (Draft) |
| **Date** | August 19, 2026 |
| **Status** | For Review |
| **Product Type** | Single-Page Application (SPA), marketing/travel content site |

---

## 1. Overview

### 1.1 Product Vision
Iconic Eats is a travel-agency-style website that helps travelers discover the most iconic, historic, and beloved restaurants in major cities. Each city gets a destination page that treats a legendary restaurant as an attraction — not just a place to eat, but a reason to visit the city.

### 1.2 MVP Scope
A single-page application for **Atlanta, GA** spotlighting **The Varsity**, Atlanta's Original American Eatery (family owned and operated since 1928). The MVP validates the content format, visual identity, and engagement model before expanding to additional restaurants and cities.

### 1.3 Positioning Statement
*For food-loving travelers planning a trip to Atlanta, Iconic Eats is the travel guide that showcases the city's most legendary dining institution — so your trip includes a true taste of local history, not just another meal.*

### 1.4 Out of Scope (MVP)
- Online ordering, reservations, or any transactional features
- User accounts, login, or saved trips
- Multiple cities or multiple restaurants
- CMS/admin panel (content is hard-coded or in a local JSON file)
- Backend services (static hosting only)

---

## 2. Goals & Success Metrics

### 2.1 Business Goals
1. Validate the "iconic restaurant as travel destination" content format.
2. Establish a reusable page template and design system for future cities.
3. Drive outbound engagement (directions, official site visits, trip-planning CTA clicks).

### 2.2 Success Metrics (first 60 days post-launch)
| Metric | Target |
|---|---|
| Avg. time on page | ≥ 90 seconds |
| Scroll depth (reach "Plan Your Visit" section) | ≥ 50% of sessions |
| CTA click-through (Directions / Official Site / Plan Trip) | ≥ 8% of sessions |
| Bounce rate | ≤ 55% |
| Lighthouse Performance / Accessibility | ≥ 90 / ≥ 95 |

---

## 3. Target Audience

1. **Trip Planners (primary)** — Travelers researching Atlanta for an upcoming visit; want memorable, "can't-miss" local experiences.
2. **Food Tourists** — People who build itineraries around eating; motivated by history, authenticity, and famous dishes.
3. **Locals & Nostalgics** — Atlantans and former residents sharing or reliving hometown pride; strong social-share potential.

---

## 4. Brand & Visual Design

### 4.1 Color Palette (required)
| Role | Color | RGB | Hex |
|---|---|---|---|
| Background / warm neutral | Cream | 231, 210, 185 | `#E7D2B9` |
| Surface / content panels | White | 255, 255, 255 | `#FFFFFF` |
| Primary brand / headers, nav, CTAs | Crimson | 206, 14, 45 | `#CE0E2D` |
| Accent / hover states, highlights, badges | Bright Red | 237, 39, 66 | `#ED2742` |

**Usage rules**
- Crimson (`#CE0E2D`) is the dominant brand color: sticky nav, hero overlay accents, primary buttons, section headers. (This closely matches The Varsity's own brand red.)
- Bright Red (`#ED2742`) is reserved for hover/active states, badges (e.g., "Since 1928"), and secondary accents — never as large fills next to crimson without separation.
- Cream is the page background, evoking vintage diner menus and Americana.
- White is used for content cards, menu panels, and text on red backgrounds.
- Text on cream/white: near-black (`#1A1A1A`) for AA/AAA contrast. Text on crimson/red: white.

### 4.2 Design Direction
- **Tone:** Retro Americana drive-in meets modern travel editorial. Bold, warm, playful — big type, generous photography, vintage-inspired badges.
- **Typography:** A bold condensed display face for headlines (drive-in signage feel) paired with a clean humanist sans for body copy.
- **Imagery:** Hero photography of the restaurant exterior/neon signage, food close-ups (chili dogs, onion rings, Frosted Orange), and historical photos.
- **Motifs:** Ticket-stub/badge shapes, subtle diagonal stripes, "V" sign iconography-inspired shapes (original artwork only — do not reproduce The Varsity's trademarked logo/assets without license).

---

## 5. Information Architecture & Page Sections

Single page with sticky top navigation that smooth-scrolls to anchored sections:

`Home (Hero) · The Story · The Famous Food · The Experience · Plan Your Visit · More Cities (teaser)`

### 5.1 Sticky Navigation
- Crimson bar, white wordmark ("Iconic Eats — Atlanta"), anchor links, and a persistent **"Plan Your Trip"** CTA button (bright red on hover).
- Collapses to a hamburger menu below 768px.

### 5.2 Hero Section
- Full-viewport hero image of The Varsity with cream/crimson gradient treatment.
- Headline: *"Atlanta's Most Iconic Bite."* Subhead: *"The Varsity — Atlanta's Original American Eatery, serving the city since 1928."*
- Badge: "EST. 1928" in bright red.
- Primary CTA: **Plan Your Visit** (scrolls to §5.6). Secondary CTA: **See the Menu Highlights**.

### 5.3 The Story
- Editorial block: founded in 1928 by Frank Gordy on a small lot near Georgia Tech; grew into a world-famous drive-in known for fresh, fast Southern classics.
- Timeline strip (1928 → today) with 4–5 milestones.
- Pull-quote treatment of the famous greeting, *"What'll ya have?"*

### 5.4 The Famous Food
- Card grid (white cards on cream) of signature items: chili dogs, chili cheese slaw dogs, burgers, onion rings, fried peach pie, and the Frosted Orange shake.
- Each card: photo, name, one-line description, "must-try" badge on 2–3 hero items.
- Fun sidebar: **"Learn the Lingo"** — a short glossary of Varsity ordering slang (e.g., "walk a dog") presented as a flip-card or accordion.

### 5.5 The Experience
- What visiting is like: ordering at the counter, the scale of the flagship location, game-day energy near Georgia Tech, group/bus friendliness.
- 3-up highlight tiles: *Drive-In Heritage · Game Day Tradition · Family Owned Since 1928*.

### 5.6 Plan Your Visit
- Practical travel info card: flagship address (61 North Avenue NW, Atlanta), embedded static map, nearby attractions (Georgia Tech, Midtown, Mercedes-Benz Stadium, Georgia Aquarium), and suggested itinerary blurb ("Pair lunch at The Varsity with…").
- CTAs: **Get Directions** (Google Maps link), **Official Website** (thevarsity.com, opens new tab), **Talk to a Travel Agent** (mailto/contact stub for MVP).
- Hours/location details link out to the official site rather than duplicating data that can go stale.

### 5.7 More Cities (Teaser)
- "Coming soon" strip with 3 grayed city cards (e.g., Chicago, New Orleans, Nashville) and an email-capture input (front-end only for MVP; stores nothing or posts to a placeholder endpoint).

### 5.8 Footer
- Crimson footer: Iconic Eats wordmark, anchor links, social icons, disclaimer: *"Iconic Eats is an independent travel guide and is not affiliated with or endorsed by The Varsity."*

---

## 6. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-1 | SPA renders all sections on a single route with smooth-scroll anchor navigation | Must |
| FR-2 | Sticky nav highlights the section currently in view (scroll-spy) | Must |
| FR-3 | Fully responsive: 320px mobile through 1440px+ desktop | Must |
| FR-4 | Hero and section images lazy-load below the fold | Must |
| FR-5 | Menu highlight cards render from a local JSON/JS data file (template reusability for future restaurants) | Must |
| FR-6 | "Learn the Lingo" interactive accordion/flip cards | Should |
| FR-7 | Outbound CTAs (Directions, Official Site) open in a new tab with `rel="noopener"` | Must |
| FR-8 | Email capture field with client-side validation (no backend required for MVP) | Should |
| FR-9 | Analytics events on CTA clicks, scroll depth, and section views | Should |
| FR-10 | Timeline animates in on scroll (respects `prefers-reduced-motion`) | Could |

---

## 7. Non-Functional Requirements

- **Performance:** Lighthouse ≥ 90; LCP < 2.5s on 4G; total page weight < 1.5 MB (optimized/WebP images); ship as a static build on a CDN.
- **Accessibility:** WCAG 2.1 AA — semantic landmarks, keyboard-navigable menu and accordions, visible focus states, alt text on all imagery, color-contrast-checked palette usage.
- **SEO:** Descriptive title/meta, Open Graph + Twitter cards, JSON-LD (`TouristAttraction` / `Restaurant` reference), single canonical URL. (SPA must pre-render or be statically generated for crawlability.)
- **Browser support:** Latest two versions of Chrome, Safari, Firefox, Edge; iOS and Android mobile browsers.
- **Legal/Brand:** No reproduction of The Varsity's trademarked logo or copyrighted photography without permission; use licensed/original imagery and include the non-affiliation disclaimer.

---

## 8. Technical Approach (Recommended)

- **Framework:** React + Vite (or equivalent lightweight SPA framework), statically exported.
- **Styling:** Tailwind CSS with the four palette colors defined as design tokens (`cream`, `paper`, `crimson`, `brightred`).
- **Content model:** `restaurant.json` + `city.json` data files driving the template — the key enabler for scaling to city #2 without redesign.
- **Hosting:** Static hosting/CDN (Netlify, Vercel, or S3+CloudFront).
- **Analytics:** Lightweight, privacy-friendly analytics (e.g., Plausible) or GA4.

---

## 9. Milestones

| Phase | Deliverable | Duration |
|---|---|---|
| 1. Design | Moodboard, hi-fi mockups (mobile + desktop), token sheet | 1 week |
| 2. Build | Static SPA with all sections, data-driven cards | 2 weeks |
| 3. Content | Copywriting, image sourcing/licensing, fact review | 1 week (parallel) |
| 4. QA & Launch | Accessibility/perf audit, cross-browser QA, deploy | 1 week |

---

## 10. Risks & Open Questions

| Item | Notes |
|---|---|
| Image licensing | Original photography of The Varsity may require a shoot or licensed stock; historical photos need rights clearance. |
| Trademark exposure | Confirm with legal how the restaurant name/likeness may be used editorially; disclaimer required. |
| Stale info | Avoid hard-coding hours/prices; link out to the official site for anything that changes. |
| Partnership opportunity | Should we approach The Varsity for an official partnership before launch? Could unlock assets and co-marketing. |
| City #2 criteria | Define selection criteria (restaurant age, cultural significance, photogenic appeal) before scaling. |

---

## 11. Future Roadmap (Post-MVP)

1. Additional Atlanta restaurants (3–5 per city) with a city landing grid.
2. New cities: Chicago, New Orleans, Nashville, NYC.
3. Itinerary builder: pair iconic restaurants with nearby attractions.
4. Travel-agent booking integration and partner offers.
5. Light CMS for non-technical content editors.
