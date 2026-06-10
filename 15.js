const prompt = require('prompt-sync')()
let quantidade = parseInt(prompt("Quantas notas você quer inserir?"));


let somaTotal = 0;


for (let i = 1; i <= quantidade; i++) {
    let nota = parseFloat(prompt("Digite a nota " + i + ":"));
    
    
    somaTotal += nota;
}


if (quantidade > 0) {
    let media = somaTotal / quantidade;
    alert(`A média das " + ${quantidade} + " notas é: " + ${media}.toFixed(2)`);
} else {
    alert("Quantidade inválida!");
}