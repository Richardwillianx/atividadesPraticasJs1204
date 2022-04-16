// Escreva um algoritmo que armazene o número total de eleitores de um município, o
// número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada
// um representa em relação ao total de eleitores. O algoritmo deve fazer uma validação
// para que as porcentagens dos votos armazenados (brancos, nulos e válidos) respeitem o
// limite do número total de eleitores, ou seja, garantir que a soma dos votos brancos,
// nulos e válidos não seja maior que o número total de eleitores.

let totalEleitores = 100,
  brancos = 10,
  nulos = 20,
  validos = 70,
  percentual = 0;

if (brancos + nulos + validos > totalEleitores) {
  console.error("ERRO, você informou um valor excedente ao total de eleitores");
} else {
  percentual = (brancos * 100) / totalEleitores;
  console.log(`${percentual}% de votos em branco`);

  percentual = (nulos * 100) / totalEleitores;
  console.log(`${nulos}% de votos nulos`);

  percentual = (validos * 100) / totalEleitores;
  console.log(`${validos}% de votos válidos`);
}
