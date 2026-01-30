# AAII Website

Auburn Artificial Intelligence Initiative website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd aaii-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Deployment to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure the build
5. Click Deploy

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout with nav/footer
│   └── page.tsx         # Main page
└── components/
    ├── Navigation.tsx   # Top navigation bar
    ├── Footer.tsx       # Site footer
    ├── Logo.tsx         # AAII logo component
    └── sections/
        ├── HeroSection.tsx
        ├── MissionSection.tsx
        ├── MeetingsSection.tsx
        ├── SummitSection.tsx
        ├── LeadershipSection.tsx
        └── GetInvolvedSection.tsx
```

## Customization

### Colors

Edit `tailwind.config.ts` to adjust the color palette:

- `aaii-blue` - Primary blue gradient colors
- `aaii-orange` - Accent orange colors

### Content

Each section component contains its own content. Edit the arrays at the top of each file to update:

- Meeting topics
- Leadership info
- Summit schedule
- Social links

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + custom SVGs
