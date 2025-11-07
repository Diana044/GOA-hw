// 1)შექმენი ობიექტი შენს შესახებ,შენი დავალებაა რომ გამოიტანო კიები და ვალუები ცალ ცალკე for in ის გამოყენებით

// 2)შექმენი ობიექტი ავტომობილის შესახებ ,გქონდეს year , model , milage , color , შენი დავალებაა რომ შექმნა სია ვალუებისა,შემდეგ გადაუარო ამ სიას და გმაოიტანო ცალ ცალკე თითოეული value გამოიყენე for of

let abMyself={
    name:'diana',
    surname:'dzukaevi',
    age:18,
    gender: 'female'
}
for(let i in abMyself){
    console.log('keys', i)
    console.log('values', abMyself[i])
}

let car={
    year: 1999,
    model:'bmw',
    milage: 432423,
    color:'black'
}
let carValues=Object.values(car)
for(let i of carValues){
    console.log(i)
}