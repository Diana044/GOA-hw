function enough(cap, on, wait) {
  if(on+wait<=cap){
    return 0
  }else{
    return(cap-on-wait)*-1
  }
}

function positiveSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] > 0) { 
      sum = sum + arr[i]; 
    }
  }

  return sum; 


}

function enough(cap, on, wait) {
  if(on+wait<=cap){
    return 0
  }else{
    return(cap-on-wait)*-1
  }
}

function findAverage(array) {
  let sum = 0
  
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }

  let average = sum / array.length
  return 0
}
