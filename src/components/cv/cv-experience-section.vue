<template>
  <cv-section
    :section="experiences"
    class="al-cv-experiences"
    title-md-icon="work_outline"
  >
    <cv-experience
      v-for="(xp, idx) in experiences.content"
      :key="`al-cv-xp-${idx}`"
      :experience="xp"
    />
  </cv-section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvExperience from "./elements/cv-experience.vue";
import CvSection from "./cv-section.vue";
import { CvExperienceSection } from "@/models";

interface Props {
  experiences: CvExperienceSection;
}

export default defineComponent({
  name: "cv-experience-section",
  components: { CvExperience, CvSection },
  props: {
    experiences: { type: Object, required: true }
  },

  setup() {
    return {};
  }
});
</script>
