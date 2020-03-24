<template>
  <cv-section :section="skills" class="al-cv-skill" title-md-icon="code">
    <p class="intro on-screen-only">
      Self assessment of my current capabilities and currently charging up
      batteries for the topics I am currently interested in.
    </p>
    <p class="intro on-print-only">
      Levels are self assessed with highlighting on topics I am currently
      interested in.
    </p>

    <cv-skill-group
      v-for="(skillGroup, grpIdx) in skills.content"
      :key="grpIdx"
      :skill-group="skillGroup"
    />
  </cv-section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvSection from "./cv-section.vue";
import CvSkillGroup from "./elements/cv-skill-group.vue";
import { CvSkillSection } from "@/models";

interface Props {
  skills: CvSkillSection;
}

export default defineComponent({
  name: "cv-skill-section",
  components: { CvSection, CvSkillGroup },
  props: {
    skills: { type: Object, required: true }
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.al-cv-skill {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;

  .section-title {
    width: 100%;
  }

  .intro {
    width: 100%;
    margin-bottom: multiply(al-cv-base-size, 0.25);
  }

  .on-screen-only {
    display: block;
  }
  .on-print-only {
    display: none;
  }
}

@media print {
  .al-cv-skill {
    .on-screen-only {
      display: none;
    }
    .on-print-only {
      display: block;
    }
  }
}
</style>
