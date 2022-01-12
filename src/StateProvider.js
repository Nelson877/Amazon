import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StataContext = createContext();

// Wrap our app provide th data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StataContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StataContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StataContext);
