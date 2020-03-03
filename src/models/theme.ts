import {
  TranslatedParagraphs,
  TranslatedExpression,
  WithTitle
} from "./common";

/**
 * Theme definition
 */
export interface UiTheme {
  /**
   * Name displayed for selection
   */
  name: TranslatedExpression;
  /**
   * Describe challenges / purpose of the theme
   */
  description: TranslatedParagraphs;
  /**
   * In the theme has to be saved, use this key value
   */
  localStorageKey: string;
  /**
   * Pure UI related information
   */
  ui: {
    banner: UiBanner;
    about: UiAboutMe;
    skills: UiSkill;
    hobbies: UiAboutMe;
    contact: UiContactMe;
  };
  /**
   * Root CSS variable, theme dependent
   */
  cssVariables: {
    [key in RequiredCssProperty]: string;
  };
}

export interface UiBanner {
  image: string;
}

/**
 * About Me title
 */
export type UiAboutMe = WithTitle;

/**
 * Skills UI elements
 */
export type UiSkill = WithTitle;

/**
 * Hobby UI elements
 */
export type UiHobby = WithTitle;

/**
 * Various label for the ContactMe form
 */
export interface UiContactMe extends WithTitle {
  sender: TranslatedExpression;
  subject: TranslatedExpression;
  body: TranslatedExpression;
  submit: TranslatedExpression;
}

export type RequiredCssProperty =
  | "base-size"
  | "base-border-radius"
  | "color-primary"
  | "color-primary-light"
  | "color-primary-dark"
  | "color-secondary"
  | "color-secondary-light"
  | "color-secondary-dark"
  | "color-bg-body"
  | "color-bg-surface"
  | "font-size-s"
  | "font-size-m"
  | "font-size-l"
  | "font-color"
  | "font-color-on-primary"
  | "font-color-on-secondary"
  | "h1-size"
  | "h2-size"
  | "h3-size"
  | "h4-size";

// /**
//  * CSS Variable typing
//  */
// export interface CssProperty {
//   /**
//    * Variable name without the double dash prefix
//    */
//   name: string;
//   /**
//    * If there is a required unit, the value will be a string so the value
//    * will never be a number
//    */
//   value: string;
// }
//
// export interface CssPropertyTree {
//   [key: string]: string | CssPropertyTree;
// }
