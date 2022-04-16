/* Crie um algoritmo que armazene um número inteiro positivo, e gere um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar; */

const num = prompt("Digite um número: ");

if (parseInt(num) === num && num > 0) {
  if (num % 2 == 0) {
    alert(`O número ${num} é par!`);
  } else {
    alert(`O número ${num} é ímpar!`);
  }
} else {
  alert("você precisa informar um número inteiro e positivo!");
}
