const prompt = require("prompt-sync")();

//Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.

const conversorDatas = function (v) {
  const anosMesesDiasVividos = new Object();
  let a = 0;
  let m = 0;
  let d = 0;
  while (v > 0) {
    if (v >= 365) {
      v -= 365;
      a++;
    } else if (v >= 30) {
      v -= 30;
      m++;
    } else {
      v--;
      d++;
    }
  }
  anosMesesDiasVividos.anos = a;
  anosMesesDiasVividos.meses = m;
  anosMesesDiasVividos.dias = d;
  return anosMesesDiasVividos;
};

let totalDias = +prompt('Qual quantidade de dias deseja converter? ');
const convertido = conversorDatas(totalDias);
console.log(`Você já viveu ${convertido.anos} anos, ${convertido.meses} meses e ${convertido.dias} dias`);
