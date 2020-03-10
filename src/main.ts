// ----- Vue.js imports
import Vue from "vue";
import VueRouter from "vue-router";
import VueCompositionApi from "@vue/composition-api";

// ----- Vue.js configuration
Vue.use(VueCompositionApi);
Vue.use(VueRouter);
Vue.config.productionTip = false;

// Base components:
const requireComponent = require.context(
  "./components/base", // The relative path of the components folder
  false, // Whether or not to look in subfolders
  /base-[\w-]+\.(vue|js|ts)$/ // The regular expression used to match filenames
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName
    .replace(/^\.\//, "") // Remove the "./" from the beginning
    .replace(/\.\w+$/, ""); // Remove the file extension from the end

  // Register component globally with kebab-case
  Vue.component(componentName, componentConfig.default || componentConfig);
});

// Filters
import { translate } from "@/utils";
Vue.filter("i18n", translate);

// ----- Application specific imports
import app from "./app.vue";
import "./styles/main.scss";
import "./registerServiceWorker";
import { routes } from "./routes";

const router = new VueRouter({ routes });

new Vue({ router, render: h => h(app) }).$mount("#app");
