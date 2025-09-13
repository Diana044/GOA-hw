// 2)მომხმარებელს შემოატანინეთ სახელი და რიცხვი,შემდეგ შეამოწმეთ,თუ მომხმარებლის მიერ შემოტანილი სახელი არის "გიორგი" და მომხმარებლის მიერ შემოტანილი რიცხვი არის 18 ზე მეტი მაშნ დაუკონსოლლოგეთ "your name is giorgi and you are adult" თუ მომხმარებლის მიერ შემოტანილი სახელი არის ნიკა და ასაკი არის 18 ზე ნაკლები და 11 ზე მეტი დაუკონსოლლოგეთ რომ "your name is nika and you are younger" თუ მომხმარებლის მიერ შემოტანილი სახელი არის "saba"
//  ან "irakli" და ასაკი არის 11 ზე ნაკლები და 5 ზე მეტი მაშინ დაუკონსოლლოგეთ რომ "you have nice name but you are too young" სხვა შემთხვევაში დაუპრინტე რომ you are not born yet D

let userName = prompt('enter name')
let userNumber = Number(prompt('enter number'))
if (
    (userName.toLowerCase() === 'giorgi' || userName === 'გიორგი') &&
    userNumber > 18
) {
    console.log('your name is giorgi and you are adult');
} else if (
    (userName.toLowerCase() === 'nika' || userName === 'ნიკა') &&
    userNumber < 18 &&
    userNumber > 11
) {
    console.log("your name is nika and you are younger");
} else if (
    (
        userName.toLowerCase() === 'saba' ||
        userName.toLowerCase() === 'irakli' ||
        userName === 'საბა' ||
        userName === 'ირაკლი'
    ) &&
    userNumber < 11 &&
    userNumber > 5
) {
    console.log('you have nice name but you are too young');
} else {
    console.log('"you are not born yet D".');
}


