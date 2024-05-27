// Define a classe Endereco
class Endereco {
  // O construtor recebe os parâmetros rua, bairro, cidade e estado e inicializa as propriedades correspondentes
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  // Setter para atualizar a propriedade rua
  set novaRua(novaRua) {
    this.rua = novaRua;
  }

  // Setter para atualizar a propriedade bairro
  set novoBairro(novoBairro) {
    this.bairro = novoBairro;
  }

  // Setter para atualizar a propriedade cidade
  set novaCidade(novaCidade) {
    this.cidade = novaCidade;
  }

  // Setter para atualizar a propriedade estado
  set novoEstado(novoEstado) {
    this.estado = novoEstado;
  }
}

// Cria uma instância da classe Endereco com valores iniciais para rua, bairro, cidade e estado
let endereco = new Endereco("rua tal", "xv", "sp", "sp");

// Exibe o endereço inicial no console
console.log(endereco);

// Altera a rua usando o setter novaRua
endereco.novaRua = "Rua nova";
// Exibe o endereço atualizado no console
console.log(endereco);

// Altera o bairro usando o setter novoBairro
endereco.novoBairro = "bairro novo";
// Exibe o endereço atualizado no console
console.log(endereco);

// Altera a cidade usando o setter novaCidade
endereco.novaCidade = "Cidade nova";
// Exibe o endereço atualizado no console
console.log(endereco);

// Altera o estado usando o setter novoEstado
endereco.novoEstado = "Estado novo";
// Exibe o endereço atualizado no console
console.log(endereco);
