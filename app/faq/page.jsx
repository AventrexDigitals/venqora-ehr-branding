import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import JsonLd from '@/components/JsonLd';
import { FAQS, allFaqItems } from '@/lib/faqs';

export const metadata = {
  title: 'FAQ — Venqora EHR Questions Answered',
  description:
    'Answers to common questions about Venqora EHR: features, HIPAA compliance, medical billing & RCM, patient portal, implementation timelines, data migration, integrations and pricing.',
  alternates: { canonical: '/faq/' },
};

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqItems().map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={FAQ_JSONLD} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        lead="Everything practices ask us about the platform, compliance, implementation and pricing. Can't find your answer? Contact us — a human replies within one business day."
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {FAQS.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-xl font-bold tracking-tight text-slate-900">{category.category}</h2>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-6">
                <FaqList items={category.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection title="Still have questions?" text="Book a demo and ask us live — or email the team and we'll answer in writing." />
    </>
  );
}
