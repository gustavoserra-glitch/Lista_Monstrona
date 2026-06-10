const prompt = require('prompt-sync')()

let numero = parseInt(prompt("me diga um número: "))

if(numero % 2 == 0){
    console.log("esse núero é par")
}else{
    console.log("esse numero é impar")
}