'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type Star = {
  x: number
  y: number
  r: number
  a: number
  hue: number
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [drift, setDrift] = useState({ x: 0, y: 0 })

  const stars = useMemo<Star[]>(() => {
    // Deterministic-enough layout per load; static starfield (no particle motion)
    const count = 520
    const result: Star[] = []
    for (let i = 0; i < count; i++) {
      // Center-weighted density to match the reference
      const t = Math.random()
      const cx = 0.5 + (Math.random() - 0.5) * (0.9 - t * 0.25)
      const cy = 0.5 + (Math.random() - 0.5) * (0.9 - t * 0.25)

      // Tiny points; a few slightly larger
      const r = Math.random() < 0.08 ? 1.15 : 0.75
      const a = 0.08 + Math.random() * 0.18

      // Rare colored specks (very subtle)
      const huePick = Math.random()
      const hue = huePick > 0.97 ? 330 : huePick > 0.94 ? 35 : 0

      result.push({ x: cx, y: cy, r, a, hue })
    }
    return result
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const draw = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      const w = canvas.clientWidth
      const h = canvas.clientHeight

      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      ctx.clearRect(0, 0, w, h)

      // Very subtle vignette base (keeps center slightly clearer)
      const vignette = ctx.createRadialGradient(w * 0.5, h * 0.48, 0, w * 0.5, h * 0.5, Math.max(w, h) * 0.62)
      vignette.addColorStop(0, 'rgba(0,0,0,0)')
      vignette.addColorStop(1, 'rgba(0,0,0,0.65)')
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, w, h)

      for (const s of stars) {
        const x = s.x * w
        const y = s.y * h
        ctx.beginPath()
        ctx.arc(x, y, s.r, 0, Math.PI * 2)
        if (s.hue) ctx.fillStyle = `hsla(${s.hue}, 70%, 70%, ${s.a})`
        else ctx.fillStyle = `rgba(255,255,255,${s.a})`
        ctx.fill()
      }
    }

    draw()
    const onResize = () => draw()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [stars])

  useEffect(() => {
    if (prefersReducedMotion) return

    let raf = 0
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5
      const y = (e.clientY / window.innerHeight) - 0.5
      // Max drift ~ 10px to stay atmospheric (not interactive)
      const dx = clamp(x * 20, -10, 10)
      const dy = clamp(y * 20, -10, 10)
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setDrift({ x: dx, y: dy }))
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [prefersReducedMotion])

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        transform: prefersReducedMotion ? undefined : `translate3d(${drift.x}px, ${drift.y}px, 0)`,
        transition: prefersReducedMotion ? undefined : 'transform 180ms ease-out',
        willChange: prefersReducedMotion ? undefined : 'transform',
      }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}

