// 
// 3)შექმენი 5 ცვლადი სადაც შეინახავ ნამბერ ტიპის მონაცემს მაგ:let num1 = 22 , შენი დავალებაა 5 ივე ცვლადში მყოფი ელემენტები გადააქციოთ string ტიპის მონაცემად და დააკონსოლლოგოთ 5 ივე მათგანი

var num1=232
var num2=434
var num3=24344
var num4=123
var num5=5678

console.log(String(num1))
console.log(String(num2))
console.log(String(num3))
console.log(String(num4))
console.log(String(num5))

// 4)კომენტარის სახით ახსენით თუ რა ლოგიკური ოპერატორები ვისწავლეთ და მოიყვანეთ თითოეულზე უთ ხუთი მაგალითი,ასევე კომენტარის სახით დაწერეთ თუ რა განსხვავებაა == და === შორის

//&& (AND), || (OR),

// &&  ოპერატორი - აბრუნებს true მხოლოდ მაშინ, როცა ორივე პირობა true-ა
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false
console.log(5 > 2 && 3 < 4);  // true

// || ოპერატორი - აბრუნებს true თუ რომელიმე პირობა true-ა
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false
console.log(true || true);    // true
console.log(5 < 2 || 3 < 4);  // true


// == ადარებს მნიშვნელობას, მაგრამ არ აქცევს ყურადღებას ტიპს (type coercion)
// === ადარებს როგორც მნიშვნელობას, ასევე ტიპს (strict equality)
console.log(5 == "5");        // true
console.log(5 === "5");       // false
console.log(true == 1);       // true
console.log(true === 1);      // false
console.log(null == undefined); // true
console.log(null === undefined); // false


// 
// 5)გვერდით მიუწერეთ თუ რა იქნება ქვემოთ მოცემული მაგალითების შედეგი

// 5>3 && 5 === 5 --> true    
// // true,true,true
// false && 10>45 --> false
// 4 != 5 && 50>124 --> false
// 4 < 1 && true -->false

console.log(5>3 && 5 === 5 ,false && 10>45 ,4 != 5 && 50>124 ,4 < 1 && true  )

// true || false --> true
// 4 === 6 || 5 == 5  --> true
// 5 > 3 || 9 === 9  --> true
// 4 < 24 || true -->true
console.log(true || false ,4 === 6 || 5 == 5 , 5 > 3 || 9 === 9 ,4 < 24 || true  )