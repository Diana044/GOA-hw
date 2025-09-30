// 7)მომხმარებელს შემოატანინეთ ადამიანის სახელი,შემდეგ შეამოწმეთ --->  თუ ცვლადში შენახული მნიშვნელობა უდრის თქვენს სახელს დაუკონსოოლოგეთ --> "we have same names" , თუ მომხმარებლის შემოტანილი მნიშვნელობა უდრის "gabrieli" ის მაშინ დაუკონსოლლოგეთ --> "you have my mentor's name" , ასევე შეამოწმე თუ მომხმარებლის მიერ შემოტანილი სახელი უდრის "goga" ს მაშინ დაუკონსოლლოგეთ --> "You have my group leader's name" ,სხვა შემთხვევაში დაუკონსოლლოგეთ  --> "Who the hell are you?"

myName='Diana'
let userAnswer = prompt('Enter your name');

if (userAnswer === null) {
    console.log("Prompt was cancelled.");
} else if (userAnswer === myName || userAnswer.toLowerCase() === 'diana') {
    console.log("we have same names");
} else if (userAnswer.toLowerCase() === 'gabrieli') {
    console.log("you have my mentor's name");
} else if (userAnswer.toLowerCase() === 'goga') {
    console.log("You have my group leader's name");
} else {
    console.log("Who the hell are you?");
}