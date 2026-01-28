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

| Element                 | Message                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------- |
| **What it is**          | All-in-one AI creative studio for videos, images, speech, music, and sound effects |
| **Core value**          | One workspace, 15+ premium AI models, professional timeline editing                |
| **Key differentiators** | Google Veo, Runway, Suno, Flux Pro, and more                                       |
| **Primary action**      | Start Creating Free (links to aibrush.co/projects)                                 |

---

## Why did you choose this design direction?

### Design Decision: Dark Mode with Vibrant Gradients

I chose a **dark theme with purple/pink gradients** because:

1. **Modern & premium feel** — Dark mode conveys sophistication and aligns with creative pro tools (Adobe, Figma)
2. **Visual impact** — Vibrant gradients against dark backgrounds create dramatic visual hierarchy
3. **Eye comfort** — Dark mode is preferred by many users, especially creators who work long hours
4. **Brand differentiation** — Stands out from generic light-mode landing pages

### Layout Decision: Split Hero with Interactive Carousel

I chose a **split layout** with copy/CTA on the left and interactive showcase on the right because:

1. **Immediate clarity** — Visitors see value proposition and product simultaneously
2. **Interactive engagement** — Auto-rotating carousel shows Video/Image/Music/Voice capabilities
3. **Clear hierarchy** — Eye naturally flows from headline → CTA → interactive demo

### Key Design Elements Implemented

| Element                     | Purpose                                                  |
| --------------------------- | -------------------------------------------------------- |
| **Feature checklist**       | 3 key benefits with checkmarks for quick scanning        |
| **Interactive carousel**    | Shows all 4 media types without overwhelming             |
| **Floating animated icons** | Adds depth and visual interest                           |
| **Timeline preview**        | Shows multi-track editing capability                     |
| **Trust badges**            | "Free trial available • Flexible plans" removes friction |
| **Bottom CTA section**      | Catches visitors who scroll past hero                    |

### Animation Strategy

| Animation        | Purpose                                  |
| ---------------- | ---------------------------------------- |
| `animate-pulse`  | Subtle background orbs create atmosphere |
| `animate-bounce` | Bouncing icons for visual prominence     |

### Content Updates Based on Documentation

| Original                  | Updated                                                             | Source                      |
| ------------------------- | ------------------------------------------------------------------- | --------------------------- |
| Generic "creative studio" | "Create Complete Videos in One Place"                               | docs.aibrush.co/ai-models   |
| No model mentions         | Google Veo, Runway, Suno, Flux Pro, +15 more                        | docs.aibrush.co/ai-models   |
| 3 generic features        | 6 accurate features: Video, Image, Speech, Music, Timeline, AI Chat | docs.aibrush.co             |
| Generic "How It Works"    | 4 steps matching actual workflow                                    | docs.aibrush.co/quick-start |
| Placeholder social links  | Real GitHub, X, Instagram, YouTube, TikTok                          | docs.aibrush.co footer      |

---

## What alternatives did you explore and reject?

### Alternative 1: Light mode design

- **Concept:** Clean white background with subtle gradients
- **Rejected because:**
  - Dark mode feels more modern for creative tools
  - Vibrant colors pop better on dark backgrounds
  - Better visual hierarchy with dark containers

### Alternative 2: Full-bleed background video

- **Concept:** Cinematic video showing creative process with centered text overlay
- **Rejected because:**
  - Slower page load (video files are heavy)
  - Text readability issues over moving backgrounds
  - Autoplay video can be annoying
  - Mobile data concerns

### Alternative 3: Static product screenshot

- **Concept:** Single screenshot of the workspace
- **Rejected because:**
  - Interactive carousel shows more capabilities
  - Single image limits what can be communicated
  - Carousel creates engagement and visual interest

### Alternative 4: Carousel of user testimonials

- **Concept:** Rotating showcase of user quotes in hero
- **Rejected because:**
  - Users often miss content in carousels
  - Feature showcase more valuable than social proof in hero
  - Testimonials better suited below fold

---

## Assumptions

| Assumption          | Reasoning                                                         |
| ------------------- | ----------------------------------------------------------------- |
| **Primary persona** | Content creators and small teams wanting fast creative production |
| **User intent**     | Visitors are evaluating whether AiBrush fits their workflow       |
| **Brand colors**    | Purple/pink gradient derived from modern creative tool aesthetics |

---

## Technical Implementation

### Tech Stack

- **Framework:** React 19.2
- **Build Tool:** Vite 7.2
- **Styling:** Tailwind CSS v4 (with @tailwindcss/vite plugin)
- **State:** React hooks (useState for mobile menu, useEffect for carousel)

### Component Architecture

```
src/
├── components/
│   ├── Navigation/     # Fixed transparent header with scroll effect
│   ├── Hero/           # Dark mode hero with interactive carousel
│   ├── Features/       # 6 feature cards with gradient icons
│   ├── HowItWorks/     # 4-step workflow with gradient styling
│   ├── BottomCTA/      # Final call-to-action section
│   ├── Footer/         # Footer with social links
│   └── shared/         # Reusable UI components (Button, Card, Badge, etc.)
├── constants/          # Content and navigation data
├── assets/             # Static assets (logo, images)
├── App.jsx             # App with bottom CTA section & dark footer
└── index.css           # Tailwind base styles
```

### External Links (All verified from docs.aibrush.co)

| Link                | Destination                             |
| ------------------- | --------------------------------------- |
| Start Creating Free | https://aibrush.co/projects             |
| View Examples       | https://docs.aibrush.co/examples        |
| Open Workspace      | https://aibrush.co/workspace            |
| Documentation       | https://docs.aibrush.co                 |
| Quick Start         | https://docs.aibrush.co/quick-start     |
| AI Models           | https://docs.aibrush.co/ai-models       |
| Pricing             | https://aibrush.co/pricing              |
| GitHub              | https://github.com/aibrush              |
| X (Twitter)         | https://x.com/aibrushproject            |
| Instagram           | https://www.instagram.com/aibrush.co    |
| YouTube             | https://www.youtube.com/@aibrushproject |
| TikTok              | https://www.tiktok.com/@aibrushproject  |
| Support             | support@aibrush.co                      |

### Accessibility Compliance

| Requirement             | Implementation                                          |
| ----------------------- | ------------------------------------------------------- |
| **Semantic HTML**       | `<header>`, `<main>`, `<section>`, `<nav>`, `<article>` |
| **Heading hierarchy**   | Single `<h1>` in hero, `<h2>` in sections               |
| **ARIA labels**         | All interactive elements have aria-labels               |
| **Focus states**        | Visible focus rings on all focusable elements           |
| **Color contrast**      | Brand colors tested for 4.5:1 minimum ratio             |
| **Keyboard navigation** | Full tab order support, Enter/Space activation          |
| **Reduced motion**      | Respects prefers-reduced-motion                         |
| **Screen reader**       | alt text, aria-hidden for decorative elements           |

### Performance Considerations

| Optimization            | Applied                                   |
| ----------------------- | ----------------------------------------- |
| **No external fonts**   | Using system font stack                   |
| **Minimal JS**          | Only React state for interactive elements |
| **CSS-only animations** | No animation libraries                    |
| **Memoized components** | All components wrapped with React.memo    |
| **Lazy loading**        | Features and HowItWorks lazy loaded       |
| **Optimized build**     | Vite production build with tree-shaking   |

---

## Responsive Breakpoints

| Breakpoint              | Layout                                          |
| ----------------------- | ----------------------------------------------- |
| **Mobile (< 640px)**    | Stacked: copy above, demo below; hamburger menu |
| **Tablet (640-1024px)** | Stacked with larger typography; expanded nav    |
| **Desktop (> 1024px)**  | Side-by-side split layout; full navigation      |

---

## Files Submitted

| File                                  | Description                                                 |
| ------------------------------------- | ----------------------------------------------------------- |
| `src/components/Hero/index.jsx`       | Main hero with product mockup showing media tabs            |
| `src/components/Navigation/index.jsx` | Header with real AiBrush links                              |
| `src/components/Features/index.jsx`   | 6 feature cards + AI model showcase                         |
| `src/components/HowItWorks/index.jsx` | 4-step workflow from Quick Start guide                      |
| `src/components/BottomCTA/index.jsx`  | Final call-to-action section                                |
| `src/components/Footer/index.jsx`     | Footer with social links                                    |
| `src/components/shared/`              | Reusable UI components (Button, Card, Badge, Section, etc.) |
| `src/constants/`                      | Content and navigation data                                 |
| `src/App.jsx`                         | App wrapper with all sections                               |
| `src/index.css`                       | Tailwind base styles                                        |
| `README.md`                           | Project documentation                                       |
| `rationale.md`                        | This documentation file                                     |

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

## Lighthouse Performance Comparison

### Current Website (aibrush.co) — Before Redesign

| Category           | Score | Status               |
| ------------------ | ----- | -------------------- |
| **Performance**    | 78    | 🟠 Needs Improvement |
| **Accessibility**  | 94    | 🟢 Good              |
| **Best Practices** | 96    | 🟢 Good              |
| **SEO**            | 75    | 🟠 Needs Improvement |

**Performance Metrics (Current Site):**
| Metric | Value | Status |
|--------|-------|--------|
| First Contentful Paint (FCP) | 1.6s | 🟠 |
| Largest Contentful Paint (LCP) | 2.3s | 🟠 |
| Total Blocking Time (TBT) | 100ms | 🟢 |
| Cumulative Layout Shift (CLS) | 0.003 | 🟢 |
| Speed Index | 2.2s | 🟠 |

**Issues Identified:**

- Render blocking requests (520ms potential savings)
- Unused JavaScript (1,618 KiB potential savings)
- Minify JavaScript needed (1,281 KiB potential savings)
- Unused CSS (34 KiB potential savings)
- 6 long main-thread tasks found
- 51 non-composited animations
- Missing meta description
- Invalid robots.txt (25 errors)
- Buttons missing accessible names

---

### Redesigned Website (This Project) — After Redesign

| Category           | Score | Status     |
| ------------------ | ----- | ---------- |
| **Performance**    | 100   | 🟢 Perfect |
| **Accessibility**  | 100   | 🟢 Perfect |
| **Best Practices** | 100   | 🟢 Perfect |
| **SEO**            | 100   | 🟢 Perfect |

**Performance Metrics (Redesigned):**
| Metric | Value | Improvement |
|--------|-------|-------------|
| First Contentful Paint (FCP) | 0.5s | **-1.1s (69% faster)** |
| Largest Contentful Paint (LCP) | 0.5s | **-1.8s (78% faster)** |
| Total Blocking Time (TBT) | 0ms | **-100ms (100% faster)** |
| Cumulative Layout Shift (CLS) | 0.002 | **-0.001 (33% better)** |
| Speed Index | 0.5s | **-1.7s (77% faster)** |

---

### Performance Improvement Summary

| Metric                   | Before | After | Improvement     |
| ------------------------ | ------ | ----- | --------------- |
| **Performance Score**    | 78     | 100   | **+22 points**  |
| **Accessibility Score**  | 94     | 100   | **+6 points**   |
| **Best Practices Score** | 96     | 100   | **+4 points**   |
| **SEO Score**            | 75     | 100   | **+25 points**  |
| **FCP**                  | 1.6s   | 0.5s  | **69% faster**  |
| **LCP**                  | 2.3s   | 0.5s  | **78% faster**  |
| **TBT**                  | 100ms  | 0ms   | **100% faster** |
| **Speed Index**          | 2.2s   | 0.5s  | **77% faster**  |

### Key Optimizations Applied

1. **No external fonts** — Using system font stack eliminates font download time
2. **Minimal JavaScript** — Only React state for interactive elements
3. **CSS-only animations** — No heavy animation libraries
4. **Memoized components** — All components wrapped with React.memo for performance
5. **Lazy loading** — Features and HowItWorks sections lazy loaded
6. **Tree-shaking** — Vite production build removes unused code
7. **Semantic HTML** — All buttons have accessible names
8. **Valid meta tags** — Proper SEO meta description included

---

## Metrics to Track Post-Launch

| Metric                           | Target            | Current Status     |
| -------------------------------- | ----------------- | ------------------ |
| Hero CTA click-through rate      | > 15%             | To be measured     |
| Bounce rate                      | < 40%             | To be measured     |
| Time to first interaction        | < 3 seconds       | ✅ Achieved (0.5s) |
| Mobile vs desktop conversion     | Parity within 10% | To be measured     |
| Accessibility score (Lighthouse) | > 95              | ✅ Achieved (100)  |
| Performance score (Lighthouse)   | > 90              | ✅ Achieved (100)  |
