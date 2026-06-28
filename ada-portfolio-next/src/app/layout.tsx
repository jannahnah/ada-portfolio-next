import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "jannah/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const siteUrl = "https://ada-portfolio-tau.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jannah Loraine L. Ada — Executive & Virtual Assistant",
    template: "%s · Jannah Loraine L. Ada",
  },
  description:
    "Executive Assistant and Virtual Assistant helping executives, teams, and organizations stay organized through reliable administrative support, scheduling, documentation, and workflow management.",
  keywords: [
    "Executive Assistant",
    "Virtual Assistant",
    "Administrative Support",
    "Calendar Management",
    "Email Management",
    "Remote Assistant",
    "Jannah Loraine Ada",
  ],
  authors: [{ name: "Jannah Loraine L. Ada" }],
  creator: "Jannah Loraine L. Ada",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Jannah Loraine L. Ada — Executive & Virtual Assistant",
    description:
      "Reliable administrative support, scheduling, documentation, and workflow management for executives and teams.",
    siteName: "Jannah Loraine L. Ada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jannah Loraine L. Ada — Executive & Virtual Assistant",
    description:
      "Reliable administrative support, scheduling, documentation, and workflow management.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1626" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jannah Loraine L. Ada",
    jobTitle: "Executive Assistant / Virtual Assistant",
    email: "mailto:jannahsnow13@gmail.com",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Butuan City",
      addressCountry: "PH",
    },
    knowsAbout: [
      "Administrative Support",
      "Calendar Management",
      "Email Management",
      "Documentation",
      "Microsoft Office",
      "Google Workspace",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
