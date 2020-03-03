<template>
  <section-default :section="theme.ui.hobbies" class="al-hobbies">
    <base-card v-for="(hobby, idx) in profile.hobbies" :key="idx">
      <template #header>
        <base-text :content="hobby.title"></base-text>
      </template>

      <base-text :content="hobby.content"></base-text>
    </base-card>
  </section-default>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  SetupContext
} from "@vue/composition-api";

import { ThemProfPropsDef, ThemProfProps } from "@/models";
import SectionDefault from "./section-default.vue";

export default defineComponent({
  name: "HobbyList",
  components: { SectionDefault },
  props: {
    ...ThemProfProps
  },

  setup(props: ThemProfPropsDef, context: SetupContext) {
    return {};
  }
});
</script>

<style lang="scss">
.al-hobbies {
  .al-section-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: multiply(base-size, 0) multiply(base-size, 0);

    .al-section-title{
      grid-column: span 2;
    }
  }
}
</style>
