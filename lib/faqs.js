// FAQs rendered on /faq/ and emitted as FAQPage JSON-LD for rich results.

export const FAQS = [
  {
    category: 'Product',
    items: [
      {
        q: 'What is Venqora EHR?',
        a: 'Venqora EHR is a cloud-based electronic health record and practice management platform. It combines patient scheduling, clinical documentation, e-prescribing, lab orders and results, medical billing and revenue cycle management (RCM), a patient portal and compliance tooling in a single system — similar in scope to platforms like CareCloud or Oracle Health, with extra operational features such as a live waiting-room token board, built-in real-time patient chat and break-glass emergency access.',
      },
      {
        q: 'Who is Venqora EHR for?',
        a: 'Venqora is built for outpatient clinics, urgent care and emergency centers, specialty practices and multi-location medical groups. Role-based workspaces for administrators, doctors, nurses, receptionists, billers and patients mean every member of the team gets a focused workflow.',
      },
      {
        q: 'What makes Venqora different from other EHR systems?',
        a: 'Beyond the standard EHR feature set, Venqora includes a live token queue board for waiting rooms, real-time appointment-linked chat between patients and care teams, supervised break-glass emergency access, built-in fax transmission, patient data-request workflows, Stripe-powered online payments and a full in-house billing/RCM workspace — capabilities that usually require third-party add-ons.',
      },
      {
        q: 'Is Venqora cloud-based?',
        a: 'Yes. Venqora is a web-based platform accessible from any modern browser, with no local servers to maintain. Updates ship continuously without disrupting your clinic.',
      },
      {
        q: 'Does Venqora include a patient portal?',
        a: 'Yes. Patients can find doctors, book and pay for appointments, complete digital intake forms, chat with their care team in real time, view lab results, manage medications, request refills and sign consents — all from the portal.',
      },
    ],
  },
  {
    category: 'Billing & RCM',
    items: [
      {
        q: 'Does Venqora handle medical billing and claims?',
        a: 'Yes. A dedicated biller workspace covers insurance eligibility verification, charge capture with CPT/ICD code search, electronic claim creation and submission via clearinghouse connectivity, ERA remittance auto-posting, denial management, superbills, invoices and patient payments.',
      },
      {
        q: 'Can Venqora verify insurance eligibility?',
        a: 'Yes. Electronic eligibility checks can run at booking and check-in, and results are stored on the appointment so the front desk, clinicians and billers all see coverage status.',
      },
      {
        q: 'Does Venqora support patient payments?',
        a: 'Yes. Stripe-powered card payments are built in — patients pay copays and balances online through the portal, and receptionists collect copays at check-in with printed receipts.',
      },
    ],
  },
  {
    category: 'Security & Compliance',
    items: [
      {
        q: 'Is Venqora EHR HIPAA compliant?',
        a: 'Yes. Venqora EHR is HIPAA compliant. The platform implements the required safeguards — granular role-based access control, comprehensive audit logging of record access, break-glass emergency access with full oversight, electronic consent management, patient data-request workflows and account security monitoring — and we execute a Business Associate Agreement (BAA) with every customer.',
      },
      {
        q: 'Does Venqora keep an audit trail?',
        a: 'Yes. Every significant action — viewing charts, editing records, emergency access — is written to an audit log so compliance teams can always answer who accessed what and when.',
      },
      {
        q: 'How does Venqora handle emergency access to records?',
        a: 'Through a supervised break-glass workflow: authorized clinicians can access restricted records in an emergency, with each session justified, time-limited and fully audit-logged for review.',
      },
    ],
  },
  {
    category: 'Implementation & Support',
    items: [
      {
        q: 'How long does implementation take?',
        a: 'Most single-location clinics go live in a few weeks: we configure clinics, providers, timetables, fees and catalogs, import your data, train each role and run a supervised go-live. Multi-location networks are rolled out clinic by clinic.',
      },
      {
        q: 'Can you migrate data from my current EHR?',
        a: 'Yes. We migrate patient demographics, appointments, and clinical and billing history from your existing system as part of onboarding. Contact us with your current vendor for a migration plan.',
      },
      {
        q: 'Does Venqora integrate with labs and pharmacies?',
        a: 'Venqora ships with an HL7 diagnostic adapter for lab and imaging results, a Surescripts-ready e-prescribing adapter, a clearinghouse adapter for claims, integrated fax for legacy partners, and a managed pharmacy directory.',
      },
      {
        q: 'How much does Venqora EHR cost?',
        a: 'Pricing is per provider per month and depends on practice size and modules. Visit the pricing page or contact sales for a quote — demos are free.',
      },
    ],
  },
];

export function allFaqItems() {
  return FAQS.flatMap((c) => c.items);
}
