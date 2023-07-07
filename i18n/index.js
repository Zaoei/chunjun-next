var en = require("./en.json");
var zh = require("./zh.json");

const i18n = {
  translations: {
    en,
    zh,
  },
  defaultLang: "zh",
  useBrowserDefault: true,
};

module.exports = i18n;