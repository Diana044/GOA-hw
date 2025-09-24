// 7)ფუნქციამ მიიღოს ორი რიცხვი (start, end) და for loop-ით შეაჯამოს მხოლოდ კენტი რიცხვები.
// თუ ჯამი > 50 → "დიდი ჯამი"
// სხვაგვარად → "პატარა ჯამი".

function nums(start, end){
    let odd=0
    for(let i=start; i<=end; i++){
        if (i%2===1){
            odd+=i
        }
    }if (odd>50){
        return 'didi jami'
    }else{
        return 'patara jami'
    }
}

console.log(nums(2,434342))
console.log(nums(2,5))

