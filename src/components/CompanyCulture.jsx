import { motion } from 'framer-motion';
import { companyInfo, careersData } from '../data/absData';
import { Target, ShieldCheck, HeartHandshake, Sparkles, Briefcase, Mail, ArrowUpRight } from 'lucide-react';

const valueIcons = {
  Target: Target,
  ShieldCheck: ShieldCheck,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles,
};

export default function CompanyCulture({ onOpenContact }) {
  return (
    <section className="culture-section" id="culture">
      <div className="container">
        {/* Core Values */}
        <div className="culture-header">
          <span className="section-kicker">OUR FOUNDATIONAL PILLARS</span>
          <h2 className="section-title">
            Values That Guide Every <br />
            <span className="gradient-shimmer">Engagement and Decision.</span>
          </h2>
          <p className="culture-subtitle">{companyInfo.culture}</p>
        </div>

        <div className="values-grid">
          {companyInfo.values.map((val, idx) => {
            const Icon = valueIcons[val.icon] || Target;
            return (
              <motion.div
                key={val.title}
                className="value-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <div className="value-icon-box">
                  <Icon size={22} className="text-cyan" />
                </div>
                <h4 className="value-title">{val.title}</h4>
                <p className="value-desc">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Careers Card */}
        <div className="careers-highlight-card" id="careers">
          <div className="careers-glow" />
          <div className="careers-top">
            <div>
              <span className="careers-kicker">TALENT & CULTURE</span>
              <h3 className="careers-headline">{careersData.headline}</h3>
              <p className="careers-intro">{careersData.intro}</p>
            </div>
            <a
              href={`mailto:${companyInfo.contacts.careersEmail}?subject=Application for ABS Consulting Corp.`}
              className="btn btn-primary"
            >
              <Mail size={16} />
              <span>Apply via careers@absccorp.com</span>
            </a>
          </div>

          <div className="careers-reasons-grid">
            {careersData.reasons.map((r, i) => (
              <div key={i} className="reason-item">
                <span className="reason-num">0{i + 1}</span>
                <h5>{r.title}</h5>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="openings-box">
            <h5 className="openings-title">Active Opportunities:</h5>
            <div className="openings-list">
              {careersData.openings.map((op, i) => (
                <div key={i} className="opening-pill">
                  <span className="opening-role">{op.title}</span>
                  <span className="opening-loc">{op.location}</span>
                  <span className="opening-badge">{op.req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
