<template>
  <cv-section class="al-cv-introduction">
    <main class="profile">
      <div class="identity">
        <h1>{{ profile.name }}</h1>
        <h2>{{ profile.title | i18n }}</h2>
      </div>

      <cv-social-section :social="profile.social" />
    </main>

    <aside class="contact">
      <cv-link
        :url="`mailto:${profile.info.email}?subject=Contact from CV`"
        md-icon="email"
        >{{ profile.info.email }}</cv-link
      >

      <cv-link :url="`tel:${profile.info.phone}`" md-icon="local_phone">{{
        profile.info.phone
      }}</cv-link>

      <cv-link
        url="https://goo.gl/maps/1W5gGPXQ8UKkehrv6"
        md-icon="location_on"
        >{{ profile.info.location }}</cv-link
      >
    </aside>
  </cv-section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvLink from "./cv-link.vue";
import CvSection from "./cv-section.vue";
import CvSocialSection from "@/components/cv/cv-social-section.vue";
import { CvProfile } from "@/models";

interface Props {
  profile: CvProfile;
}

export default defineComponent({
  name: "cv-intro-section",
  components: { CvLink, CvSection, CvSocialSection },
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

  .name,
  .contact {
    flex-shrink: 0;
  }

  .contact {
    margin: 0px multiply(al-cv-base-size, 0.75);
    font-size: multiply(al-cv-font-size-m, 0.8);
  }
}
</style>
