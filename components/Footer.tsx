import Link from "next/link";

const COL_SERVICES = [
  { href: "/services#team-outings", label: "Corporate Team Outings" },
  { href: "/services#team-building", label: "Team Building Activities" },
  { href: "/services#training", label: "Specialised Training" },
  { href: "/services#virtual", label: "Virtual Programs" },
  { href: "/services#stays", label: "Curated Venues" },
];

const COL_FORMATS = [
  { href: "/services#indoor", label: "Indoor" },
  { href: "/services#outdoor", label: "Outdoor" },
  { href: "/services#outbound", label: "Outbound" },
  { href: "/services#virtual", label: "Virtual" },
];

const COL_INSIGHTS = [
  { href: "/blog/why-corporate-events-fail", label: "Why corporate events fail" },
  { href: "/blog/indoor-outdoor-virtual-team-building", label: "Choosing a format" },
  { href: "/blog/corporate-outing-planning-timeline", label: "Outing planning timeline" },
  { href: "/blog/campus-to-corporate", label: "Campus to corporate" },
  { href: "/blog/outbound-leadership-training", label: "Outbound leadership" },
];

const COL_COMPANY = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
  { href: "/contact#large-groups", label: "Large group programs" },
  { href: "/contact#industries", label: "Industries we serve" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-line">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white font-display font-semibold text-lg">
                ce
              </span>
              <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
                Corporate Events India
              </span>
            </div>
            <p className="text-[15px] text-ink-muted max-w-sm leading-relaxed">
              We design and execute corporate events that actually change how teams work.
              13 years. 550+ companies. 82+ destinations. Proposals in 24 hours.
            </p>
            <div className="text-sm text-ink-muted space-y-1.5">
              <div>
                <span className="text-ink-muted">Phone</span>{" "}
                <a href="tel:+919986058666" className="text-ink font-medium hover:underline">
                  +91 99860 58666
                </a>
              </div>
              <div>
                <span className="text-ink-muted">Email</span>{" "}
                <a href="mailto:info@corporateeventsindia.com" className="text-ink font-medium hover:underline">
                  info@corporateeventsindia.com
                </a>
              </div>
              <div className="text-ink-muted">Mon–Sat · 9:30 am – 6:30 pm IST</div>
            </div>
          </div>

          <FooterCol title="Services" items={COL_SERVICES} />
          <FooterCol title="Formats" items={COL_FORMATS} />
          <FooterCol title="Insights" items={COL_INSIGHTS} />
          <FooterCol title="Company" items={COL_COMPANY} />
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-ink-muted">
          <div>© {new Date().getFullYear()} Corporate Events India. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>550+ companies</span>
            <span>·</span>
            <span>1.5L+ participants</span>
            <span>·</span>
            <span>4.9/5 average rating</span>
            <span>·</span>
            <span>82+ destinations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div className="lg:col-span-2">
      <h4 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="text-sm text-ink-muted hover:text-ink transition-colors">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
