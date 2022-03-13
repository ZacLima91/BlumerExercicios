const prompt = require("prompt-sync")();

//Conversor de moedas - Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para dólar.

function conversorMoeda(v) {
  return (v * 0.2).toFixed(2);
}

let real = +prompt("Valor a ser convertido: R$");

console.log(`DOLAR: U$${conversorMoeda(real)}`);
