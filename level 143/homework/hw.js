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




