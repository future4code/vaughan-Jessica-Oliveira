//Exercícios Interpretação de Código

// 1.
// a. Enquanto i for menor que 5, ele atualiza o resultado de valor somando o que está em i.
// b. 10

// 2.
// a. [ 19, 21, 23, 25, 27, 30]
// b. sim, poderíamos usar um console.log(lista.indexOf(numero))

// 3. *
//    **
//    ***
//    ****

//Exercícios Escrita de Código

//1.
//a.
const quantidadeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))

let listaNomesBichinhos = []

if (quantidadeBichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    for (i = 0; i < quantidadeBichinhos; i++) {
        let nomeBichinhos = prompt("Que legal! Digite o nome de cada um dos seus bichinhos de estimação.")
        listaNomesBichinhos.push(nomeBichinhos)
        
    }
    
}

// 2. 
// a.
const arrayOriginal = [80,30,130,40,60,21,70,120,90,103,110,55]

let imprimeValorOriginal = () => {
    for (let elementos of arrayOriginal) {
        console.log(elementos)
    }
} 

console.log(imprimeValorOriginal())

// b. 
let imprimeValorDivididoPorDez = () => {
    for (let elementos of arrayOriginal) {
        console.log(elementos/10)
    }
}

console.log(imprimeValorDivididoPorDez())

// c. 
let numerosPares = () => {
    let novoArray = []

    for (let elementos of arrayOriginal) {
        if (elementos%2 === 0) {
        novoArray.push(elementos)
        }
}
return novoArray
}

console.log(numerosPares())

//d.

const imprimirArrayComStrings = () => {
    let arrayComStrings =[]
    let i = 0
    for (let elemento of arrayOriginal) {
        arrayComStrings.push(`O elemento do index ${i} é: ${elemento}`)
        i++
    }
    console.log(arrayComStrings)
}

imprimirArrayComStrings(arrayOriginal)



