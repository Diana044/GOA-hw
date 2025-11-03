// 1)შექმენი ობიექტი person, რომელსაც ექნება ველები: name, age, city.
// კონსოლში გამოიტანე მხოლოდ name და city.

let person ={
    name : 'lasha',
    'age' : 24,
    city : 'batumi',
}

console.log(person.name, person.city)

// 2)შექმენი ობიექტი book რომელსაც ექნება key ები: title, author, pages.
// გამოიტანე მხოლოდ author-ის მნიშვნელობა.

let book = {
    title: "დათა თუთაშხია",
    author: "ჭაბუა ამირეჯიბი",
    pages: 800
}
console.log(book.author)
// 3)შექმენი ობიექტი student, რომელსაც ექნება key ები: firstName, lastName, grade, age.
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value.

let student ={
    firstName : 'Geronti',
    LastName : 'Chalauri',
    grade : '+'+ 9999999,
    age : 20
}

console.log(Object.values(student))


// 4)შექმენი ობიექტი book ველებით: title, author, pages.
// Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key.
// ასევე
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value.
let  book1 ={

}
// 5)შექმენი ობიექტი movie ველებით: name, genre, rating.
// Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key ცალ ცალკე ხაზზე (for loop)
// ასევე
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value ცალ ცალკე ხაზზე (for loop)

// 6)შექმენი ობიექტი student = {name: "Gio", age: 16, grade: "A"}
// წაშალე age და grade ფროფერთიები

// 7)შექმენი ობიექტი car = {brand: "Toyota", model: "Camry", year: 2020}
// წაშალე model და დაბეჭდე კონსოლში მხოლოდ დარჩენილი ობიექტი(რომ დაწრუნდე მართლა ამოიშალა თუარა)

// 8)შექმენი ობიექტი book = {title: "1984", author: "Orwell", pages: 328}
// წაშალე pages  და კონსოლში დაბეჭდე ის  ქიები რომლებიც დარჩა ობიექტში.

// 9)შექმენი ობიექტი person = {name: "Ana", age: 20}
// დაამატე ახალი key 
// სახელად city მნიშვნელობით "Tbilisi".
// ასევე დაამატე height მნიშვნელობით --> 1.90


// 10)შექმენით ობიექტი რომელიც იქნება ცარიელი,შენი დავალებაა რომ ამ ობიექტშ დაამატო 5 property,შემდეგ დააკონსოლლოგეთ(რომ შეამოწმოთ შეივსო(დაემატა)თუ არა ,და ამის შემდეგ ამოშალოთ 2 property (ბოლოს დააკონსოლლოგეთ რომ ნახოთ ამოიშალა თუარა)

// 11)შექმენი ობიექტი phone = {brand: "Apple"}
// დაამატე model და price ველები, შემდეგ ტერმინალში გამოიტანეთ ყველა value სიის სახით და ასევე ყველა key სიის სახით

// 12)შექმენი ობიექტი --> car = {"car brand" : "bmw" , "car model" ; "g30" , "car year" : "2013" }
// ცონსოლში გამოიტანე ცალ ცალკე ყველა value გამოიყენეთ მეორე გზა რომელიც ვისწავლეთ ობიექტიდან ელემენტის წამოსაღებად

// 13)აუცილებლად
// გადახედეთ რესურსებს