// 1)შექმენი მასივი სტუდენტების ობიექტებით:
// გამოიყენე filter რათა შექმნა ახალი მასივი, რომელიც შეიცავს 
// მხოლოდ 18 წლის ან უფრო უფროს სტუდენტებს.
// გამოიყენე მხოლოდ ერთი ხაზის ფუნქცია

const students = [
    { name: "ანა", age: 17, grade: 9 },
    { name: "ლაშა", age: 20, grade: 12 },
    { name: "მარიამი", age: 18, grade: 11 },
    { name: "გიორგი", age: 16, grade: 10 }
];

const legal = students.filter(obj=>obj.age>=18)

console.log(legal)





