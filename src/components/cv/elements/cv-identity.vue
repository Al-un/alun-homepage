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

    h1,
    h2 {
      text-align: center;
    }

    h1 {
      // margin-bottom: multiply(al-cv-base-size, 0.75);
      font-size: multiply(al-cv-font-size-m, 2);
      color: var(--al-cv-color-primary);
    }

    h2 {
      // margin-bottom: multiply(al-cv-base-size, 0.5);
      font-size: multiply(al-cv-font-size-m, 1.25);
      color: var(--al-cv-color-secondary-dark);
    }

    @include print-and-tablet {
      flex-direction: row;

      h1,
      h2 {
        text-align: left;
      }
    }
  }
}
</style>
