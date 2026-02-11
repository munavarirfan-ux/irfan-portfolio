'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { DecisionBlock as DecisionBlockType } from '@/lib/case-study-data'

type Props = {
  block: DecisionBlockType
  imageLeft?: boolean
  /** When true, reduces top padding to tighten gap below section header */
  isFirst?: boolean
  /** When false, hide "Options explored" row (e.g. Ship the BIM). Default true. */
  showOptions?: boolean
  /** When 'gradient', show only a gradient block instead of 3 device images. Default 'images'. */
  visualVariant?: 'images' | 'gradient'
  /** When 'simple', use light grey pill for token (e.g. "Decision 1"). Default 'default'. */
  tokenPillVariant?: 'default' | 'simple'
}

const GRADIENT_CARD_IMAGES: [string, string, string] = [
  '/case-studies/dropar/4.png',
  '/case-studies/dropar/5.png',
  '/case-studies/dropar/6.png',
]
const GRADIENT_CARD_ALTS: [string, string, string] = ['Today\'s Route', 'Stop detail – Michael Chen', 'AR Navigation Ready']

export default function DecisionBlock({ block, isFirst, showOptions = true, visualVariant = 'images', tokenPillVariant = 'default' }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const hasWhatOutcome = block.what != null && block.outcome != null
  const hasImpactAndTradeOff = block.impact != null && block.tradeOff != null
  const useSimpleLayout = hasImpactAndTradeOff && !showOptions

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`pt-6 pb-12 md:pt-8 md:pb-16 border-b border-[var(--decisions-border)] last:border-b-0 ${isFirst ? 'pt-4 md:pt-6' : ''}`}
    >
      <div className="space-y-6 mb-10 md:mb-12">
        {/* Token pill */}
        {block.token && (
          <div className="mb-3">
            {tokenPillVariant === 'simple' ? (
              <span className="decisions-token-pill-simple font-sans text-sm font-normal text-[var(--decisions-heading)]">
                {block.token}
              </span>
            ) : (
              <span className="decisions-token-pill-wrap">
                <span className="decisions-token-pill font-sans uppercase tracking-wider">
                  {block.token}
                </span>
              </span>
            )}
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-bold text-[var(--decisions-heading)] font-sans">
          {block.title}
        </h3>
        {useSimpleLayout ? (
          <div className="space-y-4 text-[var(--decisions-muted)] text-base leading-relaxed font-sans">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                WHY
              </span>
              <p className="mt-0">{block.why}</p>
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
        ) : hasImpactAndTradeOff ? (
          <div className="space-y-4 text-[var(--decisions-muted)] text-base leading-relaxed font-sans">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                Why
              </span>
              <p className="mt-0">{block.why}</p>
            </div>
            {showOptions && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--decisions-heading)] block mb-1">
                  Options explored
                </span>
                <p className="mt-0">{block.options}</p>
              </div>
            )}
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

      {/* Visual: image (gradient variant), gradient placeholder, or 3 device images */}
      {visualVariant === 'gradient' ? (
        block.imagePath ? (
          <div className="w-full rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={block.imagePath}
              alt={block.imageAlt}
              className="w-full h-auto object-cover object-top"
            />
          </div>
        ) : (
          <div
            className="w-full rounded-2xl overflow-hidden min-h-[200px]"
            style={{
              background: 'linear-gradient(90deg, #FFDAC7 0%, #FFADCB 35%, #E19FEA 65%, #B4D7F7 100%)',
            }}
            aria-hidden
          />
        )
      ) : (
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
      )}
    </motion.article>
  )
}
