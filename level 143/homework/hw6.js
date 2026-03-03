// 6)მომხმარებელს შემოატანინე რიცხვი.
// switch(true) გამოყენებით განსაზღვრე:
// თუ არის 0
// თუ არის ლუწი
// თუ არის კენტი


let userNum =  Number(prompt('enter  number')) 


switch(true){
    case (userNum ===  0):
        console.log('your  number is' +  userNum)
        break
    case (userNum %2 ===0 ):
        console.log('your  number is even')
        break
     case (userNum %2 ===1):
        console.log('your number is odd')
        break
    default:
        console.log('ivalid number')
    
}