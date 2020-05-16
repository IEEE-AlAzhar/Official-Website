export const isArabic = (text) => {
  const ARABIC_REGEXP = /[\u0600-\u06FF]/;
  return ARABIC_REGEXP.test(text);
};
