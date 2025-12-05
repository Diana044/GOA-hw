// შექმენით ობიექტი კონსტრუქტორის გამოყენებით სადაც იქნებიან სხვადასხვა ცხოველები და ყველას ასევე ექნება საკუთარი ასაკი

function Animals(name, age) {
    this.name = name
    this.age = age
}

let animal1 = new Animals('cat', 2)
let animal2 = new Animals('rat', 23)
let animal3 = new Animals('dog', 11)
let animal4 = new Animals('kenguru', 16)
let animal5 = new Animals('giraffe', 32)

console.log(animal1, animal2, animal3, animal4, animal5)

let prmpt1=prompt('enter name')
let prmpt2=prompt('enter password')