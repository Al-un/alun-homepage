<template>
  <div class="al-cv">
    <main class="al-cv-page">
      <cv-section class="al-cv-header">
        <main>
          <div>{{ profile.name }}</div>
          <div>{{ profile.title | i18n }}</div>
        </main>
        <aside>
          <div>
            <a :href="`mailto:${profile.info.email}`">{{
              profile.info.email
            }}</a>
          </div>
        </aside>
      </cv-section>

      <cv-section :section="profile.objective" />
      <cv-section :section="profile.aboutMe" />

      <div class="al-cv-content">
        <div>
          <cv-skill-section :skills="profile.skills" />
          <cv-experience-section :experiences="profile.experiences" />
        </div>
        <div>
          <cv-social-section :social="profile.social" />
          <cv-language-section :languages="profile.languages" />
          <cv-education-section :educations="profile.educations" />
          <cv-hobby-section :hobbies="profile.hobbies" />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";

import CvEducationSection from "@/components/cv/cv-education-section.vue";
import CvExperienceSection from "@/components/cv/cv-experience-section.vue";
import CvHobbySection from "@/components/cv/cv-hobby-section.vue";
import CvLanguageSection from "@/components/cv/cv-language-section.vue";
import CvSection from "@/components/cv/cv-section.vue";
import CvSkillSection from "@/components/cv/cv-skill-section.vue";
import CvSocialSection from "@/components/cv/cv-social-section.vue";
import { MyCV } from "@/data/cv";

export default defineComponent({
  name: "Cv",
  components: {
    CvEducationSection,
    CvExperienceSection,
    CvHobbySection,
    CvLanguageSection,
    CvSection,
    CvSkillSection,
    CvSocialSection
  },

  setup() {
    const profile = computed(() => MyCV);
    return { profile };
  }
});
</script>

<style lang="scss">
.al-cv {
  min-height: 100vh;
  background-color: var(--al-cv-color-body-bg);
  font-size: var(--al-cv-font-size-m);

  .al-cv-page {
    background-color: var(--al-cv-color-content-bg);
    color: var(--al-cv-color-on-content);
    width: 100%;
    max-width: 1000px;
    margin: auto;
    padding: multiply(al-cv-base-size, 0.5);
  }

  .al-cv-content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;

    & > :first-child {
      flex-grow: 1;
      // flex-shrink: 0;
    }

    & > :last-child {
      flex-basis: 300px;
      flex-shrink: 0;
    }
  }
}
</style>
