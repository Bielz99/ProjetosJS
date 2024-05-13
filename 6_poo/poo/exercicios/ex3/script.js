class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }
  set novaRua(novaRua) {
    this.rua = novaRua;
  }
  set novoBairro(novoBairro) {
    this.bairro = novoBairro;
  }
  set novaCidade(novaCidade) {
    this.cidade = novaCidade;
  }
  set novoEstado(novoEstado) {
    this.estado = novoEstado;
  }
}

let endereco = new Endereco("rua tal", "xv", "sp", "sp");

console.log(endereco);

endereco.novaRua = "Rua nova";
console.log(endereco);

endereco.novoBairro = "bairro novo";
console.log(endereco);

endereco.novaCidade = "Cidade nova";
console.log(endereco);

endereco.novoEstado = "Estado novo";
console.log(endereco);
