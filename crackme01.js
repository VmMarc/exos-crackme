let password = 'password1234'

const crackme1 = (password) => {
  if (password === 'password1234') {
    console.log('GOOD')

    /* On voit bien ici que la variable est bien strictement assignée a la string "password1234" 
    Et que du coup le console.log affiche bien le message "GOOD"
    */

  } else {
    console.log('BAD')
  }
}

crackme1(password)