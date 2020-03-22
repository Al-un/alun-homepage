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
      <div
        :key="`$${skillIdx}-level`"
        class="skill-level"
        :class="{ 'charging-skill': skill.interest >= state.interest.limit }"
      >
        <div
          class="skill-level-value"
          :style="`width: ${(100 * skill.level) / state.level.max}%`"
        ></div>
      </div>

      <div :key="`$${skillIdx}-level-bullet`" class="skill-level-bullet">
        <div
          v-for="i in [1, 2, 3, 4, 5]"
          :key="i"
          class="bullet"
          :class="{ enabled: skill.level >= i }"
        ></div>
      </div>

      <div :key="`$${skillIdx}-interest`">
        <span
          v-if="skill.interest >= state.interest.limit"
          class="material-icons interest"
          >wifi</span
        >
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { CvSkillGroup } from "@/models";

interface Props {
  skillGroup: CvSkillGroup;
}

export default defineComponent({
  name: "cv-skill-group",
  props: {
    skillGroup: { type: Object, required: true }
  },

  setup() {
    return {
      state: {
        level: { max: 5 },
        interest: { limit: 4 }
      }
    };
  }
});
</script>

<style lang="scss">
/**
-- Use of <div> instead of <progress> for battery --
https://css-tricks.com/css3-progress-bars/
Progress and meter are quite limited in terms of styling

-- Battery shape help --
https://benohead.com/blog/2014/10/04/html5-displaying-battery-level/

-- Battery stripes --
https://leaverou.github.io/css3patterns/#diagonal-stripes
Shadowing a coloured background: https://catalin.red/stylish-css3-progress-bars/
Old stripe effect:
        background: repeating-linear-gradient(
          -70deg,
          $battery-bg-color,
          $battery-bg-color 2px,
          var(--al-cv-color-secondary) 1px,
          var(--al-cv-color-secondary) 24px
        );
*/

// local usage only
$battery-border-color: var(--al-cv-color-secondary-dark);
$battery-bg-color: #eee;

$bullet-disabled-color: #ccc;
$bullet-enabled-color: var(--al-cv-color-secondary-dark);

// Charging battery animation
@keyframes animate-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 0;
  }
}

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
    grid-template-columns: 3fr 2fr multiply(al-cv-font-size-m, 1.5);
    align-items: center;
    justify-items: start;
    gap: multiply(al-cv-base-size, 0.25);

    h3 {
      grid-column: span 3;
      margin-bottom: multiply(al-cv-base-size, 0.5);
      color: var(--al-cv-color-primary);
    }

    // -- Skill battery level --
    // the small tip on the right is all depending on al-cv-font-size-m
    .skill-level {
      // display: none;
      // Layout: sizing
      position: relative;
      width: calc(100% - #{multiply(al-cv-font-size-m, 0.5)});
      height: multiply(al-cv-font-size-m, 1);
      padding: multiply(al-cv-base-size, 0.125);
      // Layout: sugar-coating
      border-radius: multiply(al-cv-base-size, 0.2);
      border: 2px solid $battery-border-color;
      // Theming
      background-color: $battery-bg-color;

      &::after {
        content: " ";
        // Layout
        display: block;
        position: absolute;
        height: multiply(al-cv-font-size-m, 0.5);
        width: multiply(al-cv-font-size-m, 0.25);
        top: multiply(al-cv-font-size-m, 0.125);
        right: multiply(al-cv-font-size-m, -0.25);
        // Layout: sugar-coating
        border-top-right-radius: multiply(al-cv-base-size, 0.125);
        border-bottom-right-radius: multiply(al-cv-base-size, 0.125);
        // Theming
        background-color: $battery-border-color;
      }

      .skill-level-value {
        height: 100%;
        // Stripping effect
        // background-color: var(--al-cv-color-primary);
        background-color: var(--al-cv-color-secondary);
        background-size: 30px 30px;
        background-image: linear-gradient(
          135deg,
          $battery-bg-color 5%,
          transparent 5%,
          transparent 25%,
          $battery-bg-color 25%,
          $battery-bg-color 30%,
          transparent 30%,
          transparent 50%,
          $battery-bg-color 50%,
          $battery-bg-color 55%,
          transparent 55%,
          transparent 75%,
          $battery-bg-color 75%,
          $battery-bg-color 80%,
          transparent
        );
      }

      &.charging-skill {
        .skill-level-value {
          animation: animate-stripes 4s linear infinite;
          background-color: var(--al-cv-color-secondary-dark);
        }
      }
    }

    // --- Skill bullet style --
    .skill-level-bullet {
      width: 100%;
      display: none;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      .bullet {
        border-radius: 50%;
        width: multiply(al-cv-font-size-m, 0.6);
        height: multiply(al-cv-font-size-m, 0.6);
        border: multiply(al-cv-font-size-m, 0.3) solid $bullet-disabled-color;

        &.enabled {
          border: multiply(al-cv-font-size-m, 0.3) solid $bullet-enabled-color;
        }
      }
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
      grid-template-columns: 3fr 1fr multiply(al-cv-font-size-m, 0.5);

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
