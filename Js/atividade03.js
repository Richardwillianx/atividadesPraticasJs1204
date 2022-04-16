/* Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.

a. Para verificar se os lados fornecidos formam um triângulo: A <
B + C e B < A + C e C < A + B.

b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);

c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);

d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C); */

/* let ladoA = 10;
let ladoB = 20;
let ladoC = 30;

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  console.log("Os valores fornecidos formas um triangulo!");
}else{
  console.log("Não é uma triângulo")
}

if(ladoA == B || ladoA == ladoC || ladoB == ladoC){
  alert("Você possui um triângulo isóceles!");

}else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
  alert("Você possui um triângulo escaleno!");

} else(ladoA == ladoB && ladoB == ladoC) {
  alert("Você possui um triângulo equilátero");
}
 */

let ladoA = 0,
  ladoB = 6,
  ladoC = 5;

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  if (ladoA == ladoB && ladoB == ladoC) {
    console.log("é um triângulo equilátero");
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    console.log("é um triângulo isósceles");
  } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
    console.log("é um triângulo escaleno");
  }
} else {
  console.error("Os valores não formam um triângulo");
}
