// 11)მოცემულია მასივი:
// გამოიყენე reduce, რათა გამოითვალოს ყველა რიცხვის ჯამი.
// დაბეჭდე შედეგი.

const numbers = [5, 10, 15, 20];


let newArr =  numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
},0)

console.log(newArr)