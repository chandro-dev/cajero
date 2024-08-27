import  { useState } from 'react';



const GenerateCode = () => {
  const [valorAleatorio, setValorAleatorio] = useState(null);
  const [codes, setCodes] = useState([]);

  const generarCodigo = () => {
    const nuevoCodigo ={code:Math.floor(Math.random() * 1000000) + 1,fecha:new Date()} ;
    console.log(nuevoCodigo.code);
    setValorAleatorio(nuevoCodigo.code);
    if (valorAleatorio !== null) {
      const newCodes = [...codes, nuevoCodigo];
      console.log(newCodes);
      setCodes(newCodes);
      localStorage.setItem("codes", JSON.stringify(newCodes))
    }
  };

  return (
    <div>
      <h1>{valorAleatorio}</h1>
      <button onClick={generarCodigo}>Generar Código</button>      
    </div>
  );
};

export default GenerateCode;
  