// Verifique se o numero é primo!
// Um numero primo, é igual um numero natural,
// maior que 1 e apenas divisivel por si propio e por 1;

let num = 17;

let divisoes = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    divisoes++;
  }
}

if (divisoes == 2) {
  console.log(`O numero ${num} é primo`);
} else {
  console.log(`O numero ${num} não é primo`);
}
