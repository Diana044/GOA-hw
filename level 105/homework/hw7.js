// 7)შექმენი ფუნქცია, რომელიც იღებს რიცხვების სიას და აბრუნებს ახალ სიას მხოლოდ იმ რიცხვებისგან შემდგარს, რომლებიც ერთდროულად ლუწებიც არიან და 5-ის ჯერადებიც,შემდეგ ამ სიაში მყოფი კენტი რიცხვების ჯამი იპოვეთ

function numbers(numList){
    let newList=[]
    for(let i=0;i<numList.length;i++){
        if(numList[i]%2==0 && numList[i]%5==0){
            newList.push(numList[i])
        }
    }
    i=0
    let oddSum=0
    while(i<numList.length){
        if(numList[i]%2!==0){
            oddSum+=numList[i]
        }
        i++
    }return [newList,oddSum]
}

console.log(numbers([10,30,50,3,657,11,15]))
