// 9)შექმენი ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია,შენი დავალებაა რომ გაიგო ამ სიაში მყოფი ლუწი რიცხვების რაოდენობა და კენტი რიცხვების ჯამი

function list(arr){
    let sumStr=0
    let sumNum=0
    let i=0
    while(i<arr.length){
        if(arr[i]%2 === 0){
            sumStr++
        }else{
            sumNum+=arr[i]
        }
        i++
    }return sumStr+ sumNum
}

console.log(list([33,43,55,33,31,2,1]))