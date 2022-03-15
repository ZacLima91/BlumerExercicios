//Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.
const prompt = require("prompt-sync")();
const numeros = [];
const impares = [];
const pares  = [];
let n = 0;
for (let i = 0; i < 20; i++) {
  do {
    n = +prompt(`Digite o ${i + 1}º número:`);

    if (!numeros.includes(n)) {
      numeros.push(n);
      if(n%2==0){
          pares.push(n);
      }else{
          impares.push(n)
      }

    }else{
        i --
    }
  } while (isNaN(n));
}

console.log(`Lista Completa: ${numeros}`);
console.log(`Lista Pares: ${pares}`);
console.log(`Lista Imapres: ${impares}`);