function disemvowel(str) {
  let newStr=''
  let i=0
  while(i<str.length){
    let char=str[i]
    if(char !='a' && char!='e' && char !='i' && char!='o' && char !='u' && 
       char!='A' &&  char !='E' && char!='I' && char !='O' && char!='U' ){
       newStr+=char
       }
    i++ 
  }
  return newStr
}

function filter_list(l) {
  let newArr=[]
  for(let i=0; i<l.length;i++){
    if(typeof l[i]==='number'){
      newArr.push(l[i])
    }
  }
  return newArr
}

function elimination(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i]=== arr[j]){
        return arr[i]
      }
    }
  }
  return null
}

function minMax(arr){
  let min=arr[0]
  let max=arr[0]
  for(let i=1; i<arr.length; i++){
    if(arr[i]<min){
      min=arr[i]
    }else if(arr[i]> max){
      max=arr[i]
    }
  }
  return[min, max]
}