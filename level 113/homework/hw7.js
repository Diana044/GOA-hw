// 7)შექმენი ობიექტი car = {brand: "Toyota", model: "Camry", year: 2020}
// წაშალე model და დაბეჭდე კონსოლში მხოლოდ დარჩენილი ობიექტი(რომ დაწრუნდე მართლა ამოიშალა თუარა)

let car={
    brand: "Toyota",
    model: "Camry",
    year: 2020
}

console.log(car)
delete car.model
console.log(car)

console.log('------------------------')