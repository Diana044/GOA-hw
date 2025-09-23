// 2)ფუნქციამ მიიღოს სამი რიცხვი (a, b, c) და if else-ებით განსაზღვროს რომელი არის ყველაზე დიდი.
// დააბრუნოს შედეგი.
function nums(a,b,c){
    let biggest=0
    if(a>=b && a>=c){
        biggest+=a
    }else if(b>=a && b>=c){
        biggest+=b
    }else{
        biggest+=c
    }
    return biggest
}

console.log(nums(2,43,33))
