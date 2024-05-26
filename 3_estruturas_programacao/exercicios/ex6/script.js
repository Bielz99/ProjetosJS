// Faça uma estrutura if/else para verificar se um usuário pode dirigir;
// Armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH
// Se a idade for maior que 18 e não possuir CNH, exiba uma
// mensagem;
// Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
// Se não tiver 18 nem CNH, exiba outra mensagem;

// Armazena a idade do usuário e se ele possui habilitação em variáveis
let idade = 18;
let isHabilitado = true;

// Verifica se o usuário pode dirigir com base em sua idade e se possui habilitação
if (idade >= 18 && isHabilitado) {
  // Se a idade for maior ou igual a 18 e o usuário possuir habilitação, exibe uma mensagem
  console.log("Maior de idade e Habilitado");
} else if (idade >= 18 && !isHabilitado) {
  // Se a idade for maior ou igual a 18 mas o usuário não possuir habilitação, exibe outra mensagem
  console.log("Maior de idade mas não tem habilitação");
} else {
  // Se a idade for menor que 18, exibe outra mensagem
  console.log("Não pode dirigir");
}
