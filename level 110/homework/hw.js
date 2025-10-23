
function validParentheses(parenStr) {
  if (parenStr.length === 0) return true
  let count1=0
  let count2=0
  
  for(let i=0;i<parenStr.length; i++){
    if(parenStr[i]=='('){
      count1++
    }else if (parenStr[i]== ")"){
      count2++
    }
    if (count2 > count1){
      return false
  }
  }
  
  
  if(count1===count2 && (parenStr[0]==='(' && parenStr[parenStr.length-1]===')')){
    return true
  }else{
    return false
  }
}

console.log(validParentheses('((())()((()()('))
console.log(validParentheses('()()')) 

