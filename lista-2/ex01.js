//a
for(var i = 1; i <= 50; i++) {
  if(i % 2 == 0) {
    console.log(i + ' é par')
  } else {
    console.log(i + ' é ímpar')
  }
} 

var i = 1 
while(i <= 50) {
  if(i % 2 == 0) {
    console.log(i + ' é par')
  } else {
    console.log(i + ' é ímpar')
  }

  i++
}

//b
for(var j = 1; j <= 100; j++) {
  if(j % 3 == 0) {
    console.log(j)
  } 
} 

var j = 1 
while(j <= 100) {
  if(j % 3 == 0) {
    console.log(j)
  }

  j++
}

//c
for(var k = 100; k >= 0; k -= 2) {
  console.log(i)
}

var k = 100
while(k >= 0) {
  console.log(k)
  k -= 2
} 