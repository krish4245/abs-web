import { useState } from 'react';
import { motion } from 'framer-motion';
import { leadershipTeam, advisoryBoard } from '../data/absData';
import { Users, Award, ExternalLink, ChevronRight, GraduationCap } from 'lucide-react';
import { BioModal } from './Modals';

export default function Leadership() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <section id="leadership" className="leadership-section">
      <div className="container">
        {/* Executive Leadership */}
        <div className="leadership-header">
          <span className="section-kicker">ABOUT US</span>
          <h2 className="section-title">
            When it comes to CLM, no one understands it better than us
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '820px', margin: '14px auto 0' }}>
            We guide clients through complex challenges, help them adhere to best practices with a focus on successful, first-time-right, and on-time implementations.
          </p>
          <div style={{ marginTop: '28px', padding: '14px 20px', background: 'rgba(6, 0, 151, 0.05)', borderRadius: 'var(--radius-md)', display: 'inline-block' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark-secondary)' }}>
              <strong>Executive Leadership Team:</strong> The ABS leadership team, including Ram, Hemant, DJ and Darshan brings a wealth of experience in the CLM category. Their expertise spans Sales, Presales, Product, and Delivery Excellence, all of which are strongly supported by a customer-centric approach.
            </p>
          </div>
        </div>

        {/* 4 Co-Founders Grid */}
        <div className="leaders-grid">
          {leadershipTeam.map((leader, idx) => (
            <motion.div
              key={leader.name}
              className="leader-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <div className="leader-image-wrap">
                <img src={leader.avatar} alt={leader.name} className="leader-image" />
                <div className="leader-role-tag">{leader.role}</div>
              </div>

              <div className="leader-info">
                <h3 className="leader-name">{leader.name}</h3>
                <span className="leader-exp">{leader.experience}</span>
                <p className="leader-short-bio">{leader.shortBio}</p>

                <div className="leader-credentials-list">
                  {leader.highlights.slice(0, 2).map((item, i) => (
                    <div key={i} className="cred-chip">
                      <span className="dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn-read-bio"
                  onClick={() => setSelectedLeader(leader)}
                >
                  <span>Read Executive Profile</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Distinguished Advisory Board */}
        <div className="advisory-board-wrapper">
          <div className="advisory-header">
            <div className="kicker-row">
              <Award size={16} className="text-cyan" />
              <span className="section-kicker">STRATEGIC GOVERNANCE</span>
            </div>
            <h3 className="advisory-title">Distinguished Advisory Board</h3>
            <p className="advisory-desc">
              Industry titans in cloud enterprise marketing, academic innovation, corporate finance, and healthcare procurement guiding our strategic vision.
            </p>
          </div>

          <div className="advisory-grid">
            {advisoryBoard.map((advisor, idx) => (
              <motion.div
                key={advisor.name}
                className="advisor-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <div className="advisor-top">
                  <div>
                    <h4 className="advisor-name">{advisor.name}</h4>
                    <span className="advisor-role">{advisor.role}</span>
                    <span className="advisor-title">{advisor.title}</span>
                  </div>
                </div>

                <p className="advisor-bio">{advisor.bio}</p>

                <div className="advisor-chips">
                  {advisor.credentials.map((c, i) => (
                    <span key={i} className="advisor-cred-badge">{c}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bio Modal Drawer */}
      <BioModal
        leader={selectedLeader}
        isOpen={!!selectedLeader}
        onClose={() => setSelectedLeader(null)}
      />
    </section>
  );
}
