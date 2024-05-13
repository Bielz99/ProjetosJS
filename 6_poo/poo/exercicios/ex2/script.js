// Exercício 02
// Cria uma classe que simula um carrinho de compras de um e-commerce;
// Propriedades itens, quantidade total, valor total;
// Crie os métodos para adicionar e remover itens;
// e mostre no console.log()

class CarrinhoDeCompras {
  constructor() {
    this.itens = [];
    this.quantidadeTotal = 0;
    this.valorTotal = 0;
  }

  adicionarItem(produto, quantidade) {
    if (!produto || quantidade <= 0) {
      throw new Error("Produto inválido ou quantidade inválida");
    }

    const itemExistente = this.itens.find((item) => item.produto === produto);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      this.itens.push({ produto, quantidade });
    }

    this.quantidadeTotal += quantidade;
    this.valorTotal += produto.preco * quantidade;
  }

  removerItem(produto) {
    if (!produto) {
      throw new Error("Produto inválido");
    }

    const indiceItem = this.itens.findIndex((item) => item.produto === produto);

    if (indiceItem === -1) {
      throw new Error("Produto não encontrado no carrinho");
    }

    const itemRemovido = this.itens[indiceItem];

    this.itens.splice(indiceItem, 1);
    this.quantidadeTotal -= itemRemovido.quantidade;
    this.valorTotal -= itemRemovido.produto.preco * itemRemovido.quantidade;
  }

  mostrarCarrinho() {
    console.log("---------- Carrinho de Compras ----------");

    if (this.itens.length === 0) {
      console.log("O carrinho está vazio.");
      return;
    }

    console.log("Itens:");
    this.itens.forEach((item) => {
      console.log(`${item.produto.nome} x ${item.quantidade}`);
    });

    console.log(`Quantidade Total: ${this.quantidadeTotal}`);
    console.log(`Valor Total: R$ ${this.valorTotal.toFixed(2)}`);
  }
}

const produto1 = { nome: "Camisa", preco: 29.9 };
const produto2 = { nome: "Calça", preco: 49.9 };

const carrinho = new CarrinhoDeCompras();

carrinho.adicionarItem(produto1, 2);
carrinho.adicionarItem(produto2, 1);
carrinho.mostrarCarrinho();

carrinho.removerItem(produto1, 1);

carrinho.mostrarCarrinho();

// Resultado esperado no console:

// ---------- Carrinho de Compras ----------

// Itens:
// Camisa x 2
// Calça x 1

// Quantidade Total: 3
// Valor Total: R$ 109.70
