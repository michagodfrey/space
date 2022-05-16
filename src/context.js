import React from 'react';

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value='hello'>{children}</AppContext.Provider>
  )
}

export { AppContext }