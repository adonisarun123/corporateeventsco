import type { Metadata } from "next";
import {
  Section,
  SectionHeading,
  Eyebrow,
  Faqs,
} from "@/components/ui";
import { SITE } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Planning a corporate event? Share your group size, city, and goal. Free custom proposal delivered in 24 hours. No commitment needed.",
};

const STEPS = [
  {
    when: "Within 4 hours",
    title: "Receipt confirmed",
    body:
      "Someone on our team confirms receipt. If we need a couple of extra details to build an accurate proposal, we will ask.",
  },
  {
    when: "Within 24 hours",
    title: "A proper proposal",
    body:
      "Not a brochure. A real recommendation based on your group size, goals, city, and format — with activity suggestions, sample itinerary, venue options, and logistics overview.",
  },
  {
    when: "If you'd like a call",
    title: "On your time",
    body:
      "We'll set one up at your convenience. But we will not call before you are ready.",
  },
];

const COMMON_THINGS = [
  {
    q: "I've done team outings before, and they were fine, but I need this one to actually mean something.",
    a: "This is the most common thing we hear. Tell us what 'fine' looked like last time. It helps us design something genuinely different.",
  },
  {
    q: "I have 200 people, and I don't know where to start.",
    a: "200 is not unusual for us. We've managed programs twice that size. For large groups, the biggest risk is not the venue — it's the activity design. A program for 200 needs parallel activity streams. We'll walk you through it.",
  },
  {
    q: "My budget is limited, but I still want it to be good.",
    a: "Good programs do not require unlimited money. They require a clear objective. Tell us what you are trying to achieve and we will design toward it. Our proposals are itemised so you can see exactly what each part involves.",
  },
  {
    q: "I'm not sure if we need team building, training, or just a day off.",
    a: "A genuinely good question. Most event companies will not help you answer it honestly because they're trying to sell you a product. We will recommend based on your team's situation — even if the right answer is something simpler than what you expected.",
  },
];

const CITIES = {
  metros: ["Bangalore", "Delhi", "Mumbai", "Hyderabad", "Chennai", "Pune", "Kolkata"],
  ncr: ["Gurgaon", "Noida", "Faridabad", "Greater Noida"],
  other: [
    "Jaipur",
    "Ahmedabad",
    "Kochi",
    "Coimbatore",
    "Chandigarh",
    "Indore",
    "Bhubaneswar",
    "Nagpur",
    "Lucknow",
    "Vizag",
  ],
  destinations: [
    "Coorg",
    "Chikmagalur",
    "Kabini",
    "Wayanad",
    "Munnar",
    "Goa",
    "Lonavala",
    "Mahabaleshwar",
    "Nandi Hills",
    "Mysore",
    "Rishikesh",
    "Manali",
    "Ooty",
    "Jaisalmer",
  ],
};

const CONTACT_FAQS = [
  {
    q: "How quickly will I hear back after submitting the form?",
    a: "Every submission is confirmed within 4 business hours. A full custom proposal is delivered within 24 hours of receiving a complete brief. If we need any additional information, we'll reach out quickly.",
  },
  {
    q: "Will a real person respond, or will I get automated emails?",
    a: "A real person reads every submission and handles it directly. We do not use automated sequences for proposal delivery. If you prefer a call before receiving a written proposal, just say so in the form.",
  },
  {
    q: "What information should I have ready before filling out the form?",
    a: "At minimum: group size, preferred city or destination, approximate dates, and the type of program. If you can also tell us what you want to be different after the event, that will significantly improve the quality of what we recommend.",
  },
  {
    q: "Can you organise corporate events outside India?",
    a: "Our primary operations cover 82+ destinations in India. For virtual programs, we have run sessions for teams across 6+ countries simultaneously. For in-person programs outside India, contact us directly with your requirement.",
  },
  {
    q: "Is there any commitment required to receive a proposal?",
    a: "None at all. The proposal is free and comes with zero obligation. We share a detailed, custom recommendation because we'd rather earn your business through the quality of our thinking than through a sales call.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO + FORM */}
      <Section>
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Plan your next corporate event</Eyebrow>
            <h1 className="mt-4 font-display text-display-lg sm:text-display-xl font-semibold tracking-tight text-ink">
              Start here.
            </h1>
            <p className="mt-5 text-[17px] sm:text-lg text-ink-muted leading-relaxed">
              You&apos;ve arrived at this page for a reason. Maybe you&apos;ve run
              corporate events before and they didn&apos;t land the way you hoped.
              Maybe this is your first time. Whatever brought you here — start
              below.
            </p>
            <p className="mt-4 text-[15px] text-ink-muted leading-relaxed">
              We&apos;ll ask a few questions that most event companies never bother
              asking. The answers genuinely change what we recommend.
            </p>

            <div className="mt-8 rounded-2xl bg-cream border border-line p-5 space-y-3">
              <div className="text-[12px] uppercase tracking-[0.18em] text-ink-muted font-semibold">
                Reach us directly
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-[15px]">
                <div>
                  <div className="text-ink-muted text-xs">Phone</div>
                  <a href={`tel:${SITE.phoneTel}`} className="text-ink font-semibold hover:underline">
                    {SITE.phone}
                  </a>
                </div>
                <div>
                  <div className="text-ink-muted text-xs">Email</div>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-ink font-semibold hover:underline break-all"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <div className="text-ink-muted text-xs">WhatsApp</div>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    className="text-ink font-semibold hover:underline"
                  >
                    {SITE.phone}
                  </a>
                </div>
                <div>
                  <div className="text-ink-muted text-xs">Hours</div>
                  <div className="text-ink font-semibold">{SITE.hours}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* WHAT HAPPENS NEXT */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="What happens after you submit"
          title="No automated emails. No chatbots."
          subtitle="We know how frustrating it is to fill out a form and get a sales call from someone who clearly hasn't read it. That's not what we do."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-line bg-white p-6 sm:p-7 card-lift"
            >
              <div className="text-[12px] uppercase tracking-[0.18em] text-brand font-semibold">
                {s.when}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] text-ink-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CITIES */}
      <Section>
        <SectionHeading
          eyebrow="Cities we serve"
          title="82+ destinations across India."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Major metros", list: CITIES.metros },
            { title: "NCR", list: CITIES.ncr },
            { title: "Other cities", list: CITIES.other },
            { title: "Outing destinations", list: CITIES.destinations },
          ].map((g) => (
            <div key={g.title} className="rounded-3xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-ink">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.list.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* COMMON THINGS PEOPLE SAY */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Common things people tell us"
          title="When they first reach out."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {COMMON_THINGS.map((t, i) => (
            <div key={i} className="rounded-3xl border border-line bg-white p-7">
              <div className="font-display text-lg font-semibold text-ink leading-snug">
                &ldquo;{t.q}&rdquo;
              </div>
              <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">{t.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section id="industries">
        <SectionHeading
          eyebrow="For specific industries"
          title="We design for what your sector actually needs."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "IT & ITES",
              b: "High attrition, distributed teams, individuals who respond poorly to forced fun, HR managers under pressure to show engagement spend connects to retention. Tell us your team composition.",
            },
            {
              t: "BFSI",
              b: "Formal environments need professionally credible programs — not stiff or performative. We design for hierarchical cultures while still creating real connections.",
            },
            {
              t: "Manufacturing",
              b: "Large programs often span plant floor and corporate office participants — very different cultures in the same room. We design for both simultaneously.",
            },
            {
              t: "Consulting",
              b: "High-pressure, time-scarce, analytically sharp. Programs need to be clearly purposeful, efficiently run, and intellectually credible.",
            },
            {
              t: "Pharma & FMCG",
              b: "Sales offsites, distributor engagement, regional leadership development — including programs with a field sales component.",
            },
            {
              t: "Tech & Consumer",
              b: "Fast-moving teams, rapid org change, and programs that must fit around quarterly intensity without losing depth.",
            },
          ].map((it) => (
            <div key={it.t} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{it.t}</h3>
              <p className="mt-2 text-[15px] text-ink-muted leading-relaxed">{it.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* LARGE GROUPS */}
      <Section id="large-groups" className="bg-ink text-white">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-white/70">
              For large group programs
            </div>
            <h2 className="mt-3 font-display text-display-md font-semibold tracking-tight">
              Planning for more than 150 people?
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[17px] text-white/80 leading-relaxed">
            <p>
              Send a few details upfront — group size, preferred dates, city or
              destination, and the type of program you have in mind. We&apos;ll come
              back with a detailed proposal and, if useful, a 30-minute call with
              one of our senior program leads.
            </p>
            <p>
              For L&amp;D and training programs, tell us the competency you are
              targeting and what outcomes you need to be able to report. We&apos;ll
              design from scratch and explain how we would measure whether it
              worked.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Before you reach out." />
        <div className="mt-10">
          <Faqs items={CONTACT_FAQS} />
        </div>
      </Section>
    </>
  );
}
