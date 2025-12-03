import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en/translation.json'
import translationJA from './locales/ja/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  ja: {
    translation: translationJA
  }
}

// Get saved language from localStorage or default to 'en'
const savedLanguage = localStorage.getItem('i18nextLng') || 'en'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

// Save language preference when it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng)
})

export default i18n
