let arr = [1, 4, 5, 6, 7];

let nomes = ["Joao", "Gabriel", "Zorzan"];

let misturado = ["1", 1, true];

let bool = [true, false, true];

console.log(arr);
console.log(nomes);
console.log(misturado);

console.log(arr[1]);
console.log(nomes[0]);
console.log(bool[2]);
console.log(arr.length - 1);

/////////////////////////////////

let nome = "Joao";
console.log(nome.length);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 910];

console.log(numeros.length);

console.log(numeros["length"]);

console.log(numeros[1]);

let marca = "nike";

console.log(marca.toUpperCase());
console.log(marca.toLowerCase());

let cachorro = {
  patas: 4,
  nome: "Shark",
  latir: function () {
    console.log("Au au");
  },
};

console.log(cachorro.patas);
cachorro.latir();

////////////////////////////

let pessoa = {
  nome: "Gabriel",
  idade: 25,
  profissao: "Programador",
};

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);

/////////////////////////////////////////////

let carro = {
  portas: 2,
  portamalas: "200l",
  motor: "2.0",
};

let adicionais = {
  teotosolar: true,
  arcondicionado: true,
};

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);

////////////////////////////////////////

let obj = {
  chave1: 1,
  chave2: 2,
  chave3: 3,
};

console.log(obj);

console.log(Object.keys(obj));

let mutatation = {
  nome: "Gabriel",
};

let mutatation2 = mutatation;

console.log(mutatation == mutatation2);

mutatation2.nome = "Zorzan";

console.log(mutatation.nome);

mutatation2.nome = "Joao";

console.log(mutatation.nome);

//////////////////////////////////

let nomesArrayLoop = ["Joao", "Gabriel", "Zorzan"];

for (let i = 0; i <= nomesArrayLoop.length; i++) {
  console.log(nomes[i]);
}

/////////////////////////////////////

let nomesArray = ["Joao", "Gabriel", "Zorzan"];

let elementoRemovido = nomesArray.pop();

console.log(elementoRemovido);

console.log(nomesArray);

nomesArray.push("Add");

console.log(nomesArray);

////////////////////////////

let shiftArray = ["Metodo", "Shift", "e", " unshift"];

console.log(shiftArray);

let removerPrimeiroIndice = shiftArray.shift();

console.log(shiftArray);

let addPrimeiroIndice = shiftArray.unshift("Testando");

console.log(shiftArray);

////////////////////////////////

let nums = [5, 6, 2, 4, 9, 6, 2];

console.log(nums.indexOf(2));
console.log(nums.lastIndexOf(2));

//////////////////////////////////////////

let nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nums2.slice(4, 5));

console.log(nums2.slice(4, 6));

//////////////////////////////////////////////

let nomesForEach = ["Joao", "Gabriel", "Zorzan", "Adriana", "Amanda"];

nomesForEach.forEach((nome) => {
  console.log(`O nome é ${nome}`);
});

/////////////////////////////

let carros = ["bmw", "fiat", "audi"];

console.log(carros.includes("fiat"));

console.log(carros.reverse());

///////////////////////// if(carros.include("bmw"))

let nome1 = "       Gabriel";

console.log(nome1);

console.log(nome1.trim());

/////////////////////////

let sku = "34";

console.log(sku);

console.log(sku.padStart(6, "0"));

///////////////////////////

let frase = "Testando o metodo split";

let palavras = frase.split(" ");

////ou

console.log(frase.split(" "));

let novaFrase = palavras.join("@");

console.log(novaFrase);
/////////////////////

let palavra = "Repetir";

console.log(palavra.repeat(20));

let num1 = 1;
let num2 = 5;
let num3 = 3;
let num4 = 4;

function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimirNumeros(num1, num2, num3);
console.log("pausa");
imprimirNumeros(num3, num4);
console.log("pausa");
imprimirNumeros(2, 6, 7, 8, 9, 5, 3, 2, 5, 6, 2, 4, 5);

/////////////////////

let obj1 = {
  rodas: 4,
  portas: 4,
  tetoSolar: true,
  motor: "2.0",
};

const {
  rodas: vRodas,
  portas: vportas,
  teotoSolar: vtetoSoltar,
  motor: vMotor,
} = obj1;

console.log(vRodas);
console.log(vportas);

////////////////////////////

let numeros2 = [2, 4, 5, 8];

let [num7, num8, num9, num10] = numeros2;

console.log(num7);

console.log(num9);

/////////////////////////

let pessoa1 = {
  nome: "Gabriel",
  idade: 25,
  profissao: "Programador",
  hobbies: ["videdo game", "treinar", "correr"],
};

console.log(pessoa1.nome);
console.log(pessoa1.idade);

let pessoaTexto = JSON.stringify(pessoa1);

console.log(pessoaTexto);
/////////////////////////////////
