import { buttons } from "../funcion/buttons.js"
import { signs } from "../funcion/buttons.js"


export class Render {
    constructor(root = document.getElementById("root")) {
        this.root = root
    }

    renderButtons() {
        let button = buttons(9)
        button.forEach((number) => {
            this.root.innerHTML += `
			<input class="button button${number}" type="button" value="${number}" id="${number}">
	`
        })
    }
    renderSigns() {
        let s = signs
        s.forEach((S) => {
            this.root.innerHTML += `
			<input class="button button${S.id}" type="button" value="${S.signs}" id="${S.id}">
	`
        })
    }

    renderInput() {
        this.root.innerHTML = `
		<div class="calculator">
		<h1>Basic calculator</h1>
        <div id="hidehistory"></div>
       <div class="history" id="history"></div>
       <input class="historybutton" type="button" id="historybutton" value="History ">
		<input class="v" type="text" id="valor" value="" placeholder="0" >
	   <button type="reset" id="reset" value="">C</button>
	   </div>
       <div id="newRoot"></div>
       `
    }
    renderResult(result = 0) {
        document.getElementById("newRoot").innerHTML = `
            <p id="result">The result of the operation is:${result}</p>`
    }
    renderHistory(newOperacion = 0, newResultado = 0) {
        document.getElementById("history").innerHTML += `
               <div>
               <p> Operacion: ${newOperacion}  </p>
               <p> Resultado: "${newResultado}"</p>
               
               </div>
        `
    }
    renderButton() {
        document.getElementById("hidehistory").innerHTML = `
        
           <input type="button" value="x" class="button" id="hidehistory-button">
           
        `
    }

    hideHistory() {
        document.getElementById("history").innerHTML = ``
        document.getElementById("hidehistory").innerHTML = ``
    }

}