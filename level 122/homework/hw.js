// 1) შექმენი კონსტრუქტორი სახელიად Cars რომელიც პარამეტრად მიიღებს მანქანის ბრენდს და გამოშვების წელს, შექმენი ასეთი 3 მანქანა.
// 2) შექმენი კონსტრუქტორის ფუნქცია სახელით Person. კონსტრუქტორმა პარამეტრად უნდა მიიღოს: სახელი, გვარი და ასაკი. შექმენი ასეთი სამი ობიექტი.


function Cars1(brand1,year1){
    this.name=brand1
    this.year=year1
}

// let car = new Cars1("bmw", 2011)

function Cars2(brand2,year2){
    this.name=brand2
    this.year=year2
}

function Cars3(brand3,year3){
    this.name=brand3
    this.year=year3
}


function Person(first='diana',sur, age){
    this.firstname=first
    this.lastName=sur
    this.age=age
}

let myMom= new Person('xatuna','dzukaevi',44)
let myBrother= new Person('dato', 'dzukaevi',22)
let mySelf= new Person('diana', 'dzukaevi',18)
