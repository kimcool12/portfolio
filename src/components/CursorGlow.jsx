import { useEffect, useRef } from 'react'

// A soft glow, ring and dot that follow the mouse. Skipped on touch screens
// and when the visitor prefers reduced motion.
export default function CursorGlow() {
  const glow = useRef(null)
  const ring = useRef(null)
  const dot = useRef(null)

  useEffect(() => {
    const skip =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (skip) return

    let x = window.innerWidth / 2, y = window.innerHeight / 2
    let gx = x, gy = y, rx = x, ry = y, raf

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      dot.current.style.transform = `translate(${x}px, ${y}px)`
      const hit = e.target.closest?.('a, button, input, textarea, [data-cursor]')
      ring.current.dataset.hover = hit ? hit.dataset.cursor || 'link' : ''
    }
    const loop = () => {
      gx += (x - gx) * 0.12; gy += (y - gy) * 0.12
      rx += (x - rx) * 0.25; ry += (y - ry) * 0.25
      glow.current.style.transform = `translate(${gx}px, ${gy}px)`
      ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }

    document.documentElement.classList.add('has-cursor')
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="cursor" aria-hidden="true">
      <span ref={glow} className="cursor__glow" />
      <span ref={ring} className="cursor__ring"><i /></span>
      <span ref={dot} className="cursor__dot" />
    </div>
  )
}
