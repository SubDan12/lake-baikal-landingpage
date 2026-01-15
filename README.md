# Baikal Tours — Luxury Travel Landing Page

A high-fidelity, design-driven landing page for a luxury travel brand, inspired by premium editorial layouts.  
Built with a strong focus on **exact visual replication**, **subtle interactions**, and **responsive behavior** across devices.

## Repository: https://github.com/SubDan12/lake-baikal-landingpage

## Overview

**Baikal Tours** is a modern, interactive single-page experience showcasing curated travel tours with a luxury aesthetic.

The project emphasizes:

- Pixel-accurate layout replication from a reference design
- Glassmorphism → solid surface transitions
- Subtle, premium micro-interactions
- Clean mobile / tablet / desktop responsiveness
- Maintainable, feature-based React component structure

---

## Tech Stack

- **React** (Vite)
- **Tailwind CSS v4**
- **Framer Motion** (animations & transitions)
- **React Portals** (modal rendering)
- **Modern CSS techniques**
  - backdrop-blur
  - layered gradients
  - controlled z-index stacking

---

## Key Features

### Navigation

- Responsive navbar with:
  - Desktop horizontal menu
  - Mobile / tablet hamburger menu
  - Animated hamburger → X transition
- Keyboard accessibility (ESC to close menu)
- Non-intrusive overlay behavior

### Hero Section

- Full-screen background image with layered overlays
- Glassmorphism hero card
- Large typographic background title
- Visual depth using gradients and blur

### Selected Tours

- Interactive glass → solid tour card
- Clickable tour tiles with active state
- “Learn More” modal with:
  - Smooth entrance / exit animations
  - Backdrop and keyboard dismissal
  - Portal-based rendering

### Explore Baikal

- 50 / 50 split layout on desktop
- Stacked layout on mobile
- Decorative SVG-style map
- Floating island highlight card

### Footer

- Editorial-style layout
- Contact information blocks
- Interactive booking form with validation
- Success feedback state
- Social media section with consistent placement
- Fully responsive spacing and alignment

---

## Responsiveness

The layout adapts cleanly across:

- Mobile
- Tablet
- Desktop
- Large screens

Special care was taken to ensure:

- No overlapping content on small screens
- Correct stacking order for overlapping sections
- Visual parity between breakpoints

---

## Accessibility & UX

- Keyboard-accessible modals and menus
- Escape key handling
- Clear focus targets
- Readable contrast ratios
- Motion designed to be subtle and non-intrusive

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install


Project Structure: --

src/
├─ components/
│  ├─ heroSection/
│  │  ├─ Hero.jsx
│  │  ├─ HeroCard.jsx
│  │  └─ Navbar.jsx
│  ├─ infoSection/
│  │  └─ InfoSection.jsx
│  ├─ tours/
│  │  ├─ ToursLeft.jsx
│  │  ├─ ToursRight.jsx
│  │  └─ ToursSplit.jsx
│  ├─ modal/
│  │  └─ TourModal.jsx
│  ├─ footer/
│  │  ├─ Footer.jsx
│  │  └─ SocialIcons.jsx
├─ App.jsx
└─ main.jsx
```
