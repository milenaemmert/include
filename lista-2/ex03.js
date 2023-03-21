function escolheLiderDaTurma(aluno1, mPort1, mMat1, aluno2, mPort2, mMat2) {
  if(mPort1 > mPort2) {
    console.log('líder: ' + aluno1)
  } else if(mPort2 > mPort1) {
    console.log('líder: ' + aluno2)
  } else if(mPort1 == mPort2) {
    if(mMat1 > mMat2) {
      console.log('líder: ' + aluno1)
    } else {
      console.log('líder: ' + aluno2)
    }
  }
}

escolheLiderDaTurma('fulano', 9, 7, 'fulana', 9, 6)