'use client';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';

// Renders a real screenshot when `src` exists under /public; otherwise shows a labelled placeholder.

export default function ImagePlaceholder({
  src,
  alt,
  label,
  ratio = 'aspect-[16/10]',
  className = '',
  priority = false,
  /** 'cover' fills the frame; 'contain' shows the full screenshot without cropping */
  objectFit = 'cover',
  /** 'card' = Veltro-style lift + spotlight + zoom; 'flat' = zoom only (nested cards); 'none' = static */
  hoverEffect = 'card',
}) {
  const [failed, setFailed] = useState(false);
  const rootRef = useRef(null);
  const showPlaceholder = !src || failed;
  const isInteractive = hoverEffect !== 'none';
  const isRemoteSrc =
    typeof src === 'string' &&
    (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//'));

  const onPointerMove = useCallback(
    (event) => {
      if (hoverEffect !== 'card' || !rootRef.current) return;
      const rect = rootRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      rootRef.current.style.setProperty('--mouse-x', `${x}%`);
      rootRef.current.style.setProperty('--mouse-y', `${y}%`);
    },
    [hoverEffect],
  );

  const hoverClass =
    hoverEffect === 'card'
      ? 'hover-image-card'
      : hoverEffect === 'flat'
        ? 'hover-image-card hover-image-card--flat'
        : '';

  const figureClass = [
    'relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-brand-50/30 to-slate-50 shadow-[0_20px_50px_rgb(0,0,0,0.06)]',
    ratio,
    hoverClass,
    isInteractive ? 'group' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const objectClass =
    objectFit === 'contain' ? 'object-contain object-center' : 'object-cover object-top';

  const media = (
  <>
      {hoverEffect === 'card' ? (
        <div className="hover-image-card__glow pointer-events-none absolute -inset-px z-[1] rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      ) : null}
      <div className="hover-image-card__frame absolute inset-0 overflow-hidden rounded-[inherit]">
        {showPlaceholder ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(27,94,245,0.08),transparent_50%)]" aria-hidden="true" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-6 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 text-brand-400 shadow-sm ring-1 ring-slate-200/60">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
                </svg>
              </span>
              <span className="text-sm font-medium text-slate-700">{label || alt}</span>
              {src ? (
                <code className="rounded-lg bg-white/80 px-2.5 py-1 text-xs text-slate-400 ring-1 ring-slate-200/60">{src}</code>
              ) : null}
            </div>
          </>
        ) : isRemoteSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src.startsWith('//') ? `https:${src}` : src}
            alt={alt}
            className={`hover-image-card__image bg-white absolute inset-0 h-full w-full ${objectClass}`}
            onError={() => setFailed(true)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`hover-image-card__image bg-white ${objectClass}`}
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </>
  );

  if (showPlaceholder) {
    return (
      <figure
        ref={rootRef}
        className={figureClass}
        role="img"
        aria-label={alt}
        onMouseMove={isInteractive ? onPointerMove : undefined}
      >
        {media}
      </figure>
    );
  }

  return (
    <figure ref={rootRef} className={figureClass} onMouseMove={isInteractive ? onPointerMove : undefined}>
      {media}
    </figure>
  );
}
