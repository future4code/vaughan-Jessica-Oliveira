//Exercícios de Interpretação de código

//1.
//a. O código recebe do usuário um número e testa se ele é par.
//b. Para os números pares.
//c. Para os números ímpares.

//2.
//a. serve para imprimir uma mensagem que contém a fruta e seu preço.
//b. Será impresso: O preço da fruta Maçã é R$2.25
//c. O break serve para marcar o final da execução daquela parte do código. Então se retirássemos o break, o código continuaria sendo excutado parando apenas no default. Dessa forma, pêra assumiria o valor errado de 5 reais.

//3.
//a. A primeira solicita um número do usuário, que será testado com a condicional.
//b. Ao digitar 10 aparecerá no console "Esse número passou no teste". Ao inserir -10, não aparecerá nada.
//c. Vai aparecer um erro de que mensagem não foi definida. Isso acontece porque não é possível acessar a variável mensagem, pois ela só está definida dentro do escopo da condicional (escopo filho).  

//Exercícios de escrita de código

//1.

const idadeUsuario = Number(prompt("Quantos anos você tem?"))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}

//2.
const turnoDoEstudante = prompt("Em que turno você estuda? Digite M para Matutino, V para Vespertino, N para Noturno.").toUpperCase()

if (turnoDoEstudante === "M") {
    console.log("Bom Dia!")
} else if (turnoDoEstudante === "V") {
    console.log("Boa Tarde!")
} else if (turnoDoEstudante === "N") {
    console.log("Boa Noite!")
} else {
    console.log("Resposta Inválida, tente novamente.")
}

//3.

switch (turnoDoEstudante) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V": 
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Resposta Inválida, tente novamente.")
        break
}

//4. 
// const generoFilme = prompt("Qual gênero do filme vocês irão assistir?").toLowerCase()
// const valorDoIngresso = Number(prompt("Qual o valor do ingresso?"))

// if (generoFilme === "fantasia" && valorDoIngresso < 15) {
//     console.log ("Bom Filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

//Desafios
//1.
const generoFilme = prompt("Qual gênero do filme vocês irão assistir?").toLowerCase()
const valorDoIngresso = Number(prompt("Qual o valor do ingresso?"))

if (generoFilme === "fantasia" && valorDoIngresso < 15) {
    const lanchinho = prompt("Qual snack que você quer comprar?")
    console.log ("Bom Filme!")
    console.log(`Aproveite o seu/sua ${lanchinho}`)
} else {
    console.log("Escolha outro filme :(")
}

