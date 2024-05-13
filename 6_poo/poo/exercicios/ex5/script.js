// Crie uma classe conta bancaria;
// Com as propriedades de saldo na conta corrente,
// saldo na conta poupança e juros da poupança;
// Crie os métodos de depósito e saque, também um método para transferir dinheiro da poupança para a corrente;
// • Além disso crie uma conta especial que herda da conta normal; Na conta especial os juros são dobrados da conta normal;

// Classe Conta representa uma conta bancária com saldo corrente, saldo poupança e taxa de juros na poupança
class Conta {
  constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
    // Inicializa as propriedades da conta com os valores fornecidos
    this.saldoCorrente = saldoCorrente;
    this.saldoPoupanca = saldoPoupanca;
    this.jurosPoupanca = jurosPoupanca;
  }

  // Método deposito: adiciona o valor ao saldo da conta corrente
  deposito(valor) {
    this.saldoCorrente += valor;
  }

  // Método saque: subtrai o valor do saldo da conta corrente
  saque(valor) {
    this.saldoCorrente -= valor;
  }

  // Método transferirCP: transfere dinheiro da conta corrente para a conta poupança
  transferirCP(valor) {
    this.saldoCorrente -= valor;
    this.saldoPoupanca += valor;
  }

  // Método transferirCC: transfere dinheiro da conta poupança para a conta corrente
  transferirCC(valor) {
    this.saldoPoupanca -= valor;
    this.saldoCorrente += valor;
  }

  // Método jurosNiver: calcula e adiciona juros à conta poupança com base na taxa de juros
  jurosNiver() {
    let juros = (this.saldoPoupanca * this.jurosPoupanca) / 100; // Calcula os juros
    this.saldoPoupanca += juros; // Adiciona os juros ao saldo da conta poupança
  }
}

// Classe ContaEspecial herda da classe Conta e tem o dobro da taxa de juros na poupança
class ContaEspecial extends Conta {
  constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
    super(saldoCorrente, saldoPoupanca, jurosPoupanca * 2); // Chama o construtor da classe pai
  }
}

// Cria uma instância da classe Conta com saldo inicial na conta corrente de 1000, saldo na conta poupança de 5000 e taxa de juros de 1
let conta = new Conta(1000, 5000, 1);
console.log(conta); // Imprime os detalhes da conta

conta.saque(500); // Realiza um saque de 500 na conta corrente
console.log(conta); // Imprime os detalhes da conta

conta.deposito(5000); // Deposita 5000 na conta corrente
console.log(conta); // Imprime os detalhes da conta

conta.transferirCP(3000); // Transfere 3000 da conta corrente para a conta poupança
console.log(conta); // Imprime os detalhes da conta

conta.jurosNiver(); // Calcula e adiciona juros à conta poupança
console.log(conta); // Imprime os detalhes da conta

// Cria uma instância da classe ContaEspecial com saldo inicial na conta corrente de 10000, saldo na conta poupança de 50000 e taxa de juros de 1
let contaEspecial = new ContaEspecial(10000, 50000, 1);
console.log(contaEspecial); // Imprime os detalhes da conta especial

contaEspecial.saque(5000); // Realiza um saque de 5000 na conta corrente da conta especial
console.log(contaEspecial); // Imprime os detalhes da conta especial

contaEspecial.jurosNiver(); // Calcula e adiciona juros à conta poupança da conta especial
console.log(contaEspecial); // Imprime os detalhes da conta especial
