import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Section,
  SectionHeading,
  Eyebrow,
  Card,
  Faqs,
  CtaBanner,
  Button,
} from "@/components/ui";
import { DESTINATIONS, DESTINATIONS_BY_SLUG, CATEGORY_LABELS } from "@/lib/destinations";

type Params = { slug: string };

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const d = DESTINATIONS_BY_SLUG[params.slug];
  if (!d) return {};
  return {
    title: `Corporate events in ${d.name}`,
    description: `${d.tagline} Custom corporate events, team building activities, and leadership programs in ${d.name}. Free proposal in 24 hours.`,
    openGraph: {
      title: `Corporate events in ${d.name} | Corporate Events India`,
      description: d.tagline,
      images: [{ url: d.hero }],
    },
  };
}

export default function DestinationPage({ params }: { params: Params }) {
  const d = DESTINATIONS_BY_SLUG[params.slug];
  if (!d) notFound();

  const related = (d.nearby ?? [])
    .map((n) => DESTINATIONS_BY_SLUG[n.href.replace("/destinations/", "")])
    .filter(Boolean);

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="container-page pt-12 pb-10 sm:pt-16">
          <div className="text-[12px] uppercase tracking-[0.18em] font-semibold flex items-center gap-3">
            <Link href="/destinations" className="text-ink-muted hover:text-ink">
              Destinations
            </Link>
            <span className="text-ink-muted">·</span>
            <span className="text-brand">{CATEGORY_LABELS[d.category]}</span>
            <span className="text-ink-muted">·</span>
            <span className="text-ink-muted">{d.state}</span>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-display text-display-xl font-semibold tracking-tight text-ink">
                Corporate events in {d.name}.
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-ink-muted leading-relaxed max-w-2xl">
                {d.tagline}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact" size="lg">
                  Get a {d.name} proposal
                </Button>
                <Button href="/services" size="lg" variant="secondary">
                  Browse services
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.hero} alt={d.name} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Quick facts strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line bg-white border border-line rounded-3xl shadow-card">
            <Fact label="Best time" value={d.bestTime.split(".")[0] + "."} />
            <Fact label="Group sizes" value={d.groupSizes} />
            <Fact label="Typical formats" value={d.formats.map((f) => f.name).join(" · ")} />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The honest part"
              title={`What works — and what doesn't — in ${d.name}.`}
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-[17px] text-ink leading-relaxed">
            {d.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY IT WORKS */}
      <Section className="bg-cream">
        <SectionHeading eyebrow="Why it works" title={`Reasons we run programs in ${d.name}.`} />
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {d.whyItWorks.map((b, i) => (
            <li
              key={i}
              className="rounded-3xl border border-line bg-white p-6 sm:p-7 card-lift flex gap-4"
            >
              <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-white text-sm font-semibold">
                {i + 1}
              </span>
              <p className="text-[16px] text-ink leading-relaxed">{b}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FORMATS */}
      <Section>
        <SectionHeading
          eyebrow="Recommended formats"
          title={`How we design programs in ${d.name}.`}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {d.formats.map((f) => (
            <div
              key={f.name}
              className="rounded-3xl border border-line bg-white p-6 sm:p-7 card-lift"
            >
              <div className="font-display text-lg font-semibold tracking-tight text-ink">
                {f.name}
              </div>
              <p className="mt-2 text-[15px] text-ink-muted leading-relaxed">{f.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROGRAM IDEAS */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Program ideas"
          title="Three real program shapes we'd recommend."
          subtitle="Specific enough to build from. Customisable around your group, dates and outcomes."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {d.programIdeas.map((p, i) => (
            <article
              key={i}
              className="rounded-3xl border border-line bg-white p-7 sm:p-8 card-lift"
            >
              <div className="font-display text-3xl font-semibold text-brand">
                0{i + 1}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* VENUES + DETAILS */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <Eyebrow>Venue partners</Eyebrow>
            <h2 className="mt-3 font-display text-display-md font-semibold tracking-tight text-ink">
              Where we run {d.name} programs.
            </h2>
            <p className="mt-4 text-[16px] text-ink-muted leading-relaxed max-w-2xl">
              These are properties we've vetted for corporate-grade activity
              space, catering quality at scale, and on-the-day service
              reliability. Final shortlists depend on your group size, dates,
              and program format.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {d.venues.map((v) => (
                <span
                  key={v}
                  className="rounded-full bg-cream px-4 py-2 text-[14px] text-ink border border-line"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5 rounded-3xl bg-cream border border-line p-7">
            <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
              Best time to run a program
            </div>
            <p className="mt-2 text-[15px] text-ink leading-relaxed">{d.bestTime}</p>
            <div className="mt-5 text-[12px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
              Group sizes we run here
            </div>
            <p className="mt-2 text-[15px] text-ink leading-relaxed">{d.groupSizes}</p>
          </aside>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="FAQ"
          title={`Common questions about corporate events in ${d.name}.`}
        />
        <div className="mt-10">
          <Faqs items={d.faqs} />
        </div>
      </Section>

      {/* RELATED */}
      {related.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="Nearby"
            title="Destinations our clients often pair with this one."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.slice(0, 4).map((rd) => (
              <Card
                key={rd.slug}
                href={`/destinations/${rd.slug}`}
                imgSrc={rd.hero}
                imgAlt={rd.name}
                tag={rd.state}
                title={rd.name}
                subtitle={rd.tagline}
              />
            ))}
          </div>
        </Section>
      )}

      <CtaBanner
        eyebrow="Plan in 24 hours"
        title={`Get a custom proposal for your ${d.name} program.`}
        body={`Tell us your group size, dates, and what you're trying to accomplish. We'll send a real recommendation — venue shortlist, sample itinerary, activity plan — within 24 hours.`}
        primary={{ label: `Plan my ${d.name} program`, href: "/contact" }}
        secondary={{ label: "WhatsApp us", href: "https://wa.me/919986058666" }}
      />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-5 py-5 sm:py-6">
      <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
        {label}
      </div>
      <div className="mt-2 text-[15px] text-ink leading-snug">{value}</div>
    </div>
  );
}
