//https://github.com/fynncfchen/storybook-addon-i18next/issues/8
import React, { Suspense } from 'react';
import { initReactI18next } from 'react-i18next';
import { withI18next } from 'storybook-addon-i18next';

import i18n from 'i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    whitelist: ['en', 'de'],
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};


i18n.use(initReactI18next).init({
  fallbackLng: 'en'
});

export const decorators = [
  withI18next({ i18n, languages: { en: 'English', de: 'Deutsch' }}),
  Story => <Suspense fallback='loading...'><Story /></Suspense>
];
