'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { MethodologyStep } from '@/lib/case-study-data'

export default function MethodologyTimeline({ steps }: { steps: MethodologyStep[] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="space-y-0">
      {steps.map((step, i) => (
        <motion.div
          key={step.index}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
          className="py-6 md:py-8 border-b border-[var(--cs-border)] last:border-b-0"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
            <span className="text-sm text-[var(--cs-text-muted)] font-mono w-8 shrink-0">
              {step.index}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-lg md:text-xl font-bold text-[var(--cs-text)]">
                  {step.title}
                </h3>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white"
                  style={{
                    background: 'linear-gradient(90deg, #818cf8 0%, #a78bfa 100%)',
                  }}
                >
                  {step.pillLabel}
                </span>
              </div>
              <p className="text-base text-[var(--cs-text-muted)] leading-relaxed max-w-2xl">
                {step.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
