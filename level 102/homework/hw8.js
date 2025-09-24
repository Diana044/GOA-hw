// 8)ფუნქციამ მიიღოს რიცხვი(პარამეტრი) , while loop ის გამოყენებით შენი დავა;ებაა 1 დან პარამეტრშ გადაცემულ რიცხვამდე დაითვალო ყველა კენტი რიცხვის და ასევე ყველა ლუწი რიცხვის რაოდენობა ცალ ცალკე,გამოიძახე ფუნქცია რამდენჯერმე გადაეცი განსხვავებული მნიშვნელობები

function  number(num){
    let i=0
    let sumEvens=0
    let sumOdds=0

    while(i<=num){
        if(i%2===0){
            sumEvens++
        }else{
            sumOdds++
        }
        i++
    }
    return 'there is '+sumEvens+ ' even numbers and ' + sumOdds +' odd numbers'
}

console.log(number(44))
console.log(number(4432))
console.log(number(4))

