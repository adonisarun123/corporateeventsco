import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://corporateeventsindia.com"),
  title: {
    default:
      "Corporate Events India | Team Building, Offsites & Outings in India",
    template: "%s | Corporate Events India",
  },
  description:
    "India's outcome-led corporate events company. Team building, offsites, leadership training, and curated outings across 30+ cities. 550+ companies. Custom proposals in 24 hours.",
  keywords: [
    "corporate events India",
    "corporate team building",
    "corporate outings India",
    "team building activities Bangalore",
    "corporate offsite venues India",
    "leadership offsite India",
    "outbound training India",
    "campus to corporate program",
    "virtual team building India",
    "corporate event management Bangalore",
  ],
  alternates: {
    canonical: "https://corporateeventsindia.com",
  },
  openGraph: {
    type: "website",
    siteName: "Corporate Events India",
    locale: "en_IN",
    url: "https://corporateeventsindia.com",
    title:
      "Corporate Events India | Team Building, Offsites & Outings in India",
    description:
      "India's outcome-led corporate events company. 550+ companies. Proposals in 24 hours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Events India",
    description:
      "Team building, offsites and leadership programs that change how teams work.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "Corporate Events India" }],
  category: "Corporate Event Management",
};

/** Organization-level JSON-LD — appears on every page so search engines
 * have a stable identity for the brand. */
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Corporate Events India",
  url: "https://corporateeventsindia.com",
  logo: "https://corporateeventsindia.com/icon.svg",
  description:
    "India's outcome-led corporate events company. Team building, offsites, leadership training and curated outings across 30+ cities.",
  foundingDate: "2013",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-99860-58666",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/corporate-events-india",
    "https://www.instagram.com/corporateeventsindia",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Karnataka",
    addressLocality: "Bangalore",
  },
};

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://corporateeventsindia.com/#business",
  name: "Corporate Events India",
  image: "https://corporateeventsindia.com/icon.svg",
  url: "https://corporateeventsindia.com",
  telephone: "+91-99860-58666",
  priceRange: "₹₹ – ₹₹₹₹",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Karnataka",
    addressLocality: "Bangalore",
  },
  areaServed: [
    "Bangalore",
    "Delhi",
    "Mumbai",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
    "Gurgaon",
    "Noida",
    "Goa",
    "Coorg",
    "Rishikesh",
    "Jaipur",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "550",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch + preconnect to Unsplash CDN for faster image hydration */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap"
        />

        {/* Structured data — Organization + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_JSONLD),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
