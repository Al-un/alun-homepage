<template>
  <cv-section :section="social" class="al-cv-social">
    <base-link
      v-for="(socialLink, idx) in social.content"
      :key="`al-cv-social-${idx}`"
      :href="socialLink.url"
    >
      {{ socialLink.name | i18n }}
    </base-link>
  </cv-section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvSection from "./cv-section.vue";
import { CvSocialSection } from "@/models";

interface Props {
  social: CvSocialSection;
}

export default defineComponent({
  name: "cv-social-section",
  components: { CvSection },
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
  .al-link {
    display: block;
    margin: multiply(al-cv-base-size, 0.5) 0px;
    
    // TEMP
    color: black;
    &:visited{
      color: black;
    }
  }
}
</style>
