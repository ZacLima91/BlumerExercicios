//E os 10% do garçom? - Defina uma variável para o valor de uma refeição que custou R$ 42,54. Na sequência, defina uma variável para o valor da taxa de serviço que é de 10%. Por fim defina uma variável que será responsável pelo cálculo do valor total da conta e exiba-o no console com a seguinte formatação: R$99.99 (valor com duas casas decimais).

const custoRefeicao = parseFloat (42.54)
const taxaServico = parseInt(10)
const valorTotal = custoRefeicao + (custoRefeicao * (taxaServico/100))
console.log(`R$${valorTotal.toFixed(2)}`)