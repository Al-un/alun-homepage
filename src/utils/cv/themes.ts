export const CV_THEME_DEFAULT = "Al-un";

export const CV_THEME_NAMES = ["Al-un", "blue-orange", "Nerdy?"];
/**
 * https://material.io/design/color/#color-usage-palettes
 */
export const CV_THEMES: { [key: string]: { [key: string]: string } } = {
  [CV_THEME_NAMES[0]]: {
    "--al-cv-color-primary": "#26A69A", // Teal 400
    "--al-cv-color-primary-dark": "#00796B", // Teal 700
    "--al-cv-color-secondary": "#E91E63", // Pink 500
    "--al-cv-color-secondary-dark": "#C2185B", // Pink 700
    "--al-cv-color-body-bg": "#263238", // Blue-gray 900
    "--al-cv-color-surface-bg": "#FFFFFF",
    "--al-cv-color-on-surface": "#212121", // Gray 900
    "--al-cv-color-on-surface-disabled": "#616161", // Gray 700
    "--al-cv-color-on-primary": "#ECEFF1", // Blue-gray 50
    "--al-cv-color-on-secondary": "#000000",
    "--al-cv-color-skill-battery-bg": "#ECEFF1", // Blue-gray 50
    "--al-cv-base-size": "1rem",
    "--al-cv-font-size-m": "1rem",
    "--al-cv-font-family-title": '"Fira Code"',
    "--al-cv-font-family-text": '"Open Sans"'
  },
  [CV_THEME_NAMES[1]]: {
    "--al-cv-color-primary": "#1976D2", // Blue 700
    "--al-cv-color-primary-dark": "#0D47A1", // Blue 900
    "--al-cv-color-secondary": "#FB8C00", // Orange 600
    "--al-cv-color-secondary-dark": "#ef6c00", // Orange 800
    "--al-cv-color-body-bg": "#222",
    "--al-cv-color-surface-bg": "#efefef",
    "--al-cv-color-on-surface": "#000000",
    "--al-cv-color-on-surface-disabled": "#424242",
    "--al-cv-color-on-primary": "#ffffff",
    "--al-cv-color-on-secondary": "#000000",
    "--al-cv-color-skill-battery-bg": "#eee",
    "--al-cv-base-size": "1rem",
    "--al-cv-font-size-m": "1rem",
    "--al-cv-font-family-title": '"Source Code Pro"',
    "--al-cv-font-family-text": '"Roboto"'
  },
  [CV_THEME_NAMES[2]]: {
    "--al-cv-color-primary": "#B2FF59", // Green A200
    "--al-cv-color-primary-dark": "#76FF03", // Green A400
    "--al-cv-color-secondary": "#18FFFF", // Cyan A200
    "--al-cv-color-secondary-dark": "#00E5FF", // Cyan 400
    "--al-cv-color-body-bg": "#37474F", // Blue-gray 800
    "--al-cv-color-surface-bg": "#455A64", // Blue-gray 700
    "--al-cv-color-on-surface": "#ffffff", // Blue-gray 50
    "--al-cv-color-on-surface-disabled": "#ECEFF1", // Blue-gray 50
    "--al-cv-color-on-primary": "#000000",
    "--al-cv-color-on-secondary": "#000000",
    "--al-cv-color-skill-battery-bg": "#37474F",
    "--al-cv-base-size": "0.75rem",
    "--al-cv-font-size-m": "1rem",
    "--al-cv-font-family-title": '"Fira Mono"',
    "--al-cv-font-family-text": '"Source Code Pro"'
  }
};

export const loadTheme = (theme: { [key: string]: string }): void => {
  // console.debug(`[CV] Loading theme`, theme);
  const alCvNode = document.getElementsByClassName("al-cv")[0];

  Object.keys(theme).forEach(key => {
    const val = theme[key];
    (alCvNode as any).style.setProperty(key, val);
  });
};
