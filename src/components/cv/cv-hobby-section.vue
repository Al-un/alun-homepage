<template>
  <cv-section :section="hobbies" class="al-cv-hobbies" title-md-icon="directions_bike">
    <span
      v-for="(hobby, idx) in hobbies.content"
      :key="`cv-hobby-${idx}`"
      class="al-cv-hobby"
    >{{ hobby.name | i18n }}</span>
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
  line-height: initial;

  .al-cv-hobby {
    display: inline-block;
    padding: 0px multiply(al-cv-base-size, 0.5);
    margin-bottom: multiply(al-cv-base-size, 0.5);
    border-left: 2px solid var(--al-cv-color-primary);

    &:last-of-type {
      border-right: 2px solid var(--al-cv-color-primary);
    }
  }
}

@media print {
  .al-cv-hobbies {
    .al-cv-hobby {
      border-left: 1px solid var(--al-cv-color-primary);

      &:last-of-type {
        border-right: 1px solid var(--al-cv-color-primary);
      }
    }
  }
}
</style>
