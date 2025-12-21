"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";

type Skill = {
  id: string;
  title: string;
  desc: string;
  example: string;
};

function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

function FlipCard({
  skill,
  flipped,
  onToggle,
}: {
  skill: Skill;
  flipped: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="text-left [perspective:1200px]"
      aria-label={
        flipped ? `Revenir à ${skill.title}` : `Voir le détail : ${skill.title}`
      }
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={[
          "relative h-[300px] w-[320px] sm:w-[380px]",
          "rounded-3xl border-2 border-mint",
          "bg-paper dark:bg-ink",
          "shadow-sm",
          "[transform-style:preserve-3d]",
        ].join(" ")}
      >
        {/* front */}
        <div className="absolute inset-0 p-6 flex items-center justify-center [backface-visibility:hidden]">
          <div className="text-center">
            <div className="text-mint text-3xl sm:text-4xl font-extrabold tracking-wide leading-tight">
              {skill.title}
            </div>

            {/* icône flip (plus gros) */}
            <div className="mt-4 text-3xl opacity-75 leading-none select-none">
              ↻
            </div>
          </div>
        </div>

        {/* back */}
        <div className="absolute inset-0 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="text-mint font-extrabold tracking-wide text-lg leading-snug">
            {skill.desc}
          </div>

          <div className="mt-4 opacity-90 leading-relaxed">{skill.example}</div>

          {/* icône retour (plus gros) */}
          <div className="mt-6 text-3xl opacity-75 leading-none select-none">
            ↩
          </div>
        </div>
      </motion.div>
    </button>
  );
}

export function SoftSkillsSection() {
  const t = useTranslations("SoftSkills");
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  const skills: Skill[] = useMemo(
    () => [
      {
        id: "1",
        title: t("items.1.title"),
        desc: t("items.1.desc"),
        example: t("items.1.example"),
      },
      {
        id: "2",
        title: t("items.2.title"),
        desc: t("items.2.desc"),
        example: t("items.2.example"),
      },
      {
        id: "3",
        title: t("items.3.title"),
        desc: t("items.3.desc"),
        example: t("items.3.example"),
      },
      {
        id: "4",
        title: t("items.4.title"),
        desc: t("items.4.desc"),
        example: t("items.4.example"),
      },
      {
        id: "5",
        title: t("items.5.title"),
        desc: t("items.5.desc"),
        example: t("items.5.example"),
      },
      {
        id: "6",
        title: t("items.6.title"),
        desc: t("items.6.desc"),
        example: t("items.6.example"),
      },
      {
        id: "7",
        title: t("items.7.title"),
        desc: t("items.7.desc"),
        example: t("items.7.example"),
      },
      {
        id: "8",
        title: t("items.8.title"),
        desc: t("items.8.desc"),
        example: t("items.8.example"),
      },
    ],
    [t],
  );

  const [flippedId, setFlippedId] = useState<string | null>(null);

  useEffect(() => {
    if (!inView) return;

    let cancelled = false;

    (async () => {
      for (const s of skills) {
        if (cancelled) return;
        setFlippedId(s.id);
        await new Promise((r) => setTimeout(r, 250));
      }
      await new Promise((r) => setTimeout(r, 250));
      setFlippedId(null);
    })();

    return () => {
      cancelled = true;
    };
  }, [inView, skills]);

  return (
    <section id="soft-skills" className="pt-24">
      <SectionTitle id="soft-skills" tone="green">
        {t("title")}
      </SectionTitle>

      <div ref={ref} className="mt-10 flex flex-wrap justify-center gap-6">
        {skills.map((s) => (
          <FlipCard
            key={s.id}
            skill={s}
            flipped={flippedId === s.id}
            onToggle={() =>
              setFlippedId((prev) => (prev === s.id ? null : s.id))
            }
          />
        ))}
      </div>
    </section>
  );
}
