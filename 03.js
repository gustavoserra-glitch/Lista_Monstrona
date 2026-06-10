const prompt = require('prompt-sync')()

let  salario = parseFloat(prompt("Digite o seu saldo:"))

const reajuste = 1.15

console.log(`havera um aumento de ${reajuste*salario}`)

