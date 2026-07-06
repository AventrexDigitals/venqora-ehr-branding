import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-24 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-4 text-lg text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700">
            Back to home
          </Link>
          <Link href="/features/" className="rounded-lg border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 hover:border-brand-300 hover:text-brand-700">
            Explore features
          </Link>
        </div>
      </div>
    </section>
  );
}
