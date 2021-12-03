//Exercícios de Interpretação de código

//1.
//a. Será impresso: 10 50
//b. Elas seriam executadas, mas não aparece nada no console porque não estou imprimindo lá.

//2.
//a. A função recebe um texto do usuário via prompt, deixa todos os caracteres em letra minúscula e checa se contém a palavra "cenoura". A utilidade é poder fazer essas ações (passar para minúsculas e checar se tem uma determinada palavra) em quantas entradas do usuário for preciso.
//b.
//i. true
//ii. true
//iii. true

//Exercícios de Escrita de Código
//1.
//a.
function frase () {
    console.log("Eu sou Jessica, tenho 30 anos, moro em São Bernardo do Campo e sou estudante")

    return frase

}

frase()

//b.
function frase2 (nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)

    return frase2

}

frase2("Jessica", 30, "São Bernardo do Campo", "estudante")

//2.
//a.

let soma = (primeiroNumero, segundoNumero) => {
    return primeiroNumero + segundoNumero

}

console.log(soma(5,5))
console.log(soma(100,100))

//b.

let isMaiorouIgual = (num1, num2) => {
    resultado = num1 >= num2
    return resultado
}

console.log(isMaiorouIgual(2,2))

//c.
let isPar = (num1) => {
    resultado = num1 % 2 === 0
    return resultado
}

console.log(isPar(18))

//d.
let mensagem = (frase) => {
    resultado = console.log(frase.length, frase.toLowerCase())
    return resultado
}

mensagem("Cenoura é bom")
mensagem("Jéssica")

//3.

let num1 = Number(prompt("Insira aqui um número"))
let num2 = Number(prompt("Insira outro número aqui."))

let somar = (num1, num2) => {
    resultadoSoma = num1 + num2
    return resultadoSoma
}

console.log(somar(num1, num2))

let subtrair = (num1, num2) => {
    resultadoSubtracao = num1 - num2
    return resultadoSubtracao
}

console.log(subtrair(num1, num2))

let multiplicar = (num1, num2) => {
    resultadoMultiplicacao = num1 * num2
    return resultadoMultiplicacao
}

console.log(multiplicar(num1, num2))

let dividir = (num1, num2) => {
    resultadoDivisao = num1 / num2
    return resultadoDivisao
}
console.log(dividir(num1, num2))


//Desafios
//1.
//a.
let imprimir = (numero) => {
    return console.log(numero)
}


//b.

let somarValores = (num1, num2) => {
    return resultado = num1 + num2
}

imprimir(somarValores(2,2))
// sem return ??????? buguei 


2.
let hipotenusa = (cateto1, cateto2) => {
    hipotenusaˆ2 = Math.pow(cateto1, 2) + Math.pow(cateto2, 2)
    resultado = Math.sqrt(hipotenusaˆ2)
    return resultado
}

console.log(hipotenusa(3,4))


