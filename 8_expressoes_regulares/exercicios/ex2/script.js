//Crie uma regex que aceite strings terminadas com ID e depois teste;

const validarId = /\d+ID\b/;

// Testando a regex com uma string que termina com "ID" precedido por dígitos
// "123456ID" termina com "ID" e tem dígitos antes, então o resultado deve ser true
console.log(validarId.test("123456ID")); // true

// Testando a regex com uma string que não termina com "ID"
// "TESTE" não termina com "ID", então o resultado deve ser false
console.log(validarId.test("TESTE")); // false

// Testando a regex com uma string que termina com "ID" mas não é precedida por dígitos
// "ID" termina com "ID", mas não tem dígitos antes, então o resultado deve ser false
console.log(validarId.test("ID")); // false

// Testando a regex com uma string que tem "ID" no meio mas não termina com "ID"
// "123ID456" não termina com "ID", então o resultado deve ser false
console.log(validarId.test("123ID456")); // false
