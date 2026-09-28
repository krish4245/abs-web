import { useRef, useEffect } from 'react'
import gsap from 'gsap'

// GSAP magnetic wrapper: element leans toward the cursor, springs back on leave.
export default function Magnetic({ children, strength = 0.35, className = 'btn', href = '#', variant = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'elastic.out(1,0.4)' })
    const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'elastic.out(1,0.4)' })
    const move = (e) => {
      const r = el.getBoundingClientRect()
      x((e.clientX - (r.left + r.width / 2)) * strength)
      y((e.clientY - (r.top + r.height / 2)) * strength)
    }
    const leave = () => { x(0); y(0) }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave) }
  }, [strength])
  return <a ref={ref} href={href} className={`${className} ${variant}`}>{children}</a>
}
