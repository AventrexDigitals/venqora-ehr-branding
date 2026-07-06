import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { FEATURES, getFeature } from '@/lib/features';
import { absoluteUrl, SITE_URL, SITE_NAME } from '@/lib/site';

export function generateStaticParams() {
  return FEATURES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) return {};
  return {
    title: `${feature.name} — EHR Software`,
    description: feature.description,
    alternates: { canonical: `/features/${feature.slug}/` },
    // No per-page og image yet — pages inherit the branded card from
    // app/opengraph-image.jsx. Once real screenshots exist in /public/assets,
    // add `images: [{ url: feature.image, alt: feature.imageAlt }]` back here.
    openGraph: {
      title: `${feature.name} | ${SITE_NAME}`,
      description: feature.description,
    },
  };
}

export default async function FeaturePage({ params }) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) notFound();

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Features', item: absoluteUrl('/features/') },
      { '@type': 'ListItem', position: 3, name: feature.name, item: absoluteUrl(`/features/${feature.slug}/`) },
    ],
  };

  const faqJsonLd =
    feature.faq && feature.faq.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: feature.faq.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={breadcrumbs} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      <section className="border-b border-slate-100 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/features/" className="hover:text-brand-600">Features</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{feature.name}</span>
          </nav>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Icon name={feature.icon} />
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-[2.75rem] sm:leading-tight">
                {feature.heroTitle}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">{feature.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact/"
                  className="rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
                >
                  Request a demo
                </Link>
                <Link
                  href="/features/"
                  className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
                >
                  All features
                </Link>
              </div>
            </div>
            <ImagePlaceholder src={feature.image} alt={feature.imageAlt} label={`Screenshot — ${feature.name}`} />
          </div>
        </div>
      </section>

      <section className="py-16" aria-label={`${feature.name} capabilities`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {feature.bullets.map((b) => (
              <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <h2 className="mt-3 text-base font-semibold text-slate-900">{b.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {feature.faq && feature.faq.length > 0 && (
        <section className="bg-slate-50 py-16" aria-label={`${feature.name} FAQs`}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
              {feature.name}: common questions
            </h2>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-6">
              <FaqList items={feature.faq} />
            </div>
          </div>
        </section>
      )}

      {/* Related modules for internal linking */}
      <section className="py-16" aria-label="Related features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Works together with</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.filter((f) => f.slug !== feature.slug)
              .slice(0, 3)
              .map((f) => (
                <Link
                  key={f.slug}
                  href={`/features/${f.slug}/`}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-brand-300"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-brand-700">{f.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaSection title={`See ${feature.name.toLowerCase()} live`} />
    </>
  );
}
