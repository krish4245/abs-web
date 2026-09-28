import { useState } from 'react';
import { motion } from 'framer-motion';
import { thoughtLeadership } from '../data/absData';
import { BookOpen, ExternalLink, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { ArticleModal } from './Modals';

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [filterTag, setFilterTag] = useState('All');

  const tags = ['All', 'CLM Best Practices', 'Healthcare Innovation', 'ESG & Compliance', 'Enterprise Risk'];

  const filtered = filterTag === 'All'
    ? thoughtLeadership
    : thoughtLeadership.filter((a) => a.tag === filterTag);

  return (
    <section id="insights" className="insights-section">
      <div className="container">
        <div className="insights-top-row">
          <div>
            <span className="section-kicker">THOUGHT LEADERSHIP</span>
            <h2 className="section-title">
              Thought Leadership
            </h2>
          </div>
          <p className="insights-header-desc">
            Rigorous thinking on contract lifecycle management, artificial intelligence, ESG governance, and enterprise digital strategy.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="insights-filter-bar">
          <div className="filter-label-wrap">
            <Filter size={14} className="text-muted" />
            <span>Filter by Domain:</span>
          </div>
          <div className="filter-buttons-list">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`filter-btn ${filterTag === tag ? 'active' : ''}`}
                onClick={() => setFilterTag(tag)}
              >
                <span>{tag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Articles List / Grid */}
        <div className="articles-grid">
          {filtered.map((article, idx) => (
            <motion.article
              key={article.id}
              className="article-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <div className="article-card-header">
                <span className="article-tag">{article.tag}</span>
                <span className="article-meta-info">{article.readTime}</span>
              </div>

              <h3 className="article-title">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>

              <div className="article-actions-row">
                <button
                  type="button"
                  className="btn-read-article"
                  onClick={() => setSelectedArticle(article)}
                >
                  <span>Read Article</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-linkedin"
                  aria-label="View on LinkedIn"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Follow us on LinkedIn Banner from OG site */}
        <div className="linkedin-follow-strip" style={{ marginTop: '56px', padding: '32px 36px', background: '#ffffff', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(6, 0, 151, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', boxShadow: 'var(--glass-light-shadow)' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark-primary)', marginBottom: '4px' }}>
              Follow us on LinkedIn to know about industry news and insights.
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-dark-muted)' }}>
              Follow us with the click of a button.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/company/abs-consulting-corp/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Follow on LinkedIn</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
