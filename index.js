import { Render } from "./UI/render.js";
import { Operador } from "./calculatormethods.js";
import { Calculadora } from "./calculator/calculator.js"

let calculate = new Calculadora()
let cal = new Operador()
let ren = new Render()

ren.getRender()
ren.getButtons()
ren.getsigns()
cal.getkeysboards()
cal.getscreenkeys()

document.getElementById("18").addEventListener("click", () => {
    let currentOperation = cal.getOperation()
    console.log(currentOperation, "obteniendo operacion desde this.input n.n")
    cal.findSigns(currentOperation)
    let signs = cal.getSigns()
    cal.getOp1(currentOperation, signs)
    cal.getOp2(currentOperation, signs)
    cal.getvalue1()
    cal.getvalue2()


})

document.getElementById("reset").addEventListener("click", () => {
    console.log(cal.delete(), "borrando operacion")
})