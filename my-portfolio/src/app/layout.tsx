// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Cyril — Portfolio",
  description: "Portfolio grand public (fun, animé, coloré)",
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
