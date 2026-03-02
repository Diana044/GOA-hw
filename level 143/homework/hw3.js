// 3)მომხმარებელს შემოატანინე:

// პირველი რიცხვი

// ოპერატორი (+, -, *, /)

// მეორე რიცხვი

// switch–case გამოყენებით შეასრულე ოპერაცია.
// თუ ოპერატორი არასწორია → "არასწორი ოპერატორი".


let num1 = parseFloat(prompt("შემოიტანეთ პირველი რიცხვი:"))
let operator = prompt("შემოიტანეთ ოპერატორი (+, -, *, /):")
let num2 = parseFloat(prompt("შემოიტანეთ მეორე რიცხვი:"))

let result

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num2 !== 0 ? num1 / num2 : "ნულზე გაყოფა არ შეიძლება";
        break;
    default:
        result = "არასწორი ოპერატორი";
}

console.log( result)