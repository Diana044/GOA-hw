// შექმენით მანქანის ობიექტი, რომელსაც აქვს ბრენდი, მოდელი და გამოშვების წელი.
// დავალება: დესტრუქციის დროს ბრენდისა და მოდელის ცვლადებს შეუცვალე სახელები, ხოლო წელი უცვლელად დატოვე.

const car = {
    brand : 'mercedes',
    model : 'CLS',
    date : '2019'
}
const {brand: brand1,model:model1 } = car 
const {date} = car

console.log( brand1,model1 ,date)

