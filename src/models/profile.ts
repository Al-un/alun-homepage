import { TranslatedExpression, TranslatedParagraphs } from "./common";

/**
 * Evaluation is restriction to a [0, 10] interval with integers only
 */
export type EvaluationLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Profile lists all information about me. A Profile can be theme-dependent
 * for phrasing purpose
 */
export interface Profile {
  banner: ProfileBanner;
  about: AboutMe;
  skills: SkillsGroup[];
  hobbies: Hobby[];
}

/**
 * "Headline": name and title/main role
 */
export interface ProfileBanner {
  title: string;
  subtitle: TranslatedExpression;
}

/**
 * A bit more detail about me, expanding the ProfileBanner information
 */
export interface AboutMe {
  content: TranslatedParagraphs;
}

/**
 * Skills are presented grouped to show my focus on specific technical domain
 */
export interface SkillsGroup {
  name: string;
  skills: Skill[];
}

/**
 * My skills set
 *
 * 03-Mar-2020: do not define target
 */
export interface Skill {
  /**
   * Skill name is not translated for the moment as it is mainly technical wording
   */
  name: string;
  level: EvaluationLevel;
}

/**
 * A hobby of mine has one photo for the moment
 */
export interface Hobby {
  title: TranslatedExpression;
  content: TranslatedParagraphs;
  images: HobbyImage;
}

export interface HobbyImage {
  src: string;
  alt: string;
  caption: string;
}
