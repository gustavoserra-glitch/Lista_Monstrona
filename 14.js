const prompt = require('prompt-sync')()
let numero = Number(prompt("Digite qual número você quer no fatorial:"))
let resultado = 1;

for(let i = numero; i > 0 ;i--) {
    resultado *= i;
}
console.log(`o fatorial de ${numero} é: ${resultado}`);


