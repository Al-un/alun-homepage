export * from "./lib";

import { VueConstructor } from "vue";
import { I18nManagerOptions, I18nManager } from "./lib";

const Plugin = {
  // ==========================================================================
  //  Properties
  // ==========================================================================
  installed: false,
  // default value
  i18nManager: new I18nManager(),

  // ==========================================================================
  //  Vue plugin
  // ==========================================================================
  install(Vue: VueConstructor, options?: I18nManagerOptions) {
    // Don't install twice
    if (this.installed) {
      return;
    }
    this.installed = true;

    this.i18nManager = new I18nManager(options || {});

    Vue.filter("i18n", this.i18nManager.getMessage);
  }
};

export default Plugin;
