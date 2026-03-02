// 1)მომხმარებელს შემოატანინე რიცხვი (1–7).
// switch–case გამოყენებით გამოიტანე შესაბამისი კვირის დღე.
// თუ სხვა რიცხვია → "არასწორი დღე".

let  userInp=prompt('enter  1-7')
switch(userInp){
    case '1' :
        console.log('monday')
        break;
    case '2':
        console.log('tuesday')
        break;
    case '3':
        console.log('wendesday')
        break;
    case '4':
        console.log('thursday')
        break;
    case '5':
        console.log('friday')
        break;
    case '6':
        console.log('saturday')
        break;
    case '7':
        console.log('sunday')
        break;
    default:
        console.log("არასწორი დღე")
}



// 5)მომხმარებელს შემოატანინე ტექსტი:
// "car", "bus", "bike", "train"

// switch–case გამოყენებით დაბეჭდე შესაბამისი აღწერა.
// default შემთხვევაში → "უცნობი ტრანსპორტი".

// 6)მომხმარებელს შემოატანინე რიცხვი.
// switch(true) გამოყენებით განსაზღვრე:

// თუ არის 0

// თუ არის ლუწი

// თუ არის კენტი

// 7)ცვლადი role:
// შეამოწმე თუ ცვლადში ინახება შემდეგი მნშვნელობები გამოიტანე შესაბამისი ტექსტი

// "admin"

// "user"

// "guest"

// switch–case-ით განსაზღვრე წვდომა.
// თუ სხვა მნიშვნელობაა -> default ->
// "როლი არ არის განსაზღვრული"

// 8)მომხმარებელს შემოატანინე ფერი:
// "red", "green", "blue"

// switch–case-ით დაბეჭდე შესაბამისი ტექსტი.
// თუ სხვა ფერია → default →
// "ასეთი ფერი სისტემაში არ არის"





// <------single-line function----->

// 9)დაწერე single-line arrow function, რომელიც იღებს ორ რიცხვს და აბრუნებს მათ ჯამს.

// 10)დაწერე single-line arrow function, რომელიც იღებს რიცხვს და აბრუნებს:

// "ლუწი" თუ ლუწია
// "კენტი" თუ კენტია
// (გამოიყენე ternary)

// 11)დაწერე single-line arrow function, რომელიც აბრუნებს გადაცემული რიცხვის კვადრატს.

// 12)დაწერე single-line arrow function, რომელიც იღებს ტექსტს და აბრუნებს მის სიგრძეს

// 13)დაწერე single-line arrow function, რომელიც ტექსტს აბრუნებს მთლიანად დიდი ასოებით.

// 14)დაწერე single-line arrow function, რომელიც იღებს ასაკს და აბრუნებს

// "სრულწლოვანი" თუ >= 18
// "არასრულწლოვანი" თუ < 18

// 15)დაწერე single-line arrow function, რომელიც იღებს name და age-ს და აბრუნებს ობიექტს ამ ველებით