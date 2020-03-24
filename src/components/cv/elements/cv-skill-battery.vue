<template>
  <div
    class="skill-level-battery"
    :class="{ 'charging-skill': skill.interest >= interestLimit }"
  >
    <div
      class="skill-level-value"
      :style="`width: ${(100 * skill.level) / levelMax}%`"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { CvSkill } from "@/models";

interface Props {
  skill: CvSkill;
  interestLimit: number;
  levelMax: number;
}

export default defineComponent({
  name: "cv-skill-battery",
  props: {
    skill: { type: Object, required: true },
    interestLimit: { type: Number, required: true },
    levelMax: { type: Number, required: true }
  },

  setup() {
    return {};
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
$battery-normal-color: var(--al-cv-color-secondary);
$battery-charging-color: var(--al-cv-color-secondary-dark);
$battery-bg-color: #eee;

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
  // -- Skill battery level --
  // the small tip on the right is all depending on al-cv-font-size-m
  .skill-level-battery {
    // Layout: sizing
    position: relative;
    width: 100%;
    height: multiply(al-cv-font-size-m, 1);
    padding: multiply(al-cv-base-size, 0.125);
    // Layout: sugar-coating
    border-radius: multiply(al-cv-base-size, 0.2);
    border: 2px solid $battery-normal-color;
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
      background-color: $battery-normal-color;
    }

    .skill-level-value {
      height: 100%;
      background-color: $battery-normal-color;
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
      border-color: $battery-charging-color;
      &::after {
        background-color: $battery-charging-color;
      }

      .skill-level-value {
        animation: animate-stripes 4s linear infinite;
        background-color: $battery-charging-color;

        // &::before{
        //   font-family: "Material Icons";
        //   font-size: multiply(al-cv-font-size-m, 1);
        //   height: multiply(al-cv-font-size-m, 1);
        //   content: "wifi";
        //   // color: $battery-bg-color;
        //   color: blue;
        //   top: 0;
        //   left: calc(50% - 8px);
        //   position: absolute;
        // }
      }
    }
  }
}
</style>
