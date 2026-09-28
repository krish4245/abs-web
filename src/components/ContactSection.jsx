import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, Copy, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/absData';

export default function ContactSection({ prefilledContext, formRef }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    spend: '$1B – $5B',
    platform: 'Icertis Contract Intelligence (ICI)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (prefilledContext) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n[Interest: ${prefilledContext}]` : `Inquiry details: ${prefilledContext}`,
      }));
    }
  }, [prefilledContext]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
      });
    } catch (err) {}
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(companyInfo.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="contact-section" ref={formRef}>
      <div className="contact-ambient-glow" />
      <div className="container">
        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-info-col">
            <span className="section-kicker">GET IN TOUCH</span>
            <h2 className="section-title contact-headline">
              Contact Us
            </h2>
            <p className="contact-lead">
              ABS Consulting Corp. is committed to protecting your information. We will use it in line with data privacy laws, our internal policies, and our privacy policy. As a global company, your information may be stored and processed in countries outside your own, but we will always handle it with the same care and respect for your privacy.
            </p>

            <div className="contact-cards-stack">
              <div className="contact-detail-card">
                <div className="detail-icon-circle">
                  <Mail size={18} className="text-cyan" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Direct Enterprise Inquiries</span>
                  <a href={`mailto:${companyInfo.contacts.email}`} className="detail-value-link">
                    {companyInfo.contacts.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="contact-detail-card">
                <div className="detail-icon-circle">
                  <MapPin size={18} className="text-cyan" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Corporate Headquarters</span>
                  <span className="detail-value">{companyInfo.contacts.address}</span>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="detail-icon-circle">
                  <ShieldCheck size={18} className="text-cyan" />
                </div>
                <div className="detail-text">
                  <span className="detail-label">Confidentiality & Security</span>
                  <span className="detail-value">Strict NDA & HIPAA/BAA data protection guaranteed.</span>
                </div>
              </div>
            </div>

            <div className="privacy-commitment-box">
              <p>
                <strong>Data Privacy Commitment:</strong> ABS Consulting Corp. is committed to protecting your information. We use it strictly in line with data privacy laws, internal governance, and our privacy policy.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              {submitted ? (
                <motion.div
                  className="submitted-success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={48} className="text-emerald" />
                  </div>
                  <h3>Strategy Consultation Requested</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. An ABS Consulting Enterprise Solution Architect will review your portfolio details and connect within one business day.
                  </p>
                  <div className="submitted-details-summary">
                    <div><span>Company:</span> <strong>{formData.company || 'Enterprise'}</strong></div>
                    <div><span>Spend Tier:</span> <strong>{formData.spend}</strong></div>
                    <div><span>Platform:</span> <strong>{formData.platform}</strong></div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setSubmitted(false)}
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="enterprise-form">
                  <div className="form-head">
                    <h3>Request Strategic Consultation</h3>
                    <p>Connect directly with our founding partners.</p>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email">Work Email *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="s.jenkins@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="company">Company / Health System *</label>
                      <input
                        id="company"
                        type="text"
                        required
                        placeholder="e.g. Anthem Healthcare / Genentech"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="spend">Annual Indirect Spend</label>
                      <select
                        id="spend"
                        value={formData.spend}
                        onChange={(e) => setFormData({ ...formData, spend: e.target.value })}
                      >
                        <option value="$50M – $250M">$50M – $250M</option>
                        <option value="$250M – $1B">$250M – $1B</option>
                        <option value="$1B – $5B">$1B – $5B</option>
                        <option value="$5B+ (Fortune 50)">$5B+ (Fortune 50 Scale)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="platform">Primary Platform Focus</label>
                    <select
                      id="platform"
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    >
                      <option value="Icertis Contract Intelligence (ICI)">Icertis Contract Intelligence (ICI)</option>
                      <option value="SAP Ariba">SAP Ariba</option>
                      <option value="ServiceNow Unified SLA">ServiceNow Unified SLA Helpdesk</option>
                      <option value="Salesforce / CPQ">Salesforce / CPQ</option>
                      <option value="Multi-Platform Consolidated Model">Multi-Platform Consolidated Model (All Three)</option>
                      <option value="Healthcare CDM Package">Healthcare CDM Package</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Transformation Priorities & Context</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Share your current challenges, contract volume, remediation timeline, or migration requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit-full">
                    <span>Submit Consultation Request</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
