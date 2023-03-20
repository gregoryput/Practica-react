
import React, { useState, useEffect } from 'react'
import Contacto from './Contacto'
import Registrar from './Registrar'





export default function ListaContacto() {
    const [contactonuevo, setContactonuevo] = useState([])

    const Remover = (e) => {
        const litanew = contactonuevo.filter((i) => i.id !== e.id)
        setContactonuevo(litanew)
       
    }
    useEffect(() => {
    }, [contactonuevo])

    return (
        <div className='containers'>
            <div className='dv'>
                <Registrar setContactonuevo={setContactonuevo}  contactonuevo={contactonuevo}/>
            </div>
            <div className='dv2 container2'>
                {contactonuevo.map((data) =>
                    <Contacto datos={data} key={data.id} Remover={Remover} />
                )}
            </div>
        </div>
    )
}

