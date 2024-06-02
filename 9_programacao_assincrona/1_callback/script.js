console.log("1"); // Imprime "1" no console

setTimeout(function () {
  console.log("5"); // Esta função será chamada após 2000 ms (2 segundos)
}, 2000); // A função é agendada para ser executada após 2 segundos

console.log("2"); // Imprime "2" no console
console.log("3"); // Imprime "3" no console
console.log("4"); // Imprime "4" no console

// Depois de 2 segundos, o console exibirá "5"
