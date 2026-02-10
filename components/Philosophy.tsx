'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const notes = [
  {
    id: 'complexity',
    title: 'Complexity is the problem',
    body: 'Complexity is the problem. Not users. Not teams. Not technology. Good systems don\'t add more. They remove friction, reduce noise, and make decisions feel obvious. My work starts by untangling complexity and turning it into something people can actually use.',
    bg: 'bg-[#F5F3FF]',
    pattern: true,
    icon: 'blocks',
    rotation: '-2deg',
    position: { top: '0%', left: '0%' },
    size: 'w-[280px] sm:w-[320px] md:w-[340px] min-h-[200px] sm:min-h-[220px]',
    z: 1,
  },
  {
    id: 'structure',
    title: 'Structure is the soul',
    body: 'Structure is the soul of great design. What users feel comes from what holds everything together. Clear structure creates confidence, flow, and trust — even when the product is complex. When structure is strong, interfaces disappear and experiences take over.',
    bg: 'bg-[#F0F9FF]',
    pattern: false,
    icon: 'lightbulb',
    rotation: '1.5deg',
    position: { top: '2%', right: '5%', left: 'auto' },
    size: 'w-[260px] sm:w-[300px] md:w-[320px] min-h-[200px] sm:min-h-[220px]',
    z: 2,
  },
  {
    id: 'systems',
    title: 'Systems over features',
    body: 'Systems over features. Always. Features solve moments. Systems solve products. I design flexible foundations that adapt as products grow, ensuring every feature fits naturally instead of fighting for attention. When the system is right, everything else falls into place.',
    bg: 'bg-[#FFE66D]',
    pattern: false,
    icon: 'lightning',
    rotation: '-4deg',
    position: { top: '38%', left: '18%' },
    size: 'w-[220px] sm:w-[260px] md:w-[280px] min-h-[180px] sm:min-h-[200px]',
    z: 3,
  },
  {
    id: 'about',
    title: 'About',
    body: 'I design digital products by thinking in systems, not screens. My approach blends modular thinking, human-centered design, and long-term scalability. I focus on creating foundations that grow gracefully, adapt easily, and stay clear under pressure. The goal is simple: design products that feel intentional, intuitive, and built to last.',
    bg: 'bg-[#F0FFF4]',
    pattern: false,
    icon: null,
    rotation: '3deg',
    position: { bottom: '0%', right: '0%', top: 'auto', left: 'auto' },
    size: 'w-[280px] sm:w-[320px] md:w-[360px] min-h-[240px] sm:min-h-[260px]',
    z: 4,
  },
]

function IconBlocks() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-indigo-400 shrink-0">
      <rect x="4" y="4" width="12" height="12" rx="2" fill="currentColor" opacity="0.9" />
      <rect x="24" y="4" width="12" height="12" rx="2" fill="currentColor" opacity="0.9" />
      <rect x="4" y="24" width="12" height="12" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="24" y="24" width="12" height="12" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="16" y="14" width="8" height="8" rx="1" fill="currentColor" opacity="1" />
    </svg>
  )
}

function IconLightbulb() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-[#4ECDC4] shrink-0">
      <path
        d="M9 21h6M12 3a6 6 0 0 1 4.5 10H7.5A6 6 0 0 1 12 3zM12 14v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconLightning() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white shrink-0">
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null)
  const headerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="philosophy" className="philosophy-section-bg section-spacing-x section-spacing-y">
      <div className="max-w-content mx-auto">
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' }}
          className="mb-12 sm:mb-16 md:mb-20 flex flex-col md:flex-row md:items-center md:justify-between md:gap-10 gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-serif-display text-[#2d3436] leading-tight">
              <span className="block">My</span>
              <span className="block font-serif italic text-neutral-500 mt-1 pl-2 md:pl-4">Philosophy</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-sans font-normal max-w-md md:max-w-sm md:text-right text-balance md:pt-1 border-r-2 border-[#2d3436]/20 pr-4 md:pr-5">
            Systems thinking and modular foundations for digital product. Distilling complexity into scalable, human-centric frameworks.
          </p>
        </motion.header>

        <div ref={ref} className="relative min-h-[720px] sm:min-h-[780px] md:min-h-[820px] lg:min-h-[680px]">
          {/* Decorative elements – draggable within canvas */}
          <motion.span
            drag
            dragConstraints={ref}
            dragElastic={0}
            dragMomentum={false}
            className="absolute hidden sm:block text-[#4ECDC4] text-2xl sm:text-3xl opacity-90 z-[60] cursor-grab active:cursor-grabbing select-none"
            style={{ top: '52%', left: '2%' }}
            aria-hidden
            whileDrag={{ scale: 1.1 }}
          >
            ♥
          </motion.span>
          <motion.span
            drag
            dragConstraints={ref}
            dragElastic={0}
            dragMomentum={false}
            className="absolute hidden sm:block text-[#FFE66D] text-2xl sm:text-3xl opacity-95 z-[60] cursor-grab active:cursor-grabbing select-none"
            style={{ top: '28%', right: '22%', left: 'auto' }}
            aria-hidden
            whileDrag={{ scale: 1.1 }}
          >
            ★
          </motion.span>

          {/* Mobile/tablet: stacked cards */}
          <div className="lg:hidden flex flex-col gap-6">
            {notes.map((note, index) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: 'easeOut',
                }}
                className={`relative p-6 sm:p-8 ${note.bg} ${note.pattern ? 'philosophy-dotted-bg' : ''} philosophy-hand-drawn-border philosophy-collage-card flex flex-col gap-4`}
              >
                {note.icon === 'blocks' && (
                  <div className="mb-1">
                    <IconBlocks />
                  </div>
                )}
                {note.icon === 'lightbulb' && (
                  <div className="mb-1">
                    <IconLightbulb />
                  </div>
                )}
                {note.icon === 'lightning' && (
                  <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#FF6B6B] flex items-center justify-center text-white">
                    <IconLightning />
                  </div>
                )}
                <h3 className="font-serif-display font-normal text-[#2d3436] text-xl sm:text-2xl md:text-3xl leading-tight pr-10">
                  {note.title}
                </h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed overflow-y-auto max-h-[280px]">
                  {note.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Desktop: overlapping sticky notes – draggable */}
          <div className="hidden lg:block relative w-full h-[680px]">
            {notes.map((note, index) => (
              <motion.div
                key={note.id}
                drag
                dragConstraints={ref}
                dragElastic={0}
                dragMomentum={false}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: 'easeOut',
                }}
                style={{
                  position: 'absolute',
                  ...note.position,
                  transform: `rotate(${note.rotation})`,
                  zIndex: note.z,
                }}
                className={`${note.size} philosophy-card-group cursor-grab active:cursor-grabbing select-none`}
                whileDrag={{ zIndex: 50, cursor: 'grabbing' }}
              >
                <motion.div
                  className={`h-full p-8 ${note.bg} ${note.pattern ? 'philosophy-dotted-bg' : ''} philosophy-hand-drawn-border philosophy-collage-card flex flex-col overflow-hidden relative`}
                >
                  {note.icon === 'blocks' && (
                    <div className="mb-3">
                      <IconBlocks />
                    </div>
                  )}
                  {note.icon === 'lightbulb' && (
                    <div className="mb-3">
                      <IconLightbulb />
                    </div>
                  )}
                  {note.icon === 'lightning' && (
                    <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center shadow text-white">
                      <IconLightning />
                    </div>
                  )}
                  <h3 className="font-serif-display font-normal text-[#2d3436] text-2xl md:text-3xl leading-tight pr-10 flex-shrink-0">
                    {note.title}
                  </h3>
                  <p className="text-slate-600 font-sans text-sm leading-relaxed mt-2 flex-1 min-h-0 overflow-y-auto">
                    {note.body}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
