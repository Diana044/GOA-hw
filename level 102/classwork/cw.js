// 1)შექმენით ფუნქცია ,შემდეგ შექმენი ცვლადი საცაც შეინახავთ თქვენს სახელს,თქვენი დავალებაა რომ კონსოლში გამოიტანოთ hello {name}

function func(){
    let name='diana'
    return `Hello ${name}`
}

console.log(func())

// 2)შექმენი ფუნქცია,შემდეგ შექმენით 3 ცვლადი,1 ში შეინახეთ სახელი მეორეში ასაკი და მესამეში საცხოვრებელია დგილი,თქვენი დავალებაა რომ ფუნქციამ კონსოლში გამოიტანოს hello , my name is {name} and i am {age} years old, i live in {city} , გამოიძახე ფუნქცია 5 ჯერ 

function funcs(name, age, place){
    return  `Hello my name is ${name} and i am${age} i live in ${place}`
}

console.log(funcs('diana',18, 'tbilisi'))
console.log(funcs('diana',18, 'tbilisi'))
console.log(funcs('diana',18, 'tbilisi'))
console.log(funcs('diana',18, 'tbilisi'))
console.log(funcs('diana',18, 'tbilisi'))