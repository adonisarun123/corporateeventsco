import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  SectionHeading,
  Eyebrow,
  Button,
  StatsStrip,
  Card,
  PillarCard,
  Faqs,
  CtaBanner,
} from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { STATS, IMG, INDUSTRIES, BLOG_POSTS } from "@/lib/content";
import { DESTINATIONS_BY_SLUG } from "@/lib/destinations";
import { thumbUrl, srcSetFor } from "@/lib/images";

const FEATURED_DESTINATIONS = [
  "bangalore",
  "coorg",
  "goa",
  "rishikesh",
  "delhi",
  "lonavala",
  "chikmagalur",
  "mumbai",
  "kabini",
  "jaisalmer",
].map((slug) => DESTINATIONS_BY_SLUG[slug]);

export const metadata: Metadata = {
  title:
    "Corporate Events India | Team Building, Offsites & Outings in India",
  description:
    "India's outcome-led corporate events company. Team building, offsites, leadership training, and curated outings across 30+ cities. 550+ companies. Custom proposals in 24 hours.",
  alternates: { canonical: "https://corporateeventsindia.com" },
  openGraph: {
    title: "Corporate Events India",
    description:
      "Team building, offsites, leadership training and curated outings across 30+ cities in India.",
    url: "https://corporateeventsindia.com",
    images: [{ url: "https://corporateeventsindia.com/icon.svg" }],
  },
};

const HOW_WE_WORK = [
  {
    n: "01",
    title: "Tell us your brief",
    body:
      "Group size, city, rough date, and what you're hoping to accomplish. Two minutes to fill out. Genuinely useful to have.",
  },
  {
    n: "02",
    title: "Proposal in 24 hours",
    body:
      "A custom proposal lands in your inbox. Not a brochure — a real recommendation with activities, sample schedule, and venue choices.",
  },
  {
    n: "03",
    title: "Confirm and build anticipation",
    body:
      "Once you lock the date, we handle prep. We send teaser content to your team so they're excited before the day arrives.",
  },
  {
    n: "04",
    title: "You participate. We run it.",
    body:
      "Our facilitators and event managers handle everything on the day. You show up and enjoy it like everyone else.",
  },
];

const OUTCOMES = [
  {
    tag: "Tech · Coorg",
    title: "A newly merged 85-person engineering team",
    body:
      "Two engineering teams that had been organisationally combined four months earlier were still operating like two separate groups. A two-day outbound program at a coffee estate built around activities that required genuine cross-team collaboration produced real relationships and a combined team that started behaving like one.",
    img: IMG.coorg,
  },
  {
    tag: "BFSI · Goa",
    title: "24 senior managers, the conversation they had been avoiding",
    body:
      "A bank's regional leadership team had worked together for years and been honest with each other almost never. A day-and-a-half program combining Mafia Wars with structured facilitation produced the kind of candour that organisations typically spend years trying to build.",
    img: IMG.goa,
  },
  {
    tag: "Pharma · Bangalore",
    title: "150 new hires, before formal induction",
    body:
      "A Campus to Corporate program for new hires from top institutes, delivered before formal induction. Three months later, managers reported the cohort was more proactive, more comfortable asking for feedback, and significantly less likely to leave early.",
    img: IMG.campus,
  },
];

const HOME_FAQS = [
  {
    q: "What types of corporate events do you organise?",
    a: "Four main types: corporate team outings at curated resort properties, team building activities across indoor, outdoor, virtual and outbound formats, specialised training programs (leadership and campus to corporate), and curated venue stays. Most clients combine two or more in a single program.",
  },
  {
    q: "How much does a corporate event cost in India?",
    a: "Every program is custom-built around your group size, location, format, and goals. We don't have a standard rate card because a good program shouldn't be priced before it's designed. You get a fully itemised proposal with no hidden costs, delivered within 24 hours of your brief.",
  },
  {
    q: "What is the minimum group size you work with?",
    a: "We work with groups from 10 people upward. For very large groups of 200 to 1,000+, we design parallel activity streams so every participant is genuinely active — not watching from the side.",
  },
  {
    q: "How far in advance should we book?",
    a: "For peak season (October to March), 8 to 12 weeks ahead gives you the best venue and facilitator options. Large groups of 100+ benefit from 10 to 14 weeks. Off-peak weekday programs can often be arranged in 4 to 6 weeks. Virtual programs can usually be set up within 1 to 2 weeks.",
  },
  {
    q: "Can you manage everything: venue, transport, food, and activities?",
    a: "Yes. One brief, one team, one point of contact, one invoice. We manage venue, transport, all meals, team building facilitation, photography, and post-event documentation. You deal with us and nobody else.",
  },
];

/** WebSite + WebPage JSON-LD for the homepage — gives Google a sitelinks
 * search box and richer brand presence. */
const HOMEPAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://corporateeventsindia.com",
  name: "Corporate Events India",
  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://corporateeventsindia.com/destinations?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const HOMEPAGE_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_FAQ_JSONLD) }}
      />

      {/* HERO */}
      <section className="relative">
        <div className="container-page pt-12 pb-10 sm:pt-20 sm:pb-16">
          <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Corporate events · India · Since 2013</Eyebrow>
              <h1 className="mt-4 font-display text-display-xl font-semibold tracking-tight text-ink">
                Corporate events your team will{" "}
                <span className="underline-brush">actually</span> talk about.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-ink-muted leading-relaxed max-w-2xl">
                We design and execute corporate events that change how teams
                work. Team building, offsites, leadership programs and curated
                outings across 30+ cities — every program built around one
                question most companies never ask.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-cream border border-line px-5 py-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-white text-sm font-semibold">
                  ?
                </span>
                <span className="font-display text-[15px] sm:text-base font-medium text-ink">
                  What should be different after this?
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#plan" size="lg">
                  Get a free proposal
                </Button>
                <Button href="/services" size="lg" variant="secondary">
                  See what we do
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
                <span>
                  <strong className="text-ink">87%</strong> rebook within 12 months
                </span>
                <span>·</span>
                <span>
                  <strong className="text-ink">4.9/5</strong> client rating
                </span>
                <span>·</span>
                <span>
                  <strong className="text-ink">24-hour</strong> proposals
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={IMG.hero}
                    alt="A facilitated corporate team workshop in India"
                    className="h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    width={900}
                    height={1125}
                  />
                </div>
                <div className="hidden sm:block absolute -left-6 -bottom-6 w-56 rounded-2xl bg-white border border-line shadow-card p-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    Last week · Coorg
                  </div>
                  <div className="mt-1 font-display text-base font-semibold text-ink leading-snug">
                    &ldquo;The best team experience my team ever had.&rdquo;
                  </div>
                  <div className="mt-1 text-[12px] text-ink-muted">
                    — EVP &amp; Head HR, Infosys
                  </div>
                </div>
                <div className="hidden lg:block absolute -right-6 top-8 w-44 rounded-2xl bg-ink text-white p-4 shadow-card">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                    Today
                  </div>
                  <div className="mt-1 font-display text-base font-semibold leading-snug">
                    Proposal sent in 6h 12m
                  </div>
                  <div className="mt-1 text-[12px] text-white/60">
                    For a 220-person leadership offsite
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 sm:mt-16">
            <StatsStrip items={STATS} />
          </div>
        </div>
      </section>

      {/* TRUST STRIP — credibility built early */}
      <div className="bg-white border-y border-line">
        <div className="container-page py-10 sm:py-12">
          <p className="text-center text-[12px] uppercase tracking-[0.2em] text-ink-muted">
            Trusted by HR &amp; L&amp;D teams at
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {["Infosys", "SAP", "Genpact", "Cipla", "TVS", "Target", "ITC", "HDFC"].map(
              (name) => (
                <span
                  key={name}
                  className="font-display text-lg sm:text-xl font-semibold tracking-tight text-ink/70"
                >
                  {name}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* DISARM — what most events get wrong */}
      <Section className="bg-cream">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The honest part"
              title="Here's what most corporate events get wrong."
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-[17px] text-ink leading-relaxed">
            <p>
              Be honest: you&apos;ve been to one of these. A resort is booked. A
              caterer is called. Some games are added to the schedule. Everyone
              shows up, takes photos, and goes home. The survey says 4.1 out of
              5. And three weeks later, nobody can tell you what the point of
              it was.
            </p>
            <p className="font-display text-xl text-ink">
              That is not a bad event. That is a well-executed non-event.
            </p>
            <p className="text-ink-muted">
              The best corporate events are not just fun. They are purposeful.
              They help teams that don&apos;t normally talk to each other
              actually connect. They surface how people lead and communicate in
              ways the office never shows. They create memories teams still
              reference six months later when things get hard.
            </p>
          </div>
        </div>
      </Section>

      {/* WHAT WE DO — pillars */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Four kinds of corporate experiences. The right one depends on what you're trying to accomplish."
          subtitle="Every program starts with the outcome — then we choose the format, activities, and facilitation that fit. Not the other way around."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <PillarCard
            href="/services#team-outings"
            imgSrc={IMG.outing}
            imgAlt="Corporate resort outing in India"
            kicker="Team outings"
            title="Corporate Team Outings"
            description="Full-day or overnight programs at hand-picked resorts, with team building woven into the itinerary from the start. Not a day off with games thrown in."
            bullets={["Venue + transport + meals", "Custom schedule", "On-ground facilitation"]}
          />
          <PillarCard
            href="/services#team-building"
            imgSrc={IMG.building}
            imgAlt="Corporate team building activity"
            kicker="100+ activities"
            title="Team Building Activities"
            description="Indoor, outdoor, outbound, and virtual. Every activity mapped to a specific outcome — not what looks good in a catalogue."
            bullets={["Indoor & outdoor", "Outbound for leadership", "Virtual for remote teams"]}
          />
          <PillarCard
            href="/services#training"
            imgSrc={IMG.training}
            imgAlt="Corporate leadership training"
            kicker="L&D"
            title="Specialised Training"
            description="Leadership development, soft skills, and Campus to Corporate. Structured programs with clear learning goals and documented outcomes."
            bullets={[
              "Leadership training",
              "Campus to Corporate",
              "Outbound corporate training",
            ]}
          />
          <PillarCard
            href="/services#stays"
            imgSrc={IMG.stays}
            imgAlt="Premium corporate offsite resort"
            kicker="82+ destinations"
            title="Curated Corporate Stays"
            description="Resort and property partners across India, every one vetted by our team for corporate use — activity space, food quality, room capacity, service."
            bullets={["Taj, Marriott, Hilton, Hyatt", "Boutique properties", "Adventure camps"]}
          />
        </div>
      </Section>

      {/* DESTINATIONS — Airbnb-style scrolling carousel */}
      <Section className="bg-white border-t border-line">
        <div className="flex items-end justify-between gap-6 mb-8">
          <SectionHeading
            eyebrow="Destinations"
            title="30+ cities and getaway destinations across India."
            subtitle="Major metros, NCR, Tier 2 markets, and the country's strongest leadership-offsite destinations — every one with its own page."
          />
          <Link
            href="/destinations"
            className="hidden sm:inline-flex shrink-0 text-sm font-semibold text-ink hover:text-brand"
          >
            See all destinations →
          </Link>
        </div>
        <div className="-mx-5 sm:-mx-8 lg:-mx-12">
          <div className="px-5 sm:px-8 lg:px-12 flex gap-5 overflow-x-auto no-scrollbar scroll-x-snap pb-2">
            {FEATURED_DESTINATIONS.map((d, i) => (
              <div key={d.slug} className="w-[260px] sm:w-[300px] shrink-0">
                <Card
                  href={`/destinations/${d.slug}`}
                  imgSrc={thumbUrl(d.visual, i)}
                  imgSrcSet={srcSetFor(d.visual, i, [320, 480, 600, 800])}
                  imgSizes="(max-width: 640px) 75vw, 320px"
                  imgAlt={`Corporate events in ${d.name} — ${d.state}`}
                  tag={d.state}
                  title={d.name}
                  subtitle={d.tagline}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* HOW WE WORK */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="How we work"
          title="Four simple steps. No surprises along the way."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOW_WE_WORK.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border border-line bg-white p-6 sm:p-7 card-lift"
            >
              <div className="font-display text-3xl font-semibold text-brand">{s.n}</div>
              <h3 className="mt-3 font-display text-[19px] font-semibold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] text-ink-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* INLINE LEAD FORM — visible above the fold for serious inquirers */}
      <Section id="plan">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Plan your event"
              title="Tell us your brief. We'll send a real proposal in 24 hours."
              subtitle="No automated sequences. No commitment. Every brief is read by a senior strategist who has run programs like yours."
            />
            <div className="mt-8 space-y-5 text-[15px] text-ink leading-relaxed">
              <Trust
                title="A real strategist, not a junior account manager"
                body="Your brief lands with someone who has personally run 200+ corporate programs."
              />
              <Trust
                title="A genuine recommendation, not a template"
                body="We design from your group, your dates, your outcome — not from a brochure."
              />
              <Trust
                title="One point of contact. One invoice. No surprises."
                body="End-to-end execution: venue, transport, food, facilitation, photography, post-event report."
              />
            </div>
            <div className="mt-8 rounded-2xl bg-cream border border-line p-5">
              <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
                Prefer to talk?
              </div>
              <div className="mt-2 text-[15px] text-ink leading-relaxed">
                Call{" "}
                <a href="tel:+919986058666" className="font-semibold text-ink hover:text-brand">
                  +91 99860 58666
                </a>{" "}
                or{" "}
                <a
                  href="https://wa.me/919986058666"
                  className="font-semibold text-ink hover:text-brand"
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp us
                </a>
                . Mon–Sat · 9:30 am – 6:30 pm IST.
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* OUTCOMES */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="What good looks like"
          title="Three real outcomes from the last quarter."
          subtitle="Names removed. Outcomes intact. This is what we mean when we say programs should change something."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {OUTCOMES.map((o, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-3xl border border-line shadow-card card-lift bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={o.img}
                  alt={o.tag}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="text-[11px] uppercase tracking-[0.18em] text-brand font-semibold">
                  {o.tag}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                  {o.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">{o.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* PHILOSOPHY STRIP */}
      <section className="bg-ink text-white">
        <div className="container-page py-16 sm:py-20 grid gap-10 lg:grid-cols-3">
          <div>
            <Eyebrow>
              <span className="text-white/70">Our point of view</span>
            </Eyebrow>
            <h2 className="mt-3 font-display text-display-md font-semibold tracking-tight">
              Three things we believe — after 13 years and 550+ programs.
            </h2>
          </div>
          <div className="space-y-4 lg:col-span-2 grid sm:grid-cols-3 gap-6 lg:gap-8 lg:space-y-0">
            {[
              {
                k: "Outcome > activity",
                v: "The activity is never the point. It is the trigger. The point is the conversation that follows.",
              },
              {
                k: "Facilitation > fun",
                v: "A great venue does not save a poorly designed program. A trained facilitator can save almost anything.",
              },
              {
                k: "Design > logistics",
                v: "Choose the venue after you have chosen the outcome. Not the other way around.",
              },
            ].map((p) => (
              <div key={p.k} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="font-display text-xl font-semibold">{p.k}</div>
                <p className="mt-2 text-[15px] text-white/70 leading-relaxed">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <Section>
        <SectionHeading
          eyebrow="Industries we know best"
          title="We've run programs across every major sector in India."
          subtitle="These are the industries where we have the deepest experience and the clearest sense of what works."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className="rounded-2xl border border-line bg-white p-6 card-lift">
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                {ind.name}
              </h3>
              <p className="mt-2 text-[15px] text-ink-muted leading-relaxed">{ind.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BLOG */}
      <Section id="blog" className="bg-cream">
        <div className="flex items-end justify-between gap-6 mb-8">
          <SectionHeading
            eyebrow="From the blog"
            title="13 years of earned opinions."
            subtitle="Practical, opinionated thinking on corporate event design, team building, and leadership development — for HR and L&D leaders."
          />
          <Link
            href="/blog"
            className="hidden sm:inline-flex shrink-0 text-sm font-semibold text-ink hover:text-brand"
          >
            All articles →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.slice(0, 6).map((p) => (
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
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full bg-ink text-white text-sm font-semibold px-6 py-3"
          >
            All articles
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions before you start." />
        <div className="mt-10">
          <Faqs items={HOME_FAQS} />
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner
        eyebrow="Start here"
        title="Ready to plan something worth showing up for?"
        body="Tell us about your team. Group size, city, and what you're trying to accomplish. That's all we need to get started."
        primary={{ label: "Get my free proposal", href: "/contact" }}
        secondary={{ label: "WhatsApp us", href: "https://wa.me/919986058666" }}
      />
    </>
  );
}

function Trust({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-4">
      <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-white">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <div>
        <div className="font-display text-[16px] font-semibold text-ink">{title}</div>
        <p className="mt-1 text-[14px] text-ink-muted leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
