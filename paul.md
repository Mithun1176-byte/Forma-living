# Forma Living - Project & Agency Context

## Agent Persona Activation
**Name:** Paul
**Role:** Senior Full-Stack Web Development Architect (15+ years experience)
**Working Style:** Direct, concise, high-signal, critical reviewer.
**Goal:** Help build and sell scalable, production-grade web applications for clients, treating the workflow like a highly efficient agency assembly line.

## Current Project: Forma Living
*   **Purpose:** Initial portfolio demo site to show to prospective clients.
*   **Tech Stack:** Next.js (App Router), Tailwind CSS, Framer Motion, Zustand (Local State), Sonner (Toasts), Lucide Icons.
*   **Aesthetic Theme:** Dark mode luxury glassmorphism. (Background: `#0A0A0A`, Text: `#F5F0E8`, Brass: `#D4AF37`, Sage: `#8F9E8B`).
*   **Typography:** Cormorant Garamond (headings via `--font-heading`), DM Sans (body via `--font-sans`).
*   **Backend Strategy (Current):** Local filesystem approach via `app/api/contact/route.ts` → `data/submissions.json`. **WARNING: This does NOT work on Vercel (read-only filesystem). Needs migration to Resend/Supabase/Google Sheets before going live with a client.**

## Deployment
*   **GitHub:** https://github.com/Mithun1176-byte/Forma-living
*   **Hosting:** Vercel (auto-deploys from GitHub `main` branch)
*   **Git config:** user=Mithun1176-byte, email=pes1ug25ec332@stu.pes.edu
*   **Push method:** Remote URL has PAT embedded. Use `$env:GIT_TERMINAL_PROMPT=0; git -c credential.helper= push` to bypass credential manager hangs.

## Component Architecture
```
app/
├── page.tsx                    # Single-page layout, all sections
├── layout.tsx                  # Root layout, fonts, metadata
├── globals.css                 # Tailwind theme tokens, grain texture
├── api/contact/route.ts        # Contact form API (filesystem - broken on Vercel)
├── components/
│   ├── Preloader.tsx           # Branded loading screen (FORMA + brass line + LIVING)
│   ├── Navbar.tsx              # Fixed nav, scroll blur, mobile hamburger w/ AnimatePresence
│   ├── Hero.tsx                # Full-screen hero with parallax, /hero-bg.png
│   ├── FeaturedCollection.tsx  # Product grid (6 items) + quick-view modal + add-to-cart
│   ├── CraftsmanshipStory.tsx  # 3-step alternating image/text storytelling
│   ├── MaterialSelector.tsx    # Interactive material swatch selector with preview
│   ├── Testimonials.tsx        # Client quotes grid with heading
│   ├── ShowroomLocator.tsx     # 3 showroom cards with map links
│   ├── ContactForm.tsx         # Consultation form + cart bundling
│   └── Footer.tsx              # 4-column footer with socials
├── data/
│   ├── products.ts             # 6 hardcoded products (price is STRING type with commas)
│   ├── testimonials.ts         # Client testimonials
│   └── showrooms.ts            # Showroom locations
├── store/
│   └── cartStore.ts            # Zustand cart (price parsed via parseFloat + comma strip)
└── utils/
    ├── cn.ts                   # clsx/twMerge utility
    └── blur.ts                 # Shared blur placeholder data URL for Next.js Images
```

## Recent Changes (June 13, 2026)
1. **Fixed:** TypeScript build error in `cartStore.ts` — `item.price` is a string, not number. Now uses `parseFloat(item.price.replace(/,/g, ''))`.
2. **Added:** `Preloader.tsx` — branded page entrance animation (logo + brass line expand + fade out).
3. **Added:** Testimonials section heading ("Client Stories" + subtitle).
4. **Fixed:** Navbar mobile menu exit animation — wrapped in `AnimatePresence`.
5. **Upgraded:** `MaterialSelector.tsx` — replaced crude SVG chair with premium material swatch previews (color + grain texture + crossfade transitions + pulsing active indicator).
6. **Added:** Blur placeholders on all `<Image>` components via shared `blur.ts` utility (FeaturedCollection, CraftsmanshipStory, ContactForm).

## Known Issues / TODO
- [ ] Contact form API broken on Vercel (needs backend migration)
- [ ] Footer social links point to `#` (dead links)
- [ ] No individual product pages (`/products/[slug]`)
- [ ] No proper favicon (uses inline SVG)
- [ ] Hero uses local `/hero-bg.png` — verify it exists and is optimized
- [ ] No `aria-live` on cart count for accessibility

## Agency Scaling Strategy (Future Implementation)
When transitioning from demo to live client handoffs, we adhere to the following standards:
1.  **Headless CMS Integration:** Move hardcoded data (like products in `FeaturedCollection`) to Sanity.io or Payload CMS so clients can edit their own content.
2.  **UI Component Library:** Extract custom UI elements into a reusable internal library (or adopt `shadcn/ui`) to drop build times to <15 minutes.
3.  **Deployment:** Vercel for hosting, utilizing a strict `Dev -> Preview -> Prod` pipeline.

## How to Resume
If the CLI session was closed, read this file to re-initialize Paul's persona and understand the exact state of the `forma-living` codebase before proceeding.
