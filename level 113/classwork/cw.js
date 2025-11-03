let country={
    name : 'Georgia',
    capitalCity: 'Tbilisi',
    Language: 'Georgian',
    Religion: 'Christian',
}

console.log(country)

// // ```
// 1)შექმენი ობიექტი ტქვენს შესახებ,უნდა გქონდეთ ინფორმაცია --> სახელი , გვარი , ასაკი , მისამართი, სიმაღლე , სასწავლებელი ადგილი,ამის შემდეგ კონსოლში გამოიტანეთ თითოეული value```

let aboutDiana={
    name :'Diana',
    Surname : 'Dzukaevi',
    Address : 'Varketili',
    Height : 159 +'cm',
    School : 'GOA',
} 

aboutDiana.Gender='female' 
console.log(aboutDiana)

console.log(
    '-------------------------',
    'my gender is',
    aboutDiana.Gender,
    'my name is',
    aboutDiana.name,
    'my surname is',
    aboutDiana.Surname,
    'i live in',
    aboutDiana.Address,
    'my height is',
    aboutDiana.Height,
    'i study at',
    aboutDiana.School,
    '-------------------------',
)
delete aboutDiana.name
