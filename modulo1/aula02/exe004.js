const prompt = require("prompt-sync")();

//Tabela de notas - Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos.

let resposta = "";
const alunos = [];

do {
  const aluno = {};
  aluno.nome = prompt("Nome do aluno: ");

  do {
    aluno.nota = +prompt("Nota: ");
    if (isNaN(aluno.nota)) {
      console.log("ERRO! Digite uma opção válida.");
      console.log();
    }
  } while (isNaN(aluno.nota));
  alunos.push(aluno);

  do {
    resposta = prompt("Deseja continuar? ").toUpperCase();
    if (resposta != "N" && resposta != "S") {
      console.log("ERRO! Digite uma opção válida.");
      console.log();
    }
  } while (resposta != "N" && resposta != "S");

  console.log();
} while (resposta != "N");

for(let aluno of alunos){
    console.log(aluno);
}
