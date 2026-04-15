# SoulSync AI — Design System

Based on Stripe's design language, adapted for an AI consulting firm targeting the Japanese market.

## 1. Visual Theme & Atmosphere

Clean white canvas with deep navy headings and signature purple accent. The overall impression is premium, precise, and trustworthy — qualities that resonate strongly with Japanese corporate buyers. Light font weights (300) create a calm, confident authority that avoids the "loud startup" feel. Blue-tinted shadows add atmospheric depth without heaviness.

**Key Characteristics:**
- Font-weight 300 as the signature headline weight — light, confident, anti-convention
- Negative letter-spacing at display sizes (-1.4px at 56px, progressively relaxing)
- Blue-tinted multi-layer shadows using `rgba(50,50,93,0.25)` — elevation that feels branded
- Deep navy (`#061b31`) headings instead of black — warm, premium
- Conservative border-radius (4px-8px) — nothing pill-shaped, nothing harsh
- Purple-to-magenta gradients for decorative accents only

## 2. Color Palette

### Primary
| Token | Hex | Role |
|-------|-----|------|
| Purple | `#533afd` | Primary CTA, links, interactive highlights |
| Purple Hover | `#4434d4` | Hover state on purple elements |
| Purple Deep | `#2e2b8c` | Icon hover states |
| Purple Light | `#b9b9f9` | Subdued hover backgrounds, borders |
| Purple BG | `rgba(83,58,253,0.05)` | Tinted surfaces, icon backgrounds |
| Deep Navy | `#061b31` | Headings, nav text, strong labels |
| White | `#ffffff` | Page background, card surfaces |

### Brand & Dark
| Token | Hex | Role |
|-------|-----|------|
| Brand Dark | `#1c1e54` | Dark sections, immersive brand moments |
| Dark Navy | `#0d253d` | Footer, darkest surfaces |

### Decorative (gradients only, never for buttons/links)
| Token | Hex | Role |
|-------|-----|------|
| Ruby | `#ea2261` | Gradient start for decorative elements |
| Magenta | `#f96bee` | Gradient end for decorative elements |

### Text
| Token | Hex | Role |
|-------|-----|------|
| Heading | `#061b31` | All headings |
| Label | `#273951` | Form labels, secondary headings |
| Body | `#64748d` | Body text, descriptions, captions |

### Surface & Borders
| Token | Hex | Role |
|-------|-----|------|
| Border | `#e5edf5` | Cards, dividers, inputs |
| Border Purple | `#b9b9f9` | Active/selected state borders |
| Success | `#15be53` | Status badges, success states |

## 3. Typography

### Font Stack
- **Primary**: `Inter`, `Noto Sans JP`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
- **Monospace**: `Source Code Pro`, `SFMono-Regular`, `monospace`
- **Japanese fallback**: Noto Sans JP ensures clean Japanese text rendering

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display Hero | 56px | 300 | 1.03 | -1.4px | Main hero headline |
| Display Large | 48px | 300 | 1.15 | -0.96px | Secondary hero |
| Section Heading | 32px | 300 | 1.1 | -0.64px | Section titles |
| Sub-heading | 22px | 300 | 1.1 | -0.22px | Card headings |
| Body Large | 18px | 300 | 1.6 | normal | Feature descriptions |
| Body | 16px | 300 | 1.6 | normal | Standard text |
| Body (emphasis) | 16px | 400 | 1.6 | normal | Buttons, nav links |
| Caption | 13px | 400 | normal | normal | Labels, metadata |
| Mono Label | 12px | 500 | normal | 0.05em | Step numbers, code labels |

### Principles
- Weight 300 is the default for everything — headings AND body
- Weight 400 only for interactive elements (buttons, nav links, form labels)
- Never use weight 600-700
- Letter-spacing tightens proportionally with size
- Noto Sans JP at matching weights for Japanese text

## 4. Components

### Buttons

**Primary**
```
background: #533afd
color: #ffffff
padding: 10px 20px
border-radius: 4px
font-size: 16px, weight 400
hover: background #4434d4
```

**Ghost**
```
background: transparent
color: #533afd
padding: 10px 20px
border-radius: 4px
border: 1px solid #b9b9f9
hover: background rgba(83,58,253,0.05)
```

### Cards
```
background: #ffffff
border: 1px solid #e5edf5
border-radius: 6px
padding: 28px
hover shadow: rgba(50,50,93,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px
hover transform: translateY(-2px)
```

### Navigation
```
background: rgba(255,255,255,0.85)
backdrop-filter: blur(12px)
border-bottom: 1px solid #e5edf5
height: 60px
position: fixed, sticky
```

### Inputs
```
border: 1px solid #e5edf5
border-radius: 4px
padding: 10px 14px
font-size: 15px, weight 300
focus border: 1px solid #533afd
label: 14px, weight 400, color #273951
placeholder: color #64748d
```

### Dark Section (for process/brand moments)
```
background: #1c1e54
heading: #ffffff
body: rgba(255,255,255,0.55)
label: #b9b9f9
card border: 1px solid rgba(255,255,255,0.1)
card hover border: rgba(255,255,255,0.2)
```

## 5. Layout

### Spacing
- Base unit: 8px
- Section padding: 80px vertical (64px on mobile)
- Max content width: 1080px
- Card gap: 20px
- Grid: 3-column services, 4-column process, 2-column about/contact

### Shadow System

| Level | Shadow | Use |
|-------|--------|-----|
| Ambient | `rgba(23,23,23,0.06) 0px 3px 6px` | Subtle hover |
| Standard | `rgba(23,23,23,0.08) 0px 15px 35px` | Cards at rest |
| Elevated | `rgba(50,50,93,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px` | Card hover, featured |
| Deep | `rgba(3,3,39,0.25) 0px 14px 21px -14px, rgba(0,0,0,0.1) 0px 8px 17px -8px` | Modals, floating |

### Border Radius
- 4px: Buttons, inputs, badges
- 6px: Cards, nav container
- 8px: Featured/hero elements
- Never use 12px+ or pill shapes

## 6. Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| >1024px | Full layout, 3-col services, 4-col process |
| 768-1024px | 2-col services, 2-col process |
| <768px | Single column everything, hero h1 32px, section padding 64px |

### Mobile Rules
- Hero: 56px → 32px headline, maintain weight 300
- Nav: collapse to hamburger
- Cards: stack single column
- Dark sections: maintain full-width, reduce padding

## 7. Bilingual (EN/JA)

- All user-facing text must have `data-en` and `data-ja` attributes
- Language toggle button in nav, right side
- Form placeholders use `data-en-ph` and `data-ja-ph`
- Default language: English
- Japanese font: Noto Sans JP at matching weights

## 8. Hero Background Animation (Remotion)

The hero section features a Remotion-powered animated background rendered as a `<Player>` component behind the hero content. The animation is abstract, geometric, and subtle — it enhances the premium feel without competing with the headline.

### Composition Spec

- **Duration**: Loop seamlessly (use `loop` prop on Player)
- **FPS**: 30
- **Dimensions**: Full viewport width, hero section height (~100vh)
- **Background**: Transparent (layered behind hero content via absolute positioning + z-index)

### Animation Elements

**1. Gradient Orbs (2-3 large)**
- Soft radial gradients using brand colors at low opacity
- Colors: `rgba(83,58,253,0.08)` (purple), `rgba(249,107,238,0.05)` (magenta), `rgba(234,34,97,0.04)` (ruby)
- Size: 400-600px diameter, blur: 80-120px
- Motion: Slow drift (translateX/Y) using `interpolate()` with sinusoidal easing
- Each orb moves on a different axis/speed for organic feel
- Period: 8-12 seconds per cycle

**2. Floating Particles (15-25 small dots)**
- Color: `rgba(83,58,253,0.15)` (purple at low opacity)
- Size: 2-4px circles
- Motion: Slow upward drift with slight horizontal sway
- Use `spring()` or `interpolate()` with custom easing
- Staggered start times for natural distribution
- Opacity fades in/out at edges

**3. Subtle Grid Lines (optional, very faint)**
- Thin horizontal/vertical lines: `rgba(229,237,245,0.4)` (border color, very low opacity)
- Slow parallax movement on scroll (if implementing scroll-linked)
- Grid spacing: ~80px

### Technical Implementation

```tsx
// HeroBackground.tsx — Remotion composition
import { AbsoluteFill, useCurrentFrame, interpolate, Sequence } from 'remotion';

// Render as:
<Player
  component={HeroBackground}
  durationInFrames={300} // 10 seconds at 30fps
  fps={30}
  loop
  style={{
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: 0,
    pointerEvents: 'none',
  }}
/>
```

### Animation Principles
- **Subtlety over spectacle**: Every element should be at LOW opacity (0.04-0.15). If you notice the animation immediately, it's too strong.
- **Slow motion**: Nothing should move fast. Minimum 6-second cycle for any element.
- **Brand-colored**: Only use palette colors (purple, magenta, ruby) — never introduce new colors.
- **Performance**: Keep particle count low (≤25). Use CSS transforms only (no layout-triggering properties). Consider `will-change: transform` on animated elements.
- **Graceful absence**: The page must look complete even if the animation fails to load. It's enhancement, not content.

## 9. Do's and Don'ts

### Do
- Use weight 300 for all headlines and body text
- Apply blue-tinted shadows for all elevated elements
- Use #061b31 (deep navy) for headings, never #000000
- Keep border-radius between 4px-8px
- Layer shadows: blue-tinted far + neutral close
- Alternate light/dark sections for rhythm
- Keep Japanese translations professional and formal (敬語)

### Don't
- Don't use font-weight 600-700 anywhere
- Don't use large border-radius (12px+, pill shapes)
- Don't use neutral gray shadows — always tint with blue
- Don't use pure black for headings
- Don't use ruby/magenta for buttons or links (decorative only)
- Don't use casual Japanese (タメ口) — always use polite form
