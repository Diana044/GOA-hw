//  forEach ფუნქციის გამოყენებით გაარკვიე რამდენი წლის იქნება თითოეული იუზერი 15 წლის 
// შემდეგ. ჯერ გამოიტანე მათი სახელები და გვერდით რამდენის წლის იქნებიან მომავალში.

 const users = [
  {name: "Nika", age: 20},
  {name: "Ana", age: 25},
  {name: "Gio", age: 17}
]

users.forEach((objects,index)=>{
    console.log(objects.name,objects.age+15,index)
})
console.log('------------------------')
users.forEach((objects,index)=>{
    const{name,age}=objects
    console.log( `students name is ${name}, current age is ${age},and age after 15 years is ${age+15}, this is element on index ${index} `)
})
