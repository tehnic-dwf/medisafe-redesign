import { useState } from "react";
import {
  CalendarCheck,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Tag,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  POPULAR_SERVICES,
  PROMO_HREF,
  SERVICE_GROUPS,
  WHATSAPP_HREF,
} from "./data";
import { cn } from "@/lib/utils";

export function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>("adulti");

  const toggleGroup = (id: string) => setActiveGroup((curr) => (curr === id ? null : id));

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Deschide meniul"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-surface text-navy transition-colors hover:bg-secondary"
        >
          <Menu className="h-5 w-5" strokeWidth={2.25} />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-full border-l-0 bg-surface-warm p-0 sm:max-w-md [&>button.absolute]:hidden"
      >
        <div className="flex h-full flex-col">
          {/* Menu header */}
          <SheetHeader className="border-b border-hairline bg-surface px-5 py-4">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <SheetTitle className="m-0 min-w-0 p-0 text-left">
                <Logo />
              </SheetTitle>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Închide meniul"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-secondary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-5 pb-32 pt-5">
            {/* Popular services - pinned at top */}
            <section aria-labelledby="popular-heading" className="mb-6">
              <h3
                id="popular-heading"
                className="mb-2 flex items-center gap-1.5 px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-deep"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Cele mai cerute
              </h3>
              <ul className="overflow-hidden rounded-2xl border border-brand/30 bg-surface shadow-[0_1px_0_oklch(0.72_0.13_232/0.08)]">
                {POPULAR_SERVICES.map((svc, i) => (
                  <li key={svc.name}>
                    <a
                      href={svc.href}
                      className={cn(
                        "flex items-center justify-between gap-3 px-4 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-secondary",
                        i !== POPULAR_SERVICES.length - 1 && "border-b border-hairline",
                      )}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {svc.name}
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-ink-muted" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* All service categories - accordion */}
            <section aria-labelledby="services-heading" className="mb-6">
              {/* Tarife / Costuri - distinct accent link, mirrors promo styling */}
              <a
                href="#tarife"
                className="mb-4 flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-br from-navy to-navy-soft px-4 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-transform active:scale-[0.99]"
              >
                <span className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    <Tag className="h-3 w-3" />
                    Prețuri
                  </span>
                  Tarife / Costuri
                </span>
                <ChevronRight className="h-4 w-4 shrink-0" />
              </a>

              <h3
                id="services-heading"
                className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted"
              >
                Toate serviciile MediSafe
              </h3>
              <div className="space-y-2">
                {SERVICE_GROUPS.map((group) => {
                  const isOpen = activeGroup === group.id;
                  return (
                    <div
                      key={group.id}
                      className="overflow-hidden rounded-2xl border border-hairline bg-surface"
                    >
                      <button
                        type="button"
                        onClick={() => toggleGroup(group.id)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-[15px] font-semibold text-navy"
                      >
                        <span>{group.label}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200",
                            isOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {isOpen && (
                        <ul className="border-t border-hairline bg-secondary/40">
                          {group.items.map((item, i) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={cn(
                                  "flex items-center justify-between gap-3 px-4 py-3 text-[14.5px] text-navy transition-colors hover:bg-surface",
                                  i !== group.items.length - 1 && "border-b border-hairline/70",
                                )}
                              >
                                <span className="flex items-center gap-2.5">
                                  <span
                                    className={cn(
                                      "h-1.5 w-1.5 shrink-0 rounded-full",
                                      item.badge === "popular"
                                        ? "bg-brand"
                                        : "bg-ink-muted/40",
                                    )}
                                  />
                                  <span className="min-w-0 truncate">{item.name}</span>
                                  {item.badge === "popular" && (
                                    <span className="shrink-0 rounded-full bg-brand/12 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-deep">
                                      Cerut
                                    </span>
                                  )}
                                </span>
                                <ChevronRight className="h-4 w-4 shrink-0 text-ink-muted" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}

                {/* Promo as distinct accent */}
                <a
                  href={PROMO_HREF}
                  className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-br from-navy to-navy-soft px-4 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-transform active:scale-[0.99]"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="rounded-full bg-brand/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Ofertă
                    </span>
                    Pachete promoționale
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </section>

            {/* Frequently asked questions - reduce anxiety */}
            <section aria-labelledby="faq-heading" className="mb-6">
              <h3
                id="faq-heading"
                className="mb-2 flex items-center gap-1.5 px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-deep"
              >
                <HelpCircle className="h-3.5 w-3.5" />
                Întrebări frecvente
              </h3>
              <ul className="overflow-hidden rounded-2xl border border-brand/30 bg-surface shadow-[0_1px_0_oklch(0.72_0.13_232/0.08)]">
                {[
                  { q: "Cât de repede ajunge echipa la mine?", href: "#faq" },
                  { q: "Cum aflu cât costă, înainte să decid?", href: "#faq" },
                  { q: "În ce zone din București și Ilfov veniți?", href: "#faq" },
                ].map((item, i, arr) => (
                  <li key={item.q}>
                    <a
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between gap-3 px-4 py-3.5 text-[14.5px] font-semibold text-navy transition-colors hover:bg-secondary",
                        i !== arr.length - 1 && "border-b border-hairline",
                      )}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {item.q}
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-ink-muted" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Secondary nav */}
            <nav aria-label="Pagini secundare" className="mb-4 grid grid-cols-2 gap-2">
              {[
                { name: "Despre MediSafe", href: "#" },
                { name: "Echipa noastră", href: "#" },
                { name: "Tarife", href: "#" },
                { name: "Întrebări frecvente", href: "#" },
                { name: "Recenzii", href: "#" },
                { name: "Contact", href: "#" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-xl border border-hairline bg-surface px-3 py-2.5 text-[13.5px] font-medium text-navy transition-colors hover:bg-secondary"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Footer-equivalent info block - only what's not already visible above */}
            <section
              aria-label="Informații companie"
              className="rounded-2xl border border-hairline bg-surface p-4"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-navy/8 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-navy">
                  București &amp; Ilfov
                </span>
                <span className="inline-flex items-center gap-1 text-[11.5px] font-medium text-ink-muted">
                  <CalendarCheck className="h-3.5 w-3.5" />
                  Activăm din 2017
                </span>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
                Servicii medicale la domiciliu, cu echipe proprii. Confirmăm
                telefonic disponibilitatea, costul și pașii înainte ca echipa
                să ajungă la tine.
              </p>
              <div className="mt-3 flex items-start gap-2 text-[13px] text-navy">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" />
                <span>P-ța Națiunile Unite nr. 3–5, Sector 4, București</span>
              </div>
              <div className="mt-4 border-t border-hairline pt-3 text-[11.5px] leading-relaxed text-ink-muted">
                <p>
                  © {new Date().getFullYear()} Vital Medical Concept SRL · CUI
                  RO 38173670
                </p>
                <a
                  href="#"
                  className="mt-1 inline-block font-semibold text-brand-deep underline-offset-4 hover:underline"
                >
                  Confidențialitate
                </a>
              </div>
            </section>
          </div>

          {/* Sticky bottom CTA inside menu */}
          <div className="border-t border-hairline bg-surface px-5 py-4 shadow-[0_-8px_24px_-12px_oklch(0.24_0.06_252/0.18)]">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center justify-center gap-2.5 rounded-full bg-navy px-5 py-3.5 text-[15px] font-semibold text-white transition-transform active:scale-[0.99]"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-center text-[12.5px] text-ink-muted">
              Răspundem și confirmăm vizita la telefon · 24/24h
            </p>
            <a
              href={WHATSAPP_HREF}
              className="mt-2 block text-center text-[13px] font-semibold text-brand-deep underline-offset-4 hover:underline"
            >
              Sau scrie-ne pe WhatsApp →
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}