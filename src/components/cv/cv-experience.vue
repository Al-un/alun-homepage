<template>
  <article class="al-cv-experience">
    <h2>{{ experience.title | i18n }}</h2>
    <h3>
      {{ experience.company }},
      <span class="location">{{ experience.location | i18n }}</span> |
      {{ experience.date.start | i18n }} - {{ experience.date.end | i18n }}
    </h3>

    <main>
      <base-text :content="experience.description" />
    </main>

    <footer>
      <div v-if="translated.roles" class="roles-set">Roles: {{ translated.roles }}</div>
      <div v-if="translated.skills" class="skills-set">Skills: {{ translated.skills }}</div>
    </footer>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "@vue/composition-api";

import { CvExperience } from "@/models";

interface Props {
  experience: CvExperience;
}

export default defineComponent({
  name: "cv-experience",
  components: {},
  props: {
    experience: { type: Object, required: true }
  },

  setup(props: Props) {
    const translated = reactive({
      skills: computed(() => props.experience.skills.en.join(", ")),
      roles: computed(() => props.experience.roles.en.join(", "))
    });

    return { translated };
  }
});
</script>

<style lang="scss">
.al-cv-experience {
  margin-top: multiply(al-cv-base-size, 1);
  margin-bottom: multiply(al-cv-base-size, 1.25);

  h2 {
    margin: multiply(al-cv-base-size, 0.75) 0;
    font-size: var(--al-cv-font-size-l);
  }

  h3 {
    margin: multiply(al-cv-base-size, 0.5) 0;
    font-size: var(--al-cv-font-size-m);

    .location {
      font-style: italic;
    }
  }

  footer {
    margin-top: multiply(al-cv-base-size, 0.5);

    .roles-set {
      margin: multiply(al-cv-base-size, 0.25) 0;
    }

    .skills-set {
      margin: multiply(al-cv-base-size, 0.25) 0;
    }
  }
}
</style>
