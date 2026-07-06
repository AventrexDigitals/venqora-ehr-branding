import Image from 'next/image';
import Link from 'next/link';
import { SITE_NAME, LOGO_HORIZONTAL, LOGO_STACKED, LOGO_FOOTER } from '@/lib/site';

const SIZES = {
  header: { height: 44, width: 200, className: 'h-20 w-auto max-w-[250px]' },
  footer: { height: 48, width: 220, className: 'h-12 w-auto max-w-[220px]' },
  compact: { height: 36, width: 36, className: 'h-9 w-9' },
};

export default function Logo({ variant = 'header', linked = true, className = '' }) {
  const src =
    variant === 'footer' ? LOGO_FOOTER : variant === 'compact' ? LOGO_STACKED : LOGO_HORIZONTAL;
  const size = SIZES[variant] || SIZES.header;

  const image = (
    <Image
      src={src}
      alt={SITE_NAME}
      width={size.width}
      height={size.height}
      className={`${size.className} ${className}`}
      priority={variant === 'header'}
    />
  );

  if (!linked) return image;

  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label={`${SITE_NAME} home`}>
      {image}
    </Link>
  );
}
