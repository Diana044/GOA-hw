// 12)მოცემულია მასივი პროდუქტების ობიექტებით:
// გამოიყენე reduce, რათა გამოითვალოს პროდუქტების საერთო ფასი.
// დაბეჭდე შედეგი.

const products = [
    { name: "ვაშლი", price: 2 },
    { name: "ბანანი", price: 3 },
    { name: "სტაფილო", price: 1 }
];
let prices = products.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue.price
},0)

console.log(`whole price of products  is  ${prices}`)