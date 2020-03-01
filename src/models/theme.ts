import { TranslatedParagraphs, TranslatedExpression, WithTitle } from "./common";

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
