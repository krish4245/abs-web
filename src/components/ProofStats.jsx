import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, TrendingUp, AlertTriangle, ShieldCheck, Award } from 'lucide-react';
import { companyInfo } from '../data/absData';

export default function ProofStats() {
  const [activeTab, setActiveTab] = useState('abs');

  const comparison = [
    {
      metric: 'Implementation Success Rate',
      industry: 'Only 50% of enterprise CLM projects succeed on time & budget',
      abs: '100% first-time-right success rate across all enterprise clients',
      advantage: '2x Industry Average',
    },
    {
      metric: 'Platform Support & SLA',
      industry: 'Multiple siloed helpdesks; tickets bounced across vendors',
      abs: 'Single SLA-governed support model: 1 ticket, 1 owner across all platforms',
      advantage: 'Zero Helpdesk Gaps',
    },
    {
      metric: 'Contract Remediation Speed',
      industry: 'Typically takes 9–14 months with frequent data inaccuracies',
      abs: '2,000+ contracts remediated in 14 weeks with 100% validated accuracy',
      advantage: '3x Acceleration',
    },
    {
      metric: 'User Adoption & Change Mgmt',
      industry: 'Passive slide-deck training leads to <40% ongoing utilization',
      abs: 'Scenario-based Digital Adoption Platform (DAP) training achieves >90% proficiency',
      advantage: 'Full Self-Sufficiency',
    },
  ];

  return (
    <section className="proof-section" aria-label="ABS Consulting Performance Benchmarks">
      <div className="container">
        <div className="proof-header">
          <div className="proof-kicker-wrap">
            <Award size={16} className="text-cyan" />
            <span className="section-kicker">UNRIVALED ENTERPRISE BENCHMARK</span>
          </div>
          <h2 className="proof-headline">
            Where Industry Projects Stumble, <br />
            <span className="gradient-shimmer">We Deliver Guaranteed Results.</span>
          </h2>
          <p className="proof-subtitle">
            Enterprise software rollouts fail when business processes and systems remain fragmented.
            ABS Consulting turns around the most complex S2P, O2C, and CLM initiatives with mathematically proven outcomes.
          </p>
        </div>

        {/* Live Stat Cards Grid */}
        <div className="stats-cards-grid">
          {companyInfo.statsBanner.map((stat, idx) => (
            <motion.div
              key={idx}
              className={`stat-card ${stat.highlight ? 'stat-card-highlight' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="stat-card-glow" />
              <div className="stat-card-value">
                <span>{stat.value}</span>
              </div>
              <div className="stat-card-label">{stat.label}</div>
              <div className="stat-card-sub">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Industry Benchmark Comparison */}
        <div className="benchmark-comparison-box">
          <div className="comparison-top-row">
            <div className="comparison-heading">
              <h3>The ABS Difference vs. Industry Status Quo</h3>
              <p>Why Fortune 500 enterprises partner with ABS after struggling with generalist consultancies.</p>
            </div>

            <div className="comparison-toggle-pills">
              <button
                type="button"
                className={`toggle-pill ${activeTab === 'abs' ? 'active' : ''}`}
                onClick={() => setActiveTab('abs')}
              >
                <ShieldCheck size={16} />
                <span>ABS Consulting Approach</span>
              </button>
              <button
                type="button"
                className={`toggle-pill ${activeTab === 'industry' ? 'active' : ''}`}
                onClick={() => setActiveTab('industry')}
              >
                <AlertTriangle size={16} />
                <span>Industry Average (50% Failure)</span>
              </button>
            </div>
          </div>

          <div className="comparison-table-wrapper">
            <div className="comparison-table">
              {comparison.map((item, index) => (
                <div key={index} className="comparison-row">
                  <div className="col-dimension">
                    <span className="dimension-title">{item.metric}</span>
                    <span className="advantage-badge">{item.advantage}</span>
                  </div>

                  <div className={`col-content industry-col ${activeTab === 'industry' ? 'col-highlight-warn' : ''}`}>
                    <div className="col-header-mobile">Industry Average:</div>
                    <div className="col-text">
                      <XCircle size={18} className="text-rose-warn" />
                      <span>{item.industry}</span>
                    </div>
                  </div>

                  <div className={`col-content abs-col ${activeTab === 'abs' ? 'col-highlight-success' : ''}`}>
                    <div className="col-header-mobile">ABS Standard:</div>
                    <div className="col-text">
                      <CheckCircle2 size={18} className="text-emerald" />
                      <strong>{item.abs}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
