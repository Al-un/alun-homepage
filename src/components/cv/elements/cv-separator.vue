<template functional>
  <div class="al-cv-separator"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend<{}>({
  name: "CvSeparator",
  functional: true,
  props: {}
});
</script>

<style lang="scss">
.al-cv-separator {
  display: none;

  @include print-and-tablet {
    display: block;
    margin: multiply(al-cv-base-size, 0.5) multiply(al-cv-base-size, 1);
    border-bottom: 1px solid var(--al-cv-color-primary);
  }
}

@media print {
  .al-cv-separator {
    // Horizontal margin matches horizontal padding of .al-cv-section
    margin: multiply(al-cv-base-size, 0.5) multiply(al-cv-base-size, 0.5);
  }
}
</style>
