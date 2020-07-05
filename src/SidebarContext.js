import React, { useState, createContext } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <SidebarContext.Provider value={[active, setActive]}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
