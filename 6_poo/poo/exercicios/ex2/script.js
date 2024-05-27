// Exercício 02
// Cria uma classe que simula um carrinho de compras de um e-commerce;
// Propriedades itens, quantidade total, valor total;
// Crie os métodos para adicionar e remover itens;
// e mostre no console.log()

// Define a classe CarrinhoDeCompras
class CarrinhoDeCompras {
  // O construtor inicializa as propriedades itens, quantidadeTotal e valorTotal
  constructor() {
    this.itens = []; // Array para armazenar os itens do carrinho
    this.quantidadeTotal = 0; // Variável para armazenar a quantidade total de itens no carrinho
    this.valorTotal = 0; // Variável para armazenar o valor total do carrinho
  }

  // Método para adicionar um item ao carrinho
  adicionarItem(produto, quantidade) {
    // Verifica se o produto é válido e se a quantidade é maior que zero
    if (!produto || quantidade <= 0) {
      throw new Error("Produto inválido ou quantidade inválida");
    }

    // Procura se o produto já existe no carrinho
    const itemExistente = this.itens.find((item) => item.produto === produto);

    // Se o produto já existe, atualiza a quantidade
    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      // Se o produto não existe, adiciona um novo item ao carrinho
      this.itens.push({ produto, quantidade });
    }

    // Atualiza a quantidade total de itens e o valor total do carrinho
    this.quantidadeTotal += quantidade;
    this.valorTotal += produto.preco * quantidade;
  }

  // Método para remover um item do carrinho
  removerItem(produto) {
    // Verifica se o produto é válido
    if (!produto) {
      throw new Error("Produto inválido");
    }

    // Procura o índice do produto no carrinho
    const indiceItem = this.itens.findIndex((item) => item.produto === produto);

    // Se o produto não foi encontrado, lança um erro
    if (indiceItem === -1) {
      throw new Error("Produto não encontrado no carrinho");
    }

    // Obtém o item removido
    const itemRemovido = this.itens[indiceItem];

    // Remove o item do carrinho
    this.itens.splice(indiceItem, 1);

    // Atualiza a quantidade total de itens e o valor total do carrinho
    this.quantidadeTotal -= itemRemovido.quantidade;
    this.valorTotal -= itemRemovido.produto.preco * itemRemovido.quantidade;
  }

  // Método para exibir o carrinho no console
  mostrarCarrinho() {
    console.log("---------- Carrinho de Compras ----------");

    // Verifica se o carrinho está vazio
    if (this.itens.length === 0) {
      console.log("O carrinho está vazio.");
      return;
    }

    // Exibe cada item do carrinho com sua quantidade
    console.log("Itens:");
    this.itens.forEach((item) => {
      console.log(`${item.produto.nome} x ${item.quantidade}`);
    });

    // Exibe a quantidade total de itens e o valor total do carrinho
    console.log(`Quantidade Total: ${this.quantidadeTotal}`);
    console.log(`Valor Total: R$ ${this.valorTotal.toFixed(2)}`);
  }
}

// Define dois produtos
const produto1 = { nome: "Camisa", preco: 29.9 };
const produto2 = { nome: "Calça", preco: 49.9 };

// Cria uma instância da classe CarrinhoDeCompras
const carrinho = new CarrinhoDeCompras();

// Adiciona produtos ao carrinho e exibe o carrinho
carrinho.adicionarItem(produto1, 2);
carrinho.adicionarItem(produto2, 1);
carrinho.mostrarCarrinho();

// Remove um produto do carrinho e exibe o carrinho atualizado
carrinho.removerItem(produto1);
carrinho.mostrarCarrinho();

// Resultado esperado no console:

// ---------- Carrinho de Compras ----------

// Itens:
// Camisa x 2
// Calça x 1

// Quantidade Total: 3
// Valor Total: R$ 109.70
