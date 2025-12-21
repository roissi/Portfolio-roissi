"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionTitle } from "../SectionTitle";

type Project = {
  id: string;
  titleKey: string;
  roleKey: string;
  descKey: string;
  tech: string[];
  images: string[];
  live?: string;
  github?: string;
};

export function ProjectsSection() {
  const t = useTranslations("Projects");
  const [activeIndex, setActiveIndex] = useState(0);

  const projects: Project[] = [
    {
      id: "jffourcade",
      titleKey: "items.jffourcade.title",
      roleKey: "items.jffourcade.role",
      descKey: "items.jffourcade.desc",
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

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  function goToIndex(nextIndex: number) {
    const el = scrollerRef.current;
    if (!el) return;

    const cards = Array.from(
      el.querySelectorAll<HTMLElement>("[data-card='true']"),
    );
    const target = cards[nextIndex];
    if (!target) return;

    el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    setActiveIndex(nextIndex);
  }

  function prev() {
    goToIndex(Math.max(0, activeIndex - 1));
  }

  function next() {
    goToIndex(Math.min(projects.length - 1, activeIndex + 1));
  }

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
          className="rounded-xl px-4 py-2 bg-black/10 dark:bg-white/10 hover:scale-[1.03] transition-transform disabled:opacity-40"
          disabled={activeIndex === 0}
        >
          ◀
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Projets suivants"
          className="rounded-xl px-4 py-2 bg-black/10 dark:bg-white/10 hover:scale-[1.03] transition-transform disabled:opacity-40"
          disabled={activeIndex === projects.length - 1}
        >
          ▶
        </button>
      </div>

      {/* Wrapper qui évite tout “peek” visuel en mobile */}
      <div className="mt-6 overflow-hidden">
        <div
          ref={scrollerRef}
          className={[
            "flex",
            "gap-0 sm:gap-4",
            "overflow-x-auto",
            "scroll-smooth",
            "snap-x snap-mandatory",
            "pb-4",
            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          ].join(" ")}
        >
          {projects.map((p) => (
            <article
              key={p.id}
              data-card="true"
              className={[
                "snap-start shrink-0",
                "w-full sm:w-[640px] lg:w-[720px]",
                "rounded-3xl",
                "bg-black/5 dark:bg-white/5",
                "p-5 sm:p-6",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-[1.05]">
                  {t(p.titleKey)}
                </h3>

                <div className="flex gap-3 shrink-0">
                  {p.github && (
                    <a
                      className="underline underline-offset-4 opacity-80 hover:opacity-100"
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {p.live && (
                    <a
                      className="underline underline-offset-4 opacity-80 hover:opacity-100"
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-base sm:text-lg opacity-80">
                {t(p.roleKey)}
              </p>

              <p className="mt-4 text-base sm:text-lg leading-relaxed opacity-90">
                {t(p.descKey)}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-sky text-ink px-3 py-1 text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {p.images.slice(0, 3).map((src) => (
                  <motion.div
                    key={src}
                    whileHover={{ scale: 1.05, rotate: 0.6 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-paper/50 dark:bg-ink/20"
                  >
                    <Image
                      src={src}
                      alt={t(p.titleKey)}
                      width={900}
                      height={600}
                      className="h-32 sm:h-36 w-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </article>
          ))}
        </div>
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
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
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
