// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import enTranslations from "./en.json";
import arTranslations from "./ar.json";

// the translations
const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
};

// Function to change the direction of the document
const changeDirection = (lng) => {
  const html = document.documentElement;

  if (lng === "ar") {
    html.setAttribute("dir", "rtl");
    html.setAttribute("lang", "ar");
  } else {
    html.setAttribute("dir", "ltr");
    html.setAttribute("lang", "en");
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false, // React already handles XSS
  },
  onLanguageChanged: changeDirection, // Update direction on language change
});

export default i18n;
