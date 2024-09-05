import Personas from '../personas.json';
export default class DiccionarioServices {
    Personas = [];
    constructor() {
        this.Personas = Personas.Personas;
    }
    getPersonas() {
        return this.Personas;
    }
}

export class Tarjetas {
    numero;
    clave;
}

export class Telefono {
    Telefono;
    codigo;
}