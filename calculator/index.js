import { Render } from "../UI/render.js";
import { Operador } from "./calculatormethods.js";
import { Calculadora } from "./calculator.js"

let calculate = new Calculadora()
let calculator = new Operador()
let render = new Render()

render.renderInput()
render.renderButtons()
render.renderSigns()
render.renderResult()
calculator.getkeysboards()
calculator.getscreenkeys()
calculator.NoRepeat()


export const onSubmitResult = () => {
    let currentOperation = calculator.getOperation()

    const sign = calculator.findSigns(currentOperation)


    const operationOne = calculator.getOp1()
    const operationTwo = calculator.getOp2()

    const [newOperationOne, newOperationTwo] = calculate.getvalues(operationOne, operationTwo)

    const operationToResolve = calculate.getOperationByMethod(sign)
    const resultOfOperation = operationToResolve(newOperationOne, newOperationTwo)

    const newStackHistory = { results: resultOfOperation, operation: currentOperation }

    calculator.addHistory(newStackHistory)

    const newResult = resultOfOperation
    calculator.setResult(newResult)

    render.renderResult(newResult)

    setNewValueToInput(calculator.input + calculator.lastsigns)
}

export const setNewValueToInput = (newValue) => {
    document.getElementById("valor").value = newValue
}


const showHistory = () => {
    render.renderButton()
    let history = calculator.history
    document.getElementById("hidehistory-button").addEventListener("click", hiddeHistory)
    let resultAndOperation = history.filter((number) => {
        return render.renderHistory(number.operation, number.results)
    })
    return resultAndOperation


}
const hiddeHistory = () => {
    render.hideHistory()
}


document.getElementById("historybutton").addEventListener("click", showHistory)


document.getElementById("18").addEventListener("click", onSubmitResult)
document.getElementById("valor").addEventListener('keyup', ((e) => {
    let enter = "Enter"
    if (e.code === enter) {
        onSubmitResult()
    }
}))

document.getElementById("reset").addEventListener("click", () => {
    render.renderResult("0")
    document.getElementById("valor").value = ""
})