import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Section,
  SectionHeading,
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
  const url = `https://corporateeventsindia.com/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      images: [{ url: post.hero, width: 1200, height: 630, alt: post.title }],
      type: "article",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.hero],
    },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const others = BLOG_POSTS.filter((p) => p.slug !== params.slug).slice(0, 3);

  /* JSON-LD: Article + FAQPage + BreadcrumbList */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: [post.hero],
    datePublished: "2025-01-01",
    dateModified: "2026-05-20",
    author: {
      "@type": "Organization",
      name: "Corporate Events India",
      url: "https://corporateeventsindia.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Corporate Events India",
      logo: {
        "@type": "ImageObject",
        url: "https://corporateeventsindia.com/icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://corporateeventsindia.com/blog/${post.slug}`,
    },
    articleSection: post.category,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://corporateeventsindia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://corporateeventsindia.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://corporateeventsindia.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* HERO */}
      <Section className="pb-0">
        <div className="max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-semibold"
          >
            <Link href="/blog" className="text-ink-muted hover:text-ink">
              Insights
            </Link>
            <span className="text-ink-muted">·</span>
            <span className="text-brand">{post.category}</span>
            <span className="text-ink-muted">·</span>
            <span className="text-ink-muted">{post.readingTime}</span>
          </nav>
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
          <img
            src={post.hero}
            alt={post.title}
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={1600}
            height={800}
          />
        </div>
      </Section>

      {/* BODY */}
      <Section className="pt-2">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-2">
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
        secondary={
          post.cta.secondary ? { label: post.cta.secondary, href: "/services" } : undefined
        }
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
