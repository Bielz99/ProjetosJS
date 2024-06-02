// Define uma função assíncrona chamada somar
async function somar(a, b) {
  // A função retorna a soma de a e b
  // O retorno é automaticamente envolvido em uma Promise
  return a + b;
}

// Chamada da função somar e log no console
// Como a função somar é assíncrona, ela retorna uma Promise
console.log(somar(2, 4)); // Imprime a Promise retornada pela função somar

// Chama novamente a função somar e usa then para tratar a Promise resolvida
somar(2, 4).then((value) => {
  // A função passada para then é chamada quando a Promise é resolvida
  console.log(value); // Imprime o valor resolvido (6)
});

/* Explicação:

1. Definição da função `async somar(a, b)`: 
   - A função `async` sempre retorna uma Promise.
   - No caso de `somar`, ela retorna a soma dos parâmetros `a` e `b`, envolvida em uma Promise.

2. `console.log(somar(2, 4))`:
   - Chama a função `somar` com os argumentos 2 e 4.
   - Como a função é `async`, ela retorna uma Promise.
   - O `console.log` imprime essa Promise, que está no estado "fulfilled" com o valor 6.
   - Saída: `Promise { <state>: "fulfilled", <value>: 6 }`

3. `somar(2, 4).then((value) => console.log(value))`:
   - Chama a função `somar` novamente com os argumentos 2 e 4.
   - A Promise retornada é tratada com `then`.
   - A função passada para `then` imprime o valor resolvido da Promise, que é 6.
   - Saída: `6`

Ordem de Execução e Saída no Console:

1. `Promise { 6 }` - Promise retornada pela função `somar`.
2. `6` - Valor resolvido da Promise, impresso pela função `then`.

*/

// Código completo com comentários explicativos
async function somar(a, b) {
  return a + b; // A função retorna a soma de a e b, que é automaticamente envolvida em uma Promise
}

console.log(somar(2, 4)); // Imprime a Promise retornada pela função somar

somar(2, 4).then((value) => console.log(value)); // Trata a Promise e imprime o valor resolvido (6)
// Define uma função assíncrona chamada somar
async function somar(a, b) {
  // A função retorna a soma de a e b
  // O retorno é automaticamente envolvido em uma Promise
  return a + b;
}

// Chamada da função somar e log no console
// Como a função somar é assíncrona, ela retorna uma Promise
console.log(somar(2, 4)); // Imprime a Promise retornada pela função somar

// Chama novamente a função somar e usa then para tratar a Promise resolvida
somar(2, 4).then((value) => {
  // A função passada para then é chamada quando a Promise é resolvida
  console.log(value); // Imprime o valor resolvido (6)
});

/* Explicação:

1. Definição da função `async somar(a, b)`: 
   - A função `async` sempre retorna uma Promise.
   - No caso de `somar`, ela retorna a soma dos parâmetros `a` e `b`, envolvida em uma Promise.

2. `console.log(somar(2, 4))`:
   - Chama a função `somar` com os argumentos 2 e 4.
   - Como a função é `async`, ela retorna uma Promise.
   - O `console.log` imprime essa Promise, que está no estado "fulfilled" com o valor 6.
   - Saída: `Promise { <state>: "fulfilled", <value>: 6 }`

3. `somar(2, 4).then((value) => console.log(value))`:
   - Chama a função `somar` novamente com os argumentos 2 e 4.
   - A Promise retornada é tratada com `then`.
   - A função passada para `then` imprime o valor resolvido da Promise, que é 6.
   - Saída: `6`

Ordem de Execução e Saída no Console:

1. `Promise { 6 }` - Promise retornada pela função `somar`.
2. `6` - Valor resolvido da Promise, impresso pela função `then`.

*/

// Código completo com comentários explicativos
async function somar(a, b) {
  return a + b; // A função retorna a soma de a e b, que é automaticamente envolvida em uma Promise
}

console.log(somar(2, 4)); // Imprime a Promise retornada pela função somar

somar(2, 4).then((value) => console.log(value)); // Trata a Promise e imprime o valor resolvido (6)
