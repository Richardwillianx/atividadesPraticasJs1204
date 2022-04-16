let valor1 = 20;
let valor2 = 30;
let valor3 = 50;

const soma = valor1 + valor2 + valor3;
const media = (valor1 + valor2 + valor3) / 3;
const produto = valor1 * valor2 * valor3;

if (valor1 == valor2 || valor2 == valor3 || valor1 == valor3) {
  alert("Você repetiu algum número na digitação, tente com números diferentes");
} else {
  if (valor1 > valor2 && valor1 > valor3) {
    console.log(`${valor1} é maior que ${valor2} e ${valor3}`);
  } else if (valor2 > valor1 && valor2 > valor3) {
    console.log(`${valor2} é maior que ${valor1} e ${valor3}`);
  } else {
    console.log(`${valor3} é maior que ${valor1} e ${valor2}`);
  }

  if (valor1 < valor2 && valor1 < valor3) {
    console.log(`${valor1} é menor que ${valor2} e ${valor3}`);
  } else if (valor2 < valor1 && valor2 < valor3) {
    console.log(`${valor2} é menor que ${valor1} e ${valor3}`);
  } else {
    console.log(`${valor3} é menor que ${valor1} e ${valor2}`);
  }

  console.log(`a soma dos valores é: ${soma}`);
  console.log(`a média dos valores é: ${media.toFixed(1)}`);
  console.log(`a produto dos valores é: ${produto.toFixed(1)}`);
}
