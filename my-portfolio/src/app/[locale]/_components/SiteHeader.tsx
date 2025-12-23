"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";

function NavButton({
  href,
  label,
  bg,
  hoverBg,
  onClick,
}: {
  href: string;
  label: string;
  bg: string;
  hoverBg: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "rounded-xl px-4 py-2 font-semibold tracking-wide transition-transform",
        "hover:scale-[1.03] active:scale-[0.99]",
        bg,
        hoverBg,
        "text-ink",
      ].join(" ")}
    >
      {label}
    </a>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const nextLocale = locale === "fr" ? "en" : "fr";

  function switchLocale() {
    router.replace(pathname, { locale: nextLocale });
    setMobileOpen(false);
  }

  function toggleTheme() {
    if (!mounted) return;
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-paper/90 dark:bg-ink/80 backdrop-blur border-b border-black/10 dark:border-white/10">
        <div className="container-page flex items-center justify-between gap-3 py-4">
          <div className="flex items-baseline gap-3 min-w-0">
            <Link
              href="/"
              className="font-extrabold tracking-tight text-2xl"
              onClick={closeMobile}
            >
              Cyril
            </Link>
            {/* sur mobile, on évite que ça force la largeur */}
            <span className="opacity-70 text-xl sm:text-2xl truncate">
              — portfolio
            </span>
          </div>

          {/* desktop */}
          <nav className="hidden md:flex items-center text-sm lg:text-lg gap-3">
            <NavButton
              href="#hard-skills"
              label={t("hardSkills")}
              bg="bg-banana"
              hoverBg="hover:bg-[#f0f25a]"
            />
            <NavButton
              href="#projects"
              label={t("projects")}
              bg="bg-sky"
              hoverBg="hover:bg-[#8fdbf2]"
            />
            <NavButton
              href="#testimonials"
              label={t("testimonials")}
              bg="bg-violet"
              hoverBg="hover:bg-[#8b5cf6]"
            />
            <NavButton
              href="#game"
              label={t("game")}
              bg="bg-pink"
              hoverBg="hover:bg-[#ed809a]"
            />
            <NavButton
              href="#soft-skills"
              label={t("softSkills")}
              bg="bg-mint"
              hoverBg="hover:bg-[#51d695]"
            />
            <NavButton
              href="#contact"
              label={t("contact")}
              bg="bg-orange"
              hoverBg="hover:bg-[#f58445]"
            />
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={switchLocale}
              className="rounded-xl px-3 py-2 font-bold tracking-wide bg-black/10 dark:bg-white/10 hover:scale-[1.03] transition-transform"
              aria-label="Changer de langue"
            >
              {locale === "fr" ? "EN" : "FR"}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-xl px-3 py-2 bg-black/10 dark:bg-white/10 hover:scale-[1.03] transition-transform"
              aria-label="Basculer dark/light"
            >
              {mounted ? (theme === "dark" ? "☀️" : "🌙") : "…"}
            </button>

            {/* mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className={[
                "md:hidden",
                "rounded-xl px-3 py-2",
                "bg-black/10 dark:bg-white/10",
                "hover:scale-[1.03] transition-transform",
              ].join(" ")}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <BurgerIcon open={mobileOpen} />
            </button>
          </div>
        </div>

        {/* mobile accordion (fix “on voit un bout”) */}
        <div
          id="mobile-nav"
          className={[
            "md:hidden container-page",
            "overflow-hidden", // <- IMPORTANT : rien ne dépasse
            "grid transition-[grid-template-rows] duration-300 ease-out",
            mobileOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr] pb-0",
            mobileOpen ? "pointer-events-auto" : "pointer-events-none",
          ].join(" ")}
        >
          {/* plus de pb ici */}
          <div className="min-h-0">
            <div className="grid grid-cols-3 place-items-center gap-2">
              <NavButton
                href="#hard-skills"
                label={t("hardSkills")}
                bg="bg-banana"
                hoverBg="hover:bg-[#f0f25a]"
                onClick={closeMobile}
              />
              <NavButton
                href="#projects"
                label={t("projects")}
                bg="bg-sky"
                hoverBg="hover:bg-[#8fdbf2]"
                onClick={closeMobile}
              />
              <NavButton
                href="#testimonials"
                label={t("testimonials")}
                bg="bg-violet"
                hoverBg="hover:bg-[#8b5cf6]"
                onClick={closeMobile}
              />
              <NavButton
                href="#game"
                label={t("game")}
                bg="bg-pink"
                hoverBg="hover:bg-[#ed809a]"
                onClick={closeMobile}
              />
              <NavButton
                href="#soft-skills"
                label={t("softSkills")}
                bg="bg-mint"
                hoverBg="hover:bg-[#51d695]"
                onClick={closeMobile}
              />
              <NavButton
                href="#contact"
                label={t("contact")}
                bg="bg-orange"
                hoverBg="hover:bg-[#f58445]"
                onClick={closeMobile}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
