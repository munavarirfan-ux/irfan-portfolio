'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import type { ClosingCTA } from '@/lib/case-study-data'

function splitByHighlights(statement: string, highlight: string, highlight2?: string): { text: string; type: 'text' | 'highlight' | 'highlight2' }[] {
  const out: { text: string; type: 'text' | 'highlight' | 'highlight2' }[] = []
  const re1 = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  const parts = statement.split(re1)
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    if (part.toLowerCase() === highlight.toLowerCase()) {
      out.push({ text: part, type: 'highlight' })
      continue
    }
    if (highlight2) {
      const re2 = new RegExp(`(${highlight2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
      const sub = part.split(re2)
      for (let j = 0; j < sub.length; j++) {
        if (sub[j].toLowerCase() === highlight2.toLowerCase()) {
          out.push({ text: sub[j], type: 'highlight2' })
        } else {
          out.push({ text: sub[j], type: 'text' })
        }
      }
    } else {
      out.push({ text: part, type: 'text' })
    }
  }
  return out
}

type ClosingStatementProps = {
  data: ClosingCTA
  /** When set, the primary button becomes a button that calls this instead of linking. */
  onPrimaryClick?: (e: React.MouseEvent) => void
}

export default function ClosingStatement({ data, onPrimaryClick }: ClosingStatementProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const segments = splitByHighlights(data.statement, data.highlight, data.highlight2)

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="text-center py-16 md:py-24"
    >
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto mb-12">
        {segments.map((seg, i) =>
          seg.type === 'highlight' || seg.type === 'highlight2' ? (
            <span key={i} className="apple-intelligence-gradient">{seg.text}</span>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        )}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {onPrimaryClick ? (
          <button
            type="button"
            onClick={onPrimaryClick}
            className="hero-resume-btn"
          >
            {data.primaryButton.label}
          </button>
        ) : (
          <Link
            href={data.primaryButton.href}
            className="hero-resume-btn"
            download
          >
            {data.primaryButton.label}
          </Link>
        )}
      </div>
    </motion.section>
  )
}
