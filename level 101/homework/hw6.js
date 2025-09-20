// 6)მომხმარებელს შემოატანინე რიცხვი,სანამ მომხმარებელი არ შემოიტანს 0 იანს იქამდე  შეამოწმეთ -->თუ მომხმარებლის შემოტანილი რიცხვი არის უარყოფითი დაუკონსოლლოგეთ --> "negative number" , თუ მომხმარებელმა შემოიტანა დადებითი რიცხვი დაუკონსოლლოგეთ --> "You entered posotive number" ,ამის შემდეგ კი თავიდან მოსთხოვეთ რომ შშემოიტანოს რიცხვი მომხმარებელმა,თუ შემოიტანა მომხმარებელმა 0 ეს იმას ნიშნავს რომ ვაილ ლუპი არ იმუშავებს და ქვემოთ მის გარეთ დაუკონსოლლოგეთ -- > "you guessed the number,the loop is over" ```\

let userNumber=Number(prompt('enter number'))
let num=0  

while(userNumber!=num){
    alert('wrong  answer loser')
    if(userNumber<0){
        console.log("negative number" )
    }else if(userNumber>0){
        console.log('posotive number')
    } alert('"asking one more time! "')
    userNumber=Number(prompt('enter number'))
}

console.log(
     "you guessed the number,the loop is over"
)