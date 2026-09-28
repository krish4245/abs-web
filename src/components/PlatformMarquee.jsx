import { motion } from 'framer-motion';
import { partnerPlatforms } from '../data/absData';
import { Cpu, Check } from 'lucide-react';

export default function PlatformMarquee() {
  const extendedPlatforms = [...partnerPlatforms, ...partnerPlatforms, ...partnerPlatforms];

  return (
    <section className="marquee-section" aria-label="Enterprise Platforms Unified by ABS">
      <div className="marquee-header-container">
        <span className="marquee-kicker">ENTERPRISE PLATFORM ECOSYSTEM</span>
        <h3 className="marquee-title">Deep Specialization Across Market-Leading SaaS Platforms</h3>
        <p className="marquee-desc">
          We don't just configure software—we engineer unified, bi-directional data flow across your entire enterprise architecture.
        </p>
      </div>

      <div className="marquee-outer">
        <div className="marquee-track">
          {extendedPlatforms.map((platform, idx) => (
            <div key={idx} className="marquee-item-card">
              <div className="platform-card-header">
                <span className="platform-category">{platform.category}</span>
                <span className="platform-badge">{platform.badge}</span>
              </div>
              <div className="platform-name">{platform.name}</div>
              <div className="platform-footer-check">
                <Check size={14} className="text-cyan" />
                <span>Certified Architecture & Integration</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
