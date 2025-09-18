// 3)მომხმარებელს შეეკითხეთ რიცხვი,შემდეგ 1 დან მომხმ შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვი 

// 4))მომხმარებელს შეეკითხეთ რიცხვი,შემდეგ 1 დან მომხმ შემოტანილ რიცხვამდე დაბეჭდეთ ლუწი რიცხვები

// 5)მომხმარებელს შეეკითხეთ რიცხვი,შემდეგ 1 დან მომხმ შემოტანილ რიცხვამდე დაბეჭდეთ კენტი რიცხვები 
 

// 7)100 დან ქვემოთ დაითვალეთ რიცხვები while loop ის დახმარებით

let userNum=Number(prompt('enter number'))
let  x = 0
while(x<=userNum){
    console.log(x)
    x++
}


let evenNum=Number(prompt('enter numbeer'))
let y=0
while(y<=evenNum){
    if (y %2=== 0){
        console.log(y)
        y++

    }
}


let oddNum=Number(prompt('enter numbeer'))
let  a=0    
while(a<=oddNum){
    if (a%2!=0){
        console.log(a)
        a++

    }
}

