import { useState } from 'react';
import { motion } from 'framer-motion';
import { cdmHealthcare } from '../data/absData';
import { Activity, Shield, Stethoscope, Network, LifeBuoy, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap = {
  Shield: Shield,
  Stethoscope: Stethoscope,
  Network: Network,
  LifeBuoy: LifeBuoy,
};

export default function CDMHealthcare({ onOpenContact }) {
  const [selectedEntity, setSelectedEntity] = useState(0);

  return (
    <section id="cdm-healthcare" className="cdm-section">
      <div className="cdm-glow" />
      <div className="container">
        <div className="cdm-header-grid">
          <div>
            <span className="section-kicker">Common Data Model (CDM) based Packaged Industry Solutions</span>
            <h2 className="cdm-headline" style={{ marginTop: '8px' }}>
              Integrated Health Systems <span className="cdm-tag" style={{ marginLeft: '12px', verticalAlign: 'middle' }}>Coming Soon</span>
            </h2>
          </div>
          <div className="cdm-header-desc-box">
            <p>{cdmHealthcare.description}</p>
            <div className="cdm-tag-strip">
              <span className="cdm-tag">Standardized Healthcare Schema</span>
              <span className="cdm-tag">BAA & HIPAA Compliant</span>
              <span className="cdm-tag">Multi-Platform Ready</span>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="cdm-features-grid">
          {cdmHealthcare.features.map((feat, idx) => {
            const Icon = iconMap[feat.icon] || Shield;
            return (
              <motion.div
                key={idx}
                className="cdm-feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                <div className="feature-icon-wrapper">
                  <Icon size={22} className="text-emerald" />
                </div>
                <h4 className="feature-title">{feat.title}</h4>
                <p className="feature-desc">{feat.desc}</p>
                <div className="feature-status-check">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>Pre-Configured In CDM</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Health Sector Applicability Bar */}
        <div className="cdm-entities-strip">
          <div className="strip-label">
            <strong>Applicable Healthcare Entities:</strong>
          </div>
          <div className="strip-pills">
            {cdmHealthcare.entities.map((entity, i) => (
              <button
                key={i}
                type="button"
                className={`entity-pill ${selectedEntity === i ? 'active' : ''}`}
                onClick={() => setSelectedEntity(i)}
              >
                <span className="dot" />
                <span>{entity}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-outline-emerald"
            onClick={() => onOpenContact && onOpenContact(`Healthcare CDM: ${cdmHealthcare.entities[selectedEntity]}`)}
          >
            <span>Request Healthcare CDM Blueprint</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
