const prompt = require("prompt-sync")();

//Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.

const pessoas = [];
let pessoa = {};
let somaIdade = 0;
let somaAltura = 0;
let qtdPessoas = 0;
do {
  qtdPessoas = +prompt("Quantidades de Pessoas: ");
} while (isNaN(qtdPessoas));
for (let i = 0; i < qtdPessoas; i++) {
  pessoa = {};
  do {
    pessoa.nome = prompt("Nome: ");
  } while (pessoa.nome.length < 3);
  do {
    pessoa.altura = +prompt("Altura: ");
  } while (isNaN(pessoa.altura));
  do {
    pessoa.idade = +prompt("Idade: ");
  } while (isNaN(pessoa.idade));
  pessoas.push(pessoa);
  console.log();
}

for (let i of pessoas) {
  somaIdade += i.idade;
  somaAltura += i.altura;
  console.log(`${i.nome} tem ${i.idade} anos e tem ${i.altura} de altura`);
}
console.log();
console.log(
  `A média da idade deles(as) é ${(somaIdade / pessoas.length).toFixed()}`
);
console.log(
  `A média da altura deles(as) é ${(somaAltura / pessoas.length).toFixed()}`
);
