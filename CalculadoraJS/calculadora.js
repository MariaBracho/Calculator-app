import { Calculadora } from "./calculator/calculadoraMadre.js"

export class Operador extends Calculadora {
    constructor(value1, value2, valorInput, result, signo) {
        super(value1, value2)
        this.result = result
        this.historial = []
        this.valorInput = valorInput
        this.signo = signo
    }
    getsigno() {
        return this.signo
    }

    getOp1(string, signo) {
        let result = string.indexOf(signo)
        let extraer = string.substring(result, -1);
        console.log(extraer)
        return extraer

    }
    getOp2(string, signo) {
        let result = string.indexOf(signo)
        let extraer = string.substring(result, string.length);
        let cortar = extraer.substring(1, string.length)
        console.log(cortar)
        return cortar
    }

    addHistorial(newCalculo) {
        this.historial.push(newCalculo)
    }

    setResult(results) {
        this.result = results
        this.addHistorial(this.result)
        return this.result
    }

    getHistory() {
        return this.historial
    }


}