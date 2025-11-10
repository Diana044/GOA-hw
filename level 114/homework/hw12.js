// 12)შექმენი ობიექტი person, რომელსაც ექნება "name" და "age".
// ობიექტში დაამატე ფუნქცია სახელად showInfo, რომელიც კონსოლში გამოიტანს:`ჩემი სახელია ... და მე ვარ ... წლის ,გამოიყენე this keyword ი` ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი
console.log('---------------12-----------------')
let person3={
  name:'ana',
  age:20,
}

person3.func= function showInfo(){
    return `ჩემი სახელია ${this.name} და მე ვარ ${this.age} წლის `
  }
console.log(person3.func())
  