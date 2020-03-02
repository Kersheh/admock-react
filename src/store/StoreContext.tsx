import React, { createContext, useReducer, ReactChild } from 'react';
import { reducer, initialState } from './reducers';

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }: { children: ReactChild }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
