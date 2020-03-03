<template>
  <section-default class="al-banner">
    <template #before>
      <base-image v-if="image" :src="require(`@/assets/${image}`)" is-cover />
      <div class="overlay"></div>
    </template>

    <h2>{{ profile.banner.title | i18n }}</h2>
    <h3 v-if="profile.banner.subtitle">
      {{ profile.banner.subtitle | i18n }}
    </h3>
  </section-default>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";

import { ThemProfPropsDef, ThemProfProps } from "@/models";
import SectionDefault from "./section-default.vue";

export default defineComponent<ThemProfPropsDef>({
  name: "Banner",
  components: { SectionDefault },
  props: {
    ...ThemProfProps
  },

  setup(props: ThemProfPropsDef) {
    // computed: multiple random banner image later?
    const image = computed(() => {
      return props.theme.ui.banner.image;
    });

    return { image };
  }
});
</script>

<style lang="scss">
.al-banner {
  height: 300px;

  .overlay {
    top: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
  }

  .al-section-content {
    top: 50%;
    position: absolute;
    width: 100%;
    max-width: 100%;
    text-align: center;
  }
}
</style>
