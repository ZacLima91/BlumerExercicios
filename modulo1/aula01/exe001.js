const prompt = require("prompt-sync")();

//Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.

function calculaMedia(n1, n2, pessoa) {
  const mediaAluno = {
    nota1: n1,
    nota2: n2,
    nome: pessoa,
    media: function () {
      return (n1 * 4 + n2 * 6)/(4 + 6);
    },
  };
  return mediaAluno;
}
const name = prompt('Digite seu nome: ');
const note1 = +prompt('Digite a segunda nota: ');
const note2 = +prompt('Digite a segunda nota: ');

const aluno = calculaMedia(note1, note2, name);

console.log(`Olá ${aluno.nome} sua primeira nota foi ${aluno.nota1} e a segunda nota foi ${aluno.nota2}, já sua média ponderada foi ${aluno.media()}`);