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


// 2)შექმენი ობიექტი car, რომელსაც ექნება "car brand", "model name" და "year".
// კონსოლში გამოიტანე "car brand" და "model name" მნიშვნელობები.
console.log('---------------2-----------------')
let car={
    "car brand":'Mercedes-Benz,',
    "model name":'C-CLASS',
    "year":1993
}

console.log(
  'The car brand is',
  car['car brand'],
  'the model name is',
  car['model name']
)

// 3)შექმენი ობიექტი book, რომელსაც ექნება "book title", "author name" და "page count".
// კონსოლში გამოიტანე "book title" და "author name".
console.log('---------------3-----------------')

let book={
  "book title":'merandcle', 
  "author name":'thebotlest',
  "page count":435
}
console.log(
  book["book title"],
  book['author name']
)

// 4)შექმენი ობიექტი student, რომელსაც ექნება "full name", "grade level" და "favorite subject".
// კონსოლში გამოიტანე "favorite subject" მნიშვნელობა.
console.log('---------------4-----------------')
let student={ 
  "full name":'george lortiqfanidze',
  "grade level":11, 
  "favorite subject":'Biology'
}

console.log(student['favorite subject'])

// 5)შექმენი ობიექტი movie, რომელსაც ექნება "name, "release year" და "main actor".
// კონსოლში გამოიტანე name და "main actor" მნიშვნელობები.

console.log('---------------5-----------------')

const movie ={
  name:'SKT,' ,
 'release year':2004,
 'main actor':'jason kimberling'
}
console.log(
  'movie name:',
  movie.name,
  'main actro:',
  movie['main actor']
)
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
// 7)შექმენი ობიექტი car, რომელსაც ექნება "brand", "model" და "year".
// for...in ციკლით კონსოლში დაწერე:
// 👉 "brand: BMW" — მსგავსი ფორმატით (ანუ key: value). გამოიყენეთ სტრინგ ფორმატი(f string) რომ ვიყენებდით ხოლმე პითონში ეგრე რესურსებში ჩაგდებულია ბოლოს და შეამოწმეთ
console.log('---------------7-----------------')
var car2={
  "brand":'AUDI', 
  "model":'R8',
  "year":31232
}
for(let i in car2){
  console.log(
     ` ${i} : ${car2[i]} `
  )
}
// 8)შექმენი ობიექტი student, რომელსაც ექნება "age", "grade", "height", "score" ყველა მათგანს ვალუებად მიანიჭეთ მხოლოდ ნამბერ ტიპის მონაცემები.
// for...in ციკლით გადაუარე ამ ობიექტს და კონსოლში გამოიტანე მხოლოდ ის ვალუები რომელიც მეტია 50 ზე 
console.log('---------------8-----------------')
const student2={
  age:19, 
  "grade":8,
  heigth:190,
  'score':5
}
let st2Values=Object.values(student2)
console.log('list of value:',st2Values)
for(let  i of st2Values){
  if(i>30){
    console.log('vlaues more than 30:',i)
  }
}
// #2
// for(let i in student2){
//   if(student2[i]>30){
//     console.log(student2[i])
//   }
// }



// 8)შექმენი ობიექტი movie, რომელსაც ექნება "title", "genre", "rating", "year" და ყველას მიანიჭეთ სტრინგ ტიპის მონაცემი.
// for...in ციკლით გადაუარეთ ობიექტს და გამოიტანეთ მხოლოდ ის სტრინგები რომელთა სიგრძე ნაკლებია 4 ზე
console.log('---------------8-----------------')
let movie2={
  'title':'bandermold',
  'ganre':'horror',
  'rating':7.5,
  'year':2012
}
// 9)შექმენი ობიექტი fruit, რომელსაც ექნება "name", "color", "taste", "size".
// ყველას მიანიჭე სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც იწყება ასო "a"-ზე.
console.log('---------------9-----------------')
let fruit={
  name:'ananasi',
  'color':'yellow',
  taste:'adono',
  'size':'medium'
}

// #1
// let fruitValues=Object.values(fruit)
// for(let i of fruitValues){
//   if(i[0]=='a'){
//     console.log(i)
//   }
// }

// #2
for(let i in fruit){
  if(fruit[i][0]==='a'){
    console.log(fruit[i])
  }
  

}
// 10)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName", "class", "id".
// ყველა იყოს სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომელთა სიგრძე ტოლია 3-ის.
// ```
console.log('---------------10-----------------')
let student3={
  "firstName":'marina', 
  "lastName":'marinadze', 
  "class,":'132', 
  "id":'46223008342'
}

for(let i in student3){
  if(student3[i].length===3){
    console.log('key:',i,'value which length equals to 3:', student3[i])
  }
}
// 11)შექმენი ობიექტი book, რომელსაც ექნება "title", "author", "genre", "lang".
// ყველა მიანიჭე სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც შეიცავენ ასო "o"-ს.
console.log('---------------11-----------------')
let book2={
  "title":'worship', 
  "author":"Carson", 
  "genre":'drama', 
  "lang":'English'
}
for(let i in book2){
  if(book2[i].includes('o')){
    console.log('value that includes "o" is',book2[i])
  }
}
// 12)შექმენი ობიექტი person, რომელსაც ექნება "name" და "age".
// ობიექტში დაამატე ფუნქცია სახელად showInfo, რომელიც კონსოლში გამოიტანს:`ჩემი სახელია ... და მე ვარ ... წლის ,გამოიყენე this keyword ი` ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი
console.log('---------------12-----------------')
let person3={
  name:'ana',
  age:20,
  func: function showInfo(){
    return `ჩემი სახელია ${this.name} და მე ვარ ${this.age} წლის `
  }
}
console.log(person3.func())
  
// 13)შექმენი ობიექტი car, რომელსაც ექნება "brand" და "model".
// ობიექტში დაამატე ფუნქცია სახელად fullName, რომელიც დააბრუნებს შემდეგნაირ ტიპის ტექსტს ---> `მე მყავს ... რომლის მოდელიც არის ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი
console.log('---------------13-----------------')

let car3={
  'brand':'HONDA',
  'model':'civic',
  funct:function fullName(){
    return `მე მყავს ${this.brand} რომლის მოდელიც არის ${this.model} ` 
  }
}
console.log(car3.funct())
// 14)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName" და ფუნქცია სახელად getFullName(),
// რომელიც დააბრუნებს შემდეგნაირ ტექსტს --> `ჩემი სახელია ... და ჩემი გვარია ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი
console.log('---------------14-----------------')

const student4={
  firstName:'MERAB',
  'lastName':'Dvalishvili',
  func:function getFullName(){
    return `ჩემი სახელია ${this.firstName} და ჩემი გვარია ${this.lastName} ` 
  }
}

console.log(student4.func())
// 15)შექმენი ობიექტი book, რომელსაც ექნება "title" და "author".ობიექტში დაამატე ფუნქცია სახელად info(),რომელიც დაარეთურნებს შემდეგ ტექსტს --> `ამ წიგნის ავტორი არის ... და ამ წიგნს ქვია ...`  ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი
console.log('---------------5-----------------')


const book3={
  'title':'jason N.',
  'author':'miracles',
  func:function info(){
    return `ამ წიგნის ავტორი არის ${this.title} და ამ წიგნს ქვია ${this.author} ` 
  }
}

console.log(book3.func())