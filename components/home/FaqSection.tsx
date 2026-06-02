'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'Is it really 0% fees?',
    a: 'Yes. Tern covers 100% of the credit card processing fee. You pay your rent amount and nothing more. There are no hidden charges, no subscription fees, and no transaction fees.',
  },
  {
    q: 'What about my security cheques?',
    a: 'Security cheques remain unchanged. Tern only handles your regular rent payments. Your security deposit arrangement stays exactly as agreed with your landlord.',
  },
  {
    q: 'Is my data secure?',
    a: 'Tern is regulated by the UAE Central Bank as a licensed Payment Service Provider and is a member of the DLD REES program. Your data is encrypted at rest and in transit and never shared with third parties without your consent.',
  },
  {
    q: 'Can I use any credit card?',
    a: 'You can use any UAE-issued credit card. This includes cards from Emirates NBD, ADCB, FAB, ENBD, HSBC, Citibank, and all other major UAE banks. International cards are not supported at this time.',
  },
  {
    q: 'What happens if my rent payment is late?',
    a: 'Late payments are your responsibility to your landlord as per your tenancy contract. Tern processes payments on the date you schedule — ensure your card has sufficient credit before the payment date.',
  },
  {
    q: 'How is Tern different from my current property management app?',
    a: 'Most property management apps handle maintenance requests and communication. Tern is a payment platform. We replace the cheque or bank transfer with a credit card payment, so you earn rewards on your largest monthly expense.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: 'var(--bg-faq)' }}>
      <div
        className="mx-auto px-6 md:px-12 py-24"
        style={{ maxWidth: 1200 }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ color: 'var(--text-on-dark)' }}
        >
          Questions.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderTop: '1px solid var(--border-on-dark)' }}
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="text-base font-bold pr-4"
                  style={{ color: 'var(--text-on-dark)' }}
                >
                  {faq.q}
                </span>
                <span
                  className="text-xl flex-shrink-0 font-light"
                  style={{ color: 'var(--teal)', textShadow: '0 0 12px rgba(21,234,173,0.5)' }}
                >
                  {open === i ? '−' : '+'}
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: open === i ? 400 : 0,
                }}
              >
                <p
                  className="pb-5 text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted-on-dark)' }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/resources" className="btn-cta-sm">
            See all questions
          </Link>
        </div>
      </div>
    </section>
  );
}
