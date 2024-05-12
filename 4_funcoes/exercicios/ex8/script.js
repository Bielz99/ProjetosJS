// Escreva uma funcao que recebe uma string;
// Se o texto conter masi de 10 caracteres imprima "Texto muito longo";
// Se conter menos, imprima, "Texto dentro do limite";

function calcularQuantitadeTexto(texto) {
  if (texto.length > 10) {
    console.log("Texto muito longo");
  } else {
    console.log("Texto dentro do limite");
  }
}

calcularQuantitadeTexto("aaaaaaaaa");
