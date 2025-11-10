// 14)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName" და ფუნქცია სახელად getFullName(),
// რომელიც დააბრუნებს შემდეგნაირ ტექსტს --> `ჩემი სახელია ... და ჩემი გვარია ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი
console.log('---------------14-----------------')

const student4={
  firstName:'MERAB',
  'lastName':'Dvalishvili',
  func:function getFullName(){
    return `ჩემი სახელია ${this.firstName} და ჩემი გვარია ${this.lastName} ` 
  }
}
console.log(student4.func())
