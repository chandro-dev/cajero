import DiccionarioServices from "./DiccionarioServices";


const diccionario = new DiccionarioServices();

export default class validaciones {
    Telefonos = []
    tarjetas = []
    constructor() {
        console.log(diccionario.getPersonas());
        diccionario.getPersonas().forEach(element => {
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
            if (('0' + element.cedular) == ('0' + numero) && element.codigo == codigo) {
                bandera = true;
                return;
            }
        })
        return bandera;

    }
    validarCelular(numero) {

        let bandera = false;

        this.Telefonos.forEach(element => {
            if (('0' + element.cedular) == ('0' + numero)) {
                element.codigo = { code: Math.floor(Math.random() * 1000000) + 1, fecha: new Date() };
                bandera = element.codigo;
                return ;
            }
        })
        if (bandera == false) {
            return bandera;
        }else{
            return bandera;
        }
    }
    validacionTarjeta(NTarjeta, clave) {

        let bandera = false;
        console.log(this.tarjetas);
        this.tarjetas.forEach(element => {
            if (element.tarjeta == NTarjeta && element.clave == clave) {
                bandera = true;
                return;
            }
        })
        return bandera;

    }
    validacionClave() {

    }
}