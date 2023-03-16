/* ------- Nova Zelândia */
var passagemNZ = 13996 //reais
var hotelNZ = 79.15    //dolar
var guiaNZ = 200       //dolar

//de real para dolar -> divide por 3.25
//de dolar para real -> multiplica por 3.25

var dolarNZ = 3.25

var hotelNZReal = hotelNZ * dolarNZ
//console.log(hotelNZReal)

var guiaNZReal = guiaNZ * dolarNZ
//console.log('O valor em real para o guia é de R$ ', guiaNZReal)

var passagemNZDolar = passagemNZ / dolarNZ

console.log('A passagem para NZ fica NZ $: ', passagemNZDolar.toFixed(2))

/* ------- Tailândia */
var passagemTha = 9160 //reais
var hotelTha = 590    //baht
var guiaTha = 235     //baht

//de real para baht -> divide por 6.59
//de dolar para baht -> multiplica por 6.59

var baht = 6.59 // 0.15 reais equivale a 1 baht tailandes

var hotelThaReal = hotelTha * baht

var guiaThaReal = guiaTha * baht

var passagemThaBaht = passagemTha / baht

//use o console.log() para mostrar o valor dessas variaveis

/* ------- Costa Rica */
var passagemCR= 9160 //reais
var hotelCR = 590    //colon costarriquenho
var guiaCR = 235     //colon costarriquenho

//de real para baht -> divide por 103.86 
//de dolar para baht -> multiplica por 103.86

var colon = 103.86   // 0.0089 reais equivale a 1 colon costarriquenho

var hotelCRReal = hotelCR* colon

var guiaCRReal = guiaCR * colon

var passagemCRBaht = passagemCR / colon

//use o console.log() para mostrar o valor dessas variaveis
