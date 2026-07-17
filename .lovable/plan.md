
# Plan — Raport de comparație (MediSafe design vs designul nostru)

## Livrabil
Un singur fișier `Medisafe_Compare_MediSafeDesign_vs_Nostru.docx` salvat în `/mnt/documents/`, servit prin `<presentation-artifact>`. Structură clară pe capitole, gata pentru email sau pentru transpus în slide-uri.

## Metodologie
- Sursă pentru designul lor: cele 4 capturi (desktop first-screen, desktop full, mobile first-screen, mobile full) — le parcurg secțiune cu secțiune.
- Sursă pentru designul nostru: `src/routes/index.tsx`, `burger-menu.tsx`, `sticky-bottom-bar.tsx`, plus documentul de audit precedent (pentru continuitate de argument).
- Referință de judecată: cele două audituri UX/UI + ICP-ul caregiverului (aceleași pe care le-am folosit la runda anterioară).
- Fără schimbări de cod. Doar analiză și scris.

## Structura raportului (capitole)

**Cap 0 — Rezumat executiv (1 pagină)**
Top 3 zone conforme, top 3 zone divergente, verdict scurt pe fiecare din cele 3 dimensiuni cerute: funcțional/informațional, persuasiune (drum spre telefon/WhatsApp), psihologic (ICP).

**Cap 1 — Ce au păstrat conform (Zonele "aligned")**
Pentru fiecare: ce e, de ce funcționează, ce anxietate/nevoie ICP acoperă.
- H1 + eyebrow "MediSafe · București & Ilfov"
- CTA unic dominant "Sună acum și te ghidăm"
- 4 stat cards sub hero (Non-stop / Zone / Echipe proprii / Cost confirmat)
- Secțiunea "Ce se întâmplă după ce suni" cu 3 pași
- "Cele mai cerute" cu ancore de preț (de la X lei)
- Blocul de etică "Nu îți vindem un serviciu de care nu ai nevoie"
- FAQ ancorat pe anxietăți concrete
- Hero cu fața umană (asistentă + pacientă + medic) — chiar dacă fără nume

**Cap 2 — Ce au adăugat / schimbat (Zonele "divergente")**
Analiză per secțiune, cu verdict: OK / discutabil / risc.
- Bara de tabs "Vizite / Servicii / Zone acoperite" sub hero — verdict: risc de fricțiune, dublează navigația.
- Secțiunea "Cu ce te putem ajuta acasă" cu 4 scenarii (Părinte imobilizat / Recuperare post-operator / Copil bolnav / Îngrijire cronică) — verdict: adaos foarte bun, vorbește direct pe caz de utilizare, aliniat ICP.
- Blocul mare de stats "200.000+ / 10 / ~2h / din 2017" — verdict: OK, dar numărul 200.000+ trebuie susținut sau reformulat, altfel devine claim gol.
- "Sistemul MediSafe — Siguranța nu e o promisiune. E un sistem" cu screenshot de monitor dispecerat — verdict: excelent ca argument de proces, dar imaginea de monitor tehnic e rece; alternativă discutabilă.
- Bloc de testimoniale full cu 5/5 și "Vezi profilul verificat" — verdict: OK, mai puternic decât nota rezumat.
- Eliminarea sub-blocului "Echipa Simona/nume" — tratat separat, mai jos.

**Cap 3 — Fețe & identitate umană (punct sensibil)**
Poziția asumată: **le dau dreptate** cu argumentele lor (risc juridic-legal la asociere brand-persoană, fluctuație de personal, dependență de o singură față care poate pleca, protecție GDPR pentru angajați, coerență corporate).
Apoi: cum se poate păstra căldura fără portret individual identificabil:
- Uniforma MediSafe vizibilă (branding pe halat/tricou) în locul feței identificate.
- Cadre cu mâini care lucrează (mână care ține mâna pacientului, mână care pregătește o perfuzie).
- Focus pe pacient + îngrijitor din spate (fața pacientului contează, echipa e prezență).
- Colaj "echipa noastră" fără nume, doar rol + ani de experiență agregați ("Peste 40 de asistente medicale, media 8 ani experiență").
- Poză de echipă completă în uniformă (grup, nu individ).
Concluzie: hero-ul lor actual respectă deja acest principiu — chiar au reușit să păstreze o față caldă fără să lege brandul de un nume.

**Cap 4 — Persuasiune & drumul spre telefon/WhatsApp**
Analiză a fricțiunilor și a semnalelor de conversie pe designul lor, comparat cu al nostru.
- Câte click-uri/scroll-uri până la telefon (both above-the-fold, tie).
- Vizibilitatea WhatsApp — pe designul lor, WhatsApp apare doar în footer; pe al nostru, e pe sticky bar mobil cu icon verde. **Risc: pe designul lor, WhatsApp e semi-invizibil pentru caregiverul care nu vrea să vorbească la telefon.**
- Numărul de telefon în header pe ambele — OK.
- Absența sticky bottom bar pe mobil în designul lor — **risc mare de conversie**, mai ales pe scroll lung (au foarte multe secțiuni). Recomandare: să adopte sticky-ul.
- Trust anchors: 4,9 din 124 recenzii Google — prezent la ambele.
- Ancorele de preț "de la X lei" — prezente la ambele, bine.

**Cap 5 — Informațional (ce câștigă / ce pierde userul)**
- Câștig: secțiunea "Cu ce te putem ajuta acasă" pe scenarii de viață. Foarte puternic pentru caregiver.
- Câștig: "Sistemul MediSafe" educă despre proces (protocoale, dispecerat, follow-up).
- Câștig: stats-block dă context de scară companie.
- Pierdere: nu mai există prezența numelui individual = pierdere de intimacy, dar acceptabilă.
- Pierdere/risc: tabs-urile "Vizite / Servicii / Zone" fragmentează atenția în first-screen, chiar sub hero — riscă să scadă rata de click pe CTA principal.

**Cap 6 — Psihologic / ICP caregiver**
Mapare secțiune-cu-secțiune la anxietățile ICP:
- Vinovăție → acoperită de tonul "pentru tine sau pentru cineva drag" (păstrat).
- Frica de cost ascuns → acoperit dublu ("Cost confirmat" stat card + secțiunea de etică). Foarte bine.
- Frica de străini în casă → acoperit parțial. Fără portrete individuale, se sprijină doar pe uniformă + rating Google. Mai slab decât versiunea noastră, dar acceptabil.
- Nevoia de rapiditate → "~2h" în stats + "Non-stop" în hero cards. Bine.
- Nevoia de control/predictibilitate → "Ce se întâmplă după ce suni" + "Sistemul MediSafe". Foarte bine, chiar mai bine decât la noi.

**Cap 7 — Recomandări finale (short list acționabilă)**
3–5 recomandări clare, prioritizate P0/P1, formulate ca "păstrează X / schimbă Y / adaugă Z". Ex:
- P0: Adaugă sticky bottom bar mobil cu Sună + WhatsApp (icon verde).
- P0: Ridică WhatsApp din footer într-un loc vizibil constant.
- P1: Reevaluează tabs-urile sub hero — mută mai jos sau elimină.
- P1: Susține "200.000+" cu context (perioadă, tip vizite) sau reformulează.
- P2: Înlocuiește screenshot-ul de monitor rece cu o scenă caldă de dispecerat uman (operator la telefon, tot fără față identificată).

## Detalii tehnice de construcție
- Skill `docx` pentru generare: `docx-js` cu setup standard (Arial 12pt, headings 1–2 override, A4 default e OK, tabele cu DXA + columnWidths + cell width).
- Tabel "Conform / Divergent" cu 3 coloane (Secțiune / Verdict / Motiv) pentru cap 1 și cap 2 — mai ușor de pus în slide-uri.
- Fără capturi înglobate în DOCX (userul le pune singur în PPTX).
- Validare LibreOffice → PDF → pdftoppm → view pe fiecare pagină înainte de livrare.
- Fișier final: `/mnt/documents/Medisafe_Compare_MediSafeDesign_vs_Nostru.docx`, servit prin `<presentation-artifact>`.

## Ce NU fac
- Nu modific cod în aplicație.
- Nu regenerez auditul precedent — acesta e document nou, complementar.
- Nu includ recomandare "puneți Simona înapoi" — pe punctul fețelor, susțin poziția lor așa cum ai cerut.
