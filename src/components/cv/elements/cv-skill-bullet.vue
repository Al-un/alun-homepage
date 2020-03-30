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
$bullet-disabled-color: #cfd8dc; // Blue-gray 100
$bullet-enabled-color: var(--al-cv-color-secondary);

.al-cv-skills {
  // --- Skill bullet style --
  .skill-level-bullet {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    .bullet {
      flex-shrink: 0;
      flex-grow: 0;
      border-radius: 50%;
      width: multiply(al-cv-font-size-m, 0.7);
      height: multiply(al-cv-font-size-m, 0.7);
      border: multiply(al-cv-font-size-m, 0.4) solid $bullet-disabled-color;

      &.enabled {
        border: multiply(al-cv-font-size-m, 0.4) solid $bullet-enabled-color;
      }
    }

    .bullet + .bullet {
      margin-left: multiply(al-cv-base-size, 0.25);
    }
  }
}

@media print {
  .al-cv-skills {
    .skill-level-bullet {
      display: flex;
    }
  }
}
</style>
