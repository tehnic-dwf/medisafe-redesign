import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Droplets,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Star,
  Stethoscope,
  Syringe,
  TestTube2,
} from "lucide-react";
import { Fragment, useState } from "react";

import { SiteHeader } from "@/components/medisafe/site-header";
import { StickyBottomBar } from "@/components/medisafe/sticky-bottom-bar";
import { Logo } from "@/components/medisafe/logo";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_HREF } from "@/components/medisafe/data";
import { cn } from "@/lib/utils";

import heroNurse from "@/assets/hero-nurse.jpg";
import teamDoctor from "@/assets/team-doctor.jpg";
import teamNurse1 from "@/assets/team-nurse-1.jpg";
import teamNurse2 from "@/assets/team-nurse-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "MediSafe — Servicii medicale la domiciliu în București și Ilfov",
      },
      {
        name: "description",
        content:
          "Injecții, perfuzii, plăgi, escare, analize la tine acasă. Te sunăm, confirmăm disponibilitatea, costul și pașii înainte ca echipa MediSafe să ajungă.",
      },
      {
        property: "og:title",
        content: "MediSafe — Servicii medicale la domiciliu",
      },
      {
        property: "og:description",
        content:
          "Nu ești singur cu decizia asta. Echipa MediSafe vine acasă la tine, îți explică clar ce se întâmplă și îți confirmă totul înainte să ajungă.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-surface-warm pb-24 text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <Steps />
        <ServicePillars />
        <Expectations />
        <Team />
        <Testimonials />
        <Authority />
        <Faq />
      </main>
      <SiteFooter />
      <StickyBottomBar />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO — single CTA, real protagonist, static trust line             */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-2xl px-4 pb-8 pt-6">
        {/* Eyebrow */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-navy">
            Disponibili acum · București &amp; Ilfov
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[2.05rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-navy sm:text-[2.4rem]">
          Pentru cineva drag,
          <br />
          îngrijire medicală acasă, cu{" "}
          <span className="relative whitespace-nowrap">
            calm
            <svg
              aria-hidden
              viewBox="0 0 120 12"
              className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8 C 30 2, 60 2, 118 7"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </h1>

        {/* Subhead */}
        <p className="mt-4 text-[15.5px] leading-[1.5] text-ink-muted">
          Te ghidăm la telefon și îți confirmăm costul și pașii{" "}
          <span className="font-semibold text-navy">înainte</span> ca echipa să ajungă la ușă.
        </p>

        {/* Hero photo */}
        <div className="relative mt-5 overflow-hidden rounded-[28px] border border-hairline bg-surface shadow-[0_24px_60px_-30px_oklch(0.24_0.06_252/0.45)]">
          <div className="relative aspect-[4/5] w-full">
            <img
              src={heroNurse}
              alt="Asistentă medicală MediSafe, parte din echipa care vine acasă la pacienți în București și Ilfov"
              width={1280}
              height={1536}
              className="absolute inset-0 h-full w-full object-cover object-[center_top]"
              fetchPriority="high"
            />
          </div>
          {/* Floating identity card on the photo */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 rounded-2xl bg-surface/95 px-3.5 py-2.5 shadow-lg backdrop-blur-sm">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-white">
              <Stethoscope className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[13.5px] font-semibold text-navy">
                Simona, asistentă șefă MediSafe
              </p>
              <p className="truncate text-[12px] text-ink-muted">
                Coordonează echipele de teren · 9 ani experiență
              </p>
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="mt-5 space-y-3">
          {/* Google rating anchor — single dominant trust signal next to CTA */}
          <a
            href="https://www.google.com/search?q=medisafe+bucuresti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-[12.5px] text-ink-muted"
          >
            <span className="flex items-center gap-0.5 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
              ))}
            </span>
            <span className="font-semibold text-navy">4.9</span>
            <span>din 119 recenzii Google</span>
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            id="hero-primary-cta"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-navy px-5 py-4 text-[15.5px] font-semibold text-white shadow-[0_18px_36px_-18px_oklch(0.24_0.06_252/0.6)] transition-transform active:scale-[0.99]"
          >
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-1.5 bg-brand"
            />
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Sună acum și te ghidăm
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="text-center text-[12.5px] text-ink-muted">
            Răspundem 24/24h · Confirmăm costul înainte de vizită · Fără apăsare să cumperi
          </p>
          <a
            href={WHATSAPP_HREF}
            className="flex items-center justify-center gap-2 text-[14px] font-semibold text-brand-deep underline-offset-4 hover:underline"
          >
            <MessageCircle className="h-4 w-4" />
            Sau scrie-ne pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TRUST STRIP — 3 static benefits + single dominant rating           */
/* ------------------------------------------------------------------ */
function TrustStrip() {
  const items = [
    { icon: Clock3, label: "Disponibil 24/24h", sub: "Răspuns telefonic constant" },
    { icon: MapPin, label: "București & Ilfov", sub: "Echipe proprii MediSafe" },
    { icon: ShieldCheck, label: "Cost confirmat", sub: "Înainte de programare" },
  ];
  return (
    <section aria-label="Argumente cheie" className="mx-auto max-w-2xl px-4 pb-6">
      <ul className="divide-y divide-hairline rounded-2xl border border-hairline bg-surface px-1">
        {items.map(({ icon: Icon, label, sub }) => (
          <li key={label} className="flex items-center gap-3 px-3 py-3.5">
            <Icon className="h-5 w-5 shrink-0 text-brand-deep" strokeWidth={2} />
            <div className="min-w-0">
              <p className="truncate text-[14px] font-semibold text-navy">{label}</p>
              <p className="truncate text-[12.5px] text-ink-muted">{sub}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Single dominant rating */}
      <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-navy px-4 py-3 text-white">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex shrink-0 items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-brand text-brand" />
            ))}
          </div>
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold">
              4,9 / 5 pe Google · 119 recenzii
            </p>
            <p className="truncate text-[11.5px] text-white/70">
              Recenzii publice, verificabile pe Google
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  STEPS — "Ce se întâmplă după ce suni?"                              */
/* ------------------------------------------------------------------ */
function Steps() {
  const steps = [
    {
      n: "01",
      title: "Ne spui nevoia pacientului",
      body: "Serviciul dorit, zona din București sau Ilfov și eventualele recomandări medicale.",
    },
    {
      n: "02",
      title: "Confirmăm telefonic costul și ora",
      body: "Știi exact ce urmează înainte să fie programată vizita — fără surprize la final.",
    },
    {
      n: "03",
      title: "Echipa vine acasă la tine",
      body: "Te anunțăm telefonic înainte să ajungă. Venim cu toate consumabilele incluse în preț.",
    },
  ];
  return (
    <section
      aria-labelledby="steps-heading"
      className="mx-auto max-w-2xl px-4 py-10"
    >
      <header className="mb-6">
        <p className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand-deep">
          Cum lucrăm
        </p>
        <h2
          id="steps-heading"
          className="font-display text-[1.75rem] font-extrabold leading-tight text-navy"
        >
          Ce se întâmplă după ce suni
        </h2>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">
          Îți explicăm pe scurt ce se poate face acasă, ce trebuie pregătit și
          când poate ajunge echipa.
        </p>
      </header>

      <ol className="space-y-3">
        {steps.map((step, i) => (
          <Fragment key={step.n}>
            <li className="relative rounded-2xl border border-hairline bg-surface p-4 pl-5">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                <span className="font-display text-[2rem] font-extrabold leading-none text-brand">
                  {step.n}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[15.5px] font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink-muted">
                    {step.body}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-9 top-full block h-3 w-px bg-hairline"
                />
              )}
            </li>
            {i === 1 && (
              <li className="list-none py-1">
                <a
                  href="#tarife"
                  className="flex items-center justify-center gap-2 text-[13.5px] font-semibold text-brand-deep underline-offset-4 hover:underline"
                >
                  Vezi toate tarifele și costurile
                  <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SERVICE PILLARS — 4 cards, popular badge sparingly                  */
/* ------------------------------------------------------------------ */
function ServicePillars() {
  const pillars = [
    {
      icon: Syringe,
      name: "Injecții la domiciliu",
      price: "de la 70 lei",
      sub: "i.v. · i.m. · s.c. · intradermică",
      popular: true,
    },
    {
      icon: Droplets,
      name: "Perfuzii la domiciliu",
      price: "de la 150 lei",
      sub: "Hidratare, vitamine, minerale",
      popular: true,
    },
    {
      icon: HeartPulse,
      name: "Îngrijiri plăgi și escare",
      price: "de la 140 lei",
      sub: "Echipă specializată, consumabile incluse",
      popular: true,
    },
    {
      icon: TestTube2,
      name: "Recoltare analize",
      price: "de la 100 lei",
      sub: "Rezultate rapide, fără drum la laborator",
    },
  ];
  return (
    <section
      aria-labelledby="pillars-heading"
      className="mx-auto max-w-2xl px-4 py-10"
    >
      <header className="mb-6">
        <p className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand-deep">
          Serviciile cele mai cerute
        </p>
        <h2
          id="pillars-heading"
          className="font-display text-[1.75rem] font-extrabold leading-tight text-navy"
        >
          Cu ce te putem ajuta acasă
        </h2>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">
          Nu știi exact ce serviciu îți trebuie? Ne spui recomandarea medicală
          și confirmăm noi opțiunea potrivită.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {pillars.map(({ icon: Icon, name, price, sub, popular }) => (
          <li key={name}>
            <a
              href="#"
              className="group flex h-full flex-col gap-3 rounded-2xl border border-hairline bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_18px_36px_-24px_oklch(0.24_0.06_252/0.45)]"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand-deep">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                {popular && (
                  <span className="shrink-0 rounded-full bg-navy/5 px-2 py-1 text-[10.5px] font-bold uppercase tracking-wider text-navy">
                    Cel mai cerut
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <h3 className="text-[15.5px] font-semibold leading-tight text-navy">
                  {name}
                </h3>
                <p className="mt-1 text-[12.5px] text-ink-muted">{sub}</p>
                <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success-deep">
                  <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />
                  Consumabile + deplasare incluse
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between gap-2 border-t border-hairline pt-3">
                <span className="text-[13px] font-semibold text-brand-deep">
                  {price}
                </span>
                <span className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-navy">
                  Vezi detalii
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="mt-4 flex items-center justify-center gap-2 rounded-full border border-hairline bg-surface px-4 py-3 text-[14px] font-semibold text-navy transition-colors hover:bg-secondary"
      >
        Vezi toate serviciile și tarifele
        <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EXPECTATIONS — 2 columns, warm tone (TruMed adapted)               */
/* ------------------------------------------------------------------ */
function Expectations() {
  const ours = [
    "Te anunțăm telefonic înainte să ajungă echipa la tine.",
    "Venim cu toate consumabilele necesare, incluse în preț.",
    "Dacă o procedură nu e potrivită sau sigură pentru cazul tău, îți spunem direct.",
    "Gestionăm corect deșeurile medicale, în siguranță.",
  ];
  const yours = [
    "Spune-ne cât mai exact ce simptome sau nevoi are pacientul.",
    "Pregătește recomandarea medicală, dacă există una.",
    "Asigură un loc liniștit pentru procedură (5–10 minute pregătire).",
    "Achiziționează medicația injectabilă recomandată, dacă e cazul.",
  ];
  return (
    <section
      aria-labelledby="expectations-heading"
      className="bg-navy py-12 text-white"
    >
      <div className="mx-auto max-w-2xl px-4">
        <header className="mb-6">
          <p className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand">
            Fără surprize
          </p>
          <h2
            id="expectations-heading"
            className="font-display text-[1.75rem] font-extrabold leading-tight"
          >
            Ca să fie totul clar, de la început
          </h2>
          <p className="mt-2 text-[14.5px] leading-relaxed text-white/70">
            Două liste scurte: ce facem noi pentru tine și cum ne ajuți tu să
            ajungem pregătiți.
          </p>
        </header>

        <div className="grid gap-3 sm:grid-cols-2">
          <ExpectationCard title="Ce poți aștepta de la MediSafe" items={ours} tone="brand" />
          <ExpectationCard title="Ce ne ajută pe noi să te ajutăm" items={yours} tone="muted" />
        </div>
      </div>
    </section>
  );
}

function ExpectationCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "brand" | "muted";
}) {
  return (
    <div className="rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10 backdrop-blur-sm">
      <h3 className="mb-3 text-[14.5px] font-semibold">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <CheckCircle2
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                tone === "brand" ? "text-brand" : "text-white/40",
              )}
              strokeWidth={2.25}
            />
            <span className="text-[13.5px] leading-snug text-white/85">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  TEAM — real faces + names                                          */
/* ------------------------------------------------------------------ */
function Team() {
  const team = [
    {
      img: teamDoctor,
      name: "Dr. Mihail Voicescu",
      role: "Medic coordonator · medicină internă",
      quote: "„Explic clar ce urmează, înainte să facem.”",
    },
    {
      img: teamNurse1,
      name: "Simona",
      role: "Asistentă șefă · 9 ani la domiciliu",
      quote: "„Vin cu calm. Pacientul simte asta primul.”",
    },
    {
      img: teamNurse2,
      name: "Cristina",
      role: "Asistentă · plăgi și escare",
      quote: "„Tratamentul corect e cel care nu doare în plus.”",
    },
  ];
  return (
    <section
      aria-labelledby="team-heading"
      className="mx-auto max-w-2xl px-4 py-12"
    >
      <header className="mb-6">
        <p className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand-deep">
          Echipa care vine la tine acasă
        </p>
        <h2
          id="team-heading"
          className="font-display text-[1.75rem] font-extrabold leading-tight text-navy"
        >
          Aceeași echipă care ți-a răspuns la telefon vine și la ușă
        </h2>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">
          În spatele fiecărui apel e o persoană cu nume și experiență
          medicală — exact persoana care va suna la ușa ta.
        </p>
      </header>

      <ul className="space-y-3">
        {team.map((person) => (
          <li
            key={person.name}
            className="overflow-hidden rounded-2xl border border-hairline bg-surface"
          >
            <div className="grid grid-cols-[112px_minmax(0,1fr)] gap-0">
              <img
                src={person.img}
                alt={`${person.name}, ${person.role}`}
                width={800}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="min-w-0 p-4">
                <h3 className="text-[15px] font-semibold leading-tight text-navy">
                  {person.name}
                </h3>
                <p className="mt-0.5 text-[12.5px] text-ink-muted">{person.role}</p>
                <p className="mt-2 text-[13px] italic leading-snug text-navy/80">
                  {person.quote}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS — real Google reviews, attributed                     */
/* ------------------------------------------------------------------ */
function Testimonials() {
  const reviews = [
    {
      text: "Totul a fost prompt, steril, protocoale clare, empatie și profesionalism. Escara mamei s-a vindecat, iar acum este totul bine.",
      name: "Florentina Anghel",
      context: "Tratament escare la domiciliu",
    },
    {
      text: "Mulțumiri Dr. Mihail Voicescu și asistentei care l-a însoțit. Au fost empatici, atenți, răbdători. Am adăugat valoare vieții tatălui meu prin echipa asta.",
      name: "Roxana-Mihaela Tudose",
      context: "Consultație medicală la domiciliu",
    },
  ];
  return (
    <section
      aria-labelledby="reviews-heading"
      className="bg-secondary/40 py-12"
    >
      <div className="mx-auto max-w-2xl px-4">
        <header className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-brand-deep text-brand-deep"
                />
              ))}
            </div>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand-deep">
              4,9 / 5 · 119 recenzii Google
            </p>
          </div>
          <h2
            id="reviews-heading"
            className="font-display text-[1.75rem] font-extrabold leading-tight text-navy"
          >
            Ce spun pacienții și aparținătorii
          </h2>
        </header>

        <ul className="space-y-3">
          {reviews.map((r) => (
            <li
              key={r.name}
              className="relative rounded-2xl border border-hairline bg-surface p-5"
            >
              <Quote
                aria-hidden
                className="absolute right-4 top-4 h-7 w-7 text-brand/25"
              />
              <p className="text-[14.5px] leading-relaxed text-navy/90">
                {r.text}
              </p>
              <div className="mt-3 flex items-center justify-between gap-2 border-t border-hairline pt-3">
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-semibold text-navy">
                    {r.name}
                  </p>
                  <p className="truncate text-[11.5px] text-ink-muted">
                    {r.context}
                  </p>
                </div>
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                  Verificat · Google
                </span>
              </div>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="mt-4 flex items-center justify-center gap-2 text-[13.5px] font-semibold text-brand-deep underline-offset-4 hover:underline"
        >
          Citește toate cele 119 recenzii pe Google
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  AUTHORITY — institutional credentials, discreet                    */
/* ------------------------------------------------------------------ */
function Authority() {
  const items = [
    "Colegiul Medicilor din România",
    "Direcția de Sănătate Publică",
    "Ministerul Sănătății",
    "OAMGMAMR",
    "ANPC — SAL/SOL",
  ];
  return (
    <section
      aria-labelledby="auth-heading"
      className="mx-auto max-w-2xl px-4 py-10"
    >
      <h2
        id="auth-heading"
        className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-muted"
      >
        Autorizați și înregistrați la
      </h2>
      <ul className="flex flex-wrap gap-2">
        {items.map((i) => (
          <li
            key={i}
            className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-3 py-1.5 text-[12px] font-medium text-navy"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-brand-deep" />
            {i}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[12.5px] leading-relaxed text-ink-muted">
        Echipa MediSafe reunește personal medical cu experiență cumulată de
        peste 30 de ani în îngrijiri la domiciliu. Compania activează din 2017
        sub Vital Medical Concept SRL.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ — compact accordion                                            */
/* ------------------------------------------------------------------ */
function Faq() {
  const faqs = [
    {
      q: "Cât de repede ajunge echipa la mine?",
      a: "În majoritatea cazurilor, în aceeași zi sau în ziua următoare. La telefon îți confirmăm intervalul exact înainte de programare.",
    },
    {
      q: "Cum aflu cât costă, înainte să decid?",
      a: "După ce ne spui ce ai nevoie, îți confirmăm telefonic costul total — inclusiv consumabile și deplasare. Fără surprize la final.",
    },
    {
      q: "Am nevoie de o recomandare medicală?",
      a: "Pentru injecții și perfuzii avem nevoie de recomandare medicală. Pentru analize sau îngrijiri plăgi te putem ghida la telefon.",
    },
    {
      q: "În ce zone din București și Ilfov veniți?",
      a: "Acoperim tot Bucureștiul și Ilfovul. Confirmăm la telefon dacă adresa ta intră în programul echipei pentru ziua respectivă.",
    },
  ];
  return (
    <section
      aria-labelledby="faq-heading"
      className="mx-auto max-w-2xl px-4 py-10"
    >
      <header className="mb-6">
        <p className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand-deep">
          Răspundem rapid
        </p>
        <h2
          id="faq-heading"
          className="font-display text-[1.75rem] font-extrabold leading-tight text-navy"
        >
          Întrebări frecvente
        </h2>
      </header>

      <ul className="space-y-2">
        {faqs.map((f, i) => (
          <FaqItem key={f.q} {...f} defaultOpen={i === 0} />
        ))}
      </ul>

      <div className="mt-6 rounded-2xl border border-hairline bg-surface p-4">
        <p className="text-[13.5px] text-ink-muted">
          Nu găsești răspunsul? Sună-ne și îți răspundem cu calm, fără să te
          împingem să programezi ceva înainte să fim siguri că e ce-ți trebuie.
        </p>
        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-deep underline-offset-4 hover:underline"
        >
          <Phone className="h-4 w-4" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}

function FaqItem({
  q,
  a,
  defaultOpen,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <li className="overflow-hidden rounded-2xl border border-hairline bg-surface">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
      >
        <span className="text-[14.5px] font-semibold text-navy">{q}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <div className="border-t border-hairline px-4 py-3.5">
          <p className="text-[13.5px] leading-relaxed text-ink-muted">{a}</p>
        </div>
      )}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */
function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-hairline bg-navy text-white">
      <div className="mx-auto max-w-2xl px-4 py-10">
        <div className="flex items-center gap-3">
          <Logo tone="white" />
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider">
            București &amp; Ilfov
          </span>
        </div>
        <p className="mt-3 max-w-md text-[13px] leading-relaxed text-white/70">
          Servicii medicale la domiciliu, cu echipe proprii. Confirmăm
          telefonic disponibilitatea, costul și pașii înainte ca echipa să
          ajungă la tine.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-[13.5px]">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 font-semibold hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  className="inline-flex items-center gap-2 hover:underline"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  P-ța Națiunile Unite nr. 3–5, Sector 4, București
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand">
              Despre noi
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[13.5px] text-white/80">
              <li><a href="#" className="hover:underline">Echipa</a></li>
              <li><a href="#" className="hover:underline">Servicii</a></li>
              <li><a href="#" className="hover:underline">Tarife</a></li>
              <li><a href="#" className="hover:underline">Recenzii</a></li>
              <li><a href="#" className="hover:underline">Întrebări</a></li>
              <li><a href="#" className="hover:underline">Confidențialitate</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-[11.5px] text-white/55">
          <p>
            © {new Date().getFullYear()} Vital Medical Concept SRL · CUI RO 38173670
          </p>
          <p className="inline-flex items-center gap-1">
            <CalendarCheck className="h-3.5 w-3.5" />
            Activăm din 2017
          </p>
        </div>
      </div>
    </footer>
  );
}

