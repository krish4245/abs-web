import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: '#expertise', label: 'Services' },
    { href: '#why-choose-us', label: 'Why Choose Us' },
    { href: '#frameworks', label: 'How It Works' },
    { href: '#cdm-healthcare', label: 'Industry CDM' },
    { href: '#case-studies', label: 'Success Stories' },
    { href: '#insights', label: 'Thought Leadership' },
    { href: '#leadership', label: 'About Us' },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#top" className="site-brand" onClick={closeMenu} aria-label="ABS Consulting Corp Home">
            <img
              src="https://absccorp.com/wp-content/uploads/2024/10/logo.svg"
              alt="ABS Consulting Corp"
              className="brand-og-logo-img"
            />
          </a>

          <nav className="desktop-nav" aria-label="Primary Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-item-link"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="btn btn-consultation"
              onClick={() => onOpenContact && onOpenContact()}
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight size={16} />
            </button>

            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mobile-nav-inner">
              <div className="mobile-nav-kicker">Navigation</div>
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={closeMenu}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={18} className="text-muted" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mobile-nav-footer">
                <button
                  type="button"
                  className="btn btn-primary w-full"
                  onClick={() => {
                    closeMenu();
                    if (onOpenContact) onOpenContact();
                  }}
                >
                  <PhoneCall size={16} />
                  <span>Book Strategic Consultation</span>
                </button>
                <p className="mobile-nav-contact-info">
                  Or email directly: <a href="mailto:info@absccorp.com">info@absccorp.com</a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
