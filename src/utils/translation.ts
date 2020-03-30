import {
  TranslatedExpression,
  TranslatedParagraphs,
  Languages,
  DEFAULT_LANGUAGE
} from "@/models";
import { getLanguage } from './i18n';

/**
 * Local type for convenience only
 */
type TranslationInput =
  | string
  | string[]
  | TranslatedExpression
  | TranslatedParagraphs;

export const translate = (input: TranslationInput): string | string[] => {
  const language: Languages = getLanguage() as Languages;

  // Just in case...
  if (input === undefined) {
    console.trace(`Attempted to translated an undefined resource`);
    return "##UNDEFINED##";
  }

  // Single string
  if (typeof input === "string") {
    return input;
  }
  // String array
  else if (Array.isArray(input)) {
    return input;
  }
  // Translation required
  else {
    return input[language];
  }
};
