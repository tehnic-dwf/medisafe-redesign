import { cn } from "@/lib/utils";

export function Logo({ className, tone = "navy" }: { className?: string; tone?: "navy" | "white" }) {
  const ink = tone === "white" ? "#ffffff" : "#0c2340";
  const accent = "#2db5e5";
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-[1px] font-display text-[1.55rem] leading-none font-extrabold tracking-tight",
        className,
      )}
      aria-label="MediSafe"
    >
      <span style={{ color: ink }}>Med</span>
      <span className="relative inline-block" style={{ color: accent }}>
        i
        <span
          aria-hidden
          className="absolute left-1/2 top-[-0.35em] block h-[0.35em] w-[0.35em] -translate-x-1/2 rounded-full"
          style={{ background: accent }}
        />
      </span>
      <span style={{ color: ink }}>Safe</span>
    </span>
  );
}