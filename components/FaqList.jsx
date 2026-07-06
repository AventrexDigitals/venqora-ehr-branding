// FAQ accordion built on native <details>/<summary> so every answer is in the
// HTML for search engines and AI crawlers — no JavaScript required to read it.

export default function FaqList({ items }) {
  return (
    <div className="divide-y divide-slate-200">
      {items.map((item) => (
        <details key={item.q} className="faq-item">
          <summary>
            <h3 className="text-base font-semibold">{item.q}</h3>
          </summary>
          <p className="pb-5 leading-relaxed text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
