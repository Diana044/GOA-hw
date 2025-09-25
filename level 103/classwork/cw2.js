 // 2)შექმენი სია -->  [20 , "giorgi" , 16 , 60.7 , "tbilisi" , "jora"]

// შენი დავალებაა რომ ინდექსების დახმარებით გამოიტანო ყველა ელემენტი სიიდან და გამოიტანო კონსოლში while loop დახმარებით

// შენი დავალებაა რომ giorgi შეცვალო "irakli" ით ,16 შეცვალო 90 ით და jora შეცვალო givia თი,ამ ყველაფერს რომ შეცვლი გამოიტანე საბოლოო შეცვლილი სია

let list1= [20 , "giorgi" , 16 , 60.7 , "tbilisi" , "jora"]


let i=0
while(i<list1.length){
    console.log(list1[i])
    i++
}

list1[1]='irakli'
list1[2]= 90
list1[5]='givia'

console.log('shecvlili sia:', list1)