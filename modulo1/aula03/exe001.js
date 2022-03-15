const prompt = require("prompt-sync")();

//Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.

const n1 = +prompt("Digite um número: ");
const n2 = +prompt("Digite outro número: ");

if (n1 > n2) {
  console.log(`O número ${n1} é maior que ${n2}`);
} else if (n1 < n2) {
  console.log(`O número ${n2} é maior que ${n1}`);
} else {
  console.log(`O número ${n1} é igual a ${n2}`);
}
