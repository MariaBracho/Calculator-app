import { Render } from "./UI/render.js";
import { Operador } from "./calculatormethods.js";
import { Calculadora } from "./calculator/calculator.js"

let calculate = new Calculadora()
export let cal = new Operador()
let ren = new Render()

ren.getRender()
ren.getButtons()
ren.getsigns()
cal.getkeysboards()
cal.getscreenkeys()



document.getElementById("18").addEventListener("click", () => {
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
    console.log(result, "resultado")
    document.getElementById("result").innerHTML = `resultado de la operacion ${result}`
})

document.getElementById("reset").addEventListener("click", () => {
    console.log(cal.delete(), "borrando operacion")
})