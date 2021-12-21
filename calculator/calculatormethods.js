import { buttons } from "../funcion/buttons.js";
import { signs } from "../funcion/buttons.js";
import { onSubmitResult } from "./index.js"

export class Operador {
    constructor(value1, value2) {
        this.value1 = value1
        this.value2 = value2
        this.result = "0"
        this.history = []
        this.input = ""
        this.signs = ""
        this.lastSigns = ""
    }

    findSigns(string) {
        signs.filter((s) => {
            let result = string.indexOf(s.signs)
            if (result != -1) {
                let result2 = string.charAt(result)
                console.log(result2, "signo de la operacion")
                this.signs = result2
            }
        })

        return this.signs
    }

    delete() {
        this.input = "0"
        this.result = "0"
    }
    getkeysboards() {
        let actionButtons = buttons(14)

        actionButtons.forEach((c) => {
            const action = document.getElementById(c)
            let value = action.value
            action.addEventListener("click", () => {
                let valorInput = document.getElementById("valor").value += value
                this.handleChangeInputValue(valorInput)
            })
        })

    }
    getscreenkeys() {
        document.getElementById("valor").addEventListener('change', (e) => {
            this.handleChangeInputValue(e.target.value)
        });
    }

    handleChangeInputValue(value) {
        this.input = value
        let input = [...value]

        let reduce = signs.reduce((contador, signs) => {
            let findsigns = input.filter(element => {
                return element === signs.signs
            }).length

            contador += findsigns
            return contador
        }, 0) > 1

        if (reduce) {
            let currentInput = value.length
            this.input = value.substring(0, currentInput - 1)
            let lastSign = value.substring(currentInput - 1, currentInput)
            this.getlastSigns(lastSign)
            onSubmitResult()
            if (onSubmitResult) {
                console.log(this.lastSigns, "ultimo signo")
            }
        }

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

    addHistory(newCalculo = { result: this.result, operation: this.input }) {
        this.history.push(newCalculo)
    }

    setResult(result) {
        this.result = result
        this.input = result

        return [this.result, this.input]
    }

    getlastSigns(newSign) {
        return this.lastSigns = newSign
    }

    getHistory() {
        return this.historial
    }
    getOperation() {
        return this.input
    }



}