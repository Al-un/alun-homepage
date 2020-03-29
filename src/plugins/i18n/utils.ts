import { I18nJsonDictionary, I18nLangLoader, I18nDictionary } from "./types";

/**
 * Default supported languages are only "English"
 */
export const DFLT_LANGS: string[] = ["en"];
/**
 * Default language loader loads the first default language
 */
export const DFLT_LANG_LOADER: I18nLangLoader = () => DFLT_LANGS[0];

/**
 * Flatten the recursive JSON structure to allow looping through all keys in a
 * single loop
 *
 * @param jsonDict a JSON file
 */
const flattenI18nJsonDictionary = (
  jsonDict: I18nJsonDictionary
): { [key: string]: string } => {
  const flatten: { [key: string]: string } = {};

  Object.keys(jsonDict).forEach(key => {
    const val = jsonDict[key];
    // Value is a string: return it
    if (typeof val === "string") {
      flatten[key] = val;
    }
    // Value is an object: re-flatten
    else {
      const flattenSubLevel = flattenI18nJsonDictionary(val);
      Object.keys(flattenSubLevel).forEach(childKey => {
        flatten[`${key}.${childKey}`] = flattenSubLevel[childKey];
      });
    }
  });

  return flatten;
};

export const loadDictionary = (
  sources: I18nJsonDictionary[]
): I18nDictionary => {
  let dict: I18nDictionary = {};

  for (const jsonFile of sources) {
    const flattenJson = flattenI18nJsonDictionary(jsonFile);
    dict = { ...dict, ...flattenJson };
  }

  return dict;
};

export const fetchMessage = (
  dictionaries: { [key: string]: I18nDictionary },
  lang: string,
  input: string | I18nDictionary,
  ...args: any[]
): string => {
  let message: string;

  // Search in the loaded dictionary
  if (typeof input === "string") {
    if (dictionaries[lang]) {
      message = dictionaries[lang][input];
    } else {
      throw new Error(
        `[I18n Plugin] Lang ${lang} is not available when searching key ${input}`
      );
    }
  }
  // Search in the provided dictionary
  else {
    message = input[lang];
  }

  // Check
  if (!message) {
    throw new Error(
      `[I18n Plugin] Value not found for input ${input} and lang ${lang}`
    );
  }

  // Handle placeholders
  for (let i = 0; i < args.length; i++) {
    message = message.replace(`{${i}}`, args[i]);
  }

  return message;
};
