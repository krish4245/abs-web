import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofStats from './components/ProofStats';
import PlatformMarquee from './components/PlatformMarquee';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Frameworks from './components/Frameworks';
import CDMHealthcare from './components/CDMHealthcare';
import CaseStudies from './components/CaseStudies';
import Leadership from './components/Leadership';
import Insights from './components/Insights';
import CompanyCulture from './components/CompanyCulture';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [contactContext, setContactContext] = useState('');
  const contactFormRef = useRef(null);

  const handleOpenContact = (context = '') => {
    setContactContext(context);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // If there is an input, focus on it after scroll
      setTimeout(() => {
        const input = document.getElementById('name');
        if (input) input.focus();
      }, 600);
    }
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // General subtle reveal animations
      const revealItems = document.querySelectorAll('[data-reveal]');
      revealItems.forEach((el) => {
        gsap.from(el, {
          y: 28,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="abs-app-root">
      <Navbar
        onOpenContact={handleOpenContact}
      />

      <main>
        <Hero
          onOpenContact={handleOpenContact}
        />

        <PlatformMarquee />

        <Services onOpenContact={handleOpenContact} />

        <WhyChooseUs onOpenContact={handleOpenContact} />

        <Frameworks onOpenContact={handleOpenContact} />

        <CDMHealthcare onOpenContact={handleOpenContact} />

        <CaseStudies onOpenContact={handleOpenContact} />

        <Insights />

        <Leadership />

        <CompanyCulture onOpenContact={handleOpenContact} />

        <ContactSection
          prefilledContext={contactContext}
          formRef={contactFormRef}
        />
      </main>

      <Footer onOpenContact={handleOpenContact} />
    </div>
  );
}
