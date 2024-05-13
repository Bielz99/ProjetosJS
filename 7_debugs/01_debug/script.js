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
