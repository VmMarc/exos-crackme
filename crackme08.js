let password = '42*'

const crackme8 = (password) => {
  let tmp1 = password.split('').slice(-3, -1).join('')
  if (Number(tmp1) === 42) {
    console.log('GOOD')
    /*Ici la fonction ".slice" n'inclue pas le dernier caractère (-1) donc "*"
    mais inclue bien les deux premiers (-3) donc le "4" et le "2"*/

  } else {
    console.log('BAD')
  }
}
crackme8(password)