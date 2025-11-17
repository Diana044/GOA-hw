// 8)შექმენი 5 ცალი i თეგი და მოათავსე რაიმე ტექსტი შიგნით,შენი დავცალებაა რომ წამოიღო ყველა i თეგი და შეინახო ცვლადში,შენი დავალებააა რომ ყველა i თეგში მყოფი ტექსტი textContent ის გამოყენებით შეცვალო --> "viri" ით /გამოიყენე while loop/for loop ორივე

const italic=document.getElementsByTagName('i')

for(let i of italic){
    i.textContent='viri'
}
let i =0

while(i<italic.length){
    italic[i].textContent='viri'
    i++
}