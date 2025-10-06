// 8)დაწერე ფუნქცია, რომელიც იღებს სახელების სიას და აბრუნებს ახალ სიას მხოლოდ იმ სახელებისგან შემდგარს, რომლებსაც სიგრძე 5-ზე მეტია და არის ლუწი.შემდეგ შეამოწმეთამ ახალ სიაში მყოფი სახელებიდან თუ რომელიმე იწყება ასო "ა" ზე ასეთი ელემენტები ამოშალეთ სიიდან(ამაში გამოიყენეთ splice ფუნქცია,თუ მიხვდებით როგორ)  
function func(names){
    let newList = []
    
    for(let i = 0; i < names.length; i++){
        if(names[i].length >5 && names[i].length % 2===0){
            newList.push(names[i])
        }
    }

    for(let i = newList.length - 1; i >= 0; i--){
        if(newList[i][0] === "ა"){
            newList.splice(i, 1)
        }
    }

    return newList
}

console.log(func(['ანანოო', 'გიორგიიო', 'მარაიმი','ანა','ანანან']))
