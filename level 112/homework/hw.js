function letterCheck(arr) {
  let str1=arr[0].toLowerCase()
  let str2=arr[1].toLowerCase()
  let i=0
  for(i; i<str2.length; i++){
    if(!str1.includes(str2[i])){
      return false
    }
  }
  return true  
}


function factorial(n){
  if (n < 0 || n > 12) {
    throw new RangeError();
  }
  if (n===0){
    return 1
  }
  
  let result=1
  for(let i=1;i<=n; i++){
    result=result *i
  }
  return result
}
// #2
function factorial(n){
  if (n < 0 || n > 12) {
    throw new RangeError();
  }
  if (n===0){
    return 1
  }
  
  let result=1
  for(let i=n;i>=1; i--){
    result=result *i
  }
  return result
}

function tiyFizzBuzz(sentence) {
  let newStr = ''

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i]

    if ((char >= 'A' && char <= 'Z') && 
      !(char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U')) {
      newStr += 'Iron'
      }else if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
      newStr += 'Iron Yard'
      }else if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      newStr += 'Yard'
    } else {
      newStr += char
    }
  }

  return newStr
}
