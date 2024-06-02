// Define uma função que retorna uma Promise e resolve após um atraso
function somaComDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(a + b); // Resolve a Promise com a soma de a e b após 4 segundos
    }, 4000);
  });
}

// Define uma função assíncrona que usa a função somaComDelay
async function resSoma(a, b, c) {
  // Espera a Promise retornada por somaComDelay ser resolvida e armazena o resultado em x
  let x = await somaComDelay(a, b);
  let y = c; // Armazena o valor de c em y
  return x + y; // Retorna a soma de x e y
}

// Chama a função resSoma com argumentos 1, 2, 3 e trata a Promise retornada
resSoma(1, 2, 3)
  .then((value) => console.log(value)) // Imprime o valor resolvido da Promise (6)
  .catch((err) => console.error(err)); // Imprime o erro, se houver

/* Explicação:

1. Definição da função `somaComDelay(a, b)`:
   - A função retorna uma Promise que resolve após 4 segundos.
   - Dentro de `setTimeout`, a soma de `a` e `b` é calculada e a Promise é resolvida com esse valor.

2. Definição da função `async resSoma(a, b, c)`:
   - A função usa `await` para esperar que a Promise retornada por `somaComDelay(a, b)` seja resolvida.
   - O resultado da Promise resolvida é armazenado na variável `x`.
   - O valor de `c` é armazenado na variável `y`.
   - A função retorna a soma de `x` e `y`.

3. Chamada da função `resSoma(1, 2, 3)`:
   - A função é chamada com os argumentos 1, 2, 3.
   - A Promise retornada por `resSoma` é tratada com `then` para imprimir o valor resolvido (6).
   - Se houver um erro, ele será capturado e impresso por `catch`.

Ordem de Execução e Saída no Console:

1. Após 4 segundos, a função `somaComDelay(1, 2)` resolve a Promise com o valor 3.
2. A função `resSoma(1, 2, 3)` continua a execução, somando 3 (resultado de `somaComDelay`) e 3 (valor de `c`), resultando em 6.
3. O valor 6 é impresso no console.

Saída no Console após 4 segundos:
6
*/
// Define uma função que retorna uma Promise e resolve após um atraso
function somaComDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(a + b); // Resolve a Promise com a soma de a e b após 4 segundos
    }, 4000);
  });
}

// Define uma função assíncrona que usa a função somaComDelay
async function resSoma(a, b, c) {
  // Espera a Promise retornada por somaComDelay ser resolvida e armazena o resultado em x
  let x = await somaComDelay(a, b);
  let y = c; // Armazena o valor de c em y
  return x + y; // Retorna a soma de x e y
}

// Chama a função resSoma com argumentos 1, 2, 3 e trata a Promise retornada
resSoma(1, 2, 3)
  .then((value) => console.log(value)) // Imprime o valor resolvido da Promise (6)
  .catch((err) => console.error(err)); // Imprime o erro, se houver

/* Explicação:

1. Definição da função `somaComDelay(a, b)`:
   - A função retorna uma Promise que resolve após 4 segundos.
   - Dentro de `setTimeout`, a soma de `a` e `b` é calculada e a Promise é resolvida com esse valor.

2. Definição da função `async resSoma(a, b, c)`:
   - A função usa `await` para esperar que a Promise retornada por `somaComDelay(a, b)` seja resolvida.
   - O resultado da Promise resolvida é armazenado na variável `x`.
   - O valor de `c` é armazenado na variável `y`.
   - A função retorna a soma de `x` e `y`.

3. Chamada da função `resSoma(1, 2, 3)`:
   - A função é chamada com os argumentos 1, 2, 3.
   - A Promise retornada por `resSoma` é tratada com `then` para imprimir o valor resolvido (6).
   - Se houver um erro, ele será capturado e impresso por `catch`.

Ordem de Execução e Saída no Console:

1. Após 4 segundos, a função `somaComDelay(1, 2)` resolve a Promise com o valor 3.
2. A função `resSoma(1, 2, 3)` continua a execução, somando 3 (resultado de `somaComDelay`) e 3 (valor de `c`), resultando em 6.
3. O valor 6 é impresso no console.

Saída no Console após 4 segundos:
6
*/
