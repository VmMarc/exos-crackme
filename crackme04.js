let password = 'ddddddddddunn'

const crackme4 = (password) => {
  let tmp1 = 0
  for (let i = 0; i < password.length; ++i) {
    tmp1 += password.charCodeAt(i)
  }
  if (tmp1 === 1337) {
    console.log('GOOD')
    /* Ici on voit que la somme de la chaine de caractère du mot de passe 
    doit être égal a 1337 par rapport à la table ASCII*/
  } else {
    console.log('BAD')
  }
}

crackme4(password)