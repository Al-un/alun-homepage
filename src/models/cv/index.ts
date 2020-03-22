import { TranslatedParagraphs, TranslatedExpression } from "../common";

export interface CvProfile {
  /**
   * My name
   */
  name: string;
  /**
   * My professional profile in few words
   */
  title: TranslatedExpression;
  /**
   * Various personal info
   */
  info: CvInfo;
  /**
   * To expose my objectives
   */
  objective: CvSection;
  /**
   * My presence over the web
   */
  social: CvSocialSection;
  /**
   * A bit more about myself. Should expand the "title"
   */
  aboutMe: CvSection;
  experiences: CvExperienceSection;
  educations: CvExperienceSection;
  skills: CvSkillSection;
  languages: CvLanguageSection;
  hobbies: CvHobbySection;
}

/**
 * Abstract definition of each section of a CV. Such interface ensures that
 * all sections follow the same format (title, description, content) and
 * a corresponding CvSection component could be used to arrange the global
 * layout of the CV
 */
export interface CvSection {
  /**
   * Section translatable title
   */
  title: TranslatedExpression;
  /**
   * Optional icon to decorate the title
   */
  icon?: string;
  /**
   * Optional paragraphs to explain the section
   */
  description?: TranslatedParagraphs;
}

export interface HasName {
  name: TranslatedExpression;
}

export interface HasImage {
  img: string;
}

// ---------- About me --------------------------------------------------------

export interface CvInfo {
  phone: string;
  location: string;
  email: string;
}

export interface CvSocialPresence extends HasName, HasImage {
  url: string;
}
export interface CvSocialSection extends CvSection {
  content: CvSocialPresence[];
}

// ---------- Skills ----------------------------------------------------------
export interface CvSkillSection extends CvSection {
  content: CvSkillGroup[];
}

export interface CvSkillGroup extends HasName {
  skills: CvSkill[];
}

export interface CvSkill extends HasName, HasImage {
  level: 0 | 1 | 2 | 3 | 4 | 5;
  interest: 0 | 1 | 2 | 3 | 4 | 5;
}
// ---------- Experience ------------------------------------------------------
export interface CvExperienceSection extends CvSection {
  content: CvExperience[];
}

export interface CvExperience {
  title: TranslatedExpression;
  organisation: {
    name: string;
    // optional URL of the organisation
    url?: string;
  };
  date: {
    start: TranslatedExpression;
    end: TranslatedExpression;
  };
  location: TranslatedExpression;
  description: TranslatedParagraphs;
  roles?: TranslatedParagraphs;
  skills?: TranslatedParagraphs;
}

// ---------- Languages -------------------------------------------------------
export interface CvLanguageSection extends CvSection {
  content: CvLanguageLevel[];
}

export interface CvLanguageLevel extends HasName, HasImage {
  level: TranslatedExpression;
}
// ---------- Hobbies ---------------------------------------------------------

export interface CvHobbySection extends CvSection {
  content: CvHobby[];
}

export type CvHobby = HasName;
