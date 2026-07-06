import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import { SITE_NAME } from '@/lib/site';

export const metadata = {
  title: 'Why Venqora — Compare Venqora EHR vs Traditional EHR Systems',
  description:
    'How Venqora EHR compares to traditional EHR platforms like CareCloud and Oracle Health: built-in RCM, real-time patient chat, live queue boards, break-glass access and transparent pricing — with no bolt-on modules.',
  alternates: { canonical: '/why-venqora/' },
};

const COMPARISON = [
  { capability: 'Scheduling with online patient self-booking', venqora: 'Included', others: 'Included' },
  { capability: 'Clinical documentation & patient charts', venqora: 'Included', others: 'Included' },
  { capability: 'Clinical decision support & safety alerts', venqora: 'Included', others: 'Often a higher tier' },
  { capability: 'e-Prescribing (Surescripts-ready)', venqora: 'Included', others: 'Included / add-on' },
  { capability: 'Labs & diagnostics with HL7 interface', venqora: 'Included', others: 'Per-interface fees' },
  { capability: 'Full billing & RCM (claims, ERA, denials)', venqora: 'Included', others: 'Separate product or % of collections' },
  { capability: 'Insurance eligibility verification', venqora: 'Included', others: 'Per-check fees common' },
  { capability: 'Patient portal with online payments', venqora: 'Included (Stripe)', others: 'Add-on module' },
  { capability: 'Real-time patient–care team chat', venqora: 'Included', others: 'Rare; usually inbox-style messaging' },
  { capability: 'Live waiting-room token queue board', venqora: 'Included', others: 'Rarely available' },
  { capability: 'Break-glass emergency access with audit', venqora: 'Included', others: 'Enterprise tier only' },
  { capability: 'Patient data-request & consent workflows', venqora: 'Included', others: 'Manual / external process' },
  { capability: 'Integrated fax', venqora: 'Included', others: 'Third-party service' },
  { capability: 'Multi-clinic administration', venqora: 'Included', others: 'Enterprise tier' },
];

const REASONS = [
  {
    title: 'One platform, not a product catalog',
    text: 'Legacy vendors sell scheduling, billing, portals and interfaces as separate SKUs. Venqora ships as one platform with one database — every module included, every role covered.',
  },
  {
    title: 'Operations features clinics actually feel',
    text: 'The live token board, real-time chat, copay collection with printed receipts and per-role dashboards save staff-hours every single day — not just at audit time.',
  },
  {
    title: 'Compliance without the enterprise tax',
    text: 'Audit logs, role-based access, break-glass access, consent management and patient data requests are core features, not enterprise upsells.',
  },
  {
    title: 'Modern technology, faster everything',
    text: 'A modern cloud architecture means pages load fast, chat is instant over websockets, and updates ship continuously — no Java applets, no terminal servers, no upgrade weekends.',
  },
  {
    title: 'Built to integrate',
    text: 'HL7 for labs, a Surescripts-ready prescribing adapter, clearinghouse connectivity for claims, Stripe for payments and built-in fax for everyone else.',
  },
  {
    title: 'Pricing that fits real practices',
    text: 'Simple per-provider pricing instead of percent-of-collections contracts and surprise interface fees. See the pricing page for details.',
  },
];

export default function WhyVenqoraPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Venqora"
        title="A modern alternative to legacy EHR platforms"
        lead="Venqora covers the same ground as platforms like CareCloud and Oracle Health — scheduling, charting, prescribing, diagnostics, billing and patient engagement — and adds the operational features they don't have, without the add-on pricing."
      />

      <section className="py-16" aria-labelledby="reasons-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="reasons-heading" className="sr-only">Reasons practices choose Venqora</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r) => (
              <div key={r.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-semibold text-slate-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="comparison-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="comparison-heading" className="text-center text-3xl font-bold tracking-tight text-slate-900">
            Capability comparison
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            What ships standard in Venqora versus what typically requires add-ons, higher tiers or
            third-party products with traditional EHR vendors.
          </p>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/60 text-slate-900">
                  <th scope="col" className="px-6 py-4 font-semibold">Capability</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-brand-700">{SITE_NAME}</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Typical legacy EHR</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.capability} className="border-b border-slate-100 last:border-0">
                    <th scope="row" className="px-6 py-3.5 font-medium text-slate-800">{row.capability}</th>
                    <td className="px-6 py-3.5">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
                        <Icon name="check" className="h-4 w-4" /> {row.venqora}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-slate-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            “Typical legacy EHR” reflects common packaging patterns across the EHR industry; specific
            vendors vary. Evaluate vendors against your own requirements.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Switching from another EHR?</h2>
          <p className="mt-4 text-lg text-slate-600">
            We migrate your patient demographics, appointments and historical records, configure your
            clinics and train every role —{' '}
            <Link href="/contact/" className="font-semibold text-brand-600 hover:text-brand-700">
              talk to us about a migration plan
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
