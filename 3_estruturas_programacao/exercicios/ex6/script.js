// Faça uma estrutura if/else para verificar se um usuário pode dirigir;
// Armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH
// Se a idade for maior que 18 e não possuir CNH, exiba uma
// mensagem;
// Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
// Se não tiver 18 nem CNH, exiba outra mensagem;

let idade = 18;
let isHabilitado = true;

if (idade >= 18 && isHabilitado == true) {
  console.log("Maior de idade e Habilitado");
} else if (idade >= 18 && isHabilitado == false) {
  console.log("Maior de idade mas não tem habilitacao");
} else {
  console.log("Não pode dirigir");
}
