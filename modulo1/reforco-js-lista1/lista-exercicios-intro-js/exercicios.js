// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite aqui a altura do retângulo."))
  const largura = Number(prompt("Digite aqui a largura do retângulo."))

  const area = altura * largura
  console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano em que estamos atualmente."))
  const anoNascimentoUsuario = Number(prompt("Digite aqui o ano em que você nasceu."))

  const idadeUsuario = anoAtual - anoNascimentoUsuario
  console.log(idadeUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura**2) 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt("Qual o seu nome?")
  const idadeDoUsuario = Number(prompt("Digite aqui a sua idade."))
  const emailUsuario = prompt("Digite aqui o seu email.")

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresFavoritasUsuario = []
  
  const corFavorita1 = prompt("Digite aqui sua cor preferida.")
  coresFavoritasUsuario.push(corFavorita1)
  const corFavorita2 = prompt("Digite aqui uma outra cor favorita.")
  coresFavoritasUsuario.push(corFavorita2)
  const corFavorita3 = prompt("Digite aqui mais uma cor favorita.")
  coresFavoritasUsuario.push(corFavorita3)
  
  console.log(coresFavoritasUsuario)
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
  // implemente sua lógica aqui
let novoUltimoElemento = array[0]

array[0] = array[array.length-1]

array[array.length-1] = novoUltimoElemento

return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Digite aqui o ano em que estamos atualmente."))
const anoNascimento = Number(prompt("Digite aqui o ano que você nasceu."))
const anoEmissaoRG = Number(prompt("Digite aqui o ano em que seu RG foi emitido."))
const idadeDoUsuario = anoAtual - anoNascimento
const tempoDeEmissaoRG = anoAtual - anoEmissaoRG

if(idadeDoUsuario <= 20 && tempoDeEmissaoRG >= 5) {
  console.log(true)
} else if (idadeDoUsuario > 20 && idadeDoUsuario <= 50 && tempoDeEmissaoRG >= 10) {
  console.log(true) 
} else if(idadeDoUsuario > 50 && tempoDeEmissaoRG >= 15) {
  console.log(true)
} else {
  console.log(false)
}

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if (ano % 400 === 0) {
    return true
  } else if (ano % 4 === 0 && !(ano % 100 === 0)){
    return true 
  }else {
    return false
  }
  }

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const isMaiorDeIdade = prompt("Você tem mais de 18 anos?").toLowerCase()
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo?").toLowerCase()
  const disponibilidadeExclusiva = prompt("Você possui disponibilidade exclusiva durante os horários do curso?").toLowerCase()

    if(isMaiorDeIdade === "sim" && ensinoMedioCompleto === "sim" && disponibilidadeExclusiva === "sim") {
      console.log(true)
    } else {
      console.log(false)
    }

}