// 3)მომხმარებელს შემოატანინეთ რაიმე რიცხვი,სანამ მომხმარებელი
//  არ შემოიტანს 0 იანს იქამდე გაუმეორეთ რომ თავიდან შემოიტანოს რიცხვი
let mustBeZero = Number(prompt("Enter 0 bro"));

while (mustBeZero !== 0) {         
    mustBeZero = Number(prompt("Enter 0 bro")); 
}

alert("Congrats! ");