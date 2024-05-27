// Exercício 10 - Desafio calculadora
// Crie um objeto calculadora;
// Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;
// Os métodos só devem aceitar dois parâmetros;
// Utilize cada um dos métodos e imprima os valores no console;

// Cria um objeto 'calculadora' com quatro métodos: somar, subtrair, multiplicar e dividir
let calculadora = {
  somar: function (a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    return a / b;
  },
};

// Utiliza cada método da calculadora e imprime os valores no console
console.log(calculadora.somar(10, 10)); // Imprime 20 (10 + 10)
console.log(calculadora.subtrair(10, 5)); // Imprime 5 (10 - 5)
console.log(calculadora.multiplicar(5, 5)); // Imprime 25 (5 * 5)
console.log(calculadora.dividir(20, 2)); // Imprime 10 (20 / 2)
