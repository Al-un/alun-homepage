<template>
  <header class="al-cv-page-header">
    <div class="content">
      <div></div>

      <div class="actions">
        <div class="theme-change">
          <span class="material-icons">invert_colors</span>
          <span class="text">{{ "cv.header.theme" | i18n }}:</span>

          <select v-model="state.activeTheme">
            <option
              v-for="(t, idx) in Object.keys(state.themes)"
              :key="idx"
              :value="t"
              :selected="state.activeTheme === t"
            >{{ t }}</option>
          </select>
        </div>

        <button v-if="state.hasPrint" class="header-btn print-btn" @click="print">
          <span class="material-icons">print</span>
          <span class="text">{{ "cv.header.print" | i18n }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  watch,
  SetupContext,
  onMounted
} from "@vue/composition-api";

import {
  CV_THEMES_WEB,
  CV_THEME_DEFAULT,
  loadTheme,
  CV_THEMES_PRINT
} from "@/utils/cv";

export default defineComponent({
  name: "cv-page-header",
  components: {},
  props: {},

  setup(props: {}, ctx: SetupContext) {
    const state = reactive({
      hasPrint: computed(() => typeof window.print === "function"),
      themes: CV_THEMES_WEB,
      activeTheme: CV_THEME_DEFAULT
    });

    const print = () => {
      window.print();
    };

    watch(
      () => state.activeTheme,
      (newVal, oldVal) => {
        // Update theme
        const newTheme = CV_THEMES_WEB[newVal];
        loadTheme(newTheme);
        // Update URL which does not re-render the CV page!
        ctx.root.$router.push({
          path: ctx.root.$route.path,
          query: { theme: newVal }
        });
      },
      { lazy: true }
    );

    onMounted(() => {
      window.onbeforeprint = () => {
        loadTheme(CV_THEMES_PRINT[state.activeTheme]);
      };
      window.onafterprint = () => {
        loadTheme(CV_THEMES_WEB[state.activeTheme]);
      };
    });

    return {
      state,
      print
    };
  }
});
</script>

<style lang="scss">
.al-cv-page-header {
  position: sticky;
  top: 0;
  z-index: $z-index-header;
  height: multiply(al-cv-base-size, 3);
  background-color: var(--al-cv-color-primary);
  color: var(--al-cv-color-on-primary);
  // Credits: https://codepen.io/sdthornton/pen/wBZdXq
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  .content {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .actions {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      // justify-content: stretch;

      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      & > * {
        margin: 0 multiply(al-cv-base-size, 0.5);
        padding: 0px multiply(al-cv-base-size, 0.25);
      }

      .theme-change {
        border: 1px solid var(--al-cv-color-on-primary);
        border-radius: multiply(al-cv-base-size, 0.25);

        select {
          padding: multiply(al-cv-base-size, 0.25);
          background: var(--al-cv-color-primary);
          color: var(--al-cv-color-on-primary);
          border: 0;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  .header-btn {
    background: none;
    border-radius: multiply(al-cv-base-size, 0.25);
    padding: multiply(al-cv-base-size, 0.25) multiply(al-cv-base-size, 0.75);
    border: 2px solid var(--al-cv-color-on-primary);
    color: var(--al-cv-color-on-primary);

    &:hover {
      cursor: pointer;
    }

    .material-icons {
      vertical-align: middle;
      margin-right: multiply(al-cv-base-size, 0.5);
    }
  }

  .header-btn + .header-btn {
    margin-left: multiply(al-cv-base-size, 0.5);
  }
}

@include for-phone-only {
  .al-cv-page-header {
    .actions {
      .text {
        display: none;
      }
    }
  }
}
</style>
