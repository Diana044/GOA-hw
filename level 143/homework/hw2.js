// 2)მომხმარებელს შემოატანინე თვის ნომერი (1–12).
// switch–case გამოყენებით განსაზღვრე სეზონი:

// 12,1,2 → ზამთარი

// 3,4,5 → გაზაფხული

// 6,7,8 → ზაფხული

// 9,10,11 → შემოდგომა

let userMonth=prompt('enter number')

switch(userMonth){
    case '12':
    case '1':
    case '2':
        console.log('winter')
        break;
    case '3':
    case '4':
    case '5':
        console.log('spring')
         break;
    case '6':
    case '7':
    case '8':
        console.log('summer')
         break;
    case '9':
    case '10':
    case '11':
        console.log('fall')
        break;
    default:
        console.log('wrong')
}