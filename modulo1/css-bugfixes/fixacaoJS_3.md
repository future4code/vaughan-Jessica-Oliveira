~~~~
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
    let nota1 = (ex*1)
    let nota2 = (p1*2)
    let nota3 = (p2*3)
    let mediaFinal = (nota1 + nota2 + nota3) / 6
    if (mediaFinal < 6) {
        return "D"
    } else if (mediaFinal >= 6 && mediaFinal < 7.5) {
        return "C"
    } else if (mediaFinal >= 7.5 && mediaFinal < 9) {
        return "B"
    } else {
        return "A"
    }
}
~~~~