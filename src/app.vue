<template>
  <div id="app">
    <template v-if="state.themeStatus === 'ready'">
      <layout-default></layout-default>
    </template>
    <p v-else>Pouet...</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  computed,
  defineComponent,
  reactive,
  SetupContext
} from "@vue/composition-api";

import LayoutDefault from "@/layouts/layout-default.vue";
import { setCssRootVariable } from "./utils";
import { THEME_DEFAULT } from "./data";

/**
 * Local status:
 * - `loading`    : theme is changing, data is being fetched...
 * - `ready`      : ready to be display
 * Thanks to composition API `reactive`, primitive are now reactive \o/
 */
type themeStatus = "loading" | "ready";

interface State {
  themeStatus: themeStatus;
}

export default defineComponent({
  name: "App",
  components: {
    LayoutDefault
  },

  setup() {
    const state = reactive<State>({
      themeStatus: "loading"
    });

    // setCssRootVariable("color-primary", "red");
    const theme = THEME_DEFAULT;
    Object.keys(theme.cssVariables).forEach(cssVar =>
      setCssRootVariable(cssVar, theme.cssVariables[cssVar] as string)
    );

    // Simulate loading time
    window.setTimeout(() => {
      state.themeStatus = "ready";
    }, 100);

    return { state };
  }
});
</script>

<style lang="scss"></style>
