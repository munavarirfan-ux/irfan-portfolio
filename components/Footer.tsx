'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import HeroBackground from '@/components/HeroBackground'
import HeroParticles from '@/components/HeroParticles'

export default function Footer() {
  const ref = useRef(null)
  const pathname = usePathname()
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()
  const isCaseStudyPage = pathname?.startsWith('/case-study') || pathname?.startsWith('/case-studies')

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
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 flex items-center justify-center rounded transition-opacity hover:opacity-80"
              aria-label="Home"
            >
              <Image
                src="/favicon-dark.svg"
                alt=""
                width={56}
                height={56}
                className="w-full h-full object-contain"
                aria-hidden
              />
            </a>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight footer-title-gradient">
              Quiet Confidence
            </h2>
          </div>
          {!isCaseStudyPage && (
            <a
              href="/Resume/Munavar%20Irfan%20Alisha_Product%20Design_Resume.pdf"
              download
              className="shrink-0 inline-block transition-colors duration-200 hero-resume-btn"
            >
              Download Resume
            </a>
          )}
        </motion.div>

        {/* Bottom row: social links left, phone right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.15, ease: 'easeOut' }}
          className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4 pt-6 sm:pt-8 pb-4 sm:pb-6 border-t border-white/10"
        >
          <nav className="flex flex-wrap gap-6 sm:gap-8 text-white/90 text-sm sm:text-base font-sans">
            <a href="https://www.linkedin.com/in/munavar-irfan-alisha-554531201/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://www.behance.net/munavaralisha" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Behance
            </a>
            <a href="https://www.instagram.com/irfan_visions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
          </nav>
          <span className="text-white/90 text-sm sm:text-base font-sans sm:ml-auto">
            +49 15210750041
          </span>
        </motion.div>
      </div>
    </footer>
  )
}
