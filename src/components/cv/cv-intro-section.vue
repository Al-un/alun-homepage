<template>
  <cv-section class="al-cv-introduction">
    <main class="profile">
      <cv-identity :profile="profile" />
      <cv-social :social="profile.social" />
    </main>

    <cv-contact :info="profile.info" />
  </cv-section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvContact from "@/components/cv/elements/cv-contact.vue";
import CvIdentity from "./elements/cv-identity.vue";
import CvLink from "./elements/cv-link.vue";
import CvSection from "./cv-section.vue";
import CvSocial from "@/components/cv/elements/cv-social.vue";
import { CvProfile } from "@/models";

interface Props {
  profile: CvProfile;
}

export default defineComponent({
  name: "cv-intro-section",
  components: { CvContact, CvIdentity, CvLink, CvSection, CvSocial },
  props: {
    profile: { type: Object, required: true }
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
%flex-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.al-cv-introduction {
  @include print-and-tablet {
    // Layout
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // Theming
    border-bottom: 1px solid var(--al-cv-color-primary);
  }

  .al-link {
    display: block;
  }

  .profile {
    display: flex;
    flex-direction: column;

    .identity {
      display: flex;
      flex-direction: column;

      h1,
      h2 {
        text-align: center;
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

  .name {
    flex-shrink: 0;
  }
}
</style>
