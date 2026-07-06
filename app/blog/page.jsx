import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import BlogList from '@/components/BlogList';

export const metadata = {
  title: 'Blog & Resources — EHR Guides for Clinics',
  description:
    'Guides and resources on electronic health records: what an EHR is, EHR vs EMR, how to choose an EHR system, practice operations, billing and compliance — from the Venqora EHR team.',
  alternates: { canonical: '/blog/' },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="EHR guides & resources"
        lead="Practical, vendor-honest guides on electronic health records, practice operations, billing and compliance."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogList />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
