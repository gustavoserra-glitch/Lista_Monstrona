const prompt = require('prompt-sync')()

let idade = parseInt(prompt("Digite sua idade: "))

const dias = 365

console.log(`Voce possui: ${dias*idade} Dias`)