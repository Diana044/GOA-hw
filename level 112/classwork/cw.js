function consecutive(array) {
  if (array.length <= 0) {
    return 0
  }

  let min = array[0]
  let max = array[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    } else if (array[i] > max) {
      max = array[i]
    }
  }

  let arr= []
  for (let j = min; j <= max; j++) {
    arr.push(j)
  }

  return arr.length - array.length
}
