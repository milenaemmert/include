let baseRetangulo = 10
let alturaRetangulo = 2

let raioCirculo = 5

let baseTriangulo = 8
let alturaTriangulo = 5

let areaRetangulo = baseRetangulo * alturaRetangulo
let areaCirculo = Math.round(Math.PI * Math.pow(raioCirculo, 2))
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

console.log(`A área do retângulo é: ${areaRetangulo}`)
console.log(`A área do círculo é: ${areaCirculo}`)
console.log(`A área do triângulo é: ${areaTriangulo}`)