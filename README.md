# AiBrush Landing Page

A redesigned hero section for [aibrush.co](https://aibrush.co) — an all-in-one AI creative studio for videos, images, speech, music, and sound effects.

🔗 **[Live Demo](https://aibrush-studio.vercel.app/)** | 📦 **[GitHub Repository](https://github.com/Mohamed-Hashem/aibrush)**

## Tech Stack

- **Framework:** React 19.2
- **Build Tool:** Vite 7.2
- **Styling:** Tailwind CSS v4 (with `@tailwindcss/vite` plugin)
- **Icons:** Lucide React

## Project Structure

```
src/
├── components/
│   ├── Navigation/     # Fixed header with scroll effect
│   ├── Hero/           # Dark mode hero with interactive carousel
│   ├── Features/       # 6 feature cards with gradient icons
│   ├── HowItWorks/     # 4-step workflow visualization
│   ├── BottomCTA/      # Final call-to-action section
│   ├── Footer/         # Footer with social links
│   └── shared/         # Reusable UI components (Button, Card, Badge, etc.)
├── constants/          # Content and navigation data
├── assets/             # Static assets (logo, images)
├── App.jsx             # Main app component
└── index.css           # Tailwind + custom animations
```

## Getting Started

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

## Key Features

- **Dark Mode Design** — Modern dark theme with purple/pink gradients
- **Interactive Carousel** — Auto-rotating showcase of Video/Image/Music/Voice capabilities
- **Responsive Layout** — Mobile-first design with breakpoints at 640px and 1024px
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation, focus states
- **Performance** — CSS-only animations, no external fonts, optimized Vite build

## Lighthouse Performance Comparison

### Before (aibrush.co) vs After (This Redesign)

| Category           | Before | After | Improvement |
| ------------------ | ------ | ----- | ----------- |
| **Performance**    | 78     | 100   | +22 points  |
| **Accessibility**  | 94     | 100   | +6 points   |
| **Best Practices** | 96     | 100   | +4 points   |
| **SEO**            | 75     | 100   | +25 points  |

### Core Web Vitals Improvement

| Metric                   | Before | After | Improvement     |
| ------------------------ | ------ | ----- | --------------- |
| First Contentful Paint   | 1.6s   | 0.5s  | **69% faster**  |
| Largest Contentful Paint | 2.3s   | 0.5s  | **78% faster**  |
| Total Blocking Time      | 100ms  | 0ms   | **100% faster** |
| Speed Index              | 2.2s   | 0.5s  | **77% faster**  |

### Issues Fixed from Original Site

- ✅ Render blocking requests reduced (520ms → 40ms)
- ✅ Unused JavaScript eliminated (1,618 KiB → 106 KiB)
- ✅ All buttons have accessible names
- ✅ Valid meta description added
- ✅ Valid robots.txt
- ✅ No console errors
- ✅ Proper source maps included

## Design Decisions

See [rationale.md](rationale.md) for detailed documentation on:

- Research summary from docs.aibrush.co
- Problems identified with the current hero section
- What visitors should understand in 5 seconds
- Design direction and alternatives explored
- Technical implementation details
- Accessibility compliance
- Lighthouse performance comparison (before/after)

## External Links

| Link                | Destination                  |
| ------------------- | ---------------------------- |
| Start Creating Free | https://aibrush.co/projects  |
| Open Workspace      | https://aibrush.co/workspace |
| Documentation       | https://docs.aibrush.co      |
| Pricing             | https://aibrush.co/pricing   |

## License

This project was created as part of a design task for AiBrush.
