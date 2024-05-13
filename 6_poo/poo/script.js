const cachorro = {
  raca: "SRD",
  uivar: function () {
    console.log("AUUUUUUUUUUUUU");
  },
  rosnar: function () {
    console.log("grrrrrrrrrr");
  },
  setRaca: function (raca) {
    this.raca = raca;
  },
  getRaca: function () {
    return "a raça é " + this.raca;
  },
};

cachorro.uivar();
cachorro.rosnar();
console.log(cachorro.raca);

cachorro.setRaca("Pastor alemao");
console.log(cachorro.raca);

console.log(cachorro.getRaca());

/////////////////////////////////////

const pessoa = {
  maos: 2,
};

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.log(pessoa.hasOwnProperty("maos"));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

////////////////////

let cachorro2 = {
  patas: 4,
  raca: "srd",
  latir: function () {
    console.log("auau");
  },
};

let labrador = Object.create(cachorro2);

labrador.latir();

labrador.raca = "Labrador";
console.log(labrador.raca);
console.log(cachorro2.raca);

let pastor = Object.create(cachorro2);

pastor.raca = "Pastor alemao";

console.log(pastor.raca);

/////////////////////

function criarCachorro(raca, cor) {
  let cachorro3 = Object.create({});
  cachorro3.raca = raca;
  cachorro3.cor = cor;
  cachorro3.latir = function () {
    console.log("auau");
  };
  return cachorro3;
}

let doberman = criarCachorro("Doberman", "preto");

console.log(doberman);
doberman.latir();

function Cachorro(raca, cor) {
  this.raca = raca;
  this.cor = cor;
  this.uivar = function () {
    console.log("auau");
  };
}

let husky = new Cachorro("husky", "cinza");

husky.uivar();
console.log(husky);

function Cachorro2(raca, cor) {
  this.raca = raca;
  this.cor = cor;
}

Cachorro2.prototype.uivar = function () {
  console.log("auau");
};

let pug = new Cachorro2("pug", "cinza");

console.log(pug);

pug.uivar();

///////////////////////////////////////////

class Cachorro3 {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
}

let labrador2 = new Cachorro3("Labrador", "Dourado");

console.log(labrador2);

///////////////////////////////////////

class Cachorro4 {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
  latir() {
    console.log("auau");
  }
}
Cachorro4.prototype.patas = 4;

let labrador3 = new Cachorro4("Labrador", "Dourado");

console.log(labrador3);
console.log(labrador3.patas);
labrador3.latir();

///////////////////////////////////////

class Cachorro5 {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
  latir() {
    console.log("auau");
  }
}
Cachorro5.prototype.raca = "SRD";
Cachorro5.prototype.patas = 4;

let labrador4 = new Cachorro5("Labrador", "Dourado");

console.log(labrador4.patas);

console.log(labrador4);

labrador4.latir();

console.log(Cachorro5.prototype.raca);
console.log(labrador4.raca);

/////////////////////////////////

class Cachorro6 {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
  latir() {
    console.log("auau");
  }
}
Cachorro6.prototype.raca = "SRD";

let patas = Symbol();

Cachorro6.prototype[patas] = 4;

let labrador5 = new Cachorro6("Labrador", "Dourado");

console.log(labrador5);

labrador5.latir();

console.log(Cachorro6.prototype.raca);
console.log(labrador5.raca);

//acessando symbol
console.log(Cachorro6.prototype[patas]);
console.log(labrador5[patas]);

///////////////////////////////////////////////////

class Cachorro7 {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
  latir() {
    console.log("auau");
  }
  get getCor() {
    return this.cor;
  }
  set setCor(cor) {
    this.cor = cor;
  }
}

let cachorroPastor = new Cachorro7("Pastor Alemao", "Sem cor");

console.log(cachorroPastor);

cachorroPastor.setCor = "Marrom";

console.log(cachorroPastor.getCor);

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Gato extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);

    this.raca = raca;
  }

  miar() {
    console.log("Miau");
  }
}

let siames = new Gato(4, "siames");
console.log(siames.patas);

///////////////////////////////////////

console.log(new Gato() instanceof Mamifero);
