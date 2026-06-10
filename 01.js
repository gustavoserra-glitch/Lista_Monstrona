const prompt = require('prompt-sync')()

let nota1 = parseFloat(prompt("digite a primeira nota : "))

let nota2 = parseFloat(prompt("Digite sua segunda nota : "))

let media = (nota1+nota2)/2

console.log(`Media final : ${media}`)