// // 2)მომხმარებელს შემოატანინე ორი რიცხვი,მომხმარებლის მიერ შემოტანილი პირველი რიცხვიდან მეორე რიცხვამდე იპოვეთ ყველა ლუწი რიცხვის ჯამი

let num1=Number(prompt('enter num1'))
let num2=Number(prompt('enter num2'))
sum=0
let i=start

while(i<=end){
    if(i%2===0){
        sum+=i
    }
    i++
}

console.log('ველა ლუწი რიცხვის ჯამი:',sum)



// for(i=num1; i<=num2;i++){
//     if(i%2===0){
//         sum+=i
//     }
// }