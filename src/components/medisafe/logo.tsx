import { cn } from "@/lib/utils";
import logoAsset from "@/assets/medisafe-logo.svg.asset.json";

export function Logo({ className, tone = "navy" }: { className?: string; tone?: "navy" | "white" }) {
  return (
    <img
      src={logoAsset.url}
      alt="MediSafe"
      className={cn("h-8 w-auto select-none", className)}
      style={tone === "white" ? { filter: "brightness(0) invert(1)" } : undefined}
      draggable={false}
    />
  );
}