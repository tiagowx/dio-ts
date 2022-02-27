interface ICachorro {
  nome: string;
  idade: number;
  parqueFaborito?: string;
}

type CachorroSomenteLeitura = {
  +readonly [K in keyof ICachorro]-?: ICachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
  idade;
  nome;
  parqueFaborito;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro('Romeu', 6);