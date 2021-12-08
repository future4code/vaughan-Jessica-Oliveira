// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const base = Number(prompt("Insira aqui um valor de base do retângulo."));
  const altura = Number(prompt("Insira aqui o valor de altura do retângulo."));

  const areaRetangulo = base * altura;
  return console.log(areaRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(
    prompt("Insira aqui o ano em que estamos atualmente.")
  );
  const anoNascimento = Number(prompt("Insira aqui o ano que você nasceu."));
  const idadeUsuario = anoAtual - anoNascimento;
  return console.log(idadeUsuario);
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  peso = Number(prompt("Insira aqui seu peso em kg."));
  altura = Number(prompt("Insira aqui sua altura em metros."));
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt("Qual seu nome?")
  const idadeUsuario = Number(prompt("Qual a sua idade?"))
  const emailUsuario = prompt ("Qual o seu email?")
  return console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corPreferida1 = prompt("Digite aqui sua cor preferida.")
  const corPreferida2 = prompt("Digite aqui outra cor que você gosta.")
  const corPreferida3 = prompt ("Digite aqui mais uma cor preferida.")

  const coresPreferidasUsuario = [corPreferida1, corPreferida2, corPreferida3]
  return console.log(coresPreferidasUsuario)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
  const PrimeiroViraUltimo = array[0]

  array[0] = array[array.length-1]
  array[array.length-1] = PrimeiroViraUltimo

  return array
  // implemente sua lógica aqui
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Insira o ano atual."))
  const anoNascimento = Number(prompt("Insira o ano em que você nasceu."))
  const emissaoRG = Number(prompt("Insira o ano em que sua carteira de trabalho foi emitida."))

  const idade = anoAtual - anoNascimento
  const vencimentoRG = anoAtual - emissaoRG

  if ((idade <= 20 && vencimentoRG >= 5) || ((idade >= 20 && idade <= 50) && vencimentoRG >= 10) || (idade >= 50 && vencimentoRG >= 15)) {
    console.log(true)
  } else {
    console.log(false)
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 === 0 && ano % 400 !== 0)) {
  console.log(true)
} else {
  console.log(false)
}
//a rever
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const isMaiorDe18 = prompt("Você tem mais de 18 anos?").toLowerCase()
  const grauDeEscolaridade = prompt("Você possui ensino médio completo?").toLowerCase()
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?").toLowerCase()

  if (isMaiorDe18 === "sim" && grauDeEscolaridade === "sim" && disponibilidade === "sim") {
    console.log(true) 
  } else {
    console.log(false)
  } 
    }
