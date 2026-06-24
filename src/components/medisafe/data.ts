export const PHONE_DISPLAY = "+40 790 911 112";
export const PHONE_TEL = "+40790911112";
export const WHATSAPP_HREF = "https://wa.me/40790911112";

export type ServiceItem = {
  name: string;
  href: string;
  badge?: "popular" | "24h";
};

export type ServiceGroup = {
  id: string;
  label: string;
  items: ServiceItem[];
};

export const POPULAR_SERVICES: ServiceItem[] = [
  { name: "Injecții la domiciliu", href: "#", badge: "popular" },
  { name: "Perfuzii la domiciliu", href: "#", badge: "popular" },
  { name: "Îngrijiri plăgi și escare", href: "#", badge: "popular" },
  { name: "Recoltare analize", href: "#" },
];

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "adulti",
    label: "Servicii medicale adulți",
    items: [
      { name: "Injecții", href: "#", badge: "popular" },
      { name: "Perfuzii", href: "#", badge: "popular" },
      { name: "Îngrijiri plăgi", href: "#", badge: "popular" },
      { name: "Tratamente escare", href: "#", badge: "popular" },
      { name: "Recoltare analize", href: "#" },
      { name: "Monitorizare funcții vitale", href: "#" },
      { name: "Scoatere fire operație", href: "#" },
      { name: "Spălătură auriculară", href: "#" },
      { name: "Aspirație endotraheală", href: "#" },
      { name: "Sondă urinară", href: "#" },
      { name: "Clismă evacuatorie", href: "#" },
      { name: "Proceduri terapeutice", href: "#" },
    ],
  },
  {
    id: "copii",
    label: "Servicii medicale copii",
    items: [
      { name: "Recoltare analize copii", href: "#" },
      { name: "Injecții copii", href: "#" },
      { name: "Perfuzii copii", href: "#" },
      { name: "Monitorizare funcții vitale", href: "#" },
      { name: "Îngrijiri plăgi", href: "#" },
    ],
  },
  {
    id: "consultatii",
    label: "Consultații medicale",
    items: [
      { name: "Medicină internă", href: "#" },
      { name: "Cardiologie", href: "#" },
      { name: "Neurologie", href: "#" },
      { name: "Diabet și nutriție", href: "#" },
      { name: "Geriatrie", href: "#" },
    ],
  },
];

export const PROMO_HREF = "#";