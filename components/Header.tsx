"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-nav border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white font-display font-semibold text-lg">
            ce
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
              Corporate Events
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              India
            </span>
          </span>
        </Link>

        {/* Search-style central pill — Airbnb signature */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-3 rounded-full border border-line bg-white pl-5 pr-1.5 py-1.5 shadow-card hover:shadow-cardHover transition-shadow"
        >
          <span className="text-sm font-medium text-ink">Plan an event</span>
          <span className="h-5 w-px bg-line" />
          <span className="text-sm text-ink-muted">Group size</span>
          <span className="h-5 w-px bg-line" />
          <span className="text-sm text-ink-muted">City</span>
          <span className="ml-2 grid h-9 w-9 place-items-center rounded-full bg-accent text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </span>
        </Link>

        {/* Desktop nav + CTA */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-ink hover:bg-line/60 rounded-full transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center rounded-full bg-ink text-white text-sm font-medium px-5 py-2.5 hover:bg-ink/90 transition-colors"
          >
            Get a proposal
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-line"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <div className="container-page py-4 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink border-b border-line last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-ink text-white text-sm font-medium px-5 py-3"
            >
              Get a proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
