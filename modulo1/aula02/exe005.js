const prompt = require('prompt-sync')();

//capitura o nome do clinte
const cliente = prompt("Nome: ")

//opçao de escolha do cliente
console.log("[1]Café da manhã\n[2]Almoço\n[3]Jantar")
const escolha = parseInt(prompt("Opção: "))

//condição de escolha do cliente

if (escolha == 1) {
    console.log(`Café da manha para ${cliente}.`)
}
else if (escolha == 2) {
    console.log(`Almoço para ${cliente}.`)
}
else if (escolha == 3) {
    console.log(`Jantar para ${cliente}.`)
}
else {
    console.log("OPÇÃO INVÁLIDA!")
}