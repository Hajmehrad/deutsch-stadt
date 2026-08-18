import { cn } from "@/lib/utils";

interface StreetSignProps {
  label: string;
  code?: string;
  variant?: "blue" | "amber" | "ink" | "brick";
  className?: string;
}

const variantStyles = {
  blue: "bg-signal-blue text-white",
  amber: "bg-signal-amber text-ink",
  ink: "bg-ink text-paper",
  brick: "bg-signal-brick text-white",
};

/**
 * The site's signature visual motif: a German street nameplate
 * (Straßenschild). Used for nav badge, section eyebrows, and
 * building labels in the city view.
 */
export function StreetSign({ label, code, variant = "blue", className }: StreetSignProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-2 rounded-sign px-3.5 py-1.5 shadow-sign",
        variantStyles[variant],
        className
      )}
    >
      <span className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-white/40" />
      <span className="absolute -right-0.5 -bottom-0.5 h-1.5 w-1.5 rounded-full bg-black/10" />
      {code && <span className="signage-label opacity-70">{code}</span>}
      <span className="font-display text-sm font-semibold uppercase tracking-signage">
        {label}
      </span>
    </div>
  );
}
