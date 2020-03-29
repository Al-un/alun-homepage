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

import CvLink from "@/components/cv/elements/cv-link.vue";
import { CvSocialSection } from "@/models";

interface Props {
  social: CvSocialSection;
}

export default defineComponent({
  name: "cv-social",
  components: { CvLink },
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
  align-items: center;
  margin: multiply(al-cv-base-size, 1) 0px;

  .al-link {
    .text {
      display: none;
    }

    .open-in-new {
      display: none;
    }
  }
}

@include print-and-tablet {
  .al-cv-social {
    justify-content: flex-start;
    margin: 0px;

    .al-link {
      .icon,
      img {
        display: none;
      }

      .text {
        display: inline-block;
      }
    }

    .al-link + .al-link {
      margin-left: multiply(al-cv-base-size, 0.5);
    }
  }
}

@include for-tablet-portrait-up {
  .al-cv-social {
    .al-link {
      // Don't display the open-new-tab icon in print
      .open-in-new {
        display: inline-block;
      }
    }
  }
}
</style>
