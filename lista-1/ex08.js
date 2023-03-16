//18 anos ou + -> obrigatorio
//maior ou igual a 70 anos -> opcional
//16 ou 17 anos -> opcional
//menor que 16 -> não vota

let idade = 70

if(idade >= 18 && idade < 70) {
  console.log('O voto é obrigatório.')
} else if((idade >= 16 && idade < 18) || idade >= 70) {
  console.log('Voto opcional.')
} else if(idade < 16) {
  console.log('Ainda não vota.')
}

//na linha 12, como dentre as opcoes so resta menor que 16, o código pode ficar assim tambem:
/* 
  if(idade >= 18 && idade < 70) {
    console.log('O voto é obrigatório.')
  } else if((idade >= 16 && idade < 18) || idade >= 70) {
    console.log('Voto opcional.')
  } else {
  console.log('Ainda não vota.')
}
*/