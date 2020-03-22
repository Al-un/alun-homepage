<template>
  <article class="al-cv-experience">
    <header>
      <h2 class="exp-title">{{ experience.title | i18n }}</h2>
      <span class="exp-date">
        {{ experience.date.start | i18n }} -
        {{ experience.date.end | i18n }}
      </span>
    </header>

    <h3>
      <span class="exp-org">
        <cv-link
          v-if="experience.organisation.url"
          :url="experience.organisation.url"
          >{{ experience.organisation.name }}</cv-link
        >
        <span v-else>{{ experience.organisation.name }}</span>
      </span>
      <span class="exp-location">{{ experience.location | i18n }}</span>
    </h3>

    <main>
      <base-text :content="experience.description" />
    </main>

    <footer>
      <div v-if="translated.roles" class="roles-set">
        <span>Roles</span><span>{{ translated.roles }}</span>
      </div>
      <div v-if="translated.skills" class="skills-set">
        <span>Tech</span><span>{{ translated.skills }}</span>
      </div>
    </footer>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "@vue/composition-api";

import { CvExperience } from "@/models";
import CvLink from "./cv-link.vue";

interface Props {
  experience: CvExperience;
}

export default defineComponent({
  name: "cv-experience",
  components: { CvLink },
  props: {
    experience: { type: Object, required: true }
  },

  setup(props: Props) {
    const translated = reactive({
      skills: computed(() =>
        props.experience.skills
          ? props.experience.skills.en.join(", ")
          : undefined
      ),
      roles: computed(() =>
        props.experience.roles
          ? props.experience.roles.en.join(", ")
          : undefined
      )
    });

    return { translated };
  }
});
</script>

<style lang="scss">
.al-cv-experience {
  header {
    margin: multiply(al-cv-base-size, 0.5) 0;
  }

  .exp-title {
    display: inline-block;
    color: var(--al-cv-color-primary);
    font-size: multiply(al-cv-font-size-m, 1.25);

    &::after {
      margin: 0px multiply(al-cv-base-size, 0.25);
      font-weight: normal;
      color: var(--al-cv-color-on-surface);
      content: "|";
    }
  }

  h3 {
    margin-bottom: multiply(al-cv-base-size, 0.5);
  }

  .exp-org {
    margin: multiply(al-cv-base-size, 0.5) multiply(al-cv-base-size, 0.5)
      multiply(al-cv-base-size, 0.5) 0;
    font-size: var(--al-cv-font-size-m);
  }

  .exp-location {
    font-style: italic;
  }

  main {
    margin: multiply(al-cv-base-size, 0.75) 0;
    color: var(--al-cv-color-on-surface-disabled);
  }

  footer {
    margin-top: multiply(al-cv-base-size, 0.5);
    border-left: 2px solid var(--al-cv-color-secondary);
    padding-left: multiply(al-cv-base-size, 0.5);

    @include print-and-tablet {
      padding-left: multiply(al-cv-base-size, 1);
    }

    .roles-set,
    .skills-set {
      margin: multiply(al-cv-base-size, 0.25) 0;

      :first-child {
        &::after {
          margin-left: multiply(al-cv-base-size, 0.25);
          color: var(--al-cv-color-on-surface);
          content: ": ";
        }
      }

      :last-child {
        font-style: italic;
      }
    }
  }
}

.al-cv-experience + .al-cv-experience {
  margin-top: multiply(al-cv-base-size, 1.5);
}

@media print {
  .al-cv-experience {
    .exp-title {
      font-size: multiply(al-cv-font-size-m, 1);
    }
  }
}

@include for-phone-only {
  .al-cv-experience {
    .exp-title {
      font-size: multiply(al-cv-font-size-m, 1);
    }
  }
}
</style>
