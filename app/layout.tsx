import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://corporateeventsindia.com"),
  title: {
    default: "Corporate Events India | Team Building & Outings",
    template: "%s | Corporate Events India",
  },
  description:
    "India's trusted corporate events company. Team building, off-sites, virtual programs, and training. 550+ companies. Proposals in 24 hours.",
  openGraph: {
    type: "website",
    siteName: "Corporate Events India",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts loaded via stylesheet links so the build works without
            network access at compile time. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap"
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
