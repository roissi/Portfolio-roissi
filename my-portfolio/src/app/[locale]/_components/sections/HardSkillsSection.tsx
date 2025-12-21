"use client";

import type { ComponentType } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { SiPostgresql, SiMysql } from "react-icons/si";

type TechItem = {
  label: string;
  Icon: ComponentType<{ className?: string }>;
};

function IconJs({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4 3h16v18H4V3Z" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9.3 16.6c.5.9 1.2 1.4 2.2 1.4 1 0 1.7-.4 1.7-2V9.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.9 15.9c.4.8 1.1 1.4 2.2 1.4 1.2 0 2-.6 2-1.5 0-1-.8-1.4-2.2-2l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.8 0-1.4 1.1-2.4 2.8-2.4 1.2 0 2.1.4 2.7 1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTs({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M4 3h16v18H4V3Z" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 10h6M11 10v8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14.4 16.2c.4.7 1 1.1 1.8 1.1 1 0 1.7-.5 1.7-1.2 0-.8-.6-1.1-1.7-1.6l-.4-.2c-1.1-.5-1.9-1-1.9-2.2 0-1.1.9-1.9 2.2-1.9.9 0 1.6.3 2.1 1.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconReact({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="3.5"
        ry="8"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3.5"
        transform="rotate(60 12 12)"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function IconNext({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M6 19V5l12 14V5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTailwind({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M6 12.2c1.2-1.6 2.7-2.4 4.6-2.4 1.8 0 3 .8 3.8 2.4.6 1.2 1.3 1.8 2.4 1.8 1.1 0 2-.5 2.8-1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 15.8c1.2-1.6 2.7-2.4 4.6-2.4 1.8 0 3 .8 3.8 2.4.6 1.2 1.3 1.8 2.4 1.8 1.1 0 2-.5 2.8-1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMySQL({ className }: { className?: string }) {
  return <SiMysql className={className} aria-hidden />;
}

function IconPostgreSQL({ className }: { className?: string }) {
  return <SiPostgresql className={className} aria-hidden />;
}

function IconDevOps({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M9 8 5 12l4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8 19 12l-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 17.5 13.5 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGenAI({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 3.5v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 17.5v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3.5 12h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17.5 12h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 8.2c2.1 0 3.8 1.7 3.8 3.8S14.1 15.8 12 15.8 8.2 14.1 8.2 12 9.9 8.2 12 8.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function IconNode({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 2.8 20 7.4v9.2L12 21.2 4 16.6V7.4L12 2.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 14.8V9.3l5.6 5.5V9.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCard({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M4 10h16" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M7 15h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16.2 16.2 20 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const TECHS: TechItem[] = [
  { label: "JavaScript", Icon: IconJs },
  { label: "TypeScript", Icon: IconTs },
  { label: "React", Icon: IconReact },
  { label: "Next.js", Icon: IconNext },

  { label: "TailwindCSS", Icon: IconTailwind },
  { label: "Node.js", Icon: IconNode },
  { label: "PostgreSQL", Icon: IconPostgreSQL },
  { label: "MySQL", Icon: IconMySQL },

  { label: "Stripe", Icon: IconCard },
  { label: "SEO", Icon: IconSearch },
  { label: "DevOps", Icon: IconDevOps },
  { label: "GenAI", Icon: IconGenAI },
];

export function HardSkillsSection() {
  const t = useTranslations("HardSkills");

  return (
    <section className="pt-24" id="hard-skills">
      <SectionTitle id="hard-skills" tone="yellow">
        {t("title")}
      </SectionTitle>

      <div className="mt-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        {/* Texte */}
        <div className="px-1 sm:px-2">
          <div className="mx-auto max-w-[44rem] lg:mx-0 lg:max-w-[40rem]">
            <h3
              className={[
                "text-center lg:text-left",
                "text-2xl sm:text-3xl",
                "tracking-tight",
                "leading-[1.05]",
              ].join(" ")}
            >
              {t("introTitle")}
            </h3>

            <p
              className={[
                "mt-6",
                "text-center lg:text-left",
                "text-lg sm:text-xl",
                "leading-relaxed",
                "tracking-wide",
                "opacity-90",
              ].join(" ")}
            >
              {t.rich("introBody", {
                name: (chunks) => (
                  <span className="font-extrabold text-banana">{chunks}</span>
                ),
              })}
            </p>

            <div className="mt-12 sm:mt-16">
              <h3
                className={[
                  "text-center lg:text-left",
                  "text-2xl sm:text-3xl",
                  "tracking-tight",
                  "leading-[1.05]",
                ].join(" ")}
              >
                {t("hook1")}
              </h3>

              <p
                className={[
                  "mt-6",
                  "text-center lg:text-left",
                  "text-lg sm:text-xl",
                  "leading-relaxed",
                  "tracking-wide",
                  "opacity-90",
                ].join(" ")}
              >
                {t("body1")}
              </p>
            </div>

            <div className="mt-10 sm:mt-12">
              <h3
                className={[
                  "text-center lg:text-left",
                  "text-2xl sm:text-3xl",
                  "tracking-tight",
                  "leading-[1.12]",
                ].join(" ")}
              >
                {t("hook2")}
              </h3>

              <p
                className={[
                  "mt-4",
                  "text-center lg:text-left",
                  "text-lg sm:text-xl",
                  "leading-relaxed",
                  "tracking-wide",
                  "opacity-85",
                ].join(" ")}
              >
                {t("body2")}
              </p>
            </div>
          </div>
        </div>

        {/* Grille tech */}
        <div className="lg:self-center lg:ml-auto lg:max-w-[28rem] w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
            {TECHS.map(({ label, Icon }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className={[
                  "group",
                  "rounded-2xl border border-black/10 dark:border-white/10",
                  "bg-paper/60 dark:bg-ink/20",
                  "p-5 sm:p-6",
                  "flex flex-col items-center justify-center gap-2.5",
                  "text-center",
                  "text-ink/80 dark:text-paper/80",
                  "transition-colors",
                  "hover:text-banana",
                ].join(" ")}
              >
                <Icon className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 text-current" />
                <span className="font-semibold tracking-wide text-sm sm:text-base leading-tight">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
