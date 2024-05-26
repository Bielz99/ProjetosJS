//Crie uma regex que valide enderecos de IP;
// Ex: 127.0.0.1
// Depois teste

const validarIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

// Testando a regex com o endereço de IP "127.0.0.1"
// "127.0.0.1" é um endereço de IP válido, então o resultado deve ser true
console.log(validarIp.test("127.0.0.1")); // true

// Testando a regex com o endereço de IP "8.8.8.8"
// "8.8.8.8" é um endereço de IP válido, então o resultado deve ser true
console.log(validarIp.test("8.8.8.8")); // true

// Testando a regex com o endereço de IP "192.168.0.62"
// "192.168.0.62" é um endereço de IP válido, então o resultado deve ser true
console.log(validarIp.test("192.168.0.62")); // true

// Testando a regex com uma string que não é um endereço de IP válido
// "1921871616" não está no formato correto de um endereço de IP, então o resultado deve ser false
console.log(validarIp.test("1921871616")); // false
