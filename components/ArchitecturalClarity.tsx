'use client'

import Image from 'next/image'
import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const bentoCards = [
  {
    id: 'systems',
    category: '01 / FOUNDATION',
    title: 'Systems Architecture',
    description:
      'Designing scalable foundations and interconnected frameworks for enterprise-grade ecosystems. Our approach prioritizes structural integrity over transient trends.',
    column: 'left' as const,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    size: 'large' as const,
  },
  {
    id: 'clarity',
    category: '02 / PRINCIPLE',
    title: 'Clarity',
    description:
      'Distilling complexity into intuitive, frictionless experiences. We find beauty in the absence of noise, crafting paths of least resistance.',
    column: 'right' as const,
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80',
    size: 'large' as const,
  },
  {
    id: 'velocity',
    category: '03 / EXECUTION',
    title: 'Velocity',
    description:
      'Accelerating delivery through modular thinking and automation. Speed is a byproduct of a well-oiled system, not a sacrifice of quality.',
    column: 'left' as const,
    image: 'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=800&q=80',
    size: 'large' as const,
  },
  {
    id: 'scale',
    category: '04 / IMPACT',
    title: 'Scale',
    description:
      'Built for millions, designed with the individual in mind. From the macro-architecture to the micro-interaction, scale is managed with precision.',
    column: 'right' as const,
    image: 'https://images.unsplash.com/photo-1590644367897-6b2ca8a6a61d?w=800&q=80',
    size: 'large' as const,
  },
  {
    id: 'craft',
    category: '05 / DETAIL',
    title: 'Craft',
    description:
      'Precision in every interaction. We believe that excellence is found in the final five percent—the subtle details that define the user experience.',
    column: 'left' as const,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    size: 'large' as const,
  },
]

// Card order: 1. Systems Architecture, 2. Clarity, 3. Velocity, 4. Scale, 5. Craft
// Grid: row1 = (1, 2), row2 = (3, 4), row3 = (5, empty)
const LEFT_IDS = ['systems', 'velocity', 'craft']
const RIGHT_IDS = ['clarity', 'scale']

const leftCards = LEFT_IDS.map((id) => bentoCards.find((c) => c.id === id)!).filter(Boolean)
const rightCards = RIGHT_IDS.map((id) => bentoCards.find((c) => c.id === id)!).filter(Boolean)

type CardProps = {
  card: (typeof bentoCards)[number]
  index: number
  gridInView: boolean
  prefersReducedMotion: boolean
}

function Card({ card, index, gridInView, prefersReducedMotion }: CardProps) {
  const isLarge = card.size === 'large'
  return (
    <motion.article
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
      animate={gridInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : index * 0.08,
        ease: 'easeOut',
      }}
      className="bg-white overflow-hidden flex flex-col h-full min-h-0 rounded-[12px]"
    >
      <motion.div
        className={`relative w-full min-h-[180px] sm:min-h-[220px] bg-neutral-200 shrink-0 overflow-hidden rounded-[12px] ${
          isLarge ? 'aspect-[3/4]' : 'aspect-[4/3]'
        }`}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
        transition={{ type: 'tween', duration: 0.22, ease: 'easeOut' }}
      >
        <Image
          src={
            card.id === 'systems'
              ? '/Gemini_Generated_Image_8wkzgf8wkzgf8wkz.png'
              : card.id === 'clarity'
                ? '/Gemini_Generated_Image_p1dxhip1dxhip1dx.png'
                : card.id === 'velocity'
                  ? '/3.png'
                  : card.id === 'scale'
                    ? '/4.png'
                    : card.id === 'craft'
                      ? '/5.png'
                      : card.image
          }
          alt={
            card.id === 'systems'
              ? 'Systems architecture – structured network, interconnected modules'
              : card.id === 'clarity'
                ? 'Clarity – 3D wireframe structure, architectural clarity'
                : card.id === 'velocity'
                  ? 'Velocity – transformation, motion, and dynamic structure'
                  : card.id === 'scale'
                    ? 'Scale – foundation, building blocks'
                    : card.id === 'craft'
                      ? 'Craft – precision, material, and detail'
                      : ''
          }
          fill
          className={['systems', 'clarity', 'velocity', 'scale', 'craft'].includes(card.id) ? 'object-cover object-center' : 'object-cover grayscale'}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={card.id === 'systems'}
        />
        <span className="absolute bottom-4 left-5 z-10 text-[10px] sm:text-xs uppercase tracking-widest text-white font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] pointer-events-none">
          {card.category}
        </span>
      </motion.div>
      <div className="relative z-10 pt-4 pr-6 pb-4 pl-0 sm:pt-5 sm:pr-7 sm:pb-5 sm:pl-0 md:pt-6 md:pr-8 md:pb-6 md:pl-0 shrink-0 text-left">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-normal font-serif-display text-black mb-3 sm:mb-4 leading-tight text-left">
          {card.title}
        </h3>
        <p className="text-[13px] sm:text-[15px] text-neutral-600 leading-relaxed font-sans text-left">
          {card.description}
        </p>
      </div>
      <div className="flex-1 min-h-0" aria-hidden />
    </motion.article>
  )
}

export default function ArchitecturalClarity() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })
  const gridInView = useInView(gridRef, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="clarity" className="section-spacing-x section-spacing-y bg-white !pt-12 sm:!pt-14 md:!pt-16 lg:!pt-20">
      <div className="max-w-content mx-auto">
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' }}
          className="mb-12 sm:mb-14 md:mb-16 flex flex-col md:flex-row md:items-center md:justify-between md:gap-10 gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-serif-display text-black leading-tight">
              <span className="block">Architectural</span>
              <span className="block font-serif italic text-neutral-500 mt-1">Clarity</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-500 font-serif max-w-md md:max-w-sm md:text-right text-balance md:pt-1">
            Systems thinking and modular foundations for digital products. Distilling complexity into scalable, human-centric frameworks.
          </p>
        </motion.header>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 lg:gap-20 md:items-stretch">
          {[0, 1, 2].map((rowIndex) => (
            <Fragment key={rowIndex}>
              <div className="min-h-[320px] md:min-h-0 md:h-full flex">
                <Card
                  key={leftCards[rowIndex].id}
                  card={leftCards[rowIndex]}
                  index={rowIndex * 2}
                  gridInView={gridInView}
                  prefersReducedMotion={!!prefersReducedMotion}
                />
              </div>
              {rightCards[rowIndex] ? (
                <div className="min-h-[320px] md:min-h-0 md:h-full flex">
                  <Card
                    key={rightCards[rowIndex].id}
                    card={rightCards[rowIndex]}
                    index={rowIndex * 2 + 1}
                    gridInView={gridInView}
                    prefersReducedMotion={!!prefersReducedMotion}
                  />
                </div>
              ) : rowIndex === 2 ? (
                <div
                  key="craft-quote"
                  className="min-h-[320px] md:min-h-0 md:h-full flex bg-white p-6 sm:p-8 md:p-10 lg:p-12 flex-col justify-center text-left rounded-[12px] overflow-hidden"
                >
                  <blockquote className="font-serif-display font-extrabold text-[43px] leading-tight text-left max-w-xl">
                    <span className="text-[#e85d04]">&ldquo;</span>
                    <span className="text-black">Design</span>
                    <span className="font-normal text-neutral-500"> isn&apos;t the</span>
                    <br />
                    <span className="font-normal text-neutral-500">screen. It&apos;s the </span>
                    <span className="quote-experience-gradient">experience</span>
                    <span className="font-normal text-neutral-500"> behind it.</span>
                    <span className="text-blue-600">&rdquo;</span>
                  </blockquote>
                  <p className="mt-3 sm:mt-4 py-0 font-normal text-black font-serif text-lg sm:text-xl md:text-2xl text-left ml-0">
                    – Munavar Irfan Alisha
                  </p>
                </div>
              ) : (
                <div key={`empty-${rowIndex}`} aria-hidden className="hidden md:block" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
