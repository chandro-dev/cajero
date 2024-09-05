import DiccionarioServices from "./DiccionarioServices";


const diccionario = new DiccionarioServices();

export default class validaciones {
    static Telefonos = []
    static tarjetas = []
    constructor() {

        diccionario.getPersonas().forEach(element => {
            if (element.tarjeta) {
                validaciones.tarjetas.push(element);
            }
            if (element.cedular) {
                validaciones.Telefonos.push(element);
            }

        });
    }


    validarCodigo(codigo, numero) {

        let bandera = false;
        validaciones.Telefonos.forEach(element => {
            if ((element.cedular) == ('0' + numero) && element.codigo == codigo) {
                bandera = true;
                return;
            }
        })
        return bandera;

    }
    validarCelular(numero) {
        let bandera = false;
        validaciones.Telefonos.forEach(element => {
            if ((element.cedular) == ('0' + numero) && element.clave.bloqueada == false) {
                element.codigo = { code: Math.floor(Math.random() * 1000000) + 1, fecha: new Date() };
                bandera = element.codigo;
                return;
            }
        })
        if (bandera == false) {
            return bandera;
        } else {
            return bandera;
        }
    }
    validacionTarjeta(NTarjeta, clave) {

        let bandera = false;
        console.log(this.tarjetas);
        validaciones.tarjetas.forEach(element => {
            if (element.tarjeta == NTarjeta && element.clave.clave == clave) {
                bandera = true;
                return;
            }
        })
        return bandera;

    }
    bloquearCuenta(tipo, id) {
        console.log(id);
        switch (tipo) {
            case "Nequi":
                const telefonoIndex = validaciones.Telefonos.findIndex(x => x.cedular == id);
                if (telefonoIndex !== -1) {
                    // Crear una nueva referencia para el array y el objeto modificado
                    validaciones.Telefonos = [
                        ...validaciones.Telefonos.slice(0, telefonoIndex),
                        { ...validaciones.Telefonos[telefonoIndex], clave: { ...validaciones.Telefonos[telefonoIndex].clave, bloqueada: true } },
                        ...validaciones.Telefonos.slice(telefonoIndex + 1)
                    ];
                    console.log(validaciones.Telefonos[telefonoIndex]);
                }
                return true;
    
            case "Tarjeta":
                const tarjetaIndex = validaciones.tarjetas.findIndex(x => x.cedular == id);
                if (tarjetaIndex !== -1) {
                    // Crear una nueva referencia para el array y el objeto modificado
                    validaciones.tarjetas = [
                        ...validaciones.tarjetas.slice(0, tarjetaIndex),
                        { ...validaciones.tarjetas[tarjetaIndex], clave: { ...validaciones.tarjetas[tarjetaIndex].clave, bloqueada: true } },
                        ...validaciones.tarjetas.slice(tarjetaIndex + 1)
                    ];
                    console.log(validaciones.tarjetas[tarjetaIndex]);
                }
                return true;
    
            default:
                return false;
        }
    }
    
}