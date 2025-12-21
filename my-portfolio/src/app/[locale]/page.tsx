// src/app/[locale]/page.tsx
import { use } from "react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { SiteHeader } from "./_components/SiteHeader";
import { HardSkillsSection } from "./_components/sections/HardSkillsSection";
import { ProjectsSection } from "./_components/sections/ProjectsSection";
import { TestimonialsSection } from "./_components/sections/TestimonialsSection";
import { GameSection } from "./_components/sections/GameSection";
import { SoftSkillsSection } from "./_components/sections/SoftSkillsSection";
import { ContactSection } from "./_components/sections/ContactSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cyril — Portfolio",
    description:
      "Portfolio grand public (fun, animé, coloré). Développement Next/React, perf, SEO, production.",
    keywords: [
      "Cyril De Graeve",
      "Portfolio",
      "Développeur",
      "Next.js",
      "React",
      "Freelance",
      "JavaScript",
      "TypeScript",
    ],
    authors: [{ name: "Cyril De Graeve" }],
  };
}

export default function Page({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const year = new Date().getFullYear();

  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />

      <main className="container-page pt-28 pb-24 flex-1">
        <HardSkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <GameSection />
        <SoftSkillsSection />
        <ContactSection />
      </main>

      <footer className="border-t border-black/10 dark:border-white/10">
        <div className="container-page py-6 text-center text-sm sm:text-base text-ink/70 dark:text-paper/70">
          © {year} Cyril De Graeve · React / Next.js / Node · Paris
        </div>
      </footer>
    </div>
  );
}
