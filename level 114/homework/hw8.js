// 8)შექმენი ობიექტი student, რომელსაც ექნება "age", "grade", "height", "score" ყველა მათგანს ვალუებად მიანიჭეთ მხოლოდ ნამბერ ტიპის მონაცემები.
// for...in ციკლით გადაუარე ამ ობიექტს და კონსოლში გამოიტანე მხოლოდ ის ვალუები რომელიც მეტია 50 ზე 
console.log('---------------8-----------------')
const student2={
  age:19, 
  "grade":8,
  heigth:190,
  'score':5
}
let st2Values=Object.values(student2)
console.log('list of value:',st2Values)
for(let  i of st2Values){
  if(i>30){
    console.log('vlaues more than 30:',i)
  }
}
// #2
// for(let i in student2){
//   if(student2[i]>30){
//     console.log(student2[i])
//   }
// }



// 8)შექმენი ობიექტი movie, რომელსაც ექნება "title", "genre", "rating", "year" და ყველას მიანიჭეთ სტრინგ ტიპის მონაცემი.
// for...in ციკლით გადაუარეთ ობიექტს და გამოიტანეთ მხოლოდ ის სტრინგები რომელთა სიგრძე ნაკლებია 4 ზე
console.log('---------------8-----------------')
let movie2={
  'title':'bandermold',
  'ganre':'horror',
  'rating':7.5,
  'year':2012
}


