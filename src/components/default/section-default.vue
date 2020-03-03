<template functional>
  <section class="al-section-default" :class="data.staticClass">
    <slot name="before"></slot>

    <div class="al-section-content">
      <h4 v-if="props.section" class="al-section-title">
        {{ props.section.title | i18n }}
      </h4>
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { WithTitle } from "@/models";

interface Props {
  section?: WithTitle;
}

/**
 * Slots:
 *
 * `before`     : out of the content box
 * (default)    : the content of the section
 */
export default Vue.extend<Props>({
  name: "SectionDefault",
  functional: true,
  props: {
    section: {
      type: Object,
      required: false,
      default: undefined,
      validator: section => {
        if (section === undefined) return true;
        return section.title !== undefined;
      }
    }
  }
});
</script>

<style lang="scss">
.al-section-default {
  position: relative;
  width: 100%;

  .al-section-title {
    width: 100%;
    // color: #393939;
    color: var(--color-secondary);
    text-align: center;
    margin: var(--base-size) 0;
  }

  .al-section-content {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    padding: var(--base-size);
  }
}
</style>
