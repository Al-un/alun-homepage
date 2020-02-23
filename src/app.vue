<template>
  <div id="app">
    <layout-default></layout-default>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LayoutDefault from "@/layouts/layout-default.vue";

export default Vue.extend({
  name: "App",
  components: {
    LayoutDefault
  }
});
</script>

<style lang="scss"></style>
