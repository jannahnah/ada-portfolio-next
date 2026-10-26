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

const siteUrl = "https://ada-portfolio-next.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jannah Loraine L. Ada — BSIT Student & IT Intern",
    template: "%s · Jannah Loraine L. Ada",
  },
  description:
    "Portfolio of Jannah Loraine L. Ada, a BSIT student seeking an IT OJT opportunity. Explore web development projects, technical skills, and professional experience.",
  keywords: [
    "BSIT Student",
    "IT OJT",
    "IT Intern",
    "Web Development",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Jannah Loraine Ada",
    "Butuan City",
  ],
  authors: [{ name: "Jannah Loraine L. Ada" }],
  creator: "Jannah Loraine L. Ada",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Jannah Loraine L. Ada — BSIT Student & IT Intern",
    description:
      "BSIT student portfolio showcasing web development projects, capstone work, technical skills, and experience.",
    siteName: "Jannah Loraine L. Ada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jannah Loraine L. Ada — BSIT Student & IT Intern",
    description:
      "Web development projects, technical skills, and practical experience from a BSIT student seeking OJT.",
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
    jobTitle: "BSIT Student / Aspiring IT Intern",
    email: "mailto:jannahsnow13@gmail.com",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Butuan City",
      addressCountry: "PH",
    },
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "System Documentation",
      "Administrative Support",
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
