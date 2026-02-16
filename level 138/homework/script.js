// 1)კომენტარის სახით ახსენით თუ რა არის truthy და falsy მნშიშვნელობები
// falsy   values  0
// empty strings 
// null,
// undefined
// NaN


let values = [0, "0", "", "false", false, null, undefined, [], {}, NaN, 25];

// ამ სიიდან :

// ცალკე მასივში ჩაწერე truthy მნიშვნელობები
let truthy=[]
let falsy=[]

// ცალკე მასივში ჩაწერე falsy მნიშვნელობები
for(let i of values){
    if(i){
        truthy.push(i)
    }else{
        falsy.push(i)
    }
}
// გამოიყენე for of და სიის მეთოდი რომელიც ამატემს ელემენტებს სიაში

// დაბეჭდე ორივე
console.log(truthy)
console.log(falsy)


// 3)შექმენი ფუნქცია register(username, password) 
function register(username, password) {
    if(username && password){
        console.log("Registration successful")
    }else{
        console.log("All fields are required")
    }
}

register('','333')
register('diana','333')
register(undefined,0)


// თუ ორივე მნიშვნელობა truthy არის → დაბეჭდე "Registration successful"

// თუ რომელიმე falsy არის → დაბეჭდე "All fields are required"

// გამოიძახე ფუნქცია სხვადასხვა მნიშვნელობებით და შეამოწმე შედეგი.

// 4)შექმენი ცვლადი

let userName = ""
let newVar = userName || "guest"
console.log(newVar)
// შემდეგ შექმენი ცვლადი და ამ ცვლადს მიენიჭოს --->

// თუ userName არის truthy მიენიჭოს მასში შენახული მნიშვნელობა და თუ userName არ არის truthy მიენიჭოს "guest"

// გამოიყენე || ოპერატორი

// 5)ternary ოპერატორის გამოყენებით დააკონსოლლოგე:
let num=2
num>0 ? console.log('Positive') :  console.log("Negative or Zero")
// "Positive" თუ რიცხვი მეტია 0-ზე

//Positiveსხვა შემთხვევაში

// 6)ternary-ის გამოყენებით განსაზღვრე არის თუ არა რიცხვი ლუწი.

// გამოტანე:
num%2===0 ?  console.log('even') :   console.log('odd')
// "Even" თუ ლუწია

// "Odd" თუ კენტია(სხვა შემთხვევაში)

// 7)შექმენი ცვლადი age.
let age=18
age>=18?  console.log('Adult') :   console.log('Minor')

// ternary-ის გამოყენებით:

// თუ ასაკი 18-ზე მეტია ან ტოლია → "Adult"

// სხვა შემთხვევაში → "Minor"

// 8)მოცემულია ქულა score.
// ternary-ის გამოყენებით დააბრუნე:
let score = 75

let result = 
    score >= 90 ? "Excellent" : 
    score >= 70 ? "Good"  : "Fail"     

console.log(result);

// "Excellent" თუ 90+

// "Good" თუ 70–89

// "Fail" სხვა შემთხვევაში

// (აქ უკვე ჩაშენებული ternary დასჭირდებათ რაზეც  გაკვეთილზეც ვისაუბრეთ)

// # დავალებების გარეშე არც ერთი მოსწავლე შემოხვიდეთ(გახვალთ გააკეთებთ და შემოხვალთ გაკვეთილზე)