// 2) შექმენით სია რომელშიც შეინახავთ რამდენიმე ობიექტს, თითოეული ობიექტი იქნება განსხვავებული, თქვენი მიზანია მოახდინოთ სიის დესტრუქცია შემდეგ კი თითოეული ობიექტის დესტრუქცია და მათი მნიშვნელობების დაბეჭდვა

let arr =[
        {
        Name: "diana",
        age: 252,
    },
    
    {
        year: 2026,
        month : 'march',
    },

    {
        name1:'fufintomanti',
        name2:'pipintisovreshnidze',
    }
]

const [obj1, obj2, obj3,] = arr

console.log(obj1,  obj2,   obj3)

const {Name,age}=obj1
const {year,month}=obj2
const {name1,name2}=obj3

console.log(Name,age)
console.log(year,month)
console.log(name1,name2)


