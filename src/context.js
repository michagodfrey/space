import React from 'react';

const AppContext = React.createContext()

export const AppProvider = ({x}) => {
  return (
    <AppContext.Provider value='hello'>{x}</AppContext.Provider>
  )
}

export { AppContext }