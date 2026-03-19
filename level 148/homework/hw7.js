// 7)ზემოთ მოცემულ ობიექტში ==> .

// იპოვე პირველი თანამშრომელი, რომლის ასაკი < 25.

// დაბეჭდე თანამშრომლის ობიექტი და ინდექსი.

const employees = [
    { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
    { name: "გიორგი", age:30, department: "HR", salary: 900 },
    { name: "ანა", age: 22, department: "IT", salary: 1000 },
    { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
    { name: "ნინო", age: 35, department: "IT", salary: 2000 }
];

const index=employees.findIndex(eachObj=> eachObj.age<25)



console.log(index, employees[index])