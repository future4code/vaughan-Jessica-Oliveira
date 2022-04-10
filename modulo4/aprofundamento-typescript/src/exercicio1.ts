//Exercício 1

//a.
const minhaString: string = "Capim-Limão";
//Ao atribuir um número, aparece um sublinhado em mensagem de erro.

//b.
const meuNumero: number | string = 20;
//Com Union type a variável pode receber mais de um tipo de valor.

//d.
enum corFavorita {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta",
}

//c.
type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: corFavorita;
};

const pessoa1: Pessoa = {
  nome: "Jessica",
  idade: 20,
  corFavorita: corFavorita.AMARELO,
};

const pessoa2: Pessoa = {
  nome: "João",
  idade: 25,
  corFavorita: corFavorita.VERDE,
};

const pessoa3: Pessoa = {
  nome: "Alissa",
  idade: 15,
  corFavorita: corFavorita.VERMELHO,
};
