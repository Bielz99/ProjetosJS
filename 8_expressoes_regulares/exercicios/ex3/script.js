//Crie uma regex que aceite a seguinte expressao "maRCA: nomeDaMarca";
// Onde nomeDaMarca pode variar para Nike, Adidas, Puma, Asics;
// Depois teste

// Testando a regex com a string "Marca: Nike"
// "Marca: Nike" está na lista de marcas válidas, então o resultado deve ser true
console.log(validarMarca.test("Marca: Nike")); // true

// Testando a regex com a string "Marca: Adidas"
// "Marca: Adidas" está na lista de marcas válidas, então o resultado deve ser true
console.log(validarMarca.test("Marca: Adidas")); // true

// Testando a regex com a string "Marca: Puma"
// "Marca: Puma" está na lista de marcas válidas, então o resultado deve ser true
console.log(validarMarca.test("Marca: Puma")); // true

// Testando a regex com a string "Marca: Asics"
// "Marca: Asics" está na lista de marcas válidas, então o resultado deve ser true
console.log(validarMarca.test("Marca: Asics")); // true

// Testando a regex com uma string que não está na lista de marcas válidas
// "Marca: TESTE" não está na lista de marcas válidas, então o resultado deve ser false
console.log(validarMarca.test("Marca: TESTE")); // false
