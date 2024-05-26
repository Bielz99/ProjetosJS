//Crie uma regex que aceite só letrar maiusculas e depois teste;

// Criação de uma expressão regular que aceita apenas letras maiúsculas
const reg1 = /[A-Z]/;

// Testando a regex com uma string que contém apenas letras minúsculas
// "teste" não contém letras maiúsculas, então o resultado deve ser false
console.log(reg1.test("teste")); // false

// Testando a regex com uma string que contém apenas letras maiúsculas
// "TESTE" contém apenas letras maiúsculas, então o resultado deve ser true
console.log(reg1.test("TESTE")); // true
