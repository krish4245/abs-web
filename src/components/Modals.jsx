import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export function ModalDrawer({ isOpen, onClose, title, subtitle, kicker, children }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
        <motion.div
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="modal-header">
            <div>
              {kicker && <span className="modal-kicker">{kicker}</span>}
              <h3 className="modal-title">{title}</h3>
              {subtitle && <p className="modal-subtitle">{subtitle}</p>}
            </div>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
              <X size={20} />
            </button>
          </div>
          <div className="modal-body custom-scrollbar">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export function BioModal({ leader, isOpen, onClose }) {
  if (!leader) return null;

  return (
    <ModalDrawer
      isOpen={isOpen}
      onClose={onClose}
      kicker="Leadership Profile"
      title={`${leader.name} — ${leader.role}`}
      subtitle={leader.experience}
    >
      <div className="bio-modal-content">
        <div className="bio-modal-avatar-wrap">
          <img src={leader.avatar} alt={leader.name} className="bio-modal-avatar" />
          <div className="bio-modal-badges">
            <span className="bio-badge">{leader.role}</span>
            <span className="bio-badge highlight">{leader.experience}</span>
          </div>
        </div>

        <div className="bio-modal-text">
          <h4>Executive Background</h4>
          <div className="bio-paragraphs">
            {leader.fullBio.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="bio-highlights-box">
            <h5>Key Career Milestones & Leadership Credentials</h5>
            <ul>
              {leader.highlights.map((h, i) => (
                <li key={i}>
                  <CheckCircle size={16} className="text-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ModalDrawer>
  );
}

export function CaseStudyModal({ study, isOpen, onClose, onOpenContact }) {
  if (!study) return null;

  return (
    <ModalDrawer
      isOpen={isOpen}
      onClose={onClose}
      kicker={`Case Study • ${study.industry}`}
      title={study.headline}
      subtitle={study.context}
    >
      <div className="case-modal-content">
        <div className="case-modal-metrics-bar">
          {study.metrics.map((m, i) => (
            <div key={i} className="case-metric-card">
              <strong className="metric-val">{m.value}</strong>
              <span className="metric-lbl">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="case-modal-grid">
          <div className="case-section-box challenge-box">
            <h4>The Enterprise Challenge</h4>
            <p>{study.challenge}</p>
          </div>

          <div className="case-section-box solution-box">
            <h4>The ABS Consulting Solution</h4>
            <p>{study.solution}</p>
          </div>
        </div>

        <div className="case-outcomes-block">
          <h4>Measurable Outcomes & Business Impact</h4>
          <div className="outcomes-list">
            {study.outcomes.map((outcome, idx) => (
              <div key={idx} className="outcome-item">
                <CheckCircle size={18} className="text-emerald" />
                <p>{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="case-tech-block">
          <h4>Enterprise Tech Stack & Integration Touchpoints</h4>
          <div className="tech-tags-row">
            {study.techStack.map((tech, idx) => (
              <span key={idx} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>

        <div className="case-modal-footer-cta">
          <div>
            <strong>Facing similar contracting & multi-platform challenges?</strong>
            <p>Our solution architects can tailor this exact transformation model for your enterprise.</p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              onClose();
              if (onOpenContact) onOpenContact();
            }}
          >
            <span>Discuss This Use Case</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </ModalDrawer>
  );
}

export function ArticleModal({ article, isOpen, onClose }) {
  if (!article) return null;

  return (
    <ModalDrawer
      isOpen={isOpen}
      onClose={onClose}
      kicker={`Thought Leadership • ${article.tag}`}
      title={article.title}
      subtitle={`${article.date} • ${article.readTime}`}
    >
      <div className="article-modal-content">
        <div className="article-tag-badge">{article.tag}</div>
        <div className="article-paragraphs">
          {article.fullText.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="article-modal-cta">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <span>Read & Discuss on LinkedIn</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </ModalDrawer>
  );
}
