// Exercício 04
// • Crie uma classe que simule um carro;
// • Propriedades: marca, cor, gasolina restante;
// Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente;
// E um de abastecer para aumentar a gasolina quando necessário;

// Define a classe Carro
class Carro {
  // O construtor recebe os parâmetros marca, cor e gasolinaRestante e inicializa as propriedades correspondentes
  constructor(marca, cor, gasolinaRestante) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
  }

  // Método dirigir recebe a distância a ser percorrida como parâmetro
  dirigir(distancia) {
    // Verifica se a gasolina restante é suficiente para a distância desejada
    if (this.gasolinaRestante < distancia) {
      // Se não houver combustível suficiente, exibe uma mensagem de erro
      console.error(
        `Combustível insuficiente para dirigir ${distancia} km. Gasolina restante: ${this.gasolinaRestante} km`
      );
      return; // Encerra a execução do método
    }

    // Se houver combustível suficiente, diminui a gasolina restante de acordo com a distância percorrida
    this.gasolinaRestante -= distancia;
    // Exibe uma mensagem indicando que o carro está dirigindo e a gasolina restante
    console.log(
      `Carro ${this.marca} ${this.cor} dirigindo... Gasolina restante: ${this.gasolinaRestante} km`
    );
  }

  // Método abastecer recebe a quantidade de gasolina a ser abastecida como parâmetro
  abastecer(quantidade) {
    // Incrementa a gasolina restante com a quantidade de gasolina abastecida
    this.gasolinaRestante += quantidade;
    // Exibe uma mensagem indicando que o carro foi abastecido e a gasolina atual
    console.log(
      `Carro ${this.marca} ${this.cor} abastecido com ${quantidade} km de gasolina. Gasolina atual: ${this.gasolinaRestante} km`
    );
  }
}

// Cria uma instância da classe Carro com valores iniciais para marca, cor e gasolina restante
const meuCarro = new Carro("Fiat", "prata", 50);

// Chama o método dirigir com uma distância de 30 km
meuCarro.dirigir(30);
// Chama o método dirigir com uma distância de 40 km
meuCarro.dirigir(40);
// Chama o método abastecer com uma quantidade de 60 km de gasolina
meuCarro.abastecer(60);
// Chama o método dirigir com uma distância de 20 km
meuCarro.dirigir(20);
