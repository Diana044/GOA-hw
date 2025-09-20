// // ```
// 1)მომხმარებელს შემოატანინე რაიმე რიცხვი,1 დან მომხმარებლის შემოტანილ რიცხვამდე დათვალე 
// თუ რამდენი ლუწი და რამდენი კენტი რიცხვია
let userNum = Number(prompt("Enter number"));
let even = 0;
let odd = 0;

let i = 1; 

while (i <= userNum) {
    if (i % 2 === 0) {
        even++
    } else {
        odd++
    }
    i++
}

console.log("Even numbers :", even);
console.log("Odd numbers :", odd);



