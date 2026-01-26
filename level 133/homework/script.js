// let userAnsw=prompt('enter  name')
// let name='diana'
// if(userAnsw === name){
//     let ifCorrect='name is correct'
//     console.log(ifCorrect)
// }else{
//     let ifCorrect='name is uncorrect'
//     console.log(ifCorrect)

// }



// for(let i=0; i<=10; i++){
//     let count=0
//     count=i
//     let sub=count+i
//     console.log(sub)
// }

// if (true) {
//   var a = 5;
//   let b = 10;
// }
// console.log(a);
// console.log(b);
// დაიბჭდაა  ა მაგრამ არ  დაიბეჭდა ბ, რადგან varით ცვლადით შქნნილი   ცვლადი არინ გლობალ. ხოლო  let ით  შექმნილს ვერ გაიტან სკოუპს გარეთ.

// let y = 5;

// {
//   let y = 15;
//   console.log(y);
// }

// console.log(y);

// პირველ  y არის გლობალ ცვლადი,  ხოლო მეორე block scoped variable, ჩვენ ჯერ {}-ს შიგნით ვაკონსოლოგებთ   yს, და  ვიღებთ შედეგს რადგან  ფრჩხილებს შგნით მხოლოდ ერთი  y არსებობს და მას აქვს ერთი მნიშნელობა, იგივე ლოგიკაა  გარეთა კონსოლ-ლოგზე, მისთის,არსებობს  მხოლოდ ერთი  y ცვლადი, რადგან   ის  ვერანაირად  ვერ მიწვდება {}-ს  შგნით არსებულს.

// let z = 1;

// function test() {
//   let z = 2;
//   console.log(z);
// }

// test();
// console.log(z);
// პირველი ცვლადი არის global varriable, მეორე block scoped  variable. ჯერ ვიძახებთ   ფუნქციას, რომელშც იქმნება ცვლადი და კონსოლლოგდება ის.  ხოლო მეორე  ცვლადს პირდაპირ  ვაკონსოლლოგებთ, რადგან გლობალურადარის შქემნილი   დაა მისთის ამ ცვლადს აქვს მხოლოდ ერთი მნიშნელობა.


// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);

//in for loop, we create i and console log it from 0 to 3 . so that will give us a result of 0,1 2. i is not exitent outside of  that for loop. so if we try calling it that will couse and error, bc i is not defined. this way we can use same variable for different loops without cousing an  error


let name = "Goga";

function changeName() {
  name = "Nika";
}

changeName();
console.log(name);

// answer will be nikqa, because we change the value  of an global variable inside of the function, and than  we call the  function,