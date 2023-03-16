let clientesBH = 23
let clientesSP = 12
let clientesSalvador = 11
let clientesCG = 10
let clientesCWB = 8

let faturamentoBH = 2950
let faturamentoSP = 3950
let faturamentoSalvador = 1329
let faturamentoCG = 2412
let faturamentoCWB = 626

let faturamentoMedioBH = (faturamentoBH / clientesBH).toFixed(2)
let faturamentoMedioSP = (faturamentoSP / clientesSP).toFixed(2)
let faturamentoMedioSalvador = (faturamentoSalvador / clientesSalvador).toFixed(2)
let faturamentoMedioCG = (faturamentoCG / clientesCG).toFixed(2)
let faturamentoMedioCWB = (faturamentoCWB / clientesCWB).toFixed(2)

let concatenacao = `
  Faturamento médio por cliente:
  Belo Horizonte: R$ ${faturamentoMedioBH}
  São Paulo: R$ ${faturamentoMedioSP}
  Salvador: R$ ${faturamentoMedioSalvador}
  Campo Grande: R$ ${faturamentoMedioCG}
  Curitiba: R$ ${faturamentoMedioCWB}
`

console.log(concatenacao)
