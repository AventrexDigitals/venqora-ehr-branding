// ---------------------------------------------------------------------------
// Feature module content. Each entry renders a dedicated SEO landing page at
// /features/<slug>/ and a card on the /features/ hub and the home page.
// `image` paths point at /public/assets — drop the real screenshots there.
// ---------------------------------------------------------------------------

/** Set true when per-module screenshots and /features/<slug>/ pages are ready. */
export const FEATURE_DETAIL_PAGES_ENABLED = false;

export const FEATURES = [
  {
    slug: 'scheduling-front-desk',
    icon: 'calendar',
    name: 'Scheduling & Front Desk',
    short:
      'Online self-booking, drag-free slot management, check-in with printed receipts and a live token queue board for your waiting room.',
    heroTitle: 'Patient scheduling and front-desk software that keeps clinics moving',
    description:
      'Venqora EHR scheduling software combines online patient self-booking, receptionist-managed appointments, automated availability from provider timetables, check-in workflows and a live waiting-room token board — so the front desk runs itself.',
    image: '/assets/screenshots/scheduling.png',
    imageAlt: 'Venqora EHR appointment scheduling dashboard with calendar and token queue board',
    bullets: [
      {
        title: 'Online patient self-scheduling',
        text: 'Patients find providers by specialty or symptom, see real-time availability generated from each provider’s timetable, and book, reschedule or cancel visits from the patient portal — no phone calls required.',
      },
      {
        title: 'Receptionist command center',
        text: 'A dedicated receptionist workspace for creating appointments, confirming bookings with a guided intake wizard, collecting copays, printing check-in receipts and tracking every visit status from scheduled to checked-out.',
      },
      {
        title: 'Live token & queue board',
        text: 'A real-time token display board — viewable on any waiting-room screen — shows patients exactly where they are in the queue. Tokens are issued automatically at check-in, reducing crowding and front-desk questions.',
      },
      {
        title: 'Insurance eligibility at booking',
        text: 'Run electronic insurance eligibility checks during scheduling and check-in so coverage problems are caught before the visit, not after the claim is denied.',
      },
      {
        title: 'Automated notifications',
        text: 'Patients receive email updates as their appointment is booked, confirmed, checked in and completed, cutting no-shows and inbound status calls.',
      },
      {
        title: 'Multi-clinic calendars',
        text: 'Providers who work across multiple locations get per-clinic timetables and fees. Schedules, queues and reports stay separated by location while administrators see the whole network.',
      },
    ],
    faq: [
      {
        q: 'Can patients book their own appointments online?',
        a: 'Yes. The Venqora patient portal lets patients search providers by specialty or symptom, view live availability and book, reschedule or pay for visits online.',
      },
      {
        q: 'Does Venqora support walk-ins and queues?',
        a: 'Yes. The front desk can register walk-ins in seconds, and the live token board keeps the waiting room informed about queue position in real time.',
      },
    ],
  },
  {
    slug: 'clinical-documentation',
    icon: 'note',
    name: 'Clinical Documentation & Charting',
    short:
      'Structured visit notes, complete patient charts, clinical decision support, safety alerts and lab trend graphs at the point of care.',
    heroTitle: 'Clinical charting built for how physicians actually work',
    description:
      'Document encounters with structured, section-based visit notes; review longitudinal patient charts; and get real-time clinical decision support, drug-safety alerts and lab trends without leaving the note.',
    image: '/assets/screenshots/charting.png',
    imageAlt: 'Venqora EHR clinical note editor with patient chart and clinical alerts',
    bullets: [
      {
        title: 'Structured visit notes',
        text: 'Section-based note templates with smart field controls, searchable clinical pick-lists and composite forms make documentation fast, consistent and codeable — far beyond free-text typing.',
      },
      {
        title: 'Complete patient chart',
        text: 'Demographics, problem lists, medications, allergies, encounters, diagnostics, documents and billing history in one longitudinal chart, accessible to every authorized role.',
      },
      {
        title: 'Clinical decision support',
        text: 'A built-in clinical decision support engine surfaces care guidance and safety checks in the workflow, helping clinicians make evidence-aligned choices at the point of care.',
      },
      {
        title: 'Clinical alerts & safety panel',
        text: 'Critical alerts — allergies, interactions, abnormal results, care flags — appear in a persistent safety panel and alert banners so nothing important is buried in the chart.',
      },
      {
        title: 'Lab trend visualization',
        text: 'Diagnostic results graph automatically over time, turning rows of numbers into trends clinicians can read at a glance.',
      },
      {
        title: 'Nurse triage workflow',
        text: 'Nurses capture vitals and triage data with automatic unit conversions before the provider opens the note, so encounters start with the clinical picture already in place.',
      },
    ],
    faq: [
      {
        q: 'Does Venqora include clinical decision support?',
        a: 'Yes. Venqora includes a clinical decision support service plus real-time clinical alerts and a safety panel that surface allergies, interactions and care guidance inside the charting workflow.',
      },
      {
        q: 'Can I customize visit note templates?',
        a: 'Notes are built from configurable sections and field options, and administrators manage the clinical catalogs (specialties, symptoms, lookups) that drive them.',
      },
    ],
  },
  {
    slug: 'e-prescribing',
    icon: 'pill',
    name: 'e-Prescribing & Pharmacy',
    short:
      'Electronic prescriptions with medication search, pharmacy directory routing, refill request management and Surescripts-ready connectivity.',
    heroTitle: 'e-Prescribing software that gets the right script to the right pharmacy',
    description:
      'Prescribe electronically with searchable medication and pharmacy directories, manage refill requests in a dedicated queue, and connect to national e-prescribing networks through a Surescripts-ready integration layer.',
    image: '/assets/screenshots/eprescribing.png',
    imageAlt: 'Venqora EHR e-prescribing screen with medication search and pharmacy selection',
    bullets: [
      {
        title: 'Electronic prescribing',
        text: 'Create and transmit prescriptions from inside the encounter with structured sig, quantity and refill fields — no paper, no faxed scripts unless you want them.',
      },
      {
        title: 'Medication & pharmacy search',
        text: 'Type-ahead medication search and a managed pharmacy directory let prescribers pick the exact drug and destination pharmacy in seconds.',
      },
      {
        title: 'Refill request management',
        text: 'Patient-initiated refill requests flow into a provider queue for one-click approval or denial, with the full medication history alongside.',
      },
      {
        title: 'Surescripts-ready network connectivity',
        text: 'A dedicated Surescripts adapter in the integration layer means the platform is built to plug into national e-prescribing rails as you scale.',
      },
      {
        title: 'Prior authorization workflows',
        text: 'Pharmacy and medical prior authorizations are tracked as first-class records, so staff always know what is pending, approved or denied.',
      },
      {
        title: 'Integrated fax fallback',
        text: 'For pharmacies and partners that still live on fax, built-in fax transmission sends clinical documents without leaving the EHR.',
      },
    ],
    faq: [
      {
        q: 'Does Venqora integrate with Surescripts?',
        a: 'Venqora ships with a Surescripts adapter in its integration layer, designed to connect the platform to national e-prescribing networks. Contact us to discuss certification status for your region.',
      },
      {
        q: 'How do patients request refills?',
        a: 'Patients request refills from the patient portal medications page; requests appear in the provider’s refill queue for review and approval.',
      },
    ],
  },
  {
    slug: 'labs-diagnostics',
    icon: 'flask',
    name: 'Labs & Diagnostics',
    short:
      'Electronic diagnostic orders, HL7-ready results delivery, printable requisitions and automatic result trending in the chart.',
    heroTitle: 'Lab orders and diagnostic results, closed-loop',
    description:
      'Order labs and imaging electronically, generate requisitions, receive structured results through an HL7-ready interface, and review them as trends in the patient chart — with patients seeing released results in their portal.',
    image: '/assets/screenshots/labs.png',
    imageAlt: 'Venqora EHR diagnostic orders list and lab result trend chart',
    bullets: [
      {
        title: 'Electronic diagnostic orders',
        text: 'Providers create lab and imaging orders inside the encounter, with order status tracked from placed to resulted.',
      },
      {
        title: 'HL7-ready results interface',
        text: 'A dedicated HL7 diagnostic adapter is built into the platform so structured results from labs and diagnostic partners can flow straight into the chart.',
      },
      {
        title: 'Printable requisitions',
        text: 'Generate clean, complete requisition documents for external labs and imaging centers in one click.',
      },
      {
        title: 'Result trending',
        text: 'Numeric results plot automatically over time so clinicians spot deterioration or improvement instantly.',
      },
      {
        title: 'Patient-facing results',
        text: 'Released lab results appear in the patient portal, cutting the “can I get my results?” phone calls.',
      },
    ],
    faq: [
      {
        q: 'Does Venqora support HL7 lab interfaces?',
        a: 'Yes. The platform includes an HL7 diagnostic adapter and a clinical integration partner model for connecting laboratories and diagnostic services.',
      },
    ],
  },
  {
    slug: 'billing-rcm',
    icon: 'billing',
    name: 'Medical Billing & RCM',
    short:
      'Full revenue cycle management: eligibility, claims, clearinghouse connectivity, ERA auto-posting, denial management, superbills and invoices.',
    heroTitle: 'Revenue cycle management software that chases every dollar',
    description:
      'Venqora includes a complete medical billing workspace: insurance eligibility verification, charge capture with CPT/ICD code search, electronic claims with clearinghouse connectivity, ERA remittance posting, denial management, prior authorizations, superbills, invoices and patient payments.',
    image: '/assets/screenshots/billing.png',
    imageAlt: 'Venqora EHR biller dashboard with claims, denials and payments',
    bullets: [
      {
        title: 'Insurance eligibility verification',
        text: 'Verify coverage electronically before the visit and at check-in, with results stored on the appointment so the whole team can see them.',
      },
      {
        title: 'Claims management & clearinghouse connectivity',
        text: 'Build, scrub and submit insurance claims with a clearinghouse-ready integration layer, then track each claim through its full lifecycle.',
      },
      {
        title: 'ERA auto-posting',
        text: 'Electronic remittance advice (ERA) files post payments and adjustments back to claims automatically, eliminating hours of manual reconciliation.',
      },
      {
        title: 'Denial management',
        text: 'A dedicated denials workspace groups rejected claims with reasons, so billers can correct and resubmit instead of losing revenue.',
      },
      {
        title: 'Superbills, invoices & statements',
        text: 'Generate professional superbills and PDF invoices, track patient balances and record payments — all tied to the encounter.',
      },
      {
        title: 'CPT / ICD code search & charge capture',
        text: 'Billers and providers attach billing codes with fast type-ahead search, and billing lines flow from the clinical note to the claim.',
      },
      {
        title: 'Online patient payments',
        text: 'Stripe-powered card payments let patients pay copays and balances online or at the desk, with every transaction recorded.',
      },
      {
        title: 'Prior authorization tracking',
        text: 'Medical and pharmacy prior auths are tracked end-to-end so claims aren’t denied for missing authorizations.',
      },
    ],
    faq: [
      {
        q: 'Does Venqora handle the full revenue cycle?',
        a: 'Yes — eligibility checks, charge capture, claim creation and submission, ERA remittance posting, denial management, patient invoicing and payments are all built in.',
      },
      {
        q: 'Can patients pay online?',
        a: 'Yes. Patients can pay copays and balances by card through Stripe-powered checkout in the patient portal, and receptionists can collect copays at check-in.',
      },
    ],
  },
  {
    slug: 'patient-portal',
    icon: 'portal',
    name: 'Patient Portal & Engagement',
    short:
      'Self-scheduling, secure real-time chat, lab results, medications and refills, online payments, digital consents and intake forms.',
    heroTitle: 'A patient portal your patients will actually use',
    description:
      'Give patients a modern portal: find a doctor, book and pay online, complete digital intake, chat with the care team in real time, view lab results and medications, request refills, and manage consents and data requests.',
    image: '/assets/screenshots/patient-portal.png',
    imageAlt: 'Venqora EHR patient portal showing appointments, results and messaging',
    bullets: [
      {
        title: 'Find-a-doctor search',
        text: 'Patients search providers by specialty or symptom, view profiles and book directly into real availability.',
      },
      {
        title: 'Real-time secure chat',
        text: 'Built-in, appointment-linked chat connects patients with the care team — with live delivery over websockets and notification sounds, not next-day inbox messages.',
      },
      {
        title: 'Digital intake & confirmation forms',
        text: 'Patients complete intake and visit confirmation forms online before they arrive, including insurance details, so check-in takes seconds.',
      },
      {
        title: 'Results, medications & refills',
        text: 'Released lab results, current medications and one-tap refill requests live in the portal, available 24/7.',
      },
      {
        title: 'Online booking & payments',
        text: 'Book, reschedule and pay for visits online with Stripe-powered checkout and saved payment methods.',
      },
      {
        title: 'Consents & data requests',
        text: 'Patients sign consent forms electronically and submit formal data access requests — privacy rights handled in-product, not by paperwork.',
      },
    ],
    faq: [
      {
        q: 'Is there secure messaging between patients and providers?',
        a: 'Yes. Venqora includes real-time, appointment-linked chat between patients and the care team, delivered instantly over secure websockets.',
      },
      {
        q: 'Can patients fill out forms before the visit?',
        a: 'Yes. Digital intake and guided confirmation forms (including insurance capture) are completed online before arrival.',
      },
    ],
  },
  {
    slug: 'security-compliance',
    icon: 'shield',
    name: 'Security & HIPAA Compliance',
    short:
      'HIPAA-compliant controls: full audit logging, role-based access, break-glass emergency access, consent management and patient data-request workflows.',
    heroTitle: 'Security and compliance designed into the core, not bolted on',
    description:
      'Venqora EHR is HIPAA compliant: granular role-based access control, comprehensive audit logs, break-glass emergency access with oversight, electronic consent management, patient data-request handling and hardened account security are built into the core platform.',
    image: '/assets/screenshots/compliance.png',
    imageAlt: 'Venqora EHR audit log and compliance administration screens',
    bullets: [
      {
        title: 'Role-based access control',
        text: 'Granular roles and permissions — admin, doctor, nurse, receptionist, biller, patient — ensure every user sees only what their job requires. Administrators manage roles and permissions from a dedicated console.',
      },
      {
        title: 'Comprehensive audit logging',
        text: 'Every significant action is written to an immutable audit log, giving compliance officers a complete answer to “who accessed what, when”.',
      },
      {
        title: 'Break-glass emergency access',
        text: 'In emergencies, authorized clinicians can invoke supervised break-glass access to restricted records — fully logged, time-boxed and reviewable, balancing patient safety with privacy.',
      },
      {
        title: 'Consent management',
        text: 'Versioned consent templates and electronically captured patient consents keep authorization records organized and provable.',
      },
      {
        title: 'Patient data requests',
        text: 'Built-in workflows for patient data access requests support HIPAA right-of-access obligations without manual tracking.',
      },
      {
        title: 'Account security',
        text: 'Login attempt monitoring, account security controls and secure session handling protect the front door of your patient data.',
      },
    ],
    faq: [
      {
        q: 'Is Venqora EHR HIPAA compliant?',
        a: 'Yes. Venqora EHR is HIPAA compliant, with the required technical safeguards built in — role-based access control, full audit trails, break-glass emergency access, consent tracking and data-request workflows — and we execute a Business Associate Agreement (BAA) with every customer.',
      },
      {
        q: 'What is break-glass access?',
        a: 'Break-glass lets an authorized clinician access restricted patient information during an emergency. In Venqora every break-glass session is justified, time-limited and audit-logged for later compliance review.',
      },
    ],
  },
  {
    slug: 'practice-management',
    icon: 'building',
    name: 'Practice & Multi-Clinic Management',
    short:
      'Run one clinic or a network: clinic administration, provider timetables, specialty and service catalogs, role dashboards and analytics.',
    heroTitle: 'Practice management for single clinics and growing networks',
    description:
      'Administer clinics, users, roles, provider timetables, fees, pharmacies and clinical catalogs from one console — with per-role dashboards and operational analytics for every location.',
    image: '/assets/screenshots/admin.png',
    imageAlt: 'Venqora EHR admin console with clinics, users and analytics dashboards',
    bullets: [
      {
        title: 'Multi-clinic administration',
        text: 'Create and manage any number of clinics, assign providers and staff per location, and keep schedules, fees and queues cleanly separated.',
      },
      {
        title: 'User, role & permission management',
        text: 'Onboard staff with the right role in minutes; bulk-assign clinics, specialties and services; and adjust permissions without developer help.',
      },
      {
        title: 'Provider timetables & fees',
        text: 'Define per-provider, per-clinic working hours that automatically generate bookable slots, with clinic-specific visit fees.',
      },
      {
        title: 'Clinical catalogs',
        text: 'Centrally manage specialties, symptoms and clinical lookup catalogs that power patient search, booking and documentation.',
      },
      {
        title: 'Role-specific dashboards',
        text: 'Admins, doctors, nurses, receptionists and billers each get a purpose-built dashboard with the metrics and worklists that matter to them.',
      },
      {
        title: 'Operational analytics',
        text: 'Visual dashboards track appointments, revenue, claims and utilization so leadership sees the health of the practice at a glance.',
      },
    ],
    faq: [
      {
        q: 'Can Venqora manage multiple locations?',
        a: 'Yes. Multi-clinic support is native: each location has its own providers, timetables, fees and queues, while administrators manage the whole network from one console.',
      },
    ],
  },
];

export function getFeature(slug) {
  return FEATURES.find((f) => f.slug === slug);
}
