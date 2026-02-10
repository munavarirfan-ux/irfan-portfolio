'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import HeroBackground from '@/components/HeroBackground'
import HeroParticles from '@/components/HeroParticles'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <footer id="footer" className="relative overflow-hidden bg-black text-white section-spacing-x pt-[var(--section-py)] pb-8 sm:pb-10 flex flex-col">
      {/* Same background as Hero: starfield + cursor-reactive particles + vignette */}
      <HeroBackground />
      <HeroParticles />
      <div aria-hidden="true" className="absolute inset-0 hero-vignette" />
      <div ref={ref} className="relative z-10 max-w-content mx-auto w-full flex flex-col">
        {/* Top row: title left, Download Resume button right */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 sm:gap-6 pb-10 sm:pb-12 md:pb-14"
        >
          <h2 className="font-serif-display text-l sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight footer-title-gradient">
            Quiet Confidence
          </h2>
          <a
            href="#"
            className="footer-resume-btn text-sm sm:text-base font-sans font-medium hover:opacity-90 transition-opacity shrink-0"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Bottom row: phone left, social links (LinkedIn etc.) at end of screen */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.15, ease: 'easeOut' }}
          className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4 pt-6 sm:pt-8 pb-4 sm:pb-6 border-t border-white/10"
        >
          <span className="text-white/90 text-sm sm:text-base font-sans">
            +49 15210750041
          </span>
          <nav className="flex flex-wrap gap-6 sm:gap-8 text-white/90 text-sm sm:text-base font-sans sm:ml-auto">
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Behance
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
          </nav>
        </motion.div>
      </div>
    </footer>
  )
}
