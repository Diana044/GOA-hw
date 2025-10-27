function calculate(string) {
  let split=string.split(" ")
  if(string.includes('loses')){
    return Number(split[2])-Number(split[6])
  }else{
    return Number(split[2])+Number(split[6])
  }
}




function counterEffect(hitCount) {
 let bigarr=[]
 for(let i=0;i<hitCount.length;i++){
   let arr2=[]
   for(let j=0; j<=Number(hitCount[i]);j++){
     arr2.push(j)
   }
    bigarr.push(arr2)
 }
  return bigarr
}


function zebulansNightmare(functionName) {
  let str=''
  let split=functionName.split('_')
  let count = 0
  for(let i of split){
    if (count>0){
      str+=i[0].toUpperCase()+i.slice(1).toLowerCase()
    }else{
      str+=i
    }
    count++
  }
  return  str
}


function killcount(counselors, jason){
  let arr=[]
  for(let i=0; i<counselors.length; i++){
    if(counselors[i][1]<jason){
      arr.push(counselors[i][0])
    }
  }
  return arr
}