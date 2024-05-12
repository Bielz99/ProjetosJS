function imprimirNoConsole() {
  console.log("Imprmir no consolee");
}

imprimirNoConsole();

function imprimirUmNumero(num) {
  console.log("O numero é: " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(7);

const numeroAleatorio = function () {
  console.log(Math.random());
};

numeroAleatorio();

function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(5, 5, 5);

console.log("O valor de mult é" + mult);

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("PODE DIRIGIR");
  } else {
    console.log("Não pode dirigir");
  }
}

console.log(podeDirigir(20, true));
//para tirar o undefined no console da web eh pelo simples motivo
//é que a função já tinha um console.log, não precisava encapsular ela em outro, se você trocar os consoles da função por return,
//você vai ver que resolve o problema, ou só chamar a função sem o console..
console.log(podeDirigir(20, false));

podeDirigir(20, true);

let consoleTeste = () => {
  console.log("Ola mundo");
};

consoleTeste();

let soma = (a, b) => {
  return a + b;
};

console.log(soma(10, 20));

const multiplicarPorDois = (x) => x * 2;

console.log(multiplicarPorDois(2));

function soma2(a, b) {
  if (a === undefined || b === undefined) {
    console.log("Esta funcao precisa ter os dois argumentos");
  } else {
    return a + b;
  }
}

soma2(1);
console.log(soma2(1, 2));

function pontencia(base, exp = 2) {
  return Math.pow(base, exp);
}

console.log(pontencia(2));
console.log(pontencia(2, 2));
console.log(pontencia(2, 3));
console.log(pontencia(3));

function lembrarSoma(x) {
  return function (y) {
    return x + y;
  };
}

let soma1 = lembrarSoma(2);
console.log(soma1(5));

function recursao(n) {
  if (n - 1 < 2) {
    console.log("Recursão parou");
  } else if (n % 2 != 0) {
    console.log("Numero impar" + n);
    recursao(n - 1);
  } else {
    console.log("Numero parar" + n);
    recursao(n - 2);
  }
}

recursao(39);
recursao(10);
recursao(55);
