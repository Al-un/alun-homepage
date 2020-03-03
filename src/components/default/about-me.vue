<template>
  <section-default class="al-about-me" :section="theme.ui.about">
    <base-card>
      <base-text :content="profile.about.content" />
    </base-card>
  </section-default>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { ThemProfProps } from "@/models";
import SectionDefault from "./section-default.vue";

export default defineComponent({
  name: "AboutMe",
  components: { SectionDefault },
  props: {
    ...ThemProfProps
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss"></style>
