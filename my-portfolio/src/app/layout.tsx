// src/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ThemeProviders } from "./providers";
import { Paytone_One, Outfit } from "next/font/google";

const heading = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Domaine canonique (fixé)
const SITE_URL = "https://www.cyrildegraeve.dev";
const siteUrl = new URL(SITE_URL);

export const metadata: Metadata = {
  metadataBase: siteUrl,

  title: {
    default:
      "Cyril De Graeve — Développeur Full-Stack (React / Next.js / Node) à Paris",
    template: "%s | Cyril De Graeve",
  },

  description:
    "Développeur full-stack freelance à Paris. React, Next.js (App Router), Node, Stripe, SEO/performance, déploiements VPS. Je conçois des produits web robustes, rapides et propres.",

  applicationName: "Cyril De Graeve — Portfolio",
  authors: [{ name: "Cyril De Graeve", url: SITE_URL }],
  creator: "Cyril De Graeve",
  publisher: "Cyril De Graeve",

  // ⚠️ Eviter canonical ici si on a /fr et /en.
  // Laisser plutôt la route locale décider.
  alternates: {
    languages: {
      fr: "/fr",
      en: "/en",
    },
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

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Cyril De Graeve",
    title:
      "Cyril De Graeve — Développeur Full-Stack (React / Next.js / Node) à Paris",
    description:
      "Développeur full-stack freelance : React/Next.js, Node, Stripe, SEO/perf, déploiements VPS.",
    locale: "fr_FR",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Cyril De Graeve — Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cyril De Graeve — Portfolio",
    description:
      "Développeur full-stack freelance : React/Next.js, Node, Stripe, SEO/perf, déploiements VPS.",
    images: ["/og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  keywords: [
    "Cyril De Graeve",
    "développeur freelance",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Stripe",
    "SEO",
    "performance web",
    "VPS",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${heading.variable} ${body.variable}`}
    >
      <body>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
