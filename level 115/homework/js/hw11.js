// 11)შექმენი პატარა “მათემატიკური თამაში”:
// დააგენერირე შემთხვევითი რიცხვი 1-დან 10-მდე.
// მომხმარებელს შემოატანინე რიცხვი.
// თუ მომხმარებლის რიცხვი დაემთხვა დაგენერირებულს — გამოიტანე "სწორია!",
// სხვა შემთხვევაში "ცდები!".

let random=Math.floor(Math.random()*10)

let userNum=Number(prompt('enter numberrr'))
if(userNum===random){
    console.log( "სწორია!")
}else{
    console.log("ცდები!")
}
console.log('random number:',random, 'your number:',userNum)