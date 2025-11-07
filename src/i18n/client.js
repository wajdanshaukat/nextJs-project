"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions } from "./settings";

// Load your translations
const translations = {
  en: {
    translation: {
      "features": "Features",
      "avatars": "Avatars",
      "media": "Media",
      "news": "News",
      "jumpIntoTheVerse": "JUMP INTO\n THE VERSE",
      "boundlessWorldDesciption":
      "Discover the future of virtual experiences with Zoaverse - an immersive platform for events, shows, classes, and meetings in 3D interactive spaces. Engage, learn, and connect like never before.",
      "huntOrBeHunted": "HUNT OR\n BE HUNTED",
      "round3Description":
        "Step into Round3 Qurtobah, a desert-themed Prop & Hunt adventure inspired by Arabian heritage. Hide, hunt, and outsmart your rivals in a setting full of tension and excitement.",
      "thinkFastLaughHarder": "THINK FAST,\n LAUGH HARDER",
      "zeroIqDescription":
        "Two teams go head-to-head answering unpredictable, hilarious, and sometimes downright silly questions. Think fast, laugh harder, and embrace the chaos.",
      "noMercyNoEscape": "NO MERCY,\n NO ESCAPE",
      "round3AlphaDescription":
        "Enter Round3 Alpha, a futuristic Prop & Hunt clash where advanced robots face off against heavily armed soldiers. Tactics, technology, and survival collide in the ultimate showdown.",
      "downloadText": "DOWNLOAD NOW",
      "moreInfo": "MORE INFO",
      "whyChoose": "Why Choose",
      "zoaverse": "ZOEVERSE",
      "virtualSpaces": "Virtual Spaces",
      "Store": "Store",
      "gamingHub": "Gaming Hub",
      "conferenceHeader": "Conference",
      "conferenceDesc": "Host professional events in a sleek, 3D auditorium designed for large audiences. Engage participants with live presentations, Q&A sessions, and multi-language support for an inclusive experience.",
      "podcastHeader": "Podcast",
      "podcastDesc": "Bring your voice to life in an immersive studio environment. Turn traditional audio shows into interactive sessions with dynamic 3D settings, available on PC and coming soon to mobile.",
      "galleryHeader": "Gallery",
      "galleryDesc": "Showcase art, products, or ideas in customizable 3D galleries. From corporate exhibitions to creative showcases, tailor your space to match your brand or vision.",
      "classroomHeader": "Classroom",
      "classroomDesc": "Transform learning into an interactive experience. Equipped with virtual whiteboards, collaboration tools, and real-time communication to make education engaging and accessible.",
      "lobbyHeader": "Lobby",
      "lobbyDesc": "Your central hub for connection and networking. Meet, chat, and navigate easily in a visually stunning space designed for smooth onboarding and community building.",
      "gesturesHeader": "Gestures",
      "gesturesDesc": "Express yourself with animated emotes and fun gestures. From celebratory moves to quirky actions, make your avatar truly yours.",
      "backDecoHeader": "Back Decoration",
      "backDecoDesc": "Stand out with unique gear and accessories. Equip wings, shields, or futuristic gadgets to personalize your look and presence.",
      "companionsHeader": "Companions",
      "companionsDesc": "Adopt a virtual sidekick to accompany you on your journey. Choose from a range of adorable or edgy companions that make every moment more fun.",
      "headwearHeader": "Headwear",
      "headwearDesc": "Top off your avatar with playful, stylish, or bold headgear. From lighthearted accessories to statement pieces, show off your personality.",
      "round3AlphaHeader": "Round3 - Alpha",
      "round3AlphaDesc": "Enter a futuristic battlefield where robots clash with armored soldiers. A thrilling Prop & Hunt experience that blends strategy, survival, and high-tech combat.",
      "zeroIqHeader": "Zero IQ",
      "zeroIqDesc": "Dive into the craziest trivia game show you’ll ever play. Two teams face bizarre, funny, and unpredictable questions in a competition full of laughs.",
      "round3QurtobaHeader": "Round3 - Qurtoba",
      "round3QurtobaDesc": "A desert-inspired Prop & Hunt set in an Arabian city. Hide, hunt, and outwit your opponents in a richly detailed environment that brings heritage and action together.",
      "expressYourUnique": "EXPRESS YOUR UNIQUE",
      "identity": "IDENTITY",
      "avatarDescription": "Bring your personality to life with endless customization. From quirky\n headwear and stylish crowns to expressive gestures and one-of-a-kind companions, Zoaverse gives you all the tools to stand out.",
      "personalized": "PERSONALIZED",
      "personalizedDesc": "Customize your avatar to match your vibe with limitless expressions, accessories, and more.",
      "companions" :"COMPANIONS",
      "companionsDescri": "From playful creatures to futuristic bots, they're more than accessories—they're part of your journey.",
      "artGalleryHeading": "Art Gallery",
      "artGallerySubHeading": "Explore immersive digital art in our virtual lobby.",
      "lobbyHeading": "Lobby",
      "lobbySubHeading": "Welcome to a modern and elegant digital space.",
      "conferenceRoomHeading": "Conference Room",
      "conferenceRoomSubHeading": "Collaborate with teams in a futuristic environment.",
      "openSpaceHeading": "Open Space",
      "openSpaceSubHeading": "Flexible zones for creative collaboration.",
      "loungeAreaHeading": "Lounge Area",
      "loungeAreaSubHeading": "Relax and connect in a cozy digital lounge.",
      "meetingHubHeading": "Meeting Hub",
      "meetingHubSubHeading": "A private yet collaborative meeting environment.",
      "happening": "HAPPENING",
      "now": "NOW",
      "newsDescription": "Stay connected to live events unfolding inside Zoaverse. From conferences and workshops to concerts and community meetups, there's always something exciting to join.",  
      "event1_title": "Event Name",
      "event1_day": "Monday",
      "event1_desc": "Zoaverse provides a wide selection of customizable venues that makes...",
      "event1_time": "12:00 PM",
      "event1_fullDate": "24 May 2024",
      
      "event2_title": "Gaming Tournament",
      "event2_day": "Wednesday",
      "event2_desc": "Compete with players from around the world in our exclusive gaming tournament.",
      "event2_time": "7:00 PM",
      "event2_fullDate": "17 May 2025",
      
      "event3_title": "Virtual Workshop",
      "event3_day": "Friday",
      "event3_desc": "Join our interactive workshop to learn new skills and connect with like-minded individuals.",
      "event3_time": "2:00 PM",
      "event3_fullDate": "19 May 2025",
      
      "ksaTime": "KSA Time",

      "followUs": "Follow us",
      "newsletter": "Newsletter",
      "emailPlaceholder": "Email address",
      "subscribe": "SUBSCRIBE",
      "termsOfUse": "TERMS OF USE",
      "privacyPolicy": "PRIVACY POLICY",
      "contactUs": "CONTACT US",
      "copyright": "COPYRIGHT BY @ ZOAVERSE - 2025",
      "unsupportedTitle": "Unsupported Platform",
      "unsupportedDesc": "It looks like your device isn’t supported for automatic download. Please choose your version manually below:",
    },
  },
  ar: {
    translation: {
      "features": "المميزات",
      "avatars": "الشخصيات",
      "media": "الوسائط",
      "news": "الأخبار",
      "jumpIntoTheVerse": "اقفز إلى \nالعالم الافتراضي",
      "boundlessWorldDesciption":
        "اكتشف مستقبل التجارب الافتراضية مع “زوافيرس” منصة غامرة تتيح لك حضور الفعاليات والعروض والدروس والاجتماعات داخل عوالم ثلاثية الأبعاد تفاعلية. تواصل، وتعلم، واستمتع كما لم تفعل من قبل.",
      "huntOrBeHunted": "اصطَد…\n أو كُن الفريسة",
      "round3Description":
        "ادخل عالم قرطبة، مغامرة “Prop & Hunt” المستوحاة من التراث العربي. اختبئ، اصطد، وتغلّب على خصومك في أجواء مليئة بالتحدي والإثارة.",
      "thinkFastLaughHarder": "فكّر بسرعة…\n واضحك أكثر",
      "zeroIqDescription":
        "فريقان يتنافسان وجهًا لوجه للإجابة على أسئلة غريبة ومضحكة وغير متوقعة. فكّر بسرعة، واضحك من قلبك، واستمتع بالفوضى الممتعة!",
      "noMercyNoEscape": "لا رحمة…\n ولا مفر",
      "round3AlphaDescription":
        "ادخل عالم ألفا، ساحة قتال مستقبلية في تجربة “Prop & Hunt” ملحمية. روبوتات متطورة تواجه جنودًا مدججين بالسلاح, حيث تتلاقى التكتيكات والتقنية والبقاء في معركة مصيرية لا تُنسى",
      "downloadText": "حمّل الآن",
      "moreInfo": "رؤية المزيد",
      "whyChoose": "لماذا تختار",
      "zoaverse": "زوافيرس",
      "virtualSpaces": "المساحات الافتراضية",
      "store": "المتجر",
      "gamingHub": "مركز الألعاب",
      "conferenceHeader": "قاعة المؤتمرات",
      "conferenceDesc": "استضف فعاليات احترافية داخل قاعة ثلاثية الأبعاد أنيقة مصممة للجماهير الكبيرة. تفاعل مع الحضور بعروض مباشرة، جلسات نقاش، ودعم لغات متعددة لتجربة شاملة",
      "podcastHeader": "البودكاست",
      "podcastDesc": "انقل صوتك إلى عالم غامر داخل استوديو ثلاثي الأبعاد. حوّل برامجك الصوتية إلى جلسات تفاعلية بديناميكية بصرية جذابة، متاحة على الكمبيوتر وقريبًا على الجوال",
      "galleryHeader": "المعرض",
      "galleryDesc": "اعرض أعمالك الفنية أو منتجاتك أو أفكارك داخل معارض ثلاثية الأبعاد قابلة للتخصيص. من المعارض المؤسسية إلى العروض الإبداعية، صمم مساحتك بما يعكس علامتك ورؤيتك",
      "classroomHeader": "القاعة التعليمية",
      "classroomDesc": "حوّل التعلم إلى تجربة تفاعلية مشوقة. مزودة بلوحات تفاعلية افتراضية وأدوات تعاون واتصال لحظي تجعل التعليم أكثر جاذبية وسهولة",
      "lobbyHeader": "الردهة",
      "lobbyDesc": "مركزك الرئيسي للتواصل والتعارف. التَقِ، وتحدث، وتصفح بسهولة داخل مساحة بصرية مبهرة مصممة لتسهيل الانضمام وبناء المجتمعات",
      "gesturesHeader": "الإيماءات",
      "gesturesDesc": "عبّر عن نفسك بحركات وإيماءات تفاعلية ممتعة. من الرقصات الاحتفالية إلى الحركات الغريبة، اجعل شخصيتك تنبض بالحياة",
      "backDecoHeader": "الزخارف الخلفية",
      "backDecoDesc": "تميّز بإضافات فريدة مثل الأجنحة والدروع والأدوات المستقبلية التي تضيف لشخصيتك حضورًا وتأثيرًا مميزًا",
      "companionsHeader": "الرفقاء",
      "companionsDesc": "تبنَّ رفيقًا افتراضيًا يشاركك رحلتك في زوافيرس. اختر من مجموعة من المخلوقات اللطيفة أو الروبوتات الجريئة التي تضيف متعة لكل لحظة",
      "headwearHeader": "الإكسسوارات الرأسية",
      "headwearDesc": "زيّن شخصيتك الافتراضية بإكسسوارات مرحة أو أنيقة أو جريئة. من القطع اللطيفة إلى التصاميم المميزة، عبّر عن أسلوبك بحرية",
      "round3AlphaHeader": "راوند٣ - ألفا",
      "round3AlphaDesc": "ادخل ساحة قتال مستقبلية حيث تتواجه الروبوتات مع الجنود المدرّعين. تجربة مليئة بالإثارة تجمع بين الاستراتيجية والبقاء والتقنية المتقدمة",
      "zeroIqHeader": "Zero IQ",
      "zeroIqDesc": "أطرف عرض مسابقات تفاعلي ستجربه! فريقان يتنافسان للإجابة على أسئلة غريبة ومضحكة في أجواء مليئة بالحماس والضحك",
      "round3QurtobaHeader": "راوند٣ - قرطبة",
      "round3QurtobaDesc": "تجربة مستوحاة من المدن العربية القديمة في لعبة “Prop & Hunt”. اختبئ، طارد، واهزم خصومك في بيئة غنية تجمع بين التراث والإثارة",
        
      "expressYourUnique": "عبّر عن",
      "identity": "هويتك المميزة",
      "avatarDescription": "أظهر شخصيتك الحقيقية مع خيارات تخصيص لا محدودة. من الإكسسوارات الفريدة والتيجان العصرية إلى الإيماءات المعبرة والرفقاء المميزين، يمنحك “زوافيرس” كل الأدوات التي تحتاجها لتبرز بأسلوبك الخاص",
      "personalized": "الهوية الفريدة",
      "personalizedDesc": "خصص شخصيتك الافتراضية لتناسب أسلوبك ومزاجك من خلال تعابير وإيماءات وإكسسوارات لا حصر لها.",
      "companions" :"الرفقاء",
      "companionsDescri": "من المخلوقات المرحة إلى الروبوتات المستقبلية، هم أكثر من مجرد إكسسوارات — إنهم جزء من رحلتك داخل العالم الافتراضي",

      "artGalleryHeading": "معرض الفنون",
      "artGallerySubHeading": "استكشف الفن الرقمي الغامر في ردهتنا الافتراضية",
      "lobbyHeading": "ردهة",
      "lobbySubHeading": "مرحباً بكم في مساحة رقمية حديثة وأنيقة",
      "conferenceRoomHeading": "غرفة الاجتماعات",
      "conferenceRoomSubHeading": "التعاون مع الفرق في بيئة مستقبلية",
      "openSpaceHeading": "الفضاء المفتوح",
      "openSpaceSubHeading": "مناطق مرنة للتعاون الإبداعي",
      "loungeAreaHeading": "منطقة الصالة",
      "loungeAreaSubHeading": "استرخِ وتواصل في صالة رقمية مريحة",
      "meetingHubHeading": "مركز الاجتماع",
      "meetingHubSubHeading": "بيئة اجتماعات خاصة وتعاونية",

      "happening": "يحدث",
      "now": "الآن",
      "newsDescription": "ابقَ على تواصل مع الفعاليات الحية داخل زوافيرس. من المؤتمرات وورش العمل إلى الحفلات والاجتماعات المجتمعية، دائمًا هناك حدث شيّق بانتظارك!",

      "event1_title": "اسم الفعالية",
      "event1_day": "الاثنين",
      "event1_desc": "زوافيرس تقدّم مجموعة واسعة من القاعات القابلة للتخصيص لتجعل تجربتك مميزة ومتفردة.",
      "event1_time": "١٢:٠٠ ظهرًا",
      "event1_fullDate": "٢٤ مايو ٢٠٢٤",
      
      "event2_title": "بطولة الألعاب",
      "event2_day": "الأربعاء",
      "event2_desc": "نافس لاعبين من جميع أنحاء العالم في بطولتنا الحصرية للألعاب.",
      "event2_time": "٧:٠٠ مساءً",
      "event2_fullDate": "١٧ مايو ٢٠٢٥",
      
      "event3_title": "ورشة عمل افتراضية",
      "event3_day": "الجمعة",
      "event3_desc": "انضم إلى ورشتنا التفاعلية لتتعلم مهارات جديدة وتتعرف على أشخاص ذوي اهتمامات مشتركة.",
      "event3_time": "٢:٠٠ ظهرًا",
      "event3_fullDate": "١٩ مايو ٢٠٢٥",
      
      "ksaTime": "بتوقيت السعودية",

      "followUs": "تواصل معنا",
      "newsletter": "النشرة البريدية",
      "emailPlaceholder": "البريد الاليكتروني",
      "subscribe": "اشترك معنا",
      "termsOfUse": "الشروط والاحكام",
      "privacyPolicy": "سياسة الخصوصية",
      "contactUs": "تواصل معنا",
      "copyright": "جميع الحقوق محفوظة @ ZOAVERSE - 2025",
      "unsupportedTitle": "منصة غير مدعومة",
      "unsupportedDesc": "يبدو أن جهازك غير مدعوم للتنزيل التلقائي. يُرجى اختيار إصدارك يدويًا أدناه:",
    },
  },
};

const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("language") : null;

const defaultLang = savedLang || "en";

if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      ...getOptions(defaultLang),
      resources: translations,
      lng: defaultLang, // Always start from what’s in localStorage
      fallbackLng: "en",
      detection: {
        order: ["localStorage"],
        caches: ["localStorage"], // Keep it consistent
      },
      interpolation: {
        escapeValue: false, // React already escapes
      },
    });
}

export default i18next;