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
  .al-link {
    display: block;
  }

  .profile {
    display: flex;
    flex-direction: column;

    .identity {
      display: flex;
      flex-direction: column;

      @include print-and-tablet {
      }
    }
  }

  .name {
    flex-shrink: 0;
  }
}

@include for-tablet-portrait-up {
  .al-cv-introduction {
    .profile {
      .identity {
        flex-direction: row;
      }
    }
  }
}

@mixin for-tablet-landscape-and-print {
  .al-cv-introduction {
    // Layout
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .profile {
      justify-content: space-between;

      .identity {
        flex-direction: row;
      }
    }
  }
}

@media print {
  @include for-tablet-landscape-and-print;
}

@include for-tablet-landscape-up {
  @include for-tablet-landscape-and-print;
}
</style>
