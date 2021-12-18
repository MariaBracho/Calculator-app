import { Render } from "./UI/render.js";
import { Operador } from "./calculatormethods.js";
import { Calculadora } from "./calculator/calculator.js"

let calculate = new Calculadora()
let cal = new Operador()
let ren = new Render()

ren.getRender()
ren.getButtons()
ren.getsigns()
ren.showResult()
cal.getkeysboards()
cal.getscreenkeys()

export const onSubmitResult = () => {
    let currentOperation = cal.getOperation()
    console.log(currentOperation, "operacion")
    cal.findSigns(currentOperation)
    let signs = cal.getSigns()
    cal.getOp1(currentOperation, signs)
    cal.getOp2(currentOperation, signs)
    let v1 = cal.getvalue1() //opcion 1
    let v2 = cal.getvalue2() // opcion 2
    calculate.getvalues(v1, v2)
    let method = calculate.getOperationByMethod(signs)
    let result = method(calculate.op1, calculate.op2)
    cal.getresult(result + cal.lastSigns)
    ren.showResult(cal.result)
    document.getElementById("valor").value = cal.input
    console.log(result, "resultado", cal.result)

}

document.getElementById("18").addEventListener("click", onSubmitResult)
document.getElementById("valor").addEventListener('keyup', ((e) => {
    let enter = "Enter"
    if (e.code === enter) {
        onSubmitResult()
    }
}))

document.getElementById("reset").addEventListener("click", () => {
    ren.showResult("0")
    document.getElementById("valor").value = "0"
    console.log(cal.delete(), "borrando operacion")
})