"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "../SectionTitle";

type TestimonialKey =
  | "testimonial1"
  | "testimonial2"
  | "testimonial3"
  | "testimonial4"
  | "testimonial5"
  | "testimonial6";

type Testimonial = {
  key: TestimonialKey;
  avatar?: string;
};

function QuoteOpen({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
    </svg>
  );
}

function QuoteClose({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z" />
    </svg>
  );
}

function ProfileAvatarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
      <path
        d="M12 12.2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4.8 20c1.8-3.2 4.6-4.8 7.2-4.8S17.4 16.8 19.2 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FallbackAvatar() {
  return (
    <div
      className={[
        "h-12 w-12 rounded-full",
        "grid place-items-center",
        "bg-violet/85 dark:bg-violet/25",
        "text-white/85",
      ].join(" ")}
      aria-hidden
    >
      <ProfileAvatarIcon className="h-7 w-7" />
    </div>
  );
}

function TestimonialBubble({
  message,
  name,
  role,
  avatar,
}: {
  message: string;
  name: string;
  role: string;
  avatar?: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative"
    >
      {/* BULLE */}
      <div
        className={[
          "relative",
          "rounded-3xl",
          "bg-black/5 dark:bg-[#182739]",
        ].join(" ")}
      >
        {/* guillemets (violet) — plus gros */}
        <QuoteOpen className="absolute left-6 top-6 h-10 w-10 sm:h-11 sm:w-11 text-violet/90" />
        <QuoteClose className="absolute right-6 bottom-6 h-10 w-10 sm:h-11 sm:w-11 text-violet/80" />

        {/* padding “anti-empiètement” + texte un peu resserré */}
        <div className="px-12 sm:px-14 py-14 sm:py-16">
          <p className="mx-auto max-w-[32ch] sm:max-w-[44ch] text-center text-base sm:text-lg leading-relaxed tracking-wide text-ink/90 dark:text-paper/90">
            {message}
          </p>
        </div>

        {/* pointe centrée (triangle sans superposition) */}
        <div
          className={[
            "absolute left-1/2 -translate-x-1/2",
            "-bottom-[9px]",
            "h-0 w-0",
            "border-l-[18px] border-r-[18px] border-t-[9px]",
            "border-l-transparent border-r-transparent",
            "border-t-black/5 dark:border-t-[#182739]",
          ].join(" ")}
          aria-hidden
        />
      </div>

      {/* SIGNATURE (avatar + nom + rôle) */}
      <div className="mt-8 flex flex-col items-center text-center">
        {avatar ? (
          <div className="h-12 w-12 overflow-hidden rounded-full bg-black/5 dark:bg-white/5">
            <Image
              src={avatar}
              alt={name}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <FallbackAvatar />
        )}

        <div className="mt-3 leading-tight">
          <div className="text-violet font-extrabold tracking-tight text-lg">
            {name}
          </div>
          <div className="mt-1 text-sm sm:text-base text-ink/75 dark:text-paper/75">
            {role}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function TestimonialsSection() {
  const t = useTranslations("Testimonials");

  const testimonials: Testimonial[] = [
    { key: "testimonial1" },
    { key: "testimonial2" },
    { key: "testimonial3" },
    { key: "testimonial4" },
    { key: "testimonial5" },
    { key: "testimonial6" },
  ];

  return (
    <section id="testimonials" className="pt-24">
      <SectionTitle id="testimonials" tone="violet">
        {t("title")}
      </SectionTitle>

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((it) => (
          <TestimonialBubble
            key={it.key}
            name={t(`${it.key}.name`)}
            role={t(`${it.key}.role`)}
            message={t(`${it.key}.message`)}
            avatar={it.avatar}
          />
        ))}
      </div>
    </section>
  );
}
