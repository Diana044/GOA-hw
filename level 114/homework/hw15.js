// 15)შექმენი ობიექტი book, რომელსაც ექნება "title" და "author".ობიექტში დაამატე ფუნქცია სახელად info(),რომელიც დაარეთურნებს შემდეგ ტექსტს --> `ამ წიგნის ავტორი არის ... და ამ წიგნს ქვია ...`  ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი
console.log('---------------15-----------------')


const book3={
  'title':'jason N.',
  'author':'miracles',
  func:function info(){
    return `ამ წიგნის ავტორი არის ${this.title} და ამ წიგნს ქვია ${this.author} ` 
  }
}

console.log(book3.func())