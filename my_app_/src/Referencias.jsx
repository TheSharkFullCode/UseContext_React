import React, { useRef, useState } from 'react'


const  Referencias = () => { 
  
    const name = useRef('');
    const lastname = useRef('');
    const age = useRef('');
    const city = useRef('');

    const [value,setValue]=useState(0);
    
    
    
    const handleClick=(e)=>{

        e.preventDefault();

        console.log(name.current.value);

        const userFornm ={
            
            name: name.current.value,
            age:age.current.value,
            lastname: lastname.current.value,
            city:city.current.value,

        }

        
        setValue(userFornm)
    }

  return (

    <div>

        <form action="">

            <label htmlFor="" className=''> Nombre </label>
            <input type="text"  ref={name}/>

            <label htmlFor="" className=''> LastName</label>
            <input type="text" ref={lastname}/>

            <label htmlFor="" className=''> age </label>
            <input type="number" ref={age}/>

            <label htmlFor="" className=''> city </label>

            <input type="text" ref={city} />

        </form>

        <h1> {value.name} </h1>
        <h1>{value.lastname} </h1>
        <h1> {value.age}  </h1>
        <h1> {value.city}  </h1>

                <button onClick={handleClick}> submit </button>
    </div>
  )
}

export default Referencias