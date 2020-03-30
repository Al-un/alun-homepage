export const getLanguage = (): string => {
  const lang = localStorage.getItem("lang");
  return lang || "en";
};

export const setLanguage = (lang: string): void => {
  localStorage.setItem("lang", lang);
};
