// Exercício 05
// Crie um array com 5 nomes, incluindo o seu;
// • Verifique se o seu nome existe no array;
// Se existir imprima alguma mensagem no console;

// Cria um array com 5 nomes
let nomes = ["João", "Gabriel", "Zorzan", "Santos"];

// Verifica se o nome "Gabriel" existe no array
if (nomes.includes("Gabriel")) {
  // Se existir, imprime uma mensagem no console
  console.log("Nome Gabriel encontrado no array!");
} else {
  // Se não existir, imprime outra mensagem no console
  console.log("Seu nome não está na lista.");
}
