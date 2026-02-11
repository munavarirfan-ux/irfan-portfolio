'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const workItems = [
  {
    category: 'Community & Health',
    title: 'DropAR',
    description: 'Reimagining last mile delivery through Augmented Reality',
    visual: 'drop-ar',
    slug: 'dropar',
  },
  {
    category: 'Community & Health',
    title: 'Ziggy',
    description: 'Conversational UI, 3D Design & Branding for a voice-first device',
    visual: 'ziggy',
    slug: null,
  },
  {
    category: 'Community & Health',
    title: 'DropAR',
    description: 'Reimagining last mile delivery through Augmented Reality',
    visual: 'drop-ar-2',
    slug: 'dropar',
  },
]

export default function SelectedWork() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })
  const gridInView = useInView(gridRef, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="work" className="section-spacing-x section-spacing-y bg-black">
      <div className="max-w-content mx-auto">
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' }}
          className="mb-12 sm:mb-14 md:mb-16 lg:mb-20 flex flex-col md:flex-row md:items-center md:justify-between md:gap-8 gap-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-serif-display leading-tight">
            <span className="selected-works-title-gradient">
              <span className="block">Selected</span>
              <span className="block mt-1 ml-[0.12em]">Works</span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-serif max-w-md md:max-w-sm md:text-right text-balance">
            A selection of projects where empathy and storytelling led the way to impactful solutions
          </p>
        </motion.header>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12"
        >
          {workItems.map((item, index) => {
            const cardContent = (
              <>
                <div
                  className="w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl sm:rounded-[24px] mb-4 sm:mb-5 border border-white/[0.12] bg-[#0d0d0d] overflow-hidden transition-all duration-300 group-hover:border-white/[0.18]"
                  style={{
                    boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
                  }}
                />
                <div className="pl-0">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50 font-sans block mb-1.5 sm:mb-2">
                    {item.category}
                  </span>
                  <h3 className="relative text-2xl sm:text-3xl md:text-4xl font-normal font-serif-display mb-1.5 sm:mb-2 leading-tight inline-block">
                    <span className="apple-intelligence-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.title}
                    </span>
                    <span
                      className="absolute left-0 top-0 text-white transition-opacity duration-300 group-hover:opacity-0"
                      aria-hidden
                    >
                      {item.title}
                    </span>
                  </h3>
                  <p className="text-[13px] sm:text-[15px] text-white/50 leading-relaxed max-w-[320px]">
                    {item.description}
                  </p>
                </div>
              </>
            )
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: 'easeOut',
                }}
              >
                {item.slug ? (
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="group cursor-pointer block"
                    tabIndex={0}
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <div className="group cursor-pointer">{cardContent}</div>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
