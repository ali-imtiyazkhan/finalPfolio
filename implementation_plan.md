# Add Dark/Black Theme + Keep Light Theme (Theme Toggle)

Your portfolio currently has a **light-only** design (white backgrounds, light borders, slate text). You want to add a **dark/black theme** like the withaarzoo reference screenshots, while keeping the light theme as an option with a toggle.

## Reference Design Analysis (withaarzoo screenshots)
- **Background**: Pure black (`#0a0a0a`–`#111`) with subtle dot-grid texture
- **Cards**: Dark surface with warm amber/orange borders on hover
- **Navbar**: Dark with search bar + theme toggle (sun/moon icon)
- **Footer**: Dark with sleeping fox pixel art, dot-matrix branding
- **Typography**: White headings, muted gray body text
- **Project cards**: Dark bordered cards with screenshots, tech tags as bordered pills

---

## Proposed Changes

### Theme System (CSS Variables + Toggle)

#### [NEW] [`ThemeToggle.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/ui/ThemeToggle.tsx)
- Client component with sun/moon icon toggle button
- Reads/writes `data-theme="dark"` on `<html>`
- Persists to `localStorage`, respects `prefers-color-scheme` on first visit

#### [MODIFY] [`globalsV2.css`](file:///d:/projects/pfolio/finalPfolio/src/app/globalsV2.css)
- Add CSS custom properties under `:root` (light defaults) and `[data-theme="dark"]` (dark overrides)
- Variables for: `--bg`, `--bg-surface`, `--text-primary`, `--text-secondary`, `--text-muted`, `--border`, `--border-hover`, `--shadow`, `--card-bg`
- Update `.underline-hover`, `.bubble-hover`, `.inside-container`, `.footer-link`, `.button-shadow`, `.custom-shadow` etc. to use CSS variables
- Add dark mode overrides for borders, backgrounds, dot-menu icon colors

---

### Layout & Navbar

#### [MODIFY] [`layout.tsx`](file:///d:/projects/pfolio/finalPfolio/src/app/layout.tsx)
- Change `bg-white` on `<body>` to use theme variable (`bg-[var(--bg)]`)
- Update the side border lines from `border-gray-200` to `border-[var(--border)]`
- Add inline script to prevent flash of wrong theme (read localStorage before paint)

#### [MODIFY] [`TopBarV2.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/TopBar/TopBarV2.tsx)
- Change `bg-white/80` → `bg-[var(--bg-surface)]/80`
- Change `border-gray-200` → `border-[var(--border)]`
- Add `<ThemeToggle />` button next to nav items
- Update text/button colors to use theme variables

---

### Home Page Sections

#### [MODIFY] [`HeroV2.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/HeroV2.tsx)
- Update text colors: `text-slate-900` → `text-[var(--text-primary)]`, `text-slate-700` → `text-[var(--text-secondary)]`
- Update "Open to work" badge: `bg-white` → `bg-[var(--bg-surface)]`, `border-gray-100` → `border-[var(--border)]`
- Update background ellipse from `from-indigo-100` to theme-aware

#### [MODIFY] [`ProjectSection.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/ProjectSection.tsx)
- Update `bg-white` → `bg-[var(--bg)]`

#### [MODIFY] [`AboutSectionV2.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/AboutSectionV2.tsx)
- Update `bg-white` → `bg-[var(--bg)]`, `border-gray-200` → `border-[var(--border)]`
- Update all `text-slate-900`, `text-slate-500`, `text-slate-700` to theme variables

#### [MODIFY] [`ServicesSectionV2.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/ServicesSectionV2.tsx)
- Update tech icon boxes: `bg-white` → `bg-[var(--bg-surface)]`, `border-gray-200` → `border-[var(--border)]`
- Update text colors to theme variables

#### [MODIFY] [`ExperienceTimeline.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/ExperienceTimeline.tsx)
- Update `bg-white` → `bg-[var(--bg)]` and `bg-[var(--bg-surface)]`
- Dark mode tag styles (darker badge backgrounds)
- Update card borders and shadows

#### [MODIFY] [`RecruiterContact.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/RecruiterContact.tsx)
- Update card: `bg-white` → `bg-[var(--bg-surface)]`, `border-gray-300` → `border-[var(--border)]`

#### [MODIFY] [`LeetCodeStats.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/LeetCodeStats.tsx)
- Update card background, text, and bar track colors

#### [MODIFY] [`GitHubCalendar.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/GitHubCalendar.tsx)
- Update card background and border
- Add dark theme color palette

#### [MODIFY] [`CallToActionButton.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/ui/CallToActionButton.tsx)
- Mostly fine (already black bg button), minor ring/text adjustments

---

### Projects Page

#### [MODIFY] [`ProjectsStatic.tsx`](file:///d:/projects/pfolio/finalPfolio/src/app/(site)/projects/ProjectsStatic.tsx)
- Update border from `border-slate-200` → `border-[var(--border)]`

#### [MODIFY] [`WorkHero.tsx`](file:///d:/projects/pfolio/finalPfolio/src/app/(site)/projects/WorkHero.tsx)
- Update text colors to theme variables

---

### Other Components

#### [MODIFY] [`BlackButton.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/ui/BlackButton.tsx)  
#### [MODIFY] [`WhiteButtonLink.tsx`](file:///d:/projects/pfolio/finalPfolio/src/components/ui/WhiteButtonLink.tsx)
- Theme-aware button variants

---

## Open Questions

> [!IMPORTANT]
> **Default theme**: Should the portfolio open in **dark mode by default** (like withaarzoo) or in **light mode** with the toggle to switch to dark? From your screenshots it looks like you prefer dark as default.

> [!IMPORTANT]
> **Which sections to remove?** You mentioned "remove extra shit" — which sections do you want removed? Current sections are:
> 1. Hero (name + CTA)
> 2. Projects Grid (animated cards)
> 3. About (bio + photo + GitHub calendar + LeetCode stats)
> 4. Engineering Toolkit (tech icons + services list)
> 5. Experience Timeline (journey milestones)
> 6. Contact (recruiter CTA card)
> 7. Footer (CTA + socials + brand text)
>
> Let me know which ones to keep/remove.

---

## Verification Plan

### Manual Verification
- Run `npm run dev` and test both themes
- Verify toggle persists across page refresh
- Check all pages (Home, Projects) in both themes
- Test mobile responsiveness in dark mode
- Ensure no white flash on dark mode page load
