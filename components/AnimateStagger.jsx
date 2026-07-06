'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimateStagger({
  children,
  className = '',
  variant = 'fade-up',
  stagger = 80,
  as: Tag = 'div',
  ...props
}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`motion-stagger motion-stagger-${variant} ${revealed ? 'is-revealed' : ''} ${className}`}
      style={{ '--stagger-step': `${stagger}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
