function reverseLetter(str) {
  let alp = 'qwertyuiopasdfghjklzxcvbnm'
  let str1=''
  for(let i=str.length; i>=0;i--){
    if (alp.includes(str[i])){
      str1+=str[i]
    }
  }
  return str1
}