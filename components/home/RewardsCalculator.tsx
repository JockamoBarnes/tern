'use client';

import { useState, useEffect, useRef } from 'react';

const FREQ_LABELS: Record<number, string> = { 12: 'month', 4: 'quarter', 2: 'six months', 1: 'year' };
const TERN_RATE = 0.02;
const MIN_RENT = 30000;
const MAX_RENT = 600000;

function fmt(n: number) { return Math.round(n).toLocaleString(); }
function fmtAED(n: number) { return 'AED ' + Math.round(n).toLocaleString(); }

type RewardType = 'cashback' | 'miles';

interface Results {
  annualLabel: string;
  annualTotal: number;
  perLabel: string;
  freqLabel: string;
  perPayment: number;
  ccBreakLabel: string;
  ternBreakLabel: string;
  ccRateFmt: string;
  unitLabel: string;
  ccRate: number;
  isCash: boolean;
}

function computeResults(rent: number, freq: number, type: RewardType, ccRate: number): Results {
  const perPayment = rent / freq;
  const isCash = type === 'cashback';

  let ccAnnual, ternAnnual, ccPerPayment, ternPerPayment;
  if (isCash) {
    ccAnnual = rent * (ccRate / 100);
    ternAnnual = rent * TERN_RATE;
    ccPerPayment = perPayment * (ccRate / 100);
    ternPerPayment = perPayment * TERN_RATE;
  } else {
    ccAnnual = rent * ccRate;
    ternAnnual = rent * (TERN_RATE * 100);
    ccPerPayment = perPayment * ccRate;
    ternPerPayment = perPayment * (TERN_RATE * 100);
  }
  const totalAnnual = ccAnnual + ternAnnual;
  const totalPerPayment = ccPerPayment + ternPerPayment;

  return {
    annualLabel: isCash ? fmtAED(totalAnnual) : fmt(totalAnnual) + ' mi',
    annualTotal: totalAnnual,
    perLabel: isCash ? fmtAED(totalPerPayment) : fmt(totalPerPayment) + ' mi',
    freqLabel: FREQ_LABELS[freq],
    perPayment,
    ccBreakLabel: isCash ? fmtAED(ccAnnual) : fmt(ccAnnual) + ' miles',
    ternBreakLabel: isCash ? fmtAED(ternAnnual) : fmt(ternAnnual) + ' miles',
    ccRateFmt: ccRate + (type === 'miles' ? ' mi/AED' : '%'),
    unitLabel: isCash ? 'per year' : 'miles per year',
    ccRate,
    isCash,
  };
}

const SLIDER_CSS = `
input[type="range"].tern-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(7,59,76,0.12);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}
input[type="range"].tern-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #15EAAD;
  cursor: pointer;
  box-shadow: 0 0 0 4px rgba(21,234,173,0.2);
  transition: box-shadow 150ms ease;
}
input[type="range"].tern-slider::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 6px rgba(21,234,173,0.3);
}
input[type="range"].tern-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #15EAAD;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 0 4px rgba(21,234,173,0.2);
}
`;

function ResultsPanel({ r, rent }: { r: Results; rent: number }) {
  const [displayTotal, setDisplayTotal] = useState(r.annualTotal);
  const displayRef = useRef(r.annualTotal);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const target = r.annualTotal;
    const start = displayRef.current;
    const duration = 400;
    const startTime = performance.now();

    if (animRef.current) cancelAnimationFrame(animRef.current);

    function animate(now: number) {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = start + (target - start) * eased;
      displayRef.current = current;
      setDisplayTotal(current);
      if (p < 1) animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [r.annualTotal]);

  const barWidth = `${((rent - MIN_RENT) / (MAX_RENT - MIN_RENT)) * 100}%`;
  const displayLabel = r.isCash ? 'AED ' + fmt(displayTotal) : fmt(displayTotal) + ' mi';

  return (
    <div style={{ position: 'sticky', top: '1.5rem' }}>
      {/* Primary result — teal bg, large mint number */}
      <div style={{
        background: 'var(--teal)',
        borderRadius: 12,
        padding: '1.25rem',
        marginBottom: 10,
      }}>
        <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(208,251,239,0.5)', marginBottom: '0.5rem' }}>
          Total annual rewards
        </p>
        <p style={{ fontFamily: 'var(--font-unbounded)', fontSize: 'clamp(36px, 3vw, 52px)', fontWeight: 700, color: 'var(--mint)', lineHeight: 1, marginBottom: 4 }}>
          {displayLabel}
        </p>
        <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 12, color: 'rgba(208,251,239,0.4)' }}>
          {r.unitLabel}
        </p>
      </div>

      {/* Per payment */}
      <div style={{ background: 'rgba(7,59,76,0.04)', border: '0.5px solid rgba(7,59,76,0.1)', borderRadius: 12, padding: '1rem 1.25rem', marginBottom: 10 }}>
        <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(7,59,76,0.4)', marginBottom: '0.4rem' }}>
          Per payment
        </p>
        <p style={{ fontFamily: 'var(--font-unbounded)', fontSize: 18, fontWeight: 700, color: 'var(--teal)', lineHeight: 1, marginBottom: 3 }}>
          {r.perLabel}
        </p>
        <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 11, color: 'rgba(7,59,76,0.45)' }}>
          every {r.freqLabel} on AED&nbsp;{fmt(r.perPayment)}
        </p>
      </div>

      {/* Breakdown */}
      <div style={{ border: '0.5px solid rgba(7,59,76,0.1)', borderRadius: 12, overflow: 'hidden', marginBottom: 10 }}>
        {r.ccRate > 0 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 1.25rem', borderBottom: '0.5px solid rgba(7,59,76,0.08)' }}>
            <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 12, color: 'rgba(7,59,76,0.55)' }}>Your card ({r.ccRateFmt})</span>
            <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 12, fontWeight: 600, color: 'var(--teal)' }}>{r.ccBreakLabel}</span>
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 1.25rem' }}>
          <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 12, color: 'rgba(7,59,76,0.55)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ background: 'rgba(21,234,173,0.12)', color: '#0B8A62', fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 6, letterSpacing: '0.04em' }}>Tern 2%</span>
          </span>
          <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 12, fontWeight: 600, color: '#0B8A62' }}>{r.ternBreakLabel}</span>
        </div>
      </div>

      {/* Horizontal bar — rewards scale with rent */}
      <div style={{ border: '0.5px solid rgba(7,59,76,0.1)', borderRadius: 12, padding: '1rem 1.25rem' }}>
        <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(7,59,76,0.4)', marginBottom: 10 }}>
          Rewards scale with rent
        </p>
        <div style={{ background: 'rgba(7,59,76,0.08)', borderRadius: 8, height: 14, overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: barWidth,
            background: 'linear-gradient(90deg, #15EAAD, #4DB6CE)',
            borderRadius: 8,
            transition: 'width 400ms ease',
          }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
          <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, color: 'rgba(7,59,76,0.35)' }}>AED 30K</span>
          <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, color: 'rgba(7,59,76,0.35)' }}>AED 600K</span>
        </div>
      </div>
    </div>
  );
}

export default function RewardsCalculator() {
  const [rent, setRent] = useState(120000);
  const [freq, setFreq] = useState(12);
  const [rewardType, setRewardType] = useState<RewardType>('cashback');
  const [ccRate, setCcRate] = useState(0);

  const results = computeResults(rent, freq, rewardType, ccRate);

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-manrope)',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgba(7,59,76,0.5)',
    marginBottom: '0.4rem',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    height: 40,
    border: '0.5px solid rgba(7,59,76,0.15)',
    borderRadius: 6,
    background: 'white',
    color: 'var(--teal)',
    fontFamily: 'var(--font-manrope)',
    fontSize: 14,
    outline: 'none',
    padding: '0 10px',
  };

  return (
    <section className="section-light grad-divider" style={{ padding: '96px 0' }}>
      <style dangerouslySetInnerHTML={{ __html: SLIDER_CSS }} />

      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>

        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: 'var(--teal)',
            marginBottom: 16,
            maxWidth: '65%',
            minWidth: 260,
          }}
        >
          See how hard your<br />
          <span style={{ color: 'var(--mint)' }}>rent can work.</span>
        </h2>

        <p className="reveal" style={{ fontFamily: 'var(--font-manrope)', fontSize: 16, color: 'rgba(7,59,76,0.55)', marginBottom: 48, transitionDelay: '80ms', lineHeight: 1.6 }}>
          Most Dubai renters leave <strong style={{ color: 'var(--teal)', fontWeight: 600 }}>AED 3,000+</strong> on the table every year.
        </p>

        {/* Calculator card */}
        <div
          className="reveal"
          style={{
            background: 'var(--white)',
            border: '1px solid rgba(7,59,76,0.09)',
            borderRadius: 12,
            padding: '40px',
            boxShadow: '0 2px 8px rgba(7,59,76,0.04), 0 12px 32px rgba(7,59,76,0.06)',
            borderTop: '2px solid transparent',
            backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, #15EAAD, #4DB6CE)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            transitionDelay: '120ms',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>

            {/* Left — inputs */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={labelStyle}>Annual rent</label>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-unbounded)', fontSize: 22, fontWeight: 700, color: 'var(--teal)' }}>
                    AED&nbsp;{rent.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  className="tern-slider"
                  min={MIN_RENT}
                  max={MAX_RENT}
                  step={1000}
                  value={rent}
                  onChange={(e) => setRent(parseInt(e.target.value))}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                  <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, color: 'rgba(7,59,76,0.4)' }}>AED 30,000</span>
                  <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, color: 'rgba(7,59,76,0.4)' }}>AED 600,000</span>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={labelStyle}>Payment frequency</label>
                <div style={{ position: 'relative' }}>
                  <select
                    value={freq}
                    onChange={(e) => setFreq(parseInt(e.target.value))}
                    style={{
                      ...inputStyle,
                      appearance: 'none',
                      cursor: 'pointer',
                      padding: '0 28px 0 10px',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23073B4C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 10px center',
                    }}
                  >
                    <option value={12}>Monthly (12/year)</option>
                    <option value={4}>Quarterly (4/year)</option>
                    <option value={2}>Semi-annually (2/year)</option>
                    <option value={1}>Annually (1/year)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={labelStyle}>Reward type</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={rewardType}
                      onChange={(e) => setRewardType(e.target.value as RewardType)}
                      style={{
                        ...inputStyle,
                        appearance: 'none',
                        cursor: 'pointer',
                        padding: '0 28px 0 10px',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23073B4C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 10px center',
                      }}
                    >
                      <option value="cashback">Cashback</option>
                      <option value="miles">Miles / Points</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={labelStyle}>Your card rate</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input
                      type="number"
                      value={ccRate}
                      min={0}
                      max={30}
                      step={0.1}
                      onChange={(e) => setCcRate(parseFloat(e.target.value) || 0)}
                      style={{ ...inputStyle, padding: '0 36px 0 10px' }}
                    />
                    <span style={{ position: 'absolute', right: 10, fontSize: 13, fontWeight: 500, color: 'rgba(7,59,76,0.45)', pointerEvents: 'none', fontFamily: 'var(--font-manrope)' }}>
                      {rewardType === 'miles' ? 'mi/AED' : '%'}
                    </span>
                  </div>
                </div>
              </div>

              <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 12, color: 'rgba(7,59,76,0.4)', marginTop: 8 }}>
                No fee to you. No change for your landlord.
              </p>
            </div>

            {/* Right — results */}
            <ResultsPanel r={results} rent={rent} />
          </div>
        </div>
      </div>
    </section>
  );
}
