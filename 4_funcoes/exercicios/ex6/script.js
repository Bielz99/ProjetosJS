// Escreva uma função que detecta o tipo de dado passado;
// Verifque se é um: number, boolean ou string
// E retorne uma mensagem para cada tipo;
// Execute uma função para cada caso;

function detectarDado(dado) {
  switch (typeof dado) {
    case "number":
      console.log("é um numero");
      break;
    case "boolean":
      console.log("é um boolean");
      break;
    case "string":
      console.log("é uma string");
      break;
    default:
      break;
  }
}

detectarDado("teste");
detectarDado(10);
detectarDado(true);
