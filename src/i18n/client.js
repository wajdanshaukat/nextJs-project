'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions } from './settings';

// Load your translations
const translations = {
  en: {
    translation: {
        "welcomeDescription":"Unveils the Middle East's Metaversal Marvel",
        "start":"Start",
        "boundlessWorlds":"Boundless Worlds",
        "boundlessWorldDesciption":"Discover our virtual platform where creativity, technology, and social interaction come together. Join us to explore a new and exciting experience where you can meet friends, attend events, and dive into unforgettable digital adventures.",
        "jumpIntoTheVerse":"Jump into the verse",
        "onlineUsers":"Online users",
        "onlineSubtext":"Be part of our community and experience the virtual world in a new dimensions.",
        "heading2":"CREATE. CONNECT. HOST. ZOAVERSE METAVERSE",
        "desciption2":"Zoaverse provides a wide selection of customizable venues that makes it easy to get started in the metaverse with just a few clicks.",
        "downloadText": "Download",
        "features": "Features",
        "avatars": "Avatars",
        "spaces": "Spaces",
        "whyChooseText":"Why choose",
        "zoaverseText":"Zoaverse",
        "zoaverseSubtext":"Unveiling the Canvas of Possibilities with Metaverse",
        "crossPlatform":"Cross Platform",
        "crossPlatoformSubtext":"zoaverse makes it easy for creators and brands to take their existing 2D hosted experiences and amplify them with playable, immersive 3D venues and occasions. Available on the PC, and soon will be in iOS and Android.",
        "highFidelityVenues":"HIGH-FIDELITY VENUES",
        "highFidelityVenuesSubtext":"ZOAVERSE offers a wide range of customizable themes for all meetings, conferences, and events. With many options to choose from, you'll be able to find the perfect fit for your virtual gathering.",
        "supportsArabic":"SUPPORTS ARABIC UI",
        "supportsArabicSubtext":"provides a flexible and easy-to-use interface that supports Arabic as primary language, along with other languages, to make it easier for Arab users to navigate without facing any difficulties.",
        "spatialAudio":"SPATIAL AUDIO CONVERSATION",
        "spatialAudioSubtext":"Enables intimate conversations with others in metaverse spaces via spatial voice chat. This mimics real life with audio being amplified or diminished based on proximity to others, In addition to the usual typing chat to satisfy all uses.",
        "personalized":"PERSONALIZED",
        "personalizedText":"Customize your avatar to match your vibe! Includes limitless variations of expression, including Stable Diffusion AI-powered designer tools.",
        "expressiveText":"EXPRESSIVE",
        "expressiveSubtext":"We're pushing the boundaries of social interaction in the metaverse, including a variety of emoji-based reactions, emotes, and many other subtle and not-so-subtle expressive actions.",
        "heading3":"WE WORK HARD PLAY HARD EXPLORE CREATIVE MIND",
        "headingSubdescription":"Express your unique identity with fully customizable avatars. Choose from a variety of hairstyles, outfits, and accessories to create a look that represents you, and update your avatar anytime to keep your digital presence fresh and dynamic.",
        "lobbyText":"Lobby",
        "lobbySubtext":"Zoaverse provides a wide selection of customizable venues that makes it easy to get started in the metaverse with just a few clicks.",
        "artGallery":"ART GALLERY",
        "artGallerySubtext":"Zoaverse provides a wide selection of customizable venues that makes it easy to get started in the metaverse with just a few clicks.",
        "conferenceRoom":"Conference Room",
        "conferenceRoomText":"A space inspired by your imagination, which you can create and configure according to your expectations and goals and provide it with all available luxuries.",
        "openSpaceText":"OPEN SPACE",
        "openSpaceSubtext":"Zoaverse provides a wide selection of customizable venues that makes it easy to get started in the metaverse with just a few clicks.",
        "followUs":"Follow us",
        "newsletterText":"Newsletter",
        "emailAddressText":"Email Address",
        "subscribeText":"Subscribe",
        "termsOfUse":"Terms of use",
        "privacyPolicyText":"Privacy Policy",
        "contact":"CONTACT US",
        "copyrightText":"Copyright by"
      }
  },
  ar: {
    translation: {
        "welcomeDescription":"يكشف النقاب عن أعجوبة الشرق الأوسط",
        "start":"إبدأ الآن",
        "boundlessWorlds":"عوالم لا حدود لها",
        "boundlessWorldDesciption":"مرحباً بك في منصتنا الافتراضية التي تجمع بين الإبداع، التكنولوجيا، والتواصل الاجتماعي. انضم إلينا لاكتشاف تجربة جديدة ومثيرة حيث يمكنك الاجتماع مع الأصدقاء، حضور الفعاليات، والانغماس في مغامرات رقمية لا تُنسى.",
        "jumpIntoTheVerse":"انطلق في عالم الأبعاد الرقمي",
        "onlineUsers":"مستخدمي الإنترنت",
        "onlineSubtext":"كن جزءًا من مجتمعنا واستمتع بتجربة العالم الافتراضي بأبعاد جديدة.",
        "heading2":"استضف .أنشئ . تواصل داخل زوافيرس",
        "desciption2":" توفر زوافيرس مجموعة واسعة من المساحات القابلة للتعديل والتي تجعل من السهل البدء في عالم الميتافيرس ببضع نقرات فقط ",
        "whyChooseText":"لماذا تختار",
        "zoaverseText":" زوافيرس ",
        "downloadText": "تحميل",
        "features": "الميزات",
        "avatars": "الصور الرمزية",
        "spaces": "المساحات",
        "zoaverseSubtext":" الكشف عن لوحة الاحتمالات مع Metaverse ",
        "crossPlatform":"المحادثات بين المستخدمين",
        "crossPlatoformSubtext":" يُمكّنك من إجراء محادثات وديه مع الآخرين في المساحات الافتراضية عبر الدردشة الصوتية المكانية. يُحاكي الواقع حيث يتضخم الصوت أو يتلاشى بناءً على القرب من الآخرين، بالإضافة إلى الدردشة النصية المعتادة لتلبية جميع احتياجات التواصل.",
        "highFidelityVenues":" دعم اللغة العربية",
        "highFidelityVenuesSubtext":"واجهة مرنة وسهلة تدعم اللغة العربية كلغة أساسية بجانب لغات أخرى لتسهل على المستخدمين العرب التنقل داخلها ",
        "supportsArabic":" التصميمات الفريدة",
        "supportsArabicSubtext":"مجموعة واسعة من المساحات المختلفه عالية الجودة بتصميمات حديثة تجعل تجربة الميتافيرس أكثر تفردًا لتخدم الشركات و الأفراد و تمكنهم من إنشاء ما يناسب تجمعاتهم الإفتراضية",
        "spatialAudio":"المحادثات بين المستخدمين",
        "spatialAudioSubtext":" يُمكّنك من إجراء محادثات وديه مع الآخرين في المساحات الافتراضية عبر الدردشة الصوتية المكانية. يُحاكي الواقع حيث يتضخم الصوت أو يتلاشى بناءً على القرب من الآخرين، بالإضافة إلى الدردشة النصية المعتادة لتلبية جميع احتياجات التواصل.",
        "personalized":"الهوية الفريدة",
        "personalizedText":" اختر شخصيتك الإفتراضية الخاصة أو قم باستخدم الذكاء الإصطناعي لجعلها نسختك الإفتراضية المطابقة لك ",
        "expressiveText":"التعبيرات التفاعلية",
        "expressiveSubtext":" نحن ندفع الحدود للتفاعل الإجتماعي داخل عالم الميتافيرس ، بإضافة مجموعة متنوعة من الرموز التعبيرية و العاطفية لتستخدم كردود أفعال داخل العالم الإفتراضي",
        "heading3":"عبر عن نفسك بشخصيتك الإفتراضية الخاصة",
        "headingSubdescription":" عبّر عن هويتك الفريدة مع شخصيات قابلة للتخصيص بالكامل. اختر من بين مجموعة متنوعة من تسريحات الشعر والملابس والإكسسوارات لخلق مظهر يعبر عنك، وقم بتحديث شخصيتك في أي وقت للحفاظ على حضورك الرقمي جديدًا وديناميكيًا.",
        "lobbyText":"ردهة",
        "lobbySubtext":"يوفر Zoaverse مجموعة واسعة من الأماكن القابلة للتخصيص والتي تجعل من السهل البدء في metaverse ببضع نقرات فقط.",
        "artGallery":"معرض فني",
        "artGallerySubtext":"يوفر Zoaverse مجموعة واسعة من الأماكن القابلة للتخصيص والتي تجعل من السهل البدء في metaverse ببضع نقرات فقط.",
        "conferenceRoom":"غرفة الاجتماعات",
        "conferenceRoomText":"مساحة مستوحاة من خيالك، يمكنك إنشاؤها وتكوينها وفقًا لتوقعاتك وأهدافك وتزويدها بجميع الكماليات المتاحة.",
        "openSpaceText":"مساحة مفتوحة",
        "openSpaceSubtext":"يوفر Zoaverse مجموعة واسعة من الأماكن القابلة للتخصيص والتي تجعل من السهل البدء في metaverse ببضع نقرات فقط.",
        "followUs":"تواصل معنا",
        "newsletterText":"النشرة البريدية",
        "emailAddressText":"عنوان البريد الإلكتروني",
        "subscribeText":"البريد الاليكتروني",
        "termsOfUse":"شروط الاستخدام",
        "privacyPolicyText":"سياسة الخصوصية",
        "contact":"اتصل بنا",
        "copyrightText":"حقوق الطبع والنشر بواسطة"
      }
  }
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    ...getOptions(),  // Will use 'ar' as default since fallbackLng is now 'ar'
    resources: translations,
    detection: {
      order: ['localStorage', 'navigator']
    }
  });

export default i18next;