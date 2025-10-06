// 1)დაწერე ფუნქცია, რომელიც იღებს არგუმენტად რიცხვების სიას და ახალ სიაში ამატებს მხოლოდ ლუწ რიცხვებს. შემდეგ იპოვეთ ამ სიაში მყოფი რიცხვების ჯამი
function func(numbersList){
    let evensList=[]
    let i=0
    while(i<numbersList.length){
        if(numbersList[i]%2==0){
            evensList.push(numbersList[i])
        }
        i++
    }
    let sum=0
    for(i=0;i<evensList.length;i++){
        sum+=evensList[i]
    }
    return sum
}

console.log(func([34,45,2,564,99,5]))


