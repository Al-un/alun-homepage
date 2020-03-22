<template>
  <section class="al-cv-section">
    <h3 v-if="section" class="section-title">
      <span v-if="titleMdIcon" class="material-icons">{{ titleMdIcon }}</span>
      <span>{{ section.title | i18n }}</span>
    </h3>
    <base-text
      v-if="section && section.description"
      :content="section.description"
      class="section-description"
    />
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { CvSection } from "@/models";

interface Props {
  section?: CvSection;
  titleMdIcon?: string;
}

export default defineComponent({
  name: "cv-section",
  props: {
    section: { type: Object, required: false },
    titleMdIcon: { type: String, default: undefined }
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.al-cv-section {
  padding: multiply(al-cv-base-size, 1);

  .section-title {
    margin-bottom: multiply(al-cv-base-size, 0.5);

    color: var(--al-cv-color-secondary-dark);

    font-size: multiply(al-cv-font-size-m, 1);
    text-transform: uppercase;

    .material-icons {
      font-size: multiply(al-cv-font-size-m, 1.55);
      margin-right: multiply(al-cv-base-size, 0.5);
      vertical-align: bottom;
    }
  }
}

@media print {
  .al-cv-section {
    padding: multiply(al-cv-base-size, 0.5);
  }
}
</style>
