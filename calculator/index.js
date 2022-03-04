import { Render } from "../UI/render.js";
import { Operador } from "./calculatormethods.js";
import { Calculadora } from "./calculator.js"

let calculate = new Calculadora()
let calculator = new Operador()
let render = new Render()


render.renderInput()
render.renderResult()
render.renderButtons()
render.renderSigns()
calculator.getkeysboards()
calculator.getscreenkeys()
calculator.NoRepeat()
calculator.delete()



document.getElementById("buttonMode").addEventListener("click", () => {
    console.log("funciona!!!!!!!!!!!!")
    document.body.classList.toggle('dark')
})




const resolveOperation = (callback) => {
    try {
        callback()
        return [true, "Operacion exitosa"]
    } catch (error) {
        const ERROR_MESSAGE = "Error de formato"
        console.error('Error', ERROR_MESSAGE)
        return [false, ERROR_MESSAGE]
    }
}


export const onSubmitResult = () => resolveOperation(() => {
    let currentOperation = calculator.getOperation()


    const sign = calculator.findSigns(currentOperation)

    const operationOne = calculator.getOp1()
    const operationTwo = calculator.getOp2()

    const [newOperationOne, newOperationTwo] = calculate.getvalues(operationOne, operationTwo)

    const operationToResolve = calculate.getOperationByMethod(sign)
    let resultOfOperation = operationToResolve(newOperationOne, newOperationTwo)

    const newStackHistory = { results: resultOfOperation, operation: currentOperation }


    calculator.addHistory(newStackHistory)

    localStorage.setItem("calculo", JSON.stringify(calculator.history))



    if (isNaN(resultOfOperation)) {
        resultOfOperation = "Error de formato"
        console.log("no es un numero")
    }
    let newResult = resultOfOperation
    calculator.setResult(newResult)


    render.renderResult(currentOperation)

    setNewValueToInput(calculator.input + calculator.lastsigns)


})

export const onSubmitResult_onlyOpcion = () => resolveOperation(() => {
    let currentOperation = calculator.getOperation()

    let result = calculator.specialOperations()
    const newStackHistory = { results: result, operation: currentOperation }
    console.log(newStackHistory)


    calculator.addHistory(newStackHistory)

    localStorage.setItem("calculo", JSON.stringify(calculator.history))

    let newResult = result
    calculator.setResult(newResult)


    render.renderResult(newResult)

    setNewValueToInput(calculator.input)

})

export const setNewValueToInput = (newValue) => {
    document.getElementById("valor").value = newValue
}


const showHistory = () => {


    const onSubmitResultisTrue = () => {
        if (onSubmitResult) {
            let getLocalStorage = localStorage.getItem("calculo")
            calculator.history = JSON.parse(getLocalStorage)
        }
        if (calculator.history == null) {
            calculator.history = []
        }
    }
    onSubmitResultisTrue()

    render.renderButton()

    document.getElementById("menuHistory").style.cssText = `display:block`
    document.getElementById("buttondelete").style.cssText = `display:none`

    document.getElementById("hidehistory-button").addEventListener("click", hiddeHistory)
    document.getElementById("historybutton-clear").addEventListener("click", () => {
        localStorage.clear()
        calculator.history = []
        render.hideResults()

    })


    historyfilter()




}
export const historyfilter = (history = calculator.history) => {

    if (history) {
        let resultAndOperation = history.filter((number) => {
            return render.renderHistory(number.operation, number.results)
        })
        return resultAndOperation
    }
}
const hiddeHistory = () => {
    render.hideHistory()
    document.getElementById("buttondelete").style.cssText = `display:block;`
    document.getElementById("menuHistory").style.cssText = `display:none`

}

document.getElementById("historybutton").addEventListener("click", showHistory)



document.getElementById("20").addEventListener("click", () => {

    const [status] = onSubmitResult()

    if (!status) {
        const [status, message] = onSubmitResult_onlyOpcion()

        if (!status) throw render.renderResult(message)
    }
})

document.getElementById("valor").addEventListener('keyup', ((e) => {
    let enter = "Enter"
    if (e.code === enter) {
        try {
            onSubmitResult()
        } catch (e) {
            console.log(e, "error de formato")
            render.renderResult(" Error de formato")
        }
    }
}))

document.getElementById("reset").addEventListener("click", () => {
    render.renderResult("0")
    document.getElementById("valor").value = ""
})


document.getElementById("historybutton").addEventListener("click", () => {
    render.menuhistory()
})

document.getElementById("buttondelete").addEventListener("click", () => {
    console.log("funciona")

    let currentOperation = document.getElementById("valor").value
    let detele = currentOperation.substring(0, currentOperation.length - 1)
    console.log(detele)
    document.getElementById("valor").value = detele

})