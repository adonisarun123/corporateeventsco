# Corporate Events India — Marketing Site

A modern, responsive marketing site for **corporateeventsindia.com**, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The visual language is inspired by Airbnb — clean cards, generous whitespace, soft shadows, image-led layouts, and a sticky compact header.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with a custom brand palette
- **next/image** for responsive imagery (Unsplash placeholders)

## Getting Started

```bash
cd site
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm run start
```

## Routes

| Path | Page |
|---|---|
| `/` | Home — hero, services, how we work, outcomes, FAQ |
| `/about` | About Us |
| `/services` | Full services & activities catalogue |
| `/contact` | Brief form & contact info |
| `/blog` | Blog index |
| `/blog/why-corporate-events-fail` | Blog post |
| `/blog/indoor-outdoor-virtual-team-building` | Blog post |
| `/blog/corporate-outing-planning-timeline` | Blog post |
| `/blog/campus-to-corporate` | Blog post |
| `/blog/outbound-leadership-training` | Blog post |

## Brand Voice

Calm. Insightful. No fluff. Outcome > activity. Facilitation > fun. Design > logistics.

The line that runs through everything: *"What should be different after this?"*

## Project Structure

```
site/
├── app/
│   ├── layout.tsx          # Root layout, fonts, header/footer
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   ├── blog/page.tsx       # Blog index
│   └── blog/[slug]/page.tsx
├── components/             # Header, Footer, sections, primitives
├── lib/
│   └── content.ts          # Static content (copy, blog data)
└── public/
```
