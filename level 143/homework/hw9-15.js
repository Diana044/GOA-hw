// 9)დაწერე single-line arrow function, რომელიც იღებს ორ რიცხვს და აბრუნებს მათ ჯამს.

let addition = (a,b) => a+b

console.log(addition(5,3))



// 10)დაწერე single-line arrow function, რომელიც იღებს რიცხვს და აბრუნებს:

// "ლუწი" თუ ლუწია
// "კენტი" თუ კენტია
// (გამოიყენე ternary)

let evenOrOdd = n => n % 2 ===  0 ? 'even' : 'odd'
console.log(evenOrOdd(6))


// 11)დაწერე single-line arrow function, რომელიც აბრუნებს გადაცემული რიცხვის კვადრატს.

let  returnQ = n => n**2
console.log(returnQ(4))

// 12)დაწერე single-line arrow function, რომელიც იღებს ტექსტს და აბრუნებს მის სიგრძეს

let  getLength = text => text.length
console.log(getLength('diana'))



// 13)დაწერე single-line arrow function, რომელიც ტექსტს აბრუნებს მთლიანად დიდი ასოებით.


let  makeUppercase = text => text.toUpperCase()
console.log(makeUppercase('diana'))



// 14)დაწერე single-line arrow function, რომელიც იღებს ასაკს და აბრუნებს

// "სრულწლოვანი" თუ >= 18
// "არასრულწლოვანი" თუ < 18

let  getAge = age => age >=18 ? 'სრულწლოვანი' : 'არასრულწლოვანი'
console.log(getAge(23))
console.log(getAge(12))



// 15)დაწერე single-line arrow function, რომელიც იღებს name და age-ს და აბრუნებს ობიექტს ამ ველებით

let  nameAge = (name, age) => (
    {
        userName :name,
        userAge:age,
    }
)
console.log(nameAge('diana', 1321))



let nameAge2 = (name, age) => ({ name, age })
console.log(nameAge2('diana', 1321))
