import { useParams } from "react-router-dom";



const Recibo = () => {
    const { idUsuario } = useParams();


    return (<h1>Soy u recibo {idUsuario}</h1>)
}

export default Recibo;