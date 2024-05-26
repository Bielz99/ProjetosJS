//Crie uma regex que valide nome de usuarios no sistema
// Aceita letras de a-z, _ e -, numeros de 0-9, minimo de 3 caracteres e maximo de 16
// Depois teste

// Criação de uma expressão regular que valida nomes de usuários
// A regex verifica:
// - ^: início da string
// - (?=.{3,16}$): lookahead para garantir que o comprimento total está entre 3 e 16 caracteres
// - [a-z0-9_-]+: um ou mais caracteres que podem ser letras minúsculas, números, underscore ou hífen
// - $: fim da string
const validarNomeUsuarios = /^[a-z0-9_-]{3,16}$/;

// Testando a regex com um nome de usuário válido "gabriel_123"
// "gabriel_123" é um nome de usuário válido, então o resultado deve ser true
console.log(validarNomeUsuarios.test("gabriel_123")); // true

// Testando a regex com um nome de usuário válido "asd"
// "asd" é um nome de usuário válido, então o resultado deve ser true
console.log(validarNomeUsuarios.test("asd")); // true

// Testando a regex com um nome de usuário muito longo
// "11111111111111111111111111111111" é muito longo (mais de 16 caracteres), então o resultado deve ser false
console.log(validarNomeUsuarios.test("11111111111111111111111111111111")); // false

// Testando a regex com um nome de usuário muito curto
// "as" é muito curto (menos de 3 caracteres), então o resultado deve ser false
console.log(validarNomeUsuarios.test("as")); // false
