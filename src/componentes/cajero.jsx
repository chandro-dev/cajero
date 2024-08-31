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

    const [seconds, setSeconds] = useState(180); // Empieza en 30 segundos
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {

        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            clearInterval(interval);
            navigate("/");
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);
    useEffect(() => {
        setResultado([])
        monto >= denominaciones[0] ? setResultado(_retirosServices.calcularDenominaciones(monto)) : console.log("");;
    }, [monto])

    // Maneja el cambio en el campo de entrada
    const manejarCambio = (evento) => {
        // Extrae el valor del campo de entrada y conviértelo a número
        const nuevoMonto = parseFloat(evento.target.value);

        // Actualiza el estado con el nuevo monto
        setMonto(nuevoMonto);

    };

    return (
        <>
            <div>{seconds}</div>
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
                        <CodigoEjemplo />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CountdownTimer;