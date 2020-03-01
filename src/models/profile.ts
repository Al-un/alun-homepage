import { TranslatedExpression, TranslatedParagraphs, WithTitle, WithUntranslatedTitle } from "./common";

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
  skillsGroups: SkillsGroup[];
  hobbies: Hobby[];
}

/**
 * "Headline": name and title/main role
 */
export interface ProfileBanner extends WithUntranslatedTitle{
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
export interface SkillsGroup extends WithUntranslatedTitle{
  skills: Skill[];
}

/**
 * Skill name is not translated for the moment as it is mainly technical wording
 *
 * 03-Mar-2020: do not define target
 */
export interface Skill extends WithUntranslatedTitle{
  level: EvaluationLevel;
}

/**
 * A hobby of mine has one photo for the moment
 */
export interface Hobby extends WithTitle{
  content: TranslatedParagraphs;
  images: HobbyImage;
}

export interface HobbyImage {
  src: string;
  alt: string;
  caption: string;
}
