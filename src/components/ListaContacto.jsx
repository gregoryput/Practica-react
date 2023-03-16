import React,{useState,useEffect} from 'react'
import Contacto from './Contacto'

const lista = [
    {
        nombre:"Gregory",
        email:"Gregory@gmail.com",
        telefono:"829-698-5266",
        estado: false
    },
    {
        nombre:"Albert",
        email:"Albert@gmail.com",
        telefono:"829-698-5266",
        estado: false
    },
    {
        nombre:"juan",
        email:"juan@gmail.com",
        telefono:"829-698-5266",
        estado: false
    }
]

export default function ListaContacto() { 
    const [contactonuevo, setContactonuevo] = useState({})
    useEffect(() => {
      
    }, [contactonuevo])
    
    return (
    <div>
        <Registrar setContactonuevo={setContactonuevo}/>
        {lista.map((data , key)=> 
            <Contacto datos={data} key={key}/>
        )}
    </div>
  )
}

function Registrar({setContactonuevo}) {
      const [nombre, setNombre] = useState("")
      const [email, setEmail] = useState("")
      const [telefono, setTefono] = useState("")
      const [estado, setEstado] = useState("")

      const handleSumbit = (e) =>{
        e.preventDefault();
        let nuevo = {
            nombre,
            email,
            telefono,
            estado
        }
        lista.push(nuevo)
        setContactonuevo(nuevo)
    }

  return (
    <div>
        <form onSubmit={handleSumbit}>
            <label htmlFor='nombre'>Nombre:
            <input type="text" name='nombre' value={nombre} onChange={event => setNombre(event.target.value)} />
            </label> 

            <label htmlFor="email">Email: 
            <input type="text" name='email' value={email} onChange={event => setEmail(event.target.value)} />
            </label>

            <label htmlFor="telefono">Telefono: 
            <input type="text" name='telefono' value={telefono} onChange={event => setTefono(event.target.value)} />
            </label>

            <label htmlFor='estado'>Estado: 
            <input type="checkbox" name='estado' value={estado}  onChange={event => setEstado(event.target.checked)} />
            </label>
            <button type='submit'>Registrar</button>
        </form>
    </div>
  )
}
