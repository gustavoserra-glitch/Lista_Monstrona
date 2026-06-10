const prompt = require ('prompt-sync')()

const senha = prompt ("Digite a sua senha: ")
let entrada = prompt ("confirme a sua senha: ")

if(senha == entrada){
    console.log("Senha alterada")
}else{
    console.log("Senha incorreta")
}