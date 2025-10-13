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
function howMuchILoveYou(nbPetals) {
  for (let i = 1; i <= nbPetals; i++) {
    if (i === nbPetals) {
      if (i % 6 === 1) {
        return "I love you";
      } else if (i % 6 === 2) {
        return "a little";
      } else if (i % 6 === 3) {
        return "a lot";
      } else if (i % 6 === 4) {
        return "passionately";
      } else if (i % 6 === 5) {
        return "madly";
      } else if (i % 6 === 0) {
        return "not at all";
      }
    }
  }
}