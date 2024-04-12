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
    const [activeLink, setActiveLink] = useState('/');
    return (
        <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
            {children}
        </ActiveLinkContext.Provider>
    );
};
