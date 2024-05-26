// Parte 1: Expressões Regulares Simples
const reg1 = new RegExp("bola");

console.log(reg1.test("Tem bola?")); // true
console.log(reg1.test("Não Tem")); // false

const reg2 = /bola/;

let text = "tem bola no gol";

console.log(reg2.test("Tem bola?")); // true
console.log(reg2.test("Não Tem")); // false
console.log(reg2.test(text)); // true

// Parte 2: Classes de Caracteres
const reg3 = /[12345]/;

console.log(reg3.test("Temos o numero 6")); // false
console.log(reg3.test("Temos o numero 5")); // true
console.log(reg3.test("Temos o numero 23")); // true
console.log(reg3.test("Temos o numero 60")); // true

const reg34 = /[0-9]/;

console.log(reg34.test("Temos o numero 64232344234")); // true
console.log(reg34.test("Temos o numero")); // false

// Parte 3: Metacaracteres e Classes de Caracteres Especiais
const pontoRegex = /./;

console.log(" . ");
console.log(pontoRegex.test("dsadssd")); // true
console.log(pontoRegex.test("10")); // true
console.log(pontoRegex.test("d101010-----      sadssd")); // true

const dRegex = /\d/; // [0-9]

console.log(" d ");
console.log(dRegex.test("asd")); // false
console.log(dRegex.test("  ")); // false
console.log(dRegex.test("123")); // true
console.log(dRegex.test("123ad")); // true

const dRegex2 = /\D/; // [^0-9]

console.log(" D ");
console.log(dRegex2.test("asd")); // true
console.log(dRegex2.test("  ")); // true
console.log(dRegex2.test("123")); // false
console.log(dRegex2.test("123ad")); // true

const sRegex = /\s/; // espaço em branco

console.log(" s ");
console.log(sRegex.test("asd")); // false
console.log(sRegex.test("  ")); // true
console.log(sRegex.test("123")); // false
console.log(sRegex.test("123ad")); // false

const wRegex = /\w/; // caractere alfanumérico

console.log(" w ");
console.log(wRegex.test("asd")); // true
console.log(wRegex.test("  ")); // false
console.log(wRegex.test("123")); // true
console.log(wRegex.test("123ad")); // true

// Parte 4: Quantificadores e Agrupamentos
const dia = /\d\d/;

console.log(dia.test("2019" && "2019".length == 2)); // false
console.log(dia.test("asd")); // false
console.log(dia.test("05" && "05".length == 2)); // true
console.log(dia.test("asd1")); // true

const palavrasTresLetras = /\w\w\w/;

console.log(palavrasTresLetras.test("asd")); // true
console.log(palavrasTresLetras.test("asdss")); // true
console.log(palavrasTresLetras.test("as")); // false

// Parte 5: Negação de Classes de Caracteres
const notab = /[^ab]/;

console.log(notab.test("a")); // false
console.log(notab.test("aqui tem a")); // true

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123 as")); // true
console.log(nottoaz.test("sadfhuudshdsfu")); // false

// Parte 6: Quantificadores de Repetição
const operadorPlus = /\d+/;

console.log(operadorPlus.test("121211212")); // true
console.log(operadorPlus.test(" ")); // false
console.log(operadorPlus.test("dasdasdas")); // false

const operadorOpcional = /Abacax?i/;

console.log(operadorOpcional.test("Abacaxi")); // true
console.log(operadorOpcional.test("Abacai")); // true

const operadorOpcional2 = /\d+\w?/;

console.log(operadorOpcional2.test("123")); // true
console.log(operadorOpcional2.test("123sasas ")); // true
console.log(operadorOpcional2.test(" ")); // false

// Parte 7: Padrão de CEP
const cep = /\d{5}-\d{3}/;

console.log(cep.test("08247-030")); // true
console.log(cep.test("asd")); // false
console.log(cep.test("000-50")); // false
console.log(cep.test("00000-000")); // true

// Parte 8: Métodos adicionais
const digitos = /\d+/;

console.log(digitos.exec("Tem o numero 100 aqui")); // ["100"]
console.log(digitos.exec("Tem o numero aqui")); // null

const frase = "O numero 100 esta aqui".match(/\d+/);
console.log(frase); // ["100"]

const reg = /\w+: (Matheus|João|Maria)/;

console.log(reg.test("Nome: Matheus")); // true
console.log(reg.test("Nome: Jose")); // false

// Parte 9: Validação de domínio
const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com")); // true
console.log(validaDominio.test("www.horadecordar.com.br")); // true
console.log(validaDominio.test("www.horadecordar")); // false
console.log(validaDominio.test("horadecordar.com.br")); // true

// Parte 10: Validação de Email
let validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("gabriel@email.com")); // true
console.log(validarEmail.test("gabriel@email")); // false
console.log(validarEmail.test("email.com")); // false

// Parte 11: Validação de Data de Nascimento
let validarDataDeNasc = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;

console.log(validarDataDeNasc.test("05/02/2000")); // true
console.log(validarDataDeNasc.test("5/2/2000")); // false
console.log(validarDataDeNasc.test("05-02-2000")); // false
console.log(validarDataDeNasc.test("05/02/00")); // false
console.log(validarDataDeNasc.test("12/12/1999")); // true
console.log(validarDataDeNasc.test("99/99/9999")); // true
