import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <NavbarContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext); 