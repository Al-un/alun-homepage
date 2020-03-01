import { TranslatedParagraphs, TranslatedExpression } from "./common";

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
    header: UiHeader;
    about: UiAboutMe;
    skills: UiSkill;
    hobbies: UiAboutMe;
    contact: UiContactMe;
  };
}

export interface UiHeader {
  banner: string;
}

/**
 * About Me title
 */
export interface UiAboutMe {
  title: TranslatedExpression;
}

/**
 * Skills UI elements
 */
export interface UiSkill {
  title: TranslatedExpression;
}

/**
 * Hobby UI elements
 */
export interface UiHobby {
  title: TranslatedExpression;
}

/**
 * Various label for the ContactMe form
 */
export interface UiContactMe {
  sender: TranslatedExpression;
  subject: TranslatedExpression;
  body: TranslatedExpression;
  submit: TranslatedExpression;
}
