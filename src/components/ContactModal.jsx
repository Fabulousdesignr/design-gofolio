import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2, Mail, X } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';
import { site } from '../data/site';

const CHIPS = [
  'AI product build',
  'Product engineering role',
  'Design engineering role',
  'Freelance project',
  'Early-stage collaboration',
];

const PROJECT_TYPES = [
  'AI application',
  'Full-stack product',
  'Product design and build',
  'Frontend engineering',
  'Design system',
  'Something else',
];

function buildMailto(formData) {
  const subject = `Portfolio inquiry from ${formData.get('name') || 'a visitor'}`;
  const lines = [
    `Name: ${formData.get('name') || ''}`,
    `Email: ${formData.get('email') || ''}`,
    `Company: ${formData.get('company') || ''}`,
    `Reason: ${formData.get('reason') || ''}`,
    `Timeline: ${formData.get('timeline') || ''}`,
    '',
    'Details:',
    `${formData.get('details') || ''}`,
  ];
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    lines.join('\n')
  )}`;
}

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [formState, setFormState] = useState('idle');
  const [selectedChip, setSelectedChip] = useState('');
  const [fallbackHref, setFallbackHref] = useState('');
  const firstFieldRef = useRef(null);
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const reason = useMemo(() => selectedChip, [selectedChip]);

  const handleClose = useCallback(() => {
    setFormState('idle');
    setSelectedChip('');
    setFallbackHref('');
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKeyDown);
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 120);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, handleClose]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (reason) formData.append('reason', reason);

    if (!endpoint) {
      const href = buildMailto(formData);
      setFallbackHref(href);
      setFormState('fallback');
      window.location.href = href;
      return;
    }

    setFormState('sending');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      setFormState(response.ok ? 'success' : 'error');
    } catch {
      setFormState('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <button
        type="button"
        aria-label="Close contact form"
        onClick={handleClose}
        className="modal-backdrop fixed inset-0 cursor-default bg-black/70"
      />

      <div
        className="modal-panel relative my-auto flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden border border-line bg-bg-panel shadow-2xl"
      >
        <div className="flex shrink-0 items-start justify-between gap-6 border-b border-line p-6 md:p-8">
          <div>
            <p className="eyebrow">Contact</p>
            <h2
              id="contact-modal-title"
              className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-text-primary md:text-3xl"
            >
              Let&apos;s build something real.
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-text-secondary">
              Tell me what you are working on, or what kind of role you are hiring for.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-line text-text-secondary transition-colors hover:border-line-strong hover:text-text-primary"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8">
          {formState === 'success' ? (
            <div className="flex flex-col items-center py-14 text-center">
              <CheckCircle2 size={34} className="text-signal" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-text-primary">Message sent.</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-secondary">
                Thanks for reaching out. I will read the context and reply by email.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-7 bg-paper px-5 py-3 text-sm font-semibold text-paper-ink transition-colors hover:bg-signal"
              >
                Close
              </button>
            </div>
          ) : formState === 'fallback' ? (
            <div className="flex flex-col items-start py-8">
              <Mail size={28} className="text-signal" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-text-primary">
                Your email app should open.
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-text-secondary">
                The form service is not configured on this deployment, so the message was
                prepared as an email instead. If nothing opened, use the link below or email me
                directly.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={fallbackHref}
                  className="inline-flex items-center gap-2 bg-paper px-5 py-3 text-sm font-semibold text-paper-ink transition-colors hover:bg-signal"
                >
                  Open the email again
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-text-secondary underline decoration-line-strong underline-offset-4 hover:text-text-primary"
                >
                  {site.email}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <span className="block text-xs font-medium uppercase tracking-[0.1em] text-text-secondary">
                  What brings you here?
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {CHIPS.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setSelectedChip(chip === selectedChip ? '' : chip)}
                      aria-pressed={selectedChip === chip}
                      className={`border px-3 py-1.5 text-xs transition-colors ${
                        selectedChip === chip
                          ? 'border-signal-border bg-signal-soft text-signal'
                          : 'border-line text-text-secondary hover:border-line-strong hover:text-text-primary'
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-text-secondary">Name *</span>
                  <input
                    ref={firstFieldRef}
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="border border-line bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-signal-border"
                    placeholder="Your name"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-text-secondary">Email *</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="border border-line bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-signal-border"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-text-secondary">Company or team</span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    className="border border-line bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-signal-border"
                    placeholder="Optional"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-text-secondary">Timeline</span>
                  <input
                    type="text"
                    name="timeline"
                    className="border border-line bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-signal-border"
                    placeholder="e.g. next month, flexible"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium text-text-secondary">Project or role type</span>
                <select
                  name="projectType"
                  className="border border-line bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-signal-border"
                  defaultValue=""
                >
                  <option value="">Select an option</option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium text-text-secondary">Details *</span>
                <textarea
                  required
                  name="details"
                  rows={4}
                  className="resize-none border border-line bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-signal-border"
                  placeholder="The problem, the stage, the scope and what success looks like."
                />
              </label>

              {!endpoint ? (
                <p className="border border-line bg-bg-alt px-4 py-3 text-xs leading-relaxed text-text-secondary">
                  The form endpoint is not configured on this deployment. Submitting will open a
                  prepared email instead, so your message still reaches me.
                </p>
              ) : null}

              {formState === 'error' ? (
                <div className="flex items-start gap-3 border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
                  <AlertCircle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    The message could not be sent. Please try again or email{' '}
                    <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                      {site.email}
                    </a>
                    .
                  </span>
                </div>
              ) : null}

              <div className="flex items-center justify-between gap-4 border-t border-line pt-5">
                <a
                  href={`mailto:${site.email}`}
                  className="hidden text-xs text-text-tertiary underline decoration-line-strong underline-offset-4 hover:text-text-secondary sm:inline"
                >
                  {site.email}
                </a>
                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="inline-flex items-center justify-center gap-2 bg-paper px-5 py-3 text-sm font-semibold text-paper-ink transition-colors hover:bg-signal disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {formState === 'sending' ? (
                    <>
                      <Loader2 size={15} className="animate-spin" aria-hidden="true" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
