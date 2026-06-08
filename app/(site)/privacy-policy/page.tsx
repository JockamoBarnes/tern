export const metadata = {
  title: {
    absolute: 'Privacy Policy | Tern',
  },
  description:
    "Tern's privacy policy — how we collect, use, and protect your personal data in accordance with UAE data protection regulations.",
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
            Last updated: August 8th, 2025
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
      <p style={pStyle}>
        Welcome to Tern Rewards! Your privacy is important to Us. This online privacy policy (&ldquo;Privacy Policy&rdquo;) together with the documents and policies incorporated and referenced in the Privacy Policy, including the Terms and Conditions (the &ldquo;Terms&rdquo;), shall constitute an agreement (&ldquo;Agreement&rdquo;) between You (&ldquo;You&rdquo;, &ldquo;Your&rdquo;, &ldquo;Yourself&rdquo;), and &ldquo;Tern Rewards&rdquo; along with its affiliates, successors, and assigns (&ldquo;Tern&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo;, or &ldquo;Our&rdquo;).
      </p>
      <p style={pStyle}>
        By visiting Our Website, Our mobile application, and any application and technology We make available (collectively the &ldquo;Platform&rdquo;) or any other Service offered on the Platform, whether as a Visitor or User, You indicate that You accept this Policy and agree to abide by its terms. If You do not agree to this Policy, please do not access Our Platform.
      </p>
      <p style={pStyle}>
        As part of its commitment to privacy, Tern respects all rules and provisions stated in the UAE Data Protection Laws. We reserve the right to modify Our Privacy Policy at any time to ensure compliance with applicable laws and regulations.
      </p>
      <p style={pStyle}>
        It is Your responsibility to check Our Privacy Policy periodically for changes. Any alterations will be conveyed to Users through email notifications or Platform announcements and will be effective immediately upon posting. Your continued use of Our Services after any changes signifies Your acceptance of the updated terms.
      </p>

      <h2 style={h2Style}>1. Type of Personal Data We Collect</h2>
      <p style={pStyle}>When You visit Our Platform, We may collect personal information from or about You. In particular, We collect information that You provide when You:</p>
      <ol style={{ paddingLeft: 20, marginBottom: 16 }}>
        {[
          'fill in any forms, including contact forms, registration forms, order forms, or payment forms;',
          'register to use the Platform, including the Personal Data (as defined below);',
          'open an account or use any of Our Platform, including information about Your device, location, and usage data;',
          'speak with a member of Our customer support team including call recordings and transcripts;',
          'contact Us for any other reason including correspondence and feedback.',
        ].map((item, i) => (
          <li key={i} style={{ ...liStyle, marginBottom: 8 }}>({String.fromCharCode(97 + i)}) {item}</li>
        ))}
      </ol>
      <p style={pStyle}>The User&apos;s Personal Data may include but is not limited to:</p>
      <ol style={{ paddingLeft: 20, marginBottom: 16 }}>
        {[
          ['Identity Data', 'includes name, nickname, age, gender, nationality, marital status, language, education and job.'],
          ['Contact Data', 'includes country of residence, address, email address and telephone numbers.'],
          ['Financial Data', 'includes bank account and payment card details (collected by our Payment Service Provider under UAE Central Bank regulation).'],
          ['Transaction Data', 'includes details of services you have purchased from us.'],
          ['Rent Data', 'includes the information related to your rent of the Tenancy Agreement, including without limitation, the lease ID, rent amount, and due dates for the payments.'],
          ['Technical Data', 'includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and other technology on the devices you use to access the Platform.'],
          ['Account Registration Data', 'includes certain information in connection with the account registration process such as whether You registered using any Third Party Services and whether You verified Your email address or phone number.'],
          ['Usage Data', 'includes information about how You use Our Platform.'],
          ['Login Data', 'includes information regarding logins and activity conducted during that log in such as when You log in and the number of messages received or sent through the Platform during that log in.'],
          ['Marketing and Communications Data', 'includes your preferences in receiving marketing from us and our third parties and your communication preferences.'],
        ].map(([label, desc], i) => (
          <li key={i} style={{ ...liStyle, listStyle: 'decimal' }}><span style={strongStyle}>{label}</span>: {desc}</li>
        ))}
      </ol>

      <h2 style={h2Style}>2. Cookies and Similar Technologies</h2>
      <p style={pStyle}>
        A browser cookie is a small piece of data stored on Your device to help websites remember things about You. Like most online services, We may use Cookies and other technologies such as web beacons and web storage to collect information about Your activity, browser, and device.
      </p>
      <p style={pStyle}>The Cookies We use generally fall into one of the following categories:</p>
      <ol style={{ paddingLeft: 20, marginBottom: 16 }}>
        {[
          ['Preferences', 'We use these Cookies to remember Your settings and preferences (e.g. language).'],
          ['Security', 'We use these Cookies to help identify and prevent security risks.'],
          ['Performance', 'We use these Cookies to collect information about how You interact with Our Platform and to help Us improve them.'],
          ['Analytics', 'We use these Cookies to help Us improve Our Platform and understand which features are most popular.'],
          ['Advertising', 'We use these Cookies to deliver advertisements, make them more relevant, and track the efficiency of Our advertising campaigns.'],
        ].map(([label, desc], i) => (
          <li key={i} style={{ ...liStyle, listStyle: 'decimal' }}><span style={strongStyle}>{label}</span>: {desc}</li>
        ))}
      </ol>
      <p style={pStyle}>
        You can choose to remove or reject browser Cookies through the settings on Your browser or device. Keep in mind that removing or rejecting Cookies could affect the availability and functionality of Our Platform.
      </p>

      <h2 style={h2Style}>3. Use of Personal Data</h2>
      <p style={pStyle}>We use the information discussed above in a number of ways, including but not limited to:</p>
      <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
        {[
          'processing applications and transactions;',
          'accessing Our Platform and receiving Services;',
          'verifying Your identity;',
          'preventing fraud and enhancing the security of Your account or Our Platform;',
          'responding to Your requests and communicating with You;',
          'managing Your preferences;',
          'informing You of different Services offerings;',
          'performing analytics concerning Your use of Our Platform;',
          'providing You with tailored content and marketing messages;',
          'operating, evaluating, and improving Our business;',
          'sending You information about Our Platform, or promotional marketing communication;',
          'administering Your account;',
          'complying with and enforcing applicable legal requirements, relevant industry standards, contractual obligations, and Our policies;',
          'sharing limited payment updates to your landlord.',
        ].map((item, i) => (
          <li key={i} style={{ ...liStyle, listStyle: 'disc' }}>{item}</li>
        ))}
      </ul>
      <p style={pStyle}>
        If You no longer wish to receive any communications from Tern, You can opt-out by following the instructions in the e-mails You receive or by contacting Us at{' '}
        <a href="mailto:support@ternrewards.com" style={linkStyle}>support@ternrewards.com</a>.
      </p>

      <h2 style={h2Style}>4. Sharing of Your Information</h2>
      <p style={pStyle}>
        We are committed to protecting Your privacy and will not disclose Your Personal Data to any third-party, unless required by law or as explicitly stated in this Privacy Policy. We will not rent or sell or otherwise share Your information with any third parties outside Tern without Your consent, except as noted in this Privacy Policy.
      </p>
      <p style={pStyle}><span style={strongStyle}>Third parties with whom we may share your information:</span></p>
      <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
        <li style={{ ...liStyle, listStyle: 'disc' }}><span style={strongStyle}>With Our corporate entities.</span> We may share information with entities within Tern&apos;s family companies, including any holding company, group company, and subsidiary.</li>
        <li style={{ ...liStyle, listStyle: 'disc' }}><span style={strongStyle}>With third parties.</span> We may share Your information with service providers and partners; with third parties for legal reasons; or with marketing companies where necessary to comply with any valid legal process, governmental request, or applicable law.</li>
        <li style={{ ...liStyle, listStyle: 'disc' }}><span style={strongStyle}>With the landlord.</span> Tern may share only the following data with the landlord or their authorized representative: payment status updates (paid, failed, pending); summary logs of payment activity; external payment confirmations if linked to rewards issuance; and aggregated, anonymized reports on tenant reward activity (if requested and permitted). No personally identifiable tenant data shall be shared unless legally required or explicitly consented to by the tenant.</li>
        <li style={{ ...liStyle, listStyle: 'disc' }}><span style={strongStyle}>With third parties as part of a merger or acquisition.</span> If Tern gets involved in a merger, asset sale, financing, liquidation or bankruptcy, or acquisition, We may share Your information with that company before and after the transaction closes.</li>
      </ul>
      <p style={pStyle}>
        All credit/debit card details and personally identifiable information will not be stored, sold, shared, rented, or leased to any third parties. Tern follows the industry&apos;s standards to protect Your details during and after transmission, but no method of electronic transmission or storage is 100% secure.
      </p>

      <h2 style={h2Style}>5. Storage and Processing</h2>
      <p style={pStyle}>
        To the fullest extent permitted by law, Your information collected through the Platform may be stored and processed in any country in which Tern maintains facilities. We will retain Your information as necessary to provide You with the Platform, comply with Our legal obligations, resolve disputes, and enforce Our agreements.
      </p>
      <p style={pStyle}>
        We use commercially reasonable safeguards to help keep the information collected through the Platform secure. However, Tern cannot ensure the security of any information You transmit to Tern or guarantee that information on the Platform may not be accessed, disclosed, altered, or destroyed.
      </p>
      <p style={pStyle}>
        You are responsible for maintaining the secrecy of Your unique password and account information, and for controlling access to emails between You and Tern, at all times.
      </p>

      <h2 style={h2Style}>6. Data Rights</h2>
      <p style={pStyle}>As a data subject, You are entitled to exercise the following rights, at any time:</p>
      <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
        {[
          ['Right to be informed', 'To be informed about how Your Personal Data is collected and processed and its purposes.'],
          ['Right of Access', 'To obtain confirmation as to the existence of Your Personal Data being processed by Tern Platform, and to access and obtain a copy of such data.'],
          ['Right of rectification', 'To request to update, modify and/or rectify Your Personal Data where it may be inaccurate or incomplete.'],
          ['Right of Erasure', 'To obtain the erasure of Your Personal Data where You feel that the processing is unnecessary or otherwise unlawful.'],
          ['Right to object', 'You have the right to object to the processing of Your Personal Data based on relevant grounds related to Your particular situation.'],
          ['Right to restriction of processing', 'Where You feel that the Personal Data processed is inaccurate, or that the processing is unnecessary or unlawful.'],
          ['Right to withdraw', 'Your consent to processing (for marketing and profiling), where Your consent serves as the legal basis for processing.'],
          ['Right of portability', 'You have the right to obtain a copy of the Personal Data You provided to Tern Platform.'],
        ].map(([label, desc], i) => (
          <li key={i} style={{ ...liStyle, listStyle: 'disc' }}><span style={strongStyle}>{label}.</span> {desc}</li>
        ))}
      </ul>

      <h2 style={h2Style}>7. Security Measures</h2>
      <p style={pStyle}>
        We have implemented and will maintain appropriate technical and organizational measures, including robust security protocols such as encryption of sensitive data, utilization of secure servers, and regular security audits, to safeguard the Personal Data that We control from unauthorized or unlawful processing, accidental loss, destruction, damage, alteration, or disclosure.
      </p>
      <p style={pStyle}>
        You are solely responsible for maintaining the confidentiality of Your account details, including Your passwords. If You have any concerns about the security of Your account, You shall inform Us immediately.
      </p>

      <h2 style={h2Style}>8. Mobile Push Notifications/Alerts</h2>
      <p style={pStyle}>
        We may send push notifications or alerts to Your mobile device after getting Your consent to do so. You can deactivate these messages at any time by changing the notification settings on Your mobile device.
      </p>

      <h2 style={h2Style}>9. Your Opinion Matters to Us</h2>
      <p style={pStyle}>
        If You have any questions or concerns about this Policy or Our privacy practice, You shall contact Us directly at:{' '}
        <a href="mailto:support@ternrewards.com" style={linkStyle}>support@ternrewards.com</a>.
      </p>

      <h2 style={h2Style}>10. Payments Details</h2>
      <p style={pStyle}>
        In case of Services requiring payment, We request credit/debit card or other payment account information, which will be used solely for processing payments. Your purchase transaction data is stored only as long as is necessary to complete Your purchase transaction.
      </p>
      <p style={pStyle}>
        Where necessary for processing future payments, and subject to Your prior consent, Your financial information will be stored in encrypted form on secure servers of Our payment gateway service provider Paymob, which is beholden to treating Your Personal Information per its Policy. All direct payment gateways adhere to the latest security standards managed by the PCI Security Standards Council.
      </p>

      <h2 style={h2Style}>11. Email Marketing</h2>
      <p style={pStyle}>
        We offer electronic newsletters to which You may voluntarily subscribe at any time. We are committed to keeping Your e-mail address confidential and will not disclose Your email address to any third parties except as allowed in the storage and processing section or for the purposes of utilizing a third-party provider to send such emails.
      </p>
      <p style={pStyle}>
        You may choose to stop receiving Our newsletter or marketing emails by following the unsubscribe instructions included in these emails or by contacting Us. However, You will continue to receive essential transactional emails.
      </p>

      <h2 style={h2Style}>12. Surveys</h2>
      <p style={pStyle}>
        We may request that You complete a survey to allow us to have a better understanding of Our Services. If You choose to participate in any optional survey, We may collect demographic information about You. By participating in any survey, You consent to Our collection and use of the information You provide in accordance with this Privacy Policy.
      </p>

      <h2 style={h2Style}>13. Children Privacy</h2>
      <p style={pStyle}>
        Tern does not knowingly collect or solicit any information from anyone under the age of eighteen (18) without parental supervision or knowingly allow such persons to register on the Platform. The Platform and its content are not directed at children under the age of eighteen (18) without parental supervision.
      </p>

      <h2 style={h2Style}>14. Confidentiality and Security of Personal Data</h2>
      <p style={pStyle}>
        Except as otherwise provided in this Privacy Policy, We will keep Your Personal Data private and will not share it with third parties, unless such disclosure is necessary to comply with a court order or other legal process, or to protect Our rights or property.
      </p>
      <p style={pStyle}>
        Should You wish to retrieve Your Personal Data, please get in touch by emailing Us at{' '}
        <a href="mailto:support@ternrewards.com" style={linkStyle}>support@ternrewards.com</a>.
      </p>

      <h2 style={h2Style}>15. Other Websites and Services</h2>
      <p style={pStyle}>
        We are not responsible for the practices employed by any websites or services linked to or from Our Platform, including the information or content contained within them. When You use a link to go from Our Platform to another website or service, Our Privacy Policy does not apply to those third-party websites or services.
      </p>

      <h2 style={h2Style}>16. Limitation to Our Privacy Policy</h2>
      <p style={pStyle}>
        Our Platform might contain links to other websites. We are not responsible for such websites&apos; privacy practices or content. Please understand that any information disclosed in those areas becomes subject to the privacy policies and practices of those sites.
      </p>

      <h2 style={h2Style}>17. Account Closure</h2>
      <p style={pStyle}>
        Your Personal Data will generally stop being available to anyone on Our Platform within: (a) twenty-four (24) hours if You choose to close Your Tern account; or (b) twelve (12) months of account closure. We usually delete closed account information, except where required to comply with Our legal obligations, resolve disputes, maintain security, or avoid fraud and abuse.
      </p>

      <h2 style={h2Style}>18. How to Contact Us</h2>
      <p style={pStyle}>
        If You have any questions or comments about this Privacy Policy or the Platform, You may contact Us at{' '}
        <a href="mailto:support@ternrewards.com" style={linkStyle}>support@ternrewards.com</a>.
      </p>
    </div>
  );
}
