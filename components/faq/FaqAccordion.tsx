'use client';

import { useState } from 'react';

function slug(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const sections = [
  {
    heading: 'How it works',
    faqs: [
      {
        q: 'What is Tern?',
        a: "Tern lets UAE residents pay rent with their credit card, earn rewards on every payment, and pay zero fees. Your landlord receives exactly what they're owed — nothing changes for them.",
      },
      {
        q: 'Who can use Tern?',
        a: 'Anyone renting in Dubai, Abu Dhabi, or Sharjah with a valid tenancy contract and a UAE-issued Visa or Mastercard credit card.',
      },
      {
        q: 'Does my payment frequency matter?',
        a: "No. Tern supports monthly, quarterly, semi-annual, and annual payment schedules. We match your tenancy contract — we don't change it.",
      },
      {
        q: 'Does Tern work for commercial leases and office space?',
        a: 'Not currently. Tern supports residential tenancies only.',
      },
      {
        q: 'What about short-term rentals or holiday homes?',
        a: "Not currently — Tern requires a registered tenancy contract (Ejari or Tawtheeq). Short-term and holiday home arrangements aren't supported.",
      },
      {
        q: "Why didn't anyone do this sooner?",
        a: "We asked the same question. Credit card fees made rent payments commercially unviable for most platforms. We built the infrastructure to absorb them — which is why it took a fintech, not a property company, to figure it out.",
      },
    ],
  },
  {
    heading: 'Fees',
    faqs: [
      {
        q: 'What does it cost me?',
        a: "Nothing. Tern is free for tenants. No processing fees, no hidden charges. If your rent is 5,000 AED, you pay 5,000 AED.",
      },
      {
        q: 'What does it cost my landlord?',
        a: 'Nothing. Landlords pay zero fees.',
      },
      {
        q: "How does Tern make money if it's free?",
        a: "We earn through merchant partnerships and our payments infrastructure — not from fees on your rent.",
      },
      {
        q: 'No seriously, is there a catch?',
        a: "Genuinely, no. Your landlord gets paid on time. You earn rewards you were always entitled to. We cover the fees. The only thing that changes is your rent starts working for you.",
      },
    ],
  },
  {
    heading: 'Your rewards',
    faqs: [
      {
        q: 'What rewards do I actually earn?',
        a: 'Two layers. Your credit card pays its normal rewards — miles, points, or cashback — exactly as it would on any other purchase. On top of that, you earn Tern points: 1 point for every 7 AED in rent.',
      },
      {
        q: 'What are Tern points worth?',
        a: 'It depends how you redeem. As digital vouchers with 200+ merchants, 1 point ≈ 0.07 AED. As rent cashback, 1 point = 0.05 AED. Total reward value typically lands between 1% and 1.5% of your rent.',
      },
      {
        q: 'What can I redeem points for?',
        a: 'Digital vouchers with 200+ merchants, cashback against your next rent payment, or points transfers to Air Arabia.',
      },
      {
        q: "Do my bank's credit card rewards still apply?",
        a: 'Yes — completely separate from Tern points. Your bank pays its normal rewards on the transaction. Tern points are on top of that.',
      },
      {
        q: 'Will my bank definitely give me rewards on a rent payment?',
        a: "Tern processes payments as a normal purchase, not a cash advance, so your bank's standard rewards apply. The exact reward category your bank assigns depends on their internal setup — most UAE banks treat it as a standard spend, but if you want certainty, a quick call to your bank will confirm it.",
      },
      {
        q: 'What happens to my points if I move or my tenancy ends?',
        a: "Points don't disappear immediately. You have 6 months after your tenancy ends to redeem them. If you start a new tenancy on Tern within that window, the clock resets.",
      },
    ],
  },
  {
    heading: 'Your landlord',
    faqs: [
      {
        q: 'Does my landlord need to approve this?',
        a: "No. If you have a valid tenancy contract, you can set up Tern independently. Your landlord doesn't need to do anything.",
      },
      {
        q: 'What changes for my landlord?',
        a: 'Nothing. They receive the same payment, the same amount, on time. The only thing that changes is how you pay.',
      },
      {
        q: 'Will my landlord be charged anything?',
        a: 'No.',
      },
      {
        q: 'I already gave my landlord post-dated cheques — can I still use Tern?',
        a: "It depends on your landlord. Some landlords can void or replace the cheques and switch you to Tern mid-tenancy. For others, the switch happens at renewal. Either way, reach out and we'll tell you exactly where you stand.",
      },
      {
        q: "Do I need my landlord's bank details to sign up?",
        a: "Yes — you'll need the IBAN your landlord uses to receive rent. The name on the IBAN needs to match your tenancy contract. If you don't have it, your property manager or leasing agent will.",
      },
    ],
  },
  {
    heading: 'Getting started',
    faqs: [
      {
        q: 'How long does signup take?',
        a: 'Under 2 minutes. Sign in with UAE Pass, upload your Ejari, add your card. Done.',
      },
      {
        q: 'What do I need to sign up?',
        a: "UAE Pass, your Ejari, and your landlord's IBAN. If your Ejari hasn't been issued yet, reach out — we'll work through it.",
      },
      {
        q: 'Which cards do you accept?',
        a: "All UAE-issued Visa and Mastercard credit cards. We don't currently support international cards, debit cards, or Amex.",
      },
      {
        q: 'When exactly does Tern charge my card?',
        a: "At 9:30 AM on your scheduled rent due date. You'll receive reminders 7, 5, 3, and 1 day before so you can make sure your card has the available limit.",
      },
      {
        q: "What if my card limit isn't high enough to cover the rent?",
        a: "You'll get reminders ahead of every payment. If your limit is tight, most UAE banks can increase your daily or per-transaction limit on the spot — a quick call before the due date usually sorts it. You can also top up your card balance in advance if needed.",
      },
      {
        q: 'What if my payment fails?',
        a: "Tern retries after 48 hours. You'll be notified, and your landlord is informed — but late fees or penalties are governed by your tenancy agreement, not Tern.",
      },
    ],
  },
  {
    heading: 'Trust & security',
    faqs: [
      {
        q: 'How do I know Tern is legitimate?',
        a: "Tern is registered with Dubai's Department of Economy and Tourism (License 1376768) and operates under the Dubai Land Department's REES program. Payments are processed by Paymob, licensed by the UAE Central Bank. We don't store your card data — Paymob does, under PCI DSS compliance.",
      },
      {
        q: 'Is my payment treated as a cash advance?',
        a: "No. It's processed as a normal purchase — so your bank's rewards apply and there are no cash advance fees.",
      },
    ],
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
      {sections.map((section) => (
        <div key={section.heading} className="mb-14">
          <h2
            id={slug(section.heading)}
            className="font-semibold uppercase mb-6"
            style={{ color: '#0B8A62', letterSpacing: '0.1em', fontSize: 13 }}
          >
            {section.heading}
          </h2>

          {section.faqs.map((faq, i) => {
            const id = slug(faq.q);
            const isOpen = open === `${section.heading}-${i}`;
            return (
              <div key={id} id={id} style={{ borderTop: '1px solid rgba(7,59,76,0.15)' }}>
                <button
                  className="w-full flex items-center justify-between py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : `${section.heading}-${i}`)}
                >
                  <span
                    className="text-base font-semibold pr-6"
                    style={{ color: 'var(--teal)' }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="text-xl flex-shrink-0 font-light"
                    style={{ color: 'var(--mint)', textShadow: '0 0 12px rgba(21,234,173,0.5)' }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 1000 : 0 }}
                >
                  <p
                    className="pb-5 text-sm leading-relaxed"
                    style={{ color: 'rgba(7,59,76,0.65)' }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}

          <div style={{ borderTop: '1px solid rgba(7,59,76,0.15)' }} />
        </div>
      ))}
    </div>
  );
}
