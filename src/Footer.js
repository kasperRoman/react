import React from 'react';
import { useLanguage } from './LanguageContext';
import translations from './translations';

export default function Footer() {
  const { language } = useLanguage();

  return <footer>{translations[language].footer}</footer>;
}