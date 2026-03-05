// შექმენით მომხმარებლის ობიექტი, რომელსაც აქვს მომხმარებლის სახელი და ელფოსტა, მაგრამ არ აქვს როლი.
// დავალება: დესტრუქციის დროს დაამატე ცვლადი role ნაგულისხმევი მნიშვნელობით (მაგალითად: "guest"), იმ შემთხვევისთვის თუ ობიექტში არ არსებობს

let user = {
    name : 'shaalva',
    gmail  : 'shalvaRamishvili@gmail.com',
    role : undefined
}
const { name, gmail, role} = user

console.log( name, gmail, role)