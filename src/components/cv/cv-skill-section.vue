<template>
  <cv-section :section="skills" class="al-cv-skill" title-md-icon="code">
    <p class="intro on-screen-only">{{ "cv.skills.intro.web" | i18n }}</p>
    <p class="intro on-print-only">{{ "cv.skills.intro.print" | i18n }}</p>

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
.al-cv-skill {
  .intro {
    margin-bottom: multiply(al-cv-base-size, 0.25);
  }

  .skills-list {
    display: grid;
    gap: multiply(al-cv-base-size, 1);
    grid-template-columns: 1fr;
    align-items: start;
  }

  .on-screen-only {
    display: block;
  }
  .on-print-only {
    display: none;
  }
}

@include for-tablet-portrait-up {
  .al-cv-skill {
    .skills-list {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@include for-tablet-landscape-up {
  .al-cv-skill {
    .skills-list {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}

@media print {
  .al-cv-skill {
    .skills-list {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .on-screen-only {
      display: none;
    }
    .on-print-only {
      display: block;
    }
  }
}
</style>
