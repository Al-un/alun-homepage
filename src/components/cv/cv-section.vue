<template>
  <section class="al-cv-section">
    <h3 v-if="section" class="section-title">{{ section.title | i18n }}</h3>
    <base-text
      v-if="section && section.description"
      :content="section.description"
    />
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { CvSection } from "@/models";

interface Props {
  section?: CvSection;
}

export default defineComponent({
  name: "cv-section",
  props: {
    section: { type: Object, required: false }
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.al-cv-section {
  margin-top: multiply(al-cv-base-size, 1);
  margin-bottom: multiply(al-cv-base-size, 1.5);
  padding: multiply(al-cv-base-size, 1);

  .section-title {
    margin-top: multiply(al-cv-base-size, 0.75);
    margin-bottom: multiply(al-cv-base-size, 1);
    font-size: var(--al-cv-font-size-m);
    text-transform: uppercase;
  }
}
</style>
