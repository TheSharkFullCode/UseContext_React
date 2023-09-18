import React, { useState, createContext } from 'react'


export const UserContext = createContext();

export default function UserContextProvider ({children}) {

  const [number, setNumber] = useState(8)


  return (


  <UserContext.Provider value={{number,setNumber}}>
      {children}
  </UserContext.Provider>


  )
}
