<template>
  <cv-section :section="educations" class="al-cv-education">
    <article v-for="(edu, idx) in educations.content" :key="`al-cv-edu-${idx}`">
      <h3>{{ edu.title | i18n }}</h3>
      <div>{{ edu.company }}</div>
      <div>
        {{ edu.location | i18n }}, {{ edu.date.start | i18n }} -
        {{ edu.date.end | i18n }}
      </div>
    </article>
  </cv-section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvSection from "./cv-section.vue";

import { CvExperienceSection } from "@/models";

interface Props {
  educations: CvExperienceSection;
}

export default defineComponent({
  name: "cv-education-section",
  components: { CvSection },
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
}
</style>
