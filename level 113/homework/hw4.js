// 4)შექმენი ობიექტი book ველებით: title, author, pages.
// Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key.
// ასევე
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value.
let  book ={
    title :'VEFXISTYAOSANI',
    author :'SHOTA RUSTAVELI',
    pages : 234
}
let bookKeys = Object.keys(book)
let bookValues = Object.values(book)

console.log(
    'keys',bookKeys, 'values', bookValues
)

console.log('------------------------')