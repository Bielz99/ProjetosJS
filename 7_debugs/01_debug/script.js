// "use strict";

// opa = "teste";

// // delete Object.prototype;

// function teste() {
//   "use strick";
//   let testando = "teste";
// }

// teste();

// false.prop = "";
// "teste".prop = "";

/////////////////////////////////

let a = 1;
let b = 2;
let c = 3;

if (c > a) {
  a = b;
  console.log(a);
  //debugger;
}

for (let i = 5; i > 0; i--) {
  b++;
  a = a + c + 1;
  c += 2;
  console.log(a);
  //debugger;
}

if (b == a) {
  a++;
  console.log(a);
  //debugger;
} else {
  a = a + b + c;
  console.log(a);
  //debugger;
}

a = a * b;
console.log(a);
//debugger;

////////////////////////

// function checarNumero(num) {
//   let number = Number(num);

//   if (Number.isNaN(number)) {
//     alert("somente numeros para o programa");
//   } else {
//     return number;
//   }
// }

// checarNumero(10);
// checarNumero("hdushdus");

// let number = prompt("Digite um numero");

// checarNumero(number);

/////////////////////////////////////////

// function saudacao(nome) {
//   if (typeof nome != "string") {
//     throw new Error("O parametro nome precisa ser uma string");
//   } else {
//     console.log(`Ola ${nome}`);
//   }
// }

// saudacao("Gabriel");
// saudacao(5);

//////////////////////////////////////

let e = 2;
try {
  let d = 2 + e;
} catch (error) {
  console.log(error);
} finally {
  console.log("executou");
}

//////////////////////////

let arr = [1, 2, 3, 4, 5];
let arr2 = [];

function iterarArray(arr) {
  if (arr.length == 0) {
    throw new Error("O array precisa ter pelo menos um elemento");
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
    }
  }
}

iterarArray(arr);
iterarArray(arr2);

// Esse código contém várias seções com diferentes exemplos e práticas de JavaScript. Vamos analisá-las uma por uma:

// "use strict";: Isso ativa o modo estrito do JavaScript, que é uma forma mais restrita e segura de escrever código JavaScript. Por exemplo, proíbe o uso de variáveis não declaradas.

// Variáveis e Operações: Esta seção demonstra o uso de variáveis (a, b, c) e operações matemáticas básicas. Usa estruturas de controle como if e for para fazer comparações e loops.

// Tratamento de Exceções: Aqui, um bloco try...catch é utilizado para capturar e lidar com possíveis erros que podem ocorrer durante a execução do código. O bloco finally é opcional e é executado sempre, independentemente de ocorrer uma exceção ou não.

// Funções: Esta seção mostra a definição e chamada de funções. A função iterarArray itera sobre os elementos de um array, lançando um erro se o array estiver vazio.

// Cada seção demonstra uma parte diferente da linguagem JavaScript e práticas comuns, como manipulação de variáveis, controle de fluxo, tratamento de erros e definição de funções.
