'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import HeroBackground from '@/components/HeroBackground'
import HeroParticles from '@/components/HeroParticles'

export default function Hero() {
  const [displayedLength, setDisplayedLength] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [bgPosition, setBgPosition] = useState('50% 50%')
  const heroRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  
  // Full text – edit here to change the hero headline (this is what shows at localhost:3000)
  const fullText = 'Designing systems\nthat scale\nCrafting clarity in\ncomplexity'
  const italicRanges = [
    (() => {
      const word = 'scale'
      const start = fullText.indexOf(word)
      return { start, end: start + word.length }
    })(),
    (() => {
      const word = 'complexity'
      const start = fullText.indexOf(word)
      return { start, end: start + word.length }
    })(),
  ]
  
  // Cursor-aware background effect - very low intensity
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)
  const springX = useSpring(mouseX, { stiffness: 30, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 30, damping: 25 })

  useEffect(() => {
    // Typewriter effect: character-by-character, runs once on load (no loop)
    // Matches vanilla config: speed 80ms, start delay 500ms
    if (prefersReducedMotion) {
      setDisplayedLength(fullText.length)
      setShowCursor(false)
      setIsTypingComplete(true)
      return
    }

    const config = { speed: 80, startDelay: 500, loop: false }
    let charIndex = 0
    let timeoutId: ReturnType<typeof setTimeout>

    const typeChar = () => {
      if (charIndex < fullText.length) {
        charIndex++
        setDisplayedLength(charIndex)
        timeoutId = setTimeout(typeChar, config.speed)
      } else {
        setIsTypingComplete(true)
        setShowCursor(false)
        // Trigger subtitle fade-in (for any .hero .subtitle in DOM)
        const subtitle = document.querySelector('.hero .subtitle')
        if (subtitle) subtitle.classList.add('visible')
      }
    }

    const startDelay = setTimeout(() => typeChar(), config.startDelay)

    return () => {
      clearTimeout(startDelay)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [fullText, prefersReducedMotion])

  // Cursor hidden when typing complete (blink is handled by CSS animation)

  // Update background position based on spring values
  useEffect(() => {
    if (prefersReducedMotion) return

    let latestX = 50
    let latestY = 50

    const unsubscribeX = springX.on('change', (x) => {
      latestX = x
      setBgPosition(`${latestX}% ${latestY}%`)
    })

    const unsubscribeY = springY.on('change', (y) => {
      latestY = y
      setBgPosition(`${latestX}% ${latestY}%`)
    })

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [springX, springY, prefersReducedMotion])

  // Mouse tracking for subtle background effect
  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      // Very subtle movement - low intensity
      mouseX.set(50 + (x - 50) * 0.02) // Max 2% drift
      mouseY.set(50 + (y - 50) * 0.02)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY, prefersReducedMotion])

  // Render text with proper italic formatting
  const renderText = () => {
    const textToRender = prefersReducedMotion || isTypingComplete 
      ? fullText 
      : fullText.substring(0, displayedLength)
    
    const result: React.ReactNode[] = []
    let currentSpan: string[] = []
    let currentIsItalic: boolean | null = null

    for (let i = 0; i < textToRender.length; i++) {
      const char = textToRender[i]
      const isItalic = italicRanges.some(r => i >= r.start && i < r.end)

      if (char === '\n') {
        if (currentSpan.length > 0 && currentIsItalic !== null) {
          result.push(
            <span key={`span-${i}`} className={currentIsItalic ? 'font-extralight italic' : ''}>
              {currentSpan.join('')}
            </span>
          )
          currentSpan = []
        }
        result.push(<br key={`br-${i}`} />)
        currentIsItalic = null
      } else {
        if (currentIsItalic === null) {
          currentIsItalic = isItalic
          currentSpan = [char]
        } else if (currentIsItalic === isItalic) {
          currentSpan.push(char)
        } else {
          result.push(
            <span key={`span-${i}`} className={currentIsItalic ? 'font-extralight italic' : ''}>
              {currentSpan.join('')}
            </span>
          )
          currentIsItalic = isItalic
          currentSpan = [char]
        }
      }
    }

    if (currentSpan.length > 0 && currentIsItalic !== null) {
      result.push(
        <span key="span-final" className={currentIsItalic ? 'font-extralight italic' : ''}>
          {currentSpan.join('')}
        </span>
      )
    }
    
    return result
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-one-viewport relative w-full bg-black"
    >
      {/* Starfield */}
      <HeroBackground />

      {/* Cursor-interactive particles */}
      <HeroParticles />

      {/* Cursor-aware background gradient - subtle, atmospheric */}
      {!prefersReducedMotion && (
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-100 ease-out"
          style={{
            background: `radial-gradient(circle at ${bgPosition}, rgba(20, 20, 30, 0.4), transparent 60%)`,
            backgroundSize: '120% 120%',
          }}
        />
      )}

      {/* Vignette / depth */}
      <div aria-hidden="true" className="absolute inset-0 hero-vignette pointer-events-none" />

      {/* Row 1: Nav clearance so content doesn't sit under fixed nav */}
      <div className="hero-row-nav-space" aria-hidden="true" />

      {/* Row 2: Centered headline + pill (flex: 1, min-height: 0 so it can shrink); left-aligned on mobile */}
      <div className="hero-row-center section-spacing-x relative z-0">
        <div className="max-w-content mx-auto w-full text-left md:text-center flex flex-col items-start md:items-center justify-center px-1">
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              delay: prefersReducedMotion ? 0 : 0.08,
              ease: 'easeOut',
            }}
            className="hero-pill-margin flex justify-start md:justify-center"
          >
            <div
              className="rounded-[12px] px-3 py-1.5 sm:px-4 sm:py-2 text-[17px] sm:text-[18px] md:text-[19px] text-white/70 border border-white/10 font-serif-display backdrop-blur-[13.1px]"
              style={{
                background: 'linear-gradient(45deg, rgba(255, 120, 78, 0.2) 0%, rgba(249, 81, 149, 0.2) 50%, rgba(117, 172, 255, 0.2) 100%)',
              }}
            >
              Product Designer
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.85,
              delay: prefersReducedMotion ? 0 : 0.12,
              ease: 'easeOut',
            }}
            className="font-serif-display hero-title-gradient hero-headline text-left md:text-center w-full"
          >
            {renderText()}
            <span className="inline-block ml-1 sm:ml-1.5 typewriter-cursor" aria-hidden="true" />
          </motion.h1>
        </div>
      </div>

      {/* Row 3: Bottom links – always visible in same hero viewport */}
      <div className="hero-row-bottom section-spacing-x relative z-0">
        <div className="max-w-content mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 text-[11px] sm:text-xs md:text-[13px] text-white/40">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <a href="https://www.linkedin.com/in/munavar-irfan-alisha-554531201/" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">LinkedIn</a>
            <a href="https://www.behance.net/munavaralisha" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Behance</a>
            <a href="https://www.instagram.com/irfan_visions/" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Instagram</a>
          </div>
          <button
            type="button"
            className="hover:text-white/60 transition-colors"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })}
          >
            Scroll To Explore
          </button>
        </div>
      </div>
    </section>
  )
}
