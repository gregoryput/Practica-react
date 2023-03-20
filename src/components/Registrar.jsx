import { nanoid } from "nanoid";
import React, { useState } from "react";

export default function Registrar({ setContactonuevo, contactonuevo }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTefono] = useState("");
  const [estado, setEstado] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    let nuevo = {
      id: nanoid(),
      nombre,
      email,
      telefono,
      estado,
    };

    setContactonuevo([...contactonuevo, nuevo]);
  };

  return (
    <div>
      <h4 className=" mt-5  text-center letra">Registrar Contacto</h4>
      <form onSubmit={handleSumbit} className="container2">
        <input
          className="form-control mb-3 "
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
        <input
          className="form-control mb-3 "
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="form-control mb-3 "
          type="text"
          name="telefono"
          placeholder="Telefono"
          value={telefono}
          onChange={(event) => setTefono(event.target.value)}
        />
          <div className="container d-flex mb-5">
          <label htmlFor="" className="me-3"> Estado </label>
        <div className="form-check form-switch ">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            name="estado"
            value={estado}
            onChange={(event) => setEstado(event.target.checked)}
          />
        </div>
          </div>
        
        <button 
         className="btn btn-dark h "
        type="submit">Registrar
        
        </button>
     
      </form>
    </div>
  );
}
