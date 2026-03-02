import React, { createContext, useContext, useState } from 'react';
import { translations } from '../constants/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Default to French
    const [language, setLanguage] = useState('fr');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    // Helper to get nested object (e.g., for iterating over arrays in translation)
    const getTranslationObject = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || {};
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t, getTranslationObject }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
