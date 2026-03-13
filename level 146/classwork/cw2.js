//  forEach  ფუნქციის გამოყენებით ეკრანზე გამოიტანე ლუწი რიცხვები კვადრატში აყვანილი
const numbers = [5, 10, 15, 20];

numbers.forEach((num)=>{
    if(num%2==0){
        console.log(num**2)
    }
})