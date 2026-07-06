import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/Icon';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata = {
  title: 'Contact Us — Request a Free EHR Demo',
  description:
    'Request a free, personalized demo of Venqora EHR or contact our sales team. See scheduling, charting, e-prescribing, billing & RCM and the patient portal with your own workflows.',
  alternates: { canonical: '/contact/' },
};

const EXPECT = [
  'A 30–45 minute walkthrough tailored to your specialty and team size',
  'Live answers on migration from your current EHR',
  'A pricing quote within one business day',
  'No pressure, no long-term commitment required to evaluate',
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & demo"
        title="See Venqora EHR with your own workflows"
        lead="Tell us a little about your practice and we'll schedule a personalized demo. Prefer email? Reach us directly any time."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-slate-900">What to expect</h2>
              <ul className="mt-5 space-y-3">
                {EXPECT.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-slate-700">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl bg-slate-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Direct contact</h3>
                <p className="mt-3 text-slate-700">
                  Sales &amp; demos:{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand-600 hover:text-brand-700">
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  We reply within one business day.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
