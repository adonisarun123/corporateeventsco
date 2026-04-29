import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  SectionHeading,
  Eyebrow,
  Card,
  CtaBanner,
} from "@/components/ui";
import { BLOG_POSTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights & guides for HR and L&D leaders",
  description:
    "Practical, opinionated thinking on corporate event design, team building, and leadership development — from 13 years and 550+ programs across India.",
};

export default function BlogIndexPage() {
  const [feature, ...rest] = BLOG_POSTS;
  return (
    <>
      {/* HERO */}
      <Section>
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Insights</Eyebrow>
            <h1 className="mt-4 font-display text-display-xl font-semibold tracking-tight text-ink">
              13 years of earned opinions on what actually changes a team.
            </h1>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-2xl">
              Practical, opinionated thinking on corporate event design, team
              building, and leadership development. Written for HR and L&amp;D
              leaders who want their next program to matter.
            </p>
          </div>
        </div>
      </Section>

      {/* FEATURE */}
      <Section className="pt-0">
        <Link
          href={`/blog/${feature.slug}`}
          className="group block overflow-hidden rounded-3xl border border-line shadow-card card-lift bg-white"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={feature.hero}
                alt={feature.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="text-[11px] uppercase tracking-[0.18em] text-brand font-semibold">
                {feature.category} · Featured
              </div>
              <h2 className="mt-3 font-display text-display-md font-semibold tracking-tight text-ink">
                {feature.title}
              </h2>
              <p className="mt-4 text-[17px] text-ink-muted leading-relaxed">{feature.excerpt}</p>
              <div className="mt-6 inline-flex items-center text-sm font-semibold text-ink">
                Read article
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5 transition-transform group-hover:translate-x-0.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </Section>

      {/* GRID */}
      <Section className="pt-0">
        <SectionHeading eyebrow="More articles" title="The library." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Card
              key={p.slug}
              href={`/blog/${p.slug}`}
              imgSrc={p.hero}
              imgAlt={p.title}
              tag={p.category}
              title={p.title}
              subtitle={p.excerpt}
              meta={p.readingTime}
            />
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Want one designed for your team?"
        body="Tell us your situation and we'll come back with a real recommendation. Custom proposal in 24 hours."
        primary={{ label: "Get my free proposal", href: "/contact" }}
        secondary={{ label: "Browse services", href: "/services" }}
      />
    </>
  );
}
