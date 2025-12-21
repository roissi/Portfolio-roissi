"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { SectionTitle } from "../SectionTitle";

type FormValues = {
  name: string;
  organisation?: string;
  email: string;
  message: string;
  consent: boolean; // ✅ RGPD
};

function GithubIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={props.className}
      fill="currentColor"
    >
      <path d="M12 .5C5.73.5.75 5.6.75 12.07c0 5.18 3.26 9.57 7.78 11.12.57.11.78-.25.78-.56 0-.28-.01-1.2-.02-2.18-3.16.7-3.83-1.24-3.83-1.24-.52-1.36-1.27-1.72-1.27-1.72-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.22 1.75 1.22 1.02 1.8 2.68 1.28 3.33.98.1-.76.4-1.28.72-1.57-2.52-.3-5.18-1.3-5.18-5.8 0-1.28.44-2.33 1.17-3.15-.12-.3-.5-1.52.11-3.16 0 0 .96-.32 3.14 1.2a10.6 10.6 0 0 1 2.86-.4c.97 0 1.95.14 2.86.4 2.18-1.52 3.14-1.2 3.14-1.2.61 1.64.23 2.86.11 3.16.73.82 1.17 1.87 1.17 3.15 0 4.52-2.67 5.5-5.21 5.79.41.37.77 1.1.77 2.22 0 1.6-.02 2.9-.02 3.3 0 .31.2.67.79.56 4.51-1.55 7.77-5.94 7.77-11.12C23.25 5.6 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={props.className}
      fill="currentColor"
    >
      <path d="M4.98 3.5C3.6 3.5 2.5 4.62 2.5 6s1.1 2.5 2.48 2.5h.02C6.38 8.5 7.5 7.38 7.5 6S6.38 3.5 5 3.5h-.02ZM2.9 21h4.2V9H2.9v12ZM9.6 9h4.03v1.64h.06c.56-1.06 1.92-2.18 3.96-2.18 4.23 0 5.01 2.8 5.01 6.45V21h-4.2v-5.25c0-1.25-.02-2.86-1.74-2.86-1.74 0-2.01 1.36-2.01 2.77V21H9.6V9Z" />
    </svg>
  );
}

function MailIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={props.className}
      fill="currentColor"
    >
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 3.2-8 5.1-8-5.1V6l8 5.1L20 6v1.2Z" />
    </svg>
  );
}

function IconTile({
  href,
  label,
  children,
  isExternal = true,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  isExternal?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={[
        "group",
        "grid place-items-center",
        "h-16 w-16 sm:h-[72px] sm:w-[72px]",
        "rounded-2xl",
        "transition-transform",
        "hover:scale-[1.05] active:scale-[0.98]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
      ].join(" ")}
    >
      <div className="text-ink dark:text-paper transition-colors group-hover:text-orange">
        {children}
      </div>
    </a>
  );
}

function LogoLink({
  href,
  label,
  imgLight,
  imgDark,
  imgHover,
  width,
  height,
  className = "",
}: {
  href: string;
  label: string;
  imgLight: string;
  imgDark: string;
  imgHover: string;
  width: number;
  height: number;
  className?: string;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => setMounted(true), []);

  const theme = mounted ? resolvedTheme : "light";
  const src = hovered ? imgHover : theme === "dark" ? imgDark : imgLight;

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "group",
        "grid place-items-center",
        "transition-transform",
        "hover:scale-[1.04] active:scale-[0.98]",
        "rounded-2xl",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        className,
      ].join(" ")}
    >
      <Image src={src} alt={label} width={width} height={height} />
    </a>
  );
}

export function ContactSection() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { consent: false },
  });

  const consent = watch("consent");

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");

    try {
      const res = await fetch("https://formspree.io/f/xwkjgkpl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Bad response");

      reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="pt-24">
      <SectionTitle id="contact" tone="orange">
        {t("title")}
      </SectionTitle>

      <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: intro + logos */}
        <div className="rounded-3xl bg-black/5 dark:bg-white/5 p-7 sm:p-8">
          <p className="text-xl opacity-85 leading-relaxed">{t("intro")}</p>

          {/* ligne 1 */}
          <div className="mt-10 flex items-center justify-center gap-7 sm:gap-10">
            <IconTile
              href="https://github.com/roissi"
              label="GitHub"
              isExternal
            >
              <GithubIcon className="h-12 w-12" />
            </IconTile>

            <IconTile
              href="https://www.linkedin.com/in/cyril-de-graeve/"
              label="LinkedIn"
              isExternal
            >
              <LinkedinIcon className="h-12 w-12" />
            </IconTile>

            <LogoLink
              href="https://x.com/roissi"
              label="X"
              imgHover="/X_logo_hover.png"
              imgDark="/X_logo_darkmode.png"
              imgLight="/X_logo_lightmode.png"
              width={70}
              height={70}
              className="h-16 w-16 sm:h-[72px] sm:w-[72px]"
            />

            <IconTile
              href="mailto:contact@cyrildegraeve.dev"
              label="Email"
              isExternal={false}
            >
              <MailIcon className="h-12 w-12" />
            </IconTile>
          </div>

          {/* ligne 2 */}
          <div className="mt-8 flex items-center justify-center gap-10 sm:gap-14">
            <LogoLink
              href="https://www.malt.fr/profile/cyrildegraeve"
              label="Malt"
              imgHover="/Malt_logo_hover.png"
              imgDark="/Malt_logo_darkmode.png"
              imgLight="/Malt_logo_lightmode.png"
              width={190}
              height={50}
              className="h-[52px]"
            />

            <LogoLink
              href="https://www.codeur.com/-cyrilde26l"
              label="Codeur"
              imgHover="/Codeur_logo_hover.png"
              imgDark="/Codeur_logo_darkmode.png"
              imgLight="/Codeur_logo_lightmode.png"
              width={70}
              height={70}
              className="h-16 w-16"
            />
          </div>

          {status === "ok" && (
            <p className="mt-8 font-bold text-mint">{t("success")}</p>
          )}
          {status === "error" && (
            <p className="mt-8 font-bold text-pink">{t("error")}</p>
          )}
        </div>

        {/* RIGHT: form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl bg-black/5 dark:bg-white/5 p-7 sm:p-8"
        >
          <div className="grid gap-5">
            <div>
              <label className="font-semibold">{t("form.name")}</label>
              <input
                className="mt-2 w-full rounded-2xl px-4 py-3 bg-paper/70 dark:bg-ink/20 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-orange"
                {...register("name", { required: t("form.required") })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-pink">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="font-semibold">{t("form.organisation")}</label>
              <input
                className="mt-2 w-full rounded-2xl px-4 py-3 bg-paper/70 dark:bg-ink/20 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-orange"
                {...register("organisation")}
              />
            </div>

            <div>
              <label className="font-semibold">{t("form.email")}</label>
              <input
                type="email"
                className="mt-2 w-full rounded-2xl px-4 py-3 bg-paper/70 dark:bg-ink/20 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-orange"
                {...register("email", { required: t("form.required") })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-pink">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="font-semibold">{t("form.message")}</label>
              <textarea
                rows={6}
                className="mt-2 w-full rounded-2xl px-4 py-3 bg-paper/70 dark:bg-ink/20 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-orange"
                {...register("message", { required: t("form.required") })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-pink">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* ✅ RGPD */}
            <div className="mt-1">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className={[
                    "mt-1 h-5 w-5 rounded",
                    "border border-black/20 dark:border-white/20",
                    "accent-orange",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/60",
                  ].join(" ")}
                  {...register("consent", {
                    validate: (v) => v === true || t("form.required"),
                  })}
                />
                <span className="text-sm sm:text-base opacity-90 leading-snug">
                  {t("form.rgpd")}
                </span>
              </label>

              {errors.consent && (
                <p className="mt-2 text-sm text-pink">
                  {errors.consent.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !consent}
              className={[
                "mt-2 rounded-2xl px-5 py-3",
                "bg-orange text-ink font-extrabold",
                "hover:bg-[#f58445] transition-colors",
                "disabled:opacity-60 disabled:cursor-not-allowed",
              ].join(" ")}
            >
              {isSubmitting ? t("form.sending") : t("form.submit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
