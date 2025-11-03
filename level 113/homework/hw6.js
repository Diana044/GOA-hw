// 6)შექმენი ობიექტი student = {name: "Gio", age: 16, grade: "A"}
// წაშალე age და grade ფროფერთიები

let student= {
    name: "Gio",
    age: 16,
    grade: "A"
}

console.log(student)

delete student.age
delete student.grade

console.log(student)

console.log('------------------------')