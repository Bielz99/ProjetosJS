// Escreva uma funcao que recebe a idade de uma pessoa;
// Se ela tem mais de 18 anos ela pode  entrar na auto escola, imprima uma mensagem informando isso
// Se ela tem menos, ela nao pode, imprima outra mensagem com este aviso;
// Execute a funcao nos dois casos

function calcularIdade(idade) {
  if (idade >= 18) {
    console.log("Pode entrar na auto escola");
  } else {
    console.log("Não pode entrar");
  }
}

calcularIdade(20);
calcularIdade(19);
calcularIdade(18);
calcularIdade(17);
