"use client";

import { ReactNode, createContext, useState } from "react";

type appContextType = {
  isLoggedin: boolean;
  setIsLoggedin: (value: boolean) => void;
};

export const AppContext = createContext<appContextType | null>(null);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <AppContext.Provider value={{ isLoggedin, setIsLoggedin }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
