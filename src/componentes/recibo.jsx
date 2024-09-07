import { useParams, useNavigate } from "react-router-dom";


const Recibo = () => {
    const { id, monto } = useParams();
    const navigate = useNavigate();
    const regresar = () => {
        navigate("/");
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Comprobante de Transacción</h1>
                <div className="mb-4">
                    <p className="text-gray-600">Nº de la Transacción:</p>
                    <p className="text-xl font-semibold text-gray-800">{id}</p>
                </div>
                <div>
                    <p className="text-gray-600">Monto:</p>
                    <p className="text-xl font-semibold text-green-600">${monto}</p>
                </div>
                <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" onClick={regresar}>
                    Regresar

                </button>
            </div>
        </div>
    );
};
export default Recibo;