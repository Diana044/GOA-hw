
// 3)შექმენი კლასი Calculator, რომელსაც ექნება მეთოდები:

// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

class Calculator{
    add(a,b){
        return a+b
    }
    subtract(a,b){
        return a-b
    }
    multiply(a,b){
        return a*b
    }
    divide(a,b){
        return a/b
    }
}

let numbers1 = new Calculator()
console.log(numbers1)
console.log(numbers1.add(2,3))
console.log(numbers1.subtract(10,3))
console.log(numbers1.multiply(2,6))
console.log(numbers1.divide(20,2))


// class Calculator{
//     constructor(a, b) {
//         this.a = a
//         this.b = b
//     }

//     add(){
//         console.log(this.a+this.b) 
//     }
//     subtract(){
//         console.log(this.a-this.b) 
//     }
//     multiply(){
//         console.log(this.a*this.b)
//     }
//     divide(){
//         console.log(this.a/this.b)
//     }
// }

// let numbers2 = new Calculator(20,5)

// console.log(numbers2)
// numbers2.add()
// numbers2.subtract()
// numbers2.multiply()
// numbers2.divide()



