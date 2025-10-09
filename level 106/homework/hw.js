// function basicOp(operation, value1, value2){
//   if(operation=== “+”){
//     return value1+value2
//   }else if(operation===“-“){
//     return value1-value2
//   }else if(operation === “*”){
//     return value1*value2
//   }else if(operation === “/“){
//     return value1/value2
//   }
//  return 0
// }

function areYouPlayingBanjo(name) {
  if(name[0].toLowerCase()==='r'){
    return name +' plays banjo'
  }
  return name + " does not play banjo"
}


console.log(areYouPlayingBanjo('diana'))
console.log(areYouPlayingBanjo('Ronaaldo'))



function countSheep(num){
  let num1=''
  for(let i=1;i<num+1 ; i++){
    num1+=String(i)+" sheep..."
  }
  return num1
}
