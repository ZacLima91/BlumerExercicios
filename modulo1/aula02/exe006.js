const prompt = require("prompt-sync")();

//Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário: quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10). Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro (o jogador irá derrotar o monstro em 8 turnos).

function calculaDano(v, a) {
  let cont = 0;
  while (v > 0) {
    v -= a;
    cont++;
  }
  return cont;
}

let vida = +prompt('Quantidade de vida do monstro: ');
let ataqueJogador = +prompt('Valor de ataque do jogador: ');

const valor = calculaDano(vida, ataqueJogador)

console.log(`O jogador irá derrotar o monstro em ${valor} turnos`);
