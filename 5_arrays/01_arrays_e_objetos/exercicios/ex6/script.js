// Exercício 06
// Crie dois arrays, um com mais de 5 elementos e outro com menos;
// • Faça uma função que verifica o número de elementos;
// • Se possuir menos que 5, imprima "Poucos elementos" no console;
// Se tiver mais, imprima "Muitos elementos";

// Define dois arrays, um com mais de 5 elementos e outro com menos
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [1, 2, 3, 4];

// Define uma função que verifica o número de elementos de um array
function verificarNumeroElementos(arr) {
  if (arr.length >= 5) {
    // Se o array tiver 5 ou mais elementos, imprime "Tem Muitos elementos" no console
    console.log("Tem muitos elementos");
  } else {
    // Se o array tiver menos de 5 elementos, imprime "Tem poucos elementos" no console
    console.log("Tem poucos elementos");
  }
}

// Chama a função para verificar o número de elementos dos dois arrays
verificarNumeroElementos(arr1);
verificarNumeroElementos(arr2);
