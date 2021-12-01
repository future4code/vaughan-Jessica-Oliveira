//Exercícios de Interpretação de Código

//1.
//a. False
//b. False
//c. True
//d. Boolean

//2. Todos informação vinda do prompt está no formato string. Para fazer as operações aritméticas ele precisa fazer a conversão para números com o a propriedade Number(). Sem a conversão, será impresso no console a concatenação das strings recebidas. Ex: primeiroNumero = 10 e segundoNumero = 20 no console o resultado aparecerá 1020.

//3. Para que a soma esteja correta é precisa converter string pra número:
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//Exercícios de Escrita de Código

//1.
const idadeUsuario = Number(prompt("Qual a sua idade?"))
const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))

const isIdadeMaior = idadeUsuario > idadeMelhorAmigo

console.log(`Sua idade é maior do que a do seu melhor amigo(a)? ${isIdadeMaior}`)

const diferencaIdade = idadeUsuario - idadeMelhorAmigo
console.log(diferencaIdade)

//2.
const numeroPar = Number(prompt("Insira aqui um número par."))
const restoDaDivisao = numeroPar % 2
console.log(restoDaDivisao)

//O resultado do resto da divisão de números pares por 2 é sempre zero, não tem resto.

//O resultado do resto da divisão não é mais zero se inserir um número ímpar.

//3.
const idadeUsuario = Number(prompt("Quantos anos você tem?"))

const idadeEmMeses = idadeUsuario * 12
console.log(idadeEmMeses)

const idadeEmdias = idadeEmMeses * 30
console.log(idadeEmdias)

const idadeEmHoras = idadeEmdias * 24 
console.log(idadeEmHoras)

//4.
const primeiroNumero = Number(prompt("Insira aqui um número."))
const segundoNumero = Number(prompt("Digite mais um número aqui."))

console.log("O primeiro número é maior que o segundo? ", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo? ", primeiroNumero === segundoNumero)
console.log("O primeiro número é divisível pelo segundo? ", primeiroNumero % segundoNumero === 0)
console.log("O segundo número é divisível pelo primeiro? ", segundoNumero % primeiroNumero === 0)

//Desafios
//1.

let grausCelsius = 80;
let Fahrenheit = 77;

const conversaoFParaK = (Fahrenheit - 32) * (5/9) + 273.15
console.log(`77F são ${conversaoFParaK}K`)

let conversaoCParaF = (grausCelsius * (9/5)) + 32
console.log(`80C são ${conversaoCParaF}F`)
 
grausCelsius = 30;
conversaoCParaF = (grausCelsius * (9/5)) + 32
console.log(`30C são ${conversaoCParaF}F`)

const conversaoCParaK = (conversaoCParaF - 32) * (5/9) + 273.15
console.log(`30C são ${conversaoCParaK}K`)

//2.
const valorQuilowattHora = 0.05;

const consumoMensallUsuario = Number(prompt("Quantos Quilowatts-hora você consumiu?"))

const valorAPagar = consumoMensallUsuario * valorQuilowattHora
console.log(valorAPagar)

const valorComDesconto = (consumoMensallUsuario * valorQuilowattHora) * 0.85
console.log(valorComDesconto)

//3.
//a.
const lbEmKilo = 2.2046
const conversaoKParaLb = 20 / lbEmKilo
console.log(`20lb equivalem a ${conversaoKParaLb} Kg`)

// //b. 
const ozEmKilo = 0.0283

const conversaoOzParaKilo = 10.5 * ozEmKilo
console.log(`10.5oz equivalem a ${conversaoOzParaKilo} Kg`)

// //c.
const miEmMetro = 1609.34

const conversaoMilhaParaMetro = 100 * miEmMetro
console.log(`100 milhas equivalem a ${conversaoMilhaParaMetro} metros`)

// //d.
const ftEmMetro = 0.3048

const conversaoFtParaMetro = 50 * ftEmMetro
console.log(`50ft equivalem a ${conversaoFtParaMetro}m`)

// //e.

const galaoEmLitro = 3.78541

const conversaoGalaoEmLitro = 103.56 * galaoEmLitro
console.log(`103.56gal equivalem a ${conversaoGalaoEmLitro} litros`)

// //f.
const conversaoXicaraEmLitros = 450 * (6/25)
console.log(`450 xícaras equivalem a ${conversaoXicaraEmLitros} litros.`)

// //g.
const milhasEmMetrosDoUsuario = Number(prompt("Insira um valor em milhas aqui."))

const conversaoMilhasEmMetrosDoUsuario = milhasEmMetrosDoUsuario * miEmMetro
console.log(`${milhasEmMetrosDoUsuario} milhas equivalem a ${conversaoMilhasEmMetrosDoUsuario} metros.`)
