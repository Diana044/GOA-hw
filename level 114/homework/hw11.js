// 11)შექმენი ობიექტი book, რომელსაც ექნება "title", "author", "genre", "lang".
// ყველა მიანიჭე სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც შეიცავენ ასო "o"-ს.
console.log('---------------11-----------------')
let book2={
  title:'worship', 
  author:"Carson", 
  "genre":'drama', 
  "lang":'English'
}
for(let i in book2){
  if(book2[i].includes('o')){
    console.log('value that includes "o" is',book2[i])
  }
}


