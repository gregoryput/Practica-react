import React,{useEffect, useState} from 'react'



export default function Contacto({datos}) {
   
    const [estado, setEstado] = useState("")


    return (
    <div>
        <div>
            <h1>Contacto</h1>
            <h3>Nombre:  {datos.nombre}</h3>
            <h3>Email: {datos.email}</h3>
            <h3>Telefono: {datos.telefono}</h3>
            <h3>Estado: {estado ? "conectado":"no disponible"}</h3>
            <button onClick={()=> setEstado(!datos.estado ) }>Cambiar estado</button>

        </div>
    </div>
  )
}
