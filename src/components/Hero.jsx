import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ShieldCheck, Zap, Activity, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/absData';

export default function Hero({ onOpenContact }) {
  const root = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge-pill', {
        autoAlpha: 0,
        y: -16,
        duration: 0.6,
      })
      .from('.hero-main-title', {
        autoAlpha: 0,
        y: 24,
        duration: 0.8,
      }, '-=0.3')
      .from('.hero-sub-text', {
        autoAlpha: 0,
        y: 18,
        duration: 0.65,
      }, '-=0.4')
      .from('.hero-cta-group', {
        autoAlpha: 0,
        y: 16,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-og-illustration-card', {
        autoAlpha: 0,
        scale: 0.95,
        duration: 0.85,
      }, '-=0.6')
      .from('.hero-stats-banner-wrap', {
        autoAlpha: 0,
        y: 20,
        duration: 0.65,
      }, '-=0.3');
    }, root);

    return () => ctx.revert();
  }, []);

  const ogStats = [
    { value: '100%', title: 'Success rate', subtitle: 'vs 50% industry Benchmark' },
    { value: '5x', title: 'Return on', subtitle: 'investment' },
    { value: '100%', title: 'On time', subtitle: 'implementation' },
    { value: '100%', title: 'Emphasis on', subtitle: 'scalable design' },
  ];

  return (
    <section className="hero-section" ref={root} id="top">
      {/* Liquid glass background aura orbs */}
      <div className="hero-liquid-orb hero-orb-1" />
      <div className="hero-liquid-orb hero-orb-2" />
      <div className="hero-liquid-wave" />

      <div className="container hero-container">
        <div className="hero-copy-col">
          <div className="hero-badge-pill">
            <span className="live-dot" />
            <span className="badge-text">ABS Consulting Corp.</span>
          </div>

          <h1 className="hero-main-title">
            Enablers to transform and <br />
            <span className="gradient-shimmer-light">elevate your success</span>
          </h1>

          <p className="hero-sub-text">
            We are laser focused on Unified Enterprise-wide source-to-pay and order-to-cash processes, with deep expertise in SaaS products and the CLM space.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-hero-primary"
              onClick={() => onOpenContact && onOpenContact()}
            >
              <span>Get Started</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Official Hero Illustration from absccorp.com */}
        <div className="hero-visual-col">
          <div className="hero-og-illustration-card">
            <img
              src="https://absccorp.com/wp-content/uploads/2024/10/Group-2085662957.webp"
              alt="ABS Consulting Corp - Enablers to transform and elevate your success"
              className="hero-og-image"
            />
          </div>
        </div>
      </div>

      {/* The 4 OG Hero Stats Bar */}
      <div className="container hero-stats-banner-wrap">
        <div className="og-stats-row">
          {ogStats.map((st, i) => (
            <div key={i} className="og-stat-item">
              <div className="og-stat-number">{st.value}</div>
              <div className="og-stat-labels">
                <span className="og-stat-title">{st.title}</span>
                <span className="og-stat-sub">{st.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
