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
        this.validate = /^([\+\/\.x-]?\(?[+-]?\d{1,}\.?\d*\)?)(\^?)(\d*)([-+/x])+(\(?[+-]?\d{1,}\.?\d*\)?)+(\^?)(\d*)([-+/x])?$/
    }

    noParentesis(value) {
        const parentesis = /[\)\(]/g
        return value.replace(parentesis, "")

    }

    NoRepeat(currentInput = document.getElementById("valor")) {
        const onlyOperation = /[^\d\/\+\.\(\)\^x-]/g
        currentInput.addEventListener("input", (e) => {
            let value = e.target.value
            e.target.value = value.replace(onlyOperation, "")
        })


    }

    findSigns(currentInput) {
        const validation = this.validate
        let sign = currentInput.match(validation)
        this.signs = sign[4]
        console.log(this.signs, "signo encontrado")
        return this.signs
    }

    delete() {
        this.input = ""
        this.result = "0"
    }
    getkeysboards() {
        let actionButtons = buttons(16)

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
        document.getElementById("valor").addEventListener('input', (e) => {
            this.handleChangeInputValue(e.target.value)
        });
    }

    handleChangeInputValue(value) {
        this.input = value
        const inputValidation = /^([\+\/\.-x]?\(?[+-]?\d{1,}\.?\d*\)?)(\^?)(\d*)([-+/x])+(\(?[+-]?\d{1,}\.?\d*\)?)+(\^?)(\d*)([-+/x])+$/
        const SignsRepeat = /[\/\+\.\^x-]{2,}/

        if (inputValidation.test(value)) {
            console.log("funciona")
            let sign = value.match(inputValidation)
            this.lastsigns = sign[8]
            onSubmitResult()

        }
        if (SignsRepeat.test(value)) {
            console.log("funciona la prueba dos")
            let sign = value.match(SignsRepeat)
            let findSing = sign[0]
            let lastSing = findSing.substring(1)
            document.getElementById("valor").value = value.replace(SignsRepeat, lastSing)
            console.log(lastSing, "last")

        }

    }
    getOp1(currentInput = this.input) {
        const validation = this.validate
        let valueOne = currentInput.match(validation)
        let firt = this.noParentesis(valueOne[1])

        let prueba = /\(\d+[\/x+-]\d+\)\^\d+/

        let expo = () => {
            if (valueOne[2]) {
                let exponent = Math.pow(firt, valueOne[3])

                return this.value1 = exponent
            }
            if (prueba.test(currentInput)) {
                let exponent = Math.pow(firt, valueOne[7])
                return this.value1 = exponent
            } else {

                this.value1 = firt
            }
        }
        expo()

        console.log(this.value1, "one")
        return this.value1

    }
    getOp2(currentInput = this.input) {
        const validation = this.validate
        let valueTwo = currentInput.match(validation)
        let Second = this.noParentesis(valueTwo[5])

        if (valueTwo[6]) {
            let exponent = Math.pow(Second, valueTwo[7])
            return this.value2 = exponent
        } else {

            this.value2 = Second
        }
        console.log(this.value2, "two")
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