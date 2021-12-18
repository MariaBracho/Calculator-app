import { buttons } from "../funcion/buttons.js"
import { signs } from "./../funcion/buttons.js"


export class Render {
    constructor(root = document.getElementById("root")) {
        this.root = root
    }

    getButtons() {
        let button = buttons(9)
        button.forEach((number) => {
            this.root.innerHTML += `
			<input class="botton botton${number}" type="button" value="${number}" id="${number}">
	`
        })
    }
    getsigns() {
        let s = signs
        s.forEach((S) => {
            this.root.innerHTML += `
			<input class="botton botton${S.id}" type="button" value="${S.signs}" id="${S.id}">
	`
        })
    }

    getRender() {
        this.root.innerHTML = `
		<div class="calculator">
		<h1>Basic calculator</h1>
	   <div >
		<input class="v" type="text" id="valor" value="" placeholder="0" >
	   <button type="reset" id="reset" value="">C</button>
	   </div>
       <div id="newRoot"></div>
       `
    }
    showResult(result = 0) {
        document.getElementById("newRoot").innerHTML = `
            <p id="result">The result of the operation is:${result}</p>`
    }

}