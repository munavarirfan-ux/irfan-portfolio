'use client'

import { useState, useLayoutEffect } from 'react'
import Image from 'next/image'

const NAV_HEIGHT = 72

function isOverLightSection(): boolean {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false
  const check = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return false
    const rect = el.getBoundingClientRect()
    // Section visible and overlaps nav or is in upper 55% of viewport (works on all screen sizes)
    const visible = rect.top < window.innerHeight && rect.bottom > 0
    const topThreshold = NAV_HEIGHT + Math.min(250, window.innerHeight * 0.55)
    const inLightZone = rect.top < topThreshold
    return visible && inLightZone
  }
  return check('philosophy') || check('clarity')
}

export default function FixedNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [overLightBg, setOverLightBg] = useState(false)

  useLayoutEffect(() => {
    const update = () => setOverLightBg(isOverLightSection())
    update()
    const scrollTarget = document.documentElement
    scrollTarget.addEventListener('scroll', update, { passive: true })
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    const interval = setInterval(update, 200)
    return () => {
      clearInterval(interval)
      scrollTarget.removeEventListener('scroll', update)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <>
      <div
        aria-hidden="true"
        className="w-full pointer-events-none"
        style={{ height: NAV_HEIGHT }}
      />
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-[9999] transition-transform duration-300 ease-out ${overLightBg ? 'nav-over-light' : ''} translate-y-0`}
        data-nav-theme={overLightBg ? 'light' : 'dark'}
      >
        <div className="section-spacing-x pt-4 sm:pt-5 md:pt-6">
          <div className="max-w-content mx-auto">
            <div className={`rounded-xl px-6 py-4 sm:px-7 sm:py-4 md:px-10 md:py-4 transition-colors duration-200 ${overLightBg ? 'nav-liquid-glass-light' : 'nav-liquid-glass'}`}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <button
                    type="button"
                    onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center rounded transition-opacity hover:opacity-80"
                    aria-label="Home"
                  >
                    <Image
                      src="/favicon-light.svg"
                      alt=""
                      width={44}
                      height={44}
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${overLightBg ? 'opacity-100' : 'opacity-0'}`}
                      aria-hidden
                    />
                    <Image
                      src="/favicon-dark.svg"
                      alt=""
                      width={44}
                      height={44}
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${!overLightBg ? 'opacity-100' : 'opacity-0'}`}
                      aria-hidden
                    />
                  </button>
                  <button
                    type="button"
                    className="md:hidden flex flex-col gap-1.5 p-2 -ml-2 shrink-0 transition-colors duration-200"
                    style={{ color: overLightBg ? '#111' : '#d0d0d0' }}
                    onClick={() => setMobileMenuOpen((o) => !o)}
                    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={mobileMenuOpen}
                  >
                    <span className={`block w-5 h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                  </button>

                  <div
                    className="hidden md:block text-[13px] sm:text-[14px] md:text-[15px] font-serif-display min-w-0 transition-colors duration-200 whitespace-nowrap cursor-pointer"
                    style={{ color: overLightBg ? '#111' : '#e0e0e0' }}
                    onClick={() => {
                      const el = document.getElementById('hero')
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                  >
                    Munavar Irfan
                  </div>
                </div>

                <nav className="hidden md:flex items-center justify-center flex-1 gap-12 lg:gap-16 text-[13px] lg:text-[14px] font-serif-display transition-colors duration-200">
                  <a href="#work" className="transition-colors" style={{ color: overLightBg ? '#222' : '#c0c0c0' }}>Works</a>
                  <a href="#clarity" className="transition-colors" style={{ color: overLightBg ? '#222' : '#c0c0c0' }}>Capabilities</a>
                  <a href="#philosophy" className="transition-colors" style={{ color: overLightBg ? '#222' : '#c0c0c0' }}>About</a>
                </nav>

                <a
                  href="/Resume/Munavar%20Irfan%20Alisha_Product%20Design_Resume.pdf"
                  download
                  className={`shrink-0 inline-block transition-colors duration-200 ${overLightBg ? 'nav-resume-btn-light' : 'hero-resume-btn'}`}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden section-spacing-x pt-2 px-0">
            <div className="max-w-content mx-auto flex justify-start">
              <div className={`rounded-2xl px-6 py-4 flex flex-col gap-3 w-full max-w-[280px] transition-colors duration-200 ${overLightBg ? 'nav-liquid-glass-light' : 'nav-liquid-glass'}`}>
                <a href="#work" className="text-[13px] transition-colors" style={{ color: overLightBg ? '#222' : '#c0c0c0' }} onClick={() => setMobileMenuOpen(false)}>Works</a>
                <a href="#clarity" className="text-[13px] transition-colors" style={{ color: overLightBg ? '#222' : '#c0c0c0' }} onClick={() => setMobileMenuOpen(false)}>Capabilities</a>
                <a href="#philosophy" className="text-[13px] transition-colors" style={{ color: overLightBg ? '#222' : '#c0c0c0' }} onClick={() => setMobileMenuOpen(false)}>About</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
