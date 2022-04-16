/* 
Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
 */

const anoNascimento = Number(prompt("Digite o ano de nascimento"));

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

const idade = anoAtual - anoNascimento;

if (idade >= 16) {
  console.log("Você deve votar esse ano");
} else {
  console.log("Você não pode votar esse ano");
}
