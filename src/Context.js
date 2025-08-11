import React from 'react';
import { useLanguage } from './LanguageContext';
import translations from './translations';

export default function Content() {
  const { language } = useLanguage();

  return <main>{translations[language].content}</main>;
}