export type TelegramReview = {
  title: string;
  subject: string;
  url: string;
  tags: string[];
  updatedAt: string;
  level: "L1";
  semester: "S1" | "S2";
  yearLabel: string;
};

export type WhatsAppGroup = {
  title: string;
  subject: string;
  url: string;
  membersHint: string;
};

export type SummaryFile = {
  title: string;
  subject: string;
  type: "pdf" | "doc" | "img" | "folder";
  url: string;
  size: string;
  year: number;
  term: "الأول" | "الثاني" | "الصيفي";
  tags: string[];
  featured?: boolean;
  updatedAt: string;
};

export type Place = {
  name: string;
  desc: string;
  url?: string;
  locationHint?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  phones?: string[];
  lat?: number;
  lng?: number;
};

export const siteMeta = {
  title: "مراجعات أحمد الكوري",
  description:
    "مركز مراجعات وملخصات وروابط دراسة منظمة لطلاب الجامعة مع تجربة بحث وفلترة احترافية.",
  url: "https://example.com",
  ogImage: "/og.svg"
};

export const telegramReviews: TelegramReview[] = [
  {
    title: "Biologie cellulaire — 2024-2025",
    subject: "Biologie cellulaire",
    url: "https://t.me/+lYx1rhWxXvUwOGFk",
    tags: ["S1"],
    updatedAt: "2026-02-12",
    level: "L1",
    semester: "S1",
    yearLabel: "2024-2025"
  },
  {
    title: "Biologie cellulaire — 2025-2026",
    subject: "Biologie cellulaire",
    url: "https://t.me/+4NiZXL4U3YRiMzRk",
    tags: ["S1"],
    updatedAt: "2026-02-12",
    level: "L1",
    semester: "S1",
    yearLabel: "2025-2026"
  },
  {
    title: "Découverte de la biologie — قريبًا",
    subject: "Découverte de la biologie",
    url: "",
    tags: ["S1", "قريبًا"],
    updatedAt: "2026-02-12",
    level: "L1",
    semester: "S1",
    yearLabel: "قريبًا"
  },
  {
    title: "Biologie cellulaire 2 (S2) — قريبًا",
    subject: "Biologie cellulaire 2",
    url: "",
    tags: ["S2", "قريبًا"],
    updatedAt: "2026-02-12",
    level: "L1",
    semester: "S2",
    yearLabel: "قريبًا"
  },
  {
    title: "Embryologie et Histologie — قريبًا",
    subject: "Embryologie et Histologie",
    url: "",
    tags: ["S2", "قريبًا"],
    updatedAt: "2026-02-12",
    level: "L1",
    semester: "S2",
    yearLabel: "قريبًا"
  }
];

export const whatsappGroups: WhatsAppGroup[] = [
  {
    title: "مجموعة عامة لشرح Module Bio",
    subject: "Module Bio",
    url: "https://chat.whatsapp.com/ErBhW3Rdq5p53Gsl4Veerq?mode=gi_t",
    membersHint: "عام"
  }
];

export const summaries: SummaryFile[] = [
  {
    title: "ملفات Biologie cellulaire (S1) — مجلد",
    subject: "Biologie cellulaire",
    type: "folder",
    url: "https://drive.google.com/drive/folders/1Jk6mFbBt2GXxom6kLU_kAG430cU5qqj3",
    size: "Google Drive",
    year: 2024,
    term: "الأول",
    tags: ["S1", "مجلد", "Biologie"],
    featured: true,
    updatedAt: "2026-02-12"
  },
  {
    title: "ملفات Découverte de la biologie (S1) — مجلد",
    subject: "Découverte de la biologie",
    type: "folder",
    url: "https://drive.google.com/drive/folders/1Doi9goQtYAQxYPx8JwG3CAGowvS_47FL",
    size: "Google Drive",
    year: 2024,
    term: "الأول",
    tags: ["S1", "مجلد"],
    updatedAt: "2026-02-12"
  },
  {
    title: "ملفات Biologie cellulaire 2 (S2) — مجلد",
    subject: "Biologie cellulaire 2",
    type: "folder",
    url: "https://drive.google.com/drive/folders/19PeyM3kYgnV03Vt58kM26o2yHzrX-vQA",
    size: "Google Drive",
    year: 2025,
    term: "الثاني",
    tags: ["S2", "مجلد"],
    updatedAt: "2026-02-12"
  },
  {
    title: "ملفات Embryologie et Histologie (S2) — مجلد",
    subject: "Embryologie et Histologie",
    type: "folder",
    url: "https://drive.google.com/drive/folders/1eFvKp18bHteG4-0WysyrD-bvw8SQaBFP",
    size: "Google Drive",
    year: 2025,
    term: "الثاني",
    tags: ["S2", "مجلد"],
    updatedAt: "2026-02-12"
  }
];

export const places: Place[] = [
  {
    name: "تطبيق جامعتك",
    desc: "بوابتك الرسمية للمحاضرات والموارد والاختبارات.",
    appStoreUrl: "https://apps.apple.com/mr/app/jamaatak/id6754469286?l=ar",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bac.exo",
    url: "https://example.com/university-app",
    locationHint: "منصة رقمية"
  },
  {
    name: "مركز نحو التميز — صكوك",
    desc: "",
    phones: ["41852127"]
  },
  {
    name: "مركز نحو التميز — لكبيد",
    desc: "",
    phones: ["43585926"]
  }
];


