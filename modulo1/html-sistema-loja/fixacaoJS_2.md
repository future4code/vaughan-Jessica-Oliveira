~~~~
function calculaPrecoTotal(quantidade) {
    // Escreva seu código aqui 
    let precoMacas
    
    if (quantidade < 12) {
      precoMacas = quantidade * 1.30
    } else if (quantidade >= 12){
      precoMacas = quantidade * 1
    }

    return precoMacas
  }
~~~~
