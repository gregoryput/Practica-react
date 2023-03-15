import React,{useState} from 'react'
import { Contacto } from '../../models/Contacto.clases'
import Componente_A from '../Componente_A';

export default function Componente_B({Contacto}) {

    const [state, setstate] = useState(Contacto.Conectado)
    return (
    <div>
         <h3>Estado: {state ? " en linea": " No disponible"}</h3>
         <button onClick={()=> {setstate(!state)}}>Cambiar Estado</button>
    </div>
  )
}
