import { buttons } from "../funcion/buttons.js";
import { onSubmitResult } from "./index.js"

export class Operador {
    constructor(value1, value2) {
        this.value1 = value1
        this.value2 = value2
        this.result = "0"
        this.history = []
        this.input = ""
        this.signs = ""
        this.lastsigns = ""
        this.validate = /^[+-]?(\d{1,}\.?\d*)+([-+/x])+(\d{1,}\.?\d*)+([-+/x])?$/
    }
    NoRepeat(currentInput = document.getElementById("valor")) {
        const onlyOperation = /[^\d\/\+x-]/g
        currentInput.addEventListener("input", (e) => {
            let value = e.target.value
            e.target.value = value.replace(onlyOperation, "")
        })
    }

    findSigns(currentInput) {
        const validation = this.validate
        let sign = currentInput.match(validation)
        return this.signs = sign[2]
    }

    delete() {
        this.input = ""
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
        const inputValidation = /^[+-]?(\d{1,}\.?\d+)+([-+/x])+(\d{1,}\.?\d+)+([-+/x])+$/

        if (inputValidation.test(value)) {
            let sign = value.match(inputValidation)
            this.lastsigns = sign[4]
            onSubmitResult()
        }

    }
    getOp1(currentInput = this.input) {
        const validation = this.validate
        let valueOne = currentInput.match(validation)
        this.value1 = valueOne[1]
        console.log(valueOne[1])
        return this.value1

    }
    getOp2(currentInput = this.input) {
        const validation = this.validate
        let valueTwo = currentInput.match(validation)
        this.value2 = valueTwo[3]
        return this.value2
    }

    addHistory(newCalculo = { result: this.result, operation: this.input }) {
        this.history.push(newCalculo)
    }

    setResult(result) {
        this.result = result
        this.input = result

        return [this.result, this.input]
    }
    getHistory() {
        return this.historial
    }
    getOperation() {
        return this.input
    }



}