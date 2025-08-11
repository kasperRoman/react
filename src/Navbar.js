import React from 'react';
import { useLanguage } from './LanguageContext';
import translations from './translations';

export default function Navbar() {
  const { language } = useLanguage();

  return (
    <nav>
      <p>{translations[language].nav}</p>
    </nav>
  );
}