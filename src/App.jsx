import Hero from './components/Hero'
import { Nav, Proof, Services, Frameworks, Story, Insights, CTA, Footer } from './components/Sections'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const page = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          y: 28,
          autoAlpha: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        })
      })
    }, page)

    return () => context.revert()
  }, [])

  return <main id="top" ref={page}><Nav /><Hero /><Proof /><Services /><Frameworks /><Story /><Insights /><CTA /><Footer /></main>
}
