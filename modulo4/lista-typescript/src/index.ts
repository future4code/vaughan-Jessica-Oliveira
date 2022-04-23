//1.
const mensagemAniversario = (nome: string, dataNascimento: string): string => {
  const novaDataNascimento: string[] = dataNascimento.split("/");
  const diaNascimento: string = novaDataNascimento[0];
  const mesNascimento: string = novaDataNascimento[1];
  const anoNascimento: string = novaDataNascimento[2];

  return `Olá me chamo ${nome}, nasci no dia ${diaNascimento} do mês ${mesNascimento} do ano ${anoNascimento}.`;
};

console.log(mensagemAniversario("Jessica", "24/07/1991"));

//2.
const tipoVariavel = (tipo: any) => {
  console.log(typeof tipo);
};

console.log(tipoVariavel("Oi"));

//3.
enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type filme = {
  nome: string;
  anoDeLancamento: number;
  genero: GENERO;
  rating?: number;
};

const filmes = (
  nome: string,
  anoDeLancamento: number,
  genero: GENERO,
  rating?: number
): filme => {
  if (rating) {
    return {
      nome: nome,
      anoDeLancamento: anoDeLancamento,
      genero: genero,
      rating: rating,
    };
  } else {
    return {
      nome: nome,
      anoDeLancamento: anoDeLancamento,
      genero: genero,
    };
  }
};

console.log(filmes("Duna", 2021, GENERO.ACAO, 74));
console.log(filmes("Duna", 2021, GENERO.ACAO));

//4.

enum SETOR {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}

type colaboradores = {
  nome: string;
  salario: number;
  setor: SETOR;
  presencial: boolean;
};

const listaColaboradores: colaboradores[] = [
  { nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
  { nome: "Maria", salario: 1500, setor: SETOR.VENDAS, presencial: false },
  { nome: "Salete", salario: 2200, setor: SETOR.FINANCEIRO, presencial: true },
  { nome: "João", salario: 2800, setor: SETOR.MARKETING, presencial: false },
  { nome: "Josué", salario: 5500, setor: SETOR.FINANCEIRO, presencial: true },
  { nome: "Natalia", salario: 4700, setor: SETOR.VENDAS, presencial: true },
  { nome: "Paola", salario: 3500, setor: SETOR.MARKETING, presencial: true },
];

const colaboradoresMarketingEPresencial = (
  lista: colaboradores[]
): colaboradores[] => {
  const listaFiltrada: colaboradores[] = lista.filter((colaborador) => {
    return colaborador.setor === SETOR.MARKETING && colaborador.presencial;
  });
  return listaFiltrada;
};

console.log(colaboradoresMarketingEPresencial(listaColaboradores));

//5.

// enum ROLE {
//   USER = "user",
//   ADMIN = "admin",
// }

// type usuario = {
//   name: string;
//   email: string;
//   role: ROLE;
// };

// const listaUsuarios: usuario[] = [
//   { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
//   { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
//   { name: "Aline", email: "aline@email.com", role: ROLE.USER },
//   { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
//   { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
//   { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN },
// ];

// const EmailsUsuarios = (lista: usuario[]): string[] => {
//   const listaEmails: string[] = lista
//     .filter((usuario) => usuario.role === ROLE.ADMIN)
//     .map((usuario) => usuario.email);
//   return EmailsUsuarios;
// };

// console.log(EmailsUsuarios(listaUsuarios));

//6.

type conta = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const listaClientes: conta[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

const saldoAtualizado = (lista: conta[]): conta[] => {
  lista.forEach((cliente) => {
    const totalDebitos = cliente.debitos.reduce((a, b) => a + b, 0);
    cliente.saldoTotal -= totalDebitos;
    cliente.debitos = [];
  });
  const contasNegativas = lista.filter((conta) => conta.saldoTotal < 0);
  return contasNegativas;
};

console.log(saldoAtualizado(listaClientes));

//7.

const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

type produto = {
  nome: string;
  quantidade: number;
  valorUnitario: number | string;
};

const estoque: produto[] = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];

const listaDeProdutos = (lista: produto[]): produto[] => {
  lista.forEach(
    (item) => (item.valorUnitario = ajustaPreco(item.valorUnitario as number))
  );

  const listaOrdenada: produto[] = lista.sort(
    (a, b) => a.quantidade - b.quantidade
  );
  return listaOrdenada;
};

console.log(listaDeProdutos(estoque));

//8.
const renovacaoCarteira = (
  dataNascimento: string,
  dataDocumento: string
): boolean | string => {
  const dataAtualTimestamp: number = new Date().getTime();
  const [diaNasc, mesNasc, anoNasc] = dataNascimento.split("/");
  const [diaDoc, mesDoc, anoDoc] = dataDocumento.split("/");
  const anoNascTimestamp: number = new Date(
    `${anoNasc}-${mesNasc}-${diaNasc}T00:00:00`
  ).getTime();
  const dataDocTimestamp: number = new Date(
    `${anoDoc}-${mesDoc}-${diaDoc}T00:00:00`
  ).getTime();
  const idade: number = dataAtualTimestamp - anoNascTimestamp;
  const ultimaRenovacao: number = dataAtualTimestamp - dataDocTimestamp;
  const umAnoEmTimestamp: number = 31556926000;

  if (idade <= 20 * umAnoEmTimestamp) {
    return ultimaRenovacao >= 5 * umAnoEmTimestamp ? true : false;
  } else if (idade >= 20 * umAnoEmTimestamp && idade <= 50 * umAnoEmTimestamp) {
    return ultimaRenovacao >= 10 * umAnoEmTimestamp ? true : false;
  } else if (idade >= 50 * umAnoEmTimestamp) {
    return ultimaRenovacao >= 15 * umAnoEmTimestamp ? true : false;
  } else {
    return "algo deu errado";
  }
};

console.log(renovacaoCarteira("24/07/1991", "14/05/2014"));

//9.

const anagramas = (palavra: string): number => {
  const quantidadeLetras = palavra.length;

  if (quantidadeLetras === 0) {
    return 1;
  }

  let resultado = 1;

  for (let i = quantidadeLetras; i > 0; i--) {
    resultado *= i;
  }
  return resultado;
};

console.log(anagramas("jessica"));

//10.

const verificaPrimeiroDigito = (digitos: string): boolean => {
  let multiplicador = 10,
    somatorio = 0;
  for (var _i = 0; _i < digitos.length - 2; multiplicador--, _i++) {
    var digito = Number(digitos.charAt(_i));
    somatorio += digito * multiplicador;
  }
  let modOnze = somatorio % 11;
  let resultado = 11 - modOnze;
  if (resultado >= 10) {
    resultado = 0;
  }
  return resultado === Number(digitos.charAt(9));
};

const verificaSegundoDigito = (digitos: string): boolean => {
  let multiplicador = 11,
    somatorio = 0;
  for (var _i = 0; _i < digitos.length - 1; multiplicador--, _i++) {
    var digito = Number(digitos.charAt(_i));
    somatorio += digito * multiplicador;
  }
  let modOnze = somatorio % 11;
  let resultado = 11 - modOnze;
  if (resultado >= 10) {
    resultado = 0;
  }
  return resultado === Number(digitos.charAt(10));
};

function mesmosDigitos(cpf: string) {
  var i = cpf.length;
  var char = cpf.charAt(0);
  while (i--) {
    if (cpf[i] !== char) {
      return false;
    }
  }
  return true;
}

const validacaoCpf = (cpf: string): boolean => {
  let cpfApenasNumeros = cpf.split(".").join("");
  cpfApenasNumeros = cpfApenasNumeros.replace("-", "");
  if (!mesmosDigitos(cpfApenasNumeros)) {
    if (verificaPrimeiroDigito(cpfApenasNumeros)) {
      if (verificaSegundoDigito(cpfApenasNumeros)) {
        return true;
      }
    }
  }
  return false;
};

console.log(validacaoCpf("480.880.280-99"));

//11.

const converteNumerosRomanos = (numeroInicial: number): string => {
  const numRomanos: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanos = "",
    i;
  for (i in numRomanos) {
    while (numeroInicial >= numRomanos[i]) {
      romanos += i;
      numeroInicial -= numRomanos[i];
    }
  }
  return romanos;
};

console.log(converteNumerosRomanos(1991));
