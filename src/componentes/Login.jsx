import { useNavigate } from "react-router-dom";

const TipoEntrada = () => {
    const navigate = new useNavigate();
    const nequi = () => {
        navigate("/Validacion/Nequi");
    }
    const Tarjeta = () => {
        navigate("/Validacion/Tarjeta");
    }
    return <>
        <div className="flex justify-center flex-col items-center min-h-screen bg-gray-100 p-4">
            <div className="border p-4 rounded-lg">
                <div className="grid gap-3">
                    <h1>Bienvenido al Cajero falso</h1>

                    <img src="https://revistaseguridad360.com/wp-content/uploads/2022/03/cajero.jpg"></img>
                    <h3>Opciones dentro del cajero</h3>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={nequi}>Retirar Nequi</button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={Tarjeta}>Retirar Tarjeta</button>
                </div>
            </div>

        </div>
    </>
}


export default TipoEntrada;