<template>
  <div class="identity">
    <h1>{{ profile.name }}</h1>
    <h2>{{ profile.title | i18n }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { CvProfile } from "@/models";

interface Props {
  profile: CvProfile;
}

export default defineComponent({
  name: "cv-intro-section",
  props: {
    profile: { type: Object, required: true }
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.al-cv-introduction {
  .identity {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h1 {
      font-size: multiply(al-cv-font-size-m, 2);
      color: var(--al-cv-color-primary);
    }

    h2 {
      font-size: multiply(al-cv-font-size-m, 1.5);
      color: var(--al-cv-color-secondary);
    }

    @include print-and-tablet {
      flex-direction: row;
      align-items: baseline;

      h1 {
        font-size: multiply(al-cv-font-size-m, 2.5);
      }
      h2 {
        font-size: multiply(al-cv-font-size-m, 1.5);
        padding-left: multiply(al-cv-base-size, 1);
      }
    }
  }
}
</style>
