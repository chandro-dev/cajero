import { useNavigate } from "react-router-dom";

const TipoEntrada = () => {
    const navigate = new useNavigate();
    const nequi = () => {
        navigate("/");
    }
    const GenerarCodigo = () => {
        navigate("/GenerateCode");
    }
    const PersonasValidas = () => {
        navigate("/Personas");
    }

    return <>
        <div className="flex gap-2 p-5">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={nequi}>Retirar Nequi</button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={GenerarCodigo}>Generar codigo</button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={PersonasValidas}>Personas Validas</button>

        </div>
    </>
}


export default TipoEntrada;