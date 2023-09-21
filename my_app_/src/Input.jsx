import React, { useContext, useState } from 'react'
import { UserContext } from './Context'


export const Input = ({}) => {
  
  const {number,setNumber}= useContext(UserContext)

  const [contador,setContador] = useState();
  
  const [number1, setNumber1] = useState()

  const [resultado, setResultado] = useState()


  const sumar =()=>{
    setResultado(Number(contador)+Number(number1))  
  }

  const modificar =(e)=>{

    setContador(e.target.value)
  }

  const modificar1=(e)=>{
    setNumber1(e.target.value)

  }



     const cambiar =(event)=>{

        event.preventDefault();

        setNumber(event.target.value)

     }




  return (
    <>
        <input type='number' onChange={cambiar} /> <br /><br />

        <span> {number} </span>  <br />


        <div className='container'>

        {/* <label htmlFor=""></label>
        <input type="text" className='myInput' value={contador} onChange={modificar} />  +
        <input type="text" className='myInput' value={number1} onChange={modificar1}/> - 
        <input type="text"  className='myInput' readOnly value={resultado}/> <br /> =

        <button onClick={sumar}> sumar </button> */}
        </div>

    </>
  )
}
