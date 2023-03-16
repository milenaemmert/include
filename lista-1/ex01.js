var nome = 'Milena'
var telefone = '123456789'
var possuiConvenio = false
var profissao = 'dev'
var salario = 1000

var concatenacao

if(possuiConvenio) {
  concatenacao = `A ${nome} é ${profissao}, seu salário é de R$ ${salario}, e seu telefone para contato é ${telefone}. Ela possui convênio.`
} else {
  concatenacao = `A ${nome} é ${profissao}, seu salário é de R$ ${salario}, e seu telefone para contato é ${telefone}. Ela não possui convênio médico.`
}

console.log(concatenacao)
