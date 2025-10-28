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
function top3(products, amounts, prices) {
  let revenues = []
  for (let i = 0; i < products.length; i++) {
    revenues.push(amounts[i] * prices[i])
  }

  let max = 0
  for (let i = 0; i < revenues.length; i++) {
    if (revenues[i] > revenues[max]) {
      max = i
    }
  }

  let middle = -1
  for (let i = 0; i < revenues.length; i++) {
    if (i !== max) {
      if (middle === -1 || revenues[i] > revenues[middle]) {
        middle = i
      }
    }
  }

  let min = -1
  for (let i = 0; i < revenues.length; i++) {
    if (i !== max && i !== middle) {
      if (min === -1 || revenues[i] > revenues[min]) {
        min = i
      }
    }
  }

  return [products[max], products[middle], products[min]]
}
