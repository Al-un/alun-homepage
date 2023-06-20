import { CvTheme } from "@/models";

export const loadTheme = (theme: CvTheme): void => {
  // console.debug(`[CV] Loading theme`, theme);
  const alCvNode = document.getElementsByClassName("al-cv")[0];

  Object.keys(theme).forEach(key => {
    const val = theme[key];
    (alCvNode as HTMLElement).style.setProperty(key, val);
  });
};
