import { RouteConfig } from "vue-router";

import Cv from "@/pages/cv.vue";
import HomeDefault from "@/pages/home-default.vue";
import NotFound from "@/pages/not-found.vue";

// Hack to have some standalone CV page
const home = process.env.VUE_APP_CV ? Cv : HomeDefault;

export const routes: RouteConfig[] = [
  {
    path: "/",
    component: home,
    name: "home-page"
  },
  { path: "*", component: NotFound }
];
