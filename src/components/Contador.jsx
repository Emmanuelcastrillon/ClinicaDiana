import React, { useState, useEffect } from 'react';
import '../Styles/home.css';

const Contador = ({ limite }) => {
  const [contador, setContador] = useState(0);
  const [enPausa, setEnPausa] = useState(false);

  useEffect(() => {
    let intervaloId;

    if (!enPausa) {
      intervaloId = setInterval(() => {
        setContador((prevContador) => {
          if (prevContador >= limite) {
            setEnPausa(true); // Detiene el contador
            return prevContador; // Mantiene el contador en el límite
          }
          return prevContador + 1;
        });
      }, 100); // Actualiza cada X milisegundos según el prop `intervalo`
    }

    return () => clearInterval(intervaloId); // Limpia el intervalo al desmontar el componente
  }, [enPausa]);


  useEffect(() => {
    if (enPausa) {
      const tiempoDeEspera = setTimeout(() => {
        setContador(0); // Reinicia el contador
        setEnPausa(false); // Permite que el contador comience de nuevo
      }, 10000); // Pausa por 10 segundos (10000 ms)

      return () => clearTimeout(tiempoDeEspera); // Limpia el timeout al desmontar el componente o cambiar el estado
    }
  }, [enPausa]);

  return <h2 className='contador'style={{ color:' #76b8bd' }}>{contador}</h2>;
};

export default Contador;