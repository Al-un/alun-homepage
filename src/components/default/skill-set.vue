<template>
  <section-default :section="theme.ui.skills">
    <base-card v-for="(skillGroup, idx) in profile.skillsGroups" :key="idx">
      <template #header>
        <base-text :content="skillGroup.title"></base-text>
      </template>

      <div v-for="(skill, subIdx) in skillGroup.skills" :key="subIdx">
        {{ skill.title }}: {{ skill.level }}
      </div>
    </base-card>
  </section-default>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  SetupContext
} from "@vue/composition-api";

import { ThemProfPropsDef, ThemProfProps } from "@/models";
import SectionDefault from "./section-default.vue";

export default defineComponent({
  name: "SkillSet",
  components: { SectionDefault },
  props: {
    ...ThemProfProps
  },

  setup(props: ThemProfPropsDef, context: SetupContext) {
    return {};
  }
});
</script>

<style lang="scss"></style>
