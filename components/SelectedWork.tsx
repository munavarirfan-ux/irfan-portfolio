'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const workItems = [
  {
    category: 'Architecture, BIM, IFC',
    title: 'Ship the BIM',
    description: 'Reimagining BIM Readiness Validation through AI and Fix Pack Automation',
    visual: 'ship-the-bim',
    slug: 'ship-the-bim',
    imagePath: '/case-studies/ship-the-bim/Hero card STB.png',
  },
  {
    category: 'AR · Mobility Tech · Logistics',
    title: 'DropAR',
    description: 'Reimagining last mile delivery through Augmented Reality',
    visual: 'drop-ar',
    slug: 'dropar',
    imagePath: '/case-studies/dropar/Hero card.png',
  },
  {
    category: 'AI / Smart Home / Interaction Design',
    title: 'Ziggy',
    description: 'Conversational UI, 3D Design & Branding for a voice-first device',
    visual: 'ziggy',
    slug: 'ziggy',
    imagePath: '/case-studies/ziggy/Hero card ZIggy.png',
  },
  {
    category: 'Community & Health',
    title: 'Psymatrix',
    description: 'Case study coming soon',
    visual: 'psymatrix',
    slug: null,
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

        <div ref={gridRef} className="relative py-6 sm:py-8 md:py-10">
          <div
            className="grid grid-cols-1 gap-8 sm:grid-cols-none sm:flex sm:gap-8 md:gap-10 lg:gap-12 sm:overflow-x-auto sm:overflow-y-hidden sm:pb-2 sm:snap-x sm:snap-mandatory sm:scroll-smooth sm:py-4 sm:py-6 sm:px-3 sm:px-4 sm:[scrollbar-width:none] sm:[&::-webkit-scrollbar]:hidden"
            aria-label="Selected works"
          >
            {workItems.map((item, index) => {
              const cardContent = (
                <>
                  <div
                    className="w-full aspect-[4/5] rounded-2xl sm:rounded-[24px] mb-4 sm:mb-5 border border-white/[0.12] bg-[#0d0d0d] overflow-hidden transform transition-all duration-500 ease-out group-hover:border-white/[0.18] group-hover:scale-[1.04]"
                    style={{
                      boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.06)',
                    }}
                  >
                    {'imagePath' in item && item.imagePath ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.imagePath}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="pl-0">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50 font-sans block mb-1.5 sm:mb-2">
                      {item.category}
                    </span>
                    <h3 className="relative text-2xl sm:text-3xl md:text-4xl font-normal font-serif-display mb-1.5 sm:mb-2 leading-tight inline-block whitespace-nowrap">
                      <span className="selected-works-title-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                  className="w-full min-w-0 sm:w-[38vw] sm:min-w-[320px] md:w-[40vw] md:min-w-[360px] lg:w-[42vw] lg:min-w-[400px] lg:max-w-[480px] sm:shrink-0 sm:snap-center sm:snap-always overflow-visible"
                >
                  {item.slug ? (
                    <Link
                      href={`/case-studies/${item.slug}`}
                      className="group cursor-pointer block overflow-visible"
                      tabIndex={0}
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div className="group cursor-pointer overflow-visible">{cardContent}</div>
                  )}
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
