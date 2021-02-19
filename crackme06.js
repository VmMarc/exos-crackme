let password = '1a2b!**********'

const crackme6 = (password) => {
  if (password[0] === '1') {
    if (password[1] === 'a') {
      if (password[2] === '2') {
        if (password[3] === 'b') {
          if (password[4] === '!' && password.length > 13) {
            console.log('OK')
            /* Les conditions pour que le mot de passe soit valide sont
            que les 5 premiers caractères soit "1a2b!"
            et que la longueur de celui-ci soit superieur a 13 caractères*/
          } else {
            console.log('BAD')
          }
        } else {
          console.log('BAD')
        }
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}

crackme6(password)