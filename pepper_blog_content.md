# Pepper — Tech Blog Content & Build Spec
## pepper.kimsheritage.com

---

## 1. Project Brief

**Pepper** is a build log — a serialised account of building an AI assistant that feels less like a tool and more like a person. The name references Jarvis, but the ambition is more grounded: real support, human-adjacent, useful without being cold.

This blog documents the journey from concept to product, episode by episode.

**Subdomain:** `pepper.kimsheritage.com`
**Parent brand:** Kims Heritage Holdings (`kimsheritage.com`)
**Relationship:** Independent subdomain. No nav link to/from parent. Shares design tokens only.
**Author:** Danny Kim (Managing Director, Kims Heritage Holdings / Solo Developer)

---

## 2. Design System (Inherited from kimsheritage.com)

### Fonts
```
Headline / Display  : Cormorant Garamond (weights: 300, 400, 500 — italic where appropriate)
Small Caps / Labels : Cormorant SC (weights: 300, 400, 500)
Body / UI           : Raleway (weights: 200, 300, 400)
Code blocks         : JetBrains Mono or Fira Code (monospace)
```

Load via Google Fonts:
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Cormorant+SC:wght@300;400;500&family=Raleway:wght@200;300;400&family=JetBrains+Mono:wght@400&display=swap
```

### Colour Palette
```css
--cream       : #F5F0E8;   /* Primary background */
--cream-dark  : #EDE8DF;   /* Alternate / sidebar background */
--burgundy    : #6B1F2A;   /* Brand accent, active states, highlights */
--warm-black  : #2C2420;   /* Primary text */
--warm-brown  : #5A4A40;   /* Body text */
--warm-gray   : #8A7A6A;   /* Labels, metadata, tertiary text */
--border      : #D0C8BC;   /* All dividers and borders */
--b0a090      : #B0A090;   /* Muted nav / sub text */
```

### No images rule
Minimise images. Use typographic and CSS-only decoration. No hero images. No post thumbnails.

---

## 3. Site Architecture

### Layout — Two-Panel (Desktop)
```
┌──────────────────────────────────────────────────────────┐
│  NAV BAR  (top, fixed, full width)                       │
├────────────────┬─────────────────────────────────────────┤
│                │                                         │
│  EPISODE LIST  │  EPISODE CONTENT                        │
│  (left panel)  │  (right panel, scrollable)              │
│  ~280px fixed  │  flex-1                                  │
│                │                                         │
│                │  [Title]                                 │
│                │  [Meta: date, read time, tags]           │
│                │  [Body — prose / code blocks]            │
│                │                                         │
│                │  ── ── ──                               │
│                │  [Next Episode →]                        │
│                │                                         │
└────────────────┴─────────────────────────────────────────┘
```

### Layout — Mobile
```
- Nav bar collapses to: logo wordmark + hamburger
- Episode list becomes a slide-in drawer or top collapsible
- Content panel is full width
- Next episode button stays at bottom of content
```

### URL Structure
```
/                    → redirects to /ep/00 (or shows episode list full screen on mobile)
/ep/00               → Episode 00
/ep/01               → Episode 01
...
/ep/19               → Episode 19 (max)

/en/ep/00            → English version of Episode 00
/en/ep/01            → English version of Episode 01
...
```

---

## 4. Navigation Bar

```
Left:
  [Burgundy block 36×36px with "P" monogram]
  Wordmark: "Pepper" (Cormorant SC, 13px, tracking 3px)
  Sub: "A Build Log" (Raleway 300, 7px, tracking 2.5px, color #B0A090)

Right:
  Language toggle: [KO] / [EN]   ← active language underlined in burgundy
  (Raleway 300, 8px, tracking 2px)
```

---

## 5. Episode List Panel (Left Sidebar)

```
Section label: "Episodes" (Cormorant SC, 9px, tracking 3px, color #8A7A6A)

Each episode item:
  EP 00  Why I Named It Pepper          ← episode number + title
  EP 01  The Problem With Jarvis        ← truncate title at ~30 chars if needed
  EP 02  First Conversations
  ...

Active episode:
  - Left border: 2px solid #6B1F2A (burgundy)
  - Background: #EDE8DF
  - Text: #2C2420

Inactive episode:
  - No border
  - Hover: background #EDE8DF, transition 150ms

Font: Raleway 300, 11px
EP number: Cormorant SC 300, 9px, color #8A7A6A
```

---

## 6. Episode Content Panel (Right)

### Header
```
EP 00                        ← Cormorant SC 300, 11px, tracking 3px, color #8A7A6A
Why I Named It Pepper        ← Cormorant Garamond 400, 32px (desktop) / 24px (mobile)
─────────────────────────    ← thin rule, color #D0C8BC

2024년 12월  ·  4 min read  ·  #origin #naming
← Raleway 300, 10px, color #8A7A6A
```

### Body
```
Prose text:
  Font: Raleway 300, 15px, line-height 1.85, color #5A4A40
  Max-width: 640px
  Paragraph spacing: 1.5em

Pull quotes:
  Font: Cormorant Garamond 300 italic, 20px
  Left border: 3px solid #6B1F2A
  Padding-left: 1.5em
  Color: #2C2420

Code blocks:
  Font: JetBrains Mono, 13px
  Background: #2C2420
  Text: #F5F0E8
  Padding: 1.25em 1.5em
  Border-radius: 2px

Inline code:
  Font: JetBrains Mono, 12px
  Background: #EDE8DF
  Color: #6B1F2A
  Padding: 0.1em 0.4em
```

### Next Episode Button (bottom of content)
```
────────────────────────────────────
Next  →  EP 01 · The Problem With Jarvis
────────────────────────────────────

Font: Raleway 300
EP label: Cormorant SC 9px, color #8A7A6A
Title: Raleway 300, 12px, color #2C2420
Hover: burgundy underline on title
No "Previous" link — forward-only reading encouraged
(sidebar handles navigation backwards)
```

---

## 7. Language Toggle Behaviour

- Default language: **Korean (KO)**
- Toggle switches ALL content (episode list titles, episode body, metadata)
- URL updates: `/ep/00` ↔ `/en/ep/00`
- Each episode entry in the content file has `title_ko`, `title_en`, `body_ko`, `body_en`
- Language preference stored in `localStorage` key: `pepper_lang`

---

## 8. SEO & GEO Readiness

### Per-Episode Meta Tags (inject dynamically per route)
```html
<title>{episode_title} — Pepper Build Log</title>
<meta name="description" content="{episode_summary_150_chars}">
<meta name="author" content="Danny Kim">
<link rel="canonical" href="https://pepper.kimsheritage.com/ep/{nn}">

<!-- Open Graph -->
<meta property="og:type" content="article">
<meta property="og:title" content="{episode_title} — Pepper">
<meta property="og:description" content="{episode_summary}">
<meta property="og:url" content="https://pepper.kimsheritage.com/ep/{nn}">
<meta property="og:site_name" content="Pepper — A Build Log by Danny Kim">

<!-- Twitter/X Card -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="{episode_title} — Pepper">
<meta name="twitter:description" content="{episode_summary}">

<!-- Language alternates -->
<link rel="alternate" hreflang="ko" href="https://pepper.kimsheritage.com/ep/{nn}">
<link rel="alternate" hreflang="en" href="https://pepper.kimsheritage.com/en/ep/{nn}">
```

### Site-level SEO
```html
<!-- robots.txt -->
User-agent: *
Allow: /
Sitemap: https://pepper.kimsheritage.com/sitemap.xml

<!-- sitemap.xml: auto-generate from episodes array -->
<!-- Include both /ep/nn and /en/ep/nn URLs -->
```

### GEO Readiness (for AI crawlers / LLM context)
```html
<!-- llms.txt at root -->
# Pepper
> A build log documenting the development of an AI assistant named Pepper.
> Author: Danny Kim
> Language: Korean (primary), English
> Topics: AI development, solo developer, personal AI assistant, build log
> Episodes: EP 00 – EP 19
> Site: https://pepper.kimsheritage.com

<!-- Structured Data (JSON-LD) per episode -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{episode_title}",
  "description": "{episode_summary}",
  "author": {
    "@type": "Person",
    "name": "Danny Kim",
    "url": "https://kimsheritage.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Kims Heritage Holdings"
  },
  "datePublished": "{date}",
  "inLanguage": "ko",
  "url": "https://pepper.kimsheritage.com/ep/{nn}",
  "isPartOf": {
    "@type": "Blog",
    "name": "Pepper — A Build Log",
    "url": "https://pepper.kimsheritage.com"
  },
  "position": {episode_number}
}
</script>
```

---

## 9. Technical Stack Recommendation

```
Framework  : Next.js 14 (App Router) — matches kimeunsoo.xyz stack
Styling    : Tailwind CSS + custom CSS variables for brand tokens
Deployment : Vercel
DNS        : GoDaddy → pepper.kimsheritage.com CNAME → cname.vercel-dns.com
Fonts      : Google Fonts (preconnect + display=swap)
State      : localStorage for lang preference only
No CMS     : Content lives in /content/episodes.ts (TypeScript array)
```

---

## 10. Content Data Structure

### Philosophy: Metadata vs Body separation

`episodes.ts` holds **metadata only** — titles, dates, tags, summaries, published state.
Episode bodies live in **separate `.md` files**, one per episode per language.

This keeps `episodes.ts` lightweight and makes writing feel natural — open a markdown file, write, save.

---

### `/content/episodes.ts` — metadata only

```typescript
export interface Episode {
  id: number;               // 0–19
  slug: string;             // "00", "01", ... "19"
  date: string;             // "2024-12-01" (ISO)
  readTime: number;         // minutes (estimated)
  tags: string[];           // e.g. ["origin", "naming"]
  published: boolean;       // false = greyed out, no route generated

  title: {
    ko: string;
    en: string;
  };

  summary: {                // SEO meta description (~150 chars max)
    ko: string;
    en: string;
  };
  // No body here — body is loaded from /content/episodes/{slug}.ko.md etc.
}

export const episodes: Episode[] = [ ... ];
```

---

### `/content/episodes/` — body markdown files

```
/content/episodes/
  00.ko.md    ← EP 00 Korean body
  00.en.md    ← EP 00 English body
  01.ko.md
  01.en.md
  02.ko.md    ← empty or placeholder until published
  02.en.md
  ...
  19.ko.md
  19.en.md
```

**How body files are loaded (Next.js App Router):**

```typescript
// In /app/ep/[slug]/page.tsx
import fs from 'fs';
import path from 'path';

const bodyPath = path.join(process.cwd(), 'content/episodes', `${slug}.ko.md`);
const body = fs.readFileSync(bodyPath, 'utf-8');
```

Body is rendered with `react-markdown` + `remark-gfm`.
Custom renderers: `blockquote` → pull quote, `code` → dark block, `p` → body text styles.

---

### Danny's workflow for adding a new episode

1. Open `episodes.ts` → set `published: true`, fill in title / summary / date / tags
2. Open `content/episodes/02.ko.md` → write Korean body in Markdown
3. Open `content/episodes/02.en.md` → write English body in Markdown
4. `git push` → Vercel auto-deploys

That's it. No other files to touch.

---

## 11. Episode Metadata (episodes.ts)

> **Update instructions for Danny:**
> To publish a new episode:
> 1. Set `published: true` in `episodes.ts`
> 2. Fill in `title`, `summary`, `date`, `readTime`, `tags`
> 3. Write body in `content/episodes/{slug}.ko.md` and `{slug}.en.md`
>
> Unpublished episodes (`published: false`) show greyed-out in sidebar with no route.

---

### EP 00

```typescript
{
  id: 0,
  slug: "00",
  date: "2024-12-01",
  readTime: 4,
  tags: ["origin", "naming"],
  published: true,
  title: {
    ko: "왜 페퍼라고 이름 붙였나",
    en: "Why I Named It Pepper",
  },
  summary: {
    ko: "자비스라는 이름 대신 페퍼를 선택한 이유. 이 프로젝트가 무엇을 만들려고 하는지에 대한 첫 번째 기록.",
    en: "Why I chose Pepper over Jarvis — and what that choice says about what I'm actually trying to build.",
  },
  // body → content/episodes/00.ko.md & 00.en.md
}
```

---

### EP 01

```typescript
{
  id: 1,
  slug: "01",
  date: "2024-12-08",
  readTime: 5,
  tags: ["concept", "AI assistant"],
  published: true,
  title: {
    ko: "자비스의 문제",
    en: "The Problem With Jarvis",
  },
  summary: {
    ko: "우리가 상상하는 AI 어시스턴트의 원형, 자비스. 그런데 자비스는 왜 실제로 쓸 수 없는 걸까.",
    en: "Jarvis is the archetype we all imagine. But Jarvis is fictional for a reason — here's what's actually missing.",
  },
  // body → content/episodes/01.ko.md & 01.en.md
}
```

---

### EP 02–19 · Placeholders

```typescript
// Repeat for id: 2 through id: 19
{
  id: 2,          // increment per episode
  slug: "02",     // zero-padded string
  date: "",
  readTime: 0,
  tags: [],
  published: false,
  title: { ko: "Coming Soon", en: "Coming Soon" },
  summary: { ko: "", en: "" },
  // body files: content/episodes/02.ko.md & 02.en.md (can be empty)
}
```

---

## 12. File Structure for Claude Code

```
pepper/
├── app/
│   ├── layout.tsx              ← root layout, fonts, global meta
│   ├── page.tsx                ← redirect to /ep/00
│   ├── sitemap.ts              ← auto-generate from published episodes
│   ├── ep/
│   │   └── [slug]/
│   │       └── page.tsx        ← Korean episode page
│   └── en/
│       └── ep/
│           └── [slug]/
│               └── page.tsx    ← English episode page
├── components/
│   ├── NavBar.tsx
│   ├── EpisodeList.tsx
│   ├── EpisodeContent.tsx
│   ├── NextEpisodeButton.tsx
│   └── LanguageToggle.tsx
├── content/
│   ├── episodes.ts             ← METADATA ONLY (title, date, tags, summary, published)
│   └── episodes/
│       ├── 00.ko.md            ← EP 00 Korean body
│       ├── 00.en.md            ← EP 00 English body
│       ├── 01.ko.md
│       ├── 01.en.md
│       ├── 02.ko.md            ← empty until published
│       ├── 02.en.md
│       └── ...                 ← 03–19, both languages
├── public/
│   ├── robots.txt
│   └── llms.txt
├── styles/
│   └── globals.css             ← CSS variables, base styles
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## 13. Build Notes for Claude Code

1. **`/content/episodes.ts`** — metadata only. No body strings. Single source of truth for titles, dates, tags, summaries, published state.
2. **`/content/episodes/{slug}.{lang}.md`** — one file per episode per language. Body is loaded server-side via `fs.readFileSync` at build/request time.
3. **Body loading pattern**: in each route's `page.tsx`, read the matching `.md` file using `fs` + `path.join(process.cwd(), 'content/episodes', ...)`. Handle missing files gracefully (empty string fallback).
4. **CSS variables** must match the palette exactly (Section 2). Do not introduce new colours.
5. **Font loading** via `next/font/google` or direct Google Fonts link in `layout.tsx`.
6. **Language routing**: Korean at `/ep/[slug]`, English at `/en/ep/[slug]`. `LanguageToggle` navigates between them. Persist choice in `localStorage`.
7. **Sidebar**: fixed on desktop, collapsible drawer on mobile. Highlight active episode.
8. **Markdown rendering**: `react-markdown` + `remark-gfm`. Override `blockquote` → pull quote component. Override `code` → dark block. Override `p` → body text styles.
9. **`published: false` episodes**: render in sidebar as greyed-out text, `pointer-events: none`, no route generated. Create empty placeholder `.md` files for all 20 episodes at init.
10. **SEO**: generate `<head>` metadata dynamically per route using Next.js `generateMetadata()`. Source from `episodes.ts` summary field. Include JSON-LD structured data.
11. **`sitemap.ts`**: generate via `app/sitemap.ts` from published episodes only. Include both `/ep/` and `/en/ep/` variants.
12. **`llms.txt`**: static file in `/public/`. Update manually when new episodes publish.
13. **No external analytics, no cookies** — keep it clean.
14. **Vercel deployment**: standard Next.js. DNS via GoDaddy CNAME to Vercel.

---

*End of pepper_blog_content.md*
*Last updated: 2025-05*
