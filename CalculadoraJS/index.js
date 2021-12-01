import { Render } from "./UI/render.js";
import { botones } from "./funcion/Botones.js";
import { Operador } from "./calculadora.js";
import { Calculadora } from "./calculator/calculadoraMadre.js"
import { signos } from "./funcion/Botones.js"

let cal2 = new Calculadora()
let cal = new Operador()
let ren = new Render()

ren.getRender()
ren.getbotones()
ren.getsignos()


let actionButtons = botones(14)
console.log(actionButtons)

actionButtons.forEach((c) => {
    const action = document.getElementById(c)

    let value = action.value

    action.addEventListener("click", () => {
        let valorInput = document.getElementById("valor").value += value

        const onClick = () => {

                let signo = signos
                signo.forEach((S) => {
                    console.log("CLICK!!")
                    let op1 = cal.getOp1(valorInput, "-")
                    let op2 = cal.getOp2(valorInput, "-")
                    console.log(op1, op2)
                    let results = cal2.subtraction(op1, op2)
                    console.log(results)
                        //let Result = cal2.setResult(results)

                    //console.log(Result)
                    /// console.log(cal2.getHistory())

                })
            }
            //console.log(valorInput)
        document.getElementById("18").addEventListener("click", onClick)

    })
})