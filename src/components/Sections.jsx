import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Magnetic from './Magnetic'

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
      <div className="wrap nav-wrap">
        <a className="logo" href="#top" onClick={closeMenu} aria-label="ABS Consulting home"><span className="logo-mark">A</span><span>ABS <b>CONSULTING</b></span></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <ul className="nav-links" id="nav-links">
          <li><a href="#expertise" onClick={closeMenu}>Expertise</a></li>
          <li><a href="#approach" onClick={closeMenu}>Our approach</a></li>
          <li><a href="#work" onClick={closeMenu}>Client work</a></li>
          <li><a href="#insights" onClick={closeMenu}>Insights</a></li>
        </ul>
        <Magnetic href="#contact" className="nav-contact" strength={0.18}>Let's talk <span aria-hidden="true">↗</span></Magnetic>
      </div>
    </nav>
  )
}

export const Proof = () => (
  <section className="proof" aria-label="ABS Consulting at a glance">
    <div className="wrap proof-grid">
      <div className="proof-intro" data-reveal><span className="section-kicker">Impact, in focus</span><p>Transformation with outcomes you can see and scale.</p></div>
      <div className="proof-stat" data-reveal><strong>$7B<span>+</span></strong><p>Indirect spend under management</p></div>
      <div className="proof-stat" data-reveal><strong>3</strong><p>Enterprise platforms unified</p></div>
      <div className="proof-stat" data-reveal><strong>5</strong><p>Business functions enabled end-to-end</p></div>
      <div className="proof-stat" data-reveal><strong>1</strong><p>Ticket. One owner. Across platforms.</p></div>
    </div>
  </section>
)

const services = [
  ['Readiness assessment', 'Prepare teams, processes, and data for a successful implementation, so first-dollar benefits and expected outcomes arrive sooner.'],
  ['Solution design', 'Align business goals and technology with a consistent, scalable design built on industry best practices.'],
  ['Platform configuration', 'Configure for usability, integration, and long-term scale, with the right guardrails for a future-proof solution.'],
  ['Training accelerators', 'Build adoption through scenario-based, role-based, industry-centric training, supported by digital adoption platforms.'],
]

export function Services() {
  const [open, setOpen] = useState(0)
  return (
    <section id="expertise" className="services"><div className="wrap services-layout">
      <div className="head services-head" data-reveal><span className="section-kicker">What we do</span><h2>Enablers to transform and elevate your success.</h2><p>Deep expertise in SaaS products and the enterprise source-to-pay and order-to-cash lifecycle.</p><a className="text-link" href="#contact">Discuss your priorities <span aria-hidden="true">↗</span></a></div>
      <div className="acc">
        {services.map(([t, d], i) => (
          <div className="acc-item" key={t} data-reveal>
            <button id={`service-${i}`} aria-controls={`service-panel-${i}`} onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span className="service-number">0{i + 1}</span><span className="service-title">{t}</span>
              <motion.span className="plus" animate={{ rotate: open === i ? 45 : 0 }} aria-hidden="true">+</motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div id={`service-panel-${i}`} className="body" role="region" aria-labelledby={`service-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                  <p>{d}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div></section>
  )
}

const fw = [
  ['CCLV™', 'Solve challenges. Unlock value.', 'A practical lens for surfacing friction in your contracting process and connecting improvements to measurable value.'],
  ['ACT™', 'Avoid implementation pitfalls.', 'A delivery framework that helps teams navigate complexity, maintain momentum, and stay focused on the outcomes that matter.'],
  ['AIR™', 'Design for scale. Create impact.', 'A scalable design approach that brings consistency across the enterprise and helps teams realize value sooner.'],
]

export function Frameworks() {
  const [i, setI] = useState(0)
  return (
    <section id="approach" className="fw"><div className="wrap fw-layout">
      <div className="head fw-head" data-reveal><span className="section-kicker">How we work</span><h2>Three frameworks.<br />One connected approach.</h2><p>CCLV™ solves challenges and unlocks value. ACT™ helps avoid implementation pitfalls. AIR™ supports scalable designs with immediate impact.</p></div>
      <div className="fw-content" data-reveal><div className="tabs" role="tablist" aria-label="ABS Consulting frameworks">
        {fw.map(([k], n) => (
          <button key={k} id={`framework-tab-${n}`} role="tab" aria-controls="framework-panel" aria-selected={i === n} tabIndex={0} className={`tab ${i === n ? 'on' : ''}`} onClick={() => setI(n)}>
            {i === n && <motion.div layoutId="pill" className="pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
            <span>{k}</span>
          </button>
        ))}
      </div><div className="panel" id="framework-panel" role="tabpanel" aria-labelledby={`framework-tab-${i}`}>
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
            <span className="framework-index">0{i + 1} / 03</span><h3>{fw[i][1]}</h3><p>{fw[i][2]}</p>
          </motion.div>
        </AnimatePresence>
      </div></div>
    </div></section>
  )
}

const caseStudies = [
  {
    type: 'Integrated health systems',
    title: 'One support model across three enterprise platforms.',
    detail: 'For a Fortune 20 managed healthcare enterprise, ABS unified SAP Ariba, Icertis ICI, and ServiceNow under one SLA-governed support model.',
    outcome: '$7B+',
    label: 'indirect spend under management',
    tags: ['SAP Ariba', 'Icertis ICI', 'ServiceNow'],
  },
  {
    type: 'Biotechnology & life sciences',
    title: 'Bringing post-merger contracts into one source of truth.',
    detail: 'Six concurrent workstreams supported contract extraction, normalization, migration, training, and governance for a California-based biotech organization.',
    outcome: '6',
    label: 'concurrent CLM workstreams',
    tags: ['Migration', 'Remediation', 'Adoption'],
  },
]

export const Story = () => (
  <section id="work" className="work">
    <div className="wrap">
      <div className="work-heading" data-reveal><div><span className="section-kicker">Selected client work</span><h2>Complex environments.<br />Connected outcomes.</h2></div><p>From enterprise healthcare to fast-moving life sciences, we help teams make their platforms work as one.</p></div>
      <div className="case-grid">{caseStudies.map((study, index) => (
        <article className={`case-study case-${index + 1}`} key={study.type} data-reveal>
          <div className="case-top"><span>{study.type}</span><span>0{index + 1} / 02</span></div>
          <h3>{study.title}</h3><p>{study.detail}</p>
          <div className="case-result"><strong>{study.outcome}</strong><span>{study.label}</span></div>
          <div className="case-tags">{study.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>
      ))}</div>
    </div>
  </section>
)

const posts = [
  ['Optimizing contract amendments: a refined approach', 'https://www.linkedin.com/posts/abs-consulting-corp_optimizing-contract-amendments-activity-7196921496487739392-Pky4'],
  ['Leveraging CLM to amplify human intellectual capital', 'https://www.linkedin.com/posts/abs-consulting-corp_leveraging-clm-to-amplify-human-intellectual-activity-7219557325894807552-yKUh'],
  ['Driving ESG excellence through contract lifecycle management', 'https://www.linkedin.com/posts/abs-consulting-corp_driving-esg-excellence-through-effective-activity-7209259971673255936-Y7SO'],
  ['The strategic role of CLM in home healthcare', 'https://www.linkedin.com/posts/abs-consulting-corp_revolutionizing-home-healthcare-activity-7234386069499097088-2XsW'],
  ['Contract risk management: staying ahead', 'https://www.linkedin.com/posts/abs-consulting-corp_contract-risk-management-activity-7243834263916146688-RkSy'],
]
export const Insights = () => (
  <section id="insights" className="insights"><div className="wrap insights-layout">
    <div className="head" data-reveal><span className="section-kicker">Perspectives</span><h2>Ideas for the work ahead.</h2><p>Practical thinking on contracts, technology, and the people who bring them together.</p></div>
    <div className="list">{posts.map(([title, url], index) => <a href={url} key={title} target="_blank" rel="noreferrer" data-reveal><span className="post-number">0{index + 1}</span><span className="post-title">{title}</span><span className="post-arrow" aria-label="Opens in a new tab">↗</span></a>)}</div>
  </div></section>
)

export const CTA = () => (
  <section id="contact" className="cta"><div className="wrap cta-inner" data-reveal>
    <span className="section-kicker">Start a conversation</span><h2>Make your next move<br />a more confident one.</h2>
    <p>Tell us where you are in your transformation. We’ll help you see what’s possible.</p>
    <Magnetic href="mailto:info@absccorp.com" className="btn btn-light">Get in touch <span aria-hidden="true">↗</span></Magnetic>
  </div></section>
)

export const Footer = () => (
  <footer className="footer"><div className="wrap footer-main">
    <a className="logo footer-logo" href="#top"><span className="logo-mark">A</span><span>ABS <b>CONSULTING</b></span></a>
    <div className="footer-about"><p>Enterprise source-to-pay, order-to-cash, and contract lifecycle management consulting.</p><a href="mailto:info@absccorp.com">info@absccorp.com</a></div>
    <div className="footer-address"><span>1207 Poppy Way</span><span>Stallings, NC 28104</span><span>United States</span></div>
    <div className="footer-links"><a href="https://absccorp.com/about-us/">About us <span>↗</span></a><a href="https://absccorp.com/contact-us/">Contact <span>↗</span></a><a href="https://absccorp.com/privacy-policy/">Privacy <span>↗</span></a><a href="https://www.linkedin.com/company/abs-consulting-corp/">LinkedIn <span>↗</span></a></div>
  </div><div className="wrap footer-bottom"><span>© 2026 ABS Consulting Corp.</span><a href="#top">Back to top ↑</a></div></footer>
)
