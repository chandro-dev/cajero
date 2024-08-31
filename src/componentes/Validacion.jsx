


const validacion = (Tipo) => {

    switch (Tipo) {
        case "Tarjeta":
            <h1>Operacion con tarjeta</h1>
            return
        case "Nequi":
            <h1>Operacion con nequi</h1>
            return
        default:
            <h4>usted no accedio a una opcion Valida</h4>
            return
    }
    

}


export default validacion;