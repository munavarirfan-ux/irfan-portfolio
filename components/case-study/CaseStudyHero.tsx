'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import MetaRow from './MetaRow'
import StatChips from './StatChips'
import DeviceShowcase from './DeviceShowcase'
import type { CaseStudyData } from '@/lib/case-study-data'

type Props = {
  data: CaseStudyData['hero']
  /** Optional first screen group for device showcase images */
  screenImagePaths?: [string, string, string]
  screenImageAlts?: [string, string, string]
  /** If true, match reference hero only: label, title, subtitle, meta. No summary, stats, or device showcase. */
  minimal?: boolean
}

export default function CaseStudyHero({ data, screenImagePaths, screenImageAlts, minimal = false }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="case-study-light case-study-dot relative pt-[calc(var(--nav-height)+32px)] pb-16 md:pb-24">
      <div className="case-study-wrap section-spacing-x">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {data.label && (
            <p className="text-[13px] uppercase tracking-wider text-[var(--cs-text-meta-label)] mt-[52px] mb-[52px] font-sans">
              {data.label}
            </p>
          )}

          <h1
            className="text-[40px] sm:text-[48px] md:text-[84px] lg:text-[95px] font-black tracking-tight mt-[-77px] mb-[-77px] font-sans hero-title-gradient"
          >
            {data.title}
          </h1>

          <p
            className="text-[28px] sm:text-[32px] md:text-[36px] leading-tight max-w-2xl mt-4 mb-12 font-sans font-extralight"
            style={{ color: '#8a8a8a' }}
          >
            {data.subtitle}
          </p>

          <div className="py-4">
            <MetaRow items={data.meta} />
          </div>

          {!minimal && (
            <>
              <div className="max-w-[65ch] space-y-4 mt-12 mb-8">
                {data.summary.map((para, i) => (
                  <p key={i} className="text-base md:text-lg leading-relaxed text-[var(--cs-text)] font-sans">
                    {para}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mb-12">
                <StatChips stats={data.stats} />
              </div>
              <DeviceShowcase imagePaths={screenImagePaths} imageAlts={screenImageAlts} />
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
