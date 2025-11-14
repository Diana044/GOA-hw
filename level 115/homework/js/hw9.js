// 9)დააგენერირე 5 შემთხვევითი მთელი რიცხვი 1-დან 100-მდე და იპოვე ამ რიცხვებიდან
// მინიმალური და მაქსიმალური მნიშვნელობა Math.random(), Math.floor(), Math.min() და Math.max()-ის გამოყენებით.

let num1=Math.floor(Math.random()*100)
let num2=Math.floor(Math.random()*100)
let num3=Math.floor(Math.random()*100)
let num4=Math.floor(Math.random()*100)
let num5=Math.floor(Math.random()*100)

console.log('nums:', num1,num2,num3,num4,num5)

console.log('max',Math.max(num1,num2,num3,num4,num5))
console.log('min',Math.min(num1,num2,num3,num4,num5))