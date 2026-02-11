'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { ValidationOutcome as ValidationOutcomeType } from '@/lib/case-study-data'

export default function ValidationOutcome({ data }: { data: ValidationOutcomeType }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="grid md:grid-cols-2 gap-12 md:gap-16"
    >
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[var(--cs-text)] mb-6">
          Validation
        </h3>
        {data.validation.intro && (
          <p className="text-[var(--cs-text-muted)] text-base leading-relaxed max-w-[65ch] mb-4">
            {data.validation.intro}
          </p>
        )}
        {data.validation.bullets.length === 1 && !data.validation.intro ? (
          <p className="text-[var(--cs-text-muted)] text-base leading-relaxed max-w-[65ch]">
            {data.validation.bullets[0]}
          </p>
        ) : (
          <ul className="space-y-3 text-[var(--cs-text-muted)] text-base leading-relaxed list-disc list-inside max-w-[65ch]">
            {data.validation.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
        {data.validation.metrics && data.validation.metrics.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6">
            {data.validation.metrics.map((m, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-[var(--cs-border)]/30 text-sm font-medium text-[var(--cs-text)]"
              >
                {m}
              </span>
            ))}
          </div>
        )}
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[var(--cs-text)] mb-6">
          Outcome
        </h3>
        {data.outcome.intro && (
          <p className="text-[var(--cs-text-muted)] text-base leading-relaxed max-w-[65ch] mb-4">
            {data.outcome.intro}
          </p>
        )}
        {data.outcome.bullets.length === 1 && !data.outcome.intro ? (
          <p className="text-[var(--cs-text-muted)] text-base leading-relaxed max-w-[65ch]">
            {data.outcome.bullets[0]}
          </p>
        ) : (
          <ul className="space-y-3 text-[var(--cs-text-muted)] text-base leading-relaxed list-disc list-inside max-w-[65ch]">
            {data.outcome.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
        {data.outcome.quote && (
          <blockquote className="mt-6 pl-4 border-l-2 border-[var(--cs-border)] text-[var(--cs-text)] italic">
            {data.outcome.quote}
          </blockquote>
        )}
      </div>
    </motion.div>
  )
}
