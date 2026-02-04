# AAII Website

Auburn Artificial Intelligence Initiative student organization website.

## Tech Stack
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom color palette (aaii-blue, aaii-orange)
- **Icons**: Lucide React

## Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout (nav + footer)
│   ├── page.tsx        # Main page assembling all sections
│   └── globals.css     # Global styles + Tailwind
└── components/
    ├── Navigation.tsx  # Fixed navbar with mobile menu
    ├── Footer.tsx
    ├── Logo.tsx        # SVG logo
    └── sections/       # Page sections
        ├── HeroSection.tsx
        ├── MissionSection.tsx
        ├── MeetingsSection.tsx
        ├── SummitSection.tsx
        ├── SponsorSection.tsx
        ├── LeadershipSection.tsx
        └── GetInvolvedSection.tsx
```

## Key Files
- `tailwind.config.ts` - Custom colors (aaii-blue, aaii-orange scales)
- `src/app/globals.css` - Custom animations, gradients, scrollbar styles
- `public/summit-photos/` - Event photos (20+ images)
- `public/` - Headshots and sponsor/speaker logos

## Commands
- `npm run dev` - Start dev server (runs on localhost:3000)
- `npm run build` - Production build
- `npm run start` - Start production server

## Navigation Anchors
- #home, #about, #meetings, #summit, #sponsors, #leadership, #involved

## Sections Overview

### Meetings
- Bi-weekly Thursday meetings info
- Join GroupMe button (links to group)
- Topics covered list

### Summit
- Tab-based: 2026 Summit (coming soon) / 2025 Recap
- 2026: "Presented by The Biggio Center" - details coming soon
- 2025: Photo slideshow, stats, speakers (Apple, AWS, Synovus)
- Clickable call-out to view 2025 recap when on 2026 tab

### Sponsors
- Stats: attendees, members, speakers, partners
- Why partner benefits (4 cards)
- Past Sponsors: Biggio Center, AI@AU (with logos)
- Past Speakers: Apple, AWS, Synovus (with logos)
- Contact CTA: anf0047@auburn.edu

### Leadership
- President: Allison Fullwood (President & Co-Founder)
- Board of Advisors: Charlie Knott (Board Chair, Former President & Founder)
- Both have headshots and LinkedIn links
- "A Special Thanks To" section for Biggio Center

## Assets in /public
- `allison-headshot.png` - Allison's photo
- `charlie-headshot.png` - Charlie's photo
- `aiau-logo.png` - AI@AU logo
- `biggio-logo.png` - Biggio Center logo
- `apple-logo.png` - Apple logo (cropped 225%)
- `aws-logo.png` - AWS logo
- `synovus-logo.png` - Synovus logo

## Notes
- Single-page app with smooth scroll navigation
- Client components: Navigation.tsx, SummitSection.tsx (for interactivity)
- Background decorations need `pointer-events-none` to not block clicks
- Logos display with `filter brightness-0 invert` for white on dark theme
- Deployed via Vercel (auto-deploys from main branch)
