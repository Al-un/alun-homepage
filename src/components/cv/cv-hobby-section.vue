<template>
  <cv-section :section="hobbies" class="al-cv-hobbies">
    <span
      v-for="(hobby, idx) in hobbies.content"
      :key="`cv-hobby-${idx}`"
      class="al-cv-hobby"
    >
      {{ hobby.name | i18n }}
    </span>
  </cv-section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvSection from "./cv-section.vue";
import { CvHobbySection } from "@/models";

interface Props {
  hobbies: CvHobbySection;
}

export default defineComponent({
  name: "cv-hobby-section",
  components: { CvSection },
  props: {
    hobbies: { type: Object, required: true }
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.al-cv-hobbies {
  .al-cv-hobby {
    border-left: 3px solid var(--al-cv-color-primary);
    padding: 0px multiply(al-cv-base-size, 0.5);
    display: inline-block;
    margin-bottom: multiply(al-cv-base-size, 0.5);

    &:last-of-type {
      border-right: 3px solid var(--al-cv-color-primary);
    }
  }
}
</style>
