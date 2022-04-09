//Exercício 2

const operacao = process.argv[2];
const primeiroNumero = Number(process.argv[3]);
const segundoNumero = Number(process.argv[4]);

const funcaoMatematica = () => {
  switch (operacao) {
    case "add":
      console.log(primeiroNumero + segundoNumero);
      break;
    case "sub":
      console.log(primeiroNumero - segundoNumero);
      break;
    case "mult":
      console.log(primeiroNumero * segundoNumero);
      break;
    case "div":
      console.log(primeiroNumero / segundoNumero);
      break;
    default:
      console.log("Tente novamente");
  }
  return funcaoMatematica;
};
