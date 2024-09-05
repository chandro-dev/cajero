import { useState, useEffect } from 'react';
import CodigoEjemplo from "./codigo";
import { useNavigate } from 'react-router-dom';
import retirosServices from '../servicios/retirosServices';
const _retirosServices = new retirosServices();
const CountdownTimer = () => {



    const navigate = useNavigate();

    const [monto, setMonto] = useState(0);
    const denominaciones = [10, 20, 50, 100];
    const [resultado, setResultado] = useState([]);

    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            clearInterval(interval);
            alert('Se acabo el tiempo')
            navigate("/");
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    useEffect(() => {
        if (monto >= denominaciones[0] && monto % 10 === 0) {
            let montoReal = monto;
            let ResultFinal = []
            while (600 < montoReal) {
                montoReal = montoReal - 100;
                ResultFinal.push([0, 0, 0, 100]);
            }
            const resultadoCalculado = _retirosServices.calcularDenominaciones(montoReal);

            // Inicializa 'nuevo' como una matriz vacía con el mismo tamaño que 'resultadoCalculado'
            const nuevo = resultadoCalculado.map(fila => {
                // Crea una matriz con 3 elementos, todos inicializados a 0
                const filaTransformada = Array(3).fill(0);

                fila.forEach(denominacion => {
                    // Encuentra el índice de la denominación en la lista de denominaciones
                    const index = denominaciones.indexOf(denominacion);

                    // Si la denominación existe en la lista, asigna el valor a la posición correcta
                    if (index !== -1) {
                        filaTransformada[index] = denominacion;
                    }
                });

                return filaTransformada;
            });

            setResultado(sumarMatrices(ResultFinal, nuevo));
            console.log();
        } else {
            setResultado([]); // Limpiar resultado si el monto es menor que la denominación mínima
        }
    }, [monto]);

    // Maneja el cambio en el campo de entrada
    const manejarCambio = (evento) => {
        // Extrae el valor del campo de entrada y conviértelo a número
        const nuevoMonto = parseFloat(evento.target.value);

        // Actualiza el estado con el nuevo monto
        setMonto(nuevoMonto);

    };
    function sumarMatrices(matriz1, matriz2) {
        try {
            // Nueva matriz donde almacenaremos los resultados
            const nuevo = [];

            // Itera sobre las filas de las matrices

            matriz2.forEach((fila) => {
                nuevo.push(fila);
            });
            matriz1.forEach((fila) => {
                nuevo.push(fila);
            });
            return nuevo;
        } catch (error) {
            console.error("Error al sumar matrices:", error.message);
            return null; // Devuelve null si ocurre un error
        }
    }
    const montosPredeterminados = [100, 50, 500, 1000, 300, 200];

    const establecerMonto = (valor) => {
        setMonto(valor);
    };

    return (
        <>
            <div>{seconds}</div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-lg text-center">



                    <div className="mb-6">
                        <h3 className="text-lg font-medium mb-2">Montos Predeterminados</h3>
                        <div className="flex justify-around">
                            {montosPredeterminados.map((valor, index) => (
                                <button
                                    key={index}
                                    onClick={() => establecerMonto(valor)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600"
                                >
                                    {valor}
                                </button>
                            ))}
                        </div>
                    </div>
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
                                    <tr key={filaIndex}>
                                        {denominaciones.map((denominacion, colIndex) => (
                                            <td
                                                key={colIndex}
                                                className="p-2 border-b"
                                            >
                                                {fila[colIndex] || 0}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="mt-8">
                        <h3 className="text-xl font-medium mb-4">Código del Componente</h3>
                        <CodigoEjemplo />
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default CountdownTimer;