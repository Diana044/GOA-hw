// მოცემული მასივიდა map() ფუნქციის გამოყენებით  თითოეული ასაკი გაამრავლე ორზე და გამოიტანე
//  შევლილი მასივი 

const users = [
  {name: "Nika", age: 20},
  {name: "Ana", age: 25},
  {name: "Gio", age: 17}
]; 

const newArr = users.map((eachObj)=>{
    const{name,age}=eachObj
    return {
        name:name,
        age:age*2
    }
})

console.log(newArr)
