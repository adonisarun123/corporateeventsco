import Link from "next/link";
import type { ReactNode } from "react";

/* ---------- Section wrapper ---------- */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

/* ---------- Eyebrow text ---------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-brand">
      {children}
    </div>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${a}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-3 font-display text-display-lg font-semibold tracking-tight text-ink ${a}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[17px] sm:text-lg text-ink-muted leading-relaxed ${a}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------- Buttons ---------- */
type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: BtnProps) {
  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-[15px]",
  }[size];

  const variants = {
    primary: "bg-ink text-white hover:bg-ink/90",
    secondary: "bg-white text-ink border border-line hover:border-ink",
    ghost: "bg-transparent text-ink hover:bg-line/60",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-medium transition-colors ${sizes} ${variants} ${className}`}
    >
      {children}
    </Link>
  );
}

/* ---------- Stats strip ---------- */
export function StatsStrip({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-line bg-white border border-line rounded-3xl shadow-card">
      {items.map((it, idx) => (
        <div key={idx} className="px-5 py-6 sm:py-7 text-center">
          <div className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
            {it.value}
          </div>
          <div className="mt-1 text-xs sm:text-sm text-ink-muted">{it.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Card (Airbnb-listing style) ---------- */
export function Card({
  href,
  imgSrc,
  imgSrcSet,
  imgSizes = "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 90vw",
  imgAlt,
  tag,
  title,
  subtitle,
  meta,
}: {
  href?: string;
  /** Default image URL — should be a small (~600w) thumbnail. */
  imgSrc: string;
  /** Optional srcset across breakpoints for responsive loading. */
  imgSrcSet?: string;
  /** sizes hint for the browser (only applies when srcSet is provided). */
  imgSizes?: string;
  imgAlt: string;
  tag?: string;
  title: string;
  subtitle: string;
  meta?: string;
}) {
  const inner = (
    <div className="card-lift">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-cream to-line">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          srcSet={imgSrcSet}
          sizes={imgSrcSet ? imgSizes : undefined}
          alt={imgAlt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {tag && (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-semibold tracking-wide text-ink">
            {tag}
          </span>
        )}
      </div>
      <div className="pt-3">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-[17px] font-semibold tracking-tight text-ink">
            {title}
          </h3>
          {meta && <span className="text-[13px] text-ink-muted shrink-0">{meta}</span>}
        </div>
        <p className="mt-1 text-sm text-ink-muted line-clamp-2 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
  return href ? (
    <Link href={href} className="block">
      {inner}
    </Link>
  ) : (
    <div>{inner}</div>
  );
}

/* ---------- Pillar card (large) ---------- */
export function PillarCard({
  href,
  imgSrc,
  imgAlt,
  kicker,
  title,
  description,
  bullets,
}: {
  href?: string;
  imgSrc: string;
  imgAlt: string;
  kicker: string;
  title: string;
  description: string;
  bullets?: string[];
}) {
  return (
    <article className="group bg-white rounded-3xl border border-line overflow-hidden shadow-card card-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent h-24" />
      </div>
      <div className="p-6 sm:p-7">
        <Eyebrow>{kicker}</Eyebrow>
        <h3 className="mt-2 font-display text-[22px] sm:text-2xl font-semibold tracking-tight text-ink">
          {title}
        </h3>
        <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">{description}</p>
        {bullets && (
          <ul className="mt-4 space-y-2">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-[14px] text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {href && (
          <Link
            href={href}
            className="mt-5 inline-flex items-center text-sm font-semibold text-ink hover:text-brand"
          >
            Learn more
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1.5 transition-transform group-hover:translate-x-0.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        )}
      </div>
    </article>
  );
}

/* ---------- FAQ accordion (CSS-only with details) ---------- */
export function Faqs({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-t border-b border-line">
      {items.map((it, i) => (
        <details key={i} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-6 text-left">
            <span className="font-display text-lg sm:text-xl font-medium tracking-tight text-ink">
              {it.q}
            </span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-transform group-open:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-[15px] sm:text-base text-ink-muted leading-relaxed">
            {it.a}
          </p>
        </details>
      ))}
    </div>
  );
}

/* ---------- CTA banner ---------- */
export function CtaBanner({
  eyebrow = "Start here",
  title,
  body,
  primary = { label: "Get my free proposal", href: "/contact" },
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-ink text-white">
      <div className="container-page py-16 sm:py-20 lg:py-24 grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Eyebrow>
            <span className="text-white/70">{eyebrow}</span>
          </Eyebrow>
          <h2 className="mt-3 font-display text-display-lg font-semibold tracking-tight">
            {title}
          </h2>
          {body && (
            <p className="mt-5 max-w-2xl text-[17px] text-white/70 leading-relaxed">{body}</p>
          )}
        </div>
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
          <Link
            href={primary.href}
            className="inline-flex items-center justify-center rounded-full bg-white text-ink font-semibold px-7 py-4 hover:bg-cream transition-colors"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-full border border-white/30 text-white font-medium px-7 py-4 hover:border-white transition-colors"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Logo strip ---------- */
export function LogoStrip({
  label = "Trusted by teams at",
  logos,
}: {
  label?: string;
  logos: string[];
}) {
  return (
    <div className="container-page py-12 border-y border-line">
      <p className="text-center text-[12px] uppercase tracking-[0.2em] text-ink-muted">{label}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {logos.map((name) => (
          <span
            key={name}
            className="font-display text-lg sm:text-xl font-semibold tracking-tight text-ink/70 hover:text-ink transition-colors"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
