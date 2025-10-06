// 5)შექმენი ფუნქცია რომელიც იღებს სტრინგების სიას,შენი დავალებაა რომ შეამოწმო,თუ რომელიმე სტრინგის სიგრძე არის ლუწი რიცხვისგან შემდგარი მაშინ ასეთი სახელები ჩაამატეთ ახალ სიაში,ხოლო თუ რომელიმე სტრინგის სიგრძე არის კენტი რიცხვისგან შემდგარი ასეთი სტრინგები შეცვალე false მნიშვნელობით

function func(strList){
    let newList=[]
    for( let i=0; i<strList.length;i++){
        if (strList[i].length %2==0){
            newList.unshift(strList[i])
        }else{
            strList[i]=false
        }
    } return newList, strList
}
console.log(func(['dina','carr','caaat','cow','elephant','phone']))