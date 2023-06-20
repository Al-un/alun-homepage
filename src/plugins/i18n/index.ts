// --- Re-export
export { DFLT_LANGS, DFLT_LANG_LOADER } from "./utils";

// --- Vue import
import { VueConstructor } from "vue";
// --- Own import
import { I18nPlugin, I18nManagerOptions, I18nDictionary } from "./types";
import {
  DFLT_LANG_LOADER,
  DFLT_LANGS,
  loadDictionary,
  fetchMessage
} from "./utils";

/**
 * I18nPlugin cannot use an I18nManager class because such class would need to be
 * instantiated properly BEFORE the `install` method being called
 */
const Plugin: I18nPlugin = {
  // ---------- Properties ----------------------------------------------------
  installed: false,
  dictionaries: {},
  langLoader: DFLT_LANG_LOADER,
  supportedLanguages: [],

  // ==========================================================================
  //  Vue plugin
  // ==========================================================================
  install(Vue: VueConstructor, options: I18nManagerOptions = {}) {
    // Don't install twice
    if (this.installed) {
      return;
    }
    this.installed = true;

    this.supportedLanguages = options.supportedLanguages || DFLT_LANGS;
    this.langLoader = options.langLoader || DFLT_LANG_LOADER;

    const allSources = options.sources || {};
    Object.keys(allSources).forEach(lang => {
      const sources = allSources[lang];
      this.dictionaries[lang] = loadDictionary(sources);
    });

    console.debug(`[I18nPlugin] Loaded dictionaries`, this.dictionaries);

    const loadMessage = (
      input: string | I18nDictionary,
      ...args: any[]
    ): string => {
      const currentLang = this.langLoader();
      return fetchMessage(this.dictionaries, currentLang, input, args);
    };

    Vue.filter("i18n", loadMessage);
  }
};

export default Plugin;
