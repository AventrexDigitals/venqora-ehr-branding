// Static fallback blog articles — used when AVENTREX_API_URL is unset (local dev).
// Production content is managed in the Aventrex Digitals admin (scope=product, Venqora EHR).
// Each `body` entry is { h: 'heading' } or { p: 'paragraph' } or { ul: [...] }.

export const POSTS = [
  {
    slug: 'what-is-an-ehr',
    title: 'What Is an EHR? Electronic Health Records Explained (2026 Guide)',
    description:
      'A plain-English guide to electronic health records (EHR): what an EHR system does, core features, benefits for clinics and patients, and how modern cloud EHR platforms work.',
    date: '2026-06-01',
    readingTime: '8 min read',
    image: '/assets/blog/what-is-an-ehr.png',
    imageAlt: 'Illustration of an electronic health record system on multiple devices',
    body: [
      {
        p: 'An electronic health record (EHR) is a digital version of a patient’s complete medical history, maintained by healthcare providers over time. A modern EHR system goes far beyond storing notes: it manages scheduling, clinical documentation, prescriptions, lab orders and results, billing, and patient communication in one connected platform.',
      },
      { h: 'What does an EHR system actually do?' },
      {
        p: 'At its core, an EHR replaces paper charts with a structured, searchable, always-available digital record. But the value of a full EHR platform comes from connecting every step of the patient journey:',
      },
      {
        ul: [
          'Scheduling — patients book online or at the front desk, and providers’ calendars fill from configurable timetables.',
          'Clinical documentation — structured visit notes, problem lists, medications, allergies and histories captured at the point of care.',
          'e-Prescribing — prescriptions sent electronically to the patient’s pharmacy, with safety checks along the way.',
          'Labs and diagnostics — electronic orders and structured results that trend over time in the chart.',
          'Billing and revenue cycle management — eligibility checks, claims, remittances, denials and patient payments.',
          'Patient engagement — portals, secure messaging, digital intake forms, results access and online payments.',
        ],
      },
      { h: 'EHR benefits for clinics' },
      {
        p: 'Practices that move from paper or fragmented software to a unified EHR typically see faster documentation, fewer lost charges, cleaner claims, shorter waiting-room queues and far less duplicate data entry. Because every role — front desk, nursing, providers, billing — works in the same system, information entered once flows everywhere it is needed.',
      },
      { h: 'EHR benefits for patients' },
      {
        p: 'Patients get online booking, reminders, access to their own results and medications, the ability to message their care team, and safer care overall: allergy and interaction alerts, legible prescriptions and complete histories at every visit.',
      },
      { h: 'Cloud EHR vs on-premise' },
      {
        p: 'Legacy EHRs ran on servers inside the practice, which meant hardware costs, IT staff and painful upgrades. Cloud-based EHR platforms like Venqora run in the browser: there is nothing to install, updates ship continuously, and clinicians can work securely from any location — essential for multi-clinic groups.',
      },
      { h: 'What to look for in a modern EHR' },
      {
        ul: [
          'Role-based workflows for every member of the team, not just physicians.',
          'Built-in billing and RCM rather than a bolted-on third-party module.',
          'Real patient engagement: self-scheduling, messaging, payments and forms.',
          'HIPAA-compliant security: access controls, audit logs and consent management.',
          'Open integration: HL7 for labs, Surescripts-class connectivity for prescribing, clearinghouse connectivity for claims.',
        ],
      },
      {
        p: 'Venqora EHR was designed around exactly this checklist — a single platform covering scheduling, charting, prescribing, diagnostics, billing and patient engagement, with compliance built into the core. Explore the features section of this site or request a demo to see it live.',
      },
    ],
  },
  {
    slug: 'ehr-vs-emr',
    title: 'EHR vs EMR: What’s the Difference and Why It Matters',
    description:
      'EHR vs EMR explained: how electronic health records differ from electronic medical records, which one your practice needs, and how modern platforms blur the line.',
    date: '2026-06-05',
    readingTime: '6 min read',
    image: '/assets/blog/ehr-vs-emr.png',
    imageAlt: 'Comparison illustration of EHR and EMR systems',
    body: [
      {
        p: 'The terms EHR (electronic health record) and EMR (electronic medical record) are often used interchangeably, but they describe different scopes of software. Understanding the difference helps you buy the right system for your practice.',
      },
      { h: 'What is an EMR?' },
      {
        p: 'An EMR is the digital equivalent of a single practice’s paper chart. It contains the medical and treatment history of patients within one organization — diagnoses, notes, medications — and largely stays inside that organization. EMRs digitize documentation but rarely connect to the wider healthcare ecosystem.',
      },
      { h: 'What is an EHR?' },
      {
        p: 'An EHR is built to be a complete, shareable record of a patient’s health. EHR platforms include everything an EMR does, plus interoperability (labs via HL7, pharmacies via e-prescribing networks, payers via clearinghouses), patient-facing tools like portals and messaging, and operational modules like scheduling and revenue cycle management.',
      },
      { h: 'The practical difference for a clinic' },
      {
        ul: [
          'An EMR documents the visit. An EHR runs the practice.',
          'EMR data stays in the building. EHR data flows to labs, pharmacies, payers and patients.',
          'EMRs serve clinicians. EHRs serve the front desk, nursing, billing, administrators and patients too.',
        ],
      },
      { h: 'Which one do you need?' },
      {
        p: 'For almost every practice today, the answer is an EHR. Payers expect electronic claims and eligibility checks, patients expect online booking and results access, and regulators expect auditability and patient data access rights — none of which a narrow EMR provides. The economics follow: integrated billing alone typically recovers revenue that standalone documentation tools leave behind.',
      },
      {
        p: 'Venqora EHR is a full electronic health record platform in this sense: clinical documentation plus scheduling, e-prescribing, diagnostics, billing/RCM, a patient portal and compliance tooling, with HL7, e-prescribing and clearinghouse adapters for the connected parts of healthcare.',
      },
    ],
  },
  {
    slug: 'how-to-choose-an-ehr',
    title: 'How to Choose an EHR System: A Buyer’s Checklist for Clinics',
    description:
      'A practical EHR buying guide: the questions to ask, features that matter, red flags to avoid, and a step-by-step evaluation checklist for clinics and medical groups.',
    date: '2026-06-10',
    readingTime: '9 min read',
    image: '/assets/blog/how-to-choose-an-ehr.png',
    imageAlt: 'Checklist for evaluating EHR software vendors',
    body: [
      {
        p: 'Choosing an EHR is one of the highest-impact decisions a practice makes: the system touches every patient, every employee and every dollar of revenue. This checklist distills what experienced practice administrators evaluate before signing.',
      },
      { h: '1. Map your workflows first' },
      {
        p: 'List the roles in your practice — front desk, nursing, providers, billing, administration — and the daily tasks of each. The right EHR has a purpose-built workspace for every role, not a physician-only interface that everyone else tolerates.',
      },
      { h: '2. Demand integrated billing and RCM' },
      {
        p: 'Revenue leaks happen in the gaps between systems. Look for eligibility verification, claim creation and submission, ERA auto-posting, denial management and patient payments inside the EHR, sharing data with the clinical record — not a separate billing product connected by exports.',
      },
      { h: '3. Check patient engagement depth' },
      {
        ul: [
          'Online self-scheduling against real provider availability',
          'Digital intake and insurance capture before the visit',
          'Secure messaging patients actually use (real-time, not inbox-style)',
          'Results, medications and refill requests in a portal',
          'Online payments for copays and balances',
        ],
      },
      { h: '4. Scrutinize security and compliance' },
      {
        p: 'Ask every vendor: Do you have role-based access control? Complete audit logs? How is emergency (break-glass) access handled and reviewed? How do you support patient data access requests and consent management? Will you sign a BAA? Vague answers here are disqualifying.',
      },
      { h: '5. Verify interoperability' },
      {
        p: 'Labs (HL7 interfaces), pharmacies (Surescripts-class e-prescribing), payers (clearinghouse connectivity) and even legacy fax should be supported natively. Ask to see the integration list, not the integration roadmap.',
      },
      { h: '6. Evaluate operational extras' },
      {
        p: 'Modern platforms differentiate on operations: waiting-room queue boards, real-time dashboards per role, multi-clinic administration, configurable timetables and fees. These features compound daily into real staff-hours saved.',
      },
      { h: '7. Plan migration and training' },
      {
        p: 'Ask how patient demographics, appointments and historical records move from your current system, how long go-live takes, and what role-based training looks like. A good vendor has a repeatable answer with timelines.',
      },
      { h: 'Red flags' },
      {
        ul: [
          'Per-feature pricing that turns the quoted price into a fraction of the real cost',
          'Separate logins for billing, scheduling or the patient portal',
          'No audit log or unclear answers about HIPAA safeguards',
          'Long-term contracts before a hands-on trial or sandbox',
        ],
      },
      {
        p: 'If you are evaluating platforms, Venqora EHR covers this checklist end-to-end — request a demo and walk through your own workflows in the system before you decide.',
      },
    ],
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}
