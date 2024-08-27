import DiccionarioServices from "./DiccionarioServices";


const diccionario = new DiccionarioServices();

export default class validaciones {


    Telefonos = []
    tarjetas = []

    constructor() {
        diccionario.getPersonas.forEach(element => {
            if (element.tarjeta) {
                this.tarjetas.push(element);
            }
            if (element.cedular) {
                this.Telefonos.push(element);
            }
        });

    }

    validarCodigo(codigo, numero) {

        let bandera = false;
        this.Telefonos.forEach(element => {
            if (element.cedular == numero && element.codigo == codigo) {
                bandera = true;
                return;
            }
        })
        return bandera;

    }
    validarCelular() {

    }
    validacionTarjeta() {

    }
    validacionClave() {

    }
}