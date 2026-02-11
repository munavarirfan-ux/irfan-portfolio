'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { CaseStudyData } from '@/lib/case-study-data'

type Props = {
  methodology: CaseStudyData['methodology']
}

export default function ProcessMethodology({ methodology }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const title = methodology.heading
  // Split for two gradient parts: "intelligent" (magenta→purple) and "integration" (orange→magenta)
  const intelligent = 'intelligent'
  const integration = 'integration'
  const beforeInt = title.split(intelligent)[0] ?? '' // "Architectural efficiency through "
  const afterInt = title.slice(beforeInt.length + intelligent.length) // " integration" (with leading space)
  const spaceBeforeIntegration = afterInt.startsWith(' ') ? ' ' : ''
  const integrationWord = afterInt.trimStart() // "integration"

  return (
    <section className="case-study-dark case-study-dot py-16 md:py-24" ref={ref}>
      <div className="case-study-wrap section-spacing-x max-w-4xl">
        {/* Tag – gradient border (orange to blue/purple) */}
        {methodology.tag && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="mb-6"
          >
            <span className="methodology-tag-wrap">
              <span className="methodology-tag font-sans uppercase tracking-wider">{methodology.tag}</span>
            </span>
          </motion.div>
        )}

        {/* Title – white + "intelligent" (gradient) + "integration" (gradient), generous line spacing */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-[32px] lg:text-[42px] font-bold tracking-tight text-white mb-6 font-sans leading-[1.35]"
        >
          {beforeInt}
          <span className="methodology-title-intelligent">{intelligent}</span>
          {spaceBeforeIntegration}
          <span className="methodology-title-integration">{integrationWord}</span>
        </motion.h2>

        {/* Description – light grey, lighter weight, constrained width */}
        {methodology.description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-base md:text-lg text-[var(--cs-text-muted)] max-w-2xl leading-relaxed mb-8 font-sans font-normal"
          >
            {methodology.description}
          </motion.p>
        )}

        {/* Subheading – only if present in data */}
        {methodology.subheading && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="text-lg font-semibold text-white mb-10 font-sans"
          >
            {methodology.subheading}
          </motion.p>
        )}

        {/* Numbered steps – two columns, grey dividers */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="space-y-0"
        >
          {methodology.steps.map((step, i) => (
            <div
              key={step.index}
              className="py-6 md:py-7 border-b border-white/10 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-12">
                <span className="text-sm text-[var(--cs-text-muted)] font-mono w-8 shrink-0">
                  {step.index}
                </span>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-[minmax(0,180px)_1fr] md:gap-12 gap-2 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-white font-sans">
                    {step.title}
                  </h3>
                  <p className="text-base text-[var(--cs-text-muted)] leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Flowchart – gradient border, three columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          className="mt-16 md:mt-20 rounded-2xl p-[2px] methodology-flowchart-border"
        >
          <div className="rounded-2xl bg-transparent border border-white/5 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-4 font-sans">
                  Front end
                </p>
                <div className="flex flex-col items-start gap-3">
                  <span className="text-sm text-white font-sans">Truck Camera Vision</span>
                  <div
                    className="w-14 h-14 rounded-lg border border-white/20 flex items-center justify-center bg-white/5"
                    aria-hidden
                  >
                    <svg className="w-7 h-7 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/50 font-sans">Unique fingerprints →</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-4 font-sans">
                  Backend
                </p>
                <div className="flex flex-col items-start gap-3">
                  <span className="text-sm text-white font-sans">Management and routing software</span>
                  <div className="w-14 h-14 rounded-lg border border-white/20 flex items-center justify-center bg-white/5" aria-hidden>
                    <svg className="w-7 h-7 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/80 font-sans">Parcel & customer info</span>
                  <div className="w-10 h-10 rounded border border-white/20 flex items-center justify-center bg-white/5" aria-hidden>
                    <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/50 font-sans">Recognition algorithm</span>
                  <span className="text-xs text-white/50 font-sans">Tracking algorithm</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-4 font-sans">
                  Frontend
                </p>
                <div className="flex flex-col items-start gap-3">
                  <span className="text-sm text-white font-sans">AR integrated mobile application</span>
                  <div className="w-14 h-14 rounded-lg border border-white/20 flex items-center justify-center bg-white/5" aria-hidden>
                    <svg className="w-7 h-7 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25h-10.5a2.25 2.25 0 00-2.25 2.25v15a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <span className="text-sm text-white/400 font-sans">Loading</span>
              <span className="text-sm text-white/400 font-sans">Processing</span>
              <span className="text-sm text-white/400 font-sans">Delivery</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
