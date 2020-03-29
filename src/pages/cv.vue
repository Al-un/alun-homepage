<template>
  <div class="al-cv">
    <cv-page-header />

    <main class="al-cv-page">
      <cv-intro-section :profile="profile" />

      <cv-separator />

      <base-link class="check-my-online-cv" href="https://cv.al-un.fr"
        >Feel free to check the online version: https://cv.al-un.fr</base-link
      >

      <cv-section :section="profile.objective" title-md-icon="flight_takeoff" />
      <cv-section :section="profile.aboutMe" title-md-icon="fingerprint" />
      <cv-skill-section :skills="profile.skills" />
      <cv-experience-section :experiences="profile.experiences" />

      <cv-separator />

      <aside class="al-cv-misc">
        <cv-language-section :languages="profile.languages" />
        <cv-education-section :educations="profile.educations" />
        <cv-hobby-section :hobbies="profile.hobbies" />
      </aside>
    </main>

    <cv-page-footer />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  SetupContext
} from "@vue/composition-api";

import CvEducationSection from "@/components/cv/cv-education-section.vue";
import CvExperienceSection from "@/components/cv/cv-experience-section.vue";
import CvHobbySection from "@/components/cv/cv-hobby-section.vue";
import CvIntroSection from "@/components/cv/cv-intro-section.vue";
import CvLanguageSection from "@/components/cv/cv-language-section.vue";
import CvLink from "@/components/cv/elements/cv-link.vue";
import CvPageHeader from "@/components/cv/cv-page-header.vue";
import CvPageFooter from "@/components/cv/cv-page-footer.vue";
import CvSection from "@/components/cv/cv-section.vue";
import CvSeparator from "@/components/cv/elements/cv-separator.vue";
import CvSkillSection from "@/components/cv/cv-skill-section.vue";

import { MyCV } from "@/data/cv";
import {
  CV_THEMES,
  loadTheme,
  CV_THEME_DEFAULT,
  CV_THEME_NAMES
} from "@/utils/cv";

export default defineComponent({
  name: "Cv",
  components: {
    CvEducationSection,
    CvExperienceSection,
    CvHobbySection,
    CvIntroSection,
    CvLanguageSection,
    CvLink,
    CvPageHeader,
    CvPageFooter,
    CvSection,
    CvSeparator,
    CvSkillSection
  },

  setup(props: {}, ctx: SetupContext) {
    const profile = computed(() => MyCV);

    onMounted(() => {
      // Get parameter
      const themeParam = ctx.root.$route.query["theme"];
      let requestedTheme = "";
      if (typeof themeParam === "string") {
        requestedTheme = themeParam;
      }
      if (Array.isArray(themeParam)) {
        const firstThemeParam = themeParam[0];
        requestedTheme = firstThemeParam !== null ? firstThemeParam : "";
      }

      if (CV_THEME_NAMES.includes(requestedTheme)) {
        console.debug(`[CV] Loading theme: <${requestedTheme}>`);
        loadTheme(CV_THEMES[requestedTheme]);
      } else {
        console.debug(`[CV] Loading default theme`);
        loadTheme(CV_THEMES[CV_THEME_DEFAULT]);
      }
    });

    return { profile };
  }
});
</script>

<style lang="scss">
%constrainted-content {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: multiply(al-cv-base-size, 0.5);
}

.al-cv {
  // --- Layout
  min-height: 100vh;
  // --- Theming
  background-color: var(--al-cv-color-body-bg);
  // --- Typo
  font-family: var(--al-cv-font-family-text), monospace;
  font-size: var(--al-cv-font-size-m);
  line-height: multiply(al-cv-font-size-m, 1.75);
  h1,
  h2,
  h3,
  h4 {
    font-family: var(--al-cv-font-family-title), monospace;
  }

  .al-cv-page-header,
  .al-cv-page-footer {
    .content {
      @extend %constrainted-content;
    }
  }

  .al-cv-page {
    @extend %constrainted-content;
    // Theming
    background-color: var(--al-cv-color-surface-bg);
    color: var(--al-cv-color-on-surface);

    .check-my-online-cv {
      display: none;
      padding: multiply(al-cv-base-size, 0.125);
      border-bottom: 1px solid var(--al-cv-color-primary);
      text-align: center;
      font-size: multiply(al-cv-font-size-m, 0.8);
      font-family: var(--al-cv-font-family-title);
      color: var(--al-cv-color-primary);

      @media print {
        display: block;
      }
    }

    .al-cv-misc {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      // default: column mode in smartphone
      .al-cv-section {
        width: 100%;
      }

      // Tablet, desktop and print: on a same row
      @include print-and-tablet {
        .al-cv-languages {
          width: 25%;
        }
        .al-cv-educations {
          width: 40%;
        }
        .al-cv-hobbies {
          width: 35%;
        }
      }
    }
  }
}

@media print {
  .al-cv-page-header,
  .al-cv-page-footer {
    display: none;
  }

  .al-cv-page {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
}
</style>
