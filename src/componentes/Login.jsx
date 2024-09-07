import { useNavigate } from "react-router-dom";

const TipoEntrada = () => {
    const navigate = new useNavigate();
    const nequi = () => {
        navigate("/cajero/Validacion/Nequi");
    }
    const tarjeta = () => {
        navigate("/cajero/Validacion/Tarjeta");
    }
    const Personas = () => {
        navigate("/cajero/Personas");
    }
    return (
        <div className="flex justify-center flex-col items-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 p-4">
            <div className="bg-gray-200 shadow-lg p-6 rounded-lg w-full max-w-lg">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">Bienvenido al Cajero</h1>
                    <img
                        src="https://revistaseguridad360.com/wp-content/uploads/2022/03/cajero.jpg"
                        alt="Cajero Automático"
                        className="w-full h-64 object-cover mb-4 rounded-lg shadow-md"
                    />
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Seleccione una opción</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
                        onClick={nequi}
                    >
                        Retirar con Nequi.
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
                        onClick={tarjeta}
                    >
                        Retirar con cuenta.
                    </button>
                    <button
                        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
                        onClick={Personas}
                    >
                        Ver personas
                    </button>
                </div>
            </div>
        </div>
    );
}


export default TipoEntrada;