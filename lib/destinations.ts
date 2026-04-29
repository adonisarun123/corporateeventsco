/**
 * Destination data for all city landing pages.
 *
 * Each destination has unique copy that reflects what we know about
 * running corporate events there. Voice: calm, insightful, no fluff —
 * outcome-led rather than tourism brochure.
 */

export type DestCategory = "metro" | "ncr" | "tier2" | "getaway";

/**
 * Visual category — maps to an image in our curated bank.
 * Multiple destinations can share a visual category when they have
 * the same kind of scenery (e.g. plantation hill stations all use
 * COFFEE_PLANTATION). The bank is in lib/images.ts.
 */
export type VisualKind =
  | "URBAN_INDIA" // generic Indian metropolitan skyline
  | "DELHI_INDIA_GATE" // India Gate / heritage Delhi
  | "MUMBAI_GATEWAY" // Gateway of India / Marine Drive
  | "BANGALORE_CITY" // Bangalore skyline / Vidhana Soudha
  | "HYDERABAD_CHARMINAR" // Charminar / Hyderabad
  | "CHENNAI_COAST" // Marina Beach / Chennai
  | "KOLKATA_HOWRAH" // Howrah Bridge / Kolkata
  | "JAIPUR_HAWA_MAHAL" // Pink City / heritage Rajasthan
  | "DESERT_DUNES" // Jaisalmer / desert
  | "BACKWATERS" // Kerala backwaters
  | "BEACH_PALMS" // Goa / coastal palms
  | "TEA_ESTATE" // Munnar / Ooty tea hills
  | "COFFEE_PLANTATION" // Coorg / Chikmagalur / Wayanad
  | "WESTERN_GHATS" // hills, fog, forest
  | "GREEN_HILLS" // Lonavala / Mahabaleshwar / Nandi
  | "RIVER_HIMALAYA" // Rishikesh / Ganga
  | "SNOW_MOUNTAINS" // Manali / Himalayas
  | "FOREST_WILDLIFE" // Kabini / Pench / Tadoba
  | "TEMPLE_HERITAGE" // Bhubaneswar / temple architecture
  | "HERITAGE_PALACE" // Lucknow / Mysore palaces
  | "MODERN_OFFICE"; // Gurgaon / Cyber Hub / GCC corridors

export type Destination = {
  slug: string;
  name: string;
  category: DestCategory;
  /** State or sub-region — used in headings */
  state: string;
  /** One-line tagline used on cards and hero */
  tagline: string;
  /** Maps to a curated, verified image in IMG_BANK */
  visual: VisualKind;
  /** 2–3 short paragraphs */
  intro: string[];
  /** Bullets — why corporate programs work well here */
  whyItWorks: string[];
  /** Recommended formats with one-line note each */
  formats: { name: string; note: string }[];
  /** Specific program ideas */
  programIdeas: { title: string; body: string }[];
  /** Example venue partners / property types */
  venues: string[];
  /** Best months / season note */
  bestTime: string;
  /** Group sizes typically run here */
  groupSizes: string;
  /** For getaways: nearest city + drive time. For cities: nearest getaways. */
  nearby: { label: string; href: string }[];
  /** Destination-specific FAQs */
  faqs: { q: string; a: string }[];
};

export const DESTINATIONS: Destination[] = [
  /* =========================================================================
   * MAJOR METROS
   * ========================================================================= */
  {
    slug: "bangalore",
    name: "Bangalore",
    category: "metro",
    state: "Karnataka",
    tagline: "Corporate events for India's tech capital.",
    visual: "BANGALORE_CITY",
    intro: [
      "Bangalore is our home market and the largest single source of corporate event bookings in India. We run more programs here every quarter than in any other city — for IT and ITES teams, growth-stage companies, large GCCs, and the campus-hire batches that arrive every July.",
      "What works in Bangalore is shaped by what the teams actually look like: distributed across several offices, with significant remote and hybrid populations, and a calendar that's perpetually compressed by sprint cycles. The right program respects that.",
    ],
    whyItWorks: [
      "Day-trip access to Coorg, Chikmagalur, Nandi Hills, Kabini and Mysore — more variety within four hours' drive than any other Indian city",
      "Strong indoor venue ecosystem for monsoon and large-group programs",
      "Mature corporate ground transport — pickup logistics from multiple office hubs work reliably",
      "Local facilitator depth: most of our trained facilitators are based here",
    ],
    formats: [
      { name: "Outdoor team building", note: "At resort properties around Nandi Hills and Devanahalli for half-day and day formats" },
      { name: "Outbound", note: "Triggertronics and Holey Pipes at adventure camps near Bangalore — leadership development is the most common ask" },
      { name: "Indoor", note: "Hotel ballroom programs for 100+ when monsoon or weekday calendars constrain travel" },
      { name: "Virtual", note: "For distributed teams with members in multiple cities — a quarterly engagement staple" },
    ],
    programIdeas: [
      {
        title: "Engineering team day-out at Nandi Hills",
        body: "An hour out of central Bangalore. Combines an outdoor activity block (Sports Olympics or Jumbo Volleyball) with a facilitated debrief — useful for connecting recently-merged engineering pods.",
      },
      {
        title: "Two-day leadership offsite in Coorg",
        body: "For senior tech leadership. Triggertronics on Day 1, Roller Coaster on Day 2, integration session on the final morning.",
      },
      {
        title: "Campus-to-Corporate program for July intake",
        body: "Two-day residential before formal induction. Trusted by large IT services firms as the standard pre-induction format.",
      },
    ],
    venues: [
      "ITC Gardenia",
      "Taj West End",
      "Marriott Whitefield",
      "Angsana Oasis",
      "Discovery Village (Nandi Hills)",
      "Clarks Exotica",
      "Jaypee Greens",
    ],
    bestTime:
      "September through March is peak — comfortable temperatures and reliable outdoor access. April–May programs work well at hill properties (Nandi, Coorg). Monsoon (June–August) is best handled with strong indoor backup.",
    groupSizes: "20 to 1,000+. Most common bracket is 80–250.",
    nearby: [
      { label: "Coorg", href: "/destinations/coorg" },
      { label: "Chikmagalur", href: "/destinations/chikmagalur" },
      { label: "Nandi Hills", href: "/destinations/nandi-hills" },
      { label: "Mysore", href: "/destinations/mysore" },
      { label: "Kabini", href: "/destinations/kabini" },
    ],
    faqs: [
      {
        q: "How far in advance should we book a Bangalore corporate event?",
        a: "For peak season (October–March), 8 to 12 weeks gives the strongest property and facilitator options. Off-peak weekday programs can usually be arranged in 4 to 6 weeks. For groups above 200, plan 12–14 weeks ahead.",
      },
      {
        q: "Which areas around Bangalore are best for outdoor offsites?",
        a: "For a day outing, Nandi Hills (60 km) and Devanahalli are the go-to options. For an overnight, Mysore region (140 km) offers more premium properties. For two-night retreats, Coorg and Chikmagalur (250 km) are consistently the strongest choices.",
      },
      {
        q: "Can you handle multiple pickup points across Bangalore?",
        a: "Yes — we routinely coordinate transport from 3–5 office locations across Whitefield, ORR, Manyata, Electronic City and central Bangalore. Driver coordination, route timing for traffic, and on-the-day adjustments are all handled by our team.",
      },
      {
        q: "What's the largest Bangalore corporate program you've run?",
        a: "Single-day programs of 1,000+ at Bangalore Palace and large hotel ballrooms. For multi-day residential, we've run 500-person leadership offsites in cohorts.",
      },
    ],
  },
  {
    slug: "delhi",
    name: "Delhi",
    category: "metro",
    state: "Delhi NCR",
    tagline: "Programs for the country's largest corporate cluster.",
    visual: "DELHI_INDIA_GATE",
    intro: [
      "Delhi and the surrounding NCR cities form the country's largest concentration of corporate offices — BFSI head offices, consulting practices, large global GCCs, and a heavy public-sector presence. The variety of program needs is unusually wide.",
      "Programs here have to respect the realities of the city: heavy traffic patterns that influence schedule design, a compressed comfortable-weather window, and the genuine logistics gap between south Delhi, central Delhi, and the NCR satellites.",
    ],
    whyItWorks: [
      "Access to Aravalli resort properties within 90 minutes — Manesar, Damdama, Sohna",
      "Two- and three-night retreat options in Rishikesh, Jim Corbett, and Manali for leadership groups",
      "Strong urban venue inventory — Aerocity, Connaught Place, Gurgaon's Cyber Hub for indoor formats",
      "Highest concentration of senior leadership programs in the country",
    ],
    formats: [
      { name: "Outdoor team building", note: "At resort properties near Manesar and Sohna — half-day and day formats" },
      { name: "Outbound", note: "Multi-day residential in Rishikesh and Corbett for leadership development cohorts" },
      { name: "Indoor", note: "Large-format programs at Aerocity hotels are common during winters and peak smog season" },
      { name: "Virtual", note: "For distributed BFSI and consulting teams with members in multiple metros" },
    ],
    programIdeas: [
      {
        title: "Leadership offsite in Rishikesh",
        body: "Two nights, outbound focus. River-side venue, Triggertronics and Roller Coaster, structured debrief mapped to your competency framework.",
      },
      {
        title: "BFSI annual day at Manesar",
        body: "Day program. Sports Olympics outdoor format for connection across regional teams, followed by an evening with an integration session.",
      },
      {
        title: "Consulting team retreat at Jim Corbett",
        body: "For high-pressure consulting teams. Three days, with one full day reserved for unstructured time — purposeful disconnection is part of the design.",
      },
    ],
    venues: [
      "The Leela Ambience",
      "ITC Maurya",
      "Andaz Aerocity",
      "Heritage Village Manesar",
      "Botanix Nature Resort",
      "The Roseate",
    ],
    bestTime:
      "October–March is the comfort window. April–June is hot but manageable indoors. July–September monsoon is moderate. November–January smog can affect outdoor program quality — design with indoor backup or move further into the Aravallis.",
    groupSizes: "30 to 800. Strong fit for 50–250 leadership programs.",
    nearby: [
      { label: "Gurgaon", href: "/destinations/gurgaon" },
      { label: "Noida", href: "/destinations/noida" },
      { label: "Rishikesh", href: "/destinations/rishikesh" },
      { label: "Manali", href: "/destinations/manali" },
      { label: "Jaipur", href: "/destinations/jaipur" },
    ],
    faqs: [
      {
        q: "Where are the best outing destinations near Delhi?",
        a: "For day outings, Manesar (40 km) and Damdama Lake (50 km) are the standard options. For an overnight, Sohna (60 km) or the Aravalli belt. For two- to three-night retreats, Rishikesh (240 km) and Jim Corbett (250 km) are consistently the strongest.",
      },
      {
        q: "How do you handle Delhi traffic in program scheduling?",
        a: "Departure timings are built around real-world traffic — never around Google Maps optimism. We typically depart Gurgaon by 7:30 am and central Delhi by 7:00 am for Manesar programs. For outbound to Rishikesh, we recommend an early-morning Friday departure or Thursday-evening soft start.",
      },
      {
        q: "What about programs during winter smog?",
        a: "We design with strong indoor backups and recommend hill properties (Mussoorie, Rishikesh) for outdoor-essential programs. For day programs, Aerocity and Manesar's enclosed venues continue to work well.",
      },
      {
        q: "Can you support both Delhi and NCR pickup points?",
        a: "Yes. We routinely coordinate AC coaches from Connaught Place, south Delhi, Gurgaon Cyber Hub, Noida and Greater Noida — multi-pickup logistics are standard for us.",
      },
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    category: "metro",
    state: "Maharashtra",
    tagline: "Programs designed around Mumbai's unique time pressure.",
    visual: "MUMBAI_GATEWAY",
    intro: [
      "Mumbai's corporate landscape is unusual: extreme density, time-scarce employees, and a city geography that turns any 25 km journey into a half-day commitment. Programs that work here are designed around those realities — not in spite of them.",
      "The city's strongest categories are BFSI, media, consumer goods and the rapidly-growing GCC cluster in BKC and Powai. Each has a different temperature, but a shared expectation: don't waste time.",
    ],
    whyItWorks: [
      "Strong city-venue ecosystem — programs can run inside the city without a multi-hour transfer",
      "Day-trip access to Lonavala (90 km), Khandala and Karjat for proper outdoor formats",
      "Two-night retreat options in Mahabaleshwar, Alibaug and Goa",
      "BFSI and media headquarters cluster — leadership program demand is consistent",
    ],
    formats: [
      { name: "Indoor team building", note: "Most popular Mumbai format — at hotel ballrooms in BKC, Powai, Worli and Andheri" },
      { name: "Outdoor", note: "At Lonavala/Karjat resort properties for day or overnight" },
      { name: "Outbound", note: "Adventure-camp programs at Karjat — outbound leadership for senior teams" },
      { name: "Virtual", note: "For BFSI groups with cross-city footprints (Mumbai + Bangalore + Pune)" },
    ],
    programIdeas: [
      {
        title: "BFSI leadership half-day at Trident BKC",
        body: "Indoor format. Mafia Wars in the morning, structured debrief, integration over a long lunch. Compressed, professionally credible, 4–5 hour total commitment.",
      },
      {
        title: "Annual offsite to Lonavala",
        body: "Single overnight at a corporate-grade resort. Outdoor activity day, evening integration, departure after lunch on Day 2.",
      },
      {
        title: "Media-team weekend retreat in Alibaug",
        body: "Two nights at a beach property. Outbound morning, unstructured creative-thinking afternoon, structured Day 2.",
      },
    ],
    venues: [
      "The Trident BKC",
      "Taj Lands End",
      "Sofitel BKC",
      "JW Marriott Sahar",
      "Della Resorts (Lonavala)",
      "Aamby Valley",
    ],
    bestTime:
      "November–February is peak comfort. October and March are good. April–June heat is manageable indoors. June–September monsoon is best handled at indoor venues; for that period Lonavala becomes spectacularly green but weather risk is real for outdoor formats.",
    groupSizes: "30 to 500. Common bracket is 50–200 indoor.",
    nearby: [
      { label: "Pune", href: "/destinations/pune" },
      { label: "Lonavala", href: "/destinations/lonavala" },
      { label: "Mahabaleshwar", href: "/destinations/mahabaleshwar" },
      { label: "Goa", href: "/destinations/goa" },
    ],
    faqs: [
      {
        q: "How do you handle Mumbai's commute reality in program design?",
        a: "Half-day formats are far more common in Mumbai than in any other Indian city. We compress agendas. For day-long programs at city hotels, we recommend in-office pickups before 9 am and wraps before evening peak traffic.",
      },
      {
        q: "Which Lonavala properties do you use?",
        a: "Della Resorts, Aamby Valley, Fariyas, Renaissance Lonavala — depending on group size, format, and budget. Each one is vetted for corporate hosting capability, not just leisure-guest credentials.",
      },
      {
        q: "Can monsoon programs run in Lonavala?",
        a: "Yes — Lonavala in monsoon is genuinely beautiful and many corporate teams go specifically for the green. We design with strong indoor backups and weather-appropriate activities (Mafia Wars, Holey Pipes indoor variants, Cook It Up).",
      },
      {
        q: "What's the typical pickup arrangement for a Mumbai program?",
        a: "We coordinate AC coaches from BKC, Powai, Andheri, Lower Parel and CST/Churchgate based on where your team is concentrated. For senior leadership groups, individual cab pickups are common.",
      },
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    category: "metro",
    state: "Telangana",
    tagline: "Programs for Hyderabad's fast-growing tech ecosystem.",
    visual: "HYDERABAD_CHARMINAR",
    intro: [
      "Hyderabad has matured into India's third-largest tech market, with a heavy GCC concentration and rapid growth in pharma, ITeS and consulting. The city's corporate event needs reflect that: lots of new-team-formation programs, leadership development for fast-growing engineering managers, and large quarterly all-hands.",
      "What works in Hyderabad is shaped by the office geography — HITEC City and Gachibowli are the gravitational centres, and most programs are built around those.",
    ],
    whyItWorks: [
      "Strong urban venue ecosystem in HITEC City and Madhapur",
      "Day-trip access to resort properties around Shamshabad, Moinabad and Chevella",
      "Cleaner air and more outdoor-day options than Delhi or Mumbai",
      "Growing facilitator base — we run programs here weekly during peak season",
    ],
    formats: [
      { name: "Outdoor team building", note: "At resort properties around Shamshabad and Moinabad — 45-minute drive from HITEC City" },
      { name: "Indoor", note: "Hotel ballroom formats at HICC and Westin for 200+ groups" },
      { name: "Outbound", note: "Multi-day at properties around Hyderabad's farm belt — leadership development cohorts" },
      { name: "Virtual", note: "Cross-site engagement for teams with members in Bangalore, Pune and abroad" },
    ],
    programIdeas: [
      {
        title: "Engineering team day-out at Aalankrita Resort",
        body: "30 km from HITEC City. Outdoor activity block, lunch, facilitated debrief — useful for new managers and recently-formed engineering pods.",
      },
      {
        title: "Pharma R&D leadership program",
        body: "One-night residential. Outbound morning, leadership facilitation in the afternoon, structured Day 2.",
      },
      {
        title: "Large-group quarterly engagement at HICC",
        body: "Indoor format. Sports Olympics-style mass program for 400+, parallel activity zones, integrated debrief.",
      },
    ],
    venues: [
      "Trident Hyderabad",
      "ITC Kohenur",
      "Park Hyatt",
      "Aalankrita Resort",
      "Celebrity Resort",
      "Pragati Resorts",
    ],
    bestTime:
      "October–March is comfortable for outdoor. April–May is hot — design indoor or hill properties. Monsoon (June–September) is mild and many programs run successfully through it.",
    groupSizes: "30 to 600. Common bracket 80–250.",
    nearby: [
      { label: "Bangalore", href: "/destinations/bangalore" },
      { label: "Mysore", href: "/destinations/mysore" },
      { label: "Coorg", href: "/destinations/coorg" },
    ],
    faqs: [
      {
        q: "Best resort destinations near Hyderabad for a corporate day-out?",
        a: "Aalankrita, Celebrity, Pragati, Leonia and Country Club resorts are within an hour from HITEC City — good for day formats with corporate-grade catering and activity space.",
      },
      {
        q: "Can you run programs at our HITEC City office?",
        a: "Yes — our indoor activities are designed to run in office spaces or hotel meeting rooms. We bring all props and facilitation. For groups above 60, we usually recommend a HITEC City hotel ballroom.",
      },
      {
        q: "What's the largest program you've run in Hyderabad?",
        a: "Single-day programs of 600+ at HICC and large hotel venues — with parallel activity streams managed by multiple facilitators.",
      },
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    category: "metro",
    state: "Tamil Nadu",
    tagline: "Corporate programs along the Coromandel Coast.",
    visual: "CHENNAI_COAST",
    intro: [
      "Chennai's corporate base is heavy on IT services, banking back-office operations, automotive engineering and a steadily growing GCC cluster. Programs here tend to be large, professionally formal, and designed around very specific competency outcomes.",
      "What works in Chennai is also shaped by climate and geography — the heat is real, the coast is genuinely useful for getaway programs, and the corridor along OMR and ECR shapes most logistics decisions.",
    ],
    whyItWorks: [
      "ECR coast access — beach properties for one-night and weekend formats",
      "Day-trip access to Mahabalipuram and the resort belt south of the city",
      "Two-night options in Yelagiri, Yercaud, Pondicherry and Ooty",
      "Mature IT-services market with predictable, repeatable program needs",
    ],
    formats: [
      { name: "Outdoor team building", note: "At ECR and Mahabalipuram beach resorts — Sports Olympics scales well here" },
      { name: "Indoor", note: "Hotel ballroom programs in central Chennai when summer outdoor is too intense" },
      { name: "Outbound", note: "Multi-day at hill properties (Yelagiri, Yercaud) for leadership groups" },
      { name: "Virtual", note: "For IT-services teams with members across multiple delivery centres" },
    ],
    programIdeas: [
      {
        title: "ECR beach day-out for engineering team",
        body: "An hour from OMR. Beach-based outdoor activities, facilitated debrief at the resort, lunch and afternoon free time before evening departure.",
      },
      {
        title: "Two-night leadership offsite in Pondicherry",
        body: "For senior IT-services leadership. Outbound morning, integration afternoons, plus deliberate unstructured evenings to build candour.",
      },
      {
        title: "Annual day at ITC Grand Chola",
        body: "Indoor format. Multi-segment with Sports Olympics-style activities, structured recognition, evening dinner program.",
      },
    ],
    venues: [
      "ITC Grand Chola",
      "Taj Coromandel",
      "Park Hyatt",
      "Mahabs (Mahabalipuram)",
      "Radisson Blu Temple Bay",
      "Le Pondy",
    ],
    bestTime:
      "November–February is comfort season. October and March are good. Summer (April–June) is hot and humid — design indoor or move to hill properties. Monsoon (October–December northeast) brings rainfall risk for ECR programs.",
    groupSizes: "40 to 800. Common bracket 100–300.",
    nearby: [
      { label: "Bangalore", href: "/destinations/bangalore" },
      { label: "Ooty", href: "/destinations/ooty" },
      { label: "Coimbatore", href: "/destinations/coimbatore" },
    ],
    faqs: [
      {
        q: "Where do you run beach offsites for Chennai teams?",
        a: "ECR (Mahabalipuram and Kovalam belt) for day and overnight formats — Radisson Blu Temple Bay and Mahabs are two strong options. For two-night, Pondicherry is the usual choice.",
      },
      {
        q: "Can outdoor programs run during Chennai summer?",
        a: "Outdoor in April–June is hard — heat and humidity hit performance. We design indoor formats during this window, or move the program to Yelagiri, Yercaud or Ooty.",
      },
      {
        q: "What's the typical pickup point setup?",
        a: "OMR (Tidel Park to Sholinganallur), Guindy, T-Nagar and Anna Nagar are the standard pickup zones. We coordinate AC coaches from each based on team distribution.",
      },
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    category: "metro",
    state: "Maharashtra",
    tagline: "Programs for Pune's IT, manufacturing and education hub.",
    visual: "GREEN_HILLS",
    intro: [
      "Pune sits in an unusual position — close enough to Mumbai for shared corporate culture, but with its own distinct identity built around IT, automotive, education and a heavy concentration of GCC operations in Hinjewadi, Kharadi and Magarpatta.",
      "Programs here benefit from access to some of India's best corporate-day-out destinations: Lonavala, Khandala, Mahabaleshwar and Karjat are all within striking distance.",
    ],
    whyItWorks: [
      "Day-trip access to Lonavala (60 km) and Khandala — short transfers make day formats genuinely viable",
      "Two-night retreat options in Mahabaleshwar (110 km) and Goa",
      "Strong university and engineering culture — Pune teams often respond well to outbound formats",
      "Mature IT campus ecosystem (Hinjewadi, Kharadi, Magarpatta) for office-based indoor programs",
    ],
    formats: [
      { name: "Outdoor team building", note: "At Lonavala and Khandala resort properties — half-day and day formats" },
      { name: "Outbound", note: "Multi-day at Mahabaleshwar and Karjat for leadership cohorts" },
      { name: "Indoor", note: "Office-based at Hinjewadi or Kharadi for short-format programs" },
      { name: "Virtual", note: "Cross-site engagement for teams with members in Mumbai, Bangalore and Hyderabad" },
    ],
    programIdeas: [
      {
        title: "IT engineering day-out at Lonavala",
        body: "Hour-long transfer. Day program with outdoor activity block, lunch, facilitated debrief — back in Pune by evening.",
      },
      {
        title: "Two-night offsite at Mahabaleshwar",
        body: "Strawberry-season favourite. Outbound morning, leadership facilitation, integration on the final morning.",
      },
      {
        title: "Manufacturing leadership program in Karjat",
        body: "For senior plant leadership. Adventure-camp setting, deliberate physical-challenge formats, structured debrief mapped to operational competencies.",
      },
    ],
    venues: [
      "JW Marriott Pune",
      "The Westin",
      "Conrad Pune",
      "Della Resorts (Lonavala)",
      "Le Meridien Mahabaleshwar",
      "Aamby Valley",
    ],
    bestTime:
      "October–February is peak. March is borderline. April–June is hot — move to Mahabaleshwar or Lonavala. Monsoon Lonavala/Mahabaleshwar are spectacular for the right formats.",
    groupSizes: "20 to 400. Common bracket 50–200.",
    nearby: [
      { label: "Mumbai", href: "/destinations/mumbai" },
      { label: "Lonavala", href: "/destinations/lonavala" },
      { label: "Mahabaleshwar", href: "/destinations/mahabaleshwar" },
      { label: "Goa", href: "/destinations/goa" },
    ],
    faqs: [
      {
        q: "Best Pune-to-Lonavala departure timing for a day program?",
        a: "Departure by 8 am from Hinjewadi puts you at Lonavala by 9:30 — a comfortable program start. Avoid Friday-evening returns; route Pune-bound transfers via the expressway and budget 90 minutes for the return.",
      },
      {
        q: "Are there options for monsoon programs?",
        a: "Lonavala monsoon is genuinely beautiful and many corporate teams choose it specifically for that. We design with indoor backups and weather-appropriate activities.",
      },
      {
        q: "Can you run programs at our Hinjewadi office?",
        a: "Yes — indoor formats are designed to run in office spaces. For groups above 60, we usually recommend a Hinjewadi or Balewadi hotel ballroom.",
      },
    ],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    category: "metro",
    state: "West Bengal",
    tagline: "Corporate programs for the cultural capital of the East.",
    visual: "KOLKATA_HOWRAH",
    intro: [
      "Kolkata's corporate landscape is more concentrated than its peers — heavy in financial services, ITES, manufacturing and a long-standing tea, jute and engineering legacy. Programs here often have a strong cultural identity built into them.",
      "What works in Kolkata is shaped by the city's seasons (monsoon is intense, post-Durga Puja is the peak window) and access to the Bengal countryside, Sundarbans and hill stations.",
    ],
    whyItWorks: [
      "Access to Sundarbans, Mandarmani and Digha for getaway formats",
      "Two-night retreat options in Darjeeling, Kalimpong and Gangtok",
      "Strong indoor venue ecosystem in central and Salt Lake areas",
      "Distinctive cultural framing — programs themed around Bengal's intellectual and creative heritage land especially well",
    ],
    formats: [
      { name: "Indoor team building", note: "At Salt Lake and central Kolkata hotel ballrooms — large-format options work well" },
      { name: "Outdoor", note: "At resort properties around Mandarmani and the Hooghly belt" },
      { name: "Outbound", note: "Multi-day in the Darjeeling/Kalimpong belt for leadership cohorts" },
      { name: "Virtual", note: "For ITES teams with members across Kolkata, Bangalore and Pune" },
    ],
    programIdeas: [
      {
        title: "Annual day at ITC Royal Bengal",
        body: "Indoor large-format. Cultural-themed Sports Olympics, integrated recognition program, evening Bengali-fine-dining experience.",
      },
      {
        title: "Two-night retreat in Darjeeling",
        body: "Hill setting. Outbound morning, leadership facilitation, integration on the final morning. Particular strength when the program is designed around regional pride.",
      },
      {
        title: "Manufacturing offsite at Mandarmani",
        body: "Beach property for plant leadership group. Two nights, with a deliberate balance between structured and unstructured time.",
      },
    ],
    venues: [
      "ITC Royal Bengal",
      "JW Marriott",
      "Taj Bengal",
      "Sonar Kolkata",
      "Sun & Sands Mandarmani",
      "Mayfair Darjeeling",
    ],
    bestTime:
      "Mid-October to February is peak. March is comfortable. April–May is hot and humid — move indoor. Monsoon (June–September) is heavy — indoor formats work well, and the green belt around the city is at its best.",
    groupSizes: "30 to 500. Common bracket 80–200.",
    nearby: [
      { label: "Bhubaneswar", href: "/destinations/bhubaneswar" },
    ],
    faqs: [
      {
        q: "What's the best post-Puja window for corporate programs?",
        a: "Mid-October through January. Outdoor weather is perfect, properties are available, and the cultural mood of the city makes themed programs land especially well.",
      },
      {
        q: "Can you run programs at the Bengal countryside?",
        a: "Yes — Mandarmani, Diamond Harbour and the Hooghly belt offer good resort-grade properties for day and overnight formats. For deeper-immersion getaways, the Sundarbans is uniquely powerful but logistically more complex.",
      },
      {
        q: "What's distinctive about Kolkata corporate programs?",
        a: "Cultural framing tends to land particularly well. Programs themed around literary heritage, classical music or Bengali culinary traditions are received with genuine engagement, not as gimmicks.",
      },
    ],
  },

  /* =========================================================================
   * NCR REGION
   * ========================================================================= */
  {
    slug: "gurgaon",
    name: "Gurgaon",
    category: "ncr",
    state: "Haryana · NCR",
    tagline: "Programs for India's largest GCC and consulting hub.",
    visual: "MODERN_OFFICE",
    intro: [
      "Gurgaon (Gurugram) is the densest concentration of GCCs, consulting firms, and BFSI back-office operations in India. The corporate event needs here are unusually heavy on leadership development, large quarterly all-hands, and high-stakes new-team-formation programs.",
      "What works here is shaped by traffic geography (Cyber Hub, Golf Course Road and DLF clusters each behave differently) and the city's reliance on the Aravalli belt for proper outdoor formats.",
    ],
    whyItWorks: [
      "Access to Aravalli resort properties within 60–90 minutes — Manesar, Damdama, Sohna",
      "Two-night options in Rishikesh, Jim Corbett and Neemrana",
      "Strong urban venue ecosystem at Cyber Hub, Golf Course Road and Aerocity",
      "Highest concentration of leadership development demand in India",
    ],
    formats: [
      { name: "Outdoor", note: "Manesar resort properties for half-day and day formats" },
      { name: "Outbound", note: "Multi-day in Rishikesh and Corbett for leadership cohorts" },
      { name: "Indoor", note: "Cyber Hub and DLF hotel ballrooms for short-format and large groups" },
      { name: "Virtual", note: "Cross-site engagement for teams with members in multiple GCCs" },
    ],
    programIdeas: [
      {
        title: "GCC leadership half-day at Heritage Village Manesar",
        body: "Compressed format. Outdoor activity block, structured debrief, lunch — back in Gurgaon by 4 pm.",
      },
      {
        title: "Consulting team retreat in Neemrana",
        body: "Heritage palace setting, two nights, outbound morning + leadership facilitation. Particular fit for senior consulting groups.",
      },
      {
        title: "Annual day at Aerocity",
        body: "Indoor large-format. Sports Olympics-style activity zones, integrated recognition, evening dinner program.",
      },
    ],
    venues: [
      "The Oberoi Gurgaon",
      "Trident Gurgaon",
      "ITC Grand Bharat (Manesar)",
      "Heritage Village Manesar",
      "Westin Gurgaon",
      "Botanix Nature Resort",
    ],
    bestTime:
      "October–March is the comfort window. Plan around winter smog (November–January) — indoor backups become essential. April–May heat is real but manageable indoors.",
    groupSizes: "30 to 600. Common bracket 80–250.",
    nearby: [
      { label: "Delhi", href: "/destinations/delhi" },
      { label: "Noida", href: "/destinations/noida" },
      { label: "Faridabad", href: "/destinations/faridabad" },
      { label: "Rishikesh", href: "/destinations/rishikesh" },
      { label: "Jaipur", href: "/destinations/jaipur" },
    ],
    faqs: [
      {
        q: "Best Manesar resorts for a corporate day-out?",
        a: "ITC Grand Bharat for premium leadership programs, Heritage Village for mid-large day groups, Botanix for outdoor-heavy formats. Each is vetted for corporate-grade activity space and catering.",
      },
      {
        q: "How do you handle Gurgaon's Friday-evening traffic?",
        a: "We do not schedule programs to depart Manesar between 4 pm and 7 pm on Fridays. Either earlier returns or Saturday departures.",
      },
      {
        q: "Can you support multi-pickup from Cyber Hub, GGN-South and DLF?",
        a: "Yes. Multi-pickup is standard for us — we coordinate AC coaches from 3–5 office hubs based on team distribution.",
      },
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    category: "ncr",
    state: "Uttar Pradesh · NCR",
    tagline: "Corporate programs for Noida and Greater Noida tech corridor.",
    visual: "MODERN_OFFICE",
    intro: [
      "Noida and Greater Noida together form one of NCR's largest IT and ITES corridors, with strong manufacturing, BPO and education segments. The corporate event mix here tends toward large quarterly programs, training cohorts, and steady mid-size team-building.",
      "Programs here benefit from cleaner outdoor air than central Delhi most of the year, plus access to Sector 18, the Expressway, and Yamuna belt for venues.",
    ],
    whyItWorks: [
      "Access to resort properties in Greater Noida and along the Yamuna Expressway",
      "Day-trip and overnight access to Agra and the Aravalli belt",
      "Two-night retreat options in Rishikesh, Corbett and Neemrana",
      "Mature IT corridor with consistent quarterly engagement program demand",
    ],
    formats: [
      { name: "Outdoor", note: "At Greater Noida and Expressway resort properties" },
      { name: "Indoor", note: "Sector 18, Sector 62 and Greater Noida hotel ballrooms" },
      { name: "Outbound", note: "Multi-day in Rishikesh, Corbett or Aravalli camps" },
      { name: "Virtual", note: "For IT teams with members in multiple delivery centres" },
    ],
    programIdeas: [
      {
        title: "IT engineering day-out at Jaypee Greens (Greater Noida)",
        body: "Day program. Outdoor activities, lunch, facilitated debrief — works well for large engineering teams.",
      },
      {
        title: "Manufacturing leadership offsite in Neemrana",
        body: "Heritage palace setting, two nights, outbound morning + leadership facilitation.",
      },
      {
        title: "Annual day in Sector 18 hotel ballroom",
        body: "Indoor large-format. Sports Olympics zones, recognition program, evening dinner.",
      },
    ],
    venues: [
      "Radisson Blu Greater Noida",
      "Crowne Plaza Greater Noida",
      "Jaypee Greens",
      "The Westin Sohna (drivable)",
      "Heritage Village Manesar",
    ],
    bestTime:
      "October–March is comfort. Smog impact (November–January) is real for outdoor — design with indoor backups. Summer (April–June) is best handled indoors or moved to hill destinations.",
    groupSizes: "30 to 500. Common bracket 80–200.",
    nearby: [
      { label: "Delhi", href: "/destinations/delhi" },
      { label: "Gurgaon", href: "/destinations/gurgaon" },
      { label: "Greater Noida", href: "/destinations/greater-noida" },
      { label: "Faridabad", href: "/destinations/faridabad" },
      { label: "Rishikesh", href: "/destinations/rishikesh" },
    ],
    faqs: [
      {
        q: "Best resorts for a Noida corporate day-out?",
        a: "Jaypee Greens, Crowne Plaza Greater Noida, and Yamuna Expressway resorts — all corporate-vetted for activity space and catering quality at our scale.",
      },
      {
        q: "Can you handle pickups across Sector 16, 62 and Greater Noida?",
        a: "Yes — multi-pickup is standard. We coordinate AC coaches based on team distribution.",
      },
      {
        q: "What's the largest Noida program you've run?",
        a: "Day programs of 500+ at Greater Noida resort properties with parallel activity streams.",
      },
    ],
  },
  {
    slug: "faridabad",
    name: "Faridabad",
    category: "ncr",
    state: "Haryana · NCR",
    tagline: "Programs for the manufacturing belt of NCR.",
    visual: "URBAN_INDIA",
    intro: [
      "Faridabad has long been the manufacturing heart of NCR and is now growing as a logistics and engineering hub. The corporate event needs here lean toward mid-large team programs, plant-leadership development, and operational alignment offsites.",
      "Programs here benefit from quick access to Sohna, the Aravalli belt and Damdama Lake — outdoor formats are very viable.",
    ],
    whyItWorks: [
      "Access to Sohna and Aravalli resort properties within 45–60 minutes",
      "Day-trip access to Damdama Lake for adventure-camp programs",
      "Two-night options in Neemrana, Rishikesh and Corbett",
      "Manufacturing-friendly facilitator pool — comfortable with plant-floor cultures",
    ],
    formats: [
      { name: "Outdoor", note: "Sohna and Aravalli resorts for day and overnight" },
      { name: "Outbound", note: "Damdama Lake and Aravalli camps for leadership programs" },
      { name: "Indoor", note: "Faridabad hotel ballrooms for office-adjacent formats" },
      { name: "Virtual", note: "For dispersed manufacturing organisations" },
    ],
    programIdeas: [
      {
        title: "Plant leadership program at Sohna",
        body: "Day or overnight. Outbound activities deliberately chosen to reflect operational realities — coordination, communication under pressure, distributed execution.",
      },
      {
        title: "Annual celebration at Damdama Lake",
        body: "Outdoor format. Adventure-themed activity zones, lunch, evening cultural program.",
      },
      {
        title: "Manufacturing-team retreat in Neemrana",
        body: "Two-night format for senior plant leadership. Outbound + leadership facilitation + structured integration.",
      },
    ],
    venues: [
      "Radisson Blu Faridabad",
      "Country Inn Sohna",
      "Westin Sohna",
      "Heritage Village Manesar",
      "Camp Wild Dhauj",
    ],
    bestTime:
      "October–March is comfort. November–January smog impact is similar to the rest of NCR — indoor backups recommended. April–May heat manageable at hill or shaded venues.",
    groupSizes: "30 to 400. Common bracket 60–200.",
    nearby: [
      { label: "Delhi", href: "/destinations/delhi" },
      { label: "Gurgaon", href: "/destinations/gurgaon" },
      { label: "Noida", href: "/destinations/noida" },
    ],
    faqs: [
      {
        q: "Best Sohna resorts for a Faridabad team day-out?",
        a: "Westin Sohna and Country Inn Sohna are both 45 minutes from central Faridabad and corporate-vetted for activity space and catering at our scale.",
      },
      {
        q: "Can you design programs around plant-floor realities?",
        a: "Yes — we design specifically around operational competency frameworks (coordination, safety culture, communication under pressure). Our facilitators are comfortable in manufacturing cultures.",
      },
      {
        q: "Is Damdama Lake suitable for adventure-themed programs?",
        a: "Yes — it's a long-standing adventure-camp destination with corporate-grade infrastructure for half-day and day programs.",
      },
    ],
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    category: "ncr",
    state: "Uttar Pradesh · NCR",
    tagline: "Programs for Greater Noida's expanding tech and education hub.",
    visual: "MODERN_OFFICE",
    intro: [
      "Greater Noida has become NCR's expanding-corporate frontier — large IT campuses, education clusters, and a growing logistics base along the Yamuna Expressway. The corporate event needs here are weighted toward large-group programs and consistent quarterly cadence.",
      "Programs here benefit from on-site resort infrastructure, easy expressway access, and meaningful distance from central Delhi smog and traffic.",
    ],
    whyItWorks: [
      "On-site resort properties — programs can run within 20 minutes of office",
      "Yamuna Expressway access to Agra and beyond",
      "Two-night options in Rishikesh and Corbett",
      "Cleaner outdoor air than central NCR much of the year",
    ],
    formats: [
      { name: "Outdoor", note: "Greater Noida and Expressway resort properties" },
      { name: "Indoor", note: "On-site hotel ballroom programs" },
      { name: "Outbound", note: "Multi-day at Aravalli or hill destinations" },
      { name: "Virtual", note: "Cross-site engagement for distributed campuses" },
    ],
    programIdeas: [
      {
        title: "Large-group annual day at Jaypee Greens",
        body: "Indoor + outdoor combined format. Sports Olympics activity zones, recognition program, evening dinner.",
      },
      {
        title: "Education-sector leadership retreat at Crowne Plaza",
        body: "Two-day format. Mafia Wars and structured-debrief leadership work, plus integration sessions.",
      },
      {
        title: "Engineering team day-out on the Expressway",
        body: "Day format at a corporate-grade resort. Outdoor activity block, lunch, facilitated debrief.",
      },
    ],
    venues: [
      "Jaypee Greens",
      "Crowne Plaza Greater Noida",
      "Radisson Blu Greater Noida",
      "Expressway resorts",
    ],
    bestTime:
      "October–March is peak. Smog impact in Greater Noida is meaningfully lower than central NCR. April–June heat handled indoors.",
    groupSizes: "50 to 600. Strong fit for large groups.",
    nearby: [
      { label: "Noida", href: "/destinations/noida" },
      { label: "Delhi", href: "/destinations/delhi" },
      { label: "Gurgaon", href: "/destinations/gurgaon" },
    ],
    faqs: [
      {
        q: "What makes Greater Noida good for large groups?",
        a: "Plenty of resort properties have the activity space, room inventory, and catering capacity for 300+ programs without quality drop. The Expressway access also makes logistics straightforward.",
      },
      {
        q: "Can you run programs on the Yamuna Expressway corridor?",
        a: "Yes — there are good corporate-grade properties along the Expressway suitable for day and overnight formats. We've run multiple programs there.",
      },
    ],
  },

  /* =========================================================================
   * TIER 2 / GROWING MARKETS
   * ========================================================================= */
  {
    slug: "jaipur",
    name: "Jaipur",
    category: "tier2",
    state: "Rajasthan",
    tagline: "Heritage-led corporate programs in the Pink City.",
    visual: "JAIPUR_HAWA_MAHAL",
    intro: [
      "Jaipur is one of India's most distinctive corporate-event destinations — heritage palaces, desert landscapes, and a corporate culture that has matured rapidly with the growth of the broader Tier 2 market.",
      "Programs here often draw teams from Delhi NCR for getaway-style offsites — but Jaipur also has its own steadily growing IT, education and travel-tech base.",
    ],
    whyItWorks: [
      "Heritage-palace venues that produce a genuinely different program atmosphere",
      "Desert and rural retreat options — Pushkar, Ramgarh, Samode",
      "Strong fit for leadership offsites where the venue itself supports the gravitas",
      "Direct flight access from most metros",
    ],
    formats: [
      { name: "Outbound", note: "Multi-day at heritage properties — particularly powerful for leadership programs" },
      { name: "Outdoor", note: "Desert experiences, camel-cart logistics, night sky programs" },
      { name: "Indoor", note: "Palace ballrooms with strong activity space" },
    ],
    programIdeas: [
      {
        title: "Leadership offsite at Samode Palace",
        body: "Two nights in a heritage palace. Outbound morning, leadership facilitation, integration over dinner. Distinct fit for senior leadership groups where setting matters.",
      },
      {
        title: "Annual day at Jai Mahal Palace",
        body: "Indoor + outdoor combined. Heritage-themed Sports Olympics zones, evening palace dinner.",
      },
      {
        title: "Desert experience at Pushkar/Ramgarh",
        body: "One-night or weekend. Outdoor program with deliberately distinctive activities — desert sunset, night-sky integration sessions.",
      },
    ],
    venues: [
      "Samode Palace",
      "Jai Mahal Palace",
      "Rambagh Palace (Taj)",
      "ITC Rajputana",
      "Fairmont Jaipur",
      "Tree of Life Resorts",
    ],
    bestTime:
      "October–February is peak. March is borderline for outdoor. April–June is hot — design indoor or move further into the Aravallis. Monsoon (July–September) is mild and visually striking.",
    groupSizes: "20 to 300. Common bracket 40–150.",
    nearby: [
      { label: "Delhi", href: "/destinations/delhi" },
      { label: "Gurgaon", href: "/destinations/gurgaon" },
      { label: "Jaisalmer", href: "/destinations/jaisalmer" },
    ],
    faqs: [
      {
        q: "Why do leadership groups travel to Jaipur for offsites?",
        a: "The heritage-palace setting produces a different program atmosphere — there's a genuine seriousness to it that hotel ballrooms can't replicate. For senior leadership groups working on strategy or culture, the setting itself contributes.",
      },
      {
        q: "What's the right group size for Samode or Rambagh?",
        a: "Samode is best for 20–60 leadership groups. Rambagh and Jai Mahal can comfortably host 100–250. For 300+, ITC Rajputana and Fairmont have the infrastructure.",
      },
      {
        q: "How does flight access from Delhi work?",
        a: "Direct flights or a 4-hour drive on the Delhi-Jaipur Expressway. Most NCR-based programs do mid-morning departures and arrive at the property by lunchtime.",
      },
    ],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    category: "tier2",
    state: "Gujarat",
    tagline: "Programs for Gujarat's commercial powerhouse.",
    visual: "HERITAGE_PALACE",
    intro: [
      "Ahmedabad anchors Gujarat's broader commercial geography — textiles, pharmaceuticals, automotive, finance and a strong family-business culture. Programs here often combine practical operational outcomes with cultural and culinary experiences specific to the region.",
      "The city has matured rapidly as a corporate destination, helped by GIFT City, the Statue of Unity, and good resort access in Polo, Saputara and the Rann of Kutch.",
    ],
    whyItWorks: [
      "Distinctive cultural and culinary programs land particularly well",
      "Day-trip access to Polo Forest and Saputara",
      "Rann of Kutch experiences for genuinely distinctive multi-day formats",
      "Strong family-business culture — programs themed around values and continuity work well",
    ],
    formats: [
      { name: "Outdoor", note: "At Polo and Saputara resort properties" },
      { name: "Indoor", note: "Hotel ballrooms in central Ahmedabad and SG Highway" },
      { name: "Outbound", note: "Multi-day at hill or rural retreats" },
      { name: "Virtual", note: "For dispersed family businesses with multi-city operations" },
    ],
    programIdeas: [
      {
        title: "Pharma annual offsite at Saputara",
        body: "Hill setting, two nights. Outbound + leadership facilitation, with deliberate space for cultural and culinary integration evenings.",
      },
      {
        title: "Family business retreat at Rann of Kutch",
        body: "Three nights at the white desert. Strategic alignment work + structured cultural programming.",
      },
      {
        title: "Indoor program at Hyatt Ahmedabad",
        body: "Half-day or day format. Mafia Wars or Cook It Up — Cook It Up especially powerful given Gujarat's food culture.",
      },
    ],
    venues: [
      "Hyatt Regency Ahmedabad",
      "Taj Skyline",
      "Renaissance Ahmedabad",
      "Aranya Resorts (Polo)",
      "Rann Riders (Kutch)",
    ],
    bestTime:
      "November–February is peak comfort. October and March are good. April–June is very hot — move indoor or to Saputara. Monsoon (July–September) is moderate.",
    groupSizes: "30 to 300. Common bracket 60–200.",
    nearby: [
      { label: "Mumbai", href: "/destinations/mumbai" },
      { label: "Pune", href: "/destinations/pune" },
    ],
    faqs: [
      {
        q: "What's distinctive about Ahmedabad corporate programs?",
        a: "Cultural and culinary framing land particularly well. Cook It Up programs themed around Gujarati cuisine, or evening sessions framed around regional history, are received with genuine engagement.",
      },
      {
        q: "Is the Rann of Kutch viable for corporate programs?",
        a: "Yes — for multi-night strategic offsites. The setting itself produces unusual creative thinking. Best for senior leadership groups of 20–60.",
      },
      {
        q: "What about programs during Vibrant Gujarat or peak business seasons?",
        a: "Plan 12+ weeks ahead during peak business event seasons. Hotel inventory tightens significantly.",
      },
    ],
  },
  {
    slug: "kochi",
    name: "Kochi",
    category: "tier2",
    state: "Kerala",
    tagline: "Backwater and coastal programs in God's Own Country.",
    visual: "BACKWATERS",
    intro: [
      "Kochi has matured as the corporate gateway to Kerala — strong in IT, BPO, shipping, healthcare and tourism. Programs here often blend conventional corporate event design with the state's distinctive natural and cultural assets.",
      "What works in Kochi is shaped by Kerala's geography — backwaters, beaches, plantations and hill stations are all within reach. Programs often combine multiple settings into a single integrated experience.",
    ],
    whyItWorks: [
      "Backwater houseboat programs — uniquely powerful for senior leadership cohorts",
      "Day-trip access to Cherai beach and Marari",
      "Two-night options in Munnar, Wayanad and Thekkady",
      "Cultural framing (Kathakali, Kalari, Ayurveda) integrates well into program design",
    ],
    formats: [
      { name: "Outbound", note: "Backwater houseboat programs and plantation retreats" },
      { name: "Outdoor", note: "At Cherai and Marari beach properties" },
      { name: "Indoor", note: "Kochi hotel ballrooms for short-format programs" },
      { name: "Virtual", note: "For IT teams with members across Kochi, Trivandrum and abroad" },
    ],
    programIdeas: [
      {
        title: "Leadership cohort on a private houseboat",
        body: "Two nights in the Alleppey backwaters. Structured outbound + facilitated debriefs + deliberate disconnection. Particular fit for senior strategy alignment.",
      },
      {
        title: "Annual offsite at Cherai beach",
        body: "Day or overnight format. Outdoor activity block, beach-side lunch, facilitated debrief.",
      },
      {
        title: "IT team retreat in Munnar",
        body: "Two nights at a hill plantation property. Outbound morning + leadership facilitation.",
      },
    ],
    venues: [
      "Taj Malabar",
      "Grand Hyatt Kochi Bolgatty",
      "Crowne Plaza Kochi",
      "Marari Beach Resort",
      "Lakes & Lagoons (houseboats)",
      "CGH Earth properties",
    ],
    bestTime:
      "October–March is peak. April–May is hot and humid — design indoor or move to Munnar. Monsoon (June–September) is heavy but visually spectacular; backwaters and plantations are at their best.",
    groupSizes: "20 to 250. Common bracket 40–150.",
    nearby: [
      { label: "Coimbatore", href: "/destinations/coimbatore" },
      { label: "Munnar", href: "/destinations/munnar" },
      { label: "Wayanad", href: "/destinations/wayanad" },
      { label: "Bangalore", href: "/destinations/bangalore" },
    ],
    faqs: [
      {
        q: "What makes a backwater houseboat program work?",
        a: "Confined space + sustained shared experience + deliberate disconnection. For senior leadership groups working on strategy or genuine candour, it's hard to match. Group size has to be right — 20–40 is typical.",
      },
      {
        q: "Can you combine Kochi with Munnar in one program?",
        a: "Yes — common combined format is one night at a Kochi or Cherai hotel + two nights at a Munnar plantation property. The geographical contrast is part of the design.",
      },
      {
        q: "What about monsoon programs?",
        a: "Kerala monsoon is genuinely spectacular and many corporate teams come specifically for it. We design with strong indoor backups and recommend Ayurveda-themed integration sessions.",
      },
    ],
  },
  {
    slug: "coimbatore",
    name: "Coimbatore",
    category: "tier2",
    state: "Tamil Nadu",
    tagline: "Programs for the Manchester of South India.",
    visual: "WESTERN_GHATS",
    intro: [
      "Coimbatore has long been a textile and engineering hub and is now growing rapidly as an IT and education centre. Corporate event needs here lean toward mid-size leadership programs and operational alignment offsites.",
      "What works in Coimbatore is shaped by access to the Western Ghats — Ooty, Kotagiri, Valparai and Coonoor are all within practical driving distance.",
    ],
    whyItWorks: [
      "Day-trip and overnight access to Ooty, Coonoor and Kotagiri",
      "Two-night retreat options in Valparai and Wayanad",
      "Strong manufacturing-friendly facilitator pool",
      "Distinctive culture — programs themed around regional engineering legacy land well",
    ],
    formats: [
      { name: "Outbound", note: "At Western Ghats hill properties" },
      { name: "Outdoor", note: "Resort properties at Anaikatti and Mettupalayam" },
      { name: "Indoor", note: "Coimbatore city hotels — Le Meridien, The Residency" },
    ],
    programIdeas: [
      {
        title: "Manufacturing leadership retreat in Valparai",
        body: "Tea estate setting. Three days for senior plant leadership with structured outbound and integration.",
      },
      {
        title: "IT team day-out at Anaikatti",
        body: "Hour-long transfer. Day program at a forest-edge resort with outdoor activities.",
      },
      {
        title: "Annual offsite at Le Meridien",
        body: "Indoor or combined format. Mafia Wars + structured debrief + recognition dinner.",
      },
    ],
    venues: [
      "Le Meridien Coimbatore",
      "The Residency",
      "Vivanta Coimbatore",
      "Briar Tea Bungalows (Valparai)",
      "Kurumba Village (Coonoor)",
    ],
    bestTime:
      "October–March is comfort. April–May is best moved to hill destinations. Monsoon (June–September) is mild for most formats.",
    groupSizes: "20 to 250.",
    nearby: [
      { label: "Bangalore", href: "/destinations/bangalore" },
      { label: "Chennai", href: "/destinations/chennai" },
      { label: "Ooty", href: "/destinations/ooty" },
      { label: "Wayanad", href: "/destinations/wayanad" },
    ],
    faqs: [
      {
        q: "Best Ooty/Coonoor properties for a Coimbatore corporate offsite?",
        a: "Sterling Ooty Elk Hill, Taj Savoy Ooty, Kurumba Village (Coonoor), Briar Tea Bungalows (Valparai) — each is corporate-vetted for activity space and catering.",
      },
      {
        q: "What about Valparai for senior leadership programs?",
        a: "Valparai's tea-estate isolation is genuinely powerful for senior leadership work. Limited inventory means 12+ weeks of planning is wise.",
      },
    ],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    category: "tier2",
    state: "Punjab/Haryana",
    tagline: "Programs for the planned-city corporate base.",
    visual: "GREEN_HILLS",
    intro: [
      "Chandigarh anchors a growing corporate market that includes Mohali (IT and pharma) and Panchkula. The city's planned geography and proximity to the Shivaliks make it unusual among Tier 2 markets — outdoor formats are genuinely viable nearly year-round.",
      "Programs here often draw teams that operate across Punjab, Haryana and Himachal — with regional pride being a meaningful component of program design.",
    ],
    whyItWorks: [
      "Day-trip access to Pinjore, Morni and Kasauli",
      "Two-night options in Shimla, Manali and Dharamshala",
      "Cleaner outdoor air than NCR most of the year",
      "Distinct regional culture — programs themed around Punjab and Himachal land well",
    ],
    formats: [
      { name: "Outdoor", note: "Pinjore Gardens, Morni Hills, Kasauli day formats" },
      { name: "Outbound", note: "Multi-day at Shimla, Kasauli or Dharamshala" },
      { name: "Indoor", note: "Sector 17, Sector 35 hotel ballrooms" },
    ],
    programIdeas: [
      {
        title: "IT team retreat in Kasauli",
        body: "Hour-long transfer. Two-night format at a hill resort with outbound morning + leadership facilitation.",
      },
      {
        title: "Pharma leadership offsite in Shimla",
        body: "Heritage-hill setting, two nights, structured outbound + integration.",
      },
      {
        title: "Annual day at JW Marriott",
        body: "Indoor large-format. Cultural-themed Sports Olympics, recognition program, evening Punjabi-themed dinner.",
      },
    ],
    venues: [
      "JW Marriott Chandigarh",
      "Hyatt Regency",
      "Taj Chandigarh",
      "Timber Trail (Parwanoo)",
      "Kasauli Resort",
    ],
    bestTime:
      "October–March is peak. April–June is hot — move to Shimla or Kasauli. Monsoon (July–September) is moderate. Winters are sharp but workable.",
    groupSizes: "30 to 300.",
    nearby: [
      { label: "Delhi", href: "/destinations/delhi" },
      { label: "Manali", href: "/destinations/manali" },
    ],
    faqs: [
      {
        q: "How quickly can we get to Shimla or Kasauli?",
        a: "Kasauli is 60 km — under 90 minutes. Shimla is 110 km — under 3 hours. Dharamshala is a longer drive (240 km, 5–6 hours) better suited for multi-night programs.",
      },
      {
        q: "Best Chandigarh-area resorts for a day-out?",
        a: "Timber Trail at Parwanoo for proper outdoor formats with cable-car novelty. Pinjore for heritage-day formats. Morni Hills resorts for forest-edge programs.",
      },
    ],
  },
  {
    slug: "indore",
    name: "Indore",
    category: "tier2",
    state: "Madhya Pradesh",
    tagline: "Programs for India's cleanest city and central commercial hub.",
    visual: "HERITAGE_PALACE",
    intro: [
      "Indore is Madhya Pradesh's largest commercial centre — strong in pharma, automotive, education and growing IT. The city has cultivated a clean, organised corporate culture that compares favourably with much larger metros.",
      "Programs here benefit from proximity to Mandu, Maheshwar and Pachmarhi — distinctive heritage and natural getaways that produce program experiences hard to replicate elsewhere.",
    ],
    whyItWorks: [
      "Heritage-getaway access to Mandu and Maheshwar",
      "Hill-station programs at Pachmarhi",
      "Day-trip resort access around Indore",
      "Distinctive culture — programs themed around Malwa heritage land well",
    ],
    formats: [
      { name: "Outdoor", note: "Resort properties around Indore for day formats" },
      { name: "Outbound", note: "Multi-day in Pachmarhi for leadership cohorts" },
      { name: "Indoor", note: "Sayaji and Marriott hotel ballrooms" },
    ],
    programIdeas: [
      {
        title: "Heritage leadership offsite at Maheshwar",
        body: "Two nights at the riverside palace. Outbound + leadership facilitation in a setting that produces unusually grounded conversations.",
      },
      {
        title: "Pharma annual offsite at Pachmarhi",
        body: "Hill setting, two nights. Outbound morning + facilitated debriefs + cultural integration.",
      },
      {
        title: "Indoor day-program at Marriott Indore",
        body: "Half-day format. Cook It Up themed around Malwa cuisine + structured debrief.",
      },
    ],
    venues: [
      "Marriott Indore",
      "Sayaji Indore",
      "Radisson Blu",
      "Ahilya Fort (Maheshwar)",
      "Malwa Resort (Mandu)",
    ],
    bestTime:
      "October–March is peak. April–June is hot — move to Pachmarhi. Monsoon (July–September) is moderate and visually striking around Mandu.",
    groupSizes: "20 to 200.",
    nearby: [
      { label: "Mumbai", href: "/destinations/mumbai" },
      { label: "Ahmedabad", href: "/destinations/ahmedabad" },
    ],
    faqs: [
      {
        q: "What makes Maheshwar distinctive for a corporate program?",
        a: "Riverside palace setting, slow pace, and a particular kind of quiet that produces unusually grounded leadership conversations. Best for 20–60 leadership cohorts.",
      },
      {
        q: "How long does Pachmarhi take from Indore?",
        a: "About 5–6 hours by road. Best suited for two- and three-night programs rather than day formats.",
      },
    ],
  },
  {
    slug: "bhubaneswar",
    name: "Bhubaneswar",
    category: "tier2",
    state: "Odisha",
    tagline: "Temple-city corporate programs in the East.",
    visual: "TEMPLE_HERITAGE",
    intro: [
      "Bhubaneswar has matured as Odisha's IT and government-services hub, with growing investment in education and steel-sector engineering. Programs here are often designed around the region's distinctive cultural and heritage assets.",
      "Access to Puri, Konark and Chilika Lake makes Bhubaneswar genuinely viable for one- and two-night getaway formats — and the city's broader temple architecture creates distinctive program-themes.",
    ],
    whyItWorks: [
      "Coastal getaway access — Puri (60 km), Konark, Gopalpur",
      "Chilika Lake for nature-themed retreat formats",
      "Distinctive culture — heritage and temple architecture as program themes",
      "Direct flight access from major metros",
    ],
    formats: [
      { name: "Outdoor", note: "Puri and Konark beach properties for day or overnight" },
      { name: "Outbound", note: "Chilika and forest-belt camps for leadership programs" },
      { name: "Indoor", note: "Bhubaneswar hotel ballrooms — Mayfair, Trident, Swosti" },
    ],
    programIdeas: [
      {
        title: "Annual offsite at Mayfair Puri",
        body: "Single overnight at the beach. Outdoor activity block, evening cultural program, Day 2 structured debrief.",
      },
      {
        title: "Leadership cohort at Chilika Lake",
        body: "Two nights at a lakeside property. Outbound + nature-themed integration sessions.",
      },
      {
        title: "Day program at Trident Bhubaneswar",
        body: "Half-day or day format with Mafia Wars and structured debrief — particularly fit for IT-services teams.",
      },
    ],
    venues: [
      "Mayfair Puri",
      "Trident Bhubaneswar",
      "Mayfair Lagoon",
      "Swosti Premium",
      "Toshali Sands (Puri)",
    ],
    bestTime:
      "October–February is peak. March is borderline. Summer (April–June) is hot and humid — design indoor or move to Chilika. Monsoon (July–September) is heavy but visually spectacular.",
    groupSizes: "20 to 250.",
    nearby: [
      { label: "Kolkata", href: "/destinations/kolkata" },
    ],
    faqs: [
      {
        q: "How long is the drive from Bhubaneswar to Puri?",
        a: "60 km — about 90 minutes. Comfortable for a day-out or overnight format.",
      },
      {
        q: "What's distinctive about Chilika Lake programs?",
        a: "Lake setting, slow pace, and naturally distinctive activity-design opportunities. Best for 20–80 cohorts working on culture or strategy.",
      },
    ],
  },
  {
    slug: "nagpur",
    name: "Nagpur",
    category: "tier2",
    state: "Maharashtra",
    tagline: "Programs at India's geographic centre.",
    visual: "FOREST_WILDLIFE",
    intro: [
      "Nagpur sits at India's geographic centre and has built a corporate identity around logistics, MIHAN's IT cluster, defence and orange-belt agriculture. The city's program demand has grown alongside investment in air connectivity and infrastructure.",
      "Programs here benefit from access to Pench and Tadoba — two of India's strongest tiger reserves and meaningful settings for senior leadership offsites.",
    ],
    whyItWorks: [
      "Pench and Tadoba access — wildlife-resort programs are genuinely distinctive",
      "Central air connectivity for multi-city teams",
      "Day and overnight resort options around the city",
      "Distinct regional culture and culinary identity",
    ],
    formats: [
      { name: "Outbound", note: "Pench and Tadoba safari-resort properties" },
      { name: "Outdoor", note: "Resort properties around Nagpur for day formats" },
      { name: "Indoor", note: "Radisson Blu and Centre Point for short-format programs" },
    ],
    programIdeas: [
      {
        title: "Senior leadership cohort at Pench",
        body: "Two nights at a wildlife-grade resort. Outbound morning, leadership facilitation, deliberate downtime in a setting that recalibrates pace.",
      },
      {
        title: "Logistics-team retreat at Tadoba",
        body: "Three-day format. Safari-led informal sessions + structured outbound + integration.",
      },
      {
        title: "Annual day at Radisson Blu Nagpur",
        body: "Indoor program for 200+. Sports Olympics-style activity zones, cultural-themed evening program.",
      },
    ],
    venues: [
      "Radisson Blu Nagpur",
      "Centre Point",
      "Hotel Pride",
      "Tuli Tiger Resort (Pench)",
      "Svasara (Tadoba)",
    ],
    bestTime:
      "October–February is peak. March–May is very hot. Wildlife-resort access is best November–April. Monsoon parks are closed.",
    groupSizes: "20 to 200.",
    nearby: [
      { label: "Mumbai", href: "/destinations/mumbai" },
      { label: "Hyderabad", href: "/destinations/hyderabad" },
    ],
    faqs: [
      {
        q: "What makes Pench/Tadoba distinctive for corporate programs?",
        a: "Wildlife setting, deliberate slowness, and the structural enforced quiet of safari-camp culture. Senior leadership groups working on strategy benefit from the pace shift.",
      },
      {
        q: "What's the right group size for a wildlife-resort program?",
        a: "20–60 typically. Beyond that, room and safari-vehicle inventory becomes constraining.",
      },
    ],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    category: "tier2",
    state: "Uttar Pradesh",
    tagline: "Programs for the Nawabi capital and growing eastern UP corporate base.",
    visual: "HERITAGE_PALACE",
    intro: [
      "Lucknow is the corporate centre of eastern UP and a growing IT and education hub, with strong public-sector and BFSI presence. The city's distinctive Nawabi culture creates particularly strong program-themes around hospitality, craftsmanship and culinary heritage.",
      "Programs here are often designed to include cultural integration as a core element — not as a side activity.",
    ],
    whyItWorks: [
      "Distinctive cultural framing — Nawabi heritage as a program theme",
      "Day and overnight resort options around the city",
      "Two-night options at Naimisharanya and the Terai belt",
      "Strong fit for programs that combine corporate work with cultural experience",
    ],
    formats: [
      { name: "Outdoor", note: "Resort properties around Lucknow for day formats" },
      { name: "Indoor", note: "Hyatt Regency, Taj Mahal Lucknow ballroom programs" },
      { name: "Outbound", note: "Multi-day at Terai forest belts and hill destinations" },
    ],
    programIdeas: [
      {
        title: "Heritage leadership offsite at Taj Mahal Lucknow",
        body: "Two-day format with Nawabi-cuisine integration sessions and structured leadership facilitation.",
      },
      {
        title: "Annual day at Hyatt Regency Lucknow",
        body: "Indoor large-format. Cook It Up themed around Awadhi cuisine + Sports Olympics + recognition dinner.",
      },
      {
        title: "BFSI offsite at Renaissance",
        body: "Day or overnight. Mafia Wars + structured debrief, well-suited to formal banking cultures.",
      },
    ],
    venues: [
      "Taj Mahal Lucknow",
      "Hyatt Regency",
      "Renaissance Lucknow",
      "The Centrum",
      "Country Inn (Sahara Ganj area)",
    ],
    bestTime:
      "October–March is comfortable. April–June is very hot — design indoor. Monsoon (July–September) is moderate.",
    groupSizes: "30 to 250.",
    nearby: [
      { label: "Delhi", href: "/destinations/delhi" },
    ],
    faqs: [
      {
        q: "What's distinctive about Lucknow corporate programs?",
        a: "Nawabi cultural framing genuinely lands. Cook It Up programs around Awadhi cuisine, evening sessions framed around regional history or chikankari craftsmanship — all received with real engagement, not as gimmicks.",
      },
      {
        q: "Best Lucknow venues for a 200+ program?",
        a: "Hyatt Regency and Taj Mahal Lucknow have the ballroom inventory and corporate-grade activity space. We've run programs of 300+ at Hyatt.",
      },
    ],
  },
  {
    slug: "vizag",
    name: "Vizag",
    category: "tier2",
    state: "Andhra Pradesh",
    tagline: "Coastal corporate programs at City of Destiny.",
    visual: "BEACH_PALMS",
    intro: [
      "Vizag (Visakhapatnam) is Andhra Pradesh's largest commercial centre — heavy on shipping, defence, steel, ITES and a growing pharma-life-sciences cluster. The city's coastal geography and access to Araku Valley make it a genuinely distinctive corporate destination.",
      "Programs here often combine beach formats with hill-getaway options — and the city's industrial culture creates strong demand for operational-excellence and leadership development programs.",
    ],
    whyItWorks: [
      "Coastal beach access for outdoor day formats",
      "Araku Valley for two-night hill retreat formats",
      "Strong industrial culture — operational competency programs work well",
      "Direct flight access from most metros",
    ],
    formats: [
      { name: "Outdoor", note: "Rishikonda and Yarada beach resort properties" },
      { name: "Outbound", note: "Multi-day at Araku Valley hill properties" },
      { name: "Indoor", note: "Novotel and Park Hyatt Vizag for indoor programs" },
    ],
    programIdeas: [
      {
        title: "Steel/heavy-industry leadership program in Araku",
        body: "Two-night hill retreat. Outbound + structured leadership facilitation. The contrast with industrial-plant settings is part of the design.",
      },
      {
        title: "Beach annual day at Rishikonda",
        body: "Day or overnight format. Outdoor activity block, beach-side lunch, evening cultural program.",
      },
      {
        title: "Pharma indoor offsite at Novotel",
        body: "Mafia Wars or Cook It Up + structured debrief — particularly fit for technical leadership groups.",
      },
    ],
    venues: [
      "Novotel Vizag",
      "Park Hyatt Vizag",
      "The Bheemili Resort",
      "Haritha Valley View (Araku)",
    ],
    bestTime:
      "October–February is peak. March is borderline. April–June is very hot — move to Araku or design indoor. Monsoon (July–September) is heavy.",
    groupSizes: "20 to 200.",
    nearby: [
      { label: "Hyderabad", href: "/destinations/hyderabad" },
      { label: "Bhubaneswar", href: "/destinations/bhubaneswar" },
    ],
    faqs: [
      {
        q: "How long is the drive from Vizag to Araku?",
        a: "About 110 km, 4 hours via the Eastern Ghats. The road experience is part of the program — the train route is even more spectacular and works well for select formats.",
      },
      {
        q: "What's the right format for a Vizag-headquartered industrial team?",
        a: "Two-night Araku retreat with outbound and structured leadership facilitation tends to outperform single-day urban programs for senior industrial leadership groups.",
      },
    ],
  },

  /* =========================================================================
   * GETAWAY DESTINATIONS
   * ========================================================================= */
  {
    slug: "coorg",
    name: "Coorg",
    category: "getaway",
    state: "Karnataka",
    tagline: "Coffee-estate retreats for South India's leadership offsites.",
    visual: "COFFEE_PLANTATION",
    intro: [
      "Coorg has been our most-booked overnight and two-night destination for over a decade — the combination of coffee-plantation geography, mature property infrastructure, and the four-hour drive from Bangalore makes it the default choice for South Indian corporate leadership offsites.",
      "What works in Coorg is shaped by the region's quiet — programs here tend to slow down in a way that produces more honest conversations than urban settings ever can.",
    ],
    whyItWorks: [
      "Plantation isolation produces genuinely different program atmospheres",
      "Mature corporate-grade property inventory at multiple price points",
      "Four-hour drive from Bangalore — practical for two-night formats",
      "Distinctive coffee-estate experiences integrate naturally into program design",
    ],
    formats: [
      { name: "Outbound", note: "Triggertronics and Roller Coaster at coffee-estate properties — the format that defines Coorg programs" },
      { name: "Outdoor", note: "Estate walks, plantation-edge activities, dragon-boat at Harangi" },
      { name: "Indoor", note: "Property meeting-rooms for facilitated debriefs and integration" },
    ],
    programIdeas: [
      {
        title: "Two-night leadership offsite",
        body: "Day 1 outbound morning + facilitated debrief. Day 2 leadership work + integration. Departure after lunch on Day 3.",
      },
      {
        title: "Newly-merged team retreat",
        body: "Two nights with deliberately cross-team activity design. Triggertronics on Day 1 to surface coordination patterns, structured debrief, and integration on Day 2 mapped to real work situations.",
      },
      {
        title: "Coffee-estate experience day",
        body: "For senior leadership groups. Plantation walk, bean-processing experience, structured leadership conversation in the evening.",
      },
    ],
    venues: [
      "Taj Madikeri",
      "Vivanta Coorg",
      "Evolve Back Coorg",
      "Tata Plantation Trails",
      "Heritage Coffee estate properties",
      "Club Mahindra Madikeri",
    ],
    bestTime:
      "October–March is peak — clear weather, comfortable temperatures. April–May warmer but still workable. Monsoon (June–September) is genuinely beautiful but with weather-risk for outdoor formats — design with strong indoor backups.",
    groupSizes: "20 to 250. Most common 40–120.",
    nearby: [
      { label: "Bangalore", href: "/destinations/bangalore" },
      { label: "Chikmagalur", href: "/destinations/chikmagalur" },
      { label: "Mysore", href: "/destinations/mysore" },
      { label: "Wayanad", href: "/destinations/wayanad" },
    ],
    faqs: [
      {
        q: "How long is the drive from Bangalore to Coorg?",
        a: "About 250 km, 5 hours including a meal stop. Most teams depart Bangalore at 7 am and reach Coorg by midday. Friday departures need traffic-aware scheduling.",
      },
      {
        q: "Best Coorg properties for a 100-person leadership program?",
        a: "Vivanta Coorg, Tata Plantation Trails Heritage Bungalows, and Club Mahindra Madikeri are the strongest choices at this scale — each is corporate-vetted for activity space and catering capacity at 100+.",
      },
      {
        q: "Can monsoon programs run successfully in Coorg?",
        a: "Yes — Coorg monsoon is genuinely spectacular. We design with strong indoor backups (Mafia Wars, Cook It Up) and time outdoor blocks around weather windows.",
      },
      {
        q: "What's the right group size for a Coorg program?",
        a: "40–120 is the sweet spot. Below 20 the venue's scale feels under-utilised; above 200 you start hitting capacity ceilings and need careful property selection.",
      },
    ],
  },
  {
    slug: "chikmagalur",
    name: "Chikmagalur",
    category: "getaway",
    state: "Karnataka",
    tagline: "Hill-plantation programs for serious leadership work.",
    visual: "COFFEE_PLANTATION",
    intro: [
      "Chikmagalur sits a little further from Bangalore than Coorg and feels meaningfully different — taller hills, more isolated properties, and a quieter pace. For leadership groups working on something genuinely difficult, the additional remoteness is part of the design.",
      "What works in Chikmagalur is the combination of plantation infrastructure with proper hill-altitude — programs here tend to feel more deliberate than Coorg's, in a useful way.",
    ],
    whyItWorks: [
      "Higher altitude than Coorg — cooler, sharper, more contemplative",
      "Mature plantation properties — Trivik, Java Rain, The Serai",
      "Less corporate footfall than Coorg — feels less like a default choice",
      "Strong fit for senior leadership cohorts requiring isolation",
    ],
    formats: [
      { name: "Outbound", note: "Plantation-based outbound formats for senior leadership work" },
      { name: "Outdoor", note: "Estate walks, hill-trail integrations" },
      { name: "Indoor", note: "Property meeting-rooms for structured leadership facilitation" },
    ],
    programIdeas: [
      {
        title: "Senior leadership three-day cohort",
        body: "Three nights for senior leadership groups working on strategic alignment or culture. Deliberate slowness, longer integration sessions, less program density.",
      },
      {
        title: "Two-night leadership offsite",
        body: "Outbound morning Day 1, leadership facilitation Day 2, integration on the final morning. Particular fit for groups of 30–80.",
      },
    ],
    venues: [
      "The Serai Chikmagalur",
      "Java Rain Resort",
      "Trivik Hotels & Resorts",
      "Coffee Grove",
      "Old Magazine House",
    ],
    bestTime:
      "October–March is peak. April–May warmer. Monsoon (June–September) genuinely beautiful but with weather-risk.",
    groupSizes: "15 to 150.",
    nearby: [
      { label: "Bangalore", href: "/destinations/bangalore" },
      { label: "Coorg", href: "/destinations/coorg" },
      { label: "Mysore", href: "/destinations/mysore" },
    ],
    faqs: [
      {
        q: "Coorg vs Chikmagalur — how do you choose?",
        a: "Coorg has more property variety and is the easier default. Chikmagalur is sharper, more remote, and tends to suit senior leadership cohorts working on something they want quiet space for. For a 200-person annual offsite, Coorg. For a 40-person C-suite alignment, Chikmagalur is often the better choice.",
      },
      {
        q: "How long is the drive from Bangalore?",
        a: "About 245 km, 5–6 hours. The last hour winds through hills.",
      },
    ],
  },
  {
    slug: "kabini",
    name: "Kabini",
    category: "getaway",
    state: "Karnataka",
    tagline: "Forest-edge retreats for senior leadership cohorts.",
    visual: "FOREST_WILDLIFE",
    intro: [
      "Kabini is one of the most distinctive corporate offsite destinations in southern India — forest-edge resorts on the boundary of the Nagarhole tiger reserve, with a quietness that recalibrates pace within hours of arrival.",
      "What works in Kabini is the deliberate isolation. Programs here are best designed around senior leadership groups working on strategy, culture, or genuine candour — less for high-energy team-building.",
    ],
    whyItWorks: [
      "Forest-edge isolation — phones often don't work, deliberately",
      "Boutique resort inventory — Orange County Kabini, Evolve Back, Bison",
      "Five-hour drive from Bangalore — practical for two- and three-night formats",
      "Distinctive setting that recalibrates senior-team pace and conversation",
    ],
    formats: [
      { name: "Outbound", note: "Limited but powerful — small-group outbound formats" },
      { name: "Outdoor", note: "Boat safaris, jungle walks, structured nature programs" },
      { name: "Indoor", note: "Resort meeting-rooms for leadership facilitation and integration" },
    ],
    programIdeas: [
      {
        title: "C-suite three-night strategy offsite",
        body: "Senior leadership group, 12–25 people. Strategic alignment work, structured leadership conversations, deliberate downtime that produces unusual creative thinking.",
      },
      {
        title: "Leadership cohort two-night retreat",
        body: "Senior leadership 25–50 people. Day 1 facilitated arrival + outbound. Day 2 leadership work + structured downtime. Day 3 integration.",
      },
    ],
    venues: [
      "Orange County Kabini",
      "Evolve Back Kabini",
      "Bison Kabini Resort",
      "The Serai Kabini",
    ],
    bestTime:
      "October–April is peak. April–May warmer. Monsoon (June–September) the park is closed for safaris but resort programs run.",
    groupSizes: "12 to 80. Best for 20–50.",
    nearby: [
      { label: "Bangalore", href: "/destinations/bangalore" },
      { label: "Mysore", href: "/destinations/mysore" },
      { label: "Wayanad", href: "/destinations/wayanad" },
      { label: "Coorg", href: "/destinations/coorg" },
    ],
    faqs: [
      {
        q: "What makes Kabini distinct from Coorg?",
        a: "Forest-edge isolation, boutique scale, and a structurally-enforced slowness. Coorg can host 200; Kabini is best for 20–50 senior leadership groups.",
      },
      {
        q: "What's the typical program shape in Kabini?",
        a: "Less program density. Longer integration sessions. More deliberate downtime. The setting itself is doing meaningful work — packing the schedule undermines what makes Kabini valuable.",
      },
    ],
  },
  {
    slug: "wayanad",
    name: "Wayanad",
    category: "getaway",
    state: "Kerala",
    tagline: "Plantation and forest retreats for South Indian teams.",
    visual: "COFFEE_PLANTATION",
    intro: [
      "Wayanad sits high in Kerala's Western Ghats — coffee, cardamom and pepper plantations, forest retreats, and a culture distinctly different from coastal Kerala. For Bangalore and Kochi-based teams, it's a genuinely good two-night option.",
      "What works in Wayanad is the combination of plantation experience with proper hill quietness — programs here tend to be more contemplative than Coorg, with less of the corporate-default feel.",
    ],
    whyItWorks: [
      "Plantation + forest setting — distinctive enough to feel intentional",
      "Strong fit for Bangalore (270 km) and Kochi (260 km) teams",
      "Boutique to mid-tier property inventory at multiple price points",
      "Cultural integration possibilities — Wayanad's tribal heritage and Kerala identity",
    ],
    formats: [
      { name: "Outbound", note: "Plantation-based outbound for senior leadership cohorts" },
      { name: "Outdoor", note: "Estate walks, Edakkal Caves visits, structured nature programs" },
      { name: "Indoor", note: "Property meeting-rooms for leadership facilitation" },
    ],
    programIdeas: [
      {
        title: "Two-night cross-functional cohort",
        body: "Plantation property setting. Outbound morning Day 1, leadership facilitation Day 2, integration on Day 3 morning.",
      },
      {
        title: "Senior leadership retreat at Vythiri",
        body: "Forest setting, boutique scale. 20–40 senior leaders, three nights, structured strategic alignment work.",
      },
    ],
    venues: [
      "Vythiri Resort",
      "Banasura Hill Resort",
      "Wayanad Wild",
      "The Windflower Resort",
      "Niraamaya Cardamom Club",
    ],
    bestTime:
      "October–March is peak. April–May warmer. Monsoon (June–September) is genuinely lush but weather-risk for outdoor.",
    groupSizes: "15 to 150.",
    nearby: [
      { label: "Bangalore", href: "/destinations/bangalore" },
      { label: "Kochi", href: "/destinations/kochi" },
      { label: "Coorg", href: "/destinations/coorg" },
      { label: "Munnar", href: "/destinations/munnar" },
    ],
    faqs: [
      {
        q: "Wayanad vs Coorg for a Bangalore team?",
        a: "Coorg is closer (250 km) and has more property variety. Wayanad is a slightly longer drive but feels less default. For a senior leadership group wanting somewhere less obvious, Wayanad is a strong choice.",
      },
      {
        q: "How long is the drive from Bangalore?",
        a: "About 270 km, 6 hours. Easier as a two- or three-night format than as a single overnight.",
      },
    ],
  },
  {
    slug: "munnar",
    name: "Munnar",
    category: "getaway",
    state: "Kerala",
    tagline: "Tea-estate retreats in Kerala's high country.",
    visual: "TEA_ESTATE",
    intro: [
      "Munnar's tea-estate landscape is one of the most distinctive corporate-event settings in India — endless rolling green, working plantations, and the kind of silence that produces unusual conversation quality.",
      "Programs here are usually two- or three-night formats designed around senior leadership work or significant cross-functional alignment. The setting deliberately slows the program down.",
    ],
    whyItWorks: [
      "Tea-estate setting that feels genuinely different from urban offsite venues",
      "Strong property inventory across price points — Tata, Niraamaya, Club Mahindra",
      "Practical access from Kochi (130 km) and Coimbatore (170 km)",
      "Distinctive cultural and culinary integration opportunities",
    ],
    formats: [
      { name: "Outbound", note: "Tea-estate based outbound for senior leadership work" },
      { name: "Outdoor", note: "Estate walks, structured nature programs, plantation experiences" },
      { name: "Indoor", note: "Property meeting-rooms for leadership facilitation" },
    ],
    programIdeas: [
      {
        title: "Two-night leadership offsite",
        body: "Property-based setup. Day 1 outbound + facilitated debrief. Day 2 leadership work + structured downtime. Day 3 integration and departure after lunch.",
      },
      {
        title: "Three-night strategy retreat",
        body: "Senior leadership 20–40 people. Less program density, longer reflection sessions, more structured downtime.",
      },
    ],
    venues: [
      "Tata Tea Bungalows",
      "Niraamaya Wellness Retreats",
      "The Tall Trees",
      "Club Mahindra Munnar",
      "Windermere Estate",
    ],
    bestTime:
      "October–March is peak. April–May warmer. Monsoon (June–September) is genuinely spectacular but with weather-risk.",
    groupSizes: "15 to 120.",
    nearby: [
      { label: "Kochi", href: "/destinations/kochi" },
      { label: "Coimbatore", href: "/destinations/coimbatore" },
      { label: "Wayanad", href: "/destinations/wayanad" },
      { label: "Ooty", href: "/destinations/ooty" },
    ],
    faqs: [
      {
        q: "Munnar vs Wayanad for a Kochi team?",
        a: "Munnar is closer (130 km) and has slightly more property variety at the premium tier. Wayanad is more forest-feeling. For a tea-estate-led program, Munnar. For something more wild and forest-edged, Wayanad.",
      },
      {
        q: "How long is the drive from Kochi?",
        a: "130 km, about 4 hours. Practical as a two- or three-night format.",
      },
    ],
  },
  {
    slug: "goa",
    name: "Goa",
    category: "getaway",
    state: "Goa",
    tagline: "Beach offsites and annual day flagships.",
    visual: "BEACH_PALMS",
    intro: [
      "Goa is the country's most-booked annual-day and weekend-offsite destination. The combination of mature property inventory, direct flights from every metro, and the genuine appeal of beach geography makes it the easy default for large group programs.",
      "What works in Goa is shaped by which Goa you're planning for — North Goa is high-energy and works well for younger teams; South Goa is calmer and consistently a stronger choice for leadership programs.",
    ],
    whyItWorks: [
      "Direct flight access from every metro",
      "Mature property inventory — premium, mid-tier, boutique",
      "Beach-led outdoor formats with reliable infrastructure",
      "Strong fit for both annual day flagships and serious leadership work",
    ],
    formats: [
      { name: "Outdoor", note: "Beach-based formats — Sports Olympics, Cardboard Boat Racing, Jumbo Volleyball" },
      { name: "Outbound", note: "Senior leadership programs at South Goa boutique properties" },
      { name: "Indoor", note: "Hotel ballrooms for monsoon-season formats and recognition programs" },
    ],
    programIdeas: [
      {
        title: "Annual day flagship at North Goa",
        body: "Two- or three-night format. Beach-based outdoor activity day, structured recognition programs, evening cultural and DJ nights.",
      },
      {
        title: "Senior leadership cohort at South Goa",
        body: "Boutique property setting. Two-night format with structured leadership facilitation and deliberate downtime.",
      },
      {
        title: "Cross-functional weekend retreat",
        body: "Two nights. Day 1 beach-based outdoor + integration. Day 2 outbound + facilitated debrief. Day 3 morning integration.",
      },
    ],
    venues: [
      "Taj Fort Aguada",
      "W Goa",
      "Park Hyatt Goa",
      "Alila Diwa",
      "Grand Hyatt Bambolim",
      "The Leela Goa",
    ],
    bestTime:
      "November–February is peak. October and March are excellent. April–May is hot but workable indoors. Monsoon (June–September) is heavy but visually spectacular and many programs run successfully.",
    groupSizes: "30 to 800. Common bracket 80–300.",
    nearby: [
      { label: "Mumbai", href: "/destinations/mumbai" },
      { label: "Pune", href: "/destinations/pune" },
      { label: "Bangalore", href: "/destinations/bangalore" },
    ],
    faqs: [
      {
        q: "North Goa vs South Goa — which works better?",
        a: "North Goa is energetic, more crowded, and works well for younger teams or annual-day energy. South Goa is calmer and consistently a stronger choice for leadership work or programs requiring focus.",
      },
      {
        q: "Best Goa properties for a 250-person annual day?",
        a: "Grand Hyatt Bambolim, The Leela Goa, Taj Fort Aguada — each has the inventory and infrastructure for 250+ programs without quality drop.",
      },
      {
        q: "Can monsoon programs run in Goa?",
        a: "Yes — and many do. We design with strong indoor backups and weather-appropriate beach formats. Monsoon Goa is also significantly cheaper, which can be useful for budget-conscious programs.",
      },
      {
        q: "How far in advance should we book for peak season?",
        a: "12–14 weeks for November through February. Long weekends and Christmas/New Year periods need 16–20 weeks ahead.",
      },
    ],
  },
  {
    slug: "lonavala",
    name: "Lonavala",
    category: "getaway",
    state: "Maharashtra",
    tagline: "Western Ghats getaways for Mumbai and Pune teams.",
    visual: "GREEN_HILLS",
    intro: [
      "Lonavala is the default day-out and overnight destination for Mumbai and Pune corporate teams — close enough for half-day programs, beautiful enough for two-night offsites, and infrastructured for corporate-grade catering and activity space.",
      "What works in Lonavala is shaped by season — winter clarity, monsoon green, summer escape from coastal heat. Each produces a meaningfully different program experience.",
    ],
    whyItWorks: [
      "60 km from Pune, 90 km from Mumbai — practical for day formats",
      "Mature property inventory — Della, Aamby Valley, Fariyas, Renaissance",
      "Year-round access with format-appropriate adjustments",
      "Strong outdoor activity infrastructure for half-day and day programs",
    ],
    formats: [
      { name: "Outdoor", note: "Resort-based outdoor formats for Mumbai and Pune day-out programs" },
      { name: "Outbound", note: "Adventure-camp programs at Karjat (45 km) — leadership development cohorts" },
      { name: "Indoor", note: "Hotel ballrooms for monsoon programs and post-outdoor integration" },
    ],
    programIdeas: [
      {
        title: "Mumbai team day-out",
        body: "Hour-and-a-half transfer. Day program with outdoor activity block, lunch, facilitated debrief — back in Mumbai by evening.",
      },
      {
        title: "Pune leadership overnight",
        body: "Single-night format at a corporate-grade resort. Outbound morning + leadership facilitation + integration over dinner.",
      },
      {
        title: "Annual day at Della Resorts",
        body: "Two-night format. Day 1 arrival and outdoor activity block. Day 2 program + recognition. Day 3 morning integration and departure.",
      },
    ],
    venues: [
      "Della Resorts",
      "Aamby Valley",
      "Fariyas Resort",
      "Renaissance Lonavala",
      "Hilton Shillim",
      "Della Adventure Park",
    ],
    bestTime:
      "October–February is peak. March is comfortable. April–May warm but cooler than Mumbai. Monsoon (June–September) is genuinely spectacular and many programs go specifically for it.",
    groupSizes: "30 to 500.",
    nearby: [
      { label: "Mumbai", href: "/destinations/mumbai" },
      { label: "Pune", href: "/destinations/pune" },
      { label: "Mahabaleshwar", href: "/destinations/mahabaleshwar" },
    ],
    faqs: [
      {
        q: "How long is the drive from Mumbai to Lonavala?",
        a: "90 km via the Mumbai-Pune Expressway — about 2 hours including a tea stop. Friday returns need traffic-aware scheduling.",
      },
      {
        q: "Can we run a half-day Lonavala program?",
        a: "Yes — for Mumbai teams. Departure 8 am, program 10:30 am – 2 pm, return by evening. Tight but workable.",
      },
      {
        q: "Best Lonavala property for a 200-person program?",
        a: "Della Resorts and Aamby Valley both have the inventory and corporate-grade infrastructure for 200+ programs with parallel activity streams.",
      },
    ],
  },
  {
    slug: "mahabaleshwar",
    name: "Mahabaleshwar",
    category: "getaway",
    state: "Maharashtra",
    tagline: "Hill-station retreats and strawberry-season offsites.",
    visual: "GREEN_HILLS",
    intro: [
      "Mahabaleshwar sits at higher altitude than Lonavala and feels meaningfully different — strawberry plantations, hill walks, and a slower pace that suits leadership work better than annual-day energy.",
      "Programs here tend to be two-night formats designed around senior leadership cohorts or cross-functional alignment retreats. Strawberry-season programs (December–March) are particularly popular.",
    ],
    whyItWorks: [
      "Higher altitude, sharper feel than Lonavala",
      "Strong property inventory — Le Meridien, Evershine, Brightland",
      "Strawberry-season programs are a distinctive winter offering",
      "110 km from Pune, 250 km from Mumbai — best as two-night format",
    ],
    formats: [
      { name: "Outbound", note: "Hill-property outbound for senior leadership cohorts" },
      { name: "Outdoor", note: "Strawberry-estate walks, viewpoint integrations" },
      { name: "Indoor", note: "Property meeting-rooms for leadership facilitation" },
    ],
    programIdeas: [
      {
        title: "Strawberry-season leadership offsite",
        body: "December–March. Two-night format with strawberry-estate walks integrated into structured leadership facilitation.",
      },
      {
        title: "Cross-functional alignment retreat",
        body: "Two nights. Day 1 outbound + facilitated debrief. Day 2 alignment work + structured downtime. Day 3 integration.",
      },
    ],
    venues: [
      "Le Meridien Mahabaleshwar",
      "Evershine Resorts",
      "Brightland Hotel",
      "Treebo and boutique properties",
    ],
    bestTime:
      "November–March is peak — strawberry season is December–March. April–May warmer. Monsoon (June–September) is genuinely beautiful but with weather-risk for outdoor.",
    groupSizes: "20 to 200.",
    nearby: [
      { label: "Pune", href: "/destinations/pune" },
      { label: "Mumbai", href: "/destinations/mumbai" },
      { label: "Lonavala", href: "/destinations/lonavala" },
    ],
    faqs: [
      {
        q: "Mahabaleshwar vs Lonavala for a Pune leadership team?",
        a: "Lonavala is closer and works for day or single-overnight. Mahabaleshwar's higher altitude and slower pace suits two-night leadership work better. The strawberry-season experience is distinctive.",
      },
      {
        q: "How long is the drive from Mumbai to Mahabaleshwar?",
        a: "About 250 km, 5–6 hours. Best designed as a two- or three-night program rather than a single overnight.",
      },
    ],
  },
  {
    slug: "nandi-hills",
    name: "Nandi Hills",
    category: "getaway",
    state: "Karnataka",
    tagline: "Bangalore's go-to half-day and day-out destination.",
    visual: "GREEN_HILLS",
    intro: [
      "Nandi Hills is Bangalore's nearest viable hill destination — 60 km from the city, an hour's drive (less in pre-traffic morning hours), and just enough altitude to feel like a real change of scenery.",
      "Programs here are usually half-day or day formats designed for Bangalore-based teams who want a real change of context without the time commitment of Coorg or Chikmagalur.",
    ],
    whyItWorks: [
      "60 km from Bangalore — practical for half-day and day formats",
      "Resort-grade properties at Nandi base and Devanahalli",
      "Genuine altitude change from Bangalore — feels like an offsite",
      "Year-round accessibility with monsoon adjustments",
    ],
    formats: [
      { name: "Outdoor", note: "Resort-based outdoor formats for Bangalore day-out programs" },
      { name: "Outbound", note: "Compressed outbound formats for half-day leadership programs" },
      { name: "Indoor", note: "Property meeting-rooms for short-format integration" },
    ],
    programIdeas: [
      {
        title: "Bangalore engineering team day-out",
        body: "Hour-long transfer. Day program with outdoor activity block, lunch, facilitated debrief — back in Bangalore by evening.",
      },
      {
        title: "Half-day leadership program",
        body: "Departure 8 am, program 10:30 – 2 pm, return by evening peak. Tight but workable for compressed schedules.",
      },
      {
        title: "Annual celebration at a Devanahalli resort",
        body: "Day or single-overnight format. Outdoor activity block, evening cultural program, structured recognition.",
      },
    ],
    venues: [
      "Discovery Village",
      "Clarks Exotica",
      "Angsana Oasis",
      "Garden Asia",
      "Stone Hill International",
    ],
    bestTime:
      "October–March is peak. April–May warmer but workable in early morning. Monsoon (June–September) is moderate.",
    groupSizes: "20 to 250.",
    nearby: [
      { label: "Bangalore", href: "/destinations/bangalore" },
      { label: "Mysore", href: "/destinations/mysore" },
      { label: "Coorg", href: "/destinations/coorg" },
    ],
    faqs: [
      {
        q: "Nandi Hills vs Coorg for a Bangalore team day-out?",
        a: "Nandi for half-day or single-day formats. Coorg for two-night leadership work. They serve different program needs — not one better than the other.",
      },
      {
        q: "Best property for a 100-person day program?",
        a: "Discovery Village, Clarks Exotica and Angsana Oasis are corporate-vetted at this scale.",
      },
    ],
  },
  {
    slug: "mysore",
    name: "Mysore",
    category: "getaway",
    state: "Karnataka",
    tagline: "Heritage-led overnight programs from Bangalore.",
    visual: "HERITAGE_PALACE",
    intro: [
      "Mysore sits at a comfortable distance from Bangalore (140 km, 3 hours) and has matured as a single-overnight corporate destination — heritage palaces, premium properties, and a corporate-friendly pace.",
      "Programs here are typically single-overnight formats designed around teams that want a meaningful change of context without the two-night commitment of Coorg or Chikmagalur.",
    ],
    whyItWorks: [
      "140 km from Bangalore — practical for single-overnight formats",
      "Heritage-palace properties — Lalit Mahal, Radisson Blu Plaza",
      "Distinctive cultural integration possibilities",
      "Strong corporate-grade catering and activity infrastructure",
    ],
    formats: [
      { name: "Outdoor", note: "Resort-based outdoor formats for day or overnight programs" },
      { name: "Outbound", note: "Compressed leadership formats" },
      { name: "Indoor", note: "Heritage-palace ballrooms for distinctive program atmospheres" },
    ],
    programIdeas: [
      {
        title: "Single-overnight Bangalore team offsite",
        body: "Friday departure, full program Saturday, return Sunday afternoon. Outbound morning + leadership facilitation + cultural integration evening.",
      },
      {
        title: "Heritage-themed annual offsite at Lalit Mahal",
        body: "Two nights at the heritage palace. Cultural-themed program design with structured outbound and integration.",
      },
    ],
    venues: [
      "The Lalit Mahal Palace Hotel",
      "Radisson Blu Plaza",
      "Royal Orchid Metropole",
      "Country Club Mysore",
    ],
    bestTime:
      "October–March is peak — Mysore Dasara (October) is spectacular but inventory tightens. April–May warmer. Monsoon (June–September) moderate.",
    groupSizes: "30 to 250.",
    nearby: [
      { label: "Bangalore", href: "/destinations/bangalore" },
      { label: "Coorg", href: "/destinations/coorg" },
      { label: "Wayanad", href: "/destinations/wayanad" },
      { label: "Ooty", href: "/destinations/ooty" },
    ],
    faqs: [
      {
        q: "How long is the drive from Bangalore to Mysore?",
        a: "140 km, 3 hours via the Bangalore-Mysore Expressway. Practical for a single-overnight format.",
      },
      {
        q: "Best Mysore venue for a 150-person heritage-themed program?",
        a: "Lalit Mahal Palace Hotel — the heritage atmosphere is genuinely difficult to replicate elsewhere. Radisson Blu Plaza is the strongest non-heritage option.",
      },
    ],
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    category: "getaway",
    state: "Uttarakhand",
    tagline: "River-side outbound and leadership programs.",
    visual: "RIVER_HIMALAYA",
    intro: [
      "Rishikesh has been our most-booked outbound destination for Delhi NCR teams over the past decade — Ganga-side properties, river adventure infrastructure, and a setting that genuinely changes the conversation in a leadership cohort within hours.",
      "Programs here are typically two- or three-night formats with strong outbound focus. The combination of river adventure, structured outbound activities, and Rishikesh's distinctive cultural setting produces consistently strong leadership program outcomes.",
    ],
    whyItWorks: [
      "Ganga-side properties produce a meaningfully different program atmosphere",
      "River adventure infrastructure — rafting, camping, structured outbound",
      "240 km from Delhi — practical for two- and three-night formats",
      "Strong fit for Delhi NCR leadership development and cross-functional retreats",
    ],
    formats: [
      { name: "Outbound", note: "River-side outbound for senior leadership work — the format that defines Rishikesh programs" },
      { name: "Outdoor", note: "Rafting integrations, river-walks, structured nature programs" },
      { name: "Indoor", note: "Property meeting-rooms for leadership facilitation" },
    ],
    programIdeas: [
      {
        title: "Two-night NCR leadership offsite",
        body: "Day 1 arrival + outbound + facilitated debrief. Day 2 rafting morning + leadership facilitation. Day 3 integration and departure after lunch.",
      },
      {
        title: "Senior leadership three-night cohort",
        body: "More structured leadership work. Outbound day, rafting day, integration day. Particular fit for senior leadership groups working on culture or strategy.",
      },
      {
        title: "Cross-functional team retreat",
        body: "Two-night format. Day 1 outbound. Day 2 rafting + integration. Day 3 morning structured debrief.",
      },
    ],
    venues: [
      "Aloha on the Ganges",
      "The Ganges Kinare",
      "Atali Ganga",
      "Ananda in the Himalayas",
      "Camp riverside properties",
    ],
    bestTime:
      "October–March is peak. April–May warm but rafting is at its best. Monsoon (June–August) the river runs high — rafting suspended, but property programs run successfully.",
    groupSizes: "20 to 150.",
    nearby: [
      { label: "Delhi", href: "/destinations/delhi" },
      { label: "Gurgaon", href: "/destinations/gurgaon" },
      { label: "Manali", href: "/destinations/manali" },
    ],
    faqs: [
      {
        q: "Best Rishikesh property for a 60-person leadership program?",
        a: "Atali Ganga, Aloha on the Ganges, or Ganges Kinare — each is corporate-vetted for activity space and catering quality at this scale.",
      },
      {
        q: "Can we integrate rafting into a structured leadership program?",
        a: "Yes — and it works particularly well as a structured outbound element. The combination of physical challenge, real risk, and team coordination produces some of the most useful debrief material we see.",
      },
      {
        q: "How long is the drive from Delhi?",
        a: "240 km, 5–6 hours. Friday-morning departures work well. Best designed as two- or three-night programs.",
      },
    ],
  },
  {
    slug: "manali",
    name: "Manali",
    category: "getaway",
    state: "Himachal Pradesh",
    tagline: "Mountain offsites for Northern Indian leadership groups.",
    visual: "SNOW_MOUNTAINS",
    intro: [
      "Manali sits at higher altitude than Rishikesh and produces a distinctly different program atmosphere — mountain isolation, structured outdoor adventure infrastructure, and a setting that suits two- and three-night leadership cohorts particularly well.",
      "Programs here are typically more strategic in shape than Rishikesh — less raw outbound, more deliberate leadership work, longer reflection sessions.",
    ],
    whyItWorks: [
      "Mountain altitude produces a genuinely contemplative program atmosphere",
      "Strong property inventory across price points",
      "550 km from Delhi — best as three-night or longer format",
      "Distinctive seasonal programming — winter snow, summer alpine",
    ],
    formats: [
      { name: "Outbound", note: "Mountain-based outbound for senior leadership cohorts" },
      { name: "Outdoor", note: "Hiking, structured nature programs, snow programs in winter" },
      { name: "Indoor", note: "Property meeting-rooms for leadership facilitation" },
    ],
    programIdeas: [
      {
        title: "Three-night strategic leadership offsite",
        body: "Senior leadership 25–60 people. Outbound day, leadership facilitation day, strategic integration day. The altitude itself is doing meaningful work.",
      },
      {
        title: "Winter snow-program retreat",
        body: "Two- or three-night format with snow-based outbound and integration. December–February.",
      },
    ],
    venues: [
      "The Himalayan",
      "Span Resort and Spa",
      "Manuallaya",
      "Solang Valley resorts",
      "Boutique hill properties",
    ],
    bestTime:
      "May–October is peak. December–February is snow season (program design changes meaningfully). November and March are shoulder months.",
    groupSizes: "20 to 150.",
    nearby: [
      { label: "Delhi", href: "/destinations/delhi" },
      { label: "Chandigarh", href: "/destinations/chandigarh" },
      { label: "Rishikesh", href: "/destinations/rishikesh" },
    ],
    faqs: [
      {
        q: "Manali vs Rishikesh for a Delhi leadership team?",
        a: "Rishikesh is closer (240 km vs 550 km) and more practical for two-night formats. Manali's altitude and isolation suits three-night strategic work better. For raw outbound, Rishikesh. For deliberate strategic leadership cohorts, Manali.",
      },
      {
        q: "How long is the drive from Delhi?",
        a: "550 km, 12 hours by road. Most teams fly to Bhuntar (Kullu) and drive 50 km to Manali — 90-minute road segment. Total travel day is 4–5 hours.",
      },
    ],
  },
  {
    slug: "ooty",
    name: "Ooty",
    category: "getaway",
    state: "Tamil Nadu",
    tagline: "Nilgiri hill-station offsites for South Indian teams.",
    visual: "TEA_ESTATE",
    intro: [
      "Ooty is the largest of the Nilgiri hill stations and a long-standing favourite for Bangalore, Chennai and Coimbatore-based corporate teams. Cool weather, mature property inventory, and a distinctive colonial-hill-station feel.",
      "Programs here tend to be two-night formats designed around mid-size cohorts. Coonoor and Kotagiri (also part of the Nilgiri belt) are quieter alternatives often combined with Ooty programs.",
    ],
    whyItWorks: [
      "Cool weather year-round — escape from coastal heat",
      "Strong property inventory across price points",
      "Practical access from Coimbatore (90 km) and Bangalore (290 km)",
      "Distinctive colonial-hill-station setting",
    ],
    formats: [
      { name: "Outbound", note: "Hill-property outbound for leadership cohorts" },
      { name: "Outdoor", note: "Tea-estate walks, structured nature programs" },
      { name: "Indoor", note: "Property meeting-rooms for leadership facilitation" },
    ],
    programIdeas: [
      {
        title: "Two-night offsite at Sterling Ooty",
        body: "Mid-size leadership cohort. Day 1 outbound + facilitated debrief. Day 2 leadership facilitation + integration. Day 3 morning structured debrief.",
      },
      {
        title: "Coonoor boutique retreat",
        body: "Smaller senior leadership group at Kurumba Village or boutique tea-estate property. Three nights with deliberate slowness.",
      },
    ],
    venues: [
      "Sterling Ooty Elk Hill",
      "Taj Savoy Ooty",
      "Fortune Resort Sullivan Court",
      "Kurumba Village (Coonoor)",
      "Briar Tea Bungalows (Valparai)",
    ],
    bestTime:
      "Year-round. October–March is peak with cool dry weather. April–May warmer but still cool by South Indian standards. Monsoon (June–September) is moderate but visually spectacular.",
    groupSizes: "20 to 200.",
    nearby: [
      { label: "Bangalore", href: "/destinations/bangalore" },
      { label: "Chennai", href: "/destinations/chennai" },
      { label: "Coimbatore", href: "/destinations/coimbatore" },
      { label: "Munnar", href: "/destinations/munnar" },
    ],
    faqs: [
      {
        q: "Ooty vs Coonoor for a corporate program?",
        a: "Ooty has more property variety and is the easier default. Coonoor is quieter, more boutique, and suits smaller senior leadership groups better. For a 100-person program, Ooty. For a 30-person C-suite cohort, Coonoor.",
      },
      {
        q: "How long is the drive from Bangalore to Ooty?",
        a: "290 km, 6–7 hours. Best designed as a two- or three-night format. Some teams fly to Coimbatore and drive 90 km to Ooty (3 hours) — total travel of 4–5 hours.",
      },
    ],
  },
  {
    slug: "jaisalmer",
    name: "Jaisalmer",
    category: "getaway",
    state: "Rajasthan",
    tagline: "Desert programs for distinctive leadership offsites.",
    visual: "DESERT_DUNES",
    intro: [
      "Jaisalmer's desert geography produces one of the most distinctive corporate event experiences in India — fort-city heritage, dunes, night skies, and a structural slowness that suits senior leadership work particularly well.",
      "Programs here are typically two- or three-night formats designed around 20–60 senior leadership cohorts. The setting itself contributes meaningfully to program outcomes.",
    ],
    whyItWorks: [
      "Desert setting produces a genuinely distinctive program atmosphere",
      "Heritage-fort and dune-camp properties — Suryagarh, Serai, dune camps",
      "Best fit for senior leadership cohorts requiring isolation",
      "Direct flight access seasonally, otherwise drive from Jodhpur",
    ],
    formats: [
      { name: "Outbound", note: "Dune-based outbound and structured nature programs" },
      { name: "Outdoor", note: "Sunset rides, night-sky integrations, dune walks" },
      { name: "Indoor", note: "Heritage-fort meeting rooms for leadership facilitation" },
    ],
    programIdeas: [
      {
        title: "Senior leadership three-night strategic retreat",
        body: "Suryagarh or The Serai setting. Strategic alignment work, structured leadership conversations, deliberate downtime under desert skies.",
      },
      {
        title: "Two-night cross-functional cohort",
        body: "Heritage fort property. Day 1 outbound + dune integration. Day 2 leadership work + sunset integration. Day 3 morning departure.",
      },
    ],
    venues: [
      "Suryagarh Jaisalmer",
      "The Serai",
      "Rangsa Bagh",
      "Manvar Desert Camp (drivable)",
    ],
    bestTime:
      "November–February is peak — comfortable temperatures and clear skies. March is borderline. April–September is hot and not recommended.",
    groupSizes: "15 to 80.",
    nearby: [
      { label: "Jaipur", href: "/destinations/jaipur" },
      { label: "Delhi", href: "/destinations/delhi" },
    ],
    faqs: [
      {
        q: "What makes Jaisalmer distinct from Jaipur for a leadership offsite?",
        a: "Jaipur is heritage-led but urban-feeling. Jaisalmer is heritage-led and desert-isolated — far more contemplative. For senior leadership groups working on something genuinely difficult, Jaisalmer's isolation is part of the design.",
      },
      {
        q: "How do teams reach Jaisalmer?",
        a: "Seasonal direct flights to Jaisalmer, otherwise fly to Jodhpur and drive 290 km (5–6 hours). The drive itself is part of the experience for some programs.",
      },
      {
        q: "What's the right group size?",
        a: "20–60 typically. Beyond that, property inventory becomes constraining and the desert experience starts to lose its quietness.",
      },
    ],
  },
];

export const DESTINATIONS_BY_SLUG = Object.fromEntries(
  DESTINATIONS.map((d) => [d.slug, d]),
);

export const CATEGORY_LABELS: Record<DestCategory, string> = {
  metro: "Major metros",
  ncr: "NCR region",
  tier2: "Other cities",
  getaway: "Outing destinations",
};
