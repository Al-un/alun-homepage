<template>
  <cv-section
    :section="educations"
    class="al-cv-education"
    title-md-icon="school"
  >
    <!-- <cv-experience
      v-for="(xp, idx) in educations.content"
      :key="`al-cv-edu-${idx}`"
      :experience="xp"
    /> -->
    <article v-for="(edu, idx) in educations.content" :key="`al-cv-edu-${idx}`">
      <h2>{{ edu.title | i18n }}</h2>

      <div>
        <cv-link v-if="edu.organisation.url" :url="edu.organisation.url">{{
          edu.organisation.name
        }}</cv-link>
        <span v-else>{{ experience.organisation.name }}</span>
      </div>

      <div>
        {{ edu.location | i18n }}, {{ edu.date.start | i18n }} -
        {{ edu.date.end | i18n }}
      </div>
    </article>
  </cv-section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvLink from "./cv-link.vue";
import CvExperience from "./cv-experience.vue";
import CvSection from "./cv-section.vue";

import { CvExperienceSection } from "@/models";

interface Props {
  educations: CvExperienceSection;
}

export default defineComponent({
  name: "cv-education-section",
  components: { CvExperience, CvLink, CvSection },
  props: {
    educations: { type: Object, required: true }
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.al-cv-education {
  h2 {
    color: var(--al-cv-color-primary);
  }
}
</style>
