<template>
  <div class="skills-set">
    <h3>{{ skillGroup.name | i18n }}</h3>

    <template v-for="(skill, skillIdx) in skillGroup.skills">
      <div
        :key="`${skillIdx}-name`"
        :class="{ 'interested-skill': skill.interest >= state.interest.limit }"
      >
        {{ skill.name | i18n }}
      </div>

      <cv-skill-battery :key="`$${skillIdx}-level-battery`" :skill="skill" />

      <cv-skill-bullet :key="`$${skillIdx}-level-bullet`" :skill="skill" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { CvSkillGroup } from "@/models";
import CvSkillBattery from "./cv-skill-battery.vue";
import CvSkillBullet from "./cv-skill-bullet.vue";

interface Props {
  skillGroup: CvSkillGroup;
}

export default defineComponent({
  name: "cv-skill-group",
  components: { CvSkillBattery, CvSkillBullet },
  props: {
    skillGroup: { type: Object, required: true }
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.al-cv-skill {
  .skills-set {
    // flexbox from parent
    width: 100%;
    @include for-tablet-portrait-up {
      padding: 0px multiply(al-cv-base-size, 0.75);
      width: 50%;
      &:first-of-type,
      &:nth-of-type(3) {
        padding-left: 0;
      }
    }
    @include for-tablet-landscape-up {
      width: 25%;
    }

    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;
    justify-items: start;
    gap: multiply(al-cv-base-size, 0.25);

    h3 {
      grid-column: span 2;
      margin-bottom: multiply(al-cv-base-size, 0.5);
      color: var(--al-cv-color-primary);
    }

    // -- Skill battery level --
    // the small tip on the right is all depending on al-cv-font-size-m
    // .skill-level {
    //   display: none;
    // }

    // --- Skill bullet style --
    .skill-level-bullet {
      display: none;
    }

    // --- Interest ---
    .material-icons {
      color: var(--al-cv-secondary-dark);
      font-size: multiply(al-cv-font-size-m, 1);
    }
  }
}

@media print {
  .al-cv-skill {
    .skills-set {
      width: 25%;
      grid-template-columns: 3fr 1fr;

      &:first-of-type {
        padding-left: 0;
      }

      .skill-level {
        display: none;
      }

      .interested-skill {
        color: var(--al-cv-color-secondary-dark);
        font-family: var(--al-cv-font-family-title);
      }

      .skill-level-bullet {
        display: flex;
      }

      .material-icons.interest {
        display: none;
      }
    }
  }
}
</style>
