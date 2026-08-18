"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, LocateFixed } from "lucide-react";
import { buildings } from "@/data/buildings";
import { Building } from "@/types";
import { BuildingMarker } from "./BuildingMarker";
import { useAppStore } from "@/store/useAppStore";
import { cn } from "@/lib/utils";

interface CityCanvasProps {
  onSelectBuilding: (b: Building) => void;
}

const MIN_ZOOM = 0.7;
const MAX_ZOOM = 1.8;

export function CityCanvas({ onSelectBuilding }: CityCanvasProps) {
  const { isDaytime, unlockedBuildings, completedBuildings } = useAppStore();
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const clampZoom = (z: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));

  // simple path connecting buildings in walking order, for the "street" line
  const pathPoints = buildings.map((b) => `${b.position.x},${b.position.y}`).join(" L ");

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[100dvh] w-full overflow-hidden transition-colors duration-700",
        isDaytime
          ? "bg-gradient-to-b from-sky-100 via-paper to-signal-green/10"
          : "bg-gradient-to-b from-[#0B1224] via-[#101A33] to-[#171A1E]"
      )}
    >
      {/* sun / moon */}
      <motion.div
        animate={{ opacity: isDaytime ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute right-10 top-10 h-20 w-20 rounded-full bg-signal-amber/70 blur-xl"
      />
      <motion.div
        animate={{ opacity: isDaytime ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute right-14 top-14 h-12 w-12 rounded-full bg-white/60 blur-md"
      />

      {/* stars at night */}
      {!isDaytime && (
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 w-0.5 rounded-full bg-white/70"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 60}%`,
                opacity: 0.3 + ((i * 13) % 70) / 100,
              }}
            />
          ))}
        </div>
      )}

      {/* drifting clouds */}
      <div className="pointer-events-none absolute left-0 top-16 h-10 w-24 rounded-full bg-white/50 animate-drift" />
      <div className="pointer-events-none absolute left-0 top-32 h-8 w-16 rounded-full bg-white/40 animate-drift [animation-delay:14s] [animation-duration:55s]" />

      {/* zoomable / pannable layer */}
      <motion.div
        drag
        dragConstraints={{ left: -400, right: 400, top: -300, bottom: 300 }}
        dragElastic={0.1}
        animate={{ scale: zoom }}
        transition={{ scale: { duration: 0.25 } }}
        className="relative h-full w-full origin-center cursor-grab active:cursor-grabbing"
      >
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* street path connecting buildings */}
        <svg className="absolute inset-0 h-full w-full" style={{ overflow: "visible" }}>
          <polyline
            points={pathPoints}
            fill="none"
            stroke={isDaytime ? "#D8DAD4" : "#2A2F38"}
            strokeWidth="3"
            strokeDasharray="1 10"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ transform: "translate(0,0)" }}
          />
        </svg>

        {buildings.map((b, i) => (
          <BuildingMarker
            key={b.id}
            building={b}
            unlocked={unlockedBuildings.includes(b.id)}
            completed={completedBuildings.includes(b.id)}
            onSelect={onSelectBuilding}
            delay={i * 0.04}
          />
        ))}
      </motion.div>

      {/* zoom controls */}
      <div className="absolute bottom-6 right-4 z-20 flex flex-col gap-2 sm:right-6">
        <button
          onClick={() => setZoom((z) => clampZoom(z + 0.15))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white/90 shadow-soft backdrop-blur-sm"
          aria-label="Vergrößern"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button
          onClick={() => setZoom((z) => clampZoom(z - 0.15))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white/90 shadow-soft backdrop-blur-sm"
          aria-label="Verkleinern"
        >
          <Minus className="h-4 w-4" />
        </button>
        <button
          onClick={() => setZoom(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white/90 shadow-soft backdrop-blur-sm"
          aria-label="Ansicht zurücksetzen"
        >
          <LocateFixed className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
