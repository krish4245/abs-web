import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { proprietaryFrameworks } from '../data/absData';
import { Sparkles, ArrowRight, ShieldCheck, Check, Workflow, GitBranch, ShieldAlert } from 'lucide-react';

export default function Frameworks({ onOpenContact }) {
  const [activeFwIndex, setActiveFwIndex] = useState(0);
  const currentFw = proprietaryFrameworks[activeFwIndex];

  return (
    <section id="frameworks" className="frameworks-section">
      <div className="frameworks-ambient-glow" />
      <div className="container">
        <div className="frameworks-header">
          <span className="section-kicker">HOW IT WORKS</span>
          <h2 className="frameworks-title">
            How it works
          </h2>
          <p className="frameworks-subtitle">
            We integrate three frameworks: <strong>CCLV™</strong> to solve challenges and unlock value, <strong>ACT™</strong> to avoid implementation pitfalls, and <strong>AIR™</strong> to drive scalable designs with immediate impact. This ensures efficient, adaptable solutions with rapid, measurable results for sustained success.
          </p>
        </div>

        {/* Framework Selector Tabs */}
        <div className="framework-tabs-bar" role="tablist">
          {proprietaryFrameworks.map((fw, idx) => {
            const isSelected = activeFwIndex === idx;
            return (
              <button
                key={fw.id}
                role="tab"
                aria-selected={isSelected}
                className={`framework-tab-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveFwIndex(idx)}
              >
                <div className="tab-acronym">{fw.acronym}</div>
                <div className="tab-fullname">{fw.name}</div>
                {isSelected && (
                  <motion.div
                    layoutId="activeFrameworkPill"
                    className="active-tab-indicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Framework Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFw.id}
            className="framework-display-card"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3 }}
          >
            <div className="fw-card-top-row">
              <div className="fw-title-block">
                <span className="fw-eyebrow">Framework 0{activeFwIndex + 1} of 03</span>
                <h3 className="fw-card-headline">{currentFw.tagline}</h3>
                <p className="fw-card-summary">{currentFw.summary}</p>
              </div>

              <div className="fw-benefit-callout">
                <div className="callout-icon">
                  <ShieldCheck size={20} className="text-cyan" />
                </div>
                <div>
                  <span className="callout-label">Strategic Advantage</span>
                  <p className="callout-text">{currentFw.benefit}</p>
                </div>
              </div>
            </div>

            {/* 4-Step Process Visualizer */}
            <div className="fw-steps-grid">
              {currentFw.steps.map((st, i) => (
                <div key={st.step} className="fw-step-item">
                  <div className="step-connector-line" />
                  <div className="step-header">
                    <span className="step-badge">{st.step}</span>
                    <h5 className="step-title">{st.title}</h5>
                  </div>
                  <p className="step-description">{st.desc}</p>
                  <div className="step-footer-dot">
                    <span className="dot" />
                    <span className="step-phase">Phase 0{i + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="fw-card-footer">
              <div className="footer-info">
                <span>Deployed across Fortune 20 healthcare, life sciences, and high-tech enterprises.</span>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenContact && onOpenContact(`Framework: ${currentFw.acronym}`)}
              >
                <span>Adopt {currentFw.acronym} for Your Enterprise</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
