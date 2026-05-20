'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { Chart as ChartType } from 'chart.js';

const MONTH_NAMES = ['May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr'];
const MONTH_YEARS = ["'26","'26","'26","'26","'26","'26","'26","'26","'27","'27","'27","'27"];
const FREQ_INDICES: Record<number, number[]> = { 12:[0,1,2,3,4,5,6,7,8,9,10,11], 4:[0,3,6,9], 2:[0,6], 1:[0] };
const FREQ_LABELS: Record<number, string> = { 12:'month', 4:'quarter', 2:'six months', 1:'year' };
const TERN_RATE = 0.02;

function fmt(n: number) { return Math.round(n).toLocaleString(); }
function fmtAED(n: number) { return 'AED ' + Math.round(n).toLocaleString(); }

type RewardType = 'cashback' | 'miles';

interface Results {
  annualLabel: string;
  perLabel: string;
  freqLabel: string;
  perPayment: number;
  ccBreakLabel: string;
  ternBreakLabel: string;
  ccRateFmt: string;
  unitLabel: string;
  ccRate: number;
  ccBarData: number[];
  ternBarData: number[];
  isCash: boolean;
}

function computeResults(rent: number, freq: number, type: RewardType, ccRate: number): Results {
  const perPayment = rent / freq;
  const isMiles = type === 'miles';
  const isCash = !isMiles;
  const paymentIndices = FREQ_INDICES[freq];

  let ccAnnual, ternAnnual, totalAnnual, ccPerPayment, ternPerPayment, totalPerPayment;
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
  totalAnnual = ccAnnual + ternAnnual;
  totalPerPayment = ccPerPayment + ternPerPayment;

  return {
    annualLabel: isCash ? fmtAED(totalAnnual) : fmt(totalAnnual) + ' mi',
    perLabel: isCash ? fmtAED(totalPerPayment) : fmt(totalPerPayment) + ' mi',
    freqLabel: FREQ_LABELS[freq],
    perPayment,
    ccBreakLabel: isCash ? fmtAED(ccAnnual) : fmt(ccAnnual) + ' miles',
    ternBreakLabel: isCash ? fmtAED(ternAnnual) : fmt(ternAnnual) + ' miles',
    ccRateFmt: ccRate + (isMiles ? ' mi/AED' : '%'),
    unitLabel: isCash ? 'per year' : 'miles per year',
    ccRate,
    ccBarData: MONTH_NAMES.map((_, i) => paymentIndices.includes(i) ? Math.round(ccPerPayment) : 0),
    ternBarData: MONTH_NAMES.map((_, i) => paymentIndices.includes(i) ? Math.round(ternPerPayment) : 0),
    isCash,
  };
}

function ResultsPanel({ r }: { r: Results }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<ChartType | null>(null);

  const buildChart = useCallback(async () => {
    if (!canvasRef.current) return;
    const { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } = await import('chart.js');
    Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

    if (chartRef.current) { chartRef.current.destroy(); chartRef.current = null; }

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
    const tickColor = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)';
    const chartUnit = r.isCash ? 'AED' : 'mi';

    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: MONTH_NAMES.map((m, i) => m + ' ' + MONTH_YEARS[i]),
        datasets: [
          ...(r.ccRate > 0 ? [{
            label: 'Card rewards',
            data: r.ccBarData,
            backgroundColor: '#4DB6CE',
            borderRadius: { topLeft: 0 as number, topRight: 0 as number, bottomLeft: 3 as number, bottomRight: 3 as number },
            borderSkipped: 'bottom' as const,
            barPercentage: 0.55,
          }] : []),
          {
            label: 'Tern boost',
            data: r.ternBarData,
            backgroundColor: '#15EAAD',
            borderRadius: { topLeft: 3 as number, topRight: 3 as number, bottomLeft: r.ccRate > 0 ? 0 as number : 3 as number, bottomRight: r.ccRate > 0 ? 0 as number : 3 as number },
            borderSkipped: 'bottom' as const,
            barPercentage: 0.55,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: { duration: 180 },
        plugins: {
          legend: {
            display: r.ccRate > 0,
            position: 'bottom',
            labels: { font: { family: 'Manrope', size: 10 }, color: tickColor, boxWidth: 8, boxHeight: 8, padding: 10 },
          },
          tooltip: {
            filter: (item) => (item.raw as number) > 0,
            callbacks: {
              title: (items) => items[0].label,
              label: (ctx) => {
                const v = ctx.raw as number;
                if (v === 0) return '';
                return ' ' + ctx.dataset.label + ': ' + (chartUnit === 'AED' ? 'AED ' + v.toLocaleString() : v.toLocaleString() + ' mi');
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            border: { display: false },
            ticks: { font: { family: 'Manrope', size: 9 }, color: tickColor, maxRotation: 0 },
          },
          y: {
            stacked: true,
            grid: { color: gridColor },
            border: { display: false },
            ticks: {
              font: { family: 'Manrope', size: 9 },
              color: tickColor,
              callback: (v) => v === 0 ? '' : (chartUnit === 'AED' ? 'AED ' + v.toLocaleString() : v.toLocaleString()),
            },
          },
        },
      },
    });
  }, [r]);

  useEffect(() => { buildChart(); return () => { if (chartRef.current) { chartRef.current.destroy(); chartRef.current = null; } }; }, [buildChart]);

  return (
    <div style={{ position: 'sticky', top: '1.5rem' }}>
      {/* Primary result */}
      <div style={{ background: 'var(--teal)', borderRadius: 12, padding: '1.25rem', marginBottom: 10 }}>
        <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(208,251,239,0.5)', marginBottom: '0.5rem' }}>
          Total annual rewards
        </p>
        <p style={{ fontFamily: 'var(--font-unbounded)', fontSize: 26, fontWeight: 700, color: 'var(--mint)', lineHeight: 1, marginBottom: 4 }}>
          {r.annualLabel}
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
            <span style={{ background: 'rgba(21,234,173,0.12)', color: '#0B8A62', fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 20, letterSpacing: '0.04em' }}>Tern 2%</span>
          </span>
          <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 12, fontWeight: 600, color: '#0B8A62' }}>{r.ternBreakLabel}</span>
        </div>
      </div>

      {/* Chart */}
      <div style={{ border: '0.5px solid rgba(7,59,76,0.1)', borderRadius: 12, padding: '1rem 1rem 0.5rem' }}>
        <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(7,59,76,0.4)', marginBottom: '0.75rem' }}>
          Rewards earned — next 12 months
        </p>
        <canvas ref={canvasRef} height={120} />
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
    <section className="grad-divider" style={{ background: 'var(--grad-light)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', right: '-40px', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.06) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-60px', left: '8%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,182,206,0.05) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
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

        {/* Two-column layout inside a card */}
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
          }}
        >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Left — inputs */}
          <div>
            {/* Rent slider */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Annual rent</label>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-unbounded)', fontSize: 20, fontWeight: 700, color: 'var(--teal)' }}>
                  AED&nbsp;{rent.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={30000}
                max={600000}
                step={1000}
                value={rent}
                onChange={(e) => setRent(parseInt(e.target.value))}
                style={{ width: '100%', height: 4, accentColor: 'var(--mint)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, color: 'rgba(7,59,76,0.4)' }}>AED 30,000</span>
                <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, color: 'rgba(7,59,76,0.4)' }}>AED 600,000</span>
              </div>
            </div>

            {/* Payment frequency */}
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

            {/* Reward type + card rate */}
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
          <ResultsPanel r={results} />
        </div>
        </div>
      </div>
    </section>
  );
}
