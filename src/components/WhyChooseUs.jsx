import { motion } from 'framer-motion';
import { Target, Layers, Award, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs({ onOpenContact }) {
  const pillars = [
    {
      icon: Target,
      title: 'Customized solution design with industry best practices to deliver exceptional value.',
      desc: 'At ABS Consulting Corp, we recognize that each client has unique needs. Our approach combines customized solution design with industry best practices to deliver exceptional value. By tailoring our services to fit the specific requirements of each engagement, we ensure that promised outcomes are not only met but exceeded.',
      highlight: 'Bespoke Enterprise Design',
    },
    {
      icon: Layers,
      title: 'Our team is laser-focused on unifying enterprise-wide source-to-pay and order-to-cash processes.',
      desc: 'This specialized focus allows us to bring unparalleled expertise to drive your organization’s success. Our deep understanding of these processes ensures that we can streamline operations, improve efficiencies, and enhance overall performance.',
      highlight: 'S2P & O2C Specialization',
    },
    {
      icon: Award,
      title: 'A strong track record of successfully turning around complex projects and delivering results where others have failed.',
      desc: 'Our proven methodologies and experienced team enable us to tackle the most challenging projects, ensuring that our clients realize the full potential of their SaaS and CLM investments with a 100% on-time record.',
      highlight: 'Proven Turnaround Record',
    },
  ];

  return (
    <section className="why-choose-section" id="why-choose-us">
      <div className="container">
        <div className="why-choose-header">
          <span className="section-kicker">WHY CHOOSE US</span>
          <h2 className="section-title">
            Why choose us
          </h2>
        </div>

        <div className="why-pillars-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                className="why-pillar-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
              >
                <div className="pillar-icon-box">
                  <Icon size={24} />
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(6, 0, 151, 0.08)' }}>
                  <span className="advantage-badge" style={{ color: 'var(--abs-blue-og)' }}>
                    ✓ {pillar.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
