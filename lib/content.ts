/**
 * Site-wide static content. Centralised so copy can be reviewed in one place.
 */

export const SITE = {
  phone: "+91 99860 58666",
  phoneTel: "+919986058666",
  whatsapp: "+919986058666",
  email: "info@corporateeventsindia.com",
  hours: "Mon–Sat · 9:30 am – 6:30 pm IST",
};

export const STATS = [
  { value: "550+", label: "Companies served" },
  { value: "1.5L+", label: "Participants" },
  { value: "4.9/5", label: "Average rating" },
  { value: "82+", label: "Destinations" },
  { value: "24 hrs", label: "Custom proposals" },
];

export const TRUST_LOGOS = [
  "Infosys",
  "SAP India",
  "Genpact",
  "Cipla",
  "TVS",
  "Target",
  "ITC",
  "HDFC",
];

export const INDUSTRIES = [
  {
    name: "IT & ITES",
    body:
      "High-attribution environments where engagement spend is directly connected to retention. We understand the working patterns and what genuinely moves the needle.",
  },
  {
    name: "BFSI",
    body:
      "Formal organisations that need programs to be professionally credible. Not stiff. Genuinely engaging within a culture that respects hierarchy.",
  },
  {
    name: "Manufacturing",
    body:
      "Large, distributed workforces where the plant floor and the corporate office live in different worlds. We design programs that work for both.",
  },
  {
    name: "Consulting & Pro Services",
    body:
      "High-pressure, time-scarce teams where the program needs to be purposeful, efficient, and worth the hours pulled away from client work.",
  },
  {
    name: "Pharma & FMCG",
    body:
      "Sales offsites, distributor engagement, regional leadership development. Programs that recognise the realities of field-driven organisations.",
  },
  {
    name: "Consumer & Tech",
    body:
      "Fast-moving teams, rapid org changes, and a need for engagement that holds steady through quarterly intensity. We build for that rhythm.",
  },
];

/* ---------- Image library (Unsplash, free to use) ---------- */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  hero: u("photo-1542744173-8e7e53415bb0"), // collaborative workshop
  heroAlt: u("photo-1517048676732-d65bc937f952"), // outdoor team
  outing: u("photo-1499540633125-484965b60031"), // resort
  building: u("photo-1556761175-5973dc0f32e7"), // workshop
  training: u("photo-1551836022-d5d88e9218df"), // facilitation
  virtual: u("photo-1591115765373-5207764f72e4"), // remote team on call
  stays: u("photo-1571896349842-33c89424de2d"), // luxury resort lobby
  indoor: u("photo-1517245386807-bb43f82c33c4"), // indoor workshop
  outdoor: u("photo-1527558779559-9b1456c4a06e"), // outdoor sport
  outbound: u("photo-1530549387789-4c1017266635"), // adventure
  facilitation: u("photo-1552664730-d307ca884978"), // facilitator
  coorg: u("photo-1602002418816-5c0aeef426aa"), // hill resort
  goa: u("photo-1512100356356-de1b84283e18"), // beach
  rishikesh: u("photo-1598935898639-81586f7d2129"), // mountains
  bangalore: u("photo-1596176530529-78163a4f7af2"), // urban
  team: u("photo-1522202176988-66273c2fd55f"), // team meeting
  group: u("photo-1529070538774-1843cb3265df"), // group event
  conf: u("photo-1540575467063-178a50c2df87"), // conference
  campus: u("photo-1523240795612-9a054b0db644"), // young professionals
  leadership: u("photo-1556761175-b413da4baf72"), // leadership
  blog1: u("photo-1543269865-cbf427effbad"), // event aftermath
  blog2: u("photo-1517245386807-bb43f82c33c4"),
  blog3: u("photo-1506784983877-45594efa4cbe"), // calendar/planning
  blog4: u("photo-1521737711867-e3b97375f902"), // grad to corporate
  blog5: u("photo-1551632811-561732d1e306"), // outdoor leadership
  outingsCarousel: [
    { src: u("photo-1602002418816-5c0aeef426aa"), title: "Coorg", subtitle: "Coffee estate retreats", meta: "From Bangalore" },
    { src: u("photo-1583417319070-4a69db38a482"), title: "Chikmagalur", subtitle: "Hill plantations", meta: "Two-night fit" },
    { src: u("photo-1512100356356-de1b84283e18"), title: "Goa", subtitle: "Beach offsites", meta: "Annual day favourite" },
    { src: u("photo-1598935898639-81586f7d2129"), title: "Rishikesh", subtitle: "Adventure camps", meta: "Outbound staple" },
    { src: u("photo-1605649461784-7c8ef84b85b6"), title: "Kabini", subtitle: "Forest retreats", meta: "Leadership offsite" },
    { src: u("photo-1568322445389-f64ac2515020"), title: "Lonavala", subtitle: "Weekend resorts", meta: "From Mumbai/Pune" },
    { src: u("photo-1517824806704-9040b037703b"), title: "Mahabaleshwar", subtitle: "Hill stations", meta: "Day or overnight" },
    { src: u("photo-1542038784456-1ea8e935640e"), title: "Manali", subtitle: "Mountain offsites", meta: "From Delhi" },
  ],
};

/* ---------- Blog posts ---------- */
export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  readingTime: string;
  hero: string;
  excerpt: string;
  /** Body sections — paragraphs and headings only, kept simple. */
  body: BlogBlock[];
  /** Trailing FAQs, rendered with the FAQ component. */
  faqs: { q: string; a: string }[];
  cta: { title: string; body: string; primary: string; secondary?: string };
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-corporate-events-fail",
    title:
      "Why most corporate events in India fail — and what the ones that work always do differently",
    metaTitle: "Why Most Corporate Events Fail in India",
    metaDescription:
      "Discover why corporate events in India rarely produce lasting results and what the most effective ones do differently. A guide for HR teams.",
    category: "Program Design",
    readingTime: "8 min read",
    hero: IMG.blog1,
    excerpt:
      "You have planned one. Maybe you have attended ten. The kind of event where everything technically works — and three weeks later, nobody can tell you what changed. That outcome is predictable. Here is why.",
    body: [
      {
        type: "p",
        text: "You have planned one. Maybe you have attended ten. The kind of corporate event where everything technically works: the venue is decent, the food is fine, the attendance is good, and three weeks later, nobody can tell you what actually changed.",
      },
      {
        type: "p",
        text: "Not because the event was a disaster. Because it was forgettable.",
      },
      {
        type: "p",
        text: "This is the most common corporate event outcome in India. And it is expensive. Budget spent, calendar blocked, people pulled from work, and the team comes back to the office on Monday exactly where it started.",
      },
      {
        type: "callout",
        text: "Once you understand the design mistakes that almost every organisation makes, you will never plan a corporate event the same way again.",
      },
      { type: "h2", text: "What most people get wrong from the start" },
      {
        type: "p",
        text: "The single biggest mistake in corporate event planning is treating the event as the goal. \"We need to do something for the team this quarter.\" A venue gets booked. An activity vendor is called. A date is announced. The event happens. The box is ticked.",
      },
      {
        type: "p",
        text: "The problem is not the execution. The problem is that the entire thing was designed in reverse. The event was the plan, not the outcome. Without a clear outcome defined before the planning begins, there is no way to know whether the event succeeded or failed at anything other than logistics.",
      },
      {
        type: "p",
        text: "The best corporate events start from the opposite direction. Before anyone looks at a venue, before anyone shortlists activities, the team responsible for the event asks one question:",
      },
      {
        type: "callout",
        text: "What do we want to be true about this team after this experience that is not true right now?",
      },
      {
        type: "p",
        text: "That question sounds simple. It is surprisingly hard to answer well. \"We want them to have fun\" is not an answer — it is a preference. \"We want the product team and the engineering team to have three genuine conversations that they have never had before\" is an answer.",
      },
      { type: "h2", text: "The three mistakes that kill corporate event ROI" },
      { type: "h3", text: "1. The activity is treated as the destination" },
      {
        type: "p",
        text: "Most corporate event planning in India centres on activity selection. \"What should we do?\" is the first question asked and the one that gets the most attention. The activity is not the destination. It is the vehicle.",
      },
      {
        type: "p",
        text: "An activity creates an experience. The experience creates behaviour: how people communicate under pressure, the way leadership emerges or disappears when authority is unclear, the way trust is built or broken in real time. That behaviour is the raw material for genuine development.",
      },
      { type: "h3", text: "2. There is no professional facilitation" },
      {
        type: "p",
        text: "There is a significant difference between a host and a facilitator. A host keeps the day moving. A facilitator watches what actually happens during an activity — and then leads a 15 to 30 minute structured debrief afterward that makes those observations visible to the people who were exhibiting the behaviour.",
      },
      {
        type: "p",
        text: "That conversation is where the event's value lives. Without it, an activity is just an activity: a pleasant or exciting experience that produces no lasting change.",
      },
      { type: "h3", text: "3. Nothing connects the event to Monday morning" },
      {
        type: "p",
        text: "The third mistake is the most common and the least discussed. Events are measured on the day they happen. The survey goes out. People say it was great. And then everyone goes back to work and the experience fades.",
      },
      {
        type: "p",
        text: "The best corporate events build in bridges: a commitment made in front of the group and documented, a shared language created during the debrief that gets used in the next meeting, a follow-up session scheduled for two weeks later. These bridges do not happen by accident. They are designed.",
      },
      { type: "h2", text: "What good corporate events actually produce" },
      {
        type: "p",
        text: "Trust between people who rarely interact. Cross-functional relationships take years to build through normal working proximity. A well-designed shared challenge can compress that process significantly.",
      },
      {
        type: "p",
        text: "Honest conversations that never happen in the office. The office environment has too many social scripts and too many status considerations for certain conversations to happen naturally.",
      },
      {
        type: "p",
        text: "Clarity about how the team actually works. Leadership patterns, communication habits, trust dynamics — all of these are invisible inside the normal working day. In a designed challenge environment, they become clearly visible.",
      },
      { type: "h2", text: "A self-assessment before your next corporate event" },
      {
        type: "ul",
        items: [
          "Can you state in one sentence what should be different about this team after the event?",
          "Is there a trained facilitator managing the program — not just a host?",
          "Is there something in the program that explicitly connects what happened to what changes on Monday?",
        ],
      },
      {
        type: "p",
        text: "If all three answers are yes, you are designing something that could genuinely matter.",
      },
    ],
    faqs: [
      {
        q: "Why do most corporate events not produce lasting results?",
        a: "The most common reason is that events are designed around logistics rather than outcomes. When the central question is \"what should we do?\" rather than \"what should be different after this?\", the event produces an experience but no mechanism for change.",
      },
      {
        q: "How do I set a measurable goal for a corporate event?",
        a: "Identify the specific team dynamic you want to address. Translate it into an observable behaviour. \"Better teamwork\" is not measurable. \"The product lead and engineering lead proactively syncing before project kickoffs\" is.",
      },
      {
        q: "What is the difference between a host and a facilitator?",
        a: "A host manages the event experience: rules, timing, energy. A facilitator manages the learning experience: observing behaviour during activities and leading structured debriefs that convert experience into awareness.",
      },
      {
        q: "How much does a poorly designed corporate event cost in real terms?",
        a: "Beyond the direct spend: the time of every participant, the opportunity cost of using that budget elsewhere, and — often most significantly — the trust deficit if the event feels like a tick-box exercise.",
      },
      {
        q: "How do we measure whether a corporate event was actually successful?",
        a: "Three levels: immediate (relevance and engagement, facilitator observation), short-term (observable change in the targeted area within 30–60 days), and long-term (business metrics shifting). Most organisations only measure the first.",
      },
    ],
    cta: {
      title: "Ready to plan a corporate event that actually changes something?",
      body:
        "We design programs around specific outcomes, run by trained facilitators who know how to convert experience into genuine behavioural insight. End-to-end execution. Free proposal in 24 hours.",
      primary: "Get my free proposal",
      secondary: "Explore our services",
    },
  },
  {
    slug: "indoor-outdoor-virtual-team-building",
    title:
      "Indoor, outdoor, or virtual team building: how to choose the right format for your team",
    metaTitle: "Indoor vs Outdoor vs Virtual Team Building",
    metaDescription:
      "Not sure which team building format fits your team? This guide breaks down indoor, outdoor, outbound, and virtual programs with clear examples.",
    category: "Team Building",
    readingTime: "9 min read",
    hero: IMG.blog2,
    excerpt:
      "“Which is better — indoor or outdoor team building?” It is the wrong question. The right question is: what does this specific team need right now, and which format creates the best conditions for that?",
    body: [
      {
        type: "p",
        text: "“Which is better — indoor or outdoor team building?” It is one of the most common questions HR managers ask when planning a corporate program. And the honest answer, every time, is that it is the wrong question.",
      },
      {
        type: "p",
        text: "The right question is: what does this specific team need right now, and which format creates the best conditions for that?",
      },
      {
        type: "p",
        text: "Format is a design decision. Not a preference. When you choose the right format for your team's actual situation, a simple, well-facilitated program can be the most impactful experience the team has had all year. When you choose the wrong one, even with a brilliant activity and a generous budget, the program underdelivers.",
      },
      { type: "h2", text: "Format 1: Indoor team building" },
      {
        type: "p",
        text: "Facilitated programs run in office spaces, hotel ballrooms, conference rooms, or any other enclosed venue. Because the setting is familiar and accessible, participants engage without the additional variable of unfamiliar physical conditions.",
      },
      { type: "h3", text: "When indoor is the strongest choice" },
      {
        type: "ul",
        items: [
          "Your group is based in a city venue without outdoor access.",
          "Your program falls during monsoon season (June–September).",
          "You have a large group of 100 or more where controlled space simplifies logistics.",
          "Your goal requires activities that work better indoors — trust dynamics, collaborative problem-solving, creative challenges.",
        ],
      },
      { type: "h3", text: "What indoor activities look like" },
      {
        type: "p",
        text: "Gigsaw Challenge: a giant room-filling puzzle. Mafia Wars: a strategic role-playing game powerful for leadership groups. Cook It Up: the most inclusive indoor activity in the catalogue, no fitness required. Tetris Tower: an immediate interdependency metaphor. Trust Walk: a direct trust-building exercise. 20-20 Challenge: 20 challenges in 20 minutes — the fastest icebreaker.",
      },
      {
        type: "callout",
        text: "Indoor team building is the most underrated format. Some of the deepest team dynamics work we have done has happened in hotel ballrooms with 150 people and three well-chosen activities.",
      },
      { type: "h2", text: "Format 2: Outdoor team building" },
      {
        type: "p",
        text: "Physical programs at open venues — resort lawns, adventure camps, parks. There is something about being in the same open physical space that produces shared experience faster than almost any indoor format. The physical memory is also more durable.",
      },
      { type: "h3", text: "When outdoor is the strongest choice" },
      {
        type: "ul",
        items: [
          "You want physical activity and movement to be part of the engagement.",
          "The program is the activity layer of a resort or day outing.",
          "You have a high-energy group that responds well to competition.",
          "It is an annual day event needing genuine excitement at scale.",
        ],
      },
      {
        type: "p",
        text: "Examples: Jumbo Volleyball — universal participation; Sports Olympics — multi-sport tournament that scales 50 to 500; Cardboard Boat Racing — design thinking with real accountability; Dragon Boat Race — synchronised paddling toward a shared goal; Nature Walks — informal conversations that rarely happen in a building.",
      },
      { type: "h2", text: "Format 3: Outbound team building" },
      {
        type: "p",
        text: "Adventure-based programs at outdoor venues, designed specifically to create conditions where authentic team and leadership behaviour surfaces, and where trained facilitators use what they observe as the basis for structured learning debriefs.",
      },
      {
        type: "p",
        text: "In a meeting room, people manage how they present themselves. Under real outdoor challenge — unfamiliar conditions, real-time pressure, actual physical stakes — those scripts become harder to maintain. Authentic behaviour emerges. And authentic behaviour is the raw material for genuine development.",
      },
      {
        type: "p",
        text: "Triggertronics, Roller Coaster, Holey Pipes, Key Punch — every activity selected because of what it is designed to surface.",
      },
      { type: "h2", text: "Format 4: Virtual team building" },
      {
        type: "p",
        text: "Most HR managers think of virtual team building as the inferior option — what you do when in-person is not possible. This is a mistake. For distributed teams, virtual is not the fallback. It is the primary format.",
      },
      {
        type: "p",
        text: "A well-designed virtual program with proper facilitation and structured participant interaction consistently outperforms an in-person program that half the participants travelled to reluctantly.",
      },
      {
        type: "p",
        text: "Examples: Virtual Whodunnit Mystery, Survive at Sea, Hacker Trackdown, Mega Minds, Virtual Murder Mystery — every one uses breakout rooms and a professional facilitator.",
      },
      { type: "h2", text: "The decision framework" },
      {
        type: "ul",
        items: [
          "City-based, no outdoor access → Indoor",
          "Physical shared experience at a resort → Outdoor",
          "Need to surface specific dynamics → Outbound",
          "Distributed team across locations → Virtual",
          "Large annual event for 100–500 → Outdoor at scale or large-format Indoor",
          "Newly merged teams → Outbound for depth (Virtual if distributed)",
          "Quarterly touchpoint → Virtual or short-format Indoor",
          "Monsoon programs → Indoor with backup",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we combine indoor and outdoor team building in one program?",
        a: "Yes — and this is often the most effective design for full-day programs. Begin with high-energy outdoor activities to break formality, then move to indoor facilitated sessions for deeper reflection.",
      },
      {
        q: "What format works best for a group of 200 or more people?",
        a: "Both indoor and outdoor work at scale with the right design. Indoor uses parallel activity streams. Outdoor formats like Sports Olympics and Jumbo Volleyball scale effectively to 500.",
      },
      {
        q: "Is virtual team building actually effective or just a compromise?",
        a: "When designed and facilitated properly, virtual is genuinely effective. The key variables are facilitation quality, structured interaction design, and activity selection.",
      },
      {
        q: "How do I know if my team needs outbound vs a standard outing?",
        a: "If you can clearly state a specific behavioural gap — a communication breakdown, a trust problem, a leadership pattern — outbound is worth the additional investment.",
      },
      {
        q: "What format works best for a mix of introverts and extroverts?",
        a: "Choose activities that offer multiple modes of contribution and do not require a single performance type. Cook It Up, Gigsaw, Survive at Sea and Mafia Wars are naturally inclusive across personality types.",
      },
    ],
    cta: {
      title: "Ready to choose the right format for your team?",
      body:
        "Tell us about your team — group size, what you are dealing with, and what you want to accomplish. We will recommend the right format and explain why it fits.",
      primary: "Talk to our team",
      secondary: "Browse all activities",
    },
  },
  {
    slug: "corporate-outing-planning-timeline",
    title:
      "The corporate outing planning checklist every HR manager in India needs",
    metaTitle: "Corporate Outing Planning Timeline for HR Teams",
    metaDescription:
      "A week-by-week outing planning guide built from 13 years of running corporate programs across India. From 10 weeks out to the morning of.",
    category: "Corporate Outings",
    readingTime: "9 min read",
    hero: IMG.blog3,
    excerpt:
      "Almost all the stress in corporate outing planning is a timing problem. Three weeks become a scramble. Ten weeks is calm. Use this week-by-week guide.",
    body: [
      {
        type: "p",
        text: "Here is a fact that most HR managers learn the hard way: almost all the stress in corporate outing planning is a timing problem. By the time most people start actively planning — about two to three weeks before the target date — the best resort properties near their city are fully booked. Facilitator availability is limited. Transport options are reduced. Every decision is driven by what is still available rather than what is right for the group.",
      },
      {
        type: "callout",
        text: "Three weeks become a scramble. Ten weeks is a calm, considered process.",
      },
      { type: "h2", text: "Phase 1 — 10 to 12 weeks out: get clear before you get busy" },
      {
        type: "p",
        text: "Define the design intent before anything else. Before you look at a single venue or activity option, answer this: What should be different about this team after this outing? \"We want them to have fun\" is a default, not a design target.",
      },
      {
        type: "p",
        text: "Decide the outing format — day, single overnight, or two-night retreat — based on the design intent, group size, travel appetite, and calendar. Decide who owns execution. For groups above 50, partnering with a team that owns end-to-end is almost always the smarter choice.",
      },
      { type: "h2", text: "Phase 2 — 8 weeks out: lock the venue and date" },
      {
        type: "ul",
        items: [
          "Shortlist two to three properties simultaneously, not sequentially.",
          "Verify capacity honestly — simultaneous sit-down meal capacity, comfortable room occupancy, activity space and dimensions.",
          "Check F&B infrastructure for your group size specifically.",
          "Lock the date and pay the advance deposit. Verbal commitments are routinely lost.",
        ],
      },
      { type: "h2", text: "Phase 3 — 6 weeks out: build the program" },
      {
        type: "p",
        text: "Finalise the activity selection based on the design intent — not what is popular. Build the daily schedule with realistic timing. Send the save-the-date. Brief your event partner on the group composition, dynamics, and run-of-show.",
      },
      { type: "h3", text: "A typical full-day schedule" },
      {
        type: "ul",
        items: [
          "7:00 am — Departure from city (plan for actual traffic, not Google Maps optimism)",
          "10:00 am — Arrival, welcome session, breakfast",
          "11:00 am — Team building program, Part 1",
          "1:00 pm — Lunch",
          "2:30 pm — Program Part 2 or facilitated leisure",
          "5:00 pm — Free time and resort facilities",
          "7:30 pm — Group dinner",
          "9:30 pm — Departure (or evening program for overnight)",
        ],
      },
      { type: "h2", text: "Phase 4 — 4 weeks out: handle every detail" },
      {
        type: "p",
        text: "Collect dietary requirements now, not the week before. Confirm final headcount. Confirm transport in writing — fleet, routes, pickup points, driver names and numbers. Produce a written weather contingency plan for outdoor elements. Confirm every vendor in writing.",
      },
      { type: "h2", text: "Phase 5 — 2 weeks out: build excitement" },
      {
        type: "p",
        text: "Send a proper pre-event communication — not just an itinerary. Tell participants what to expect in a way that makes them want to show up. Confirm the facilitator briefing.",
      },
      { type: "h2", text: "Phase 6 — 1 week out: final checks" },
      {
        type: "p",
        text: "Review the complete run-of-show with named owners and timing. Share the final participant list, dietary accommodations and accessibility needs with the venue. Save every vendor contact number in your phone.",
      },
      { type: "h2", text: "Phase 7 — the day of: your job is to participate" },
      {
        type: "p",
        text: "If Phases 1–6 have been done properly, the day should feel calm. Your job is to participate, not coordinate. An HR manager managing details on event day is not having the experience their team is having — and your energy as the organisational representative matters.",
      },
      { type: "h2", text: "Phase 8 — after the event: do not skip this" },
      {
        type: "ul",
        items: [
          "Collect feedback within 24 hours, while impressions are fresh.",
          "Review the facilitator's post-event report — patterns, debrief outcomes, recommended next steps.",
          "Schedule a 30-minute follow-up two to four weeks later. This is the single most under-used mechanism for extending impact.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the ideal group size for a corporate team outing?",
        a: "Any size from 20 to 500+ is manageable with the right planning. Below 50, formats are highly flexible. 50–150 needs parallel activity design. Above 150, venue selection becomes critical — not every resort can host this scale without service quality degrading.",
      },
      {
        q: "What are the best outing destinations near Bangalore?",
        a: "Day outings: Nandi Hills (60–70 km) and Ramanagara (50–60 km). Single overnight: the Mysore region (140 km). Two-night retreats: Coorg and Chikmagalur (250 km).",
      },
      {
        q: "How do we avoid choosing a venue that looks good in photos but delivers poorly?",
        a: "Ask specific questions photos can't answer — simultaneous hot meal capacity for your full group, corporate group experience at this scale, activity space dimensions, conference infrastructure, and references.",
      },
      {
        q: "Is professional facilitation worth paying for?",
        a: "Consistently, yes. A day at a resort without facilitation produces a pleasant memory. The same day with a well-facilitated program produces that plus genuine connection and observable insight.",
      },
      {
        q: "What should we do after the outing to extend its impact?",
        a: "Collect feedback within 24 hours, review the facilitator's post-event report, and schedule a short follow-up two to four weeks later where the team checks in on intentions from the day.",
      },
    ],
    cta: {
      title: "Planning a corporate outing and not sure where to start?",
      body:
        "Share your group size, city, and rough dates. We will send a shortlist of curated venue options, a sample itinerary, and a full custom proposal — all within 24 hours.",
      primary: "Plan my corporate outing",
      secondary: "WhatsApp us directly",
    },
  },
  {
    slug: "campus-to-corporate",
    title:
      "Campus to corporate: why the first 90 days decide whether your new hires stay or leave",
    metaTitle: "Campus to Corporate Training India",
    metaDescription:
      "High first-year attrition? The gap is almost always behavioural. Learn how structured campus-to-corporate programs improve Gen Z retention.",
    category: "Campus to Corporate",
    readingTime: "9 min read",
    hero: IMG.blog4,
    excerpt:
      "The numbers are uncomfortable. First-year attrition for campus hires runs 20–30%. The single most preventable cause is a gap most organisations leave entirely unaddressed.",
    body: [
      {
        type: "p",
        text: "India's organisations invest enormous energy in campus recruitment. And then the new hire joins, the induction is a two-day presentation, and within six months a meaningful percentage of that carefully recruited batch has either resigned or quietly disengaged.",
      },
      {
        type: "p",
        text: "The numbers are consistently uncomfortable. First-year attrition for campus hires in Indian IT companies runs at 20 to 30 per cent. In BFSI and consulting, it is comparable. The single most preventable cause is a gap most organisations leave entirely unaddressed: the distance between campus life and corporate reality.",
      },
      { type: "h2", text: "The gap that nobody talks about honestly" },
      {
        type: "p",
        text: "New hires from good institutes arrive technically capable. The gap that drives early leaving is rarely about what they know. It is about how they behave — and specifically, how their behaviours interact with the expectations of the corporate environment they are entering.",
      },
      {
        type: "p",
        text: "Gen Z employees expect transparency, specific and timely feedback, and they are comfortable challenging hierarchy directly — in ways that feel natural to them and, frequently, confrontational to colleagues. None of these is a character flaw. They are the product of a specific generational experience.",
      },
      { type: "h2", text: "What happens without a structured transition program" },
      {
        type: "p",
        text: "New hires spend their first 90 days guessing. They observe their environment and try to reverse-engineer the norms. Sometimes they get it right quickly. More often, they make early mistakes that set impressions with managers before they have had any real opportunity to demonstrate what they are actually capable of.",
      },
      {
        type: "p",
        text: "They look for feedback and receive silence or vague positive signals. The uncertainty produces anxiety, and anxiety produces one of two responses: over-asking for reassurance, which frustrates managers, or withdrawing — which accelerates the attrition spiral.",
      },
      { type: "h2", text: "What a structured Campus to Corporate program covers" },
      {
        type: "ul",
        items: [
          "Understanding what success looks like in a corporate context",
          "Workplace etiquette and professional conduct",
          "Building a personal brand at work",
          "Personal effectiveness in the corporate context",
          "Leading without formal authority",
          "Working across generations",
          "Taking ownership proactively",
          "Communicating effectively in the corporate context",
        ],
      },
      { type: "h2", text: "The delivery method matters as much as the content" },
      {
        type: "p",
        text: "Lectures about professional behaviour do not change professional behaviour. What produces change is practice. Structured simulations and role plays where new hires encounter the actual situations they will face — and receive specific structured feedback on what worked and what did not.",
      },
      {
        type: "callout",
        text: "Content is introduced through experience, not before it.",
      },
      { type: "h2", text: "The ROI case" },
      {
        type: "p",
        text: "If the average cost of a campus hire is three months of salary and first-year attrition runs at 25%, then for every 100 hires you make, you are paying the full cost for 25 people who leave before the end of their first year. A program that reduces first-year attrition by even 30% — a conservative estimate — produces a return that dwarfs the program cost.",
      },
      { type: "h2", text: "What organisations with the best retention actually do" },
      {
        type: "p",
        text: "They treat the first 90 days as strategically as they treat the hiring process. They build the program around their specific culture, values, and expectations. They invest in follow-up: 30- and 60-day check-ins, peer group sessions, and manager briefings about how to support the transition. They measure outcomes specifically — manager ratings at 30 days, behavioural assessments at 60 days, participant self-assessments at 90 days.",
      },
    ],
    faqs: [
      {
        q: "How long does a Campus to Corporate program typically run?",
        a: "Most structured programs run over two days, delivered as a residential or consecutive-day format before or during formal induction. Multi-module programs spread over four to six weeks are used when reinforcement over time is the priority.",
      },
      {
        q: "Can the program be customised to reflect our culture and values?",
        a: "Yes — and it should be. The most effective programs are built specifically around the competencies, values, and norms of the hiring organisation. Generic content produces generic results.",
      },
      {
        q: "Should it run before or after formal induction?",
        a: "Both approaches work. Many organisations do a hybrid: a first-day orientation covering compliance and logistics, followed by Campus to Corporate, followed by role-specific induction.",
      },
      {
        q: "How do you measure whether the program changed anything?",
        a: "Three checkpoints: immediate post-program feedback, manager observation at 30 days, and a retention comparison at six months against previous cohorts.",
      },
      {
        q: "Does this program work for interns as well?",
        a: "Yes. We design variants for both. Intern programs focus on culture and norms in a lower-stakes context. Full-time programs go deeper on accountability and long-term professional brand.",
      },
    ],
    cta: {
      title: "Running campus hiring this year?",
      body:
        "If you are bringing in a new hire cohort and want to make the first 90 days genuinely count, we can show you what a structured Campus to Corporate program looks like for your organisation.",
      primary: "Download the program overview",
      secondary: "Schedule a free consultation",
    },
  },
  {
    slug: "outbound-leadership-training",
    title:
      "What outbound training actually does to a leadership team — and why you cannot get the same result from a workshop",
    metaTitle: "What Outbound Training Does to a Leadership Team",
    metaDescription:
      "Classroom leadership training rarely changes behaviour. Here is why outbound training works differently and what it actually produces.",
    category: "Leadership Training",
    readingTime: "9 min read",
    hero: IMG.blog5,
    excerpt:
      "Classroom training builds knowledge. Outbound training changes behaviour. The investment was real. The content was sound. So why didn't anything change?",
    body: [
      {
        type: "p",
        text: "Every few months, we have a version of the same conversation with an L&D head or CHRO. They have run leadership workshops. Good content. Experienced trainers. Post-program surveys consistently 4.2 to 4.5. And six weeks later, the managers who attended are behaving in exactly the same ways they were before the program.",
      },
      {
        type: "p",
        text: "The problem is not the execution. The problem is a flawed assumption at the centre of the entire model: that knowing what good leadership looks like produces good leadership behaviour. It does not. Not reliably. Not under the pressure, ambiguity, and competing demands of a real working environment.",
      },
      { type: "h2", text: "Why classroom leadership training does not change behaviour" },
      {
        type: "p",
        text: "In the actual workplace, leadership behaviour is driven primarily by habit and instinct, not by knowledge. When a manager is under deadline pressure, when a team member has made a significant mistake, when a senior stakeholder is asking difficult questions in a public meeting, she does not reach for the leadership model she learned in a workshop. She reaches for the pattern she has always used.",
      },
      {
        type: "ul",
        items: [
          "Understanding the principle of delegation does not change the instinct to take the task back.",
          "Knowing the framework for developmental feedback does not change the impulse to deliver criticism in a way that creates defensiveness.",
          "Recognising the value of psychological safety does not automatically make silence in a room feel safe to break.",
        ],
      },
      {
        type: "p",
        text: "Research on training transfer consistently confirms this. Multiple studies show less than 20 percent of workshop learning is applied on the job six weeks after the training. The content is remembered. The behaviour does not change.",
      },
      { type: "h2", text: "What outbound training does differently" },
      {
        type: "p",
        text: "Outbound training does not try to teach leadership. It creates conditions where existing leadership behaviour becomes visible — to the participant, their peers, and a trained facilitator who is observing carefully throughout.",
      },
      {
        type: "p",
        text: "The mechanism is the outdoor physical challenge. Not because leadership requires physical capability — because the outdoor environment removes the professional scripts that normally govern how people present themselves at work.",
      },
      {
        type: "callout",
        text: "Under real pressure, in a genuinely unfamiliar environment, authentic behaviour surfaces.",
      },
      { type: "h2", text: "The debrief: where development actually happens" },
      {
        type: "p",
        text: "The activity creates an experience. The experience creates observable behaviour. The debrief is where that behaviour becomes the material for genuine development. A debrief is not a feedback session. Feedback tells people what they did. A debrief creates the conditions for people to understand what they did, and to choose what they want to do differently.",
      },
      {
        type: "p",
        text: "After a Holey Pipes challenge, a feedback session might say: \"Your communication needs work.\" A debrief says: \"In the last four minutes, three people were giving simultaneous instructions and the water was going in three different directions. Nobody was processing any input. What was happening in the group at that moment?\" — and then it waits.",
      },
      {
        type: "p",
        text: "What comes out of that question from the participants themselves is qualitatively different from feedback. It is self-awareness, produced from the inside. That is what changes behaviour.",
      },
      { type: "h2", text: "What a good outbound program looks like" },
      {
        type: "ul",
        items: [
          "Pre-program design: define competency targets, choose activities that surface those behaviours, calibrate the debrief framework.",
          "Opening session that builds psychological safety for honest debriefs later.",
          "Three carefully sequenced activities (e.g., Triggertronics, Roller Coaster, Key Punch) — each with a structured debrief.",
          "Integration session connecting patterns across activities to specific workplace situations.",
          "Post-program facilitator report documenting observations and recommendations.",
        ],
      },
      { type: "h2", text: "What outbound is not for" },
      {
        type: "p",
        text: "It is not a substitute for technical leadership knowledge. If a manager does not understand basic frameworks for delegation, performance management, or feedback, outbound will surface the gap but will not fill it. Classroom training is the right tool for knowledge transfer. Outbound is the right tool for behavioural insight. The best programs use both.",
      },
      {
        type: "p",
        text: "It is not effective without skilled facilitation. An outbound activity without a trained facilitator is just an outdoor activity. It may be enjoyable. It will not produce lasting leadership development.",
      },
    ],
    faqs: [
      {
        q: "How is outbound leadership training different from a standard outing?",
        a: "Three things: every activity is selected to surface a target behaviour; a trained facilitator runs structured competency-mapped debriefs; the program produces documented observations and development recommendations.",
      },
      {
        q: "What leadership behaviours can outbound reliably surface and develop?",
        a: "Delegation patterns, communication under pressure, decision-making in ambiguity, trust dynamics, adaptive leadership, collective strategy formation, and followership quality.",
      },
      {
        q: "Which activities are most effective for senior leadership groups?",
        a: "Triggertronics, Roller Coaster, Key Punch, and — when physical challenge is less appropriate — Mafia Wars indoor.",
      },
      {
        q: "How do you measure outcomes?",
        a: "Three levels: facilitator observations and same-day participant feedback; structured manager observation at 30 and 60 days; longer-term business impact metrics where data sharing is possible.",
      },
      {
        q: "What group size is ideal?",
        a: "15 to 40 participants produces the strongest outcomes. For larger cohorts, parallel groups with separate facilitators and shared integration sessions.",
      },
    ],
    cta: {
      title: "Ready to design a leadership program that changes behaviour?",
      body:
        "Tell us about your leadership group: size, level, and what specific challenge you are trying to address. We will design a program around the real problem and explain how we would measure whether it worked.",
      primary: "Design my leadership program",
      secondary: "See program examples",
    },
  },
];
