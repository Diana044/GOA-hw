// 6)მომხმარებელს შეეკითხეთ რიცხვი,შემდეგ 1 დან მომხმ შემოტანილ რიცხვამდე დაბეჭდეთ  
//  რიცხვები დამიუწერეთ გვერდით ლუწია თუ კენტი


let number=Number(prompt('enter number'))
let even=0
while(even<= number ){
    if(even%2===0){
        console.log(even ,'is even')
    }
    else{
        console.log(even, 'is odd')
    }
    even++

}

// // 7)100 დან ქვემოთ დაითვალეთ რიცხვები while loop ის დახმარებით


let i=100

while(i>=0){
    console.log(i)
    i--
}