import { ArrowUp, Mail, MapPin, Shield } from 'lucide-react';
import { companyInfo } from '../data/absData';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Footer Row */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <img
                src="https://absccorp.com/wp-content/uploads/2024/10/logo.svg"
                alt="ABS Consulting Corp"
                style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(1)' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="brand-text">
                <span className="brand-name" style={{ color: '#fff' }}>ABS</span>
                <span className="brand-sub" style={{ color: '#93c5fd' }}>CONSULTING CORP.</span>
              </div>
            </div>
            <p className="footer-tagline">
              {companyInfo.tagline}
            </p>
            <p className="footer-mission-sub">
              {companyInfo.mission}
            </p>

            <div className="footer-contact-items">
              <a href={`mailto:${companyInfo.contacts.email}`} className="footer-contact-link">
                <Mail size={15} className="text-cyan" />
                <span>{companyInfo.contacts.email}</span>
              </a>
              <div className="footer-address-item">
                <MapPin size={15} className="text-cyan" />
                <span>{companyInfo.contacts.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <h5 className="footer-heading">Services & Architecture</h5>
            <ul className="footer-links-list">
              <li><a href="#expertise">Readiness Assessment</a></li>
              <li><a href="#expertise">Solution Design</a></li>
              <li><a href="#expertise">Platform Configuration</a></li>
              <li><a href="#expertise">Training Accelerators</a></li>
              <li><a href="#cdm-healthcare">Healthcare Common Data Model</a></li>
            </ul>
          </div>

          {/* Frameworks & Cases */}
          <div className="footer-nav-col">
            <h5 className="footer-heading">Frameworks & Proof</h5>
            <ul className="footer-links-list">
              <li><a href="#frameworks">CCLV™ (Contract Value)</a></li>
              <li><a href="#frameworks">ACT™ (Agile Delivery)</a></li>
              <li><a href="#frameworks">AIR™ (Integration Resilience)</a></li>
              <li><a href="#case-studies">Fortune 20 Healthcare Brief</a></li>
              <li><a href="#case-studies">Biotech Post-Merger CLM</a></li>
            </ul>
          </div>

          {/* Company & Connect */}
          <div className="footer-nav-col">
            <h5 className="footer-heading">Company & Leadership</h5>
            <ul className="footer-links-list">
              <li><a href="#leadership">Co-Founders & Team</a></li>
              <li><a href="#leadership">Distinguished Advisory Board</a></li>
              <li><a href="#culture">Values & Culture</a></li>
              <li><a href="#careers">Careers & Opportunities</a></li>
              <li><a href="#insights">Thought Leadership</a></li>
              <li>
                <a
                  href={companyInfo.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link-row"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                  </svg>
                  <span>LinkedIn Page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="footer-bottom-bar">
          <div className="footer-copy-text">
            <span>© {new Date().getFullYear()} ABS Consulting Corp. All rights reserved.</span>
            <span className="bullet-sep">•</span>
            <span>1207 Poppy Way, Stallings, NC 28104</span>
          </div>

          <div className="footer-bottom-actions">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenContact) onOpenContact();
              }}
              className="footer-privacy-link"
            >
              Contact Us
            </a>
            <span className="bullet-sep">•</span>
            <span className="footer-privacy-text">
              Committed to GDPR, HIPAA & Enterprise Privacy Standards
            </span>
            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
