export const metadata = {
  title: 'Terms & Conditions — Tern',
  description: 'The terms governing your use of the Tern platform.',
};

export default function TermsConditionsPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ background: 'var(--teal)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.14) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,182,206,0.1) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div
          className="mx-auto px-6 md:px-12 pt-28 md:pt-40 pb-16 md:pb-20"
          style={{ maxWidth: 1200, position: 'relative', zIndex: 1 }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-unbounded)',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              background: 'var(--grad-head)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 24,
            }}
          >
            Terms &amp; Conditions
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-manrope)',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.65,
              color: 'rgba(238,247,248,0.65)',
              maxWidth: 520,
              margin: 0,
            }}
          >
            Please read these terms carefully before using the Tern platform.
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 85%, #D0FBEF 100%)' }}>
        <div
          className="mx-auto px-6 md:px-12 py-16 md:py-20"
          style={{ maxWidth: 800 }}
        >
          <LegalBody />
        </div>
      </section>
    </>
  );
}

function LegalBody() {
  const h2Style: React.CSSProperties = {
    fontFamily: 'var(--font-unbounded)',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 1.3,
    color: 'var(--teal)',
    marginTop: 48,
    marginBottom: 16,
  };
  const pStyle: React.CSSProperties = {
    fontFamily: 'var(--font-manrope)',
    fontSize: 15,
    lineHeight: 1.75,
    color: 'rgba(7,59,76,0.8)',
    marginBottom: 16,
  };
  const liStyle: React.CSSProperties = {
    fontFamily: 'var(--font-manrope)',
    fontSize: 15,
    lineHeight: 1.75,
    color: 'rgba(7,59,76,0.8)',
    marginBottom: 8,
  };
  const strongStyle: React.CSSProperties = {
    color: 'var(--teal)',
    fontWeight: 600,
  };
  const linkStyle: React.CSSProperties = {
    color: 'var(--teal)',
    textDecorationColor: 'var(--mint)',
    textUnderlineOffset: 3,
  };

  return (
    <div>
      <h2 style={h2Style}>1. Overview</h2>
      <p style={pStyle}>
        The agreement between users and Tern encompasses use of the website, mobile application, and all related technology platforms. Users accept these terms by accessing the platform; disagreement requires non-use.
      </p>
      <p style={pStyle}>
        Tern reserves modification rights with periodic updates. Continued access after changes indicates acceptance. Users waive rights to judge-decided disputes and class action participation through binding individual arbitration.
      </p>

      <h2 style={h2Style}>2. Definitions</h2>
      <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
        {[
          ['Service(s)', 'Features and functionality including rent payment, rewards programs, account management, identity verification, and support.'],
          ['Tenant(s)', 'Individuals legally occupying residential or commercial property under valid tenancy agreements who use the platform.'],
          ['Tenancy Agreement', 'Valid binding agreement between landlord and tenant covering rental amounts, payment terms, duration, and obligations.'],
          ['User(s)', 'Any individual accessing or using the platform.'],
          ['Visitor(s)', 'Internet users visiting the platform.'],
        ].map(([label, desc], i) => (
          <li key={i} style={{ ...liStyle, listStyle: 'disc' }}><span style={strongStyle}>{label}:</span> {desc}</li>
        ))}
      </ul>

      <h2 style={h2Style}>3. Using the Platform on Behalf of Another</h2>
      <p style={pStyle}>
        Individuals using the platform for others must be duly authorized and empowered to accept terms on their behalf and represent they possess authorization to use it for that person.
      </p>

      <h2 style={h2Style}>4. The Platform Description</h2>
      <p style={pStyle}>
        Operating under TERN APP TECHNOLOGIES CO. L.L.C, the platform enables tenants to pay rent via credit cards while earning double rewards, transforming the tenant-landlord relationship.
      </p>

      <h2 style={h2Style}>5. What You Represent</h2>
      <p style={pStyle}>
        Users represent they are UAE residents aged 18+, possess active tenancy agreements, hold valid UAE IDs, and have never been suspended. They warrant providing accurate information and confirm the platform is for personal, non-commercial use only.
      </p>
      <p style={pStyle}>
        Business accounts and commercial use — including rent collection or rewards management on behalf of third parties or organizations — are prohibited.
      </p>

      <h2 style={h2Style}>6. Use of the Platform</h2>
      <p style={pStyle}>
        Users cannot employ the platform for illegal purposes, transmit destructive code, or reproduce or exploit content without permission. Profile creation requires: first name, last name, email, password, profile picture, Emirates ID, phone number, and address.
      </p>
      <p style={pStyle}>Users must provide the following categories of data:</p>
      <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
        {[
          ['Identity Data', 'Name, age, gender, nationality, education, job.'],
          ['Contact Data', 'Address, email, phone numbers.'],
          ['Financial Data', 'Bank and payment card details.'],
          ['Transaction Data', 'Service purchase details.'],
          ['Rent Data', 'Lease information, amounts, due dates.'],
          ['Technical Data', 'IP address, browser information, location.'],
          ['Account Registration Data', 'Third-party service connections.'],
          ['Usage Data', 'Platform interaction patterns.'],
          ['Login Data', 'Access timing and activity.'],
          ['Marketing Data', 'Communication preferences.'],
        ].map(([label, desc], i) => (
          <li key={i} style={{ ...liStyle, listStyle: 'disc' }}><span style={strongStyle}>{label}:</span> {desc}</li>
        ))}
      </ul>

      <h2 style={h2Style}>7. Account Creation and Login Credentials</h2>
      <p style={pStyle}>
        <span style={strongStyle}>Application Process:</span> Membership requires completing online registration and uploading an active tenancy agreement for eligibility verification.
      </p>
      <p style={pStyle}>
        <span style={strongStyle}>Verification:</span> Tern reserves the right to verify provided information accuracy; inaccurate details may result in suspension without notice.
      </p>
      <p style={pStyle}>
        Users are solely responsible for protecting login credentials and accept liability for all account activities, authorized or not. Lost or stolen credentials must be reported immediately to{' '}
        <a href="mailto:support@ternrewards.com" style={linkStyle}>support@ternrewards.com</a>.
      </p>
      <p style={pStyle}>
        <span style={strongStyle}>Suspension/Termination:</span> Tern may suspend or terminate accounts without notice for term violations, suspected fraud, or misuse.
      </p>

      <h2 style={h2Style}>8. Prohibited Uses</h2>
      <p style={pStyle}>Platform use is prohibited for:</p>
      <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
        {[
          'Illegal or unlawful purposes',
          'Encouraging unlawful activities',
          'Violating laws or regulations',
          'Stealing intellectual property without permission',
          'Harassment, abuse, or discrimination based on protected characteristics',
          'False or misleading information',
          'Uploading malicious code',
          'Tracking others\' personal information without consent',
          'Spamming, phishing, or fraudulent activities',
          'Obscene or immoral purposes',
          'Circumventing platform security features',
          'Impersonation or misrepresenting affiliation',
          'Invading privacy or posting others\' details without permission',
          'Sales and marketing purposes',
          'Manipulating identifiers to disguise content origin',
          'Interfering with other users\' real-time exchanges',
        ].map((item, i) => (
          <li key={i} style={{ ...liStyle, listStyle: 'disc' }}>{item}</li>
        ))}
      </ul>

      <h2 style={h2Style}>9. Accuracy, Completeness, and Timeliness of Information</h2>
      <p style={pStyle}>
        Tern bears no responsibility for platform information accuracy, completeness, or currency. Users rely on materials at their own risk. Historical information is provided for reference only. Tern reserves modification rights without update obligations and may limit service access geographically.
      </p>

      <h2 style={h2Style}>10. Rewards Program</h2>
      <p style={pStyle}>
        <span style={strongStyle}>Eligible Transactions:</span> Users earn points on qualifying transactions including rent payments, retail purchases, dining, and travel.
      </p>
      <p style={pStyle}>
        <span style={strongStyle}>Points Accrual Rates:</span> Earning rates vary by transaction type and merchant; Tern reserves amendment rights without notice.
      </p>
      <p style={pStyle}>
        <span style={strongStyle}>Exclusions:</span> Cash advances, fees, and non-qualifying purchases are excluded from earning points.
      </p>
      <p style={pStyle}>
        <span style={strongStyle}>Termination of Participation:</span> Tern may suspend or terminate rewards program participation without notice for term breaches, suspected fraud, misuse, or at discretion.
      </p>

      <h2 style={h2Style}>11. Redeeming Points</h2>
      <p style={pStyle}>
        <span style={strongStyle}>Redemption Options:</span> Points redeem for travel, merchandise, gift cards, or statement credits; availability varies at Tern&apos;s discretion.
      </p>
      <p style={pStyle}>
        <span style={strongStyle}>Redemption Process:</span> Only the official website and app allow redemptions, subject to availability and additional terms.
      </p>
      <p style={pStyle}>
        <span style={strongStyle}>Minimum Thresholds:</span> Some rewards require minimum points; thresholds are disclosed on the platform.
      </p>
      <p style={pStyle}>
        <span style={strongStyle}>Expiration:</span> Points expire if unredeemed within specified periods; users receive expiration notifications.
      </p>

      <h2 style={h2Style}>12. Payment and Billing Information</h2>
      <p style={pStyle}>
        <span style={strongStyle}>Tenant Payment Authorization:</span> Enrolling in Tern Rewards authorizes Tern and payment service providers to process recurring rent payments from designated payment methods per agreed rent schedules.
      </p>
      <p style={pStyle}>Tenants acknowledge:</p>
      <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
        {[
          'Responsibility for ensuring sufficient funds and valid authorization',
          'Declined payments constitute rent obligation failures unless rectified within notice periods',
          'Electronic payment records may serve as evidence before UAE authorities for rental enforcement',
          'Repeated payment method failures may trigger legal enforcement including execution measures',
          'Tern functions as payment facilitator only, not lender or guarantor',
        ].map((item, i) => (
          <li key={i} style={{ ...liStyle, listStyle: 'disc' }}>{item}</li>
        ))}
      </ul>
      <p style={pStyle}>
        <span style={strongStyle}>Payment Gateway:</span> Users must not use the gateway for money laundering and must comply with all jurisdictional laws and gateway terms. All UAE Visa or MasterCard cards are accepted. UAE Central Bank regulated payment service providers encrypt card details.
      </p>
      <p style={pStyle}>
        <span style={strongStyle}>Fees and Charges:</span> Transaction fees are generally free except for special redemptions. Late payment fees are applied per landlord terms and tenancy agreements. Program fees are communicated clearly to users.
      </p>

      <h2 style={h2Style}>13. Refunds and Defective Products</h2>
      <p style={pStyle}>
        All redemptions, sales, and rent payments are final. Defective products may be reported to{' '}
        <a href="mailto:support@ternrewards.com" style={linkStyle}>support@ternrewards.com</a>{' '}
        within 48 hours for replacement or refund upon verification.
      </p>

      <h2 style={h2Style}>14. Correct Errors</h2>
      <p style={pStyle}>
        Users may contact{' '}
        <a href="mailto:support@ternrewards.com" style={linkStyle}>support@ternrewards.com</a>{' '}
        or use the platform to correct personal data errors. Subscription payment errors should be reported immediately for correction.
      </p>

      <h2 style={h2Style}>15. Third-Party Links</h2>
      <p style={pStyle}>
        The platform includes third-party materials and content. Tern bears no responsibility for third-party content accuracy, endorsement, or liability for transactions. Users should review third-party policies before engaging; complaints should be directed to the third party.
      </p>

      <h2 style={h2Style}>16. Intellectual Property</h2>
      <p style={pStyle}>
        Tern owns or licenses platform materials including design, logos, videos, and graphics. Reproduction is prohibited except per copyright notice. Users cannot rent, lease, lend, sublicense, or transfer platform rights. Commercial data derivation is prohibited.
      </p>
      <p style={pStyle}>
        Regarding user content, users retain ownership while granting Tern an unrestricted, assignable, sub-licensable, royalty-free license for advertising, marketing, and service provision.
      </p>

      <h2 style={h2Style}>17. Warranty Disclaimer for the Platform</h2>
      <p style={pStyle}>
        Platform access and service use are at user sole risk. Tern does not warrant the platform will meet requirements, provide uninterrupted or error-free service, prove accurate or reliable, or that service quality meets expectations. Materials are compiled from various sources for service provision purposes.
      </p>

      <h2 style={h2Style}>18. Limitation of Liability</h2>
      <p style={pStyle}>
        Users waive claims against Tern, affiliates, sponsors, suppliers, partners, and successors regarding platform access or use. Neither Tern nor related parties bear liability for direct, indirect, consequential, or other damages from platform use or inability to use services.
      </p>
      <p style={pStyle}>
        TERN SHALL NOT BE HELD LIABLE FOR USER AND/OR OTHER INFORMATION DETAILS PROVIDED OUTSIDE THE SCOPE OF THE PLATFORM INCLUDING, BUT NOT LIMITED TO, THE TERN WEBSITE AND DIFFERENT CHANNELS OF COMMUNICATION LIKE PHONE AND EMAIL CONVERSATIONS OR EVEN PHYSICAL/LIVE COMMUNICATION.
      </p>

      <h2 style={h2Style}>19. Community Guidelines</h2>
      <p style={pStyle}>Users bear communication responsibility. Prohibited activities include:</p>
      <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
        {[
          'Simultaneous, unattended, or continuous account connections',
          'Libelous or defamatory messages',
          'Indecent, obscene, or pornographic content',
          'Messages violating property rights including copyrighted materials',
          'Threatening, harassing, stalking, or abusing others',
          'Intercepting private communications',
          'Unsolicited email to other users for personal communication, sales, or mass distribution',
          'Uploading protected files without ownership or consent',
          'Deleting author attributions or proprietary designations in uploads',
          'Falsifying software or material origins',
          'Adversely affecting resource availability for others',
          'Falsely claiming employee or agent status',
          'Acting contrary to applicable law',
        ].map((item, i) => (
          <li key={i} style={{ ...liStyle, listStyle: 'disc' }}>{item}</li>
        ))}
      </ul>

      <h2 style={h2Style}>20. Indemnification</h2>
      <p style={pStyle}>
        Users indemnify, defend, and hold harmless Tern and related parties from third-party claims due to term breaches or law violations. Users acknowledge the platform is provided &ldquo;as is&rdquo; without warranties of merchantability, non-infringement, security, fitness, or accuracy. Use is at user risk.
      </p>

      <h2 style={h2Style}>21. Severability</h2>
      <p style={pStyle}>
        If any provision becomes unlawful or unenforceable, it remains enforceable to the fullest permitted extent; severed portions do not affect remaining provisions.
      </p>

      <h2 style={h2Style}>22. Termination</h2>
      <p style={pStyle}>
        Terms remain effective from first use throughout platform usage. Tern reserves the right to terminate access without notice or reason and may block user access. Terminated users retain no rights to stored data or communications.
      </p>
      <p style={pStyle}>
        Users may terminate use anytime by ceasing platform visits. Account administrators may suspend, modify, or terminate user accounts anytime for any reason.
      </p>

      <h2 style={h2Style}>23. Force Majeure</h2>
      <p style={pStyle}>
        Tern bears no liability for delays or failures from unforeseen events beyond reasonable control including acts of God, strikes, war, terrorism, natural disasters, pandemics, governmental action, technology breakdowns, or accidents.
      </p>

      <h2 style={h2Style}>24. Entire Agreement</h2>
      <p style={pStyle}>
        Tern&apos;s failure to enforce rights does not constitute waiver. These Terms and platform policies constitute the entire agreement superseding prior communications, whether oral or written.
      </p>

      <h2 style={h2Style}>25. Terms Modification</h2>
      <p style={pStyle}>
        Tern reserves review and modification rights at any time. Users subject themselves to terms in effect at access moment, except when governmental entities mandate retroactive changes affecting prior requests.
      </p>

      <h2 style={h2Style}>26. Governing Law and Jurisdiction</h2>
      <p style={pStyle}>
        <span style={strongStyle}>Governing Law:</span> This agreement is governed by federal laws of the United Arab Emirates.
      </p>
      <p style={pStyle}>
        <span style={strongStyle}>Dispute Resolution:</span> Disputes arising from these terms resolve through binding arbitration per UAE arbitration laws.
      </p>

      <h2 style={h2Style}>27. Contact Information</h2>
      <p style={pStyle}>
        Users may direct comments or suggestions to{' '}
        <a href="mailto:support@ternrewards.com" style={linkStyle}>support@ternrewards.com</a>
        {' '}or by phone at{' '}
        <a href="tel:+971527888532" style={linkStyle}>+971 52 788 8532</a>.
      </p>
    </div>
  );
}
