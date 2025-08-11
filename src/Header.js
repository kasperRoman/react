import React from 'react';
import { useLanguage } from './LanguageContext';
import translations from './translations';
import Navbar from './Navbar';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header>
      <h1>{translations[language].title}</h1>
      <button onClick={toggleLanguage}>
        {translations[language].changeLang}
      </button>
      <Navbar />
    </header>
  );
}