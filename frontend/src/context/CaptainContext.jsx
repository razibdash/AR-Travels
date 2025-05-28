import React, { createContext, useState, useContext } from "react";

// Create Captain Context
const CaptainDataContext = createContext();

// Captain Provider Component
export const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);

  // Function to update captain data
  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  // Function to clear captain data (e.g., on logout)
  const clearCaptain = () => {
    setCaptain(null);
  };

  return (
    <CaptainContext.Provider value={{ captain, updateCaptain, clearCaptain }}>
      {children}
    </CaptainContext.Provider>
  );
};

// Custom Hook to use Captain Context
export const useCaptain = () => {
  const context = useContext(CaptainContext);
  if (!context) {
    throw new Error("useCaptain must be used within a CaptainProvider");
  }
  return context;
};
