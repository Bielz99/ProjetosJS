// Bloco 1: Promise com valor resolvido

let p = Promise.resolve(5); // Cria uma promise que é imediatamente resolvida com o valor 5

console.log("Outros codigos"); // Imprime "Outros codigos" no console

console.log(p); // Imprime a Promise, que está no estado "fulfilled" com o valor 5

p.then((value) => {
  console.log(`O valor é ${value}`); // Quando a promise é resolvida, imprime "O valor é 5"
});

// =========================================

// Bloco 2: Promise resolvida com erro

// let p2 = Promise.resolve(new Error("Nao deu certo")); // Cria uma promise que é imediatamente resolvida com um erro

// console.log("Teste erro"); // Imprime "Teste erro" no console

// p2.then((value2) => console.log(value2)).catch((reason) =>
//   console.log("Falhou" + reason)
// ); // Tenta tratar a promise resolvida com um erro, o que não é comum. A forma correta é rejeitar a promise com `reject`.

// =========================================

// Bloco 3: Promise com função de verificação de número

function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num == 2) {
      resolve(`O numero é ${num}`); // Resolve a promise se o número for 2
    } else {
      reject(new Error("Falhou")); // Rejeita a promise com um erro se o número não for 2
    }
  });
}

verificarNumero(2)
  .then((message) => console.log(message)) // Espera resolver e imprimir "O numero é 2"
  .catch((error) => console.log(error.message)); // Captura e imprime a mensagem de erro, se houver

verificarNumero(3)
  .then((message) => console.log(message)) // Espera resolver e imprimir a mensagem
  .catch((error) => console.log(error.message)); // Captura e imprime "Falhou"

// =========================================

// Bloco 4: Promise.all com múltiplas promises

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10); // Resolve a promise com o valor 10 após 5 segundos
  }, 5000);
});

const p2 = Promise.resolve(10); // Cria uma promise que é imediatamente resolvida com o valor 10

const p3 = new Promise((resolve, reject) => {
  resolve(10); // Cria uma promise e a resolve imediatamente com o valor 10
});

Promise.all([p1, p2, p3]).then((values) => console.log(values)); // Quando todas as promises são resolvidas, imprime os valores [10, 10, 10]

// =========================================
