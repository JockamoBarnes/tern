const CSS = `
.gains-bento {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
}
.gains-hero  { grid-column: 1 / 3; grid-row: 1; }
.gains-split { grid-column: 3 / 4; grid-row: 1; }
.gains-b     { grid-column: 1 / 2; grid-row: 2; }
.gains-c     { grid-column: 2 / 3; grid-row: 2; }
.gains-yield { grid-column: 3 / 4; grid-row: 2; }
@media (max-width: 767.98px) {
  .gains-bento { grid-template-columns: 1fr; }
  .gains-hero, .gains-split, .gains-b, .gains-c, .gains-yield { grid-column: auto; grid-row: auto; margin-top: 0 !important; }
}

.pr-1, .pr-2, .pr-3,
.s-pending, .s-paid,
.chip-1, .chip-2, .chip-3, .chip-4,
.cal-dot,
.task-anim, .task-strike,
.bar-1, .bar-2, .bar-3, .bar-4, .bar-5, .bar-6 { animation-play-state: paused; }

.gains-hero:hover .pr-1, .gains-hero:hover .pr-2, .gains-hero:hover .pr-3,
.gains-hero:hover .s-pending, .gains-hero:hover .s-paid { animation-play-state: running; }
.gains-split:hover .chip-1, .gains-split:hover .chip-2,
.gains-split:hover .chip-3, .gains-split:hover .chip-4 { animation-play-state: running; }
.gains-b:hover .cal-dot { animation-play-state: running; }
.gains-c:hover .task-anim, .gains-c:hover .task-strike { animation-play-state: running; }
.gains-yield:hover .bar-1, .gains-yield:hover .bar-2, .gains-yield:hover .bar-3,
.gains-yield:hover .bar-4, .gains-yield:hover .bar-5, .gains-yield:hover .bar-6 { animation-play-state: running; }

@keyframes row-in {
  0%, 4%    { transform: translateX(-14px); opacity: 0; }
  14%, 78%  { transform: translateX(0);     opacity: 1; }
  88%, 100% { transform: translateX(-14px); opacity: 0; }
}
.pr-1 { animation-name: row-in; animation-duration: 8s; animation-timing-function: ease-in-out; animation-delay: 0s;    animation-iteration-count: infinite; }
.pr-2 { animation-name: row-in; animation-duration: 8s; animation-timing-function: ease-in-out; animation-delay: 0.55s; animation-iteration-count: infinite; }
.pr-3 { animation-name: row-in; animation-duration: 8s; animation-timing-function: ease-in-out; animation-delay: 1.10s; animation-iteration-count: infinite; }

@keyframes s-out {
  0%, 32%   { opacity: 1; transform: translateY(0);    }
  42%, 100% { opacity: 0; transform: translateY(-7px); }
}
@keyframes s-in {
  0%, 32%   { opacity: 0; transform: translateY(7px); }
  42%, 100% { opacity: 1; transform: translateY(0);   }
}
.s-pending { animation-name: s-out; animation-duration: 8s; animation-timing-function: ease-in-out; animation-delay: 0s; animation-iteration-count: infinite; position: absolute; }
.s-paid    { animation-name: s-in;  animation-duration: 8s; animation-timing-function: ease-in-out; animation-delay: 0s; animation-iteration-count: infinite; position: absolute; }

@keyframes chip-in {
  0%, 4%    { transform: translateX(-12px); opacity: 0; }
  16%, 80%  { transform: translateX(0);     opacity: 1; }
  92%, 100% { transform: translateX(-12px); opacity: 0; }
}
.chip-1 { animation-name: chip-in; animation-duration: 7s; animation-timing-function: ease-in-out; animation-delay: 0s;    animation-iteration-count: infinite; }
.chip-2 { animation-name: chip-in; animation-duration: 7s; animation-timing-function: ease-in-out; animation-delay: 0.38s; animation-iteration-count: infinite; }
.chip-3 { animation-name: chip-in; animation-duration: 7s; animation-timing-function: ease-in-out; animation-delay: 0.76s; animation-iteration-count: infinite; }
.chip-4 { animation-name: chip-in; animation-duration: 7s; animation-timing-function: ease-in-out; animation-delay: 1.14s; animation-iteration-count: infinite; }

@keyframes dot-on {
  0%, 8%    { background: rgba(7,59,76,0.09); box-shadow: none; }
  20%, 82%  { background: #15EAAD; box-shadow: 0 0 7px rgba(21,234,173,0.45); }
  94%, 100% { background: rgba(7,59,76,0.09); box-shadow: none; }
}

@keyframes bar-grow {
  0%, 8%    { transform: scaleY(0); opacity: 0; }
  22%, 82%  { transform: scaleY(1); opacity: 1; }
  94%, 100% { transform: scaleY(0); opacity: 0; }
}
.bar-1 { animation-name: bar-grow; animation-duration: 7s; animation-timing-function: ease-out; animation-delay: 0s;   animation-iteration-count: infinite; transform-origin: bottom; }
.bar-2 { animation-name: bar-grow; animation-duration: 7s; animation-timing-function: ease-out; animation-delay: 0.3s; animation-iteration-count: infinite; transform-origin: bottom; }
.bar-3 { animation-name: bar-grow; animation-duration: 7s; animation-timing-function: ease-out; animation-delay: 0.6s; animation-iteration-count: infinite; transform-origin: bottom; }
.bar-4 { animation-name: bar-grow; animation-duration: 7s; animation-timing-function: ease-out; animation-delay: 0.9s; animation-iteration-count: infinite; transform-origin: bottom; }
.bar-5 { animation-name: bar-grow; animation-duration: 7s; animation-timing-function: ease-out; animation-delay: 1.2s; animation-iteration-count: infinite; transform-origin: bottom; }
.bar-6 { animation-name: bar-grow; animation-duration: 7s; animation-timing-function: ease-out; animation-delay: 1.5s; animation-iteration-count: infinite; transform-origin: bottom; }

@keyframes strike-grow {
  0%, 10%   { width: 0%;   opacity: 0; }
  22%, 80%  { width: 100%; opacity: 1; }
  92%, 100% { width: 0%;   opacity: 0; }
}
@keyframes task-fade {
  0%, 10%   { color: rgba(7,59,76,0.6); }
  22%, 80%  { color: rgba(7,59,76,0.28); }
  92%, 100% { color: rgba(7,59,76,0.6); }
}
@keyframes tick-pop {
  0%, 10%   { opacity: 0; transform: scale(0.4); }
  22%, 80%  { opacity: 1; transform: scale(1);   }
  92%, 100% { opacity: 0; transform: scale(0.4); }
}
`;

function Grain({ id, opacity = 0.1 }: { id: string; opacity?: number }) {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity }} aria-hidden="true">
      <filter id={id}>
        <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}

const darkCard: React.CSSProperties = {
  background: 'linear-gradient(140deg, #0D5468 0%, #073B4C 65%)',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 4px 24px rgba(7,59,76,0.15)',
  borderRadius: 20,
  padding: '28px 28px',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'default',
};

const lightCard: React.CSSProperties = {
  background: 'linear-gradient(140deg, #FFFFFF 0%, rgba(208,251,239,0.22) 100%)',
  border: '1px solid rgba(7,59,76,0.08)',
  boxShadow: '0 2px 12px rgba(7,59,76,0.05)',
  borderRadius: 20,
  padding: '28px 28px',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'default',
};

export default function FiveGainsSection() {
  const calDots = Array.from({ length: 21 });

  return (
    <section className="section-light grad-divider" style={{ overflow: 'hidden', padding: 'clamp(72px, 12.5vw, 120px) 0' }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

        <div className="reveal" style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--teal)', margin: 0, maxWidth: '100%' }}>
            The only payment and rewards<br />platform designed for rent
          </h2>
        </div>

        <div className="reveal gains-bento" style={{ transitionDelay: '120ms' }}>

          {/* ══ HERO CARD (dark) ══ */}
          <div className="gains-hero" style={{
            ...darkCard,
            background: 'linear-gradient(140deg, #0D5F7A 0%, #073B4C 65%)',
            border: '1px solid rgba(21,234,173,0.15)',
            minHeight: 280,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '40px 44px',
          }}>
            <Grain id="grain-hero" opacity={0.1} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 15, color: 'rgba(240,250,250,0.55)', marginBottom: 8 }}>Guaranteed on time</div>
              <span style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 'clamp(60px, 7vw, 92px)', lineHeight: 1, letterSpacing: '-0.035em', color: '#15EAAD', display: 'block', marginBottom: 10, filter: 'drop-shadow(0 0 20px rgba(21,234,173,0.4))' }}>100%</span>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>Straight to your bank account. No deductions, no delays.</div>
            </div>
            <div style={{ position: 'relative', zIndex: 1, marginTop: 32, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, overflow: 'hidden' }}>
              {[
                { name: 'Apt 4B — Al Reem Island', amount: 'AED 18,500', cls: 'pr-1' },
                { name: 'Apt 12A — JBR',           amount: 'AED 12,000', cls: 'pr-2' },
                { name: 'Villa 3 — Mirdif',         amount: 'AED 24,750', cls: 'pr-3' },
              ].map((row, i) => (
                <div key={row.name} className={row.cls} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 18px', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{row.name}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)' }}>{row.amount}</span>
                    <span style={{ position: 'relative', display: 'inline-flex', width: 68, height: 22, alignItems: 'center' }}>
                      <span className="s-pending" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 11, color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.07)', borderRadius: 4, padding: '3px 8px', whiteSpace: 'nowrap' as const }}>Pending</span>
                      <span className="s-paid"    style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 11, color: '#15EAAD', background: 'rgba(21,234,173,0.14)', borderRadius: 4, padding: '3px 8px', whiteSpace: 'nowrap' as const }}>Paid ✓</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ SPLIT CARD (light) ══ */}
          <div className="gains-split" style={lightCard}>
            <Grain id="grain-split" opacity={0.06} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 15, color: 'var(--teal)', marginBottom: 8 }}>Earn on flexibility</div>
              <span style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 'clamp(44px, 4.6vw, 62px)', lineHeight: 1, letterSpacing: '-0.035em', color: '#15EAAD', display: 'block', marginBottom: 10 }}>+3%</span>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 13, color: 'rgba(7,59,76,0.65)', lineHeight: 1.55, marginBottom: 20 }}>When a tenant requests a split, you earn 3% of the instalment upfront. They pay the fee.</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(7,59,76,0.08)' }}>
                {[
                  { pct: '4%', label: 'fee paid by tenant', highlight: false },
                  { pct: '3%', label: 'earned by you',      highlight: true  },
                  { pct: '1%', label: 'Tern fee',           highlight: false },
                ].map((row, i) => (
                  <div key={row.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: row.highlight ? 'rgba(21,234,173,0.08)' : 'rgba(7,59,76,0.02)', borderTop: i > 0 ? '1px solid rgba(7,59,76,0.06)' : 'none' }}>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: row.highlight ? 600 : 400, fontSize: 12, color: row.highlight ? 'var(--teal)' : 'rgba(7,59,76,0.4)' }}>{row.label}</span>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 14, color: row.highlight ? '#0B8A62' : 'rgba(7,59,76,0.25)', letterSpacing: '-0.02em' }}>{row.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══ DELAYS CARD (light) ══ */}
          <div className="gains-b" style={{ ...lightCard, marginTop: 14 }}>
            <Grain id="grain-delays" opacity={0.06} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 15, color: 'var(--teal)', marginBottom: 8 }}>Fewer late payments</div>
              <span style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 'clamp(44px, 4.6vw, 62px)', lineHeight: 1, letterSpacing: '-0.035em', color: '#15EAAD', display: 'block', marginBottom: 10 }}>↓40%</span>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 13, color: 'rgba(7,59,76,0.65)', lineHeight: 1.55, marginBottom: 24 }}>When tenants pay by card, they pay on time.</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 5 }}>
                {calDots.map((_, i) => (
                  <div key={i} className="cal-dot" style={{ height: 14, borderRadius: 4, background: 'rgba(7,59,76,0.09)', animationName: 'dot-on', animationDuration: '5.5s', animationTimingFunction: 'ease-in-out', animationDelay: `${(i * 0.16).toFixed(2)}s`, animationIterationCount: 'infinite' } as React.CSSProperties} />
                ))}
              </div>
            </div>
          </div>

          {/* ══ COSTS CARD (light) ══ */}
          <div className="gains-c" style={{ ...lightCard, marginTop: 14 }}>
            <Grain id="grain-admin" opacity={0.06} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 15, color: 'var(--teal)', marginBottom: 8 }}>Less admin overhead</div>
              <span style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 'clamp(44px, 4.6vw, 62px)', lineHeight: 1, letterSpacing: '-0.035em', color: '#15EAAD', display: 'block', marginBottom: 10 }}>↓30%</span>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 13, color: 'rgba(7,59,76,0.65)', lineHeight: 1.55, marginBottom: 24 }}>Automated collection, statements, reconciliation.</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { task: 'Chase rent payment',     delay: '0s' },
                  { task: 'Send monthly statement', delay: '0.9s' },
                  { task: 'Reconcile transfers',    delay: '1.8s' },
                ].map((item) => (
                  <div key={item.task} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className="task-anim" style={{ width: 18, height: 18, borderRadius: 5, flexShrink: 0, border: '1.5px solid rgba(21,234,173,0.4)', background: 'rgba(21,234,173,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', animationName: 'tick-pop', animationDuration: '6s', animationTimingFunction: 'ease-in-out', animationDelay: item.delay, animationIterationCount: 'infinite' } as React.CSSProperties}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#15EAAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div style={{ position: 'relative', flex: 1 }}>
                      <span className="task-anim" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 13, animationName: 'task-fade', animationDuration: '6s', animationTimingFunction: 'ease-in-out', animationDelay: item.delay, animationIterationCount: 'infinite' } as React.CSSProperties}>{item.task}</span>
                      <div className="task-strike" style={{ position: 'absolute', top: '50%', left: 0, height: 1, background: 'rgba(7,59,76,0.25)', animationName: 'strike-grow', animationDuration: '6s', animationTimingFunction: 'ease-in-out', animationDelay: item.delay, animationIterationCount: 'infinite' } as React.CSSProperties} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══ YIELD CARD (dark) ══ */}
          <div className="gains-yield" style={{ ...darkCard, marginTop: 14 }}>
            <Grain id="grain-yield" opacity={0.1} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 15, color: 'rgba(240,250,250,0.55)', marginBottom: 8 }}>Higher portfolio yield</div>
              <span style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 'clamp(44px, 4.6vw, 62px)', lineHeight: 1, letterSpacing: '-0.035em', color: '#15EAAD', display: 'block', marginBottom: 10 }}>↑5%</span>
              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55, marginBottom: 20 }}>More on-time payments, fewer vacancies, new income streams.</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 48 }}>
                {[
                  { h: '35%', cls: 'bar-1' },
                  { h: '50%', cls: 'bar-2' },
                  { h: '62%', cls: 'bar-3' },
                  { h: '74%', cls: 'bar-4' },
                  { h: '88%', cls: 'bar-5' },
                  { h: '100%', cls: 'bar-6' },
                ].map((bar, i) => (
                  <div key={i} className={bar.cls} style={{ flex: 1, height: bar.h, background: 'linear-gradient(to top, #15EAAD, rgba(21,234,173,0.25))', borderRadius: '3px 3px 2px 2px' }} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
