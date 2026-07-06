// Renders a JSON-LD structured-data block. Search engines and AI crawlers
// read these to understand the organization, product, FAQs and articles.

export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
