// Exercício 01
// Crie uma classe que simula uma conta no banco (utilize a forma que
// preferir);
// Deve conter a propriedade saldo;
// E os métodos deposito e saque;
// Teste os métodos;

// Define a classe AccountBank que representa uma conta bancária
class AccountBank {
  constructor(saldo) {
    this.saldo = saldo; // Inicializa o saldo da conta com o valor passado como argumento
  }

  // Método deposito: adiciona um valor ao saldo da conta
  deposito(valor) {
    this.saldo += valor;
  }

  // Método saque: subtrai um valor do saldo da conta
  saque(valor) {
    this.saldo -= valor;
  }
}

// Cria uma instância da classe AccountBank com saldo inicial de 1000
let conta = new AccountBank(1000);

// Deposita 1000 na conta
conta.deposito(1000);
console.log(conta.saldo); // Imprime o saldo da conta (2000)

// Faz um saque de 500 da conta
conta.saque(500);
console.log(conta.saldo); // Imprime o saldo da conta após o saque (1500)
