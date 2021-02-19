let password = 'A'
// Ou par exemple let password = '1' ou encore : let password = ' '

const crackme2 = (password) => {
  if (password.length === 1) {
    console.log('GOOD')
    //On voit ici que la variable "password" est strictement assignée a un seul et unique caractère.

  } else {
    console.log('BAD')
  }
}

crackme2(password)