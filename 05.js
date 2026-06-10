const prompt = require('prompt-sync')()

const ano = parseInt(prompt("Digite o seu ano: "))

if(ano - 2026 <=18
){
    console.log("Voce possui mais de 18 anos")
}else{
    console.log("Voce nâo atingiu a idade")
}