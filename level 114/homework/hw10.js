// 10)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName", "class", "id".
// ყველა იყოს სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომელთა სიგრძე ტოლია 3-ის.
// ```
console.log('---------------10-----------------')
let student3={
  firstName:'marina', 
  lastName:'marinadze', 
  "class,":'132', 
  "id":'46223008342'
}

for(let i in student3){
  if(student3[i].length===3){
    console.log('key:',i,'value which length equals to 3:', student3[i])
  }
}
