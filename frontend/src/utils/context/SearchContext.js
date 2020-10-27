import React, { useState, createContext } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    
    const [search, setSearch] = useState(false);
    
    return (
        <SearchContext.Provider value={[search, setSearch]}>
            { children }
        </SearchContext.Provider>
    );
}