export default class RetirosServices {

    denominaciones = [10, 20, 50, 100];

    calcularDenominaciones(monto) {
        let auxiliar = 0;
        let resultado = [];
        resultado.push([]);
        let acarreo = 0;
        let i = 0;
        while (i < this.denominaciones.length) {
            if ((auxiliar + this.denominaciones[i]) > monto) {
                i++;
            } else {
                auxiliar += this.denominaciones[i];
                resultado[resultado.length - 1].push(this.denominaciones[i]);
                i++;
            }
            if ((i == 4) && (auxiliar != monto)) {
                if ((auxiliar + this.denominaciones[acarreo + 1]) > monto && (monto - auxiliar) >= this.denominaciones[0]) {
                    acarreo = 0;
                } else {
                    acarreo++;
                }
                resultado.push([]);
                for (var g = 0; g < acarreo; g++) {
                    resultado[resultado.length - 1][g] = 0;
                }
                i = acarreo;
            }
        }
        return this.dispensarDinero(monto);
    }

    dispensarDinero(monto) {

        const resultado = [];
        resultado.push([]);

        let auxiliar = 0;
        let acarreo = 0;
        while (acarreo < this.denominaciones.length && auxiliar < monto) {
            for (let j = acarreo; j < this.denominaciones.length; j++) {
                console.log(auxiliar + this.denominaciones[j]);
                if ((auxiliar + this.denominaciones[j]) <= monto) {
                    auxiliar += this.denominaciones[j];
                    resultado[resultado.length - 1].push(this.denominaciones[j]);
                }
            }
            acarreo++;
            if ((auxiliar + this.denominaciones[acarreo]) > monto && (auxiliar + this.denominaciones[0]) <= monto) {
                acarreo = 0
            }
            resultado.push([]);
        }
        resultado.pop()
        return resultado
    }
}

