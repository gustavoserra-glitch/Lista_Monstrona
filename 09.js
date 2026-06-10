const prompt = require ('prompt-sync')()

console.log("alerta número 1")

const tabuada= parseInt(prompt("Digite oque voce quiser: "))

for(let contador = 0; contador <=10; contador++ ){
    console.log(`${tabuada} x ${contador} = ${tabuada* contador}`)
}