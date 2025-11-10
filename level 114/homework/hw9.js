// 9)შექმენი ობიექტი fruit, რომელსაც ექნება "name", "color", "taste", "size".
// ყველას მიანიჭე სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც იწყება ასო "a"-ზე.
console.log('---------------9-----------------')
let fruit={
  name:'ananasi',
  color:'yellow',
  taste:'adono',
  'size':'medium'
}

// #1
// let fruitValues=Object.values(fruit)
// for(let i of fruitValues){
//   if(i[0]=='a'){
//     console.log(i)
//   }
// }

// #2
for(let i in fruit){
  if(fruit[i][0]==='a'){
    console.log(fruit[i])
  }
  

}
