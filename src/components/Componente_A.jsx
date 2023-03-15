import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/Contacto.clases'
import Componente_B from './container/Componente_B';


function Componente_A() {
    const clases = new Contacto("gregory", "Sanchez","Gregory@gmail.com",false);
   
   
  return (
    <div>
        <h1>Contacto</h1>
        <h3>Nombre: {clases.Nombre}</h3>
        <h3>Apellido: {clases.Apellido}</h3>
        <h3>Email: {clases.Email}</h3>
       
       <Componente_B Contacto={clases}/>
    
    </div>
  )
}

Componente_A.propTypes = {
  Contacto: PropTypes.instanceOf(Contacto)
}

export default Componente_A
