var cidades = ['Belo Horizonte', 'São Paulo', 'Salvador', 'Campo Grande', 'Curitiba']
var quantidadeDeClientesPorCidade = [23, 12, 11, 10, 8]
var lucroFaturamentoPorCidade = [2950, 3950, 1329, 2412, 626]

//com for
for(var i = 0; i < cidades.length; i++) {
  console.log(cidades[i])
}

//com while
var j = 0
while(j < cidades.length) {
  console.log(cidades[j])
  j++
}

//tamanho da lista
console.log(quantidadeDeClientesPorCidade.length)
//primeiro item
console.log(lucroFaturamentoPorCidade[0])
//ultimo item
console.log(lucroFaturamentoPorCidade[lucroFaturamentoPorCidade.length - 1])

