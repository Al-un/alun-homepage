<template>
  <cv-section :section="skills" class="al-cv-skill">
    <div v-for="(skillGroup, grpIdx) in skills.content" :key="grpIdx">
      {{ skillGroup.name | i18n }}
      <div
        v-for="(skill, skillIdx) in skillGroup.skills"
        :key="`${grpIdx}-${skillIdx}`"
      >
        {{ skill.name | i18n }} |  {{ skill.level }} |  {{ skill.interest }}
      </div>
    </div>
  </cv-section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import CvSection from "./cv-section.vue";
import { CvSkillSection } from "@/models";

interface Props {
  skills: CvSkillSection;
}

export default defineComponent({
  name: "cv-skill-section",
  components: { CvSection },
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
}
</style>
