//  მოცემულია ობიექტების მასივი. შექმენი ახალი მასივი მხოლოდ სახელებით. 


const users = [
  {name: "Nika", age: 20},
  {name: "Ana", age: 25},
  {name: "Gio", age: 17}
];

const onlyNames = users.map(objects=>{
    const{name}= objects
    return [name]
})

console.log(onlyNames)