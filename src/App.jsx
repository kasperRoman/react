import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Header from './Header';
import Content from './Context';
import Footer from './Footer';


export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <Content />
      <Footer />
    </LanguageProvider>
  );
}