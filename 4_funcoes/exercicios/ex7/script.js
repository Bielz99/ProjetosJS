// Escreva uma funcão que receba um numero negativo e retorne um numero positivo
// Dica:  utilize a funcção Math.abs

function converterParaNegativo(numero) {
  console.log(`O numero convertido é ${Math.abs(numero)}`);
}

converterParaNegativo(-7);

//OU

function converterParaNegativo2(numero) {
  return Math.abs(numero);
}

console.log(converterParaNegativo2(-20));
