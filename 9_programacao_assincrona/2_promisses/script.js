// let p = Promise.resolve(5);

// console.log("Outros codigos");

// console.log(p);

// p.then((value) => {
//   console.log(`O valor é ${value}`);
// });

// ////////////////////////////////////////////

// let p2 = Promise.resolve(new Error("Nao deu certo"));

// console.log("Teste erro");

// p2.then((value2) => console.log(value2)).catch((reason) =>
//   console.log("Falhou" + reason)
// );

// ////////////////////////////////////////////

// let p3 = new Promise.resolve((resolver, reject) => {
//   if (num == 2) {
//     resolve(`O numero é ${num}`);
//   } else {
//     reject(new Error("Falhou"));
//   }
// });

// function verificarNumero(num) {
//   return new Promise((resolve, reject) => {
//     if (num == 2) {
//       resolve(console.log(`O numero é ${num}`));
//     } else {
//       reject(new Error("Falhou"));
//     }
//   });
// }

// verificarNumero(2);
// verificarNumero(3);

////////////////////////////////////////////

const p1 = new Promise(function name(resolve, reject) {
  setTimeout(function () {
    resolve(10);
  }, 5000);
});

const p2 = Promise.resolve(10);

const p3 = new Promise((resolve, reject) => {
  resolve(10);
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));
