//import { buttons } from "../funcion/buttons.js";
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
        this.validate = /^([\+\/\.x-]?\(?[+-]?[\d*π?]{1,}\.?\d*\)?)(\^?)(π?\d*)([\/\+x-])+(\(?[+-]?[\d*π?]{1,}\.?\d*\)?)+(\^?)(π?\d*)([/x+-])?$/
    }

    specialOperations(value = this.input) {
        const firtsOption = /^([\+\/-]?\(?[+-]?[π?\d*]{1,}\.?\d*\)?)(\^?)(π?\d*){1,}$/
        let sign = value.match(firtsOption)
        const pi = /\π/g

        console.log("solo una operacion", value)

        if (firtsOption.test(value)) {
            value = this.noParentesis(value)
            value = value.replace(pi, Math.PI)
            console.log("solo una operacion", value)
        }
        if (sign[2]) {
            let exponent = Math.pow(sign[1].replace(pi, Math.PI), sign[3].replace(pi, Math.PI))
            console.log("exponente sirve", exponent, sign[1], sign[3])
            return value = exponent

        } else {
            console.log("solo una operacion", value)
        }
        console.log("solo una operacion", value)
        return value
    }



    noParentesis(value) {
        const parentesis = /[\)\(]/g
        return value.replace(parentesis, "")

    }

    NoRepeat(currentInput = document.getElementById("valor")) {
        const onlyOperation = /[^\d\/\+\.\(\)\^πx-]/g
        currentInput.addEventListener("input", (e) => {
            let value = e.target.value
            e.target.value = value.replace(onlyOperation, "")
        })


    }

    findSigns(currentInput) {
        const validation = this.validate
        let sign = currentInput.match(validation)
        this.signs = sign[4]
        console.log(sign[4], "signo encontrado")
        return this.signs
    }

    delete() {
        this.input = ""
        this.result = "0"
    }
    getkeysboards() {
        let actionButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

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
        const inputValidation = /^([\+\/\.x-]?\(?[+-]?[\d*π?]{1,}\.?\d*\)?)(\^?)(π?\d*)([\/\+x-])+(\(?[+-]?[\d*π?]{1,}\.?\d*\)?)+(\^?)(π?\d*)([/x+-])+$/
        const SignsRepeat = /[\/\+\.\^x-]{2,}/


        if (inputValidation.test(value)) {
            console.log("funciona el automatico")
            let sign = value.match(inputValidation)
            this.lastsigns = sign[8]
            onSubmitResult()
        }

        if (SignsRepeat.test(value)) {
            let sign = value.match(SignsRepeat)
            let findSing = sign[0]
            let lastSing = findSing.substring(1)
            document.getElementById("valor").value = value.replace(SignsRepeat, lastSing)

        }

    }
    getOp1(currentInput = this.input) {
        let validation = this.validate
        let valueOne = currentInput.match(validation)
        valueOne[1] = this.noParentesis(valueOne[1])

        let pi = "π"

        let prueba = /\(\d+[\/x+-]\d+\)\^π+/

        let expo = () => {
            if (valueOne[3].indexOf(pi) != -1 || valueOne[1].indexOf(pi) != -1) {
                valueOne[3] = valueOne[3].replace(pi, Math.PI)
                valueOne[1] = valueOne[1].replace(pi, Math.PI)

            }
            if (valueOne[2]) {
                let exponent = Math.pow(valueOne[1], valueOne[3])
                return this.value1 = exponent
            }
            if (prueba.test(currentInput)) {
                valueOne[7] = valueOne[7].replace(pi, Math.PI)
                let exponent = Math.pow(valueOne[1], valueOne[7])
                return this.value1 = exponent
            } else {

                this.value1 = valueOne[1]
            }
        }
        expo()

        console.log(this.value1, "one")
        return this.value1

    }
    getOp2(currentInput = this.input) {
        const validation = this.validate
        let valueTwo = currentInput.match(validation)
        valueTwo[5] = this.noParentesis(valueTwo[5])

        let pi = "π"

        if (valueTwo[7].indexOf(pi) != -1 || valueTwo[5].indexOf(pi) != -1) {
            valueTwo[7] = valueTwo[7].replace(pi, Math.PI)
            valueTwo[5] = valueTwo[5].replace(pi, Math.PI)
        }
        if (valueTwo[6]) {
            let exponent = Math.pow(valueTwo[5], valueTwo[7])
            return this.value2 = exponent
        } else {
            this.value2 = valueTwo[5]
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