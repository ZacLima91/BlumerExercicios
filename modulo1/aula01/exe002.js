const prompt = require("prompt-sync")();

//Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.

let compras = [];
let total = 0;

const qtd = prompt("Quantidade: ");

for (let i = 1; i <= qtd; i++) {
  let compra = { produto: "", valor: 0 };
  let p = prompt("Produto: ");
  let v = +prompt("Preço: R$");
  compra.produto = p;
  compra.valor = v;
  compras.push(compra);
}
for (let i = 0; i < qtd; i++) {
  total += compras[i].valor;
}
console.log(`O valor a ser pago é R$${total.toFixed(2)}`);
