const prompt = require('prompt-sync')()

let repetir = true
let notas = 0
let aluno = 0

while(repetir == true){
    let pergunta = prompt("Deseja informar uma nova nota ? ")
    if(pergunta == "sim"  || pergunta == "SIM" || pergunta == "Sim" ){
        notas+= parseFloat(prompt("Digite a nota a ser guardada: "))
        aluno++
    }else{
        repetir = false

    }
} 

console.log(`A media é ${(notas/aluno).toFixed(2)}`)