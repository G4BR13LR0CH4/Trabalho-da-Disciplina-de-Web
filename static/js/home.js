var home = document.querySelector("#home")
var divMsg = document.querySelector("#divMsg")
//aqui começa o codigo dos botoes que mudam a cor
var textBtn0 = document.createTextNode("Azul")
var textBtn1 = document.createTextNode("Laranja")
var textBtn2 = document.createTextNode("Roxo")

var button_blue = document.createElement("button")
button_blue.appendChild(textBtn0)
        
var button_orange = document.createElement("button")
button_orange.appendChild(textBtn1)

var button_purple = document.createElement("button")
button_purple.appendChild(textBtn2)

button_blue.onclick = function() {
    body.style.background = "blue"
}

button_orange.onclick = function() {
    body.style.background = "orange"
}

button_purple.onclick = function() {
    body.style.background = "purple"
}
//imprimir e excluir a mensagem na tela.
function concretMsg(){
    var div = document.createElement("div")
    var nome = document.getElementById("nomeid").value
    var msg = document.getElementById("msgid").value
    var text_p = document.createElement("p")
    text_p.innerText = nome + ": " + msg

    var textBtn = document.createTextNode("Excluir")
    var button = document.createElement("button")
    button.appendChild(textBtn)

    if(nome != "" && msg != ""){
        div.appendChild(text_p)
        div.appendChild(button)
        divMsg.appendChild(div)
    } else {
        alert("Não se pode cadastrar uma mensagem com campos vazios")
    }

    button.onclick = function remove(){
        divMsg.removeChild(div)
    }
}
//adição dos elementos na div home
home.appendChild(button_blue)
home.appendChild(button_orange)
home.appendChild(button_purple)