import React,{useState} from 'react'




export default function Contacto({datos,Remover}) {
   
    const [estado, setEstado] = useState(datos.estado)

   
    return (
        <div className="accordion w" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id={`heading${datos.id}`}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${datos.id}` } aria-expanded="true" aria-controls={`collapse${datos.id}`}>
              Contacto <span className="badge bg-secondary mx-2" >{datos.nombre}</span>
            </button>
          </h2>
          <div id={`collapse${datos.id}`} className="accordion-collapse collapse show " aria-labelledby={`heading${datos.id}`} data-bs-parent="#accordionExample">
            <div className="accordion-body">
               
                <p><b>Nombre:</b> {datos.nombre}</p>
                <p><b>Email:</b> {datos.email}</p>
                <p><b>Telefono:</b> {datos.telefono}</p>
                <p><b>Estado:</b> {estado ? "Conectado" : "Desconectado"}</p>
                
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button className="btn btn-outline-secondary" onClick={()=> {setEstado(!estado)} }>Cambiar estado</button>
                <button className="btn btn-outline-secondary"onClick={()=> Remover(datos)}>Remover</button>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}
