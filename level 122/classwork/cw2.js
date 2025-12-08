// შექმენით ობიექტი კონსტრუქტორის გამოყენებით სადაც იქნებიან სხვადასხვა ცხოველები და ყველას ასევე ექნება საკუთარი ასაკი

function Animals(name, age) {
    this.nigger = name
    this.age = age
}

let animal1 = new Animals('cat', 2)
// let animal2 = new Animals('rat', 23)
// let animal3 = new Animals('dog', 11)
// let animal4 = new Animals('kenguru', 16)
// let animal5 = new Animals('giraffe', 32)

console.log(animal1)

