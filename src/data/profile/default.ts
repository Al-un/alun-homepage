import { Profile } from "@/models";

export const PROFILE_DEFAULT: Profile = {
  header: {
    title: "Al-un",
    subtitle: { en: "Front-end developer", fr: "Développeur front-end" }
  },

  about: {
    content: {
      en: [
        'Dear dev and non-dev fellows, welcome to my personal website! I am Al-un, pronounced like in "AL-gorithm UN-defined", a front-end developer but also a Vue.js aficionado, a Gopher apprentice as well as a DevOps enthusiast.'
      ],
      fr: []
    }
  },

  skills: [
    {
      name: "Front-end",
      skills: [
        { name: "JavaScript", level: 7 },
        { name: "Vue.js", level: 5 }
      ]
    },
    {
      name: "Back-end",
      skills: [
        { name: "Go(lang)", level: 3 },
        { name: "Node.js", level: 2 }
      ]
    }
  ],

  hobbies: [
    {
      title: {
        en: "Drawing",
        fr: ""
      },
      content: {
        en: [
          "I started drawing in 2007. I mainly practice traditional drawings with either pencils or ink pens. I attempted digital drawing multiple times."
        ],
        fr: [""]
      },
      images: { src: "hobby/drawing.jpg", caption: "", alt: "" }
    },
    {
      title: {
        en: "History",
        fr: ""
      },
      content: {
        en: [
          "I find interesting how all histories (science, literature, social...) are linked and influence each other to create the History. A favourite topic is Europe in the XVIII<sup>th</sup> century."
        ],
        fr: [""]
      },
      images: { src: "hobby/history.jpg", caption: "", alt: "" }
    },
    {
      title: {
        en: "Food",
        fr: ""
      },
      content: {
        en: [
          "Eating and drinking are the little pleasure I cannot skip. I enjoy cooking even though the output is pretty random. I got trapped into the passion of bakery during 2016. I wish I have time to get back to baking."
        ],
        fr: [""]
      },
      images: { src: "hobby/food.jpg", caption: "", alt: "" }
    },
    {
      title: {
        en: "Manga",
        fr: ""
      },
      content: {
        en: ["Your typical manga / anime / video game enthusiast."],
        fr: [""]
      },
      images: { src: "hobby/manga.jpg", caption: "", alt: "" }
    }
  ]
};
