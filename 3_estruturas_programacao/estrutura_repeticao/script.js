let x = 10;

while (x > 0) {
  console.log("0 x é " + x);
  x = x - 1;
}

let y = 0;

while (y <= 10) {
  console.log(y);
  y = y + 1;
}

let z = 100;

do {
  console.log(z / 2);
  z = z - 5;
} while (z >= 0);

for (let i = 0; i < 100; i = i + 3) {
  console.log(`a soma de i com 2 é: ${i + 2}`);
}

let nome3 = "Gabriel";
for (let i = 0; i < 10; i = i + 1) {
  if (i == 3) {
    nome3 = "Joao";
  }

  if (i == 5 && nome3 == "Joao") {
    console.log("O nome é Joao, pode parar");
    break;
  }
  console.log(i);
}

for (let i = 10; i > 0; i = i - 1) {
  if (i % 2 == 0) {
    console.log("Caiu no continue");
    continue;
  }
  console.log(i);
}

let numero = 5;

while (numero < 50) {
  console.log(numero);
  numero += 10;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
for (let i = 10; i > 0; i--) {
  console.log(i);
}

let testeSwitch = "Gabriel";

switch (testeSwitch) {
  case "Joao":
    console.log("O seu nome é joao");
    break;
  case "Gabriel":
    console.log("O seu nome é Gabriel");
    break;
  default:
    console.log("O seu nome não é Joao e nem Gabriel");
    break;
}
