import React, { useContext } from 'react'
import { UserContext } from './Context'

export const Input = () => {

    const {number,setNumber}= useContext(UserContext)

  return (
    <>
    
         <input type='number' />
         <p>{number}</p>
    </>
  )
}
