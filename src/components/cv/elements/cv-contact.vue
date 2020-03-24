<template>
  <div class="contact">
    <cv-link
      :url="`mailto:${info.email}?subject=Contact from CV`"
      md-icon="email"
      >{{ info.email }}</cv-link
    >

    <cv-link :url="`tel:${info.phone}`" md-icon="local_phone">{{
      info.phone
    }}</cv-link>

    <cv-link
      url="https://goo.gl/maps/1W5gGPXQ8UKkehrv6"
      md-icon="location_on"
      >{{ info.location }}</cv-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvLink from "@/components/cv/elements/cv-link.vue";
import { CvInfo } from "@/models";

interface Props {
  info: CvInfo;
}

export default defineComponent({
  name: "cv-intro-section",
  components: { CvLink },
  props: {
    info: { type: Object, required: true }
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.al-cv-introduction {
  .contact {
    flex-shrink: 0;
  }

  .contact {
    margin: 0px multiply(al-cv-base-size, 0.75);
    font-size: multiply(al-cv-font-size-m, 0.8);
  }
}
</style>
