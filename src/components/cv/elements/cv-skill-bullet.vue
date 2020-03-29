<template>
  <div class="skill-level-bullet">
    <div
      v-for="i in [1, 2, 3, 4, 5]"
      :key="i"
      class="bullet"
      :class="{ enabled: skill.level >= i }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { CvSkill } from "@/models";

interface Props {
  skill: CvSkill;
}

export default defineComponent({
  name: "cv-skill-bullet",
  props: {
    skill: { type: Object, required: true }
  },

  setup() {
    return {};
  }
});
</script>

<style lang="scss">
$bullet-disabled-color: #ccc;
$bullet-enabled-color: var(--al-cv-color-secondary-dark);

.al-cv-skill {
  // --- Skill bullet style --
  .skill-level-bullet {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    .bullet {
      border-radius: 50%;
      width: multiply(al-cv-font-size-m, 0.6);
      height: multiply(al-cv-font-size-m, 0.6);
      border: multiply(al-cv-font-size-m, 0.4) solid $bullet-disabled-color;

      &.enabled {
        border: multiply(al-cv-font-size-m, 0.4) solid $bullet-enabled-color;
      }
    }

    .bullet + .bullet {
      margin-left: multiply(al-cv-base-size, 0.5);
    }
  }
}

@media print {
  .al-cv-skill {
    .skill-level-bullet {
      display: flex;
    }
  }
}
</style>
