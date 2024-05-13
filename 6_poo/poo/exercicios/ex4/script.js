// Exercício 04
// • Crie uma classe que simule um carro;
// • Propriedades: marca, cor, gasolina restante;
// Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente;
// E um de abastecer para aumentar a gasolina quando necessário;

class Carro {
  constructor(marca, cor, gasolinaRestante) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
  }

  dirigir(distancia) {
    if (this.gasolinaRestante < distancia) {
      console.error(
        `Combustível insuficiente para dirigir ${distancia} km. Gasolina restante: ${this.gasolinaRestante} km`
      );
      return;
    }

    this.gasolinaRestante -= distancia;
    console.log(
      `Carro ${this.marca} ${this.cor} dirigindo... Gasolina restante: ${this.gasolinaRestante} km`
    );
  }

  abastecer(quantidade) {
    this.gasolinaRestante += quantidade;
    console.log(
      `Carro ${this.marca} ${this.cor} abastecido com ${quantidade} km de gasolina. Gasolina atual: ${this.gasolinaRestante} km`
    );
  }
}
const meuCarro = new Carro("Fiat", "prata", 50);

meuCarro.dirigir(30);
meuCarro.dirigir(40);
meuCarro.abastecer(60);
meuCarro.dirigir(20);
