/**
 * Default language, for fallback for example
 */
export const DEFAULT_LANGUAGE: Languages = "en";
/**
 * Language supported in the application. Data and UI Languages must be
 * aligned so there is no "DataLanguage" / "UiLanguage" distinction
 */
export type Languages = "en" | "fr";

/**
 * A single expression (a sentence, a group of words or a single paragraph)
 * with translation
 */
export type TranslatedExpression = { [key in Languages]: string };

/**
 * A long text, split in paragraphs, with translation
 */
export type TranslatedParagraphs = { [key in Languages]: string[] };

