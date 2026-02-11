'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { ScreenTriplet as ScreenTripletType } from '@/lib/case-study-data'

type Props = {
  group: ScreenTripletType
}

export default function ScreenTriplet({ group }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const gradientStyle = {
    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 20%, #a5b4fc 70%, #c4b5fd 100%)',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="rounded-2xl md:rounded-3xl p-8 md:p-12 overflow-hidden"
      style={gradientStyle}
    >
      <div className="flex flex-wrap justify-center items-end gap-4 sm:gap-6 md:gap-8">
        {group.imagePaths.map((path, i) => (
          <div key={i} className="w-[160px] sm:w-[200px] md:w-[240px] shrink-0">
            <div className="bg-[#1a1a1a] rounded-[28px] p-1.5 shadow-xl">
              <div className="bg-[#0d0d0d] rounded-[22px] overflow-hidden aspect-[9/19] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={path}
                  alt={group.imageAlts[i] ?? `Screen ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const el = e.currentTarget.nextElementSibling as HTMLElement
                    if (el) el.style.display = 'flex'
                  }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center text-white/30 text-xs"
                  style={{ display: 'none' }}
                >
                  Screen {i + 1}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {(group.title || group.description) && (
        <p className="text-center text-sm text-[var(--cs-text-muted)] mt-6 max-w-xl mx-auto">
          {group.title ?? group.description}
        </p>
      )}
    </motion.div>
  )
}
