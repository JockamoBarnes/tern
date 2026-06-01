const CSS = `
/* ── Bento layout ── */
.gains-bento {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
}
.gains-hero  { grid-column: 1 / 3; grid-row: 1; }
.gains-split { grid-column: 3 / 4; grid-row: 1; }
.gains-row2  { grid-column: 1 / 4; grid-row: 2; height: 48px; display: none; }
.gains-b     { grid-column: 1 / 2; grid-row: 3; }
.gains-c     { grid-column: 2 / 3; grid-row: 3; }
.gains-yield { grid-column: 3 / 4; grid-row: 3; }
@media (max-width: 767px) {
  .gains-bento { grid-template-columns: 1fr; }
  .gains-hero, .gains-split, .gains-b, .gains-c, .gains-yield { grid-column: auto; grid-row: auto; }
  .gains-row2 { display: none !important; }
}

/* ── Payment row slide-in ── */
@keyframes row-in {
  0%, 4%    { transform: translateX(-14px); opacity: 0; }
  14%, 78%  { transform: translateX(0);     opacity: 1; }
  88%, 100% { transform: translateX(-14px); opacity: 0; }
}
.pr-1 { animation: row-in 8s ease-in-out 0s    infinite; }
.pr-2 { animation: row-in 8s ease-in-out 0.55s infinite; }
.pr-3 { animation: row-in 8s ease-in-out 1.10s infinite; }

/* ── Status flip: pending → paid ── */
@keyframes s-out {
  0%, 32% { opacity: 1; transform: translateY(0);    }
  42%, 100% { opacity: 0; transform: translateY(-7px); }
}
@keyframes s-in {
  0%, 32% { opacity: 0; transform: translateY(7px); }
  42%, 100% { opacity: 1; transform: translateY(0);   }
}
.s-pending { animation: s-out 8s ease-in-out 0s    infinite; position: absolute; }
.s-paid    { animation: s-in  8s ease-in-out 0s    infinite; position: absolute; }

/* ── Split chips fan in ── */
@keyframes chip-in {
  0%, 4%    { transform: translateX(-12px); opacity: 0; }
  16%, 80%  { transform: translateX(0);     opacity: 1; }
  92%, 100% { transform: translateX(-12px); opacity: 0; }
}
.chip-1 { animation: chip-in 7s ease-in-out 0s     infinite; }
.chip-2 { animation: chip-in 7s ease-in-out 0.38s  infinite; }
.chip-3 { animation: chip-in 7s ease-in-out 0.76s  infinite; }
.chip-4 { animation: chip-in 7s ease-in-out 1.14s  infinite; }

/* ── Calendar dots light up (dark bg version) ── */
@keyframes dot-on {
  0%, 8%    { background: rgba(255,255,255,0.08); box-shadow: none; }
  20%, 82%  { background: #15EAAD; box-shadow: 0 0 7px rgba(21,234,173,0.55); }
  94%, 100% { background: rgba(255,255,255,0.08); box-shadow: none; }
}

/* ── Yield bars ── */
@keyframes bar-grow {
  0%, 8%    { transform: scaleY(0); opacity: 0; }
  22%, 82%  { transform: scaleY(1); opacity: 1; }
  94%, 100% { transform: scaleY(0); opacity: 0; }
}
.bar-1 { animation: bar-grow 7s ease-out 0s    infinite; transform-origin: bottom; }
.bar-2 { animation: bar-grow 7s ease-out 0.3s  infinite; transform-origin: bottom; }
.bar-3 { animation: bar-grow 7s ease-out 0.6s  infinite; transform-origin: bottom; }
.bar-4 { animation: bar-grow 7s ease-out 0.9s  infinite; transform-origin: bottom; }
.bar-5 { animation: bar-grow 7s ease-out 1.2s  infinite; transform-origin: bottom; }
.bar-6 { animation: bar-grow 7s ease-out 1.5s  infinite; transform-origin: bottom; }

/* ── Task strikethrough line ── */
@keyframes strike-grow {
  0%, 10%   { width: 0%;   opacity: 0; }
  22%, 80%  { width: 100%; opacity: 1; }
  92%, 100% { width: 0%;   opacity: 0; }
}
@keyframes task-fade {
  0%, 10%   { color: rgba(255,255,255,0.55); }
  22%, 80%  { color: rgba(255,255,255,0.28); }
  92%, 100% { color: rgba(255,255,255,0.55); }
}
@keyframes tick-pop {
  0%, 10%   { opacity: 0; transform: scale(0.4); }
  22%, 80%  { opacity: 1; transform: scale(1);   }
  92%, 100% { opacity: 0; transform: scale(0.4); }
}
`;

export default function FiveGainsSection() {
  const calDots = Array.from({ length: 21 });

  return (
    <section className="section-navy" style={{ padding: '80px 0', overflow: 'hidden' }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* Gradient mesh behind the 100% hero card */}
      <div className="gradient-mesh-teal" style={{ left: -100, top: '20%' }} />

      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* Intro sentence — not a heading, just a spoken line */}
        <p className="reveal" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 14, color: 'rgba(240,250,250,0.55)', marginBottom: 24 }}>
          Here&rsquo;s what landlords who&rsquo;ve switched are seeing.
        </p>

        {/* Section header */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 items-end" style={{ marginBottom: 32, transitionDelay: '60ms' }}>
          <h2 style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 'clamp(22px, 2.6vw, 36px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--near-white)', margin: 0 }}>
            The only payment and rewards platform designed for rent.
          </h2>
          <p style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 14, color: 'rgba(240,250,250,0.35)', margin: 0, textAlign: 'right' as const }}>
            All with zero cost and little to no effort on your end.
          </p>
        </div>

        {/* ── Bento ── */}
        <div className="reveal gains-bento" style={{ transitionDelay: '120ms' }}>

          {/* ══ HERO CARD — glass-card-teal, 2-col wide ══ */}
          <div className="gains-hero glass-card-teal" style={{
            borderRadius: 20,
            padding: '40px 44px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 280,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            {/* Inner glow */}
            <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.3) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
                <span style={{
                  fontFamily: 'var(--font-unbounded)',
                  fontWeight: 700,
                  fontSize: 'clamp(52px, 6vw, 80px)',
                  lineHeight: 1,
                  letterSpacing: '-0.035em',
                  color: '#15EAAD',
                  filter: 'drop-shadow(0 0 24px rgba(21,234,173,0.55))',
                }}>100%</span>
              </div>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>
                on the due date, every time
              </div>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.4)', maxWidth: 320 }}>
                Straight to your bank account. No deductions, no delays.
              </div>
            </div>

            {/* Live payment rows */}
            <div style={{ position: 'relative', zIndex: 1, marginTop: 32, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden' }}>
              {[
                { name: 'Apt 4B — Al Reem Island', amount: 'AED 18,500', cls: 'pr-1' },
                { name: 'Apt 12A — JBR',           amount: 'AED 12,000', cls: 'pr-2' },
                { name: 'Villa 3 — Mirdif',         amount: 'AED 24,750', cls: 'pr-3' },
              ].map((row, i) => (
                <div key={row.name} className={row.cls} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '11px 18px',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}>
                  <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
                    {row.name}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)' }}>
                      {row.amount}
                    </span>
                    <span style={{ position: 'relative', display: 'inline-flex', width: 68, height: 22, alignItems: 'center' }}>
                      <span className="s-pending" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.07)', borderRadius: 4, padding: '3px 8px', whiteSpace: 'nowrap' as const }}>
                        Pending
                      </span>
                      <span className="s-paid" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 11, color: '#15EAAD', background: 'rgba(21,234,173,0.14)', borderRadius: 4, padding: '3px 8px', whiteSpace: 'nowrap' as const }}>
                        Paid ✓
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ SPLIT CARD — glass-card-teal ══ */}
          <div className="gains-split glass-card-teal" style={{
            borderRadius: 20,
            padding: '28px 28px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.2) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ display: 'inline-block', fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--mint)', background: 'rgba(21,234,173,0.15)', border: '1px solid rgba(21,234,173,0.35)', borderRadius: 6, padding: '4px 12px', marginBottom: 16, alignSelf: 'flex-start' as const }}>
                Tern Split
              </span>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 6 }}>
                <span style={{
                  fontFamily: 'var(--font-unbounded)',
                  fontWeight: 700,
                  fontSize: 'clamp(38px, 4vw, 54px)',
                  lineHeight: 1,
                  letterSpacing: '-0.035em',
                  color: '#15EAAD',
                  filter: 'drop-shadow(0 0 12px rgba(21,234,173,0.4))',
                }}>+3%</span>
                <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>earned upfront</span>
              </div>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.55, marginBottom: 20 }}>
                When a tenant requests a split, you earn 3% of the instalment upfront. They pay the fee.
              </div>

              {/* Fee breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                {[
                  { pct: '4%', label: 'fee paid by tenant', highlight: false },
                  { pct: '3%', label: 'earned by you',      highlight: true  },
                  { pct: '1%', label: 'Tern fee',           highlight: false },
                ].map((row, i) => (
                  <div key={row.label} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    background: row.highlight ? 'rgba(21,234,173,0.12)' : 'rgba(255,255,255,0.04)',
                    borderTop: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: row.highlight ? 600 : 400, fontSize: 12, color: row.highlight ? 'var(--mint)' : 'rgba(255,255,255,0.4)' }}>
                      {row.label}
                    </span>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 14, color: row.highlight ? 'var(--mint)' : 'rgba(255,255,255,0.25)', letterSpacing: '-0.02em' }}>
                      {row.pct}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══ DELAYS CARD — glass-card (bottom row) ══ */}
          <div className="gains-b glass-card" style={{
            borderRadius: 20,
            padding: '28px 28px',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 34,
          }}>
            <span style={{
              fontFamily: 'var(--font-unbounded)',
              fontWeight: 700,
              fontSize: 'clamp(38px, 4vw, 54px)',
              lineHeight: 1,
              letterSpacing: '-0.035em',
              color: '#15EAAD',
            }}>↓40%</span>
            <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: '8px 0 4px' }}>
              Fewer delays
            </div>
            <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55, marginBottom: 24 }}>
              When tenants pay by card, they pay on time.
            </div>

            {/* Calendar dot grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 5 }}>
              {calDots.map((_, i) => (
                <div key={i} style={{
                  height: 14,
                  borderRadius: 4,
                  background: 'rgba(255,255,255,0.08)',
                  animation: `dot-on 5.5s ease-in-out ${(i * 0.16).toFixed(2)}s infinite`,
                }} />
              ))}
            </div>
          </div>

          {/* ══ COSTS CARD — glass-card (bottom row) ══ */}
          <div className="gains-c glass-card" style={{
            borderRadius: 20,
            padding: '28px 28px',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 34,
          }}>
            <span style={{
              fontFamily: 'var(--font-unbounded)',
              fontWeight: 700,
              fontSize: 'clamp(38px, 4vw, 54px)',
              lineHeight: 1,
              letterSpacing: '-0.035em',
              color: '#15EAAD',
            }}>↓30%</span>
            <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: '8px 0 4px' }}>
              Lower admin costs
            </div>
            <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55, marginBottom: 24 }}>
              Automated collection, statements, reconciliation.
            </div>

            {/* Auto-completing task list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { task: 'Chase rent payment',     delay: '0s' },
                { task: 'Send monthly statement', delay: '0.9s' },
                { task: 'Reconcile transfers',    delay: '1.8s' },
              ].map((item) => (
                <div key={item.task} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 5, flexShrink: 0,
                    border: '1.5px solid rgba(21,234,173,0.4)',
                    background: 'rgba(21,234,173,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    animation: `tick-pop 6s ease-in-out ${item.delay} infinite`,
                  }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#15EAAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div style={{ position: 'relative', flex: 1 }}>
                    <span style={{
                      fontFamily: 'var(--font-manrope)',
                      fontWeight: 500,
                      fontSize: 13,
                      animation: `task-fade 6s ease-in-out ${item.delay} infinite`,
                    }}>
                      {item.task}
                    </span>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      height: 1,
                      background: 'rgba(255,255,255,0.3)',
                      animation: `strike-grow 6s ease-in-out ${item.delay} infinite`,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ YIELD CARD — glass-card (bottom row) ══ */}
          <div className="gains-yield glass-card" style={{
            borderRadius: 20,
            padding: '28px 28px',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 34,
          }}>
            <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.15) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{
                fontFamily: 'var(--font-unbounded)',
                fontWeight: 700,
                fontSize: 'clamp(38px, 4vw, 54px)',
                lineHeight: 1,
                letterSpacing: '-0.035em',
                color: '#15EAAD',
                filter: 'drop-shadow(0 0 16px rgba(21,234,173,0.45))',
                display: 'block',
              }}>↑5%</span>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: '8px 0 4px' }}>
                Higher yield
              </div>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55, marginBottom: 20 }}>
                More on-time payments, fewer vacancies, new income via Split.
              </div>

              {/* Mini bar chart */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 48 }}>
                {[
                  { h: '35%', cls: 'bar-1' },
                  { h: '50%', cls: 'bar-2' },
                  { h: '62%', cls: 'bar-3' },
                  { h: '74%', cls: 'bar-4' },
                  { h: '88%', cls: 'bar-5' },
                  { h: '100%', cls: 'bar-6' },
                ].map((bar, i) => (
                  <div key={i} className={bar.cls} style={{
                    flex: 1,
                    height: bar.h,
                    background: 'linear-gradient(to top, #15EAAD, rgba(21,234,173,0.25))',
                    borderRadius: '3px 3px 2px 2px',
                  }} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
