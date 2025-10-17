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
function vaporcode(string) {
  let rsl = ''
  for (let i = 0; i < string.length; i++){
    if (string[i] != " "){
      rsl += string[i].toUpperCase() + "  "
    }
  }
  return rsl.slice(0, rsl.length-2)
}
function vaporcode(string) {
  let noSpaces = ""             
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {     
      noSpaces += string[i]
    }
  }

  noSpaces = noSpaces.toUpperCase()


  let result = ""
  for (let i = 0; i < noSpaces.length; i++) {
    result += noSpaces[i]
    if (i !== noSpaces.length - 1) {
      result += "  "        
    }
  }

  return result
}