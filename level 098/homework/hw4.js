// 8)მომხმარებელს შემოატანინე ასაკი და სახელი,შემდეგ შეამოწმეთ --> თუ სახელი უდრის "nika" და ასაკი მეტია 18 ზე დაუკონსოლლოგეთ -->"your name is nika and you are adult" , ასევე შეამოწმეთ თუ შემოყვანილი სახელი უდრის "dorblavaso" და შემოტანილი ასაკი ნაკლებია 18 ზე მაშინ დაუკონსოლლოგეთ --> "You are dorbla and you are too young" სხვა შშემთხვევაში დაუკონსოლლოგეთ --> "you have weird name and age"

let userName=prompt('Enter your name', 'here...')
let userAge=Number(prompt('enter your age'))
if (userName.toLowerCase() == 'nika' && userAge>18){
    console.log("your name is nika and you are adult")
}else if(userName.toLowerCase()== "dorblavaso" && userAge <18){
    console.log("you have weird name and age")
}else{
    console.log('get out')
}