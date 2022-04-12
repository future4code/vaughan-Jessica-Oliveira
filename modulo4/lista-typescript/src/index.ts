//1
const mensagemAniversario = (nome: string, dataNascimento: string): string => {
  const novaDataNascimento: string[] = dataNascimento.split("/");
  const diaNascimento: string = novaDataNascimento[0];
  const mesNascimento: string = novaDataNascimento[1];
  const anoNascimento: string = novaDataNascimento[2];

  return `Olá me chamo ${nome}, nasci no dia ${diaNascimento} do mês ${mesNascimento} do ano ${anoNascimento}.`;
};

console.log(mensagemAniversario("Jessica", "24/07/1991"));

//2.
const tipoVariavel = (tipo: any): void => {
  console.log(typeof tipo);
};

console.log(tipoVariavel("Oi"));
