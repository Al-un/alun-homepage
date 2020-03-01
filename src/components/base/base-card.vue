<template functional>
  <div class="al-card">
    <div class="al-card-header" v-if="slots()['header']">
      <slot name="header"></slot>
    </div>

    <div class="al-card-body">
      <slot></slot>
    </div>

    <div class="al-card-footer" v-if="slots()['footer']">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Props {
  expandable?: boolean;
}

export default Vue.extend<Props>({
  name: "BaseInputSubmit",
  functional: true,
  props: {
    expandable: { type: Boolean, required: false, default: undefined }
  }
});
</script>
