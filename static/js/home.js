var body = document.querySelector("#body")
var home = document.querySelector("#home")
var msgid = document.querySelector("#msgid")

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
//tentativa de fazer ele imprimir a mensagem na tela.
function concretMsg(){
    var nome = document.getElementById("nomeid").value
    var msg = document.getElementById("msgid").value

     alert(nome + msg)
     //Incompleto, coloquei o alert só para ver se ele estava resgatando do html.
}
//adição dos elementos na div home
home.appendChild(button_blue)
home.appendChild(button_orange)
home.appendChild(button_purple)