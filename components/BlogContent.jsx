import ReactMarkdown from 'react-markdown';

function Block({ block }) {
  if (block.h) return <h2>{block.h}</h2>;
  if (block.ul)
    return (
      <ul>
        {block.ul.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  return <p>{block.p}</p>;
}

/**
 * Renders blog body from API markdown or legacy static block arrays.
 */
export default function BlogContent({ post }) {
  if (post.content) {
    return (
      <div className="article-body prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    );
  }

  if (post.body?.length) {
    return (
      <div className="article-body">
        {post.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    );
  }

  return null;
}
