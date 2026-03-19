// 10)იპოვე პირველი თანამშრომელი, რომელიც IT დეპარტამენტშია,
//  ასაკი < 30, ანაზღაურება < 1500, სახელი იწყება “ა” ასოთი.

// დაბეჭდე ინდექსი და ობიექტი.

const employees = [
    { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
    { name: "გიორგი", age:30, department: "HR", salary: 900 },
    { name: "ანა", age: 22, department: "IT", salary: 1000 },
    { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
    { name: "ნინო", age: 35, department: "IT", salary: 2000 }
];

const index=employees.findIndex((eachEmp)=> eachEmp.department='IT' &&eachEmp.age<30 &&  eachEmp.salary<1500  && eachEmp.name.startsWith('ა'))



console.log(index,employees[index])