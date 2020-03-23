<template>
  <div class="al-cv-social">
    <cv-link
      v-for="(socialLink, idx) in social.content"
      :key="`al-cv-social-${idx}`"
      :url="socialLink.url"
      :img="socialLink.img"
      >{{ socialLink.name | i18n }}</cv-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvLink from "./cv-link.vue";
import CvSection from "./cv-section.vue";
import { CvSocialSection } from "@/models";

interface Props {
  social: CvSocialSection;
}

export default defineComponent({
  name: "cv-social-section",
  components: { CvLink, CvSection },
  props: {
    social: { type: Object, required: true }
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.al-cv-social {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: multiply(al-cv-base-size, 0.5);

  @include print-and-tablet {
    margin-top: 0px;
  }

  .al-link {
    margin: multiply(al-cv-base-size, 0.25);

    @media print {
      font-size: multiply(al-cv-font-size-m, 0.75);
    }

    .text {
      display: none;

      @include print-and-tablet {
        display: inline-block;
      }
    }

    .open-in-new {
      display: none;

      @include for-tablet-portrait-up {
        display: inline-block;
      }
    }
  }
}
</style>
