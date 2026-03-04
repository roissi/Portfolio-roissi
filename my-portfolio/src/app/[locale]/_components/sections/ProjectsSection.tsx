"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionTitle } from "../SectionTitle";

type Project = {
  id: string;
  titleKey: string;
  roleKey: string;
  descKey: string;
  resultKey?: string;
  tech: string[];
  images: string[];
  live?: string;
  github?: string;
};

export function ProjectsSection() {
  const t = useTranslations("Projects");
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      id: "kefir",
      titleKey: "items.kefir.title",
      roleKey: "items.kefir.role",
      descKey: "items.kefir.desc",
      resultKey: "items.kefir.result",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Fastify",
        "PostgreSQL",
        "Drizzle ORM",
        "Brevo",
      ],
      images: [
        "/projects/kefir1.jpg",
        "/projects/kefir2.png",
        "/projects/kefir3.png",
      ],
      live: "https://numerok-paris.fr/",
      github: "https://github.com/roissi",
    },
    {
      id: "jffourcade",
      titleKey: "items.jffourcade.title",
      roleKey: "items.jffourcade.role",
      descKey: "items.jffourcade.desc",
      resultKey: "items.jffourcade.result",
      tech: [
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind",
        "MySQL",
        "Drizzle",
        "Stripe",
        "Sharp",
      ],
      images: [
        "/projects/jffourcade1.png",
        "/projects/jffourcade2.jpg",
        "/projects/jffourcade3.jpg",
      ],
      github: "https://github.com/roissi",
    },
    {
      id: "genAIbooks",
      titleKey: "items.genAIbooks.title",
      roleKey: "items.genAIbooks.role",
      descKey: "items.genAIbooks.desc",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "OpenAI API",
        "shadcn/ui",
        "Tailwind",
        "OCR (Tesseract)",
        "OpenLibrary",
      ],
      images: [
        "/projects/genAI1.png",
        "/projects/genAI2.png",
        "/projects/genAI3.png",
      ],
      live: "https://assist.cyrildegraeve.dev/",
      github: "https://github.com/roissi",
    },
    {
      id: "lps",
      titleKey: "items.lps.title",
      roleKey: "items.lps.role",
      descKey: "items.lps.desc",
      resultKey: "items.lps.result",
      tech: ["Next.js", "TypeScript", "MySQL", "Drizzle", "Stripe", "Tailwind"],
      images: [
        "/projects/PLS1.png",
        "/projects/PLS2.png",
        "/projects/PLS3.png",
      ],
      live: "https://pierre-saunier.fr/",
      github: "https://github.com/roissi",
    },
    {
      id: "serious",
      titleKey: "items.serious.title",
      roleKey: "items.serious.role",
      descKey: "items.serious.desc",
      tech: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Tailwind",
        "Framer Motion",
      ],
      images: [
        "/projects/serious1.png",
        "/projects/serious2.png",
        "/projects/serious4.png",
      ],
      live: "https://www.serious-publishing.fr/",
      github: "https://github.com/roissi",
    },
    {
      id: "clairios",
      titleKey: "items.clairios.title",
      roleKey: "items.clairios.role",
      descKey: "items.clairios.desc",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "SEO",
        "Accessibilité",
        "DevOps",
      ],
      images: [
        "/projects/clairios1.png",
        "/projects/clairios3.png",
        "/projects/clairios2.png",
      ],
      live: "https://clairios.com/",
      github: "https://github.com/roissi",
    },
    {
      id: "sajinstudio",
      titleKey: "items.sajinstudio.title",
      roleKey: "items.sajinstudio.role",
      descKey: "items.sajinstudio.desc",
      tech: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "Auth",
        "Galerie",
        "Email",
        "DevOps",
      ],
      images: [
        "/projects/sajin1.png",
        "/projects/sajin2.png",
        "/projects/sajin3.png",
      ],
      live: "https://studiosajin.eu/",
      github: "https://github.com/roissi",
    },
    {
      id: "codeberry",
      titleKey: "items.codeberry.title",
      roleKey: "items.codeberry.role",
      descKey: "items.codeberry.desc",
      tech: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Drizzle",
        "Server Actions",
        "Jira API",
        "Vercel",
      ],
      images: [
        "/projects/codeberry2.png",
        "/projects/codeberry3.png",
        "/projects/codeberry1.png",
      ],
      github: "https://github.com/roissi",
    },
    {
      id: "artificiallifecoach",
      titleKey: "items.artificiallifecoach.title",
      roleKey: "items.artificiallifecoach.role",
      descKey: "items.artificiallifecoach.desc",
      tech: [
        "Next.js",
        "Node.js",
        "Express",
        "PostgreSQL",
        "OpenAI API",
        "JWT",
        "UX",
      ],
      images: [
        "/projects/ALC1.png",
        "/projects/ALC3.png",
        "/projects/ALC2.png",
      ],
      live: "https://artificial-life-coach.vercel.app/",
      github: "https://github.com/roissi/ALC_client",
    },
    {
      id: "telegraphe",
      titleKey: "items.telegraphe.title",
      roleKey: "items.telegraphe.role",
      descKey: "items.telegraphe.desc",
      tech: [
        "Next.js",
        "Node.js",
        "Auth",
        "Avis",
        "Google Maps API",
        "Supabase",
      ],
      images: [
        "/projects/telegraphe1.png",
        "/projects/telegraphe2.png",
        "/projects/telegraphe3.png",
      ],
      live: "https://neo-telegraphe.vercel.app/",
      github: "https://github.com/roissi/Neo-Telegraphe",
    },
    {
      id: "jadopte",
      titleKey: "items.jadopte.title",
      roleKey: "items.jadopte.role",
      descKey: "items.jadopte.desc",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT", "BCrypt", "RBAC"],
      images: [
        "/projects/Adopte_1.png",
        "/projects/Adopte_2.png",
        "/projects/Adopte_4.png",
      ],
      live: "https://j-adopte-un-humain.netlify.app/",
      github: "https://github.com/roissi/JadopteUnHumain",
    },
    {
      id: "donefficace",
      titleKey: "items.donefficace.title",
      roleKey: "items.donefficace.role",
      descKey: "items.donefficace.desc",
      tech: ["Next.js", "TypeScript", "i18next", "Sanity", "RGPD", "Collab"],
      images: [
        "/projects/DE_1.png",
        "/projects/DE_2.png",
        "/projects/DE_3.png",
      ],
      live: "https://givingwhatwecan-git-french-gwwc-centreea.vercel.app/fr",
    },
    {
      id: "hyperfree",
      titleKey: "items.hyperfree.title",
      roleKey: "items.hyperfree.role",
      descKey: "items.hyperfree.desc",
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Panda CSS",
        "Ark UI",
        "Framer-motion",
        "Copywriting",
      ],
      images: [
        "/projects/hyperfree1.png",
        "/projects/hyperfree2.jpg",
        "/projects/hyperfree3.png",
      ],
      live: "https://hyper-free.cyrildegraeve.dev/",
      github: "https://github.com/roissi",
    },
  ];

  function prev() {
    setCurrentIndex((current) => Math.max(0, current - 1));
  }

  function next() {
    setCurrentIndex((current) => Math.min(projects.length - 1, current + 1));
  }

  const activeProject = projects[currentIndex];

  return (
    <section id="projects" className="pt-24">
      <SectionTitle id="projects" tone="blue">
        {t("title")}
      </SectionTitle>

      <div className="mt-10 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Projets précédents"
          className={[
            "rounded-xl px-4 py-2 bg-black/10 dark:bg-white/10 transition-transform",
            "hover:scale-[1.03]",
            currentIndex === 0 ? "opacity-35" : "opacity-100",
          ].join(" ")}
        >
          ◀
        </button>
        <div className="min-w-[72px] text-center text-sm sm:text-base font-semibold text-ink/75 dark:text-paper/75">
          {currentIndex + 1}/{projects.length}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Projets suivants"
          className={[
            "rounded-xl px-4 py-2 bg-black/10 dark:bg-white/10 transition-transform",
            "hover:scale-[1.03]",
            currentIndex === projects.length - 1 ? "opacity-35" : "opacity-100",
          ].join(" ")}
        >
          ▶
        </button>
      </div>

      <div className="mt-6 overflow-hidden">
        <article className="w-full px-0 sm:px-2 lg:px-6">
          <div className="mx-auto w-full max-w-[720px] rounded-3xl bg-black/5 p-5 dark:bg-white/5 sm:p-6 lg:max-w-[980px] lg:p-8">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.26] tracking-[0.07em]">
                {t(activeProject.titleKey)}
              </h3>

              <div className="flex gap-3 shrink-0">
                {activeProject.github && (
                  <a
                    className="underline underline-offset-4 opacity-80 hover:opacity-100"
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {activeProject.live && (
                  <a
                    className="underline underline-offset-4 opacity-80 hover:opacity-100"
                    href={activeProject.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>

            <p className="mt-3 text-base sm:text-lg lg:text-xl opacity-80">
              {t(activeProject.roleKey)}
            </p>

            <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed opacity-90">
              {t(activeProject.descKey)}
            </p>

            {activeProject.resultKey ? (
              <p className="mt-4 rounded-2xl bg-sky/35 px-4 py-3 text-sm sm:text-base font-medium text-ink/90">
                {t(activeProject.resultKey)}
              </p>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2">
              {activeProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-sky text-ink px-3 py-1 text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {activeProject.images.slice(0, 3).map((src) => (
                <motion.div
                  key={src}
                  whileHover={{ scale: 1.05, rotate: 0.6 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-paper/50 dark:bg-ink/20"
                >
                  <Image
                    src={src}
                    alt={t(activeProject.titleKey)}
                    width={900}
                    height={600}
                    className="h-32 sm:h-36 lg:h-52 w-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* CTA Dossier technique (Bethere) */}
      <div className="mt-12">
        <div className="rounded-3xl bg-black/5 dark:bg-white/5 dark:border-white/10 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Image cliquable */}
            <motion.a
              href="https://bethere.cyrildegraeve.dev/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="block overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-paper/60 dark:bg-ink/20"
              aria-label={t("dossier.title")}
              title={t("dossier.title")}
            >
              <Image
                src="/projects/bethere.png"
                alt={t("dossier.imageAlt")}
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
            </motion.a>

            {/* Texte + bouton */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-[1.26] tracking-[0.07em]">
                {t("dossier.title")}
              </h3>

              <p className="mt-3 text-base sm:text-lg opacity-85 leading-relaxed">
                {t("dossier.body")}
              </p>

              <div className="mt-5 flex justify-center lg:justify-start">
                <a
                  href="https://bethere.cyrildegraeve.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-sky text-ink font-extrabold hover:scale-[1.02] active:scale-[0.99] transition-transform"
                >
                  {t("dossier.cta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
