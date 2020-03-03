import { UiTheme } from "@/models";

export const THEME_DEFAULT: UiTheme = {
  name: { en: "Default", fr: "Défaut" },
  description: {
    en: ["I needed some default theme..."],
    fr: ["J'avais besoin d'un thème..."]
  },
  localStorageKey: "DEFAULT",

  ui: {
    banner: {
      image: "banner.jpg"
    },
    about: {
      title: { en: "About me", fr: "A propos" }
    },
    skills: {
      title: { en: "Skills", fr: "Compétences" }
    },
    hobbies: {
      title: { en: "Hobbies", fr: "Loisirs" }
    },
    contact: {
      title: { en: "Contact", fr: "Contact" },
      sender: { en: "Email", fr: "Email" },
      subject: { en: "Subject", fr: "Sujet" },
      body: { en: "Message", fr: "Message" },
      submit: { en: "Send", fr: "Envoyer" }
    }
  },

  cssVariables: {
    "base-size": "16px",
    "base-border-radius":"4px",
    "color-primary": "#1E88E5",
    "color-primary-light": "#BB86FC",
    "color-primary-dark": "#3700B3",
    "color-secondary": "#03DAC6",
    "color-secondary-light": "#03DAC6",
    "color-secondary-dark": "#018786",
    "color-bg-body": "#383F48",
    "color-bg-surface": "#272C33",
    "font-size-s": "0.75rem",
    "font-size-m": "1rem",
    "font-size-l": "1.25rem",
    "font-color": "#FFFFFF",
    "font-color-on-primary": "#000000",
    "font-color-on-secondary": "#000000",
    "h1-size": "2rem",
    "h2-size": "1.5rem",
    "h3-size": "1.25rem",
    "h4-size": "1.25rem"
  }
};
