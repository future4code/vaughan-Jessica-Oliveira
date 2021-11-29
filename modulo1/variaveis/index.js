/*Exercícios Interpretação de Código
1. console.log(a, b) resultará em 10, 5 pois com let é possível alterar o valor atribuído a uma variável
2. console.log (a, b, c) resultará em 10 10 10 pois há uma reatribuição dos valores entre si nas variáveis.
3. let p poderia ser let horasTrabalhadasPorDia, e let t poderia ser salarioRecebidoPorDia
*/

//Exercícios Escrita de Código
//1.

let nomeUsuario
let idadeUsuario 

console.log(typeof nomeUsuario)
console.log(typeof idadeUsuario)

// As variáveis estão como undefined porque não tem nenhum valor atribuído a elas.

nomeUsuario = prompt("Qual o seu nome?")
idadeUsuario = prompt("Quantos anos você tem?")

console.log(typeof nomeUsuario)
console.log(typeof idadeUsuario)

//Agora o tipo das variáveis mudou para string pois tem valores atribuídos vindos do prompt, que sempre retorna informações no formato string.

console.log(`Olá ${nomeUsuario}, você tem ${idadeUsuario} anos.`)

//2.

let ehEstudante = prompt('Você está estudando atualmente?')
let temAnimalEstimacao = prompt('Você tem algum animal de estimação?')
let gostaChocolate = prompt('Você gosta de chocolate?')

console.log('Você está estudando atualmente?', ehEstudante)
console.log('Você tem algum animal de estimação?', temAnimalEstimacao)
console.log('Você gosta de chocolate?', gostaChocolate)

//3.

let a = 10
let b = 25

let c = a
a = b 
b = c 

console.log(`O novo valor de a é ${a}`)
console.log(`O novo valor de b é ${b}`)

//Desafio

let primeiroNumero = Number(prompt('Insira aqui um número.'))
let segundoNumero = Number(prompt('Insira outro número aqui.'))

let somaDoisNumeros = (primeiroNumero + segundoNumero)
let MultiplicacaoDoisNumeros = (primeiroNumero * segundoNumero)

console.log(`1. O primeiro somado ao segundo número resulta em: ${somaDoisNumeros}`)
console.log(`O primeiro número multiplicado pelo segundo número resulta em: ${MultiplicacaoDoisNumeros}`)


