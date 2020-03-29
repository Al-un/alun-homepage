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
              >{{ t }}</option
            >
          </select>
        </div>

        <button
          v-if="state.hasPrint"
          class="header-btn print-btn"
          @click="print"
        >
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
  watch
} from "@vue/composition-api";

/**
 * https://material.io/design/color/#color-usage-palettes
 */
const THEMES: { [key: string]: { [key: string]: string } } = {
  "blue-orange": {
    "--al-cv-color-primary": "#1976D2", // Blue 700
    "--al-cv-color-primary-dark": "#0D47A1", // Blue 900
    "--al-cv-color-secondary": "#FB8C00", // Orange 600
    "--al-cv-color-secondary-dark": "#ef6c00", // Orange 800
    "--al-cv-color-body-bg": "#222",
    "--al-cv-color-surface-bg": "#efefef",
    "--al-cv-color-on-surface": "#000000",
    "--al-cv-color-on-surface-disabled": "#424242",
    "--al-cv-color-on-primary": "#ffffff",
    "--al-cv-color-on-secondary": "#000000",
    "--al-cv-base-size": "1rem",
    "--al-cv-font-size-m": "1rem",
    "--al-cv-font-family-title": '"Source Code Pro"',
    "--al-cv-font-family-text": '"Source Sans Pro"'
  },
  "Al-un": {
    "--al-cv-color-primary": "#009688", // Teal 500
    "--al-cv-color-primary-dark": "#00695C", // Teal 800
    "--al-cv-color-secondary": "#9C27B0", // Purple 500
    "--al-cv-color-secondary-dark": "#6A1B9A", // Purple 800
    "--al-cv-color-body-bg": "#222",
    "--al-cv-color-surface-bg": "#efefef",
    "--al-cv-color-on-surface": "#000000",
    "--al-cv-color-on-surface-disabled": "#424242",
    "--al-cv-color-on-primary": "#000000",
    "--al-cv-color-on-secondary": "#000000",
    "--al-cv-base-size": "1rem",
    "--al-cv-font-size-m": "1rem",
    "--al-cv-font-family-title": '"Fira Mono"',
    "--al-cv-font-family-text": '"Source Sans Pro"'
  },
  "nerdy?": {
    "--al-cv-color-primary": "#00E676", // Green A400
    "--al-cv-color-primary-dark": "#00C853", // Green A700
    "--al-cv-color-secondary": "#9C27B0", // Purple 500
    "--al-cv-color-secondary-dark": "#6A1B9A", // Purple 800
    "--al-cv-color-on-primary": "#000000",
    "--al-cv-font-family-title": '"Fira Mono"',
    "--al-cv-font-family-text": '"Fira Mono"'
  }
};

export default defineComponent({
  name: "cv-page-header",
  components: {},
  props: {},

  setup() {
    const state = reactive({
      hasPrint: computed(() => typeof window.print === "function"),
      themes: THEMES,
      activeTheme: "blue-orange"
    });

    const print = () => window.print();

    watch(
      () => state.activeTheme,
      (newVal, oldVal) => {
        const newTheme = THEMES[newVal];

        Object.keys(newTheme).forEach(key => {
          const val = newTheme[key];
          document.documentElement.style.setProperty(key, val);
        });
      }
    );

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: multiply(al-cv-base-size, 0.5) 0;

    .actions {
      display: flex;
      flex-direction: row;
      align-items: center;

      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      & > * {
        padding: 0 multiply(al-cv-base-size, 1);
      }

      select {
        padding: multiply(al-cv-base-size, 0.25);
        background: var(--al-cv-color-primary);
        color: var(--al-cv-color-on-primary);
        border: 1px solid var(--al-cv-color-on-primary);
        border-radius: multiply(al-cv-base-size, 0.25);
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
    .header-btn {
      .text {
        display: none;
      }
    }
  }
}
</style>
