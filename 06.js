const prompt = require ('prompt-sync')()

const nota = parseFloat(prompt("Digite a sua nota: "))
const frequancia = parseFloat(prompt("Digite a sua frequencia: "))

if(nota >=7 && frequancia >=75 ){
    console.log("Voce passou!")
}else{
    console.log("Voce reprovou!")
}