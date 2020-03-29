<template>
  <cv-section
    :section="languages"
    class="al-cv-languages"
    title-md-icon="translate"
  >
    <template v-for="(lang, idx) in languages.content">
      <div :key="`cv-lang-img-${idx}`" class="lang-icon">
        <img :src="require(`@/assets/${lang.img}`)" />
      </div>
      <div :key="`cv-lang-${idx}`">{{ lang.level | i18n }}</div>
      <!-- <div :key="`cv-lang-${idx}`">{
        { lang.name | i18n }} - {{ lang.level | i18n }}
      </div> -->
    </template>
  </cv-section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvSection from "./cv-section.vue";
import { CvLanguageSection } from "@/models";

interface Props {
  languages: CvLanguageSection;
}

export default defineComponent({
  name: "cv-language-section",
  components: { CvSection },
  props: {
    languages: { type: Object, required: true }
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.al-cv-languages {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: multiply(al-cv-base-size, 0.5) 0px;
  line-height: initial;

  .section-title {
    grid-column: span 2;
  }

  .lang-icon {
    padding: 0px multiply(al-cv-base-size, 0.5);

    img {
      height: multiply(al-cv-font-size-m, 1);
    }
  }
}
</style>
