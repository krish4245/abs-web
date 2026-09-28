import { useState } from 'react';
import { motion } from 'framer-motion';
import { caseStudiesData } from '../data/absData';
import { Briefcase, ArrowUpRight, CheckCircle2, ChevronRight, BarChart3, ShieldCheck } from 'lucide-react';
import { CaseStudyModal } from './Modals';

export default function CaseStudies({ onOpenContact }) {
  const [selectedStudy, setSelectedStudy] = useState(null);

  return (
    <section id="case-studies" className="case-studies-section">
      <div className="container">
        <div className="case-studies-header">
          <div className="header-left">
            <span className="section-kicker">SUCCESS STORIES</span>
            <h2 className="section-title">
              Success Stories and Experiences
            </h2>
          </div>
          <p className="header-right-desc">
            From Fortune 20 healthcare giants to high-growth biotechnology leaders, explore how ABS Consulting unifies fragmented systems and unlocks measurable financial value.
          </p>
        </div>

        {/* Case Studies 3-Column Grid */}
        <div className="case-cards-grid">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={study.id}
              className="case-study-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <div className="case-card-ambient-glow" />
              
              <div className="case-card-top">
                <span className="case-industry-tag">{study.industry}</span>
                <span className="case-number">0{index + 1} / 03</span>
              </div>

              <h3 className="case-card-title">{study.headline}</h3>
              <p className="case-card-context">{study.context}</p>

              {/* Metrics Grid inside Card */}
              <div className="case-metrics-mini-grid">
                {study.metrics.slice(0, 4).map((m, mIdx) => (
                  <div key={mIdx} className="mini-metric-item">
                    <strong className="mini-val">{m.value}</strong>
                    <span className="mini-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="case-tech-strip">
                {study.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-badge">{tech}</span>
                ))}
              </div>

              {/* Action Button */}
              <div className="case-card-action">
                <button
                  type="button"
                  className="btn-case-expand"
                  onClick={() => setSelectedStudy(study)}
                >
                  <span>Read Full Executive Brief</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        study={selectedStudy}
        isOpen={!!selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onOpenContact={() => {
          setSelectedStudy(null);
          if (onOpenContact) onOpenContact(`Case Study: ${selectedStudy?.headline}`);
        }}
      />
    </section>
  );
}
