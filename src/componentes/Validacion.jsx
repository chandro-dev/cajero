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
    const [codigo, setCodigo] = useState(null); // Código generado
    const validarNumero = () => {
        var result = validaciones.validarCelular(identificador);
        if (result != false) {
            console.log(result);
            setCodigo(result);
            setCambiar(1);
        }
        else {
            navigate("/Cajero")
        }
    }
    const validarCodigo = () => {
        console.log(clave,codigo.code);
        if (clave == codigo.code) {
            navigate("/Cajero/Retiros");
        } else {
            alert("Código incorrecto");
        }
    }
    const [cambiar, setCambiar] = useState(0);

    return (
        <div>
            {cambiar === 0 ? (
                <div>
                    <h3>Ingresar Número de teléfono</h3>
                    <input
                        value={identificador}
                        onChange={(e) => setIdentificador(e.target.value)}
                        type='number'
                        className='border border-xl'
                    />
                    <button onClick={validarNumero}>Siguiente</button>
                </div>
            ) : cambiar === 1 ? (
                <div>
                    <h3>Su código es: {codigo.code}</h3>
                    <p>Por favor ingrese el código para continuar.</p>
                    <button onClick={() => setCambiar(2)}>Ingresar Código</button>
                </div>
            ) : (
                <div>
                    <h3>Ingresar Código</h3>
                    <input
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                        type='text'
                        className='border border-xl'
                    />
                    <button onClick={validarCodigo}>Validar</button>
                </div>
            )}
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
        <div>
            {!cambiar ? (
                <div>
                    <h3>Ingresar Tarjeta</h3>
                    <input
                        value={identificador}
                        onChange={(e) => setIdentificador(e.target.value)}
                        type='number'
                        className='border border-xl'
                    />
                    <button onClick={() => setCambiar(true)}>Siguiente</button>
                </div>
            ) : (
                <div>
                    <h3>Ingresar clave</h3>
                    <button onClick={() => validar()}>ConfirmarClave</button>

                    <input
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                        type='password'
                        className='border border-xl'
                    />
                </div>
            )}
        </div>
    );

}
export default Validacion;
