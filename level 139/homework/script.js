// 1)შექმენი ფუნქცია checkNumber(num)
// პარამეტრი: num
// თუ რიცხვი დადებითია → დააბრუნოს "Positive"
// თუ უარყოფითია → "Negative"
// თუ 0-ია → "Zero"
// გამოიყენე ternary operator

function checkNumber(num){
    num>0? console.log('positive'):
    num<0? console.log('negative'):
    console.log('0')
}
checkNumber(6)
checkNumber(-6)
checkNumber(0)


// 2)შექმენი ფუნქცია gradeCategory(score)
// 90+ → "Excellent"
// 75–89 → "Good"
// 50–74 → "Average"
// 0–49 → "Fail"
// თუ უარყოფითი ან 100-ზე მეტი → "Invalid score"
// გამოიყენე მხოლოდ ternary ოპერატორები.
// გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე

console.log('-------------------------------')
function gradeCategory(score){
    return score>=90? 'Excellent':
        score>=75? "Good":
        score>=50? "Average":
        score>=0? "Fail":
        'invalid'
}

console.log(gradeCategory(91))
console.log(gradeCategory(79))
console.log(gradeCategory(66))
console.log(gradeCategory(0))
console.log(gradeCategory(-22))


console.log('-------------------------------')

// 3)შექმენი ფუნქცია triangleType(a, b, c)
// თუ ყველა გვერდი ტოლია → "Equilateral"
// თუ ორი გვერდი ტოლია → "Isosceles"
// თუ ყველა განსხვავებულია → "Scalene"
// გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე

function  triangleType(a, b, c){
   return  a===b && a===c && b===c ? "Equilateral":
        a===b || a===c || b===c ? "Isosceles":
        "Scalene"
       
}
console.log(triangleType(2,2,2))
console.log(triangleType(2,23,2))
console.log(triangleType(2,5,4))



// 4)შექმენი ფუნქცია numberStatus(num)
// თუ ლუწი და დადებითია → "Positive Even"
// თუ ლუწი და უარყოფითია → "Negative Even"
// თუ კენტი და დადებითია → "Positive Odd"
// თუ კენტი და უარყოფითია → "Negative Odd"
// თუ 0 → "Zero"
// გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე
console.log('-------------------------------')

function  numberStatus(num){
    return num % 2 === 0 && num > 0 ? "Positive Even" :
        num % 2 === 0 && num < 0 ? "Negative Even" :
        num % 2 === 1 && num > 0 ? "Positive Odd" :
        num % 2 !== 0 && num  < 0 ? "Negative Odd":
        'Zero'
}

console.log(numberStatus(10))
console.log(numberStatus(-10))
console.log(numberStatus(9))
console.log(numberStatus(-9))
console.log(numberStatus(0))


// 5)შექმენი ფუნქცია login(username, password)
// სწორი მონაცემები:
// username: "admin"
// password: "1234"
// მომხმარებელს შემოატანინე username და password და გადაეცით ფუნქციას არგუმენტად
// შეამოწმე:
// ორივე თუ სწორია → "Welcome"
// username სწორია, password არა → "Wrong password"
// სხვა შემთხვევაში → "Access denied"

function login(username=prompt('enter username'), password=prompt('enter password')){
    
    return username === 'admin'&&  password === '1234' ? 'Welcome' :
        username === 'admin'&&  password !== '1234' ? 'Wrong password' :
        username !== 'admin'&&  password === '1234' ? 'Wrong username' :
        "Access denied"
}

console.log(login())