import { motion } from "framer-motion";

import { cx } from "../../../utils/helpers";

/**
 * Nodes of the abstract network graphic, on a 480×480 grid. A handful are
 * marked `accent` to pick out a loose "hub and spoke" shape in brand orange.
 */
const NODES: { id: string; x: number; y: number; r: number; accent?: boolean }[] =
  [
    { id: "a", x: 80, y: 120, r: 5 },
    { id: "b", x: 180, y: 70, r: 4 },
    { id: "c", x: 300, y: 60, r: 6, accent: true },
    { id: "d", x: 400, y: 110, r: 4 },
    { id: "e", x: 440, y: 220, r: 5 },
    { id: "f", x: 360, y: 280, r: 8, accent: true },
    { id: "g", x: 260, y: 340, r: 4 },
    { id: "h", x: 150, y: 380, r: 5 },
    { id: "i", x: 60, y: 300, r: 4 },
    { id: "j", x: 120, y: 220, r: 6, accent: true },
    { id: "k", x: 220, y: 180, r: 4 },
    { id: "l", x: 320, y: 180, r: 4 },
    { id: "m", x: 200, y: 280, r: 4 },
    { id: "n", x: 380, y: 380, r: 4 },
  ];

const EDGES: [string, string][] = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "e"],
  ["e", "f"],
  ["f", "g"],
  ["g", "h"],
  ["h", "i"],
  ["i", "a"],
  ["a", "j"],
  ["j", "k"],
  ["k", "c"],
  ["k", "l"],
  ["l", "f"],
  ["j", "m"],
  ["m", "g"],
  ["l", "e"],
  ["f", "n"],
  ["m", "h"],
];

const byId = Object.fromEntries(NODES.map((node) => [node.id, node]));

export interface NetworkVisualProps {
  /**
   * `light` sits on a white/near-white section (charcoal lines, white-filled
   * nodes). `dark` sits on a charcoal or saturated-colour section (white
   * lines, translucent-white nodes). Defaults to `light` — most of the
   * homepage is light.
   */
  tone?: "light" | "dark";
}

/**
 * Abstract node-and-line network — stands in for "an AI network / digital
 * nodes / abstract technology system" without a stock photo. Fades and
 * scales in once when it enters the viewport; the only ongoing motion is a
 * single slow pulse on the hub nodes.
 */
const NetworkVisual = ({ tone = "light" }: NetworkVisualProps) => {
  const isLight = tone === "light";

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[#F7941E]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={cx(
          "relative rounded-3xl border p-6",
          isLight
            ? "border-slate-200 bg-white shadow-[0_20px_60px_rgba(61,61,61,0.08)]"
            : "border-white/10 bg-white/[0.02]",
        )}
      >
        <svg
          viewBox="0 0 480 480"
          className="h-full w-full"
          role="img"
          aria-label="Abstract illustration of a connected technology network"
        >
          {EDGES.map(([fromId, toId]) => {
            const from = byId[fromId];
            const to = byId[toId];
            return (
              <line
                key={`${fromId}-${toId}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isLight ? "rgba(61,61,61,0.14)" : "rgba(255,255,255,0.12)"}
                strokeWidth={1}
              />
            );
          })}

          {NODES.map((node) => (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.r}
              className={node.accent ? "animate-pulse" : undefined}
              fill={
                node.accent
                  ? "#F7941E"
                  : isLight
                    ? "#CBD5E1"
                    : "rgba(255,255,255,0.35)"
              }
              stroke={
                node.accent
                  ? "#F7941E"
                  : isLight
                    ? "#94A3B8"
                    : "rgba(255,255,255,0.5)"
              }
              strokeWidth={1}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

export default NetworkVisual;
