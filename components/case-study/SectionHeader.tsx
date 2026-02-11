'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {
  title: string
  /** Phrase inside title to highlight with accent gradient (e.g. "intelligent integration") */
  highlight?: string
  description?: string
  className?: string
}

export default function SectionHeader({ title, highlight, description, className = '' }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  let content: React.ReactNode = title
  if (highlight) {
    const parts = title.split(new RegExp(`(${highlight})`, 'gi'))
    content = parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className="case-study-accent-gradient">
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  return (
    <motion.header
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-8 md:mb-12 ${className}`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-[28px] lg:text-[36px] font-bold leading-tight tracking-tight max-w-3xl">
        {content}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[var(--cs-text-muted)] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.header>
  )
}
