<template>
  <base-link :href="url">
    <base-image v-if="img" :src="img" />
    <span v-if="mdIcon" class="material-icons icon">{{ mdIcon }}</span>

    <span class="text"><slot></slot></span>
    <span v-if="state.isNewTab" class="material-icons open-in-new"
      >open_in_new</span
    >
  </base-link>
</template>

<script lang="ts">
import { reactive, computed, defineComponent } from "@vue/composition-api";

interface Props {
  url: string;
  img?: string;
  mdIcon?: string;
}

export default defineComponent({
  name: "cv-link",
  props: {
    url: { type: String, required: true },
    img: { type: String, default: undefined },
    mdIcon: { type: String, default: undefined }
  },

  setup(props: Props) {
    const state = reactive({
      isNewTab: computed(
        () => !props.url.startsWith("mailto") && !props.url.startsWith("tel")
      )
    });
    return { state };
  }
});
</script>

<style lang="scss">
.al-link {
  display: inline-block;

  // icon
  img {
    // width: multiply(al-cv-base-size, 1.5);
    height: multiply(al-cv-font-size-m, 1.25);
  }

  // Picture and icons
  img,
  .material-icons.icon {
    margin-right: multiply(al-cv-base-size, 0.5);
    vertical-align: bottom;
  }

  // text zone
  .text {
    text-decoration: underline dotted var(--al-cv-color-primary);
    // transition: color 0.2s, text-decoration 0.2s; // effect is barely noticable
  }

  &:hover {
    .text {
      color: var(--al-cv-color-primary);
      text-decoration: underline var(--al-cv-color-primary);
    }
  }

  // open in new window icon
  .open-in-new {
    font-size: multiply(al-cv-font-size-m, 1);
    margin-left: multiply(al-cv-base-size, 0.25);
    vertical-align: middle;
  }

  // TEMP
  color: var(--al-cv-color-on-surface);
}

@media print {
  .al-link {
    .text {
      display: inline-block;
      text-decoration: underline var(--al-cv-color-primary);
    }

    .open-in-new {
      display: none;
    }
  }
}
</style>
