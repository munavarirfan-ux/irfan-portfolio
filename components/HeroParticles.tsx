'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

const MOUSE_RADIUS = 280
const DAMPING = 0.92
const GRID_SPACING = 50

type Node = {
  anchorX: number
  anchorY: number
  x: number
  y: number
  vx: number
  vy: number
  stability: number
  springStiffness: number
  type: 'capsule' | 'dot'
  width: number
  height: number
  angle: number
  color: string
  baseAlpha: number
}

function createNode(anchorX: number, anchorY: number, stability: number, centerX: number, centerY: number, maxDist: number): Node {
  const springStiffness = 0.02 + stability * 0.03
  const type: 'capsule' | 'dot' = Math.random() > 0.6 ? 'capsule' : 'dot'
  const baseSize = stability * 2 + 1.5
  const sizeVar = Math.random() * 1.5
  const width = baseSize + sizeVar
  const height = type === 'capsule' ? Math.random() * 2 + 1.5 : width
  const isAccent = Math.random() > 0.92
  const hue = isAccent ? (Math.random() > 0.5 ? 210 : Math.random() > 0.5 ? 260 : 320) : 220
  const color = isAccent
    ? `hsla(${hue}, 50%, 60%, ${0.3 + stability * 0.3})`
    : `hsla(220, 10%, 85%, ${0.1 + stability * 0.15})`
  const baseAlpha = 0.3 + stability * 0.4
  return {
    anchorX,
    anchorY,
    x: anchorX,
    y: anchorY,
    vx: 0,
    vy: 0,
    stability,
    springStiffness,
    type,
    width,
    height,
    angle: 0,
    color,
    baseAlpha,
  }
}

function initParticles(width: number, height: number): Node[] {
  const particles: Node[] = []
  const cols = Math.floor(width / GRID_SPACING)
  const rows = Math.floor(height / GRID_SPACING)
  const centerX = width / 2
  const centerY = height / 2
  const maxDist = Math.sqrt(centerX * centerX + centerY * centerY) || 1

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * GRID_SPACING + (Math.random() * 20 - 10)
      const y = r * GRID_SPACING + (Math.random() * 20 - 10)
      const dx = x - centerX
      const dy = y - centerY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const stability = 1 - Math.min(dist / (maxDist * 0.8), 1)
      const existenceChance = stability * 0.8 + 0.2
      if (Math.random() < existenceChance) {
        particles.push(createNode(x, y, stability, centerX, centerY, maxDist))
      }
    }
  }
  return particles
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Node[]>([])
  const mouseRef = useRef<{ x: number; y: number } | null>(null)
  const rafRef = useRef<number>(0)
  const sizeRef = useRef({ w: 0, h: 0 })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const resize = () => {
      if (!container.parentElement) return
      const rect = container.getBoundingClientRect()
      const w = Math.max(1, rect.width)
      const h = Math.max(1, rect.height)
      sizeRef.current = { w, h }
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particlesRef.current = initParticles(w, h)
    }

    resize()
    const initialRaf = requestAnimationFrame(() => resize())

    const gradient = (width: number) => {
      const g = ctx.createLinearGradient(0, 0, width, 0)
      g.addColorStop(0, '#0aa2ff')
      g.addColorStop(0.18, '#5b7cff')
      g.addColorStop(0.36, '#a86bff')
      g.addColorStop(0.56, '#ff5bbd')
      g.addColorStop(0.74, '#ff6a4a')
      g.addColorStop(1, '#ffb11a')
      return g
    }

    const animate = () => {
      const { w, h } = sizeRef.current
      ctx.clearRect(0, 0, w, h)

      const mouse = mouseRef.current
      const particles = particlesRef.current

      for (const p of particles) {
        const springDx = p.anchorX - p.x
        const springDy = p.anchorY - p.y
        p.vx += springDx * p.springStiffness
        p.vy += springDy * p.springStiffness

        if (mouse) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_RADIUS) {
            const force = 1 - dist / MOUSE_RADIUS
            const smoothForce = force * force
            const angle = Math.atan2(dy, dx)
            const push = smoothForce * -2
            p.vx += Math.cos(angle) * push
            p.vy += Math.sin(angle) * push
          }
        }

        p.vx *= DAMPING
        p.vy *= DAMPING
        p.x += p.vx
        p.y += p.vy

        ctx.fillStyle = gradient(w)
        ctx.globalAlpha = p.baseAlpha
        if (p.type === 'capsule') {
          ctx.beginPath()
          if ('roundRect' in ctx && typeof (ctx as CanvasRenderingContext2D & { roundRect: (...args: number[]) => void }).roundRect === 'function') {
            ;(ctx as CanvasRenderingContext2D & { roundRect: (...args: number[]) => void }).roundRect(
              p.x - p.width / 2,
              p.y - p.height / 2,
              p.width,
              p.height,
              50
            )
          } else {
            ;(ctx as CanvasRenderingContext2D).rect(p.x - p.width / 2, p.y - p.height / 2, p.width, p.height)
          }
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.width / 2, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.globalAlpha = 1
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = { x, y }
      } else {
        mouseRef.current = null
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const ro = new ResizeObserver(() => {
      resize()
    })
    ro.observe(container)

    return () => {
      cancelAnimationFrame(initialRaf)
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      ro.disconnect()
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
