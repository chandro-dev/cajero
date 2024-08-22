import  { useState, useEffect } from 'react';

const GenerateCode = () => {
  const [valorAleatorio, setValorAleatorio] = useState(null);
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    // Si no hay nada en localStorage, inicializa con un array vacío
    if (localStorage.getItem("codes") === null) {
      localStorage.setItem("codes", JSON.stringify([]));
    } else {
      // Recupera los códigos almacenados en localStorage
      setCodes(JSON.parse(localStorage.getItem("codes")));
    }
  }, []);

  useEffect(() => {
    if (valorAleatorio !== null) {
      const newCodes = [...codes, valorAleatorio];
      setCodes(newCodes);
      localStorage.setItem("codes", JSON.stringify(newCodes));
    }
  }, [valorAleatorio]);

  const generarCodigo = () => {
    const nuevoCodigo = Math.floor(Math.random() * 1000000) + 1;
    setValorAleatorio(nuevoCodigo);
  };

  return (
    <div>
      <h1>{valorAleatorio}</h1>
      <button onClick={generarCodigo}>Generar Código</button>
      <h2>Códigos generados:</h2>
      <ul>
        {codes.map((code, index) => (
          <li key={index}>{code}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenerateCode;
