import { buttons } from "../funcion/buttons.js"
import { signs } from "../funcion/buttons.js"




export class Render {
    constructor(root = document.getElementById("sub_root"), container = document.getElementById("container")) {
        this.container = container
        this.root = root
        this.hide = false
    }



    hideButton() {
        return this.hide = true
    }


    showButton() {
        return this.hide = false
    }



    renderInput() {
        this.root.innerHTML = `
        <div class="menuHistory" id="menuHistory"></div>
		<div class="calculator">
        
        
        <div class="title">
        <p class="title_text">Calculadora</p>
        </div>
		
        <div class="hidehistory" id="hidehistory"></div>
       <div class="history" id="history">
       
       </div>
       <div class="menubutton">
       <button class="historybutton ${this.hide ? 'displaynone' : 'buttonver'}" type="button"  id="historybutton" value=""></button>
       </div>
       <div class="historybutton_clear_container">
       
       <input class="historybutton_clear" type="button" id="historybutton-clear" value="Clear history ">

       </div>
       
       

       <div class="calculator_operacion" id="newRoot"></div>
       <div class="container_input">
       <input class="calculator_input" type="text" id="valor" value="" placeholder="0"  onpaste="return false" >
	  
       </div>
		
	   </div>
       <div class="container_containerbuttons">
       
       <div id="container" class="containerButtons">
       <div  class="containerButtons_buttons">
       <button class="button button_reset" type="reset" id="reset" value="">C</button>
       </div>
       <div class="containerButtons_buttons containerButtons_buttons--mode">
       <div class="button_mode">
       <div class="button_mode_circule">
       </div>
       </div>
       
       </div>
       
       
       
       
           </div>
           
       </di>
       `


    }
    renderResult(result = 0) {
        document.getElementById("newRoot").innerHTML = `
            <p id="result">Operation: ${result}</p>
           `

    }

    renderButtons() {
        let button = buttons(9)
        button.forEach((number) => {
            document.getElementById("container").innerHTML += `
           <div class="containerButtons_buttons">
           <input class="button button${number}" type="button" value="${number}" id="${number}">
           </div>
           

			
	`
        })
    }
    renderSigns() {
        let s = signs
        s.forEach((S) => {
            document.getElementById("container").innerHTML += `
            <div  class="containerButtons_buttons">
            <input class="button button${S.id}" type="button" value="${S.signs}" id="${S.id}">
            </div>
			
	`
        })
    }
    renderHistory(newOperacion = 0, newResultado = 0) {

        document.getElementById("history").innerHTML += `
               <div class="result_container">
               <p class="result"> Operacion: ${newOperacion}  </p>
               
               <p class="result"> Resultado: "${newResultado}"</p>
               
               </div>
        `
    }
    renderButton() {
        document.getElementById("hidehistory").innerHTML = `
        <div class="HistoryTitle"> <p class="HistoryTitle_text"> Historial</p>  </div>
           <input type="button" value="x" class="buttonClose" id="hidehistory-button">
           
          
        `
    }

    hideHistory() {
        document.getElementById("history").innerHTML = ``
        document.getElementById("hidehistory").innerHTML = ``
    }


}