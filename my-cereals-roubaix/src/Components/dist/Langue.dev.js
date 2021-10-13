"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _i18nextHttpBackend = _interopRequireDefault(require("i18next-http-backend"));

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
var langues = ['fr', 'en'];

_i18next["default"] // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
// learn more: https://github.com/i18next/i18next-http-backend
// want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
.use(_i18nextHttpBackend["default"]) // detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
.use(_i18nextBrowserLanguagedetector["default"]) // pass the i18n instance to react-i18next.
.use(_reactI18next.initReactI18next) // init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
.init({
  fallbackLng: 'fr',
  debug: true,
  whitelist: langues,
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default

  }
});

var _default = _i18next["default"];
exports["default"] = _default;