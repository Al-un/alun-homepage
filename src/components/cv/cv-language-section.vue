<template>
  <cv-section :section="languages" class="al-cv-languages">
    <template v-for="(lang, idx) in languages.content">
      <div :key="`cv-lang-img-${idx}`">
        <img :src="require(`@/assets/${lang.img}`)" />
      </div>
      <div :key="`cv-lang-name-${idx}`">{{ lang.name | i18n }}</div>
      <div :key="`cv-lang-lvl-${idx}`">{{ lang.level | i18n }}</div>
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
  grid-template-columns: repeat(3, multiply(al-cv-base-size, 3) 1fr 1fr);

  .section-title{
    grid-column: span 3;
  }

  img {
    height: multiply(al-cv-base-size, 1.5);
  }
}
</style>
