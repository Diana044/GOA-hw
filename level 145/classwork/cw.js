// 1)შექმენი სიას სადაც შეინახავ რამდენიმე ობიექტს, ყველა ობიექტში იყოს მსგავსი კიები მაგ: name ,surname , email , შენი დავალებაა რომ მოახდინო სიის დესტრუქცია შემდეგ თითოეული ობიექტის დესტრუქცია და მათი მნიშვნელოობების 
// დაბეჭდვა

let users =[
        {
        Name: "max",
        surname:'papava',
        age: 21,
    },
    
    {
        Name: 'levan',
        surname:'yifshidzxe',
        age : 22,
    },

    {
        Name:'mariami',
        surname:'lagvilava',
        age:33,
    },

    {
        Name:'karen',
        surname:'birkin',
        age:51,
    }
]

const [user1, user2, user3,user4,] = users

console.log(user1,  user2,  user3,user4,)

const {Name:userName1,surname:userSur1, age:userAge1,}=user1
const {Name:userName2,surname:userSur2, age:userAge2,}=user2
const {Name:userName3,surname:userSur3, age:userAge3,}=user3
const {Name:userName4,surname:userSur4, age:userAge4,}=user4

console.log(userName1,userSur1,userAge1)
console.log(userName2,userSur2,userAge2)
