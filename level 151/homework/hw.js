// const  display=document.getElementById('display')


function   append(input){
    display.value+=input
}

function   clearDisplay(input){
    display.value=''
}

function   canculate(input){
    display.value=''
}















// const display = document.querySelector('.current');
// const container = document.querySelector('.buttons');

// let firstNumber = "";
// let operator = "";
// let secondNumber = "";

// container.addEventListener('click', function(e) {
//     const clickedElement = e.target;
//     if (clickedElement.tagName !== 'BUTTON') return;

//     const val = clickedElement.innerText;

//     // 1. ALL CLEAR
//     if (val === "AC") {
//         firstNumber = "";
//         operator = "";
//         secondNumber = "";
//         display.innerText = "0";
//         return;
//     }

//     // 2. BACKSPACE (One by one)
//     if (val === "⌫") {
//         if (secondNumber !== "") {
//             secondNumber = secondNumber.slice(0, -1);
//         } else if (operator !== "") {
//             operator = "";
//         } else {
//             firstNumber = firstNumber.slice(0, -1);
//         }
//         display.innerText = (firstNumber + operator + secondNumber) || "0";
//         return;
//     }

//     // 3. PLUS/MINUS
//     if (val === "+/-") {
//         if (secondNumber !== "") {
//             secondNumber = (Number(secondNumber) * -1).toString();
//         } else if (firstNumber !== "") {
//             firstNumber = (Number(firstNumber) * -1).toString();
//         }
//         display.innerText = (firstNumber + operator + secondNumber) || "0";
//         return;
//     }

//     // 4. PERCENTAGE
//     if (val === "%") {
//         if (secondNumber !== "") {
//             secondNumber = (Number(secondNumber) / 100).toString();
//         } else if (firstNumber !== "") {
//             firstNumber = (Number(firstNumber) / 100).toString();
//         }
//         display.innerText = (firstNumber + operator + secondNumber) || "0";
//         return;
//     }

//     // 5. OPERATORS (Check for 'x')
//     if (val === "+" || val === "−" || val === "x" || val === "÷") {
//         if (firstNumber !== "") {
//             operator = val; 
//             display.innerText = firstNumber + operator;
//         }
//         return;
//     }

//     // 6. EQUALS (The Math)
//     if (val === "=") {
//         if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
//             let num1 = Number(firstNumber);
//             let num2 = Number(secondNumber);
//             let result = 0;

//             if (operator === "+") result = num1 + num2;
//             if (operator === "−") result = num1 - num2;
//             if (operator === "x") result = num1 * num2; // Computer uses *
//             if (operator === "÷") result = num1 / num2;

//             display.innerText = result;
            
//             // Set up for next calc
//             firstNumber = result.toString();
//             operator = "";
//             secondNumber = "";
//         }
//         return;
//     }

//     // 7. NUMBERS AND DECIMAL
//     if (operator === "") {
//         if (val === "." && firstNumber.includes(".")) return;
//         firstNumber = firstNumber + val;
//         display.innerText = firstNumber;
//     } else {
//         if (val === "." && secondNumber.includes(".")) return;
//         secondNumber = secondNumber + val;
//         display.innerText = firstNumber + operator + secondNumber;
//     }
// });