export type DisciplineKey =
  | 'all'
  | 'bim-iso'
  | 'revit'
  | 'dynamo'
  | 'navisworks'
  | 'ai-twin';

export type ContentKind = 'all' | 'videos' | 'books' | 'magazine';

export interface VideoLesson {
  id: string;
  number: string;
  title: string;
  duration: string;
  summary: string;
  keyTopics: string[];
}

export interface VideoCourse {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  discipline: Exclude<DisciplineKey, 'all'>;
  disciplineLabel: string;
  instructor: string;
  level: string;
  lessonsCount: number;
  totalDuration: string;
  year: string;
  thumbnail: string;
  accentTone: 'cobalt' | 'slate' | 'bronze' | 'forest';
  youtubeUrl: string;
  description: string;
  lessons: VideoLesson[];
}

export interface BookChapter {
  number: string;
  title: string;
  pages: string;
  excerpt: string;
}

export interface BimBook {
  id: string;
  accessionCode: string;
  title: string;
  subtitle: string;
  author: string;
  discipline: Exclude<DisciplineKey, 'all'>;
  disciplineLabel: string;
  pages: number;
  year: string;
  edition: string;
  language: string;
  coverImage?: string;
  coverVariant: 'wireframe' | 'orthographic' | 'parametric' | 'grid' | 'coordination' | 'gis';
  downloadUrl: string;
  description: string;
  chapters: BookChapter[];
}

export interface MagazineIssue {
  id: string;
  issueNumber: string;
  title: string;
  theme: string;
  discipline: Exclude<DisciplineKey, 'all'>;
  disciplineLabel: string;
  releaseDate: string;
  pages: number;
  featuredArticles: string[];
  pdfUrl: string;
}

export interface LearningPath {
  id: string;
  index: string;
  title: string;
  role: string;
  durationEstimate: string;
  description: string;
  discipline: Exclude<DisciplineKey, 'all'>;
  recommendedBookIds: string[];
  recommendedVideoIds: string[];
  outcomes: string[];
}

export const HERO_STUDIO_IMAGE = '/src/assets/images/hero_bimarabia_studio_1794547818332.jpg';
export const VIDEO_COORDINATION_IMAGE = '/src/assets/images/video_revit_coordination_1794547819607.jpg';
export const BOOK_ROAD_IMAGE = '/src/assets/images/book_road_to_bim_1794547818391.jpg';
export const BOOK_ISO_IMAGE = '/src/assets/images/book_iso_19650_1794547817931.jpg';
export const BOOK_DYNAMO_IMAGE = '/src/assets/images/book_ai_dynamo_1794547819157.jpg';

export const DISCIPLINE_OPTIONS: { key: DisciplineKey; label: string }[] = [
  { key: 'all', label: 'جميع التخصصات' },
  { key: 'bim-iso', label: 'BIM & ISO 19650' },
  { key: 'revit', label: 'Autodesk Revit' },
  { key: 'dynamo', label: 'Dynamo & الأتمتة' },
  { key: 'navisworks', label: 'Navisworks & التنسيق' },
  { key: 'ai-twin', label: 'الذكاء الاصطناعي & GIS' },
];

export const VIDEO_COURSES: VideoCourse[] = [
  {
    id: 'vid-revit-mep-arch',
    code: 'CRS-01',
    title: 'السلسلة الشاملة لاحتراف Autodesk Revit والتنسيق الهندسي',
    subtitle: 'من إعداد القوالب والنمذجة المعمارية والإنشائية والـ MEP حتى إخراج اللوحات التنفيذية',
    discipline: 'revit',
    disciplineLabel: 'Autodesk Revit',
    instructor: 'م. عمر سليم',
    level: 'مبتدئ إلى متقدم',
    lessonsCount: 48,
    totalDuration: '16 ساعة 40 دقيقة',
    year: '2025',
    thumbnail: VIDEO_COORDINATION_IMAGE,
    accentTone: 'cobalt',
    youtubeUrl: 'https://www.youtube.com/@BIMarabia/playlists',
    description:
      'دورة تطبيقية كاملة باللغة العربية تغطي دورة العمل الاحترافية في برنامج Revit بدءاً من ضبط المناسيب والمحاور والربط المرجعي (Link Models) وصولاً إلى بناء العائلات البارامترية (Families) وحصر الكميات والاختبارات المهنية.',
    lessons: [
      {
        id: 'l-rev-1',
        number: '01',
        title: 'تهيئة بيئة المشروع، المناسيب، والمحاور الهندسية المشتركة',
        duration: '24:15',
        summary: 'إنشاء ملف القالب المؤسسي وضبط نقاط المساحة المشتركة (Shared Coordinates) بين المعماري والإنشائي والكهروميكانيك.',
        keyTopics: ['Shared Coordinates', 'Copy/Monitor', 'Project Templates (.rte)'],
      },
      {
        id: 'l-rev-2',
        number: '02',
        title: 'النمذجة المعمارية والإنشائية وفق مستويات التفاصيل LOD 300',
        duration: '31:40',
        summary: 'نمذجة الحوائط المركبة، البلاطات، الأعمدة، والكمرات مع ربط البيانات الوصفية لكل عنصر.',
        keyTopics: ['LOD 300', 'Compound Walls', 'Structural Framing'],
      },
      {
        id: 'l-rev-3',
        number: '03',
        title: 'أنظمة التكييف والسباكة والكهرباء Revit MEP Routing',
        duration: '38:10',
        summary: 'توزيع مجاري الهواء (Ducts) والمواسير وحوامل الكابلات مع احترام الفراغات السقفية ومتطلبات الصيانة.',
        keyTopics: ['HVAC Ducting', 'Slope Piping', 'Cable Trays'],
      },
      {
        id: 'l-rev-4',
        number: '04',
        title: 'بناء العائلات البارامترية Parametric Families من الصفر',
        duration: '29:50',
        summary: 'استخدام مستويات المرجع والمعادلات والـ Shared Parameters لإنشاء عناصر ذكية قابلة للجدولة.',
        keyTopics: ['Reference Planes', 'Shared Parameters', 'Lookup Tables'],
      },
      {
        id: 'l-rev-5',
        number: '05',
        title: 'جداول حصر الكميات الذكية وإخراج لوحات التنفيذ Shop Drawings',
        duration: '26:30',
        summary: 'توليد جداول الحصر التلقائية وتصدير اللوحات بمعايير الترقيم الموحدة.',
        keyTopics: ['Schedules & Quantities', 'View Templates', 'Sheet Management'],
      },
    ],
  },
  {
    id: 'vid-dynamo-automation',
    code: 'CRS-02',
    title: 'كورس البرمجة البصرية Dynamo for Revit وأتمتة المهام الهندسية',
    subtitle: 'أتمتة المهام التكرارية، ربط Excel، ومعالجة البيانات الضخمة داخل نماذج الريفيت',
    discipline: 'dynamo',
    disciplineLabel: 'Dynamo & الأتمتة',
    instructor: 'م. عمر سليم',
    level: 'متوسط إلى متقدم',
    lessonsCount: 34,
    totalDuration: '11 ساعة 25 دقيقة',
    year: '2025',
    thumbnail: BOOK_DYNAMO_IMAGE,
    accentTone: 'slate',
    youtubeUrl: 'https://www.youtube.com/@BIMarabia/playlists',
    description:
      'مسار عملي لإزالة الأعمال الروتينية باستخدام البرمجة المرئية في Dynamo. يتعلم المهندس التعامل مع القوائم، قراءة وكتابة بيانات Excel، ترقيم العناصر آلياً، وبناء نصوص Python مختصرة داخل العقد البرمجية.',
    lessons: [
      {
        id: 'l-dyn-1',
        number: '01',
        title: 'معمارية العقد البرمجية وإدارة القوائم List Management',
        duration: '22:10',
        summary: 'فهم بنية البيانات في Dynamo (Lacing, Levels, Flattening) وتطبيقها على عناصر Revit.',
        keyTopics: ['List@Level', 'Lacing Modes', 'Element Selection'],
      },
      {
        id: 'l-dyn-2',
        number: '02',
        title: 'الربط ثنائي الاتجاه مع جداول Excel وتحديث البارامترات',
        duration: '27:45',
        summary: 'تصدير بيانات الغرف والأبواب إلى Excel وتعديلها ثم إعادتها للنموذج بضغطة زر.',
        keyTopics: ['Data.ExportExcel', 'Parameter.SetValue', 'QA/QC Checks'],
      },
      {
        id: 'l-dyn-3',
        number: '03',
        title: 'إنشاء الواجهات البارامترية المعقدة Adaptive Components',
        duration: '34:00',
        summary: 'توليد واجهات كاسرات شمس ديناميكية متجاوبة مع زوايا الإشعاع الشمسي.',
        keyTopics: ['Computational Geometry', 'Sun Path Analysis', 'Adaptive Panels'],
      },
      {
        id: 'l-dyn-4',
        number: '04',
        title: 'أتمتة إنشاء اللوحات وترقيم الغرف والأعمدة آلياً',
        duration: '25:15',
        summary: 'تجهيز سكربتات إنتاجية توفر ساعات العمل في المشاريع الكبرى عبر Dynamo Player.',
        keyTopics: ['Dynamo Player', 'Auto-Sheet Creation', 'Python Script Node'],
      },
    ],
  },
  {
    id: 'vid-iso-management',
    code: 'CRS-03',
    title: 'إدارة مشاريع البيم ومعيار ISO 19650 وخطة التنفيذ BEP',
    subtitle: 'المعيار الدولي لإدارة المعلومات، بيئة البيانات المشتركة CDE، وهيكلة فرق البيم',
    discipline: 'bim-iso',
    disciplineLabel: 'BIM & ISO 19650',
    instructor: 'م. عمر سليم',
    level: 'جميع المستويات',
    lessonsCount: 28,
    totalDuration: '9 ساعة 50 دقيقة',
    year: '2026',
    thumbnail: BOOK_ISO_IMAGE,
    accentTone: 'bronze',
    youtubeUrl: 'https://www.youtube.com/@BIMarabia/playlists',
    description:
      'شرح تطبيقي شامل لمنظومة إدارة المعلومات وفق سلسلة معايير ISO 19650، بدءاً من صياغة متطلبات تبادل المعلومات EIR وصولاً إلى إعداد خطة تنفيذ البيم BEP وإدارة حالات الملفات (WIP, Shared, Published, Archived).',
    lessons: [
      {
        id: 'l-iso-1',
        number: '01',
        title: 'منهجية ISO 19650: المفاهيم والأطراف والأدوار التعاقدية',
        duration: '28:30',
        summary: 'الفرق بين Appointing Party و Lead Appointed Party وآليات تسليم المعلومات.',
        keyTopics: ['OIR / AIR / PIR / EIR', 'Information Management', 'Task Teams'],
      },
      {
        id: 'l-iso-2',
        number: '02',
        title: 'بناء خطة تنفيذ البيم BEP (Pre & Post Contract)',
        duration: '33:20',
        summary: 'تحليل بنود خطة التنفيذ، مصفوفة المسؤوليات RACI، ومعايير التسمية Naming Convention.',
        keyTopics: ['Pre-Contract BEP', 'MIDP & TIDP', 'Responsibility Matrix'],
      },
      {
        id: 'l-iso-3',
        number: '03',
        title: 'إدارة بيئة البيانات المشتركة CDE وضبط الجودة',
        duration: '24:40',
        summary: 'تنظيم مجلدات العمل والمراجعة والاعتماد ومنع تداول النسخ غير المعتمدة.',
        keyTopics: ['WIP / Shared / Published', 'Status Codes', 'Revision Control'],
      },
      {
        id: 'l-iso-4',
        number: '04',
        title: 'ملفات التبادل المفتوحة OpenBIM ومعيار IFC و COBie',
        duration: '29:05',
        summary: 'تصدير بيانات الأصول لإدارة المرافق والتشغيل والصيانة بعد التسليم.',
        keyTopics: ['OpenBIM', 'IFC Schema', 'COBie Asset Data'],
      },
    ],
  },
  {
    id: 'vid-navisworks-clash',
    code: 'CRS-04',
    title: 'التنسيق الهندسي واكتشاف التعارضات والمحاكاة 4D/5D عبر Navisworks',
    subtitle: 'فحص التداخلات بين التخصصات، مصفوفة الفحص Clash Matrix، وربط الجدول الزمني',
    discipline: 'navisworks',
    disciplineLabel: 'Navisworks & التنسيق',
    instructor: 'م. عمر سليم',
    level: 'متوسط',
    lessonsCount: 24,
    totalDuration: '8 ساعة 15 دقيقة',
    year: '2025',
    thumbnail: VIDEO_COORDINATION_IMAGE,
    accentTone: 'forest',
    youtubeUrl: 'https://www.youtube.com/@BIMarabia/playlists',
    description:
      'برنامج عملي يركز على دور منسق البيم (BIM Coordinator) في تجميع النماذج الفيدرالية، تشغيل اختبارات التعارضات، تصفية التداخلات الحقيقية، إصدار تقارير التنسيق، ومحاكاة مراحل التشييد الزمنية.',
    lessons: [
      {
        id: 'l-nav-1',
        number: '01',
        title: 'تجميع النماذج الفيدرالية (NWC / NWD / NWF) ومعالجة الإحداثيات',
        duration: '19:45',
        summary: 'الفرق بين صيغ ملفات نافيسوركس وإعداد مجموعات البحث Search Sets التلقائية.',
        keyTopics: ['Federated Model', 'Search Sets', 'NWF vs NWD'],
      },
      {
        id: 'l-nav-2',
        number: '02',
        title: 'تصميم مصفوفة التعارضات Clash Matrix وإدارة الأولويات',
        duration: '30:20',
        summary: 'إجراء اختبارات Hard & Clearance Clash وتجميع التعارضات المتكررة (Grouping) وتصدير BCF.',
        keyTopics: ['Clash Detective', 'Tolerance Rules', 'BCF Reports'],
      },
      {
        id: 'l-nav-3',
        number: '03',
        title: 'محاكاة البعد الرابع 4D TimeLiner والربط مع Primavera P6',
        duration: '27:10',
        summary: 'عرض تتابع أعمال التنفيذ في الموقع ومقارنة المخطط بالفعلي بصرياً.',
        keyTopics: ['TimeLiner 4D', 'Primavera P6 Link', 'Construction Sequence'],
      },
    ],
  },
  {
    id: 'vid-ai-aec-forma',
    code: 'CRS-05',
    title: 'الذكاء الاصطناعي التوليدي والتوائم الرقمية في العمارة والتشييد',
    subtitle: 'تطبيقات Autodesk Forma، التخطيط العمراني الذكي، والتكامل مع نظم GIS',
    discipline: 'ai-twin',
    disciplineLabel: 'الذكاء الاصطناعي & GIS',
    instructor: 'م. عمر سليم',
    level: 'متوسط إلى متقدم',
    lessonsCount: 22,
    totalDuration: '7 ساعة 40 دقيقة',
    year: '2026',
    thumbnail: HERO_STUDIO_IMAGE,
    accentTone: 'cobalt',
    youtubeUrl: 'https://www.youtube.com/@BIMarabia/playlists',
    description:
      'سلسلة حديثة تستكشف أدوات الذكاء الاصطناعي في المراحل الأولية للتصميم وتحليل الرياح والضوضاء والطاقة الشمسية، بالإضافة إلى ربط نماذج البيم مع نظم المعلومات الجغرافية GIS وبناء التوأم الرقمي Digital Twin.',
    lessons: [
      {
        id: 'l-ai-1',
        number: '01',
        title: 'التصميم التوليدي وتحليل الموقع في Autodesk Forma',
        duration: '25:40',
        summary: 'استغلال التحليلات الفورية للشمس والرياح والضوضاء في تشكيل الكتل العمرانية.',
        keyTopics: ['Generative Design', 'Microclimate Analysis', 'Forma to Revit'],
      },
      {
        id: 'l-ai-2',
        number: '02',
        title: 'بناء التوأم الرقمي Digital Twin وتكامل BIM مع GIS',
        duration: '31:15',
        summary: 'ربط الحساسات الذكية IoT ببيانات المبنى وتحليل الأداء التشغيلي.',
        keyTopics: ['Digital Twins', 'BIM-GIS Integration', 'IoT Telemetry'],
      },
      {
        id: 'l-ai-3',
        number: '03',
        title: 'توظيف نماذج اللغة الكبيرة في كتابة سكربتات Dynamo و pyRevit',
        duration: '23:50',
        summary: 'تسريع تطوير الإضافات البرمجية ومراجعة مواصفات العقود الهندسية بالذكاء الاصطناعي.',
        keyTopics: ['pyRevit', 'AI Scripting', 'Automated QA'],
      },
    ],
  },
  {
    id: 'vid-bim-talks',
    code: 'CRS-06',
    title: 'حوارات وندوات بيم أرابيا (BIM Talks) ومستقبل التشييد الرقمي',
    subtitle: 'لقاءات مهنية مع خبراء ومديري مشاريع البيم في الوطن العربي وحول العالم',
    discipline: 'bim-iso',
    disciplineLabel: 'BIM & ISO 19650',
    instructor: 'م. عمر سليم ونخبة الخبراء',
    level: 'جميع المستويات',
    lessonsCount: 36,
    totalDuration: '18 ساعة 00 دقيقة',
    year: '2026',
    thumbnail: BOOK_ROAD_IMAGE,
    accentTone: 'bronze',
    youtubeUrl: 'https://www.youtube.com/@BIMarabia/playlists',
    description:
      'أرشيف الجلسات الحوارية الأسبوعية لمجتمع بيم أرابيا حول تحديات التحول الرقمي في المشاريع الكبرى، العائد الاقتصادي للبيم، إدارة المرافق، ومسارات التطور الوظيفي للمهندس العربي.',
    lessons: [
      {
        id: 'l-tlk-1',
        number: '01',
        title: 'كيف تبني مسارك المهني كمدير أو منسق BIM ناجح؟',
        duration: '42:00',
        summary: 'خارطة المهارات التقنية والإدارية المطلوبة في أسواق الخليج والمنطقة العربية.',
        keyTopics: ['BIM Career Path', 'Portfolio', 'Leadership'],
      },
      {
        id: 'l-tlk-2',
        number: '02',
        title: 'تحديات تطبيق البيم في المشاريع الحكومية الضخمة',
        duration: '48:30',
        summary: 'دراسة حالات واقعية لتذليل عقبات المقاولين والاستشاريين في مرحلة التنفيذ.',
        keyTopics: ['Mega Projects', 'Stakeholder Alignment', 'Handover'],
      },
    ],
  },
];

export const BIM_BOOKS: BimBook[] = [
  {
    id: 'book-road-to-bim',
    accessionCode: 'BK-01',
    title: 'الطريق إلى البيم',
    subtitle: 'الدليل المرجعي الشامل لفهم وتطبيق نمذجة معلومات البناء في المكاتب والشركات الهندسية',
    author: 'م. عمر سليم',
    discipline: 'bim-iso',
    disciplineLabel: 'BIM & ISO 19650',
    pages: 214,
    year: '2024',
    edition: 'الطبعة الرابعة المنقحة',
    language: 'العربية',
    coverImage: BOOK_ROAD_IMAGE,
    coverVariant: 'wireframe',
    downloadUrl: 'https://bimarabia.com/book',
    description:
      'يُعد كتاب «الطريق إلى البيم» أحد أبرز المراجع العربية التأسيسية التي تضع المهندس وصاحب القرار أمام خريطة واضحة للتحول من الرسم ثنائي الأبعاد CAD إلى منظومة النمذجة المعلوماتية BIM، مع تفصيل الأدوار، المعايير، وحساب العائد على الاستثمار.',
    chapters: [
      {
        number: 'الفصل 01',
        title: 'لماذا البيم؟ التحول من الرسم الهندسي إلى إدارة المعلومات',
        pages: '12 – 44',
        excerpt:
          'لا يقتصر التحول إلى نمذجة معلومات البناء على استبدال برنامج بآخر، بل هو إعادة هندسة كاملة لدورة حياة المشروع بحيث يصبح النموذج الرقمي مصدراً وحيداً للحقيقة الهندسية من الفكرة الأولية حتى الهدم أو إعادة التأهيل.',
      },
      {
        number: 'الفصل 02',
        title: 'أبعاد البيم (3D حتى 7D) ومستويات التطوير LOD 100–500',
        pages: '45 – 92',
        excerpt:
          'يحدد مستوى التطوير (Level of Development) درجة الموثوقية الهندسية والمعلوماتية لكل عنصر في النموذج؛ فالعنصر في مرحلة التصميم الابتدائي يختلف في بياناته الهندسية والتعاقدية عنه في مرحلة التنفيذ الفعلي (As-Built).',
      },
      {
        number: 'الفصل 03',
        title: 'بناء فريق البيم وخطط التنفيذ BEP داخل المؤسسات',
        pages: '93 – 158',
        excerpt:
          'تتوزع المسؤوليات داخل فريق البيم بين منسق النماذج، أخصائي النمذجة، ومدير البيم الذي يربط بين أهداف المالك الفنية والمتطلبات التعاقدية عبر وثيقة خطة تنفيذ البيم.',
      },
      {
        number: 'الفصل 04',
        title: 'دراسات حالة وقياس العائد على الاستثمار (ROI)',
        pages: '159 – 214',
        excerpt:
          'أظهرت المشاريع التي التزمت باكتشاف التعارضات المبكر عبر النماذج المنسقة انخفاضاً ملموساً في أوامر التغيير الموقعية وتقليصاً في الهدر المادي والزمني.',
      },
    ],
  },
  {
    id: 'book-iso-19650',
    accessionCode: 'BK-02',
    title: 'إدارة معلومات البناء وفق معيار ISO 19650',
    subtitle: 'شرح تطبيقي مبسط لأجزاء المعيار الدولي وبيئة البيانات المشتركة CDE',
    author: 'م. عمر سليم وفريق بيم أرابيا',
    discipline: 'bim-iso',
    disciplineLabel: 'BIM & ISO 19650',
    pages: 186,
    year: '2025',
    edition: 'الطبعة الثانية',
    language: 'العربية',
    coverImage: BOOK_ISO_IMAGE,
    coverVariant: 'orthographic',
    downloadUrl: 'https://bimarabia.com/book',
    description:
      'مرجع عملي يترجم ويفصل بنود المعيار الدولي ISO 19650-1/2/3/5 إلى خطوات إجرائية قابلة للتطبيق في المشاريع العربية، مع قوالب جاهزة لـ EIR و BEP و MIDP وضوابط أمن المعلومات.',
    chapters: [
      {
        number: 'الفصل 01',
        title: 'هيكلة المعيار الدولي وتدفق متطلبات المعلومات (OIR → EIR)',
        pages: '10 – 52',
        excerpt:
          'تبدأ رحلة إدارة المعلومات من أهداف المؤسسة المالكة (OIR) ومتطلبات الأصول (AIR)، لتتبلور عند طرح المشروع في وثيقة متطلبات تبادل المعلومات (EIR).',
      },
      {
        number: 'الفصل 02',
        title: 'إدارة مراحل التسليم وتقييم قدرات الفرق الهندسية',
        pages: '53 – 110',
        excerpt:
          'قبل الترسية، يقدم الفريق المرشح خطة تنفيذ أولية (Pre-Appointment BEP) ومصفوفة القدرات التقنية لإثبات الجاهزية التكنولوجية.',
      },
      {
        number: 'الفصل 03',
        title: 'تنظيم بيئة البيانات المشتركة CDE وحالات الاعتماد الأربعة',
        pages: '111 – 186',
        excerpt:
          'تعمل بيئة البيانات المشتركة كبوابة تحقق صارمة تمنع تسرب ملفات العمل قيد التطوير (WIP) إلى فرق التنفيذ قبل اجتيازها بوابات المراجعة والمشاركة (Shared) ثم الاعتماد (Published).',
      },
    ],
  },
  {
    id: 'book-dynamo-ai',
    accessionCode: 'BK-03',
    title: 'الدينامو والذكاء الاصطناعي في العمارة والهندسة',
    subtitle: 'مدخل تطبيقي للبرمجة البصرية والتصميم التوليدي وأتمتة الريفيت',
    author: 'م. عمر سليم',
    discipline: 'dynamo',
    disciplineLabel: 'Dynamo & الأتمتة',
    pages: 240,
    year: '2025',
    edition: 'الطبعة الثالثة',
    language: 'العربية',
    coverImage: BOOK_DYNAMO_IMAGE,
    coverVariant: 'parametric',
    downloadUrl: 'https://bimarabia.com/book',
    description:
      'يجمع الكتاب بين أساسيات البرمجة البصرية في Dynamo وتطبيقات الذكاء الاصطناعي التوليدي الحديثة، ليمنح المهندس قدرة على بناء أدواته الخاصة ومعالجة النماذج المعقدة بسرعة فائقة.',
    chapters: [
      {
        number: 'الفصل 01',
        title: 'من التفكير التقليدي إلى التفكير الخوارزمي البارامتري',
        pages: '14 – 68',
        excerpt:
          'في التصميم البارامتري لا نرسم عنصراً ثابتاً، بل نصمم منظومة علاقات منطقية ورياضية تنتج بدائل متعددة تتكيف لحظياً مع تغير المعطيات.',
      },
      {
        number: 'الفصل 02',
        title: 'التحكم في بيانات Revit وأتمتة الفحص الآلي QA/QC',
        pages: '69 – 154',
        excerpt:
          'عبر عقد استخراج البيانات يمكن التحقق آلياً من خلو مئات اللوحات والغرف من الأخطاء المتكررة في ثوانٍ معدودة.',
      },
      {
        number: 'الفصل 03',
        title: 'نماذج الذكاء الاصطناعي التوليدي والتحليل البيئي المبكر',
        pages: '155 – 240',
        excerpt:
          'يساعد دمج خوارزميات التحسين متعدد الأهداف مع بيانات المناخ على توليد تشكيلات عمرانية توازن بين الإضاءة الطبيعية وتقليل الأحمال الحرارية.',
      },
    ],
  },
  {
    id: 'book-successful-bim',
    accessionCode: 'BK-04',
    title: 'أساسيات تنفيذ بيم ناجح في المشاريع الهندسية',
    subtitle: 'منهجية إدارة التغيير، تجنب الأخطاء الشائعة، وحوكمة النماذج',
    author: 'م. عمر سليم',
    discipline: 'bim-iso',
    disciplineLabel: 'BIM & ISO 19650',
    pages: 168,
    year: '2024',
    edition: 'الطبعة الثانية',
    language: 'العربية',
    coverVariant: 'grid',
    downloadUrl: 'https://bimarabia.com/book',
    description:
      'كتاب موجز ومركز يعالج التحديات العملية التي تواجه فرق المشروع عند الانتقال للتطبيق الفعلي، مثل تضخم أحجام الملفات، غياب التوافق بين التخصصات، وصعوبات التسليم النهائي.',
    chapters: [
      {
        number: 'الفصل 01',
        title: 'مؤشرات نضج البيم وتقييم جاهزية الشركة',
        pages: '11 – 58',
        excerpt:
          'يبدأ التنفيذ الناجح بتشخيص الفجوات التدريبية والتقنية الحالية ووضع مشروع تجريبي (Pilot Project) واضح الأهداف.',
      },
      {
        number: 'الفصل 02',
        title: 'أفضل ممارسات إدارة النماذج وتقليل حجم الملفات',
        pages: '59 – 118',
        excerpt:
          'تقسيم النماذج الفيدرالية وتنظيف العائلات غير المستخدمة يحافظ على سرعة استجابة الفريق ويمنع تعطل محطات العمل.',
      },
      {
        number: 'الفصل 03',
        title: 'قوائم التحقق (Checklists) قبل تسليم أي مرحلة',
        pages: '119 – 168',
        excerpt:
          'مجموعة عملية من قوائم الفحص التي تغطي المعماري والإنشائي والـ MEP لضمان مطابقة المخرجات لمتطلبات المالك.',
      },
    ],
  },
  {
    id: 'book-navisworks-coord',
    accessionCode: 'BK-05',
    title: 'دليل التنسيق الهندسي وكشف التعارضات (Navisworks)',
    subtitle: 'استراتيجيات تنسيق المعماري والإنشائي والكهروميكانيك وحل التداخلات',
    author: 'مركز بيم أرابيا للبحث العلمي',
    discipline: 'navisworks',
    disciplineLabel: 'Navisworks & التنسيق',
    pages: 192,
    year: '2025',
    edition: 'الطبعة الأولى',
    language: 'العربية',
    coverVariant: 'coordination',
    downloadUrl: 'https://bimarabia.com/book',
    description:
      'مرجع متخصص في أعمال التنسيق الهندسي متعدد التخصصات، يشرح كيفية إعداد قواعد الفحص الذكية، قراءة تقارير التعارضات، وإدارة اجتماعات التنسيق الأسبوعية حتى إغلاق التداخلات.',
    chapters: [
      {
        number: 'الفصل 01',
        title: 'مبادئ التنسيق المسبق وتحديد أولويات المسارات',
        pages: '15 – 64',
        excerpt:
          'تُعطى الأولوية في مسارات الخدمات للأنابيب العاملة بالجاذبية ثم مجاري الهواء الرئيسية ثم كابلات الكهرباء.',
      },
      {
        number: 'الفصل 02',
        title: 'إعداد مصفوفة Clash Matrix وتشغيل الاختبارات في Navisworks',
        pages: '65 – 130',
        excerpt:
          'تصنف التعارضات إلى حقيقية (Hard)، مسافات أمان وصيانة (Clearance)، وتكرارية لتفادي إغراق الفريق بآلاف النتائج الزائفة.',
      },
      {
        number: 'الفصل 03',
        title: 'توظيف البعد الرابع 4D والخامس 5D في متابعة الموقع',
        pages: '131 – 192',
        excerpt:
          'ربط عناصر النموذج بأنشطة الجدول الزمني يكشف اختناقات التوريد والتنفيذ في الموقع قبل حدوثها بأشهر.',
      },
    ],
  },
  {
    id: 'book-bim-gis-twin',
    accessionCode: 'BK-06',
    title: 'تكامل BIM & GIS والتوائم الرقمية للمدن الذكية',
    subtitle: 'الجسر المعلوماتي بين المبنى الفردي والبنية التحتية الحضرية وإدارة المرافق',
    author: 'م. عمر سليم',
    discipline: 'ai-twin',
    disciplineLabel: 'الذكاء الاصطناعي & GIS',
    pages: 176,
    year: '2026',
    edition: 'الطبعة الأولى',
    language: 'العربية',
    coverVariant: 'gis',
    downloadUrl: 'https://bimarabia.com/book',
    description:
      'يستعرض هذا الإصدار الحديث آليات الربط بين بيانات المباني التفصيلية (BIM/IFC) ونظم المعلومات الجغرافية المكانية (GIS/CityGML) لبناء توأم رقمي حي يدعم الاستدامة وإدارة المدن الذكية.',
    chapters: [
      {
        number: 'الفصل 01',
        title: 'من المبنى الذكي إلى المدينة الذكية: تحديات تبادل البيانات',
        pages: '10 – 62',
        excerpt:
          'يتكامل البعد المكاني الواسع لنظم GIS مع الدقة الهندسية التفصيلية لنماذج BIM لتكوين رؤية شاملة للبنية التحتية.',
      },
      {
        number: 'الفصل 02',
        title: 'بنية التوائم الرقمية (Digital Twins) وحساسات التشغيل',
        pages: '63 – 122',
        excerpt:
          'يتحول النموذج بعد التسليم من سجل ساكن إلى توأم رقمي يتغذى لحظياً بقراءات الطاقة والحرارة والإشغال.',
      },
      {
        number: 'الفصل 03',
        title: 'تطبيقات الاستدامة والعمارة الخضراء ودورة حياة الكربون',
        pages: '123 – 176',
        excerpt:
          'تتيح قواعد البيانات المتكاملة قياس البصمة الكربونية المجسدة والتشغيلية للمباني منذ مراحل التصميم الأولى.',
      },
    ],
  },
];

export const MAGAZINE_ISSUES: MagazineIssue[] = [
  {
    id: 'mag-32',
    issueNumber: 'العدد 32',
    title: 'الذكاء الاصطناعي التوليدي ومستقبل العمارة الرقمية',
    theme: 'توظيف أدوات الذكاء الاصطناعي في التصميم والتنفيذ وإدارة العقود',
    discipline: 'ai-twin',
    disciplineLabel: 'الذكاء الاصطناعي & GIS',
    releaseDate: '2026',
    pages: 84,
    featuredArticles: [
      'التكامل بين Autodesk Forma والريفيت في المشاريع السكنية',
      'استخدام النماذج اللغوية في تدقيق خطط تنفيذ البيم',
      'التوائم الرقمية وحفظ التراث المعماري العربي',
    ],
    pdfUrl: 'https://bimarabia.com/book',
  },
  {
    id: 'mag-28',
    issueNumber: 'العدد 28',
    title: 'تطبيقات ISO 19650 في مشاريع الشرق الأوسط',
    theme: 'دراسات حالة واقعية وحوكمة بيئة البيانات المشتركة CDE',
    discipline: 'bim-iso',
    disciplineLabel: 'BIM & ISO 19650',
    releaseDate: '2025',
    pages: 78,
    featuredArticles: [
      'دليل صياغة EIR عملي للجهات المالكة',
      'أخطاء شائعة في تسمية الملفات وكيفية تفاديها',
      'معايير OpenBIM وملفات IFC 4.3 للبنية التحتية',
    ],
    pdfUrl: 'https://bimarabia.com/book',
  },
  {
    id: 'mag-24',
    issueNumber: 'العدد 24',
    title: 'العمارة الخضراء والاستدامة عبر نمذجة معلومات البناء',
    theme: 'محاكاة الطاقة والإضاءة الطبيعية وتقليل الهدر الإنشائي',
    discipline: 'revit',
    disciplineLabel: 'Autodesk Revit',
    releaseDate: '2024',
    pages: 72,
    featuredArticles: [
      'التحليل الحراري والشمسي لنماذج Revit',
      'حساب الكربون المجسد للمواد الإنشائية',
      'ربط البيم بمعايير LEED و Mostadam',
    ],
    pdfUrl: 'https://bimarabia.com/book',
  },
  {
    id: 'mag-19',
    issueNumber: 'العدد 19',
    title: 'إدارة التعارضات والجدولة الزمنية 4D و 5D',
    theme: 'تكامل Revit و Navisworks و Primavera P6 في المواقع الكبرى',
    discipline: 'navisworks',
    disciplineLabel: 'Navisworks & التنسيق',
    releaseDate: '2023',
    pages: 68,
    featuredArticles: [
      'بناء مصفوفة تعارضات ذكية لمشاريع المستشفيات',
      'أتمتة تقارير BCF بين فرق المكتب والموقع',
      'ربط الكميات المستخرجة بالتسعير 5D BIM',
    ],
    pdfUrl: 'https://bimarabia.com/book',
  },
  {
    id: 'mag-09',
    issueNumber: 'العدد 09',
    title: 'التنسيق المتقدم وعلاقات الأتمتة في البيم',
    theme: 'مقارنة أدوات كشف التعارضات وتطبيقات الدينامو العملية',
    discipline: 'navisworks',
    disciplineLabel: 'Navisworks & التنسيق',
    releaseDate: '2020',
    pages: 64,
    featuredArticles: [
      'مقارنة شاملة لأدوات Clash Detection الاحترافية',
      'علاقات النمذجة البارامترية في المشاريع المعقدة',
      'إدارة التغييرات الهندسية عبر النماذج المشتركة',
    ],
    pdfUrl: 'https://bimarabia.com/book',
  },
  {
    id: 'mag-07',
    issueNumber: 'العدد 07',
    title: 'العدد الخاص بالبرمجة البصرية Dynamo والكتلة في الريفيت',
    theme: 'مدخل عربي موسع للدينامو والعلاقات الرياضية والبارامترية',
    discipline: 'dynamo',
    disciplineLabel: 'Dynamo & الأتمتة',
    releaseDate: '2019',
    pages: 60,
    featuredArticles: [
      'مقدمة شاملة لبيئة Dynamo للمهندسين',
      'تشكيل الكتل المعمارية في Revit Massing',
      'أتمتة استخراج الإحداثيات وجداول الأبواب',
    ],
    pdfUrl: 'https://bimarabia.com/book',
  },
];

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path-foundation',
    index: '01',
    title: 'مسار تأسيس مهندس البيم (من الصفر)',
    role: 'BIM Modeler / Engineer',
    durationEstimate: '6 أسابيع · 34 ساعة',
    description:
      'نقطة الانطلاق المثالية للطلاب والمهندسين لفهم فلسفة البيم نظرياً ثم إتقان النمذجة وإخراج اللوحات في Revit.',
    discipline: 'revit',
    recommendedBookIds: ['book-road-to-bim'],
    recommendedVideoIds: ['vid-revit-mep-arch'],
    outcomes: [
      'استيعاب مفاهيم LOD و BEP ومراحل النمذجة',
      'بناء نموذج متكامل وإخراج لوحات تنفيذية وجداول حصر',
    ],
  },
  {
    id: 'path-coordinator',
    index: '02',
    title: 'مسار منسق البيم واكتشاف التعارضات',
    role: 'BIM Coordinator',
    durationEstimate: '5 أسابيع · 28 ساعة',
    description:
      'يركز على التنسيق متعدد التخصصات بين المعماري والإنشائي والكهروميكانيك عبر Navisworks وإصدار تقارير الجودة.',
    discipline: 'navisworks',
    recommendedBookIds: ['book-navisworks-coord', 'book-successful-bim'],
    recommendedVideoIds: ['vid-navisworks-clash'],
    outcomes: [
      'إدارة النماذج الفيدرالية وتشغيل مصفوفة التعارضات',
      'تطبيق محاكاة البعد الرابع 4D وقيادة اجتماعات التنسيق',
    ],
  },
  {
    id: 'path-automation',
    index: '03',
    title: 'مسار الأتمتة والدينامو والذكاء الاصطناعي',
    role: 'Computational BIM Specialist',
    durationEstimate: '6 أسابيع · 30 ساعة',
    description:
      'للمهندسين الساعين لمضاعفة الإنتاجية عبر البرمجة البصرية Dynamo وأدوات الذكاء الاصطناعي التوليدي والتوائم الرقمية.',
    discipline: 'dynamo',
    recommendedBookIds: ['book-dynamo-ai', 'book-bim-gis-twin'],
    recommendedVideoIds: ['vid-dynamo-automation', 'vid-ai-aec-forma'],
    outcomes: [
      'تصميم سكربتات أتمتة تربط Revit بملفات Excel',
      'توظيف التحليلات التوليدية والربط مع GIS',
    ],
  },
  {
    id: 'path-manager',
    index: '04',
    title: 'مسار إدارة البيم ومعايير ISO 19650',
    role: 'BIM Manager',
    durationEstimate: '4 أسابيع · 22 ساعة',
    description:
      'تأهيل قيادي وإداري لوضع استراتيجيات البيم في الشركات، صياغة العقود وخطط التنفيذ BEP، وإدارة بيئة البيانات المشتركة.',
    discipline: 'bim-iso',
    recommendedBookIds: ['book-iso-19650', 'book-successful-bim'],
    recommendedVideoIds: ['vid-iso-management', 'vid-bim-talks'],
    outcomes: [
      'تطبيق متطلبات معيار ISO 19650 وحوكمة CDE',
      'إعداد وثائق EIR و BEP وإدارة فرق التخصصات',
    ],
  },
];
