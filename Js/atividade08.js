/* Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:

Escreva um algoritmo que armazene o preço de tabela e o número de
vezes em que o pagamento será feito. Calcule o valor de cada parcela e o
preço total da compra e imprima no console. */

let preco = Number(prompt("Qual o preço do produto? "));
let parcelas = Number(prompt("Em quantas vezes você quer parcelar? "));
let valorParcela;

if (parcelas === 1) {
  preco = (preco * 97.5) / 100;
  console.log(
    `Sua compra sairá por R$${preco.toFixed(
      2
    )} reais com 2,5% de desconto à vista!`
  );
} else if (parcelas >= 2 && parcelas <= 5) {
  console.log(`Sua compra sairá por R$${preco.toFixed(2)} reais`);
} else if (parcelas >= 6 && parcelas <= 10) {
  preco *= 1.06;
  valorParcela = preco / parcelas;
  console.log(
    `Sua compra sairá por R$${preco.toFixed(
      2
    )} reais divido em ${parcelas} parcelas de R$${valorParcela.toFixed(2)}`
  );
} else if (parcelas >= 11 && parcelas <= 15) {
  preco *= 1.13;
  valorParcela = preco / parcelas;
  console.log(
    `Sua compra sairá por R$${preco.toFixed(
      2
    )} reais divido em ${parcelas} parcelas de R$${valorParcela.toFixed(
      2
    )} reais.`
  );
} else {
  console.log("NÚMERO DE PARCELAS INVÁLIDA, DIGITE NOVAMENTE!");
}
