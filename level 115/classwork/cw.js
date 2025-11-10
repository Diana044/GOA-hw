let num1=4
let num2=55
let num3=60
let num4=2
let num5=4
// მაქსიმუმი და მინიმუმი
console.log(Math.max(num1,num2,num3,num4,num5))
console.log(Math.min(num1,num2,num3,num4,num5))

console.log('------------------')
// დამრგვალება

console.log(Math.round(4.7), Math.round(9.1),Math.round(-3.6)) 
console.log(Math.ceil(4.7), Math.ceil(9.1),Math.ceil(-3.6)) 
console.log(Math.floor(4.7), Math.floor(9.1),Math.floor(-3.6)) 

console.log('------------------')
// ხარისხში აყვანა
console.log(Math.pow(num1,num4))
console.log(Math.pow(5, 2))

console.log('------------------')

// კვადრატული ფესვი

console.log(Math.round(Math.sqrt(25)))

console.log('------------------')

//  აბსოლუტური მნიშვნელობა

console.log(Math.abs(-8.3))

console.log('------------------')

// function

function canculate(num) {
  let rslt1 = Math.floor(num)
  let rslt2 = Math.pow(num, 2)
  let rslt3 = Math.sqrt(num)

  console.log( rslt1)
  console.log( rslt2)
  console.log(rslt2)
}

canculate(7.8)

// pitaagoraas teorema

function pitagora(a,b){
    let a2=Math.pow(a,2)
    let b2=Math.pow(b,2)
    let sum=a2+b2
    let c=Math.sqrt(sum)
    return c
}

pitagora(2,2)