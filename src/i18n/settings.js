export const fallbackLng = 'ar';  // Changed from 'en' to 'ar'
export const languages = ['en', 'ar'];
export const defaultNS = 'translation';

export function getOptions(lng = fallbackLng, ns = defaultNS) {  // lng defaults to 'ar' now
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
}