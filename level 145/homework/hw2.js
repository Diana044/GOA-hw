// დესტრუქციის გამოყენებით გამოიტანე კონსოლში:
// university name
// faculty title
// head name
// student name
// math grade
// js grade


const university = {
  name: "TSU",  
  faculty: {
    title: "Computer Science",  
    head: {
      name: "Irakli",  
      age: 50
    }  
  },  
  students: [
    {
      name: "Ana",  
      grades: {
        math: 90,  
        js: 95
      }  
    }  
  ]  
}  

const { 
    name,
    faculty:{
        title,
        head:{name:headName}
    },
    students:[{
      name:stName,
      grades:{
        math,
        js
      },
    }]
}= university    

console.log(name, title, headName, stName, math, js);