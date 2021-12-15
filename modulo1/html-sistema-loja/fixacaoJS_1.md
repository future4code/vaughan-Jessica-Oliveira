~~~~
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let salarioFixo = 2000
let salarioFinal = salarioFixo + (qtdeCarrosVendidos * 100) + (valorTotalVendas * (5 / 100))
return salarioFinal
}
~~~~