// Exercício 04
// Adicione a propriedade janelas no ônibus, com o valor de 20;
// Delete a propriedade rodas;
// Imprima a propriedade janelas no console;

let onibus = {
  rodas: 8,
  limitePassageiro: 40,
  portas: 2,
};

(onibus.janelas = 20), delete onibus.portas;
console.log(onibus.rodas);
console.log(onibus.limitePassageiro);
console.log(onibus.portas);
console.log(onibus.janelas);
