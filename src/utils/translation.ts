import {
  TranslatedExpression,
  TranslatedParagraphs,
  Languages,
  DEFAULT_LANGUAGE
} from "@/models";

/**
 * Local type for convenience only
 */
type TranslationInput =
  | string
  | string[]
  | TranslatedExpression
  | TranslatedParagraphs;

export const translate = (input: TranslationInput): string | string[] => {
  const language: Languages = DEFAULT_LANGUAGE;

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
