import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  SectionHeading,
  Eyebrow,
  Card,
  PillarCard,
  Faqs,
  CtaBanner,
  Button,
} from "@/components/ui";
import { IMG } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "100+ team building activities across indoor, outdoor, virtual and outbound formats. Corporate outings, leadership training, and campus programs.",
};

/* ---------- Activity catalogues ---------- */
const INDOOR = [
  { title: "Gigsaw Challenge", subtitle: "Coordination & departmental dynamics" },
  { title: "Mafia Wars", subtitle: "Trust, influence and decision-making under uncertainty" },
  { title: "Cook It Up", subtitle: "Inclusive teamwork across cultures and seniority" },
  { title: "Tetris Tower", subtitle: "Interdependency and silo cost made visible" },
  { title: "Trust Walk", subtitle: "Direct trust dynamics and quality of communication" },
  { title: "20-20 Challenge", subtitle: "Fast energy. 20 challenges in 20 minutes" },
  { title: "Remoto Car Challenge", subtitle: "Design thinking and competitive pressure" },
  { title: "Kontiki Boat Building", subtitle: "Shared goal pursuit and creative resourcing" },
];

const OUTDOOR = [
  { title: "Jumbo Volleyball", subtitle: "Universal participation. Instant energy." },
  { title: "Sports Olympics", subtitle: "Multi-sport tournament. Scales 50–500." },
  { title: "Cardboard Boat Racing", subtitle: "Design thinking with real accountability" },
  { title: "Dragon Boat Race", subtitle: "Synchronised paddling toward a shared goal" },
  { title: "Nature Walks & Treks", subtitle: "The conversations that don't happen indoors" },
];

const OUTBOUND = [
  { title: "Triggertronics", subtitle: "Our most popular activity. Reveals leadership patterns." },
  { title: "Roller Coaster", subtitle: "Sequential leadership. Who steps up — and back?" },
  { title: "Holey Pipes", subtitle: "Communication breakdown under pressure" },
  { title: "Key Punch", subtitle: "Collective strategy and distributed execution" },
  { title: "Race the Picture", subtitle: "Creative leadership under time constraints" },
];

const VIRTUAL = [
  { title: "Virtual Whodunnit Mystery", subtitle: "Cross-team collaboration across screens" },
  { title: "Survive at Sea", subtitle: "Consensus-building and group decision-making" },
  { title: "Hacker Trackdown", subtitle: "Strategic thinking. Strong fit for IT teams." },
  { title: "Mega Minds", subtitle: "High-energy quiz at scale. 100+ participants." },
  { title: "Virtual Murder Mystery", subtitle: "A longer narrative-driven online experience" },
];

const OUTING_FORMATS = [
  { title: "Day outing", subtitle: "8–10 hours, full facilitated program, no overnight stay" },
  { title: "Single overnight", subtitle: "Evening arrival, full program next day, afternoon departure" },
  { title: "Two-night retreat", subtitle: "Leadership groups, strategic offsites, high-potential cohorts" },
];

const DESTINATIONS = [
  "Coorg coffee estates",
  "Chikmagalur",
  "Nandi Hills",
  "Ooty",
  "Kodaikanal",
  "Goa",
  "Alibaug",
  "Kabini",
  "Wayanad",
  "Lonavala",
  "Mahabaleshwar",
  "Rishikesh",
  "Manali",
  "Mysore",
  "Munnar",
  "Jaisalmer",
];

const PARTNERS = [
  "Taj Hotels",
  "Marriott",
  "Radisson Blu",
  "Hilton",
  "ITC Hotels",
  "Hyatt",
  "Novotel",
  "Oberoi",
  "IHG Resorts",
  "Sheraton",
];

const TRAINING = [
  {
    href: "#leadership-training",
    imgSrc: IMG.leadership,
    imgAlt: "Leadership program",
    kicker: "Leadership",
    title: "Leadership training",
    description:
      "Experiential programs combining outbound challenge with facilitated sessions tied to your leadership competency model. For emerging managers, mid-level leaders, and senior groups.",
    bullets: [
      "Pre-program competency mapping",
      "Structured debrief frameworks",
      "Post-program facilitator report",
    ],
  },
  {
    href: "#soft-skills",
    imgSrc: IMG.conf,
    imgAlt: "Soft skills training",
    kicker: "Soft skills",
    title: "Soft skills training",
    description:
      "Custom programs around the specific skills your team needs — communication, interpersonal effectiveness, sales skills, cross-cultural awareness, business English, stress management.",
    bullets: [
      "Built for your industry",
      "Designed for your role level",
      "Not generic content",
    ],
  },
  {
    href: "#campus-to-corporate",
    imgSrc: IMG.campus,
    imgAlt: "Campus to Corporate program",
    kicker: "New hires",
    title: "Campus to Corporate",
    description:
      "A structured transition program for Gen Z new hires. Eight modules delivered through simulations, role plays, and exercises — not lectures. Trusted by Cipla and TVS.",
    bullets: [
      "8 focused modules",
      "Simulations + role plays",
      "Custom to your culture",
    ],
  },
  {
    href: "#outbound-corporate",
    imgSrc: IMG.outbound,
    imgAlt: "Outbound corporate training",
    kicker: "Outbound",
    title: "Outbound corporate training",
    description:
      "The full structured outbound program — competency mapping, facilitated debriefs, and a written post-program report. For leadership development, change management, and cross-functional alignment.",
    bullets: [
      "Documented outcomes",
      "Designed for L&D reporting",
      "Multi-day formats available",
    ],
  },
];

const SERVICES_FAQS = [
  {
    q: "How do you decide which team building activity is right for our team?",
    a: "We start with your brief — what the team situation looks like right now, what specific challenge exists, what you have tried before, and what you want to change. Only then do we recommend activities. Every activity is mapped to a specific outcome.",
  },
  {
    q: "Can you run activities at our office?",
    a: "Yes. Our indoor programs are designed to run in office spaces — meeting rooms, open-plan floors, cafeterias, or campus areas. We bring all props, materials, and facilitation. We'll advise on minimum space requirements for your group size.",
  },
  {
    q: "What is the difference between outbound training and a team outing?",
    a: "A team outing is primarily about enjoyment and connection. Outbound training is a structured learning program that uses outdoor challenge as the method for developing specific skills. Every activity is chosen to surface specific behaviour, and every session includes a debrief that maps the experience to real work.",
  },
  {
    q: "Do you provide facilitators, or do we arrange those separately?",
    a: "We provide trained facilitators for every program we manage. Facilitation is always included — it is not an optional add-on.",
  },
  {
    q: "Can the program be themed around our values or annual strategy?",
    a: "Yes. Most programs are customised — themed around values, built around a competency framework, or tied to an annual strategic direction. Tell us your theme in the brief and we'll build around it.",
  },
];

function ActivityGrid({ items }: { items: { title: string; subtitle: string }[] }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((a) => (
        <li
          key={a.title}
          className="rounded-2xl border border-line bg-white p-5 card-lift"
        >
          <div className="font-display text-base font-semibold text-ink">{a.title}</div>
          <div className="mt-1 text-[14px] text-ink-muted leading-relaxed">{a.subtitle}</div>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-4 font-display text-display-xl font-semibold tracking-tight text-ink">
              Services built around what your team needs to change.
            </h1>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-2xl">
              Every service starts with the same question: what specific outcome
              are you trying to produce? That answer shapes the format,
              activities, facilitation, and destination. Here is the full picture.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Button href="/contact" size="lg">
              Get a custom proposal
            </Button>
          </div>
        </div>
      </Section>

      {/* QUICK NAV */}
      <div className="container-page">
        <div className="border-y border-line py-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {[
            ["#team-building", "Team building"],
            ["#indoor", "Indoor"],
            ["#outdoor", "Outdoor"],
            ["#outbound", "Outbound"],
            ["#virtual", "Virtual"],
            ["#team-outings", "Team outings"],
            ["#training", "Training"],
            ["#stays", "Stays"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-ink-muted hover:text-ink font-medium"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* TEAM BUILDING INTRO */}
      <Section id="team-building">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Team building activities"
              title="The most common — and most misunderstood — corporate service in India."
            />
          </div>
          <div className="lg:col-span-7 space-y-5 text-[17px] text-ink leading-relaxed">
            <p>
              Most team-building companies will not tell you: the activity itself
              is the least important part of any team-building program.
            </p>
            <p>
              The most important part is what happens before and after — the
              thinking that ensures the right activity is chosen for the right
              team dynamic, and the skilled facilitation that turns the experience
              into lasting awareness.
            </p>
            <p className="text-ink-muted">
              We offer 100+ activities across four formats. Every one is mapped
              to a specific outcome. We never recommend based on what sounds
              exciting. We recommend based on what your team actually needs to
              see about itself.
            </p>
          </div>
        </div>
      </Section>

      {/* INDOOR */}
      <Section id="indoor" className="bg-cream pt-0">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.indoor} alt="Indoor team building" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>Indoor team building</Eyebrow>
            <h2 className="mt-3 font-display text-display-md font-semibold tracking-tight text-ink">
              Runs in any office, hotel, or conference room.
            </h2>
            <p className="mt-4 text-[17px] text-ink leading-relaxed max-w-2xl">
              No outdoor space needed. Best for city-based venues, monsoon-season
              programs, large groups, or any program where outdoor access is limited.
            </p>
            <ActivityGrid items={INDOOR} />
          </div>
        </div>
      </Section>

      {/* OUTDOOR */}
      <Section id="outdoor">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Eyebrow>Outdoor team building</Eyebrow>
            <h2 className="mt-3 font-display text-display-md font-semibold tracking-tight text-ink">
              Physical programs at open venues.
            </h2>
            <p className="mt-4 text-[17px] text-ink leading-relaxed max-w-2xl">
              Resort lawns, adventure camps, parks. Movement and shared physical
              experience build team energy and cohesion in a way indoor formats
              cannot replicate.
            </p>
            <ActivityGrid items={OUTDOOR} />
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.outdoor} alt="Outdoor team building" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* OUTBOUND */}
      <Section id="outbound" className="bg-ink text-white">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.outbound} alt="Outbound program" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-white/70">
              Outbound team building
            </div>
            <h2 className="mt-3 font-display text-display-md font-semibold tracking-tight">
              The format that most reliably shows you how a team actually behaves.
            </h2>
            <p className="mt-4 text-[17px] text-white/80 leading-relaxed max-w-2xl">
              In a meeting room, people manage how they present themselves. Put
              them under a real outdoor challenge with real time pressure and
              unfamiliar conditions — and the professional behaviour gives way to
              instinct. That is what you work with.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {OUTBOUND.map((a) => (
                <li
                  key={a.title}
                  className="rounded-2xl bg-white/5 border border-white/10 p-5"
                >
                  <div className="font-display text-base font-semibold">{a.title}</div>
                  <div className="mt-1 text-[14px] text-white/70 leading-relaxed">{a.subtitle}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* VIRTUAL */}
      <Section id="virtual">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Eyebrow>Virtual team building</Eyebrow>
            <h2 className="mt-3 font-display text-display-md font-semibold tracking-tight text-ink">
              Fully facilitated online programs for remote and hybrid teams.
            </h2>
            <p className="mt-4 text-[17px] text-ink leading-relaxed max-w-2xl">
              Not a quiz with a Zoom call underneath it. Structured around
              breakout-room formats with a professional facilitator guiding every
              stage.
            </p>
            <ActivityGrid items={VIRTUAL} />
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.virtual} alt="Virtual program" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* TEAM OUTINGS */}
      <Section id="team-outings" className="bg-cream">
        <SectionHeading
          eyebrow="Corporate team outings"
          title="Full-service outing programs at curated resort and destination properties."
          subtitle="One brief, one team, one point of contact, one invoice. We manage venue, transport, all meals, team building facilitation, photography, and post-event documentation."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {OUTING_FORMATS.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-line bg-white p-7 card-lift"
            >
              <div className="font-display text-lg font-semibold tracking-tight text-ink">
                {f.title}
              </div>
              <div className="mt-2 text-[15px] text-ink-muted leading-relaxed">{f.subtitle}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-7">
            <h3 className="font-display text-lg font-semibold text-ink">Where we take teams</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {DESTINATIONS.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-white p-7">
            <h3 className="font-display text-lg font-semibold text-ink">Premium venue partners</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {PARTNERS.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-ink/5 px-3 py-1.5 text-[13px] text-ink"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[14px] text-ink-muted leading-relaxed">
              Plus hand-selected boutique properties, farmstays and adventure camps.
            </p>
          </div>
        </div>
      </Section>

      {/* TRAINING */}
      <Section id="training">
        <SectionHeading
          eyebrow="Specialised training programs"
          title="For teams that need more than a fun day."
          subtitle="Structured programs with clear learning goals and documented outcomes."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TRAINING.map((t) => (
            <PillarCard key={t.title} {...t} />
          ))}
        </div>
      </Section>

      {/* STAYS */}
      <Section id="stays" className="bg-cream">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.stays} alt="Premium resort partner" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>Corporate stays · venue curation</Eyebrow>
            <h2 className="mt-3 font-display text-display-md font-semibold tracking-tight text-ink">
              82+ resort and property partners across India.
            </h2>
            <p className="mt-4 text-[17px] text-ink leading-relaxed max-w-2xl">
              Each one assessed by our team for corporate hosting capability,
              activity space, food quality, and service reliability — not just
              their leisure-guest credentials.
            </p>
            <div className="mt-6">
              <Button href="/contact" size="lg">Get curated venue options</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions about our services." />
        <div className="mt-10">
          <Faqs items={SERVICES_FAQS} />
        </div>
      </Section>

      <CtaBanner
        title="Tell us your brief. We'll come back with a real recommendation."
        body="Group size, city, and rough date is all we need to start. Custom proposal in 24 hours."
        primary={{ label: "Get my free proposal", href: "/contact" }}
        secondary={{ label: "Read our insights", href: "/blog" }}
      />
    </>
  );
}
