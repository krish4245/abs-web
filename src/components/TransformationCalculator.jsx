import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, CheckCircle2, TrendingDown, DollarSign, Clock, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TransformationCalculator({ onOpenContact }) {
  const [spendTier, setSpendTier] = useState(2); // default $1B - $5B
  const [selectedFrictions, setSelectedFrictions] = useState(['helpdesk', 'amendments']);
  const [selectedPlatforms, setSelectedPlatforms] = useState(['icertis', 'ariba']);

  const spendOptions = [
    { label: '$50M – $250M', value: 0, baseSavings: 0.9, weeks: 10 },
    { label: '$250M – $1B', value: 1, baseSavings: 2.4, weeks: 12 },
    { label: '$1B – $5B', value: 2, baseSavings: 6.8, weeks: 14 },
    { label: '$5B+ (Fortune 50)', value: 3, baseSavings: 14.5, weeks: 16 },
  ];

  const frictionsList = [
    { id: 'amendments', label: 'Contract amendment backlog & version drift' },
    { id: 'helpdesk', label: 'Fragmented helpdesks across CLM & ERP' },
    { id: 'compliance', label: 'HIPAA, BAA, or GPO regulatory compliance risks' },
    { id: 'manual', label: 'Manual data re-entry between S2P and Finance' },
    { id: 'adoption', label: 'Low user adoption (<50%) among procurement & legal' },
  ];

  const platformsList = [
    { id: 'icertis', label: 'Icertis ICI' },
    { id: 'ariba', label: 'SAP Ariba' },
    { id: 'servicenow', label: 'ServiceNow' },
    { id: 'salesforce', label: 'Salesforce' },
    { id: 'oracle', label: 'Oracle / SAP ERP' },
  ];

  const toggleFriction = (id) => {
    setSelectedFrictions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const togglePlatform = (id) => {
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentSpend = spendOptions[spendTier];
  const frictionMultiplier = 1 + selectedFrictions.length * 0.18;
  const platformMultiplier = 1 + selectedPlatforms.length * 0.12;
  const calculatedSavings = (currentSpend.baseSavings * frictionMultiplier * (platformMultiplier * 0.85)).toFixed(1);
  const cycleTimeReduction = Math.min(30 + selectedFrictions.length * 7, 65);

  let recommendedFw = 'CCLV™';
  if (selectedFrictions.includes('helpdesk') || selectedPlatforms.length >= 3) {
    recommendedFw = 'AIR™ (Architecture & Integration Resilience)';
  } else if (selectedFrictions.includes('adoption') || selectedFrictions.includes('manual')) {
    recommendedFw = 'ACT™ (Agile Capability & Transformation)';
  } else {
    recommendedFw = 'CCLV™ (Continuous Contract Value)';
  }

  const triggerCelebrate = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (e) {
      // fallback
    }
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="calculator-ambient" />
      <div className="container">
        <div className="calculator-header">
          <div className="calc-kicker-row">
            <Calculator size={16} className="text-cyan" />
            <span className="section-kicker">INTERACTIVE VALUE CALCULATOR</span>
          </div>
          <h2 className="calc-headline">
            Quantify Your Enterprise <br />
            <span className="gradient-shimmer">Source-to-Pay Transformation Impact.</span>
          </h2>
          <p className="calc-subtitle">
            Estimate potential value leakage recovery, cycle time acceleration, and the ideal ABS delivery framework based on your enterprise portfolio scale.
          </p>
        </div>

        <div className="calc-box-grid">
          {/* Inputs Column */}
          <div className="calc-inputs-panel">
            {/* Step 1: Spend tier */}
            <div className="calc-group">
              <label className="calc-label">1. Annual Indirect Spend Portfolio</label>
              <div className="calc-tier-buttons">
                {spendOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={`tier-btn ${spendTier === opt.value ? 'active' : ''}`}
                    onClick={() => setSpendTier(opt.value)}
                  >
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Primary Platforms */}
            <div className="calc-group">
              <label className="calc-label">2. Target Platforms in Your Environment</label>
              <div className="calc-checkbox-pills">
                {platformsList.map((plat) => {
                  const isChecked = selectedPlatforms.includes(plat.id);
                  return (
                    <button
                      key={plat.id}
                      type="button"
                      className={`check-pill ${isChecked ? 'checked' : ''}`}
                      onClick={() => togglePlatform(plat.id)}
                    >
                      <span className="check-box">{isChecked && <CheckCircle2 size={13} />}</span>
                      <span>{plat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Pain Points */}
            <div className="calc-group">
              <label className="calc-label">3. Key Operational Friction Points</label>
              <div className="calc-friction-list">
                {frictionsList.map((fric) => {
                  const isChecked = selectedFrictions.includes(fric.id);
                  return (
                    <div
                      key={fric.id}
                      className={`friction-row ${isChecked ? 'active' : ''}`}
                      onClick={() => toggleFriction(fric.id)}
                    >
                      <div className="friction-checkbox">
                        {isChecked && <CheckCircle2 size={16} className="text-cyan" />}
                      </div>
                      <span className="friction-text">{fric.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="calc-results-panel">
            <div className="results-card-glow" />
            <div className="results-badge">
              <Zap size={14} className="text-amber" />
              <span>Projected Transformation Return</span>
            </div>

            <div className="results-main-figure">
              <div className="metric-tag">Est. Annual Value Leakage Recovered</div>
              <div className="figure-row">
                <span className="currency">$</span>
                <span className="amount">{calculatedSavings}M</span>
                <span className="period">/ year</span>
              </div>
              <p className="figure-subtext">Calculated via CLM rebate capture, penalty elimination & SLA consolidation.</p>
            </div>

            <div className="results-metrics-grid">
              <div className="res-stat-card">
                <div className="res-stat-top">
                  <TrendingDown size={18} className="text-emerald" />
                  <strong>{cycleTimeReduction}%</strong>
                </div>
                <span>Avg. Cycle Time Reduction</span>
              </div>

              <div className="res-stat-card">
                <div className="res-stat-top">
                  <Clock size={18} className="text-cyan" />
                  <strong>~{currentSpend.weeks} Wks</strong>
                </div>
                <span>Accelerated Cutover Timeline</span>
              </div>
            </div>

            <div className="recommended-fw-box">
              <span className="fw-rec-label">Recommended ABS Framework:</span>
              <h4 className="fw-rec-name">{recommendedFw}</h4>
              <p className="fw-rec-desc">
                Tailored for multi-platform environments to deliver guaranteed first-dollar benefits.
              </p>
            </div>

            <button
              type="button"
              className="btn btn-primary w-full"
              onClick={() => {
                triggerCelebrate();
                if (onOpenContact) {
                  onOpenContact(
                    `Calculated ROI: $${calculatedSavings}M/yr (${currentSpend.label} spend) with ${recommendedFw}`
                  );
                }
              }}
            >
              <span>Book Strategy Call With These Inputs</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
