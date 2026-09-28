import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Magnetic from './Magnetic'

export default function Hero() {
  const root = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-heading .line span', { yPercent: 110, duration: 0.9, stagger: 0.1 })
        .from('.hero-copy', { autoAlpha: 0, y: 18, duration: 0.65, stagger: 0.12 }, '-=0.4')
        .from('.hero-visual', { autoAlpha: 0, scale: 0.97, duration: 0.9 }, '-=0.75')
        .from('.hero-stamp', { autoAlpha: 0, y: 14, duration: 0.55 }, '-=0.25')
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={root}>
      <div className="wrap">
        <div className="hero-content">
          <p className="eyebrow hero-copy"><span className="eyebrow-dot" /> Enterprise transformation, made practical</p>
          <h1 className="hero-heading">
            <span className="line"><span>Make every</span></span>
            <span className="line"><span>contract work</span></span>
            <span className="line"><span><em>harder.</em></span></span>
          </h1>
          <p className="hero-copy">We bring source-to-pay, order-to-cash, and contract lifecycle management together, turning complex transformation into measurable business value.</p>
          <div className="ctas hero-copy">
            <Magnetic href="#contact" className="btn">Talk to our team <span aria-hidden="true">↗</span></Magnetic>
            <a className="text-link" href="#expertise">Explore our expertise <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-meta hero-copy"><span>Strategy <i /> Design <i /> Delivery</span><span>Built for what comes next</span></div>
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1300&q=85" alt="Colleagues working together around a table" />
          <div className="hero-stamp"><span className="stamp-mark">ABS<span>.</span></span><span>Clarity across<br />the entire lifecycle</span><span className="stamp-arrow" aria-hidden="true">↗</span></div>
          <div className="visual-caption"><span>One connected view</span><span>Source to outcome</span></div>
        </div>
      </div>
    </section>
  )
}
