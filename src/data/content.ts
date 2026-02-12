export type TelegramReview = {
  title: string;
  subject: string;
  url: string;
  tags: string[];
  updatedAt: string;
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
  lat?: number;
  lng?: number;
};

export const siteMeta = {
  title: "مراجعات أحمد الكوري | Ahmed Study Hub",
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
    tags: ["سنة 2024-2025"],
    updatedAt: "2026-02-12"
  },
  {
    title: "Biologie cellulaire — 2025-2026",
    subject: "Biologie cellulaire",
    url: "https://t.me/+4NiZXL4U3YRiMzRk",
    tags: ["سنة 2025-2026"],
    updatedAt: "2026-02-12"
  },
  {
    title: "Découverte de la biologie (S1) — 2024-2025",
    subject: "Découverte de la biologie (S1)",
    url: "https://t.me/+nT1RJwFG9pBlNDZk",
    tags: ["S1", "سنة 2024-2025"],
    updatedAt: "2026-02-12"
  },
  {
    title: "Découverte de la biologie (S1) — 2025-2026",
    subject: "Découverte de la biologie (S1)",
    url: "https://t.me/+U9b_jKVNMoUyMDI0",
    tags: ["S1", "سنة 2025-2026"],
    updatedAt: "2026-02-12"
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
    title: "ملخص الكيمياء العضوية – خرائط ذهنية",
    subject: "كيمياء عضوية",
    type: "pdf",
    url: "https://drive.google.com/file/d/example-organic/view",
    size: "12MB",
    year: 2025,
    term: "الأول",
    tags: ["خرائط", "مكثف"],
    featured: true,
    updatedAt: "2026-02-08"
  },
  {
    title: "ملخص فيزياء 1 – قوانين + أمثلة",
    subject: "فيزياء",
    type: "pdf",
    url: "https://drive.google.com/file/d/example-physics/view",
    size: "9MB",
    year: 2025,
    term: "الأول",
    tags: ["قوانين", "أمثلة"],
    featured: true,
    updatedAt: "2026-02-02"
  },
  {
    title: "ملخص تشريح 2 – الجهاز العصبي",
    subject: "تشريح",
    type: "pdf",
    url: "https://drive.google.com/file/d/example-anatomy/view",
    size: "15MB",
    year: 2025,
    term: "الثاني",
    tags: ["صور", "جداول"],
    featured: true,
    updatedAt: "2026-01-29"
  },
  {
    title: "ملخص برمجة 1 – أساسيات C++",
    subject: "برمجة",
    type: "pdf",
    url: "https://drive.google.com/file/d/example-cpp/view",
    size: "6MB",
    year: 2025,
    term: "الأول",
    tags: ["كود", "مشاريع"],
    updatedAt: "2026-02-04"
  },
  {
    title: "ملخص شبكات – OSI & TCP/IP",
    subject: "شبكات",
    type: "pdf",
    url: "https://drive.google.com/file/d/example-networks/view",
    size: "8MB",
    year: 2024,
    term: "الثاني",
    tags: ["رسوم", "طبقات"],
    updatedAt: "2026-01-20"
  },
  {
    title: "ملخص أحياء دقيقة – بكتيريا",
    subject: "أحياء دقيقة",
    type: "pdf",
    url: "https://drive.google.com/file/d/example-microbio/view",
    size: "10MB",
    year: 2025,
    term: "الثاني",
    tags: ["رسوم", "مقارنات"],
    updatedAt: "2026-02-06"
  },
  {
    title: "ملخص إحصاء – التوزيعات",
    subject: "إحصاء",
    type: "pdf",
    url: "https://drive.google.com/file/d/example-stats/view",
    size: "7MB",
    year: 2024,
    term: "الأول",
    tags: ["أمثلة", "تمارين"],
    updatedAt: "2026-01-12"
  },
  {
    title: "ملخص اقتصاد – مبادئ السوق",
    subject: "اقتصاد",
    type: "doc",
    url: "https://drive.google.com/file/d/example-economy/view",
    size: "2MB",
    year: 2024,
    term: "الثاني",
    tags: ["مبادئ", "رسوم"],
    updatedAt: "2026-01-16"
  },
  {
    title: "ملخص محاسبة – القوائم المالية",
    subject: "محاسبة",
    type: "pdf",
    url: "https://drive.google.com/file/d/example-accounting/view",
    size: "11MB",
    year: 2024,
    term: "الثاني",
    tags: ["قوائم", "مهم"],
    updatedAt: "2026-01-09"
  },
  {
    title: "ملخص علم الأدوية – الجرعات",
    subject: "صيدلة",
    type: "pdf",
    url: "https://drive.google.com/file/d/example-pharma/view",
    size: "5MB",
    year: 2025,
    term: "الثاني",
    tags: ["حساب", "جداول"],
    updatedAt: "2026-01-28"
  },
  {
    title: "بطاقات مصطلحات إنجليزي طبي",
    subject: "إنجليزي",
    type: "img",
    url: "https://drive.google.com/file/d/example-english/view",
    size: "18 صور",
    year: 2023,
    term: "الأول",
    tags: ["بطاقات", "نطق"],
    updatedAt: "2026-01-02"
  },
  {
    title: "ملخص رياضيات متقدمة – التفاضل",
    subject: "رياضيات",
    type: "pdf",
    url: "https://drive.google.com/file/d/example-math/view",
    size: "6MB",
    year: 2024,
    term: "الأول",
    tags: ["قوانين", "حلول"],
    updatedAt: "2026-02-01"
  },
  {
    title: "ملخص نظم تشغيل – إدارة الذاكرة",
    subject: "نظم تشغيل",
    type: "pdf",
    url: "https://drive.google.com/file/d/example-os/view",
    size: "9MB",
    year: 2024,
    term: "الثاني",
    tags: ["رسوم", "مفاهيم"],
    updatedAt: "2026-02-07"
  },
  {
    title: "ملخص لغة عربية – البلاغة",
    subject: "لغة عربية",
    type: "doc",
    url: "https://drive.google.com/file/d/example-arabic/view",
    size: "3MB",
    year: 2023,
    term: "الأول",
    tags: ["قواعد", "أمثلة"],
    updatedAt: "2026-01-06"
  }
];

export const places: Place[] = [
  {
    name: "تطبيق جامعتك",
    desc: "بوابتك الرسمية للمحاضرات والموارد والاختبارات.",
    appStoreUrl: "https://apps.apple.com/mr/app/jamaatak/id6754469286?l=ar",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bac.exo",
    url: "https://example.com/university-app",
    locationHint: "منصة رقمية",
    lat: 21.3891,
    lng: 39.8579
  }
];
