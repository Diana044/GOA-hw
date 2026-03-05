// შექმენით პროდუქტის ობიექტი, რომელსაც აქვს დასახელება, ფასი და ვალუტა.
// დავალება: შექმენი ფუნქცია, რომელიც პარამეტრში მიიღებს ამ ობიექტს და დესტრუქციის გამოყენებით გამოიყენებს მის კუთვნილებას პროდუქტის ინფორმაციის გამოსატანად.

const product = {
    name : 'pencil',
    price : 6.99,
    valuta : undefined,
}


const productFunc = ({name,price, valuta='GEL'}) =>  `products name is ${name}, price is :${price},and vaaluta  is :${valuta}`

console.log(productFunc(product))

