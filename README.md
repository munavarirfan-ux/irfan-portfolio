# Irfan Portfolio

A precision-built portfolio website matching Figma design specifications exactly. Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: Typewriter animation with blinking cursor and cursor-aware background effect
- **Selected Work**: Static grid layout with subtle hover effects
- **Architectural Clarity**: Bento grid with gentle scroll-triggered animations
- **Philosophy**: Calm fade-in animations on scroll
- **Footer**: Minimal, grounded design

## Design Principles

- Dark, near-black background (#000000)
- Restrained, architectural aesthetic
- Subtle animations that respect `prefers-reduced-motion`
- GPU-friendly animations for smooth performance

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **React** - UI library

## Animation System

All animations follow these principles:
- Opacity transitions
- Small translateY movements (6-12px max)
- Slow easing (ease-out)
- Respects `prefers-reduced-motion`
- Runs once on initial load (no replay on scroll)

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx                    # Hero with typewriter
│   ├── SelectedWork.tsx           # Work showcase
│   ├── ArchitecturalClarity.tsx   # Bento grid
│   ├── Philosophy.tsx             # Philosophy section
│   └── Footer.tsx                 # Footer
└── package.json
```
