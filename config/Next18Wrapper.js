const NextI18Next = require("next-i18next").default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["fa", "sv"],
  localeSubpaths: {
    fa: "fa",
    en: "en",
    sv: "sv",
  },
  // official i18next config: https://www.i18next.com/overview/configuration-options
  // react: {
  //   wait: true,
  // },
  defaultNS: "common",
  // ns: "common",
  detection: {
    lookupFromPathIndex: 0,
    load: "languageOnly",
    order: ["path", "navigator", "cookie", "header"],
  },
});

module.exports = NextI18NextInstance;
