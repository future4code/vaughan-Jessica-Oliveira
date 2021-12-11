//Exercício de Interpretação de código

//1.
//a. "Matheus Nachtergaele" 
//   "Virginia Cavendish"
//   canal: "Globo", horario: "14h"


//2.
//a. {nome: "Juca", idade: 3, raca: "SRD"}
//   {nome: "Juba", idade: 3, raca: "SRD"}
//   {nome: "Jubo", idade: 3, raca: "SRD"}


//b. Ele faz uma cópia do objeto completo, que chamamos de espalhamento ou spread, e podemos alterar os acrescentar propriedades.

// 3.
// a. Será impresso: 
//    false
//    undefined
// b. O falso será impresso como resposta da chave backender, mas altura será undefined porque não foi previamente
// essa chave dentro do objeto.

//Exercícios de escrita
//1.
//a.
const pessoa = {
    nome: "Jessica",
    apelidos: ["Nina", "Jess", "Jé"]
}

const frase = (pessoa) => {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)
}

frase(pessoa)

//b.
const novaPessoa = {
    ...pessoa,
    apelidos: ["Ninoca", "Nininha", "Jejé"]
}

frase(novaPessoa)

//2.
const pessoa1 = {
    nome: "Jessica",
    idade: 30,
    profissao: "estudante"
}

const pessoa2 = {
    nome: "Gil",
    idade: 31,
    profissao: "gerente"
}

const pessoas = (pessoa) => {
    pessoa = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
    return pessoa
}

console.log(pessoas(pessoa1))
console.log(pessoas(pessoa2))

//3.
//

const carrinho = []

const fruta1 = {
    nome: "maçã",
    disponibilidade: true
}

const fruta2 = {
    nome: "manga",
    disponibilidade: true
}

const fruta3 = {
    nome: "banana",
    disponibilidade: true
}

const frutas = (fruta) => {
    return carrinho.push(fruta)
}

frutas(fruta1)
frutas(fruta2)
frutas(fruta3)

console.log(carrinho)

//Desafios 

//1.

const nomeUsuario = prompt("Qual seu nome?")
const idadeUsuario = Number(prompt("Qual a sua idade?"))
const profissaoUsuario = prompt("Qual sua profissao?")

const usuario = {
    nome: nomeUsuario,
    idade: idadeUsuario,
    profissao: profissaoUsuario
}

console.log(usuario)

//2. 
const filme1 = {
    nome: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
    anoDeLancamento: 2005
}

const filme2 = {
    nome: "Harry Potter e a Pedra Filosofal",
    anoDeLancamento: 2001
}

const comparacaoFilmes = (filmeA, filmeB) => {
    console.log(`O primeiro filme foi lançado antes do segundo? ${filmeA.anoDeLancamento < filmeB.anoDeLancamento}.`)
    console.log(`O primeiro filme foi lançado no mesmo ano que o segundo? ${filmeA.anoDeLancamento === filmeB.anoDeLancamento}. `)

}

comparacaoFilmes(filme1, filme2)

//3.

const controleEstoque = (fruta) => {
    const novaDisponibilidade = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade

    }

    return novaDisponibilidade
}

console.log(controleEstoque(fruta1))
