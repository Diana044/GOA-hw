function mostFrequentItemCount(collection) {
  if (collection.length === 0){
    return 0
  }

  let counts=[]
  let i =0

  while (i < collection.length){
    let counter = 0

    for (let j=0 ;j < collection.length; j++){
      if (collection[j] === collection[i]){
        counter = counter + 1
      }
    }

    counts.push(counter)
    i=i + 1
  }

  let biggest =0
  let k =0

  while (k < counts.length){
    if (counts[k] > biggest){
      biggest = counts[k]
    }
    k = k + 1
  }

  return biggest
}