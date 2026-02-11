'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import type { ClosingCTA } from '@/lib/case-study-data'

export default function ClosingStatement({ data }: { data: ClosingCTA }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const parts = data.statement.split(new RegExp(`(${data.highlight})`, 'gi'))

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="text-center py-16 md:py-24"
    >
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto mb-12">
        {parts.map((part, i) =>
          part.toLowerCase() === data.highlight.toLowerCase() ? (
            <span key={i} className="apple-intelligence-gradient">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href={data.primaryButton.href}
          className="hero-resume-btn"
          download
        >
          {data.primaryButton.label}
        </Link>
      </div>
    </motion.section>
  )
}
