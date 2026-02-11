'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { DecisionBlock as DecisionBlockType } from '@/lib/case-study-data'

type Props = {
  block: DecisionBlockType
  imageLeft?: boolean
  /** When true, reduces top padding to tighten gap below section header */
  isFirst?: boolean
}

const GRADIENT_CARD_IMAGES: [string, string, string] = [
  '/case-studies/dropar/4.png',
  '/case-studies/dropar/5.png',
  '/case-studies/dropar/6.png',
]
const GRADIENT_CARD_ALTS: [string, string, string] = ['Today\'s Route', 'Stop detail – Michael Chen', 'AR Navigation Ready']

export default function DecisionBlock({ block, isFirst }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const hasWhatOutcome = block.what != null && block.outcome != null
  const hasImpactAndTradeOff = block.impact != null && block.tradeOff != null

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`pt-6 pb-12 md:pt-8 md:pb-16 border-b border-[var(--decisions-border)] last:border-b-0 ${isFirst ? 'pt-4 md:pt-6' : ''}`}
    >
      <div className="space-y-6 mb-10 md:mb-12">
        {/* Token pill (e.g. "Decision 01") – light bg, gradient border, black text */}
        {block.token && (
          <div className="mb-3">
            <span className="decisions-token-pill-wrap">
              <span className="decisions-token-pill font-sans uppercase tracking-wider">
                {block.token}
              </span>
            </span>
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-bold text-[var(--decisions-heading)] font-sans">
          {block.title}
        </h3>
        {hasImpactAndTradeOff ? (
          <div className="space-y-4 text-[var(--decisions-muted)] text-base leading-relaxed font-sans">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Why
              </span>
              <p className="mt-0">{block.why}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Options explored
              </span>
              <p className="mt-0">{block.options}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Final solution
              </span>
              <p className="mt-0">{block.finalSolution}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Impact
              </span>
              <p className="mt-0">{block.impact}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Trade-off
              </span>
              <p className="mt-0">{block.tradeOff}</p>
            </div>
          </div>
        ) : hasWhatOutcome ? (
          <div className="space-y-4 text-[var(--decisions-muted)] text-base leading-relaxed font-sans">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                What
              </span>
              <p className="mt-0">{block.what}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Why
              </span>
              <p className="mt-0">{block.why}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Outcome
              </span>
              <p className="mt-0">{block.outcome}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Impact
              </span>
              <p className="mt-0">{block.tradeOff}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-[var(--decisions-muted)] text-base leading-relaxed font-sans">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Problem
              </span>
              <p className="mt-0">{block.why}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Solution
              </span>
              <p className="mt-0">{block.finalSolution}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Key Features
              </span>
              <p className="mt-0">{block.options}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Impact
              </span>
              <p className="mt-0">{block.tradeOff}</p>
            </div>
          </div>
        )}
      </div>

      {/* Gradient card with 3 images (4.png, 5.png, 6.png) */}
      <div className="decisions-card p-8 sm:p-10 md:p-12">
        <div className="flex overflow-x-auto overflow-y-hidden justify-center items-end gap-6 sm:gap-8 md:gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {(block.screenImagePaths ?? GRADIENT_CARD_IMAGES).map((src, i) => (
            <div key={src} className="w-[160px] sm:w-[200px] md:w-[220px] shrink-0 snap-center snap-always rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={(block.screenImageAlts ?? GRADIENT_CARD_ALTS)[i]}
                className="w-full h-auto object-cover aspect-[9/19]"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
