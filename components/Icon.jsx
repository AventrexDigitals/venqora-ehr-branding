// Lightweight inline SVG icon set (stroke style) used across feature cards.

const PATHS = {
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path strokeLinecap="round" d="M16 2v4M8 2v4M3 9.5h18" />
      <path strokeLinecap="round" d="M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01" />
    </>
  ),
  note: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path strokeLinecap="round" d="M14 2v6h6M9 13h6M9 17h6M9 9h1" />
    </>
  ),
  pill: (
    <>
      <rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-35 12 12)" />
      <path strokeLinecap="round" d="M8.6 7.2l6.8 9.6" />
    </>
  ),
  flask: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M10 3v6.3L4.7 18a2 2 0 0 0 1.7 3h11.2a2 2 0 0 0 1.7-3L14 9.3V3" />
      <path strokeLinecap="round" d="M7.5 15h9" />
    </>
  ),
  billing: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path strokeLinecap="round" d="M2 10h20M6 15h4" />
    </>
  ),
  portal: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    </>
  ),
  shield: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3.5v5c0 5-3.4 8.3-8 9.5-4.6-1.2-8-4.5-8-9.5v-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4.5" />
    </>
  ),
  building: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M15 9h3a2 2 0 0 1 2 2v10" />
      <path strokeLinecap="round" d="M8.5 7h2M8.5 11h2M8.5 15h2" />
    </>
  ),
  chat: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a8 8 0 0 1-8 8H4l2.3-2.8A8 8 0 1 1 21 12z" />
      <path strokeLinecap="round" d="M8.5 11h.01M12 11h.01M15.5 11h.01" />
    </>
  ),
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  ),
  arrow: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
  ),
  sparkles: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 17l.7 2.1L8 20l-2.3.9L5 23l-.7-2.1L2 20l2.3-.9L5 17z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l.5 1.5L21 16l-1.5.5L19 18l-.5-1.5L17 16l1.5-.5L19 14z" />
    </>
  ),
};

export default function Icon({ name, className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name] || PATHS.check}
    </svg>
  );
}
