import type { ReactNode } from "react";

type Tone = "yellow" | "blue" | "pink" | "green" | "orange" | "violet";

const toneShadowClass: Record<Tone, string> = {
  yellow: "title-shadow-yellow",
  blue: "title-shadow-blue",
  pink: "title-shadow-pink",
  green: "title-shadow-green",
  orange: "title-shadow-orange",
  violet: "title-shadow-violet",
};

export function SectionTitle({
  id,
  tone,
  children,
  className = "",
}: {
  id: string;
  tone: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={[
        "scroll-mt-28",
        "text-center tracking-widest",
        "text-5xl sm:text-6xl",
        "font-normal",
        toneShadowClass[tone],
        className,
      ].join(" ")}
    >
      {children}
    </h2>
  );
}
