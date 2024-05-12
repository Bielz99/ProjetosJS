// Exercício 06
// Crie dois arrays, um com mais de 5 elementos e outro com menos;
// • Faça uma função que verifica o número de elementos;
// • Se possuir menos que 5, imprima "Poucos elementos" no console;
// Se tiver mais, imprima "Muitos elementos";

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [1, 2, 3, 4];

function verificarNumeroElementos(arr) {
  if (arr.length >= 5) {
    console.log("Tem Muitos elementos");
  } else {
    console.log("Tem poucos elementos");
  }
}

verificarNumeroElementos(arr1);
verificarNumeroElementos(arr2);
