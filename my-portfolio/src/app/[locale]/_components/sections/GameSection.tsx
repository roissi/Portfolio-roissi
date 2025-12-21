"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";

type Cell = "" | "X" | "O";
type Winner = "X" | "O" | "Draw" | null;

const WIN: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(grid: Cell[]): Winner {
  for (const [a, b, c] of WIN) {
    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) return grid[a];
  }
  if (!grid.includes("")) return "Draw";
  return null;
}

/**
 * Case stylée façon "Square" old version :
 * - vide : bouton rose
 * - joué : fond ink/paper + image X/O selon mode (dark/light)
 */
function Square({
  value,
  onClick,
  disabled,
}: {
  value: Cell;
  onClick: () => void;
  disabled: boolean;
}) {
  const isEmpty = value === "";

  const xLight = "/Xl.png";
  const xDark = "/X.png";
  const oLight = "/Ol.png";
  const oDark = "/O.png";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={[
        "relative grid place-items-center",
        // ⬇️ PLUS GROS
        "h-24 w-24 sm:h-28 sm:w-28",
        "rounded-2xl",
        "transition-all",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        isEmpty
          ? [
              "bg-pink text-ink",
              "shadow-[0_12px_34px_rgba(247,59,104,0.28)]",
              "hover:brightness-[1.03]",
            ].join(" ")
          : [
              "bg-ink/90 dark:bg-paper/90",
              "shadow-[0_12px_30px_rgba(0,0,0,0.20)]",
            ].join(" "),
      ].join(" ")}
      aria-label={value ? `Case ${value}` : "Case vide"}
    >
      {/* petit gloss */}
      <span
        aria-hidden
        className={[
          "pointer-events-none absolute inset-0 rounded-2xl",
          isEmpty
            ? "bg-gradient-to-b from-white/35 to-transparent"
            : "bg-gradient-to-b from-white/20 to-transparent",
        ].join(" ")}
      />

      {/* contenu */}
      {value === "X" && (
        <div className="relative h-12 w-12 sm:h-14 sm:w-14">
          <Image
            src={xLight}
            alt="X"
            fill
            className="object-contain dark:hidden"
            sizes="72px"
            priority={false}
          />
          <Image
            src={xDark}
            alt="X"
            fill
            className="hidden object-contain dark:block"
            sizes="72px"
            priority={false}
          />
        </div>
      )}

      {value === "O" && (
        <div className="relative h-12 w-12 sm:h-14 sm:w-14">
          <Image
            src={oLight}
            alt="O"
            fill
            className="object-contain dark:hidden"
            sizes="72px"
            priority={false}
          />
          <Image
            src={oDark}
            alt="O"
            fill
            className="hidden object-contain dark:block"
            sizes="72px"
            priority={false}
          />
        </div>
      )}

      {/* état vide : petit point subtil */}
      {isEmpty && (
        <span
          aria-hidden
          className="h-2.5 w-2.5 rounded-full bg-ink/25 dark:bg-ink/30"
        />
      )}
    </motion.button>
  );
}

function StatusPill({
  children,
  tone = "pink",
}: {
  children: React.ReactNode;
  tone?: "pink" | "neutral";
}) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2",
        "rounded-full px-4 py-2",
        "text-sm font-bold tracking-wide",
        tone === "pink"
          ? "bg-pink/25 text-pink dark:bg-pink/20"
          : "bg-black/10 dark:bg-white/10",
      ].join(" ")}
    >
      <span
        aria-hidden
        className={[
          "h-2 w-2 rounded-full",
          tone === "pink" ? "bg-pink" : "bg-ink/40 dark:bg-paper/40",
        ].join(" ")}
      />
      {children}
    </div>
  );
}

export function GameSection() {
  const t = useTranslations("Game");

  const [grid, setGrid] = useState<Cell[]>(Array(9).fill(""));
  const [winner, setWinner] = useState<string | null>(null);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const minimax = useCallback(
    (
      g: Cell[],
      depth: number,
      maximizing: boolean,
    ): { score: number; move: number | null } => {
      const w = checkWinner(g);
      if (w === "O") return { score: 10 - depth, move: null };
      if (w === "X") return { score: depth - 10, move: null };
      if (w === "Draw") return { score: 0, move: null };

      if (maximizing) {
        let best = -Infinity;
        let bestMove: number | null = null;
        for (let i = 0; i < 9; i++) {
          if (g[i] !== "") continue;
          g[i] = "O";
          const { score } = minimax(g, depth + 1, false);
          g[i] = "";
          if (score > best) {
            best = score;
            bestMove = i;
          }
        }
        return { score: best, move: bestMove };
      } else {
        let best = Infinity;
        let bestMove: number | null = null;
        for (let i = 0; i < 9; i++) {
          if (g[i] !== "") continue;
          g[i] = "X";
          const { score } = minimax(g, depth + 1, true);
          g[i] = "";
          if (score < best) {
            best = score;
            bestMove = i;
          }
        }
        return { score: best, move: bestMove };
      }
    },
    [],
  );

  useEffect(() => {
    if (winner) return;
    if (isPlayerTurn) return;
    if (!grid.includes("")) return;

    const timer = setTimeout(() => {
      const g = [...grid];

      const move = g.every((c) => c === "")
        ? Math.floor(Math.random() * 9)
        : minimax(g, 0, true).move;

      if (move == null) return;

      g[move] = "O";
      setGrid(g);

      const w = checkWinner(g);
      if (w === "O") setWinner(t("fail"));
      else if (w === "Draw") setWinner(t("draw"));
      setIsPlayerTurn(true);
    }, 450);

    return () => clearTimeout(timer);
  }, [grid, isPlayerTurn, winner, minimax, t]);

  const onClick = (i: number) => {
    if (winner) return;
    if (!isPlayerTurn) return;
    if (grid[i] !== "") return;

    const g = [...grid];
    g[i] = "X";
    setGrid(g);

    const w = checkWinner(g);
    if (w === "X") setWinner(t("win"));
    else if (w === "Draw") setWinner(t("draw"));
    setIsPlayerTurn(false);
  };

  const reset = () => {
    setGrid(Array(9).fill(""));
    setWinner(null);
    setIsPlayerTurn(true);
  };

  const cells = useMemo(() => grid, [grid]);

  return (
    <section id="game" className="pt-24">
      <SectionTitle id="game" tone="pink">
        {t("title")}
      </SectionTitle>

      <p className="mt-6 text-center text-xl opacity-80">{t("message")}</p>

      <div className="mt-8 flex flex-col items-center gap-6">
        {/* état */}
        {!winner ? (
          <StatusPill tone="pink">
            {isPlayerTurn ? "À toi (X)" : "Je joue… (O)"}
          </StatusPill>
        ) : (
          <StatusPill tone="neutral">{winner}</StatusPill>
        )}

        {/* plateau : plus grand / plus d'espace / SANS bg derrière */}
        <div className="grid grid-cols-3 gap-4 sm:gap-5">
          {cells.map((value, i) => (
            <Square
              key={i}
              value={value}
              onClick={() => onClick(i)}
              disabled={!!winner || value !== "" || !isPlayerTurn}
            />
          ))}
        </div>

        {/* winner + reset */}
        {winner && (
          <div className="text-center">
            <button
              type="button"
              onClick={reset}
              className={[
                "mt-2 rounded-xl px-6 py-3",
                "bg-pink text-ink font-extrabold tracking-wide",
                "hover:bg-[#ed809a] transition-colors",
                "shadow-[0_12px_35px_rgba(247,59,104,0.28)]",
              ].join(" ")}
            >
              {t("reset")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
