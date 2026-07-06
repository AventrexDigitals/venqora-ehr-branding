import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Icon from '@/components/Icon';

export const metadata = {
  title: 'About Us — The Team Behind Venqora EHR',
  description:
    'Venqora builds modern electronic health record software for clinics and medical groups. Learn about our mission to replace fragmented, legacy EHR systems with one fast, complete platform.',
  alternates: { canonical: '/about/' },
};

const VALUES = [
  {
    title: 'Clinicians first',
    text: 'Every workflow is designed around the people using it — physicians, nurses, front desk, billers — so the software disappears and the care remains.',
  },
  {
    title: 'Complete, not complicated',
    text: 'A full platform should not mean a complicated one. We obsess over keeping powerful workflows simple enough to learn in a day.',
  },
  {
    title: 'Privacy is the product',
    text: 'Audit trails, access controls and consent workflows are core engineering priorities, because trust is the foundation of healthcare.',
  },
  {
    title: 'Ship continuously',
    text: 'Cloud software should improve every week. Customers get new capabilities continuously, with zero upgrade projects.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Venqora"
        title="We're replacing fragmented EHRs with one platform clinics love"
        lead="Venqora was founded on a simple observation: clinics were paying for five systems that didn't talk to each other, and patients felt every gap. We build the alternative."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our story</h2>
              <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
                <p>
                  Venqora EHR began inside real clinical operations — watching receptionists re-type
                  insurance details into three systems, billers chase denials in spreadsheets, and
                  physicians finish charts at the kitchen table. The tools were the bottleneck, not
                  the people.
                </p>
                <p>
                  So we built an electronic health record platform the way modern software is built:
                  one codebase, one database, role-based workspaces, real-time everything. Scheduling
                  flows into the chart, the chart flows into the claim, and the patient sees it all
                  in their portal.
                </p>
                <p>
                  Today Venqora covers the entire life of a visit — from online booking to paid
                  claim — for clinics, urgent care centers and multi-location medical groups.
                </p>
              </div>
            </div>
            <ImagePlaceholder
              src="/assets/marketing/team-photo.png"
              alt="The Venqora team"
              label="Team / office photo"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="values-heading" className="text-center text-3xl font-bold tracking-tight text-slate-900">
            What we believe
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Talk to the team" text="Questions about the platform, partnerships or careers? We'd love to hear from you." />
    </>
  );
}
