// 
// 3)შექმენი 5 ცვლადი სადაც შეინახავ ნამბერ ტიპის მონაცემს მაგ:let num1 = 22 , შენი დავალებაა 5 ივე ცვლადში მყოფი ელემენტები გადააქციოთ string ტიპის მონაცემად და დააკონსოლლოგოთ 5 ივე მათგანი

var num11=232
var num22=434
var num3=24344
var num4=123
var num5=5678

console.log(String(num11))
console.log(String(num22))
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

// 6)მომხმარებელს შემოატანინეთ რაიმე რიცხვი,გადააქციეთ მომხმარებლის შემოტანილი მნიშვნელობა number ად (იმიტომ რომ მომხმარებელს რომ შემოყავს რაიმე მნიშვნელობა მისი თავდაპირველი ტიპი არის string)შემდეგ შეამოწმეთ, თუ მომხმარებლის შემოტანილი რიცხვი არის მეტი 50 ზე და არის ლუწი დაუკონსოლლოგეთ --> "more than 50 and Even", ასევე შეამოწმეთ თუ რიცხვი ნაკლებია 50 ზე და მეტია 0 ზე და ასევე არის კენტი დაუკონსოლლოგეთ --> "This number is less than 50 and more than 0 and is also Odd" , სხვა შემთხვევაში დაუკონსოლლოგეთ ---> "this number is negative"

let userNumber=Number(prompt('enter number'))
if(userNumber>50 && userNumber %2===0){
    console.log("more than 50 and Even")
} else if(userNumber < 50 && userNumber >0 && userNumber %2===1){
    console.log("This number is less than 50 and more than 0 and is also Odd")
} else{"This numebr is negative"
    
}

