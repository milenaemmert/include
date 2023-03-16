var passagemNZ = 13996 //reais
var hotelNZ = 79.15    //dolar
var guiaNZ = 200       //dolar

var dolarNZ = 3.25

var hotelNZReal = hotelNZ * dolarNZ
var guiaNZReal = guiaNZ * dolarNZ

var qtdeDias = 10

var valorTotal = passagemNZ + (hotelNZReal * qtdeDias) + (guiaNZReal * qtdeDias)

function enviaEmail(nomeCliente, destino, passagem, diariaHotel, guia, qtdeDias, valorTotal) {
  var email = `${nomeCliente}, você vai viajar para ${destino}. A sua passagem custará R$ ${passagem}, a diária no hotel será de R$ ${diariaHotel.toFixed(2)} e valor do guia será de R$ ${guia.toFixed(2)}. Sua viagem de ${qtdeDias} dias, ficará com o valor total de R$ ${valorTotal.toFixed(2)}.`

  console.log(email)
}

enviaEmail('Fulano', 'Nova Zelândia', passagemNZ, hotelNZReal, guiaNZReal, qtdeDias, valorTotal)

//guia para 10 dias -> 650 * 10
//diaria hotel para 10 dias -> 257 * 10
//+ passagem