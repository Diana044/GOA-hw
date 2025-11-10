// ```
// 1)შექმენი ობიექტი person, რომელსაც ექნება შემდეგი ველები: "first name", "last name", "age".
// კონსოლში გამოიტანე "first name" და "age".
console.log('---------------1-----------------')

let person={
    'first name':'lana',
    'last name': 'shvili',
    'age':34
}

console.log(
    person['first name'],
    person['age']
)
// console.log('---------------1-----------------')
// for (let i in person) {
//   if (i === "first name" || i === "age") {
//     console.log(i);
//   }
// }





// 6)შექმენი ობიექტი person, რომელსაც ექნება "name", "age" და "city".
// for...in ციკლით გამოიტანე თითოეული key და მისი value.
console.log('---------------6-----------------')

let person2 ={
  name:'laura',
  age:344,
  city:'london'
}

for(let i in person2){
  console.log('keys', i)
  console.log('values', person2[i])

}







