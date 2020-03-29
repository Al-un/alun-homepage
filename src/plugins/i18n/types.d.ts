import { PluginFunction } from "vue";

/**
 * Method to fetch the currently active language
 */
export type I18nLangLoader = () => string;

/**
 * Key-value pairs forming a dictionary. The value can contain placeholders
 * which have substituted by provided values
 */
export interface I18nDictionary {
  [key: string]: string;
}

/**
 * I18n raw inputs are JSON can have a recursive structure
 */
interface I18nJsonDictionary {
  [key: string]: string | I18nJsonDictionary;
}

/**
 * Optional parameter to customize the I18nManager
 *
 * @param supportedLanguages list of all available languages keys,
 * @param langLoader get the current language
 * @param sources list of JSON files, grouped by language key, to build up the
 * dictionaries. All sources are expected not to have conflicting keys
 */
export interface I18nManagerOptions {
  supportedLanguages?: string[];
  langLoader?: I18nLangLoader;
  sources?: { [key: string]: I18nJsonDictionary[] };
}

export interface I18nManager {
  dictionaries: { [key: string]: I18nDictionary };
  langLoader: I18nLangLoader;
  supportedLanguages: string[];
}

export interface I18nPlugin extends I18nManager {
  installed: boolean;

  install: PluginFunction<I18nManagerOptions>;
}
