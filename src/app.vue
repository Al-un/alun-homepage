<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "App",

  setup() {
    return {};
  }
});
</script>

<style lang="scss"></style>
