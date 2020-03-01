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
      sender: { en: "Email", fr: "Email" },
      subject: { en: "Subject", fr: "Sujet" },
      body: { en: "Message", fr: "Message" },
      submit: { en: "Send", fr: "Envoyer" }
    }
  }
};
