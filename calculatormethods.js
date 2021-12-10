import { buttons } from "./funcion/buttons.js";
import { signs } from "./funcion/buttons.js";

export class Operador {
    constructor(value1, value2, result) {
        this.value1 = value1
        this.value2 = value2
        this.result = result
        this.historial = []
        this.input = ""
        this.signs = ""
    }

    findSigns(string) {
        signs.find((s) => {
            let result = string.indexOf(s.signs)
            if (result != -1) {
                let result2 = string.charAt(result)
                console.log(result2, "signo de la operacion")
                this.signs = result2
            }
        })
    }
    getSigns() {
        return this.signs
    }

    delete() {
        this.input = "0"
    }
    getkeysboards() {
        let actionButtons = buttons(14)

        actionButtons.forEach((c) => {
            const action = document.getElementById(c)
            let value = action.value
            action.addEventListener("click", () => {
                let valorInput = document.getElementById("valor").value += value
                this.input = valorInput
            })
        })

    }
    getscreenkeys() {
        document.getElementById("valor").addEventListener('change', (e) => {
            let valueOfinput = e.target.value
            console.log(valueOfinput, "valor de screen")
            this.input = valueOfinput

        });

    }

    getOp1(string, signs) {
        let result = string.indexOf(signs)
        let extract = string.substring(result, -1);
        this.value1 = extract
        return extract

    }
    getOp2(string, signs) {
        let result = string.indexOf(signs)
        let extract = string.substring(result, string.length);
        let cut = extract.substring(1, string.length)
        this.value2 = cut
        return cut
    }

    getvalue1() {
        return this.value1
    }

    getvalue2() {
        return this.value2
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
    getOperation() {
        return this.input
    }


}