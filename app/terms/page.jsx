import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for the Venqora EHR website.',
  alternates: { canonical: '/terms/' },
};

// NOTE: Placeholder terms — have legal counsel review and finalize before launch.

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of service" lead="Last updated: June 2026" />
      <section className="py-12">
        <div className="article-body mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p>
            These terms govern your use of this marketing website. Use of the Venqora EHR platform
            itself is governed by separate customer agreements, including subscription terms and a
            Business Associate Agreement where applicable.
          </p>
          <h2>Use of this website</h2>
          <p>
            You may browse this site and use its content to evaluate Venqora products. You may not
            scrape the site for competitive data resale, attempt to disrupt its operation, or use it
            for unlawful purposes.
          </p>
          <h2>Content and accuracy</h2>
          <p>
            We work to keep product descriptions accurate and current, but features, integrations
            and packaging may change. Statements on this site are informational and do not form a
            contractual commitment; contractual terms live in signed agreements.
          </p>
          <h2>Intellectual property</h2>
          <p>
            All content on this site — text, graphics, logos and software — belongs to Venqora or
            its licensors and is protected by applicable intellectual property law.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            This website is provided &quot;as is&quot; without warranties of any kind. To the
            maximum extent permitted by law, Venqora is not liable for damages arising from use of
            this website.
          </p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent via the contact page.</p>
        </div>
      </section>
    </>
  );
}
