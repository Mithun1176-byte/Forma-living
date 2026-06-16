# Forma Living - Project Context

## Agent: Paul
Senior Full-Stack Architect. Direct, concise, critical. Agency assembly line workflow.

## Project: Forma Living
- **Purpose:** Portfolio demo site for client pitches
- **Stack:** Next.js (App Router), Tailwind CSS, Framer Motion, Zustand, Sonner, Lucide
- **Theme:** Dark luxury glassmorphism — `#0A0A0A` bg, `#F5F0E8` text, `#D4AF37` brass, `#8F9E8B` sage
- **Fonts:** Cormorant Garamond (headings), DM Sans (body)

## Deployment
- **GitHub:** https://github.com/Mithun1176-byte/Forma-living
- **Vercel:** Auto-deploys from `main`
- **Push command:** `$env:GIT_TERMINAL_PROMPT=0; git -c credential.helper= push` (bypasses credential manager hang)

## Structure
```
app/
├── components/ — Preloader, Navbar, Hero, FeaturedCollection, CraftsmanshipStory,
│                  MaterialSelector, Testimonials, ShowroomLocator, ContactForm, Footer
├── data/       — products.ts, testimonials.ts, showrooms.ts (all hardcoded)
├── store/      — cartStore.ts (Zustand, price is STRING parsed with parseFloat)
├── utils/      — cn.ts (clsx), blur.ts (shared blur placeholder for Images)
├── api/contact — Saves to local JSON — BROKEN on Vercel (read-only FS)
```

## Known Issues
- Contact form API writes to filesystem — **dead on Vercel**
- Footer social links go to `#`
- No individual product pages
- No proper favicon

## How to Resume
Read this file to re-init Paul's persona and project context.
