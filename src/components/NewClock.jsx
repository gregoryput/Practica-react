
import React,{useState, useEffect} from 'react'

export default function NewClock() {
    const [state, setState] = useState(
        {
            // Se genera una fecha como estado inicial del componente
            fecha: new Date(),
            edad: 0,
            nombre: "gregory",
            apellidos: "Sanchez"
         });

       const funcion = ()=>{
        setState((prevState) => {
          let edad = prevState.edad +1;
          return {
             ...prevState,
             fecha: new Date(),
             edad
          }
       })}

     
       
       useEffect(() => {
        let timer = setInterval (
          () => funcion(), 1000
        )
         return () => {
          clearInterval(timer)
         }
       }, [])
       
    
  return (
    <div>
<div>
        <h1>Este es el componente convertido</h1>
          <h2>
          Hora Actual:
          {state.fecha.toLocaleTimeString()}
          </h2>
          <h3>{state.nombre} {state.apellidos}</h3>
          <h1>Edad: {state.edad}</h1>
          </div>
    </div>
  )
}
