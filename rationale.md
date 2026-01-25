# Rationale — Hero Section Redesign

## Project Overview
**Company:** AiBrush  
**Task:** Redesign the hero section for aibrush.co landing page  
**Date:** January 2026  
**Documentation Source:** https://docs.aibrush.co/

---

## Research Summary

### Data Gathered from docs.aibrush.co

**Core Features:**
- Workspace (independent creative hub)
- Timeline Editor (professional video editing)
- AI Models (15+ premium models)
- ControlNet (advanced control)

**AI Model Categories:**
| Category | Models | Capabilities |
|----------|--------|--------------|
| **Image** | Google Imagen, Flux Pro, Runway, Qwen, Wan, See Dream V4 | Text-to-image, image-to-image, 4K, style presets |
| **Video** | Google Veo, Runway, Pika, Hailuo, Wan | Text-to-video, image-to-video, motion control |
| **Lip Sync** | Pixverse, Veed | Audio-to-video lip synchronization |
| **Speech** | Gemini Speech, OpenAI TTS | 50+ languages, 30+ voices, emotion control |
| **Music** | Suno, Google Lyria | Text-to-music, multiple genres, custom length |
| **Sound FX** | ElevenLabs | Cinematic soundscapes, various categories |

**Key Workflow (from Quick Start):**
1. Login → Access workspace
2. Chat with AI to create projects
3. Generate media (video, image, speech, music, SFX)
4. Add to timeline, arrange, edit, trim
5. Export with GPU acceleration

---

## What problem does the current hero have?

After analyzing the current aibrush.co website, several issues were identified:

1. **Generic headline** — "Create. Imagine. Build." could apply to any creative tool and doesn't differentiate AiBrush
2. **Unclear product scope** — Visitors don't know AiBrush creates videos, images, speech, music, AND sound effects
3. **Missing AI model differentiators** — No mention of premium models like Google Veo, Runway, Suno
4. **No visual product demonstration** — The hero lacks screenshots showing the actual workspace UI
5. **Weak secondary CTA** — "Learn More" links to documentation, which is poor for conversion

---

## What should a visitor understand in 5 seconds?

| Element | Message |
|---------|---------|
| **What it is** | All-in-one AI creative studio for videos, images, speech, music, and sound effects |
| **Core value** | One workspace, 15+ premium AI models, professional timeline editing |
| **Key differentiators** | Google Veo, Runway, Suno, Flux Pro, and more |
| **Primary action** | Start Creating Free (links to aibrush.co/projects) |

---

## Why did you choose this design direction?

### Layout Decision: Split Hero
I chose a **split layout** with copy/CTA on the left and product demo on the right because:

1. **Immediate clarity** — Visitors see value proposition and product simultaneously
2. **Visual proof** — The product mockup shows the actual workspace with media tabs (Video, Image, Speech, Music, SFX)
3. **Clear hierarchy** — Eye naturally flows from headline → CTA → demo
4. **AI model showcase** — Badges below copy highlight premium models (Google Veo, Runway, Suno, etc.)

### Content Updates Based on Documentation

| Original | Updated | Source |
|----------|---------|--------|
| Generic "creative studio" | "Videos, Images & Audio with AI" | docs.aibrush.co/ai-models |
| No model mentions | Google Veo, Runway, Suno, Flux Pro, +15 more | docs.aibrush.co/ai-models |
| 3 generic features | 6 accurate features: Video, Image, Speech, Music, Timeline, AI Chat | docs.aibrush.co |
| Generic "How It Works" | 4 steps matching actual workflow | docs.aibrush.co/quick-start |
| Placeholder social links | Real GitHub, X, Instagram, YouTube, TikTok | docs.aibrush.co footer |

---

## What alternatives did you explore and reject?

### Alternative 1: Full-bleed background video
- **Concept:** Cinematic video showing creative process with centered text overlay
- **Rejected because:**
  - Slower page load (video files are heavy)
  - Text readability issues over moving backgrounds
  - Autoplay video can be annoying
  - Mobile data concerns

### Alternative 2: Minimal text-only hero
- **Concept:** Large typography, single CTA, no visuals
- **Rejected because:**
  - AiBrush is a visual product — needs visual demonstration
  - Misses opportunity to show UI/features
  - Less compelling without product preview

### Alternative 3: Interactive demo controls in hero
- **Concept:** Embedded mini-demo where users can try AI features
- **Rejected because:**
  - Scope/time constraints for implementation
  - Complexity could overwhelm first-time visitors
  - Better suited as a separate demo page
  - **Note:** This would be an excellent Phase 2 enhancement

### Alternative 4: Carousel of features
- **Concept:** Rotating showcase of different features with auto-advance
- **Rejected because:**
  - Users often miss content in carousels
  - Accessibility concerns with auto-advancing
  - Dilutes the primary message

---

## Assumptions

| Assumption | Reasoning |
|------------|-----------|
| **Primary persona** | Content creators and small teams wanting fast creative production |
| **User intent** | Visitors are evaluating whether AiBrush fits their workflow |
| **Demo availability** | A product demo video or screenshot can be generated/provided |
| **Brand colors** | Indigo/violet primary derived from existing aibrush.co styling |
| **Statistics** | Social proof numbers (10K+, 500K+, 4.9) are placeholders; replace with real data |

---

## Technical Implementation

### Tech Stack
- **Framework:** React 19.2
- **Build Tool:** Vite 7.2
- **Styling:** Tailwind CSS v4 (with @tailwindcss/vite plugin)
- **State:** React hooks (useState for mobile menu)

### Component Architecture
```
src/
├── components/
│   ├── Navigation/     # Sticky header with mobile menu
│   ├── Hero/           # Main hero section with product mockup
│   ├── Features/       # 6 feature cards (Video, Image, Speech, Music, Timeline, AI Chat)
│   └── HowItWorks/     # 4-step workflow based on docs.aibrush.co/quick-start
├── App.jsx             # Main app with comprehensive footer
└── index.css           # Tailwind + brand tokens
```

### External Links (All verified from docs.aibrush.co)
| Link | Destination |
|------|-------------|
| Start Creating Free | https://aibrush.co/projects |
| View Examples | https://docs.aibrush.co/examples |
| Open Workspace | https://aibrush.co/workspace |
| Documentation | https://docs.aibrush.co |
| Quick Start | https://docs.aibrush.co/quick-start |
| AI Models | https://docs.aibrush.co/ai-models |
| Pricing | https://aibrush.co/pricing |
| GitHub | https://github.com/aibrush |
| X (Twitter) | https://x.com/aibrushproject |
| Instagram | https://www.instagram.com/aibrush.co |
| YouTube | https://www.youtube.com/@aibrushproject |
| TikTok | https://www.tiktok.com/@aibrushproject |
| Support | support@aibrush.co |

### Accessibility Compliance

| Requirement | Implementation |
|-------------|----------------|
| **Semantic HTML** | `<header>`, `<main>`, `<section>`, `<nav>`, `<article>` |
| **Heading hierarchy** | Single `<h1>` in hero, `<h2>` in sections |
| **ARIA labels** | All interactive elements have aria-labels |
| **Focus states** | Visible focus rings on all focusable elements |
| **Color contrast** | Brand colors tested for 4.5:1 minimum ratio |
| **Keyboard navigation** | Full tab order support, Enter/Space activation |
| **Reduced motion** | Respects prefers-reduced-motion |
| **Screen reader** | alt text, aria-hidden for decorative elements |

### Performance Considerations

| Optimization | Applied |
|--------------|---------|
| **No external fonts** | Using system font stack |
| **Minimal JS** | Only React state for mobile menu toggle |
| **CSS-only animations** | No animation libraries |
| **Lazy loading ready** | Structure supports lazy loading demo video |
| **Optimized build** | Vite production build with tree-shaking |

---

## Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| **Mobile (< 640px)** | Stacked: copy above, demo below; hamburger menu |
| **Tablet (640-1024px)** | Stacked with larger typography; expanded nav |
| **Desktop (> 1024px)** | Side-by-side split layout; full navigation |

---

## Files Submitted

| File | Description |
|------|-------------|
| `src/components/Hero/Hero.jsx` | Main hero with product mockup showing media tabs |
| `src/components/Navigation/Navigation.jsx` | Header with real AiBrush links |
| `src/components/Features/Features.jsx` | 6 feature cards + AI model showcase |
| `src/components/HowItWorks/HowItWorks.jsx` | 4-step workflow from Quick Start guide |
| `src/App.jsx` | App wrapper with comprehensive footer & social links |
| `src/index.css` | Tailwind config + brand tokens |
| `rationale.md` | This documentation file |

---

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Recommended Next Steps

1. **Add actual product screenshots** from https://cdn.aibrush.co/docs/
2. **Embed demo video** showing the actual AiBrush workflow
3. **A/B test headlines:** current vs "Create Any Media Type with AI"
4. **Add testimonials section** below features
5. **Implement analytics tracking** on CTA clicks (conversion funnel)
6. **Consider pricing section** preview with credits system

---

## Metrics to Track Post-Launch

| Metric | Target |
|--------|--------|
| Hero CTA click-through rate | > 15% |
| Bounce rate | < 40% |
| Time to first interaction | < 3 seconds |
| Mobile vs desktop conversion | Parity within 10% |
| Accessibility score (Lighthouse) | > 95 |
| Performance score (Lighthouse) | > 90 |
