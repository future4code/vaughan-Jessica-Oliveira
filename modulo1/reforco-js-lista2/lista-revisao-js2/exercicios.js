// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) { 
  return array.filter((elemento) => {
      return elemento % 2 === 0
  })

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return array.filter((elemento)=> {
    return elemento % 2 === 0
  }).map((elemento) => {
    return elemento ** 2
  })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0

  for (let i = 0; i < array.length; i++) {
    if(array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero
  let menorNumero

  let objetoEntreDoisNumeros = {}
  
  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }
  
  let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;

  let diferenca = (maiorNumero - menorNumero)

  objetoEntreDoisNumeros = 
  {maiorNumero:maiorNumero,
    maiorDivisivelPorMenor:maiorDivisivelPorMenor,
    diferenca:diferenca}

    return objetoEntreDoisNumeros
}



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const arrayNumerosPares = []
   for(let i = 0; arrayNumerosPares.length < n; i++) {
     if(i % 2 === 0) {
       arrayNumerosPares.push(i)
     }
   }
   return arrayNumerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC){
    return "Equilátero"
  } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    return "Isósceles"
  } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
    return "Escaleno"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const mensagemFilme = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

   return mensagemFilme
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima = {
    ...pessoa,
    nome: "ANÔNIMO"
   }
   return pessoaAnonima

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const pessoasAutorizadas = pessoas.filter(pessoa => {
     return pessoa.idade > 14 && 
     pessoa.idade < 60 &&
     pessoa.altura > 1.5
   })
   return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter(pessoa => {
    return pessoa.idade <= 14 ||
    pessoa.idade > 60 ||
    pessoa.altura < 1.5
  })
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const nomesOrdenadosAlfabeticamente = (a, b) => (a.nome > b.nome ? 1 : -1)
  return consultas.sort(nomesOrdenadosAlfabeticamente)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}