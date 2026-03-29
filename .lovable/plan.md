

# Precigenetics.com — Full Website Build

## Overview
Build a complete, production-ready multi-page website for Precigenetics, Inc. — a MedTech startup revolutionizing drug discovery with real-time chemical imaging. The site will have 8 pages with a premium, scientific design system using violet/indigo branding.

## Design System Setup
- **Colors:** Deep violet primary (#7C3AED), indigo secondary (#4F46E5), slate neutrals, light violet backgrounds (#EDE9FE)
- **Typography:** Plus Jakarta Sans for headings, Inter for body text (Google Fonts)
- **Components:** Sticky navbar with scroll effect, card system with hover lifts, violet gradient CTAs, dark slate footer
- **Animations:** Scroll-triggered fade-in-up (Framer Motion), count-up stats, card hover effects, hero scale-in

## Shared Components
- **Navbar:** Logo + nav links + "Get in Touch" CTA, transparent→white on scroll, mobile hamburger menu
- **Footer:** Dark slate (#0F172A), 4-column layout (Brand, Pages, Resources, Connect), bottom copyright bar
- **CTA Banner:** Reusable violet-to-indigo gradient section with white text and buttons
- **Scroll-to-top button** on all pages
- **SEO meta tags** per page using document.title + meta descriptions

## Pages

### Page 1: Home (`/`)
- Hero with violet gradient background, pill badge, "Cell Cinema" H1, dual CTAs
- Credibility bar (light violet)
- About section (2-column with bullet points)
- Services section (2×2 card grid with violet top-borders)
- Platform capabilities (3-column feature cards)
- Why Precigenetics stats section (count-up: 100x, 90%, 0, 1)
- CTA banner
- Latest News preview (3 blog cards)

### Page 2: About (`/about`)
- Hero with light violet background
- Mission & Vision (2-column)
- Problem cards (3 pain points)
- Our Approach section
- Location section (MBC BioLabs)

### Page 3: Platform (`/platform`)
- Hero section
- How It Works (4-step vertical timeline)
- Expanded 3 capability sections
- CTA banner

### Page 4: Services (`/services`)
- Hero section
- 4 alternating layout service detail sections with expanded descriptions

### Page 5: News/Blog (`/blog`)
- Hero section
- Filter bar (All, Company News, Research, Industry)
- 3-column card grid with 3 placeholder posts
- Empty state handling

### Page 6: Contact (`/contact`)
- Hero section
- 2-column: Contact form (with validation, loading state, privacy checkbox) + Contact info cards

### Page 7: Privacy Policy (`/privacy-policy`)
- Full legal content with all 8 sections as specified

### Page 8: Cookie Policy (`/cookie-policy`)
- Full legal content with all 6 sections as specified

## Technical Details
- React Router for all 8 routes
- Framer Motion for scroll animations
- Lucide React icons throughout
- Fully responsive (mobile, tablet, desktop)
- Image placeholders using violet/indigo gradients with centered Lucide icons
- Contact form with Zod validation and loading state
- Custom 404 page with "Return Home" button

