import Link from 'next/link';
import Logo from '@/components/Logo';
import { FOOTER_LINKS, SITE_NAME, CONTACT_EMAIL } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="hero-glow left-0 top-0 h-64 w-64 bg-brand-600/10" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo variant="footer" linked={false} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              The all-in-one electronic health record platform: scheduling, clinical
              documentation, e-prescribing, labs, billing &amp; RCM, patient portal and
              HIPAA-compliant security — built for modern clinics and multi-location practices.
            </p>
            <p className="mt-5 text-sm text-slate-400">
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-white">
                {CONTACT_EMAIL}
              </a>
            </p>
            <Link
              href="/pricing/"
              className="mt-4 inline-flex text-sm font-semibold text-brand-400 transition hover:text-brand-300"
            >
              View pricing plans →
            </Link>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <nav key={title} aria-label={`${title} links`}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>HIPAA compliant · Role-based access · Full audit trails</p>
        </div>
      </div>
    </footer>
  );
}
