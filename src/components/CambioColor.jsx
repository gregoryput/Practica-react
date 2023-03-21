import React, { useState, useEffect } from 'react';

export default function CambioColor() {
  const [color, setColor] = useState('#000000');
  const [estado, setEstado] = useState(false);
  const [stopColorChange, setStopColorChange] = useState(false);

  function MouseEnter() {
    if(!stopColorChange){
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      setColor(randomColor);
      setEstado(true);
    }
  }

  function MouseLeave() {
    setStopColorChange(true);
    setEstado(false);
    
  }

  function DoubleClick() {
    setStopColorChange(!stopColorChange);
    setEstado(!estado);

  }

  useEffect(() => {
    if(estado){
      MouseEnter()
    }else{
      setEstado(false)
    }
  },)
  
  
 

  return (
    <div
      style={{ width: '255px', height: '255px', backgroundColor: color }}
      onMouseEnter={MouseEnter}
      onMouseLeave={MouseLeave}
      onDoubleClick={DoubleClick}
    />
  );
}