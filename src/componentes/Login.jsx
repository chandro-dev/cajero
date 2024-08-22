import { useNavigate } from "react-router-dom";

const TipoEntrada = () => {
    const navigate = new useNavigate();
    const nequi = () => {
        console.log("pepe");
        navigate("/");
    }
    const bancolombia = () => {
        console.log("pepe");
        navigate("/GenerateCode");
    }

    return <>
        <div className="flex gap-2 p-5">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={nequi}>Retirar Nequi</button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={bancolombia}>Retirar Tarjeta debito</button>

        </div>
    </>
}


export default TipoEntrada;