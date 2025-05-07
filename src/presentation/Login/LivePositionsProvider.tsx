/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, ReactNode, useContext, useState } from 'react';


interface LivePositionProviderProps {
  setSearch: any;
  search?: string;
}

export const LivePositionContext = createContext<
  LivePositionProviderProps | undefined
>(undefined);

export const useLivePosition = () => {
  const context = useContext(LivePositionContext);
  if (!context) {
    throw new Error(
      'useLivePosition must be used within a LivePositionProvider'
    );
  }
  return context;
};

export const LivePositionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [search, setSearch] = useState<string>(
    localStorage.getItem('user_info') || ''
  );

  return (
    <LivePositionContext.Provider value={{ setSearch, search }}>
      {children}
    </LivePositionContext.Provider>
  );
};
