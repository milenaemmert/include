let raioPiscina = 3.5
let alturaPiscina = 1.6

let areaPiscina = Math.round(Math.PI * Math.pow(raioPiscina, 2))
let volumePiscina = areaPiscina * alturaPiscina

let volumePiscinaLitros = Math.round(volumePiscina * 1000)

console.log(volumePiscinaLitros)