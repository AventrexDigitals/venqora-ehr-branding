'use client';

// Demo-request form. The site is statically exported, so by default this
// submits via a mailto: draft. To wire it to a real backend, set FORM_ENDPOINT
// to a service like Formspree/Basin or your own API and it will POST instead.

import { useState } from 'react';
import { CONTACT_EMAIL } from '@/lib/site';

const FORM_ENDPOINT = ''; // e.g. 'https://formspree.io/f/xxxxxxx'

const FIELD_CLS =
  'mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    if (FORM_ENDPOINT) {
      setStatus('sending');
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        setStatus(res.ok ? 'sent' : 'error');
      } catch {
        setStatus('error');
      }
      return;
    }

    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || '-'}`,
      `Practice: ${data.practice || '-'}`,
      `Providers: ${data.providers || '-'}`,
      '',
      data.message || '',
    ].join('\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      'Demo request — Venqora EHR'
    )}&body=${encodeURIComponent(body)}`;
    setStatus('sent');
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-emerald-800">Thank you!</h3>
        <p className="mt-2 text-emerald-700">
          Your request is on its way. We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Request a demo</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Full name *
          <input name="name" type="text" required autoComplete="name" placeholder="Dr. Jane Smith" className={FIELD_CLS} />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Work email *
          <input name="email" type="email" required autoComplete="email" placeholder="jane@clinic.com" className={FIELD_CLS} />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Phone
          <input name="phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000" className={FIELD_CLS} />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Practice / organization
          <input name="practice" type="text" placeholder="Fountain Hills Medical Center" className={FIELD_CLS} />
        </label>
        <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
          Number of providers
          <select name="providers" className={FIELD_CLS} defaultValue="">
            <option value="" disabled>
              Select...
            </option>
            <option>1–5</option>
            <option>6–15</option>
            <option>16–50</option>
            <option>50+</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
          What would you like to see?
          <textarea
            name="message"
            rows={4}
            placeholder="e.g. We're an urgent care group on [current EHR] looking at billing + scheduling..."
            className={FIELD_CLS}
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 w-full rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Request my demo'}
      </button>
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-600">
          Something went wrong. Please email us directly at {CONTACT_EMAIL}.
        </p>
      )}
      <p className="mt-4 text-xs text-slate-400">
        By submitting, you agree to be contacted about Venqora EHR. We never share your information.
      </p>
    </form>
  );
}
