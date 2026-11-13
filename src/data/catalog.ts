export type DisciplineKey =
  | 'all'
  | 'bim-iso'
  | 'automation'
  | 'navisworks'
  | 'ai-aec'
  | 'modeling-viz';

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

export interface TechnicalPillar {
  id: string;
  number: string;
  title: string;
  tools: string;
  discipline: Exclude<DisciplineKey, 'all'>;
}

export interface OfficialLink {
  id: string;
  label: string;
  handle: string;
  url: string;
  group: 'platforms' | 'social' | 'academic';
}

export const CHANNEL_URLS = {
  main: 'https://www.youtube.com/@omar_selim1',
  videos: 'https://www.youtube.com/@omar_selim1/videos',
  playlists: 'https://www.youtube.com/@omar_selim1/playlists',
  subscribe: 'https://www.youtube.com/channel/UCZYaOLTtPmOQX1fgtDFW52Q?sub_confirmation=1',
  website: 'http://bimarabia.com/',
};

export const OFFICIAL_LINKS: OfficialLink[] = [
  {
    id: 'lnk-youtube',
    label: 'قناة يوتيوب الرسمية',
    handle: '@omar_selim1',
    url: 'https://www.youtube.com/@omar_selim1',
    group: 'platforms',
  },
  {
    id: 'lnk-sub',
    label: 'الاشتراك المباشر في القناة',
    handle: 'YouTube Subscribe',
    url: 'https://www.youtube.com/channel/UCZYaOLTtPmOQX1fgtDFW52Q?sub_confirmation=1',
    group: 'platforms',
  },
  {
    id: 'lnk-bimarabia',
    label: 'موقع بيم أرابيا',
    handle: 'bimarabia.com',
    url: 'http://bimarabia.com/',
    group: 'platforms',
  },
  {
    id: 'lnk-udemy',
    label: 'دورات يوديمي',
    handle: 'udemy.com/user/omarabdallahselim',
    url: 'https://www.udemy.com/user/omarabdallahselim',
    group: 'platforms',
  },
  {
    id: 'lnk-linkedin',
    label: 'لينكدإن',
    handle: 'linkedin.com/in/omarslm',
    url: 'https://www.linkedin.com/in/omarslm/',
    group: 'social',
  },
  {
    id: 'lnk-facebook',
    label: 'فيسبوك',
    handle: 'facebook.com/OMRSELM',
    url: 'https://www.facebook.com/OMRSELM',
    group: 'social',
  },
  {
    id: 'lnk-instagram',
    label: 'إنستغرام',
    handle: 'instagram.com/omar_selim',
    url: 'https://www.instagram.com/omar_selim/',
    group: 'social',
  },
  {
    id: 'lnk-twitter',
    label: 'تويتر / X',
    handle: 'twitter.com/BIMarabia',
    url: 'https://twitter.com/BIMarabia',
    group: 'social',
  },
  {
    id: 'lnk-researchgate',
    label: 'الأبحاث العلمية ResearchGate',
    handle: 'researchgate.net/profile/Omar-Selim',
    url: 'https://www.researchgate.net/profile/Omar-Selim',
    group: 'academic',
  },
  {
    id: 'lnk-blogspot',
    label: 'المدونة التقنية Blogspot',
    handle: 'omrslm.blogspot.com',
    url: 'https://omrslm.blogspot.com',
    group: 'academic',
  },
  {
    id: 'lnk-linktr',
    label: 'مجمع الروابط Linktree',
    handle: 'linktr.ee/omarselim',
    url: 'https://linktr.ee/omarselim',
    group: 'academic',
  },
  {
    id: 'lnk-about',
    label: 'السيرة والملف التعريفي',
    handle: 'about.me/oselim',
    url: 'https://about.me/oselim',
    group: 'academic',
  },
];

export const TECHNICAL_PILLARS: TechnicalPillar[] = [
  {
    id: 'pil-1',
    number: '01',
    title: 'التطبيق العملي لمعايير ISO 19650 وبروتوكولات تبادل البيانات COBie',
    tools: 'ISO 19650 · CDE · COBie · EIR/BEP',
    discipline: 'bim-iso',
  },
  {
    id: 'pil-2',
    number: '02',
    title: 'أتمتة العمليات الهندسية باستخدام Python و Dynamo',
    tools: 'Revit · Civil 3D · Navisworks · pyRevit',
    discipline: 'automation',
  },
  {
    id: 'pil-3',
    number: '03',
    title: 'الذكاء الاصطناعي التوليدي في العمارة والتصميم الحضري',
    tools: 'Autodesk Forma · Snaptrude · VizMaker',
    discipline: 'ai-aec',
  },
  {
    id: 'pil-4',
    number: '04',
    title: 'شروحات متقدمة لبرامج التصميم والنمذجة والإظهار المعماري',
    tools: 'Rhino · Blender · Twinmotion',
    discipline: 'modeling-viz',
  },
  {
    id: 'pil-5',
    number: '05',
    title: 'التحول الرقمي وإدارة نماذج البنية التحتية وكشف التعارضات',
    tools: 'Navisworks · IFC · Civil 3D · Infrastructure',
    discipline: 'navisworks',
  },
];

export const HERO_STUDIO_IMAGE = '/src/assets/images/hero_bimarabia_studio_1794547818332.jpg';
export const VIDEO_COORDINATION_IMAGE = '/src/assets/images/video_revit_coordination_1794547819607.jpg';
export const BOOK_ROAD_IMAGE = '/src/assets/images/book_road_to_bim_1794547818391.jpg';
export const BOOK_ISO_IMAGE = '/src/assets/images/book_iso_19650_1794547817931.jpg';
export const BOOK_DYNAMO_IMAGE = '/src/assets/images/book_ai_dynamo_1794547819157.jpg';

export const DISCIPLINE_OPTIONS: { key: DisciplineKey; label: string }[] = [
  { key: 'all', label: 'جميع المحاور' },
  { key: 'bim-iso', label: 'ISO 19650 & COBie' },
  { key: 'automation', label: 'Python & Dynamo (Revit / Civil 3D)' },
  { key: 'ai-aec', label: 'الذكاء الاصطناعي (Forma / Snaptrude / VizMaker)' },
  { key: 'modeling-viz', label: 'Rhino · Blender · Twinmotion' },
  { key: 'navisworks', label: 'Navisworks · IFC · البنية التحتية' },
];

export const VIDEO_COURSES: VideoCourse[] = [
  {
    id: 'vid-iso-cobie-just-bim',
    code: 'YT-01',
    title: 'just BIM it — التطبيق العملي لمعايير ISO 19650 وبروتوكولات COBie',
    subtitle: 'التحضير للاعتمادات الدولية وبناء خطط التنفيذ BEP وبيئة البيانات المشتركة CDE',
    discipline: 'bim-iso',
    disciplineLabel: 'ISO 19650 & COBie',
    instructor: 'م. عمر سليم',
    level: 'جميع المستويات',
    lessonsCount: 38,
    totalDuration: '12 ساعة 45 دقيقة',
    year: '2026',
    thumbnail: BOOK_ISO_IMAGE,
    accentTone: 'bronze',
    youtubeUrl: 'https://www.youtube.com/@omar_selim1/playlists',
    description:
      'سلسلة تأسيسية ومتقدمة في آن واحد تشرح معيار ISO 19650 لإدارة المعلومات طوال دورة حياة الأصول، مع تطبيق عملي لبروتوكولات تسليم البيانات COBie وإعداد نماذج متوافقة مع الاعتمادات المهنية الدولية.',
    lessons: [
      {
        id: 'l-iso-1',
        number: '01',
        title: 'منظومة ISO 19650: متطلبات OIR و AIR و PIR و EIR',
        duration: '28:30',
        summary: 'فهم العلاقة التعاقدية بين الجهة المالكة (Appointing Party) وفرق التسليم وآليات صياغة EIR.',
        keyTopics: ['ISO 19650-1/2', 'EIR & OIR', 'Information Management'],
      },
      {
        id: 'l-iso-2',
        number: '02',
        title: 'إعداد خطة تنفيذ البيم BEP ومصفوفة المسؤوليات MIDP / TIDP',
        duration: '33:20',
        summary: 'بناء خطة تنفيذ متكاملة قبل وبعد الترسية وتحديد مستويات الحاجة للمعلومات LOIN.',
        keyTopics: ['BEP', 'MIDP & TIDP', 'LOIN'],
      },
      {
        id: 'l-iso-3',
        number: '03',
        title: 'بروتوكول COBie لتسليم بيانات الأصول وإدارة المرافق FM',
        duration: '31:15',
        summary: 'تجهيز وتصدير جداول COBie من Revit وفحص جودة بيانات المعدات والغرف قبل التسليم.',
        keyTopics: ['COBie', 'Asset Management', 'CAFM Integration'],
      },
      {
        id: 'l-iso-4',
        number: '04',
        title: 'إدارة بيئة البيانات المشتركة CDE والتحضير للاعتمادات الدولية',
        duration: '26:40',
        summary: 'حالات الملفات (WIP, Shared, Published, Archived) وأكواد الحالة والاستعداد لاختبارات الكفاءة.',
        keyTopics: ['CDE Workflow', 'Status Codes', 'BIM Certification'],
      },
    ],
  },
  {
    id: 'vid-python-dynamo-aec',
    code: 'YT-02',
    title: 'أتمتة العمليات الهندسية باستخدام Python و Dynamo (Revit · Civil 3D · Navisworks)',
    subtitle: 'تطوير حلول برمجية مباشرة لتسريع النمذجة واستخراج البيانات وربط البنية التحتية',
    discipline: 'automation',
    disciplineLabel: 'Python & Dynamo',
    instructor: 'م. عمر سليم',
    level: 'متوسط إلى متقدم',
    lessonsCount: 44,
    totalDuration: '15 ساعة 10 دقيقة',
    year: '2026',
    thumbnail: BOOK_DYNAMO_IMAGE,
    accentTone: 'cobalt',
    youtubeUrl: 'https://www.youtube.com/@omar_selim1/search?query=dynamo',
    description:
      'برنامج عملي يركز على استخدام البرمجة البصرية Dynamo ولغة Python (عبر عقد Python Script و pyRevit) لأتمتة المهام المتكررة في Revit و Civil 3D و Navisworks، وربط النماذج بملفات Excel وقواعد البيانات.',
    lessons: [
      {
        id: 'l-aut-1',
        number: '01',
        title: 'أتمتة Revit عبر Dynamo وإدارة القوائم المعقدة List@Level',
        duration: '24:50',
        summary: 'بناء سكربتات عملية لترقيم العناصر وتوليد اللوحات والربط ثنائي الاتجاه مع Excel.',
        keyTopics: ['Dynamo for Revit', 'List@Level', 'Excel Sync'],
      },
      {
        id: 'l-aut-2',
        number: '02',
        title: 'كتابة سكربتات Python و pyRevit والتعامل مع Revit API',
        duration: '34:15',
        summary: 'الانتقال من العقد الجاهزة إلى كتابة شيفرات Python نظيفة لتوسيع إمكانيات الريفيت.',
        keyTopics: ['Python Script', 'pyRevit', 'Revit API'],
      },
      {
        id: 'l-aut-3',
        number: '03',
        title: 'Dynamo for Civil 3D لأتمتة مشاريع الطرق والبنية التحتية',
        duration: '29:40',
        summary: 'توزيع الأعمدة والعبارات على المسارات (Alignments & Corridors) واستخراج الإحداثيات آلياً.',
        keyTopics: ['Civil 3D', 'Corridors Automation', 'Infrastructure BIM'],
      },
      {
        id: 'l-aut-4',
        number: '04',
        title: 'أتمتة فحص التعارضات وتوليد تقارير Navisworks برمجياً',
        duration: '25:20',
        summary: 'استخراج خصائص العناصر وأتمتة قواعد التجميع ومراجعة جودة النماذج الفيدرالية.',
        keyTopics: ['Navisworks API', 'Automated QA/QC', 'Data Extraction'],
      },
    ],
  },
  {
    id: 'vid-genai-architecture',
    code: 'YT-03',
    title: 'الذكاء الاصطناعي التوليدي في العمارة والتصميم الحضري (Forma · Snaptrude · VizMaker)',
    subtitle: 'سلسلة أدوات الذكاء الاصطناعي للتخطيط العمراني، النمذجة السحابية، والإظهار الفوري',
    discipline: 'ai-aec',
    disciplineLabel: 'الذكاء الاصطناعي في العمارة',
    instructor: 'م. عمر سليم',
    level: 'جميع المستويات',
    lessonsCount: 30,
    totalDuration: '10 ساعة 20 دقيقة',
    year: '2026',
    thumbnail: HERO_STUDIO_IMAGE,
    accentTone: 'cobalt',
    youtubeUrl: 'https://www.youtube.com/@omar_selim1/search?query=Forma',
    description:
      'تغطي هذه السلسلة أحدث تطبيقات الذكاء الاصطناعي التوليدي في المراحل المبكرة للتصميم المعماري والتخطيط الحضري، بما في ذلك التحليلات المناخية في Autodesk Forma، النمذجة التعاونية السحابية في Snaptrude، والتصور البصري السريع عبر VizMaker.',
    lessons: [
      {
        id: 'l-ai-1',
        number: '01',
        title: 'Autodesk Forma: التحليل التوليدي للشمس والرياح والضوضاء في المواقع الحضرية',
        duration: '27:10',
        summary: 'توليد البدائل التخطيطية وقياس الأداء البيئي لحظياً ثم نقل النموذج إلى Revit.',
        keyTopics: ['Autodesk Forma', 'Urban Design AI', 'Microclimate Analysis'],
      },
      {
        id: 'l-ai-2',
        number: '02',
        title: 'Snaptrude: النمذجة المعمارية السحابية وحصر المساحات بالذكاء الاصطناعي',
        duration: '24:35',
        summary: 'التحول السريع من الكتلة المفهومية إلى نموذج BIM سحابي تفاعلي قابل للتصدير إلى IFC و Revit.',
        keyTopics: ['Snaptrude', 'Cloud BIM', 'Space Programming'],
      },
      {
        id: 'l-ai-3',
        number: '03',
        title: 'VizMaker وأدوات الريندر التوليدي لإنتاج بدائل الواجهات واللقطات المعمارية',
        duration: '22:45',
        summary: 'تحويل السكتشات الأولية ونماذج الكتلة إلى مشاهد معمارية واقعية ومتنوعة خلال دقائق.',
        keyTopics: ['VizMaker', 'Generative Rendering', 'Concept Visualization'],
      },
    ],
  },
  {
    id: 'vid-rhino-blender-twinmotion',
    code: 'YT-04',
    title: 'شروحات متقدمة في النمذجة والإظهار: Rhino و Blender و Twinmotion',
    subtitle: 'الهندسة الحرة والبارامترية في Rhino، النمذجة مفتوحة المصدر في Blender، والواقع الافتراضي في Twinmotion',
    discipline: 'modeling-viz',
    disciplineLabel: 'Rhino · Blender · Twinmotion',
    instructor: 'م. عمر سليم',
    level: 'متوسط إلى متقدم',
    lessonsCount: 32,
    totalDuration: '11 ساعة 50 دقيقة',
    year: '2025',
    thumbnail: BOOK_ROAD_IMAGE,
    accentTone: 'slate',
    youtubeUrl: 'https://www.youtube.com/@omar_selim1/search?query=Blender',
    description:
      'مسار تقني متكامل يربط بين قدرات النمذجة الحرة والبارامترية في Rhinoceros (و Rhino.Inside.Revit)، وقوة Blender مفتوحة المصدر (مع Bonsai/BlenderBIM)، وسرعة الإظهار الزمني الحقيقي في Twinmotion.',
    lessons: [
      {
        id: 'l-viz-1',
        number: '01',
        title: 'Rhino & Rhino.Inside.Revit: نقل الأشكال المعقدة إلى بيئة البيم',
        duration: '30:05',
        summary: 'استخدام NURBS و Grasshopper لبناء أسطح حرة وتحويلها إلى عناصر Revit ذكية.',
        keyTopics: ['Rhino 3D', 'Rhino.Inside.Revit', 'NURBS Geometry'],
      },
      {
        id: 'l-viz-2',
        number: '02',
        title: 'Blender للعماريين وإضافات OpenBIM (Bonsai / BlenderBIM)',
        duration: '28:50',
        summary: 'النمذجة المعمارية، تحرير خامات PBR، وتصدير وقراءة ملفات IFC مباشرة داخل Blender.',
        keyTopics: ['Blender Architecture', 'BlenderBIM / IFC', 'Open Source AEC'],
      },
      {
        id: 'l-viz-3',
        number: '03',
        title: 'Twinmotion للريندر الفوري والربط المباشر مع Revit و Rhino',
        duration: '26:15',
        summary: 'تطبيق الإضاءة الفيزيائية، تحريك المراحل الإنشائية 4D، وإخراج جولات تفاعلية للمالك.',
        keyTopics: ['Twinmotion', 'Datasmith Sync', 'Real-time Rendering'],
      },
    ],
  },
  {
    id: 'vid-infra-navisworks-ifc',
    code: 'YT-05',
    title: 'التنسيق بدون أخطاء (Clash Detection & IFC) والتحول الرقمي للبنية التحتية',
    subtitle: 'إدارة النماذج الفيدرالية في Navisworks و Civil 3D وتطبيق معايير OpenBIM',
    discipline: 'navisworks',
    disciplineLabel: 'Navisworks & البنية التحتية',
    instructor: 'م. عمر سليم',
    level: 'متوسط',
    lessonsCount: 28,
    totalDuration: '9 ساعة 35 دقيقة',
    year: '2026',
    thumbnail: VIDEO_COORDINATION_IMAGE,
    accentTone: 'forest',
    youtubeUrl: 'https://www.youtube.com/@omar_selim1/search?query=Navisworks',
    description:
      'سلسلة تطبيقية متخصصة في اكتشاف التعارضات بدون أخطاء عبر Navisworks، وتنسيق شبكات البنية التحتية والطرق والأنفاق عبر Civil 3D و InfoDrainage، مع ضبط تبادل ملفات IFC 4.3.',
    lessons: [
      {
        id: 'l-nav-1',
        number: '01',
        title: 'تجميع النماذج الفيدرالية ومعالجة الإحداثيات في المشاريع الكبرى',
        duration: '21:30',
        summary: 'توحيد أنظمة الإحداثيات بين المباني والطرق وشبكات المرافق وتجنب انزياح النماذج.',
        keyTopics: ['Federated Models', 'Shared Coordinates', 'Civil 3D Link'],
      },
      {
        id: 'l-nav-2',
        number: '02',
        title: 'Clash Detection و BCF عملياً: تقليل التعارضات الكاذبة بنسبة 80%',
        duration: '32:10',
        summary: 'بناء قواعد الفحص Search Sets ومصفوفة الأولويات وتوزيع الملاحظات عبر صيغة BCF.',
        keyTopics: ['Clash Detective', 'Search Sets', 'BCF Workflow'],
      },
      {
        id: 'l-nav-3',
        number: '03',
        title: 'استراتيجيات التحول الرقمي لمشاريع البنية التحتية ومعيار IFC 4.3',
        duration: '27:45',
        summary: 'متطلبات تسليم مشاريع الجسور والشبكات والمحطات وفق بنية OpenBIM الحديثة.',
        keyTopics: ['Infrastructure BIM', 'IFC 4.3', 'Digital Delivery'],
      },
    ],
  },
  {
    id: 'vid-bim-talks-sustainability',
    code: 'YT-06',
    title: 'جلسات BIM Talks وتحليل الطاقة والاستدامة (OpenStudio & eQUEST)',
    subtitle: 'حوارات مهنية مع خبراء التشييد الرقمي وشروحات محاكاة كفاءة الطاقة في المباني',
    discipline: 'bim-iso',
    disciplineLabel: 'ISO 19650 & الاستدامة',
    instructor: 'م. عمر سليم ونخبة الخبراء',
    level: 'جميع المستويات',
    lessonsCount: 36,
    totalDuration: '17 ساعة 30 دقيقة',
    year: '2026',
    thumbnail: VIDEO_COORDINATION_IMAGE,
    accentTone: 'bronze',
    youtubeUrl: 'https://www.youtube.com/@omar_selim1/playlists',
    description:
      'تجمع هذه السلسلة بين الجلسات الحوارية لمبادرة بيم أرابيا (BIM Talks) حول واقع التحول الرقمي وسوق العمل العربي، وبين السلسلة التقنية لتحليل استهلاك الطاقة عبر OpenStudio و eQUEST.',
    lessons: [
      {
        id: 'l-tlk-1',
        number: '01',
        title: 'خارطة التطوير المهني المستمر والتحضير للاعتمادات الدولية في البيم',
        duration: '41:15',
        summary: 'مناقشة المسارات المعتمدة من buildingSMART و Autodesk وبناء سيرة هندسية تنافسية.',
        keyTopics: ['buildingSMART', 'Career Roadmap', 'CPD'],
      },
      {
        id: 'l-tlk-2',
        number: '02',
        title: 'محاكاة الطاقة والأحمال الحرارية للمباني عبر OpenStudio و eQUEST',
        duration: '35:20',
        summary: 'تصدير النموذج التحليلي gbXML وقياس استهلاك الطاقة والتبريد وفق معايير العمارة الخضراء.',
        keyTopics: ['OpenStudio', 'eQUEST', 'Energy Modeling'],
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
    disciplineLabel: 'ISO 19650 & COBie',
    pages: 214,
    year: '2024',
    edition: 'الطبعة الرابعة المنقحة',
    language: 'العربية',
    coverImage: BOOK_ROAD_IMAGE,
    coverVariant: 'wireframe',
    downloadUrl: 'http://bimarabia.com/',
    description:
      'يُعد كتاب «الطريق إلى البيم» أحد أبرز المراجع العربية التأسيسية التي تضع المهندس وصاحب القرار أمام خريطة واضحة للتحول من الرسم ثنائي الأبعاد CAD إلى منظومة النمذجة المعلوماتية BIM، مع تفصيل الأدوار، المعايير، وحساب العائد على الاستثمار.',
    chapters: [
      {
        number: 'الفصل 01',
        title: 'لماذا البيم؟ التحول من الرسم الهندسي إلى إدارة المعلومات',
        pages: '12 – 44',
        excerpt:
          'لا يقتصر التحول إلى نمذجة معلومات البناء على استبدال برنامج بآخر، بل هو إعادة هندسة كاملة لدورة حياة المشروع بحيث يصبح النموذج الرقمي مصدراً وحيداً للحقيقة الهندسية من الفكرة الأولية حتى التشغيل والصيانة.',
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
    title: 'إدارة معلومات البناء وفق معيار ISO 19650 وبروتوكول COBie',
    subtitle: 'شرح تطبيقي مبسط لأجزاء المعيار الدولي وبيئة البيانات المشتركة CDE وتسليم الأصول',
    author: 'م. عمر سليم وفريق بيم أرابيا',
    discipline: 'bim-iso',
    disciplineLabel: 'ISO 19650 & COBie',
    pages: 186,
    year: '2025',
    edition: 'الطبعة الثانية',
    language: 'العربية',
    coverImage: BOOK_ISO_IMAGE,
    coverVariant: 'orthographic',
    downloadUrl: 'http://bimarabia.com/',
    description:
      'مرجع عملي يترجم ويفصل بنود المعيار الدولي ISO 19650-1/2/3/5 وبروتوكولات COBie لتبادل البيانات إلى خطوات إجرائية قابلة للتطبيق في المشاريع العربية، مع قوالب جاهزة لـ EIR و BEP و MIDP.',
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
        title: 'تطبيق بروتوكول COBie لتسليم بيانات التشغيل والصيانة',
        pages: '53 – 110',
        excerpt:
          'يوفر معيار COBie بنية جدولية موحدة لنقل بيانات الفراغات والمعدات والضمانات من مرحلة التشييد إلى أنظمة إدارة المرافق CAFM بدون إعادة إدخال يدوي.',
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
    id: 'book-dynamo-python',
    accessionCode: 'BK-03',
    title: 'أتمتة العمليات الهندسية: Dynamo و Python في بيئات Revit و Civil 3D',
    subtitle: 'مدخل تطبيقي للبرمجة البصرية وكتابة سكربتات بايثون وأتمتة الفحص والجودة',
    author: 'م. عمر سليم',
    discipline: 'automation',
    disciplineLabel: 'Python & Dynamo',
    pages: 240,
    year: '2026',
    edition: 'الطبعة الثالثة',
    language: 'العربية',
    coverImage: BOOK_DYNAMO_IMAGE,
    coverVariant: 'parametric',
    downloadUrl: 'http://bimarabia.com/',
    description:
      'يجمع الكتاب بين أساسيات البرمجة البصرية في Dynamo ولغة Python للتعامل المباشر مع Revit API و Civil 3D و Navisworks، ليمنح المهندس قدرة على بناء أدواته الإنتاجية الخاصة.',
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
        title: 'كتابة عقد Python في Dynamo والتكامل مع pyRevit',
        pages: '69 – 154',
        excerpt:
          'تمنح لغة Python مرونة فائقة في معالجة القوائم الضخمة والتحقق الآلي QA/QC من مئات اللوحات والعناصر في ثوانٍ معدودة.',
      },
      {
        number: 'الفصل 03',
        title: 'تطبيقات الأتمتة في مشاريع الطرق والبنية التحتية عبر Civil 3D',
        pages: '155 – 240',
        excerpt:
          'يتناول هذا الفصل أتمتة توزيع العناصر الهندسية على طول المسارات (Alignments) واستخراج جداول الكميات والإحداثيات بدقة مساحية.',
      },
    ],
  },
  {
    id: 'book-genai-aec',
    accessionCode: 'BK-04',
    title: 'الذكاء الاصطناعي التوليدي في العمارة والتصميم الحضري',
    subtitle: 'دليل تطبيقي لأدوات Autodesk Forma و Snaptrude و VizMaker في المشاريع المعاصرة',
    author: 'م. عمر سليم',
    discipline: 'ai-aec',
    disciplineLabel: 'الذكاء الاصطناعي في العمارة',
    pages: 176,
    year: '2026',
    edition: 'الطبعة الأولى',
    language: 'العربية',
    coverVariant: 'gis',
    downloadUrl: 'http://bimarabia.com/',
    description:
      'يستعرض هذا الإصدار الحديث منهجيات توظيف الذكاء الاصطناعي التوليدي منذ المراحل الأولية للتصميم وحتى التصور البصري، عبر دراسة تطبيقية لـ Autodesk Forma و Snaptrude و VizMaker.',
    chapters: [
      {
        number: 'الفصل 01',
        title: 'التخطيط الحضري والتحليلات البيئية الفورية في Autodesk Forma',
        pages: '10 – 62',
        excerpt:
          'يتيح التقييم اللحظي للإشعاع الشمسي وحركة الرياح والضوضاء اتخاذ قرارات تصميمية مستندة إلى بيانات كمية منذ اليوم الأول للمشروع.',
      },
      {
        number: 'الفصل 02',
        title: 'النمذجة السحابية التعاونية وحصر المساحات في Snaptrude',
        pages: '63 – 122',
        excerpt:
          'تختصر البيئات السحابية الفجوة بين الكتلة المعمارية الأولية ونموذج البيم المتوافق مع معايير IFC و Revit.',
      },
      {
        number: 'الفصل 03',
        title: 'توليد البدائل المعمارية والإظهار السريع باستخدام VizMaker',
        pages: '123 – 176',
        excerpt:
          'تمكّن أدوات التصور التوليدي المعماري من استكشاف عشرات المعالجات للواجهات والخامات والإضاءة قبل الانتقال إلى مرحلة التفصيل.',
      },
    ],
  },
  {
    id: 'book-navisworks-infra',
    accessionCode: 'BK-05',
    title: 'التنسيق الهندسي وبرامج البنية التحتية (Navisworks & Civil 3D)',
    subtitle: 'استراتيجيات كشف التعارضات، معيار IFC، والتحول الرقمي لمشاريع البنية التحتية',
    author: 'مركز بيم أرابيا للبحث العلمي',
    discipline: 'navisworks',
    disciplineLabel: 'Navisworks & البنية التحتية',
    pages: 192,
    year: '2025',
    edition: 'الطبعة الثانية',
    language: 'العربية',
    coverVariant: 'coordination',
    downloadUrl: 'http://bimarabia.com/',
    description:
      'مرجع متخصص في أعمال التنسيق الهندسي متعدد التخصصات وإدارة نماذج البنية التحتية، يشرح قواعد الفحص في Navisworks، تقارير BCF، والربط الزمني 4D/5D.',
    chapters: [
      {
        number: 'الفصل 01',
        title: 'تنسيق النماذج الفيدرالية للمباني وشبكات البنية التحتية',
        pages: '15 – 64',
        excerpt:
          'يتطلب تنسيق شبكات الصرف والطرق مع المباني توحيد الإحداثيات الجغرافية ومستويات المرجع بدقة تمنع أخطاء الموقع.',
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
        title: 'توظيف البعد الرابع 4D والخامس 5D وتبادل IFC 4.3',
        pages: '131 – 192',
        excerpt:
          'ربط عناصر النموذج بأنشطة الجدول الزمني يكشف اختناقات التوريد والتنفيذ في الموقع قبل حدوثها بأشهر.',
      },
    ],
  },
  {
    id: 'book-rhino-blender-viz',
    accessionCode: 'BK-06',
    title: 'النمذجة المتقدمة والإظهار المعماري: Rhino و Blender و Twinmotion',
    subtitle: 'تكامل الأشكال الحرة والبيئات مفتوحة المصدر مع مسارات عمل البيم',
    author: 'م. عمر سليم وفريق بيم أرابيا',
    discipline: 'modeling-viz',
    disciplineLabel: 'Rhino · Blender · Twinmotion',
    pages: 168,
    year: '2025',
    edition: 'الطبعة الأولى',
    language: 'العربية',
    coverVariant: 'grid',
    downloadUrl: 'http://bimarabia.com/',
    description:
      'دليل عملي للمعماريين والمصممين يغطي بناء الواجهات المعقدة في Rhino، العمل ضمن منظومة Blender مفتوحة المصدر و BlenderBIM، وإنتاج جولات الواقع الافتراضي السريعة عبر Twinmotion.',
    chapters: [
      {
        number: 'الفصل 01',
        title: 'النمذجة الحرة والبارامترية في Rhino و Rhino.Inside.Revit',
        pages: '11 – 58',
        excerpt:
          'يتيح جسر Rhino.Inside.Revit الجمع بين حرية التشكيل الهندسي في Grasshopper والانضباط المعلوماتي والجدولة داخل Revit.',
      },
      {
        number: 'الفصل 02',
        title: 'منظومة OpenBIM في Blender وإدارة ملفات IFC',
        pages: '59 – 114',
        excerpt:
          'أصبح Blender مع إضافة Bonsai/BlenderBIM أداة احترافية مجانية لقراءة وتعديل وتدقيق نماذج IFC وربطها بمحركات الريندر.',
      },
      {
        number: 'الفصل 03',
        title: 'الإظهار الزمني الحقيقي والواقع الافتراضي عبر Twinmotion',
        pages: '115 – 168',
        excerpt:
          'يسمح المزامنة المباشرة مع برامج النمذجة بتقديم عروض تفاعلية للمالك تعكس تغييرات التصميم لحظياً.',
      },
    ],
  },
];

export const MAGAZINE_ISSUES: MagazineIssue[] = [
  {
    id: 'mag-32',
    issueNumber: 'العدد 32',
    title: 'الذكاء الاصطناعي التوليدي: Forma و Snaptrude و VizMaker',
    theme: 'توظيف أدوات الذكاء الاصطناعي في التصميم الحضري والمعماري والإظهار',
    discipline: 'ai-aec',
    disciplineLabel: 'الذكاء الاصطناعي في العمارة',
    releaseDate: '2026',
    pages: 84,
    featuredArticles: [
      'التكامل بين Autodesk Forma والريفيت في المشاريع السكنية والحضرية',
      'تجربة عملية لمنصة Snaptrude في النمذجة السحابية السريعة',
      'استخدام VizMaker في استكشاف بدائل الواجهات المعمارية',
    ],
    pdfUrl: 'http://bimarabia.com/',
  },
  {
    id: 'mag-28',
    issueNumber: 'العدد 28',
    title: 'تطبيقات ISO 19650 وبروتوكول COBie في مشاريع الشرق الأوسط',
    theme: 'دراسات حالة واقعية وحوكمة بيئة البيانات المشتركة CDE وتسليم الأصول',
    discipline: 'bim-iso',
    disciplineLabel: 'ISO 19650 & COBie',
    releaseDate: '2025',
    pages: 78,
    featuredArticles: [
      'دليل صياغة EIR عملي للجهات المالكة وفق ISO 19650',
      'إعداد وتصدير جداول COBie للربط مع إدارة المرافق',
      'الاستعداد المهني للاعتمادات الدولية في إدارة المعلومات',
    ],
    pdfUrl: 'http://bimarabia.com/',
  },
  {
    id: 'mag-24',
    issueNumber: 'العدد 24',
    title: 'أتمتة العمليات الهندسية عبر Python و Dynamo و pyRevit',
    theme: 'حلول برمجية عملية داخل بيئات Revit و Civil 3D و Navisworks',
    discipline: 'automation',
    disciplineLabel: 'Python & Dynamo',
    releaseDate: '2025',
    pages: 72,
    featuredArticles: [
      'بناء أدوات فحص جودة آلية باستخدام Python و pyRevit',
      'أتمتة نماذج الطرق والمجاري المائية في Dynamo for Civil 3D',
      'ربط بيانات النماذج بجداول Excel وقواعد البيانات الهندسية',
    ],
    pdfUrl: 'http://bimarabia.com/',
  },
  {
    id: 'mag-19',
    issueNumber: 'العدد 19',
    title: 'النمذجة المتقدمة والإظهار: Rhino و Blender و Twinmotion',
    theme: 'تكامل الأشكال الحرة والبرمجيات مفتوحة المصدر مع مسارات البيم',
    discipline: 'modeling-viz',
    disciplineLabel: 'Rhino · Blender · Twinmotion',
    releaseDate: '2024',
    pages: 68,
    featuredArticles: [
      'تجارب عملية في Rhino.Inside.Revit للواجهات البارامترية',
      'مستقبل BlenderBIM و OpenBIM في المكاتب الهندسية',
      'إخراج عروض الواقع الافتراضي والمحاكاة في Twinmotion',
    ],
    pdfUrl: 'http://bimarabia.com/',
  },
  {
    id: 'mag-14',
    issueNumber: 'العدد 14',
    title: 'إدارة التعارضات والتحول الرقمي لمشاريع البنية التحتية',
    theme: 'تكامل Civil 3D و Navisworks ومعايير IFC 4.3 في المواقع الكبرى',
    discipline: 'navisworks',
    disciplineLabel: 'Navisworks & البنية التحتية',
    releaseDate: '2023',
    pages: 64,
    featuredArticles: [
      'بناء مصفوفة تعارضات ذكية لمشاريع البنية التحتية والمحطات',
      'أتمتة تقارير BCF بين فرق المكتب والموقع',
      'ربط الكميات المستخرجة بالجدول الزمني 4D/5D BIM',
    ],
    pdfUrl: 'http://bimarabia.com/',
  },
  {
    id: 'mag-07',
    issueNumber: 'العدد 07',
    title: 'العدد الخاص بالبرمجة البصرية Dynamo والكتلة في الريفيت',
    theme: 'مدخل عربي موسع للدينامو والعلاقات الرياضية والبارامترية',
    discipline: 'automation',
    disciplineLabel: 'Python & Dynamo',
    releaseDate: '2020',
    pages: 60,
    featuredArticles: [
      'مقدمة شاملة لبيئة Dynamo للمهندسين المعماريين والإنشائيين',
      'تشكيل الكتل المعمارية في Revit Massing',
      'أتمتة استخراج الإحداثيات وجداول الأبواب والغرف',
    ],
    pdfUrl: 'http://bimarabia.com/',
  },
];

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path-iso-certification',
    index: '01',
    title: 'مسار معايير ISO 19650 وبروتوكول COBie والاعتمادات الدولية',
    role: 'BIM Manager & Information Lead',
    durationEstimate: '5 أسابيع · 26 ساعة',
    description:
      'مسار تأهيلي متكامل يركز على حوكمة المعلومات، صياغة EIR و BEP، إدارة بيئة البيانات المشتركة CDE، وتسليم بيانات الأصول COBie استعداداً للاعتمادات الدولية.',
    discipline: 'bim-iso',
    recommendedBookIds: ['book-road-to-bim', 'book-iso-19650'],
    recommendedVideoIds: ['vid-iso-cobie-just-bim', 'vid-bim-talks-sustainability'],
    outcomes: [
      'إعداد خطط تنفيذ البيم BEP وفق سلسلة معايير ISO 19650',
      'تجهيز وتدقيق ملفات COBie و IFC للتسليم النهائي وإدارة المرافق',
    ],
  },
  {
    id: 'path-python-dynamo',
    index: '02',
    title: 'مسار الأتمتة البرمجية (Python & Dynamo في Revit و Civil 3D)',
    role: 'BIM Automation Engineer',
    durationEstimate: '6 أسابيع · 30 ساعة',
    description:
      'للمهندسين الساعين إلى أتمتة العمليات المتكررة وبناء أدوات داخلية مخصصة عبر Dynamo و Python داخل بيئات Revit و Civil 3D و Navisworks.',
    discipline: 'automation',
    recommendedBookIds: ['book-dynamo-python'],
    recommendedVideoIds: ['vid-python-dynamo-aec'],
    outcomes: [
      'كتابة سكربتات Python و pyRevit لأتمتة فحص الجودة واستخراج البيانات',
      'تطبيق Dynamo for Civil 3D لأتمتة مشاريع الطرق والبنية التحتية',
    ],
  },
  {
    id: 'path-ai-modeling',
    index: '03',
    title: 'مسار الذكاء الاصطناعي التوليدي والنمذجة المتقدمة',
    role: 'Computational Architect & Designer',
    durationEstimate: '5 أسابيع · 24 ساعة',
    description:
      'يجمع بين أدوات الذكاء الاصطناعي الحديثة (Autodesk Forma، Snaptrude، VizMaker) وبرامج النمذجة والإظهار المتقدمة (Rhino، Blender، Twinmotion).',
    discipline: 'ai-aec',
    recommendedBookIds: ['book-genai-aec', 'book-rhino-blender-viz'],
    recommendedVideoIds: ['vid-genai-architecture', 'vid-rhino-blender-twinmotion'],
    outcomes: [
      'توليد وتحليل البدائل العمرانية والمناخية عبر Forma و Snaptrude',
      'الربط الاحترافي بين Rhino و Blender و Twinmotion ومسارات البيم',
    ],
  },
  {
    id: 'path-infra-coordination',
    index: '04',
    title: 'مسار التنسيق الهندسي والبنية التحتية (Navisworks & IFC)',
    role: 'BIM & Infrastructure Coordinator',
    durationEstimate: '5 أسابيع · 25 ساعة',
    description:
      'يركز على استراتيجيات التحول الرقمي لمشاريع البنية التحتية، اكتشاف التعارضات بدون أخطاء في Navisworks، وتبادل البيانات المفتوح عبر IFC.',
    discipline: 'navisworks',
    recommendedBookIds: ['book-navisworks-infra'],
    recommendedVideoIds: ['vid-infra-navisworks-ifc'],
    outcomes: [
      'إدارة النماذج الفيدرالية وتشغيل مصفوفة التعارضات وإصدار تقارير BCF',
      'تنسيق مشاريع البنية التحتية وربط الجداول الزمنية 4D/5D',
    ],
  },
];
