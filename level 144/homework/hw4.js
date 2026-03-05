// შექმენით პიროვნების ობიექტი, რომელსაც აქვს სახელი, გვარი და მისამართი (მისამართი ცალკე ობიექტია და შეიცავს ქალაქსა და ქვეყანას).
// დავალება: დესტრუქციის გამოყენებით მიიღე სახელი, ქალაქი და ქვეყანა.

let  person  = {
    name  : 'zangozavr',
    sur : 'moskovich',
    address : {
        city : 'chernobil',
        country : 'ukraina'
    }
}
const {name} =  person
const {address} =  person
const {city, country} = address

console.log( name,city, country)
