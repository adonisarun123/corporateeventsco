import type { Metadata } from "next";
import {
  Section,
  SectionHeading,
  Eyebrow,
  StatsStrip,
  Faqs,
  CtaBanner,
} from "@/components/ui";
import { STATS, IMG, INDUSTRIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "About us",
  description:
    "13 years. 550+ companies. 82+ destinations. We design corporate events around clear outcomes, run by trained facilitators who change behaviour.",
};

const TESTIMONIALS = [
  {
    quote:
      "I have never seen something so engaging that could captivate a senior-level audience. The concept, execution, and integration were fantastic — the best team experience my team ever had.",
    name: "EVP & Head HR",
    org: "Infosys",
  },
  {
    quote:
      "The exercises were well designed with a lot of learning for us — especially on change management and collaboration. I was impressed by your professionalism and energy throughout.",
    name: "VP",
    org: "SAP India",
  },
  {
    quote: "This was one of the best trainings in an outbound in 6 to 7 years.",
    name: "Senior Manager",
    org: "Genpact",
  },
  {
    quote:
      "We've partnered for our Campus to Corporate training for three straight years. The program captures our leadership competencies perfectly.",
    name: "L&D Leader",
    org: "TVS",
  },
];

const APPROACH = [
  {
    n: "01",
    title: "We listen before we recommend",
    body:
      "We do not send a catalogue and ask you to pick. We ask about your team's current situation: what's working, what's not, what you've tried. Only after that do we suggest a format.",
  },
  {
    n: "02",
    title: "We design toward a clear outcome",
    body:
      "Every element of a program is chosen to serve the learning goal. Sequence of activities, debrief format, timing, evening structure — all of it intentional.",
  },
  {
    n: "03",
    title: "We own the execution completely",
    body:
      "Every vendor, every timeline, every backup plan. One contact from the first brief to the final report. When something unexpected happens, our team resolves it before it reaches your attention.",
  },
  {
    n: "04",
    title: "We document what changed",
    body:
      "Every program ends with a post-event report. Facilitator observations, feedback summary, patterns noticed, and recommendations. The reason so many clients return.",
  },
];

const OPINIONS = [
  {
    k: "On activities",
    v: "The activity is never the point. It is the trigger. The point is the conversation the facilitator has with the group after — and how well it connects what just happened to what needs to change at work.",
  },
  {
    k: "On venues",
    v: "A great venue does not save a poorly designed program. A modest venue does not limit a well-designed one. Choose the venue after you have chosen the outcome.",
  },
  {
    k: "On virtual",
    v: "Virtual team building is not a compromise. For distributed teams, it is the most important format. A well-facilitated virtual program consistently outperforms an in-person program nobody wanted to travel to.",
  },
  {
    k: "On frequency",
    v: "One annual event cannot carry a year's worth of engagement. Teams that feel genuinely connected have regular touchpoints — not just a big annual day and nothing else.",
  },
];

const ABOUT_FAQS = [
  {
    q: "How long have you been running corporate events in India?",
    a: "Over 13 years. In that time we've worked with 550+ organisations, run programs for 1.5 lakh+ participants, and built a delivery network across 82+ destinations — from premium hotel chains to boutique coffee estates, adventure camps, and forest retreats.",
  },
  {
    q: "What makes your corporate events different?",
    a: "Three things. We design every program around a specific outcome, not a catalogue of options. Our facilitators are trained professionals in experiential learning, not generalists hired for the day. And we own the entire experience from one team — venue, transport, activities, meals, documentation.",
  },
  {
    q: "Which companies have you worked with?",
    a: "Across IT, BFSI, manufacturing, consulting, pharma, and FMCG — including Infosys, SAP India, Genpact, Cipla, TVS, Target Corporation, and many others. From 200-person growth-stage companies to enterprises with tens of thousands of employees.",
  },
  {
    q: "Do you work with small teams or only large groups?",
    a: "Both. Our minimum is 10. For very large groups of 200 to 1,000+, we design multiple parallel activity streams managed by multiple facilitators so every person is engaged, not just present.",
  },
  {
    q: "Where are you based and which cities do you serve?",
    a: "82+ destinations across India: Bangalore, Delhi, Mumbai, Hyderabad, Chennai, Pune, Kolkata, Gurgaon, Noida, Jaipur, Kochi, Chandigarh, Goa, Coimbatore, Ahmedabad and more. For outbound programs we access destinations from Coorg and Kabini in the south to Rishikesh and Manali in the north.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <Section>
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>About us</Eyebrow>
            <h1 className="mt-4 font-display text-display-xl font-semibold tracking-tight text-ink">
              We've been running corporate events in India for years. Here's what
              that taught us.
            </h1>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-2xl">
              The first question most event companies ask is:{" "}
              <em className="text-ink">what's the budget?</em> The first question
              we ask is: <em className="text-ink">what do you want to be different
              after this?</em> That single shift in thinking is why we are still
              here after 13 years. And it is why the vast majority of our clients come back.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG.facilitation}
                alt="A facilitator running a debrief"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* STATS */}
      <Section className="pt-0">
        <StatsStrip items={STATS} />
      </Section>

      {/* THE IDEA */}
      <Section className="bg-cream">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The idea behind everything we do"
              title="Experience changes people in ways that instruction never can."
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-[17px] text-ink leading-relaxed">
            <p>
              You can show a team a slide about good communication. You can
              explain trust-building in ten points. You can hand out a workbook.
              And most of it will be forgotten before the week is out.
            </p>
            <p>
              But put that same team through a Holey Pipes challenge — moving
              water through a leaking pipe system in real time, with actual
              pressure and actual consequences — and something different happens.
              The facilitator holds up a mirror:{" "}
              <em>Here is what your communication looks like when things go wrong. Here is exactly where it broke down. What do you want to do about that?</em>
            </p>
            <p className="font-display text-xl text-ink">
              That insight carries back to the office. Not because someone told
              them to think differently. Because they saw themselves clearly.
            </p>
          </div>
        </div>
      </Section>

      {/* FACILITATION TEAM */}
      <Section>
        <SectionHeading
          eyebrow="Our facilitation team"
          title="In any corporate event, the facilitator is the most important variable."
          subtitle="Not the venue. Not the activity. The facilitator."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.team} alt="Our facilitators in action" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-5 text-[17px] text-ink leading-relaxed">
            <p>
              Here is why: the activity creates an experience. The facilitator
              converts that experience into awareness. And awareness is the only
              thing that actually changes behaviour.
            </p>
            <p>
              Our facilitators come from professional corporate backgrounds, not
              just training theory. They understand how IT companies work, what
              BFSI hierarchies look like, the pressure inside consulting firms,
              and the scale challenges of manufacturing.
            </p>
            <p>
              They are trained in structured debrief methodology — the ability to
              watch a group closely, articulate what they observed with precision,
              and create space for genuine insight without triggering defensiveness.
              This skill takes years to build. We invest in it continuously.
            </p>
          </div>
        </div>
      </Section>

      {/* APPROACH */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="How we approach every program"
          title="Four commitments we hold ourselves to."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {APPROACH.map((s) => (
            <div key={s.n} className="rounded-3xl border border-line bg-white p-7 card-lift">
              <div className="font-display text-3xl font-semibold text-brand">{s.n}</div>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] text-ink-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeading eyebrow="What our clients say" title="In their own words." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="rounded-3xl border border-line bg-white p-7 card-lift">
              <svg width="32" height="24" viewBox="0 0 32 24" className="text-brand mb-4" fill="currentColor">
                <path d="M0 24V12C0 5.373 5.373 0 12 0v6C8.686 6 6 8.686 6 12h6v12H0zm20 0V12c0-6.627 5.373-12 12-12v6c-3.314 0-6 2.686-6 6h6v12H20z" />
              </svg>
              <blockquote className="font-display text-lg sm:text-xl text-ink leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-ink-muted">
                <span className="font-semibold text-ink">{t.name}</span>, {t.org}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* OPINIONS */}
      <section className="bg-ink text-white">
        <div className="container-page py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-6">
              <Eyebrow><span className="text-white/70">13 years of earned opinions</span></Eyebrow>
              <h2 className="mt-3 font-display text-display-lg font-semibold tracking-tight">
                We share them openly. We think informed clients make better partners.
              </h2>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {OPINIONS.map((o) => (
              <div key={o.k} className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-7">
                <div className="font-display text-lg font-semibold">{o.k}</div>
                <p className="mt-2 text-[15px] text-white/70 leading-relaxed">{o.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <Section>
        <SectionHeading
          eyebrow="The industries we understand best"
          title="Where we have the deepest experience."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className="rounded-2xl border border-line bg-white p-6 card-lift">
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{ind.name}</h3>
              <p className="mt-2 text-[15px] text-ink-muted leading-relaxed">{ind.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT WE DO NOT DO */}
      <Section className="bg-cream">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="A note on what we do not do"
              title="The commitments behind every program."
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-[17px] text-ink leading-relaxed">
            <p>
              We do not book venues and wish you luck. We do not send a catalogue
              and ask you to pick three things. We do not assign whoever is
              available to your program and call it facilitated.
            </p>
            <p>
              What we do: we listen, we design, we execute, and we document.
              Every step with the same level of care. A corporate event that
              gets everything right except the facilitation is not a good
              corporate event. And one that nails the facilitation but fails on
              logistics creates a different kind of disappointment.
            </p>
            <p className="font-display text-xl text-ink">
              All of it matters. All of it is ours to own.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Frequently asked." />
        <div className="mt-10">
          <Faqs items={ABOUT_FAQS} />
        </div>
      </Section>

      <CtaBanner
        title="Want to see what a designed program looks like for your team?"
        body="Tell us about your group and what you're trying to accomplish. We'll send a custom proposal in 24 hours."
        primary={{ label: "Get my free proposal", href: "/contact" }}
        secondary={{ label: "Browse services", href: "/services" }}
      />
    </>
  );
}
