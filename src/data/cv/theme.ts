import { CvThemeSet } from "@/models";

export const CV_THEME_DEFAULT = "Al-un";

export const CV_THEME_NAMES = ["Al-un", "blue-orange", "Nerdy?", "With purple"];
/**
 * https://material.io/design/color/#color-usage-palettes
 */
export const CV_THEMES_WEB: CvThemeSet = {
  [CV_THEME_NAMES[0]]: {
    "--al-cv-color-primary": "#26A69A", // Teal 400
    "--al-cv-color-primary-dark": "#00796B", // Teal 700
    "--al-cv-color-secondary": "#EC407A", // Pink 400
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
    "--al-cv-font-family-title": "'Fira Mono', monospace",
    "--al-cv-font-family-text": "'Open Sans', sans-serif"
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
    "--al-cv-font-family-title": "'Source Code Pro', monospace",
    "--al-cv-font-family-text": "'Roboto', sans-serif"
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
    "--al-cv-font-family-title": "'Fira Mono', monospace",
    "--al-cv-font-family-text": "'Source Code Pro', monospace"
  },
  [CV_THEME_NAMES[3]]: {
    "--al-cv-color-primary": "#26A69A", // Teal 400
    "--al-cv-color-primary-dark": "#00796B", // Teal 700
    "--al-cv-color-secondary": "#9C27B0", // Purple 500
    "--al-cv-color-secondary-dark": "#7B1FA2", // Purple 700
    "--al-cv-color-body-bg": "#263238", // Blue-gray 900
    "--al-cv-color-surface-bg": "#FFFFFF",
    "--al-cv-color-on-surface": "#212121", // Gray 900
    "--al-cv-color-on-surface-disabled": "#616161", // Gray 700
    "--al-cv-color-on-primary": "#ECEFF1", // Blue-gray 50
    "--al-cv-color-on-secondary": "#000000",
    "--al-cv-color-skill-battery-bg": "#ECEFF1", // Blue-gray 50
    "--al-cv-base-size": "1rem",
    "--al-cv-font-size-m": "1rem",
    "--al-cv-font-family-title": "'Fira Mono', monospace",
    "--al-cv-font-family-text": "'Open Sans', sans-serif"
  }
};

/**
 * Printing variations of each theme
 * https://www.joomlasrilanka.com/web-design-development-blog/web-design-font-size-measurements-convert-points-pixelsems-percentages-web-designing/
 */
export const CV_THEMES_PRINT: CvThemeSet = {
  [CV_THEME_NAMES[0]]: {
    "--al-cv-color-primary": "#00897B", // Teal 600
    "--al-cv-color-primary-dark": "#00695C", // Teal 800
    "--al-cv-color-secondary": "#E91E63", // Pink 500
    "--al-cv-color-body-bg": "#FFFFFF",
    "--al-cv-color-surface-bg": "#FFFFFF",
    "--al-cv-color-on-surface": "#212121", // Gray 900
    "--al-cv-color-on-surface-disabled": "#616161", // Gray 700
    "--al-cv-color-on-primary": "#ECEFF1", // Blue-gray 50
    "--al-cv-color-on-secondary": "#000000",
    "--al-cv-base-size": "0.8rem",
    "--al-cv-font-size-m": "9pt"
  },
  [CV_THEME_NAMES[1]]: {
    "--al-cv-base-size": "0.8rem",
    "--al-cv-font-size-m": "10pt"
  },
  [CV_THEME_NAMES[2]]: {
    "--al-cv-color-primary": "#CDDC39", // Lime 500
    "--al-cv-color-primary-dark": "#AFB42B", // Lime 700
    "--al-cv-color-secondary": "#00BCD4", // Cyan 500
    "--al-cv-color-secondary-dark": "#0097A7", // Cyan 700
    "--al-cv-color-body-bg": "#FFFFFF",
    "--al-cv-color-surface-bg": "#FFFFFF",
    "--al-cv-color-on-surface": "#37474F", // Blue gray 800
    "--al-cv-color-on-surface-disabled": "#546E7A", // Blue gray 600
    "--al-cv-color-on-primary": "#000000",
    "--al-cv-color-on-secondary": "#000000",
    "--al-cv-color-skill-battery-bg": "#37474F",
    "--al-cv-base-size": "0.8rem",
    "--al-cv-font-size-m": "8pt",
  },
  [CV_THEME_NAMES[3]]: {
    "--al-cv-base-size": "0.8rem",
    "--al-cv-font-size-m": "10pt"
  }
};
