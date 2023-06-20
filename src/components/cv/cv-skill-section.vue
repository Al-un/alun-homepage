<template>
  <cv-section :section="skills" class="al-cv-skills" title-md-icon="code">
    <div class="skills-list">
      <cv-skill-group
        v-for="(skillGroup, grpIdx) in skills.content"
        :key="grpIdx"
        :skill-group="skillGroup"
      />
    </div>
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
.al-cv-skills {
  .skills-list {
    display: grid;
    gap: multiply(al-cv-base-size, 2);
    grid-template-columns: 1fr;
    align-items: baseline;
  }
}

@include for-tablet-portrait-up {
  .al-cv-skills {
    .skills-list {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@include for-tablet-landscape-up {
  .al-cv-skills {
    .skills-list {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}

@media print {
  .al-cv-skills {
    .skills-list {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
