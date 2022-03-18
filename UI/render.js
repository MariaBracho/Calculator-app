import { BUTTONS_NUMBER } from "../funcion/buttons.js"
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

    renderMenuView() {
        document.getElementById("menuHistory").innerHTML = `
        
        <div class="historyTile" id="historyTile"></div>
        <div class="history" id="history">
        
        </div>
        `
    }


    renderInput() {
        this.root.innerHTML = `
        <div class="menuHistory" id="menuHistory">
       
        </div>
		<div class="calculator">
        
        
        <div class="title">
        <p class="title_text">Calculator</p>
        </div>
		
      
       <div class="menubutton">
       <button class="historybutton ${this.hide ? 'displaynone' : 'buttonver'}" type="button"  id="historybutton" value=""></button>
       </div>
       
       
       

       <div class="calculator_operacion" id="newRoot"></div>
       <div class="container_input">
       <input class="calculator_input" type="text" id="valor" value="" placeholder="0"  onpaste="return false" >
       <div class="buttonDelete_container" id=delete>
       <button class="buttonDelete" id="buttondelete"> </button>
       </div>
      
	  
       </div>
		
	   </div>
       <div class="container_containerbuttons">
       
       <div id="container" class="containerButtons">
       <div  class="containerButtons_buttons  buttonReset">
       <button class="button button_reset" type="reset" id="reset" value="">C</button>
       </div>
       <div class="containerButtons_buttons containerButtons_buttons--mode" id="buttonMode">
       <button class="button_mode">
       <div class="button_mode_circule">
       </button>
       </div>
       
       </div>
       
       
       
       
           </div>
           
       </di>
       `


    }
    renderResult(result = 0) {
        document.getElementById("newRoot").innerHTML = `
            <p class="operacion" id="result">Operation: ${result}</p>
           `

    }

    renderButtons() {
        let button = BUTTONS_NUMBER
        button.forEach((number) => {
            document.getElementById("container").innerHTML += `
           <div class="containerButtons_buttons button_container${number}">
           <input class="button button${number}" type="button" value="${number}" id="${number}">
           </div>
           

			
	`
        })
    }
    renderSigns() {
        let s = signs
        s.forEach((S) => {
            document.getElementById("container").innerHTML += `
            <div  class="containerButtons_buttons  button_container${S.id}">
            <input class="button button${S.id}" type="button" value="${S.signs}" id="${S.id}">
            </div>
			
	`
        })
    }
    renderHistory(newOperacion = 0, newResultado = 0) {

        document.getElementById("history").innerHTML += `
               <div class="result_container">
               <p class="result"> Operation: <span>${newOperacion}</span> </p>
               
               <p class="result"> Result: <span> "${newResultado } "</span></p>
               
               </div>
        `
    }

    hideResults() {
        document.getElementById("history").innerHTML = ``
    }
    renderHistoryTitle() {
        document.getElementById("historyTile").innerHTML = `
        <div class="HistoryTitle"> <p class="HistoryTitle_text"> History</p>  </div>
           <button  class="buttonClose" id="hidehistory-button">  </button>
           <div class="historybutton_clear_container">
       
           <input class="historybutton_clear" type="button" id="historybutton-clear" value="Clear history ">
    
           </div>
           
          
        `
    }


}