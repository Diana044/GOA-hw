// 5)მომხმარებელს შემოატანინე ტექსტი:
// "car", "bus", "bike", "train"

// switch–case გამოყენებით დაბეჭდე შესაბამისი აღწერა.
// default შემთხვევაში → "უცნობი ტრანსპორტი".

let userInp =  prompt('enter  : "car", "bus", "bike", or "train" ')

switch(userInp){
    case "car" :
        console.log(`You entered ${userInp}`)
        break
    case "bus" :
        console.log(`You entered ${userInp}`)
        break
    case "bike" :
        console.log(`You entered ${userInp}`)
        break
    case "train" :
        console.log(`You entered ${userInp}`)
        break
    default:
        console.log(`You entered ${userInp}, its empty or icorrect`)
        break
}
