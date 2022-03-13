//Qual o valor do troco? - Crie um programa que calcule o troco de uma compra no valor de R$100,98 e que foi paga com R$150,00. O valor do troco deve ser exibido no console.

const valorCompra = parseFloat(100.98)
const valorPago = parseFloat(150.00)
const troco = valorPago - valorCompra

console.log(`Seu troco é de R$${troco.toFixed(2)}`)