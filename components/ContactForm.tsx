"use client";

import { useState } from "react";

const GROUP_SIZES = ["1–20", "21–50", "51–100", "101–200", "201–500", "500+"];
const PROGRAM_TYPES = [
  "Team Outing",
  "Team Building Activity",
  "Virtual Program",
  "Leadership Training",
  "Soft Skills",
  "Campus to Corporate",
  "Not Sure",
];

const ROLES = ["HR", "L&D", "Admin", "Other"];

const inputCls =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted focus:border-ink outline-none transition-colors";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-line bg-white p-8 sm:p-10 shadow-card text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
          Thanks. We&apos;ve got your brief.
        </h3>
        <p className="mt-3 text-ink-muted leading-relaxed max-w-md mx-auto">
          Someone on our team will confirm receipt within 4 hours — a real
          person, not an automated sequence. Your custom proposal will land in
          your inbox within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-card"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required>
          <input id="name" name="name" type="text" required className={inputCls} placeholder="Priya Iyer" />
        </Field>
        <Field label="Work email" htmlFor="email" required>
          <input id="email" name="email" type="email" required className={inputCls} placeholder="priya@company.com" />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" name="phone" type="tel" className={inputCls} placeholder="+91 99860 58666" />
        </Field>
        <Field label="Organisation" htmlFor="org">
          <input id="org" name="org" type="text" className={inputCls} placeholder="Company name" />
        </Field>
        <Field label="Your role" htmlFor="role">
          <select id="role" name="role" className={inputCls} defaultValue="">
            <option value="" disabled>Select a role</option>
            {ROLES.map((r) => <option key={r}>{r}</option>)}
          </select>
        </Field>
        <Field label="Number of participants" htmlFor="size">
          <select id="size" name="size" className={inputCls} defaultValue="">
            <option value="" disabled>Select a group size</option>
            {GROUP_SIZES.map((g) => <option key={g}>{g}</option>)}
          </select>
        </Field>
        <Field label="Preferred city or destination" htmlFor="city">
          <input id="city" name="city" type="text" className={inputCls} placeholder="Bangalore, Coorg, Goa…" />
        </Field>
        <Field label="Type of program" htmlFor="program">
          <select id="program" name="program" className={inputCls} defaultValue="">
            <option value="" disabled>Select a program type</option>
            {PROGRAM_TYPES.map((p) => <option key={p}>{p}</option>)}
          </select>
        </Field>
        <Field label="Preferred date or month" htmlFor="when">
          <input id="when" name="when" type="text" className={inputCls} placeholder="July 2026 / Q3 / flexible" />
        </Field>

        <Field
          full
          label="Tell us what you're trying to accomplish"
          htmlFor="goal"
          helper="Optional — but the more you share, the more useful the proposal."
        >
          <textarea
            id="goal"
            name="goal"
            rows={5}
            className={`${inputCls} resize-y`}
            placeholder="What should be different about this team after the program? Any specific dynamics you're hoping to address?"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-ink text-white font-semibold px-7 py-4 hover:bg-ink/90 transition-colors w-full sm:w-auto"
      >
        Submit · Proposal in 24 hours
      </button>
      <p className="mt-3 text-[13px] text-ink-muted">
        A real person reads every submission. No automated sequences. No commitment required.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  helper,
  children,
  full,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  helper?: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="block text-[13px] font-semibold text-ink mb-1.5">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
      {helper && <span className="block mt-1.5 text-[12px] text-ink-muted">{helper}</span>}
    </label>
  );
}
