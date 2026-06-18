import { Phone } from "lucide-react";
import { Logo } from "./logo";
import { BurgerMenu } from "./burger-menu";
import { PHONE_DISPLAY, PHONE_TEL } from "./data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-surface-warm/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-2xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2.5 px-4 py-3">
        <a href="/" aria-label="MediSafe homepage" className="shrink-0">
          <Logo />
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="mx-auto inline-flex min-w-0 items-center gap-2 rounded-full bg-navy px-3.5 py-2 text-[13.5px] font-semibold text-white shadow-sm transition-transform active:scale-[0.98]"
        >
          <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
          <span className="truncate">{PHONE_DISPLAY}</span>
        </a>
        <BurgerMenu />
      </div>
    </header>
  );
}