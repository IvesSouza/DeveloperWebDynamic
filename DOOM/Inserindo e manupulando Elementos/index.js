/**/
let contador = 0

function addInput(){
    const ul = document.getElementById("inputs")

    const newLi = document.createElement('li')
    //  const newLi = document.createElement('li',{parametros Opcionais})
    newLi.className = 'lista-item' // Define a Classe do Objeto LI

    let esc = true
    
    if (esc == true) {
        newLi.innerText = "Item de uma Lista " + contador // Crio o Texto dentro no LI
        contador++
    }
    
    
    const newInput = document.createElement('input')
    newInput.type = 'Text' // Defino que o elemento input recebe tipo Texto
    newInput.name = "Nome" // Defino que o unput terá o tipo do name = Nome
    newInput.className = 'modelo-input'

    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}