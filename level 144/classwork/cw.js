// level 144:
//    1) // შექმენით ერეი სადაც მოათავსებ ზვიანგურ სახელებს შემდეგ კი გააკეთებ მათ დესტრუქციას და დაბეჭდავ სათითადოდ
// // შექმენი ობიექტი შენს შესახებ შემდეგ კი გააკეთე მისი დესტრუქცია და დაბეჭდე მონაცემები

let zvianguriArr=[
    'rogorxaradze', 
    'wyalwagebulidze',
    "vashlatamadze",
    "bangladesahdze",
]

const [name1, name2, name3, name4] = zvianguriArr

console.log(name1, name2, name3,name4)


const myInfo = {
    Name: "diana",
    age: 252,
    city: "tbilisi",
    profession: "developer"
}


const { Name, age, city, profession } = myInfo

console.log(Name)
console.log(age)
console.log(city)
console.log(profession)