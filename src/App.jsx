import { useState } from "react";
import CodigoEjemplo from "./codigo";
function App() {
  const [monto, setMonto] = useState(0);
  const denominaciones = [10, 20, 50, 100];
  let auxiliar = 0;
  let resultado = [];
  let acarreo = 0;
  let i = 0;
  const calcularDenominaciones = () => {
    resultado.push([]);
    while (i < denominaciones.length) {
      if ((auxiliar + denominaciones[i]) > monto) {
        for (let j = i; j >= denominaciones.length; j--) {
          if (auxiliar + denominaciones[j] >= monto) {
            resultado.push([]);
            auxiliar += denominaciones[j];
            resultado[resultado.length - 1].push(denominaciones[j]);
          }
        }
        i++;
      } else {
        auxiliar += denominaciones[i];
        resultado[resultado.length - 1].push(denominaciones[i]);
        i++;
      }
      if ((i == 4) && (auxiliar != monto)) {
        resultado.push([]);
        acarreo++;
        for (var g = 0; g < acarreo; g++) {
          resultado[resultado.length - 1][g] = 0;
        }
        i = acarreo;
      }
    }
    console.log(resultado);
  }
  // Maneja el cambio en el campo de entrada
  const manejarCambio = (evento) => {
    // Extrae el valor del campo de entrada y conviértelo a número
    const nuevoMonto = parseFloat(evento.target.value);

    // Actualiza el estado con el nuevo monto
    setMonto(nuevoMonto);
  };

  calcularDenominaciones();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-lg text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Monto</h2>
        <div className="mb-6">
          <input
            type="number"
            value={monto}
            onChange={manejarCambio}
            className="w-full px-4 py-2 border rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingrese el monto"
          />
        </div>
        <div className="overflow-x-auto mb-6">
          <table className="w-full table-auto">
            <thead>
              <tr>
                {denominaciones.map((denominacion, index) => (
                  <th
                    className="p-2 bg-gray-200 text-sm md:text-base font-medium"
                    key={index}
                  >
                    {denominacion}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {resultado.map((fila, filaIndex) => (
                <tr
                  key={filaIndex}
                  className={filaIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  {fila.map((denominacion, index) => (
                    <td
                      className="p-2 text-sm md:text-base text-center"
                      key={index}
                    >
                      {denominacion}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-4">Código del Componente</h3>
          <CodigoEjemplo codigo={`// Tu código aquí...`} lenguaje="javascript" />
        </div>
      </div>
    </div>
  );
}
export default App;
