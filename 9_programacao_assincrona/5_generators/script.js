// Define uma função geradora chamada criadorId
function* criadorId() {
  let id = 0; // Inicializa uma variável de controle para o ID

  while (true) {
    // Loop infinito
    yield id++; // Utiliza a palavra-chave yield para pausar a execução da função e retornar o valor de id, incrementando-o em cada chamada subsequente
  }
}

// Cria uma instância da função geradora
let criaId = criadorId();

// Imprime o valor retornado pela função geradora na primeira chamada
console.log(criaId.next().value); // Imprime 0, pois é o valor inicial de id

// Imprime o valor retornado pela função geradora na segunda chamada
console.log(criaId.next().value); // Imprime 1, pois id foi incrementado na chamada anterior
