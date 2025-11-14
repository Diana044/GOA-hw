// 4)შექმენით 4 ცალი h2 და ჩაწერე შიგნით რაიმე მტექსტები,შენი დავალებაა რომ წამოიღო ჯავასკრიპტში ეს ელემენტები TagName ის გამოყენებით და შეინახო ცვლადში,შენი დავალებაა რომ თითეული h2 გამოიტანო კონსოლში ინდექსების გამოყენებით

let headings=document.getElementsByTagName('h2')
console.log(headings)
console.log(
    headings[0],
    headings[1],
    headings[2],
    headings[3],

)