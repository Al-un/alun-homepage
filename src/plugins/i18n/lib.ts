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
 * Optional parameter to customize the I18nManager
 *
 * @param supportedLanguages list of all available languages keys,
 * @param langLoader get the current language
 * @param sources list of JSON files, grouped by language key, to build up the
 * dictionaries
 * @param sourceFileNameAsPrefix if true, then the file name is used as a prefix
 * to all keys in this file
 */
export interface I18nManagerOptions {
  supportedLanguages?: string[];
  langLoader?: I18nLangLoader;
  sources?: { [key: string]: string[] };
  sourceFileNameAsPrefix?: boolean;
}

/**
 * Default supported languages are only "English"
 */
export const DFLT_LANGS: string[] = ["en"];
/**
 * Default language loader loads the first default language
 */
export const DFLT_LANG_LOADER: I18nLangLoader = () => DFLT_LANGS[0];

/**
 * Translation manager
 */
export class I18nManager {
  // ---------- Properties ----------------------------------------------------
  public readonly dictionaries: { [key: string]: I18nDictionary };
  public readonly langLoader: I18nLangLoader;
  public readonly supportedLanguages: string[];

  // ---------- Initialisation ------------------------------------------------
  constructor(options: I18nManagerOptions = {}) {
    this.dictionaries = {};
    this.supportedLanguages = options.supportedLanguages || DFLT_LANGS;
    this.langLoader = options.langLoader || DFLT_LANG_LOADER;

    const allSources = options.sources || {};
    Object.keys(allSources).forEach(lang => {
      const files = allSources[lang];
      files.forEach(pouet => {
        // pouet.
      })
    });

    console.debug("Loaded dictionaries: ", this.dictionaries);
  }

  private async loadDictionary(
    sources: string[],
    fileKeyAsPrefix: boolean
  ): Promise<I18nDictionary> {
    const dict: I18nDictionary = {};

    for (const filePath of sources) {
      // const file = (await import(filePath)).default;
      console.debug(`File:`, filePath);
    }

    return dict;
  }

  // ---------- Methods -------------------------------------------------------
  public getMessage(key: string, ...args: any[]): string {
    return "";
  }
}
