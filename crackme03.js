let password = '@**!**********'

const crackme3 = (password) => {
  if (password.length === 14 && password[0] === '@' && password[3] === '!') {
    console.log('GOOD')
    /* Ici le mot de passe doit avoir une longueur de 14 caractères, 
    le premier caractère doit absolument être "@", et le quatrième "!"*/

  } else {
    console.log('BAD')
  }
}

crackme3(password)