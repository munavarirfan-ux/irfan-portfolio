'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {
  /** Optional: 3 image paths for phone screens. If not provided, placeholder phones are shown. */
  imagePaths?: [string, string, string]
  imageAlts?: [string, string, string]
}

export default function DeviceShowcase({ imagePaths, imageAlts }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const gradientStyle = {
    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 20%, #a5b4fc 70%, #c4b5fd 100%)',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16"
      style={gradientStyle}
    >
      <div className="flex flex-wrap justify-center items-end gap-4 sm:gap-6 md:gap-8">
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-[160px] sm:w-[200px] md:w-[240px] shrink-0 rounded-2xl overflow-hidden shadow-lg">
            {imagePaths?.[i] ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imagePaths[i]}
                  alt={imageAlts?.[i] ?? `Screen ${i + 1}`}
                  className="w-full h-auto object-cover aspect-[9/19]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const el = e.currentTarget.nextElementSibling as HTMLElement
                    if (el) el.style.display = 'flex'
                  }}
                />
                <span className="flex items-center justify-center text-white/30 text-xs aspect-[9/19] bg-[#0d0d0d]" style={{ display: 'none' }}>Screen {i + 1}</span>
              </>
            ) : (
              <div className="aspect-[9/19] flex items-center justify-center bg-[#0d0d0d] text-white/30 text-xs">Screen {i + 1}</div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
