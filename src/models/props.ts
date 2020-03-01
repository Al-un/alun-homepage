/**
 * Props are not in "common.ts" as it has import from "./profile" and
 * "./theme" which might create cyclical reference
 */

// import { PropOptions } from "vue";
import { Profile } from "./profile";
import { UiTheme } from "./theme";

/**
 * Props shared by components depending on a theme AND a profile
 */
export const ThemProfProps = {
  profile: { type: Object, required: true },
  theme: { type: Object, required: true }
};

/**
 * Definition, for setup function, of props depending on a Theme AND
 * a profile
 */
export interface ThemProfPropsDef {
  profile: Profile;
  theme: UiTheme;
}
