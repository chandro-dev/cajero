import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Validaciones from '../servicios/validaciones'


const validaciones = new Validaciones();
const Validacion = () => {
    const [identificador, setIdentificador] = useState('');
    const [clave, setClave] = useState('');

    const { Tipo } = useParams();
    const [seconds, setSeconds] = useState(90);
    const [isActive, setIsActive] = useState(true);
    const navigate = useNavigate();  // Quita el 'new'
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            clearInterval(interval);
            setShowWarning(true);
            interval = setInterval(() => {
                setShowWarning(false);
                alert('Se acabo el tiempo')
                navigate("/Cajero");
                setIsActive(false);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isActive, navigate, seconds]);

    switch (Tipo) {
        case "Tarjeta":
            return showWarning ? (
                <h2>¡El tiempo se ha agotado! Serás redirigido en breve.</h2>
            ) : (
                <Tarjeta identificador={identificador} setIdentificador={setIdentificador} clave={clave} setClave={setClave} />
            );
        case "Nequi":
            return showWarning ? (
                <h2>¡El tiempo se ha agotado! Serás redirigido en breve.</h2>
            ) : (
                <Nequi identificador={identificador} setIdentificador={setIdentificador} clave={clave} setClave={setClave} />
            );
        default:
            return <h4>Usted no accedió a una opción válida</h4>;
    }
}
// eslint-disable-next-line react/prop-types
const Nequi = ({ identificador, setIdentificador, clave, setClave }) => {
    const navigate = useNavigate();
    const [codigo, setCodigo] = useState(null);
    const [intentos, setIntentos] = useState(3);
    const validarNumero = () => {
        var result = validaciones.validarCelular(identificador);
        if (result != false) {
            console.log(result);
            setCodigo(result);
            setCambiar(1);
        }
        else {
            alert(`Cuenta no encontrada`);
            navigate("/Cajero")
        }
    }
    const validarCodigo = () => {
        if (clave == codigo.code) {
            navigate("/Cajero/Retiros");
        } else {
            setIntentos(intentos - 1)
            if (intentos <= 0) {
                validaciones.bloquearCuenta("Nequi", '0' + identificador);
                alert(`Tu Cuenta ha sido bloqueada`);

                navigate("/cajero");
            }
            alert(`Código incorrecto te quedan =${intentos} intentos`);
        }
    }
    const [cambiar, setCambiar] = useState(0);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
                {cambiar === 0 ? (
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Ingresar Número de Teléfono</h3>
                        <input
                            value={identificador}
                            onChange={(e) => setIdentificador(e.target.value)}
                            type="number"
                            placeholder="Número de teléfono"
                            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={validarNumero}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300"
                        >
                            Siguiente
                        </button>
                    </div>
                ) : cambiar === 1 ? (
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Su código es: {codigo.code}</h3>
                        <p className="text-gray-600 mb-4">Por favor ingrese el código para continuar.</p>
                        <button
                            onClick={() => setCambiar(2)}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300"
                        >
                            Ingresar Código
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Ingresar Código</h3>
                        <input
                            value={clave}
                            onChange={(e) => setClave(e.target.value)}
                            type="text"
                            placeholder="Código"
                            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={validarCodigo}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300"
                        >
                            Validar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
// eslint-disable-next-line react/prop-types
const Tarjeta = ({ identificador, setIdentificador, clave, setClave }) => {

    const navigate = useNavigate();

    const [cambiar, setCambiar] = useState(false);
    const validar = () => {
        console.log(identificador, clave);
        validaciones.validacionTarjeta(identificador, clave) ? navigate("/cajero/Retiros") : navigate("/");
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
                {!cambiar ? (
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Ingresar Tarjeta</h3>
                        <input
                            value={identificador}
                            onChange={(e) => setIdentificador(e.target.value)}
                            type="number"
                            placeholder="Número de tarjeta"
                            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={() => setCambiar(true)}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300"
                        >
                            Siguiente
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Ingresar Clave</h3>
                        <input
                            value={clave}
                            onChange={(e) => setClave(e.target.value)}
                            type="password"
                            placeholder="Clave"
                            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={() => validar()}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300"
                        >
                            Confirmar Clave
                        </button>
                    </div>
                )}
            </div>
        </div>
    );

}
export default Validacion;
