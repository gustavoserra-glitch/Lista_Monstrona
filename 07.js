const prompt = require ('prompt-sync')()

let pergunta = prompt("voce tem mais de 60 anos?")
let desconto = prompt("voce é estudante? ")
if(pergunta == "sim" || pergunta == "Sim" || pergunta == "SIM" ){
    console.log("voce possui desconto")
}else{
    console.log("voce nao possui desconto")
}
