// 4)მომხმარებელს შემოატანინე ქულა (0–100).
// switch(true) <--მოიძიეთ ///// გამოიყენე და დააბრუნე:
// 90–100 →A 
// 80–89 → B
// 70–79 → C
// 60–69 → D
// <60 → F




let  userPoint = Number(prompt('enter score 0-100'))

switch(true){
    case(userPoint>100 ||  userPoint<0):
        console.log('invalid score')
        break
    case (userPoint>=90):
        console.log('A')
        break
    case(userPoint>=80):
        console.log('B')
        break
    case(userPoint>=70):
        console.log('C')
        break
    case(userPoint>=60):
        console.log('C')
        break
    case(userPoint<60):
        console.log('F')
        break
    default:
        console.log('invalid score')
}