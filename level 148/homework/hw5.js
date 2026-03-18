// 5)შექმენი მასივი თანამშრომელთა ობიექტებით:
// მოითხოვე:
// გამოიყენე filter, რათა გამოარჩიო IT დეპარტამენტის თანამშრომლები, რომელთა 
// ანაზღაურება 1500-ზე ნაკლებია და ასაკი 30-ზე ნაკლებია
// დაბეჭდე მხოლოდ მათი სახელები.
// გამოგადგებათ map იც

const employees = [
    { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
    { name: "გიორგი", age: 30, department: "HR", salary: 900 },
    { name: "ანა", age: 22, department: "IT", salary: 1000 },
    { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
    { name: "ნინო", age: 35, department: "IT", salary: 2000 }
];

const newArr= employees.filter(eachObj=>{
    if(eachObj.age<30 &&  eachObj.salary<1500 ){
        console.log(eachObj.name) 
    }
})

