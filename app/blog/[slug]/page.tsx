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
} from "@/components/ui";
import { BLOG_POSTS, type BlogBlock } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.hero }],
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const others = BLOG_POSTS.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <Section className="pb-0">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-semibold">
            <Link href="/blog" className="text-ink-muted hover:text-ink">
              Insights
            </Link>
            <span className="text-ink-muted">·</span>
            <span className="text-brand">{post.category}</span>
            <span className="text-ink-muted">·</span>
            <span className="text-ink-muted">{post.readingTime}</span>
          </div>
          <h1 className="mt-5 font-display text-display-lg sm:text-display-xl font-semibold tracking-tight text-ink">
            {post.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-muted leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </Section>

      {/* HERO IMAGE */}
      <Section className="pt-10">
        <div className="aspect-[16/8] overflow-hidden rounded-3xl shadow-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.hero} alt={post.title} className="h-full w-full object-cover" />
        </div>
      </Section>

      {/* BODY */}
      <Section className="pt-2">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-2">
            {/* On-page anchor: keeps the column structured like an article */}
            <div className="sticky top-28 hidden lg:block">
              <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
                Article
              </div>
              <div className="mt-3 text-[13px] text-ink leading-relaxed">
                Corporate Events India · {post.category}
              </div>
            </div>
          </div>
          <article className="lg:col-span-8 prose-article">
            {post.body.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </article>
          <aside className="lg:col-span-2">
            <div className="sticky top-28 rounded-2xl bg-cream border border-line p-5">
              <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
                On this page
              </div>
              <ul className="mt-3 space-y-2 text-[13px] text-ink">
                {post.body
                  .filter((b): b is { type: "h2"; text: string } => b.type === "h2")
                  .slice(0, 6)
                  .map((h, i) => (
                    <li key={i} className="leading-snug text-ink-muted">
                      {h.text}
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-cream">
        <SectionHeading eyebrow="FAQ" title="Common questions on this topic." />
        <div className="mt-10">
          <Faqs items={post.faqs} />
        </div>
      </Section>

      {/* RELATED */}
      <Section>
        <SectionHeading eyebrow="More from the library" title="Related reading." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
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
        title={post.cta.title}
        body={post.cta.body}
        primary={{ label: post.cta.primary, href: "/contact" }}
        secondary={post.cta.secondary ? { label: post.cta.secondary, href: "/services" } : undefined}
      />
    </>
  );
}

/* ---------- Block renderer ---------- */
function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <blockquote className="font-display text-xl sm:text-2xl !not-italic text-ink !border-brand">
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
}
