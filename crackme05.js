let password = '4321drowssap'

const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'password1234') {
    console.log('GOOD')
    /*La fonction ".split" transforme notre mots de passe en tableau,
    la fonction ".reverse" inverse le contenue de ce tableau,
    la fonction ".join" renvoie une nouvelle chaîne de caractères en concaténant tous les éléments du tableau*/
  } else {
    console.log('BAD')
  }
}

crackme5(password)