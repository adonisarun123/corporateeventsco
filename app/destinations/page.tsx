import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  SectionHeading,
  Eyebrow,
  Card,
  CtaBanner,
} from "@/components/ui";
import { DESTINATIONS, CATEGORY_LABELS, type DestCategory } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Destinations across India",
  description:
    "Corporate events across 30+ cities and getaway destinations in India. Major metros, NCR, Tier 2 cities, and the country's best leadership-offsite destinations.",
};

const ORDER: DestCategory[] = ["metro", "ncr", "tier2", "getaway"];

const CATEGORY_BLURBS: Record<DestCategory, string> = {
  metro:
    "Programs run weekly in every major metro. Strong urban venue ecosystems, mature pickup logistics, and the deepest facilitator availability in the country.",
  ncr:
    "Delhi NCR is the largest single corporate cluster in India — programs here span Aerocity ballrooms, Aravalli resort properties, and multi-night Rishikesh and Corbett retreats.",
  tier2:
    "Growing markets where the corporate base is maturing rapidly — and where distinctive cultural framing can produce program outcomes hard to replicate in metros.",
  getaway:
    "The destinations we send teams to when the program is meant to genuinely change something. Plantation retreats, river-side leadership work, beach offsites, desert isolation, hill stations.",
};

export default function DestinationsIndexPage() {
  const grouped = ORDER.map((cat) => ({
    cat,
    items: DESTINATIONS.filter((d) => d.category === cat),
  }));

  return (
    <>
      {/* HERO */}
      <Section>
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8">
            <Eyebrow>Destinations</Eyebrow>
            <h1 className="mt-4 font-display text-display-xl font-semibold tracking-tight text-ink">
              30+ cities and getaway destinations across India.
            </h1>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-2xl">
              Major metros, NCR cities, Tier 2 markets, and the country&apos;s
              strongest leadership-offsite destinations — every one chosen for
              what it lets a program become.
            </p>
          </div>
        </div>

        {/* Quick-jump nav */}
        <div className="mt-10 flex flex-wrap gap-3">
          {ORDER.map((cat) => (
            <Link
              key={cat}
              href={`#${cat}`}
              className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:border-ink transition-colors"
            >
              {CATEGORY_LABELS[cat]} ({grouped.find((g) => g.cat === cat)?.items.length})
            </Link>
          ))}
        </div>
      </Section>

      {/* GROUPED LISTINGS */}
      {grouped.map(({ cat, items }, idx) => (
        <Section
          key={cat}
          id={cat}
          className={idx % 2 === 0 ? "bg-cream" : ""}
        >
          <div className="flex items-end justify-between gap-6 mb-8">
            <SectionHeading
              eyebrow={CATEGORY_LABELS[cat]}
              title={titleFor(cat)}
              subtitle={CATEGORY_BLURBS[cat]}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((d) => (
              <Card
                key={d.slug}
                href={`/destinations/${d.slug}`}
                imgSrc={d.hero}
                imgAlt={d.name}
                tag={d.state}
                title={d.name}
                subtitle={d.tagline}
              />
            ))}
          </div>
        </Section>
      ))}

      <CtaBanner
        title="Tell us where your team is — we'll tell you where the program should be."
        body="Group size, city, rough date, and what you're trying to accomplish. We'll come back with a destination, a property shortlist, and a program design within 24 hours."
        primary={{ label: "Get my free proposal", href: "/contact" }}
        secondary={{ label: "Browse services", href: "/services" }}
      />
    </>
  );
}

function titleFor(cat: DestCategory): string {
  switch (cat) {
    case "metro":
      return "The seven major metros.";
    case "ncr":
      return "The NCR cluster.";
    case "tier2":
      return "Growing Tier 2 markets.";
    case "getaway":
      return "The country's best corporate getaways.";
  }
}
