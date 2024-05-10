import React, { createContext, useState, useContext } from 'react';

const ActiveLinkContext = createContext();

export const useActiveLink = () => {
    const context = useContext(ActiveLinkContext);
    if (!context) {
        throw new Error('useActiveLink debe usarse dentro de un ActiveLinkProvider');
    }
    return context;
};

export const ActiveLinkProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState('');
    const [langCode, setLangCode] = useState('en');
    return (
        <ActiveLinkContext.Provider value={{ activeLink, setActiveLink, langCode, setLangCode }}>
            {children}
        </ActiveLinkContext.Provider>
    );
};
