// შექმენით სტუდენტის ობიექტი, რომელსაც აქვს სახელი, ასაკი და ფაკულტეტი.
// დავალება: დესტრუქციის გამოყენებით შექმენი ცალკე ცვლადები თითოეული კუთვნილებისთვის.


const stInfo = {
    Name: "max",
    age: 21,
    faculty: "business"
}

const { Name, age, faculty } = stInfo

console.log(`
    from the object stInfo,
    students name is ${Name}, 
    students  age is  ${age},
    and they study in ${faculty} faculty,
    `)