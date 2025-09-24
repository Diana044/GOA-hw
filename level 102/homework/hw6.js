// 6)ფუნქციამ მიიღოს ორი რიცხვი (start, end).
// for loop-ით შეკრიბოს ყველა რიცხვი ამ დიაპაზონში.
// თუ ჯამი > 100 → "დიდი ჯამი"
// სხვაგვარად → "პატარა ჯამი".

function nums(start,end){
    let sum=0
    for(let i=start; i<=end; i++){
        sum+=i
    }if(sum>100){
        return 'didi qvabi'
    }else{
        return 'patara jami'
    }

}

console.log(nums(22,55))
console.log(nums(2,7))
console.log(nums(22322,595))
console.log(nums(-22,55))
console.log(nums(2,545))