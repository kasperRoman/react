import React, { createContext, useState, useContext } from 'react';

// Створюємо контекст
const LanguageContext = createContext();

// Провайдер мови
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'uk' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Хук для використання контексту
export const useLanguage = () => useContext(LanguageContext);