import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the Venqora EHR website: what information we collect, how we use it, and your rights.',
  alternates: { canonical: '/privacy/' },
};

// NOTE: Placeholder policy — have legal counsel review and finalize before launch.

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy policy" lead="Last updated: June 2026" />
      <section className="py-12">
        <div className="article-body mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p>
            This privacy policy describes how Venqora (&quot;we&quot;, &quot;us&quot;) collects and
            uses information on this marketing website. It does not describe the handling of patient
            data inside the Venqora EHR platform, which is governed by our customer agreements,
            Business Associate Agreements (BAAs) and applicable healthcare privacy law.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you submit the contact or demo request form, we collect the details you provide —
            name, email, phone, organization and message — to respond to your inquiry. We may also
            collect standard technical data (such as pages visited and browser type) through
            privacy-respecting analytics to understand how the site is used.
          </p>
          <h2>How we use information</h2>
          <ul>
            <li>To respond to demo requests and sales inquiries</li>
            <li>To improve this website and our marketing materials</li>
            <li>To send information you have requested about the platform</li>
          </ul>
          <h2>What we do not do</h2>
          <p>
            We do not sell your personal information, and we do not share it with third parties
            except service providers who help us operate this website and respond to inquiries.
          </p>
          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of the personal information we
            hold about you at any time by emailing us. We will respond within applicable legal
            timeframes.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to our team via the contact page or by email.
          </p>
        </div>
      </section>
    </>
  );
}
