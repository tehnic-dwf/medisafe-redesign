import { MessageCircle, Phone } from "lucide-react";
import { PHONE_TEL, WHATSAPP_HREF } from "./data";

export function StickyBottomBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-hairline bg-surface/95 backdrop-blur-md"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0px)" }}
    >
      <div className="mx-auto flex max-w-2xl items-stretch gap-2 px-3 py-2.5">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-navy px-4 py-3 text-[14.5px] font-semibold text-white shadow-[0_6px_20px_-8px_oklch(0.24_0.06_252/0.5)] transition-transform active:scale-[0.99]"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          Sună acum
        </a>
        <a
          href={WHATSAPP_HREF}
          aria-label="Scrie-ne pe WhatsApp"
          className="inline-flex w-14 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface text-navy transition-colors hover:bg-secondary"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2.25} />
        </a>
      </div>
    </div>
  );
}