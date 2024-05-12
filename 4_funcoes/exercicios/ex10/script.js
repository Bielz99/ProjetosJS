// Escreva uma funcao que recebe um numero, e o decrementa de 1 em 1 com um loop
// Alem disso imprima somente os numeros pares no console

const loopNumeroPar = function (num) {
  for (let i = num; i > 0; i--) {
    if (i % 2 == 0) {
      console.log(`Numero par ${i}`);
    } else {
      console.log(`Numero impar ${i}`);
    }
  }
};

loopNumeroPar(40);
