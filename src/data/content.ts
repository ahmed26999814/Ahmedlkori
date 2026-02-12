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
  type: "pdf" | "doc" | "img";
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
  url: string;
  locationHint: string;
  lat?: number;
  lng?: number;
};

export const siteMeta = {
  title: "مراجعات أحمد | Ahmed Study Hub",
  description:
    "مركز مراجعات وملخصات وروابط دراسة منظمة لطلاب الجامعة مع تجربة بحث وفلترة احترافية.",
  url: "https://example.com",
  ogImage: "/og.svg"
};

export const telegramReviews: TelegramReview[] = [
  {
    title: "مراجعة الكيمياء العضوية – الأساسيات",
    subject: "كيمياء عضوية",
    url: "https://t.me/example/organic101",
    tags: ["مهم", "مكثف", "أسئلة"],
    updatedAt: "2026-01-22"
  },
  {
    title: "مراجعة فيزياء 1 – حركة وقوى",
    subject: "فيزياء",
    url: "https://t.me/example/physics1",
    tags: ["شرح", "رسوم", "حلول"],
    updatedAt: "2026-01-18"
  },
  {
    title: "مراجعة تشريح 2 – الجهاز العصبي",
    subject: "تشريح",
    url: "https://t.me/example/anatomy2",
    tags: ["خرائط", "صور", "اختبار"],
    updatedAt: "2026-02-01"
  },
  {
    title: "مراجعة رياضيات متقدمة – التفاضل",
    subject: "رياضيات",
    url: "https://t.me/example/adv-math",
    tags: ["سريع", "أمثلة", "ملخص"],
    updatedAt: "2026-01-30"
  },
  {
    title: "مراجعة أحياء دقيقة – بكتيريا",
    subject: "أحياء دقيقة",
    url: "https://t.me/example/microbio",
    tags: ["رسوم", "جداول"],
    updatedAt: "2026-01-27"
  },
  {
    title: "مراجعة علم الأدوية – الجرعات",
    subject: "صيدلة",
    url: "https://t.me/example/pharma",
    tags: ["حساب", "ملخص"],
    updatedAt: "2026-01-15"
  },
  {
    title: "مراجعة برمجة 1 – أساسيات C++",
    subject: "برمجة",
    url: "https://t.me/example/cpp",
    tags: ["كود", "أسئلة"],
    updatedAt: "2026-02-03"
  },
  {
    title: "مراجعة لغة إنجليزية – المصطلحات",
    subject: "إنجليزي",
    url: "https://t.me/example/english-terms",
    tags: ["Vocabulary", "نطق"],
    updatedAt: "2026-01-11"
  },
  {
    title: "مراجعة شبكات – طبقات OSI",
    subject: "شبكات",
    url: "https://t.me/example/networks",
    tags: ["رسوم", "سريع"],
    updatedAt: "2026-02-05"
  },
  {
    title: "مراجعة إحصاء – التوزيعات",
    subject: "إحصاء",
    url: "https://t.me/example/stats",
    tags: ["أمثلة", "حلول"],
    updatedAt: "2026-01-08"
  },
  {
    title: "مراجعة محاسبة – القوائم المالية",
    subject: "محاسبة",
    url: "https://t.me/example/accounting",
    tags: ["تلخيص", "قوائم"],
    updatedAt: "2026-01-05"
  },
  {
    title: "مراجعة نظم تشغيل – إدارة الذاكرة",
    subject: "نظم تشغيل",
    url: "https://t.me/example/os",
    tags: ["رسوم", "أسئلة"],
    updatedAt: "2026-02-07"
  }
];

export const whatsappGroups: WhatsAppGroup[] = [
  {
    title: "مجموعة حل واجبات الفيزياء",
    subject: "فيزياء",
    url: "https://chat.whatsapp.com/example/physics",
    membersHint: "+220 طالب"
  },
  {
    title: "مجموعة المذاكرة اليومية - تشريح",
    subject: "تشريح",
    url: "https://chat.whatsapp.com/example/anatomy",
    membersHint: "+180 طالب"
  },
  {
    title: "مجموعة برمجة المشاريع",
    subject: "برمجة",
    url: "https://chat.whatsapp.com/example/programming",
    membersHint: "+350 طالب"
  },
  {
    title: "مجموعة ملخصات الكيمياء",
    subject: "كيمياء",
    url: "https://chat.whatsapp.com/example/chem",
    membersHint: "+160 طالب"
  },
  {
    title: "مجموعة مناقشة الشبكات",
    subject: "شبكات",
    url: "https://chat.whatsapp.com/example/networks",
    membersHint: "+140 طالب"
  },
  {
    title: "مجموعة اقتصاد ومحاسبة",
    subject: "محاسبة",
    url: "https://chat.whatsapp.com/example/accounting",
    membersHint: "+120 طالب"
  },
  {
    title: "مجموعة اللغة الإنجليزية",
    subject: "إنجليزي",
    url: "https://chat.whatsapp.com/example/english",
    membersHint: "+90 طالب"
  },
  {
    title: "مجموعة مراجعة الإحصاء",
    subject: "إحصاء",
    url: "https://chat.whatsapp.com/example/stats",
    membersHint: "+110 طالب"
  }
];

export const summaries: SummaryFile[] = [
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
    url: "https://example.com/university-app",
    locationHint: "منصة رقمية",
    lat: 21.3891,
    lng: 39.8579
  }
];
