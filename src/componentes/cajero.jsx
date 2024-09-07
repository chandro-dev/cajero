import { useState, useEffect } from 'react';
//import CodigoEjemplo from "./codigo";
import { useNavigate, useParams } from 'react-router-dom';
import retirosServices from '../servicios/retirosServices';
const _retirosServices = new retirosServices();
const CountdownTimer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    if (!id) {
        navigate("/");
    }
    const [monto, setMonto] = useState(0);
    const denominaciones = [10, 20, 50, 100];
    const [resultado, setResultado] = useState([]);
    const [seconds, setSeconds] = useState(100);
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

            const nuevo = resultadoCalculado.map(fila => {
                const filaTransformada = Array(3).fill(0);

                fila.forEach(denominacion => {
                    const index = denominaciones.indexOf(denominacion);
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

    const manejarCambio = (evento) => {
        const nuevoMonto = parseFloat(evento.target.value);
        if (nuevoMonto > 2500) {
            alert("Valor al monto mayor permitido")
        } else {
            setMonto(nuevoMonto);
        }
    };
    const sumarMatrices = (matriz1, matriz2) => {
        try {
            const nuevo = [];
            matriz2.forEach((fila) => {
                nuevo.push(fila);
            });
            matriz1.forEach((fila) => {
                nuevo.push(fila);
            });
            return nuevo;
        } catch (error) {
            console.error("Error al sumar matrices:", error.message);
            return null;
        }
    }
    const montosPredeterminados = [100, 50, 500, 1000, 300, 200];

    const establecerMonto = (valor) => {
        if (valor > 2000) {
            alert("Valor al monto mayor permitido")
        } else {
            setMonto(valor);

        }
    };
    const imprimirrecibo = () => {

            if (monto < 2500 && id && monto > 0 && monto % 10 === 0) {

                if (id[0] != 3) {
                    navigate(`/cajero/recibo/${id}/${monto}`)
                } else {
                    navigate(`/cajero/recibo/0${id}/${monto}`)
                }   
        }else{
            alert("Valor errado")
        }
    }

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

                            <p>Valor maximo de retiro 2500  </p>
                    <button
                        className="
    bg-gradient-to-r from-green-400 to-green-600
    text-white font-semibold py-3 px-6
    rounded-full shadow-lg
    transform transition-all duration-300 ease-in-out
    hover:shadow-xl hover:scale-105
    focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50
    mb-2
  " onClick={imprimirrecibo}
                    >
                        Retirar
                    </button>                    <div className="overflow-x-auto mb-6">
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