import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/absData';
import { Compass, Layers, Cpu, GraduationCap, ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';

const iconMap = {
  Compass: Compass,
  Layers: Layers,
  Cpu: Cpu,
  GraduationCap: GraduationCap,
};

export default function Services({ onOpenContact }) {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="expertise" className="services-section">
      <div className="container">
        <div className="services-top-bar">
          <div>
            <span className="section-kicker">SERVICES</span>
            <h2 className="section-title">
              Services to drive <br />
              <span className="gradient-shimmer">your success</span>
            </h2>
          </div>
          <p className="services-header-intro">
            We are laser-focused on unified enterprise-wide source-to-pay and order-to-cash processes,
            with deep domain expertise in SaaS products and the CLM space.
          </p>
        </div>

        {/* Desktop Split View: Tabs / Cards */}
        <div className="services-grid-wrapper">
          {/* Left Column: Interactive Service Selectors */}
          <div className="services-nav-col">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.icon] || Compass;
              const isActive = activeService === index;

              return (
                <div
                  key={service.id}
                  className={`service-nav-card ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveService(index)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveService(index)}
                >
                  <div className="card-left-number">{service.number}</div>
                  <div className="card-center-info">
                    <div className="card-title-row">
                      <Icon size={18} className="service-card-icon" />
                      <h4>{service.title}</h4>
                    </div>
                    <p className="card-preview-text">{service.shortDesc}</p>
                  </div>
                  <div className="card-right-indicator">
                    <ArrowUpRight size={18} className="indicator-arrow" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Animated Breakdown */}
          <div className="services-detail-col">
            <AnimatePresence mode="wait">
              {(() => {
                const s = servicesData[activeService];
                const Icon = iconMap[s.icon] || Compass;

                return (
                  <motion.div
                    key={s.id}
                    className="service-detail-card"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="detail-card-glow" />
                    
                    <div className="detail-top-badge-row">
                      <div className="detail-badge">
                        <Icon size={16} />
                        <span>Pillar {s.number}</span>
                      </div>
                      <div className="metric-callout-pill">
                        <strong>{s.metric}</strong>
                        <span>— {s.metricLabel}</span>
                      </div>
                    </div>

                    <h3 className="detail-card-title">{s.title}</h3>
                    <p className="detail-card-full-desc">{s.fullDesc}</p>

                    <div className="deliverables-container">
                      <h5 className="deliverables-title">Standard Scope & High-Impact Deliverables:</h5>
                      <div className="deliverables-list">
                        {s.deliverables.map((item, idx) => (
                          <div key={idx} className="deliverable-item">
                            <CheckCircle2 size={18} className="text-cyan deliverable-icon" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="detail-action-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => onOpenContact && onOpenContact(s.title)}
                      >
                        <span>Engage for {s.title}</span>
                        <ArrowUpRight size={16} />
                      </button>
                      <a href="#case-studies" className="text-link-subtle">
                        <span>View verified client case studies</span>
                        <span>↓</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
