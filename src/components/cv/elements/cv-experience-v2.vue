<template>
  <article class="al-cv-experience">
    <header>
      <div>
        <h2 class="exp-title">{{ experience.title | i18n }}</h2>
        <span class="exp-org">
          <cv-link
            v-if="experience.organisation.url"
            :url="experience.organisation.url"
          >{{ experience.organisation.name }}</cv-link>
          <span v-else>{{ experience.organisation.name }}</span>
        </span>
      </div>

      <div>
        <span class="exp-location">{{ experience.location | i18n }}</span>
        <span class="exp-date">
          {{ experience.date.start | i18n }} -
          {{ experience.date.end | i18n }}
        </span>
      </div>
    </header>

    <main>
      <base-text :content="experience.description" />
    </main>

    <footer>
      <div v-if="translated.roles" class="roles-set">
        <span>Roles</span>
        <span>{{ translated.roles }}</span>
      </div>
      <div v-if="translated.skills" class="skills-set">
        <span>Tech</span>
        <span>{{ translated.skills }}</span>
      </div>
    </footer>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "@vue/composition-api";

import { CvExperience } from "@/models";
import CvLink from "@/components/cv/elements/cv-link.vue";

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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: multiply(al-cv-base-size, 0.25);

    & > :last-child {
      width: 100%;
    }
  }

  .exp-title {
    display: inline-block;
    color: var(--al-cv-color-primary);
    font-weight: bold;
    transition: color 0.2s;
  }

  h3 {
    margin-bottom: multiply(al-cv-base-size, 0.5);
  }

  .exp-org {
    display: inline-block;
    width: 100%;

    &::before {
      content: "@";
    }

    @include print-and-tablet {
      width: auto;
      margin-left: multiply(al-cv-base-size, 0.5);
    }
  }

  .exp-location {
    border-right: 1px solid var(--al-cv-color-primary);
    padding-right: multiply(al-cv-base-size, 0.5);
    margin-right: multiply(al-cv-base-size, 0.25);
  }

  .exp-date {
    transition: color 0.2s;
  }

  main {
    margin: multiply(al-cv-base-size, 0.5) 0;
    color: var(--al-cv-color-on-surface-disabled);
  }

  footer {
    margin-top: multiply(al-cv-base-size, 0.5);
    border-left: 3px solid var(--al-cv-color-secondary);
    padding-left: multiply(al-cv-base-size, 0.75);
    font-style: italic;
    transition: border-left 0.2s;

    @include print-and-tablet {
      padding-left: multiply(al-cv-base-size, 1.5);
    }

    .roles-set,
    .skills-set {
      :first-child {
        &::after {
          color: var(--al-cv-color-on-surface);
          content: " : ";
        }
      }
    }
  }

  &:hover,
  &:focus {
    .exp-title {
      color: var(--al-cv-color-primary-dark);
    }

    .exp-date {
      color: var(--al-cv-color-secondary-dark);
    }

    footer {
      border-left: 3px solid var(--al-cv-color-secondary-dark);
    }
  }
}

.al-cv-experience + .al-cv-experience {
  margin-top: multiply(al-cv-base-size, 2);
}

@include print-and-tablet {
  .al-cv-experience {
    header {
      & > :last-child {
        width: auto;
      }
    }
  }
}
</style>
