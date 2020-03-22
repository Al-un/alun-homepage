<template functional>
  <a
    class="al-link"
    :class="data.staticClass"
    :style="data.staticStyle"
    v-bind="data.attrs"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts">
import Vue from "vue";

/**
 * rel="noopener"
 * https://stackoverflow.com/a/4964223/4906586
 */

export default Vue.extend<{}>({
  name: "BaseLink",
  functional: true
});
</script>
