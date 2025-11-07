// 11)შექმენი ობიექტი phone = {brand: "Apple"}
// დაამატე model და price ველები, შემდეგ ტერმინალში გამოიტანეთ ყველა value სიის სახით და ასევე ყველა key სიის სახით

const phone={
    brand: 'apple',
}
phone.model='iphone 15'
phone.price=2899+'gel'

const valueslist=Object.values(phone)
console.log('values',valueslist)
console.log('keys',Object.keys(phone))