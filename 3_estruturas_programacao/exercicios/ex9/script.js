//Escreva um loop for ou while que exiba qual numero é par e qual número é impar
// o contador deve iniciar em 0 e ir ate 50

// Loop for que exibe se cada número de 0 a 50 é par ou ímpar
for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    // Verifica se i é par
    console.log(`Número par: ${i}`);
  } else {
    console.log(`Número ímpar: ${i}`);
  }
}
