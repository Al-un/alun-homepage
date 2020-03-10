<template functional>
  <main class="al-error-not-found">
    <h1>404</h1>
    <p>What were you looking for?</p>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend<{}>({
  name: "NotFound",
  functional: true
});
</script>

<style lang="scss">
.al-error-not-found {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  // https://uigradients.com/#Mirage
  background: linear-gradient(2deg, #16222A 0%, #3A6073 100%);

  // TODO: adjust with variable compatible with both HomeDefault and CV page
  // Colours from https://uigradients.com/#Shrimpy
  h1 {
    color: #e43a15;
    font-size: 48px;
    margin: 12px;
  }
  p {
    margin: 12px;
    font-size: 24px;
    color: #e65245;
  }
}
</style>
