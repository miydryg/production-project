import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

let isInitialized = false;

if (!i18n.isInitialized) {
    i18n
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: 'ua',
            debug: __IS_DEV__,

            interpolation: {
                escapeValue: false, // not needed for react as it escapes by default
            },

            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json',
            },
        });
    isInitialized = true;
}
export default i18n;
