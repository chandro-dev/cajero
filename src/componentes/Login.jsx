import { useNavigate } from "react-router-dom";

const TipoEntrada = () => {
    const navigate = new useNavigate();
    const nequi = () => {
        navigate("/cajero");
    }
    const GenerarCodigo = () => {
        navigate("/GenerateCode");
    }
    const PersonasValidas = () => {
        navigate("/Personas");
    }

    return <>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="border p-4 rounded-lg">
                <h3>Opciones dentro del cajero</h3>

                <div className="grid gap-3">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={nequi}>Retirar Nequi</button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={nequi}>Retirar Tarjeta</button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={GenerarCodigo}>Generar codigo</button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={PersonasValidas}>Personas Validas</button>
                </div>
            </div>

        </div>
    </>
}


export default TipoEntrada;